///|
/// A read-only view of a single row of a `DataFrame`, handed to predicates by
/// `filter` and `sort_by`.
pub struct Row {
  df : DataFrame
  index : Int
} derive(@debug.Debug)

///|
/// The position of this row in its source frame.
pub fn Row::index(self : Row) -> Int {
  self.index
}

///|
/// The value of `column` in this row, or `None` if the column does not exist.
pub fn Row::get(self : Row, column : String) -> Value? {
  match self.df.column(column) {
    Some(s) => Some(s.get(self.index))
    None => None
  }
}

///|
pub fn Row::get_int(self : Row, column : String) -> Int? {
  match self.get(column) {
    Some(v) => v.as_int()
    None => None
  }
}

///|
pub fn Row::get_double(self : Row, column : String) -> Double? {
  match self.get(column) {
    Some(v) => v.as_double()
    None => None
  }
}

///|
pub fn Row::get_bool(self : Row, column : String) -> Bool? {
  match self.get(column) {
    Some(v) => v.as_bool()
    None => None
  }
}

///|
pub fn Row::get_string(self : Row, column : String) -> String? {
  match self.get(column) {
    Some(v) => v.as_string()
    None => None
  }
}

///|
/// A column-oriented, in-memory table of typed values.
pub struct DataFrame {
  columns : Array[Series]
} derive(Eq, @debug.Debug)

///|
/// An empty frame with no columns and no rows.
pub fn DataFrame::empty() -> DataFrame {
  { columns: [], }
}

///|
/// Build a frame from a list of columns. All columns must have the same length
/// and unique names, otherwise a `DataFrameError` is raised.
pub fn DataFrame::new(
  columns : Array[Series],
) -> DataFrame raise DataFrameError {
  match columns.get(0) {
    None => { columns, }
    Some(first) => {
      let n = first.len()
      let seen : Map[String, Unit] = Map([])
      for s in columns {
        if s.len() != n {
          error("column \{s.name()} has \{s.len()} cells, expected \{n}")
        }
        if seen.contains(s.name()) {
          error("duplicate column name: \{s.name()}")
        }
        seen[s.name()] = ()
      }
      { columns, }
    }
  }
}

///|
/// The number of rows.
pub fn DataFrame::nrows(self : DataFrame) -> Int {
  match self.columns.get(0) {
    Some(c) => c.len()
    None => 0
  }
}

///|
/// The number of columns.
pub fn DataFrame::ncols(self : DataFrame) -> Int {
  self.columns.length()
}

///|
/// The column names, in order.
pub fn DataFrame::columns(self : DataFrame) -> Array[String] {
  self.columns.map(s => s.name())
}

///|
/// Whether a column with this name exists.
pub fn DataFrame::has_column(self : DataFrame, name : String) -> Bool {
  match self.column(name) {
    Some(_) => true
    None => false
  }
}

///|
/// The column named `name`, or `None` if it does not exist.
pub fn DataFrame::column(self : DataFrame, name : String) -> Series? {
  self.columns.iter().find_first(s => s.name() == name)
}

///|
/// The value at `(row, column)`, or `None` if the column does not exist.
pub fn DataFrame::get(self : DataFrame, row : Int, column : String) -> Value? {
  match self.column(column) {
    Some(s) => Some(s.get(row))
    None => None
  }
}

///|
/// A `Row` view of row `i`.
pub fn DataFrame::row(self : DataFrame, i : Int) -> Row {
  { df: self, index: i, }
}

///|
/// The series (columns) that make up this frame.
pub fn DataFrame::series(self : DataFrame) -> Array[Series] {
  self.columns
}

///|
/// Select a subset of columns (in the given order). Raises `DataFrameError`
/// when a requested column does not exist.
pub fn DataFrame::select(
  self : DataFrame,
  names : Array[String],
) -> DataFrame raise DataFrameError {
  DataFrame::new(
    names.map(n => {
      match self.column(n) {
        Some(s) => s
        None => error("no such column: \{n}")
      }
    }),
  )
}

///|
/// Drop the given columns.
pub fn DataFrame::drop(self : DataFrame, names : Array[String]) -> DataFrame {
  { columns: self.columns.filter(s => !names.contains(s.name())), }
}

///|
/// Keep the rows for which `pred` returns true.
pub fn DataFrame::filter(self : DataFrame, pred : (Row) -> Bool) -> DataFrame {
  let n = self.nrows()
  let indices : Array[Int] = []
  for i = 0; i < n; i = i + 1 {
    if pred(self.row(i)) {
      indices.push(i)
    }
  }
  self.take_rows(indices)
}

///|
/// Keep only rows whose positions are in `indices`.
fn DataFrame::take_rows(self : DataFrame, indices : Array[Int]) -> DataFrame {
  let cols = self.columns.map(s => {
    Series::new(s.name(), indices.map(i => s.get(i)))
  })
  { columns: cols, }
}

///|
/// The first `n` rows (default 5).
pub fn DataFrame::head(self : DataFrame, n? : Int = 5) -> DataFrame {
  self.slice(end=n)
}

///|
/// The last `n` rows (default 5).
pub fn DataFrame::tail(self : DataFrame, n? : Int = 5) -> DataFrame {
  let start = self.nrows() - n
  self.slice(start=if start < 0 { 0 } else { start })
}

///|
/// A slice of rows `[start, end)` (both clamped to the frame size).
pub fn DataFrame::slice(
  self : DataFrame,
  start? : Int,
  end? : Int,
) -> DataFrame {
  let n = self.nrows()
  let s = match start {
    Some(v) => if v < 0 { 0 } else { v }
    None => 0
  }
  let e = match end {
    Some(v) => if v > n { n } else { v }
    None => n
  }
  let indices : Array[Int] = []
  for i = s; i < e; i = i + 1 {
    indices.push(i)
  }
  self.take_rows(indices)
}

///|
/// Sort by a column. Raises `DataFrameError` when the column does not exist.
pub fn DataFrame::sort_by(
  self : DataFrame,
  name : String,
  ascending? : Bool = true,
) -> DataFrame raise DataFrameError {
  let col = match self.column(name) {
    Some(c) => c
    None => error("no such column: \{name}")
  }
  let n = self.nrows()
  let indices : Array[Int] = []
  for i = 0; i < n; i = i + 1 {
    indices.push(i)
  }
  let factor = if ascending { 1 } else { -1 }
  indices.sort_by(fn(a, b) { factor * col.get(a).compare(col.get(b)) })
  self.take_rows(indices)
}

///|
/// Add a new column, or replace the column with the same name. The column must
/// have the same length as the frame.
pub fn DataFrame::with_column(
  self : DataFrame,
  series : Series,
) -> DataFrame raise DataFrameError {
  let n = self.nrows()
  if series.len() != n {
    error("column \{series.name()} has \{series.len()} cells, expected \{n}")
  }
  let cols : Array[Series] = []
  let mut replaced = false
  for s in self.columns {
    if s.name() == series.name() {
      cols.push(series)
      replaced = true
    } else {
      cols.push(s)
    }
  }
  if !replaced {
    cols.push(series)
  }
  { columns: cols, }
}

///|
/// Apply `f` to every cell of a column, producing a new value for it.
pub fn DataFrame::map_column(
  self : DataFrame,
  name : String,
  f : (Value) -> Value,
) -> DataFrame raise DataFrameError {
  let col = match self.column(name) {
    Some(c) => c
    None => error("no such column: \{name}")
  }
  let new_col = Series::new(name, col.to_array().map(f))
  self.with_column(new_col)
}

///|
/// Compute a new column from each row, as a series of the same length. This is
/// the way to build a column that depends on more than one other column.
///
/// ```text
/// df.derive_column("revenue", r => r.get_double("units") * r.get_double("price"))
/// ```
pub fn DataFrame::derive_column(
  self : DataFrame,
  name : String,
  f : (Row) -> Value,
) -> DataFrame raise DataFrameError {
  let values : Array[Value] = []
  for i = 0; i < self.nrows(); i = i + 1 {
    values.push(f({ df: self, index: i, }))
  }
  self.with_column(Series::new(name, values))
}

///|
/// Rename columns according to `mapping` (old name to new name).
pub fn DataFrame::rename(
  self : DataFrame,
  mapping : Map[String, String],
) -> DataFrame {
  let cols = self.columns.map(s => {
    match mapping.get(s.name()) {
      Some(new) => Series::new(new, s.to_array())
      None => s
    }
  })
  { columns: cols, }
}

///|
/// Group rows by the values of the given key columns.
pub fn DataFrame::group_by(
  self : DataFrame,
  keys : Array[String],
) -> GroupedDataFrame raise DataFrameError {
  for k in keys {
    if !self.has_column(k) {
      error("no such column: \{k}")
    }
  }
  GroupedDataFrame::new(self, keys)
}

///|
/// The string used to render a cell inside a printed table (strings are shown
/// unquoted, nulls as the empty string).
fn display_cell(v : Value) -> String {
  v.to_text()
}

///|
pub impl Show for DataFrame with fn output(self : DataFrame, logger) {
  let names = self.columns()
  let n = self.nrows()
  if names.length() == 0 {
    logger.write_string("(empty DataFrame)")
    return
  }
  let widths = names.map(name => {
    let mut w = name.length()
    match self.column(name) {
      Some(col) =>
        for i = 0; i < n; i = i + 1 {
          let len = display_cell(col.get(i)).length()
          if len > w {
            w = len
          }
        }
      None => ()
    }
    w
  })
  for j = 0; j < names.length(); j = j + 1 {
    logger.write_string(names[j])
    for _k = 0; _k < widths[j] - names[j].length(); _k = _k + 1 {
      logger.write_char(' ')
    }
    logger.write_string("   ")
  }
  logger.write_char('\n')
  for i = 0; i < n; i = i + 1 {
    for j = 0; j < names.length(); j = j + 1 {
      let cell = match self.get(i, names[j]) {
        Some(v) => display_cell(v)
        None => ""
      }
      logger.write_string(cell)
      for _k = 0; _k < widths[j] - cell.length(); _k = _k + 1 {
        logger.write_char(' ')
      }
      logger.write_string("   ")
    }
    logger.write_char('\n')
  }
}
