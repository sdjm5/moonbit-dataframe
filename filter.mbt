///|
/// Filter by an arbitrary predicate over the cells of one column. Raises
/// `DataFrameError` when the column does not exist.
pub fn DataFrame::filter_by(
  self : DataFrame,
  column : String,
  pred : (Value) -> Bool,
) -> DataFrame raise DataFrameError {
  let col = match self.column(column) {
    Some(c) => c
    None => error("no such column: \{column}")
  }
  let keep : Array[Int] = []
  for i = 0; i < self.nrows(); i = i + 1 {
    if pred(col.get(i)) {
      keep.push(i)
    }
  }
  self.take_rows(keep)
}

///|
/// Keep rows where `column` equals `value`. Two `Null` cells are equal here, so
/// `filter_eq(col, Null)` selects the missing values.
pub fn DataFrame::filter_eq(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => v == value)
}

///|
/// Keep rows where `column` differs from `value`.
pub fn DataFrame::filter_ne(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => v != value)
}

///|
/// Keep rows where `column` is greater than `value`. Rows whose cell is `Null`
/// never match, and a `Null` bound matches nothing.
pub fn DataFrame::filter_gt(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => {
    if v.is_null() || value.is_null() {
      false
    } else {
      v.compare(value) > 0
    }
  })
}

///|
/// Keep rows where `column` is greater than or equal to `value`. `Null` cells
/// never match.
pub fn DataFrame::filter_ge(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => {
    if v.is_null() || value.is_null() {
      false
    } else {
      v.compare(value) >= 0
    }
  })
}

///|
/// Keep rows where `column` is less than `value`. `Null` cells never match.
pub fn DataFrame::filter_lt(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => {
    if v.is_null() || value.is_null() {
      false
    } else {
      v.compare(value) < 0
    }
  })
}

///|
/// Keep rows where `column` is less than or equal to `value`. `Null` cells
/// never match.
pub fn DataFrame::filter_le(
  self : DataFrame,
  column : String,
  value : Value,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => {
    if v.is_null() || value.is_null() {
      false
    } else {
      v.compare(value) <= 0
    }
  })
}

///|
/// Keep rows whose `column` cell is `Null`.
pub fn DataFrame::filter_is_null(
  self : DataFrame,
  column : String,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => v.is_null())
}

///|
/// Keep rows whose `column` cell is not `Null`.
pub fn DataFrame::filter_not_null(
  self : DataFrame,
  column : String,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => !v.is_null())
}

///|
/// Keep rows whose `column` cell is one of `values`.
pub fn DataFrame::filter_in(
  self : DataFrame,
  column : String,
  values : Array[Value],
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => values.contains(v))
}

///|
/// Keep rows whose `column` cell is a string containing `substring`.
pub fn DataFrame::filter_contains(
  self : DataFrame,
  column : String,
  substring : String,
) -> DataFrame raise DataFrameError {
  self.filter_by(column, v => {
    match v.as_string() {
      Some(s) => s.contains(substring)
      None => false
    }
  })
}
