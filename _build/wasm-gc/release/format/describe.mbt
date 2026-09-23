///|
/// A one-row-per-column summary of the numeric columns: how many non-null cells
/// there are, and their mean, minimum, maximum and sample standard deviation.
///
/// Non-numeric columns (and all-null columns) are skipped, so the result can be
/// empty even when the frame is not.
pub fn DataFrame::describe(self : DataFrame) -> DataFrame {
  let names : Array[String] = []
  let counts : Array[Value] = []
  let means : Array[Value] = []
  let mins : Array[Value] = []
  let maxs : Array[Value] = []
  let stds : Array[Value] = []
  for col in self.series() {
    let dtype = col.dtype()
    if dtype != Int && dtype != Double {
      continue
    }
    names.push(col.name())
    counts.push(Value::int(col.count()))
    means.push(col.mean())
    mins.push(col.min())
    maxs.push(col.max())
    stds.push(col.std())
  }
  {
    columns: [
      Series::new("column", names.map(name => Value::string(name))),
      Series::new("count", counts),
      Series::new("mean", means),
      Series::new("min", mins),
      Series::new("max", maxs),
      Series::new("std", stds),
    ],
  }
}

///|
/// How often each distinct value of `column` occurs, as a two-column frame
/// (`column`, `count`) sorted by count descending.
///
/// With `normalize=true` the counts become `Double` proportions of the non-null
/// cells, in a column named `proportion`.
pub fn DataFrame::value_counts(
  self : DataFrame,
  column : String,
  normalize? : Bool = false,
) -> DataFrame raise DataFrameError {
  let col = match self.column(column) {
    Some(c) => c
    None => error("no such column: \{column}")
  }
  let counts = col.value_counts()
  let total = col.count()
  let values = counts.map(pair => pair.0)
  let measures = if normalize {
    counts.map(pair => {
      if total == 0 {
        Value::null()
      } else {
        Value::double(pair.1.to_double() / total.to_double())
      }
    })
  } else {
    counts.map(pair => Value::int(pair.1))
  }
  let measure_name = if normalize { "proportion" } else { "count" }
  DataFrame::new([
    Series::new(column, values),
    Series::new(measure_name, measures),
  ])
}
