///|
/// How two frames are combined by `join`.
pub(all) enum JoinType {
  /// Only rows with a match on both sides.
  Inner
  /// Every left row; unmatched right cells become `Null`.
  Left
  /// Every right row; unmatched left cells become `Null`.
  Right
  /// Every row from both sides.
  Outer
} derive(Eq, @debug.Debug)

///|
/// A string key for row `i` of `frame`, built from the given key columns.
fn row_key(frame : DataFrame, i : Int, keys : Array[String]) -> String {
  let sb = StringBuilder::StringBuilder()
  for k in keys {
    match frame.column(k) {
      Some(col) => sb.write_string(col.get(i).key_repr())
      None => sb.write_string("?;")
    }
  }
  sb.to_string()
}

///|
/// Index the rows of `frame` by their key, preserving row order.
fn index_rows(
  frame : DataFrame,
  keys : Array[String],
) -> Map[String, Array[Int]] {
  let index : Map[String, Array[Int]] = Map([])
  for i = 0; i < frame.nrows(); i = i + 1 {
    let key = row_key(frame, i, keys)
    match index.get(key) {
      Some(rows) => rows.push(i)
      None => index[key] = [i]
    }
  }
  index
}

///|
/// The matching `(left_row, right_row)` pairs for a join. A row index of `-1`
/// means "no row on that side".
fn join_pairs(
  left : DataFrame,
  right : DataFrame,
  on : Array[String],
  how : JoinType,
) -> (Array[Int], Array[Int]) {
  let left_rows : Array[Int] = []
  let right_rows : Array[Int] = []
  if how is Right {
    let index = index_rows(left, on)
    for j = 0; j < right.nrows(); j = j + 1 {
      match index.get(row_key(right, j, on)) {
        Some(rows) =>
          for i in rows {
            left_rows.push(i)
            right_rows.push(j)
          }
        None => {
          left_rows.push(-1)
          right_rows.push(j)
        }
      }
    }
  } else {
    let index = index_rows(right, on)
    let right_matched : Array[Bool] = Array::make(right.nrows(), false)
    for i = 0; i < left.nrows(); i = i + 1 {
      match index.get(row_key(left, i, on)) {
        Some(rows) =>
          for j in rows {
            left_rows.push(i)
            right_rows.push(j)
            right_matched[j] = true
          }
        None =>
          if how is Left || how is Outer {
            left_rows.push(i)
            right_rows.push(-1)
          }
      }
    }
    if how is Outer {
      for j = 0; j < right.nrows(); j = j + 1 {
        if !right_matched[j] {
          left_rows.push(-1)
          right_rows.push(j)
        }
      }
    }
  }
  (left_rows, right_rows)
}

///|
/// Read one column from one frame for the given row positions. A position of
/// `-1` means the row has no counterpart on this side, so the cell is `Null`.
fn gather_side(frame : DataFrame, name : String, rows : Array[Int]) -> Series {
  let values : Array[Value] = []
  for r in rows {
    if r < 0 {
      values.push(Null)
    } else {
      values.push(
        match frame.column(name) {
          Some(col) => col.get(r)
          None => Null
        },
      )
    }
  }
  Series::new(name, values)
}

///|
/// Read a join key. The left frame supplies the cell whenever the pair has a
/// left row; only a right-only pair (produced by the right and outer joins)
/// falls back to the right frame.
fn gather_key(
  left : DataFrame,
  right : DataFrame,
  name : String,
  left_rows : Array[Int],
  right_rows : Array[Int],
) -> Series {
  let values : Array[Value] = []
  for i = 0; i < left_rows.length(); i = i + 1 {
    let frame = if left_rows[i] >= 0 { left } else { right }
    let row = if left_rows[i] >= 0 { left_rows[i] } else { right_rows[i] }
    values.push(
      match frame.column(name) {
        Some(col) => col.get(row)
        None => Null
      },
    )
  }
  Series::new(name, values)
}

///|
/// Join two frames on one or more shared key columns.
///
/// `on` must name columns present in both frames. When a non-key column exists
/// on both sides, the right-hand one is suffixed with `_right` in the result,
/// so no data is silently dropped. The output column order is: the key columns,
/// the remaining left columns, then the remaining right columns.
pub fn DataFrame::join(
  self : DataFrame,
  other : DataFrame,
  on : Array[String],
  how? : JoinType = Inner,
) -> DataFrame raise DataFrameError {
  for k in on {
    if !self.has_column(k) {
      error("join key not found in left frame: \{k}")
    }
    if !other.has_column(k) {
      error("join key not found in right frame: \{k}")
    }
  }
  // Work out the right-hand output names, remembering the source column each
  // one is read from.
  let right_plan : Array[(String, String)] = []
  for name in other.columns() {
    if on.contains(name) {
      continue
    }
    let out_name = if self.has_column(name) { name + "_right" } else { name }
    for (taken, _) in right_plan {
      if taken == out_name {
        error("ambiguous column after join: \{out_name}")
      }
    }
    if self.has_column(out_name) && out_name != name {
      error("ambiguous column after join: \{out_name}")
    }
    right_plan.push((out_name, name))
  }
  let (left_rows, right_rows) = join_pairs(self, other, on, how)
  let columns : Array[Series] = []
  for k in on {
    columns.push(gather_key(self, other, k, left_rows, right_rows))
  }
  for name in self.columns() {
    if on.contains(name) {
      continue
    }
    columns.push(gather_side(self, name, left_rows))
  }
  for (out_name, source_name) in right_plan {
    let gathered = gather_side(other, source_name, right_rows).to_array()
    columns.push(Series::new(out_name, gathered))
  }
  DataFrame::new(columns)
}

///|
/// Stack frames vertically: the result has one row per input row, and the
/// column set is the union of the inputs in first-seen order. A column missing
/// from an input contributes `Null` for that input's rows.
pub fn DataFrame::concat_rows(frames : Array[DataFrame]) -> DataFrame {
  if frames.length() == 0 {
    return DataFrame::empty()
  }
  let names : Array[String] = []
  for f in frames {
    for name in f.columns() {
      if !names.contains(name) {
        names.push(name)
      }
    }
  }
  let columns : Array[Series] = []
  for name in names {
    let values : Array[Value] = []
    for f in frames {
      match f.column(name) {
        Some(col) => values.append(col.to_array())
        None =>
          for _i = 0; _i < f.nrows(); _i = _i + 1 {
            values.push(Null)
          }
      }
    }
    columns.push(Series::new(name, values))
  }
  { columns, }
}

///|
/// Place frames side by side. All frames must have the same number of rows and
/// pairwise distinct column names.
pub fn DataFrame::concat_columns(
  frames : Array[DataFrame],
) -> DataFrame raise DataFrameError {
  match frames.get(0) {
    None => DataFrame::empty()
    Some(first) => {
      let n = first.nrows()
      let columns : Array[Series] = []
      for f in frames {
        if f.nrows() != n {
          error("cannot place \{f.nrows()} rows beside \{n} rows")
        }
        for col in f.series() {
          columns.push(col)
        }
      }
      DataFrame::new(columns)
    }
  }
}

///|
/// Keep the first occurrence of each distinct combination of `columns`.
fn DataFrame::distinct_rows(
  self : DataFrame,
  columns : Array[String],
) -> DataFrame {
  let seen : Map[String, Unit] = Map([])
  let keep : Array[Int] = []
  for i = 0; i < self.nrows(); i = i + 1 {
    let key = row_key(self, i, columns)
    if !seen.contains(key) {
      seen[key] = ()
      keep.push(i)
    }
  }
  self.take_rows(keep)
}

///|
/// Keep the first occurrence of each distinct row. Row equality is by cell
/// value, comparing across every column.
pub fn DataFrame::distinct(self : DataFrame) -> DataFrame {
  self.distinct_rows(self.columns())
}

///|
/// Keep the first occurrence of each distinct combination of `columns`.
pub fn DataFrame::distinct_by(
  self : DataFrame,
  columns : Array[String],
) -> DataFrame raise DataFrameError {
  for c in columns {
    if !self.has_column(c) {
      error("no such column: \{c}")
    }
  }
  self.distinct_rows(columns)
}

///|
/// Drop every row that has a `Null` in any of `columns`. With no `columns`,
/// a row is dropped when any cell anywhere is `Null`.
pub fn DataFrame::drop_nulls(
  self : DataFrame,
  columns? : Array[String],
) -> DataFrame raise DataFrameError {
  let cols = match columns {
    Some(c) => c
    None => self.columns()
  }
  for c in cols {
    if !self.has_column(c) {
      error("no such column: \{c}")
    }
  }
  let keep : Array[Int] = []
  for i = 0; i < self.nrows(); i = i + 1 {
    let mut complete = true
    for c in cols {
      match self.column(c) {
        Some(col) => if col.get(i).is_null() { complete = false }
        None => ()
      }
    }
    if complete {
      keep.push(i)
    }
  }
  self.take_rows(keep)
}

///|
/// Replace the `Null` cells of one column with `value`.
pub fn DataFrame::fill_null(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.map_column(column, v => if v.is_null() { value } else { v })
}

///|
/// Replace the `Null` cells of every column with `value`.
pub fn DataFrame::fill_null_all(self : DataFrame, value : Value) -> DataFrame {
  let columns = self
    .columns()
    .map(name => {
      match self.column(name) {
        Some(col) =>
          Series::new(
            name,
            col.to_array().map(v => if v.is_null() { value } else { v }),
          )
        None => Series::new(name, [])
      }
    })
  { columns, }
}

///|
/// Convert every cell of a column to `dtype`. Cells that cannot be converted
/// become `Null` (see `Value::cast`).
pub fn DataFrame::cast(
  self : DataFrame,
  column : String,
  dtype : DataType,
) -> DataFrame raise DataFrameError {
  self.map_column(column, v => v.cast(dtype))
}
