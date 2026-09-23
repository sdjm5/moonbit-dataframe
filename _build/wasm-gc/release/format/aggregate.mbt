///|
/// An aggregation to apply to each group of a `GroupedDataFrame`.
///
/// Written as `TypeName::Variant`, for example `Sum("sales")` or `Count`.
pub(all) enum Aggregation {
  /// Number of rows in the group.
  Count
  /// Number of non-null cells of a column.
  CountOf(String)
  /// Number of distinct non-null cells of a column.
  NUnique(String)
  Sum(String)
  Mean(String)
  Median(String)
  /// Sample standard deviation (divides by `n - 1`).
  StdDev(String)
  Min(String)
  Max(String)
  /// First non-null cell of a column.
  First(String)
  /// Last non-null cell of a column.
  Last(String)
} derive(Eq, @debug.Debug)

///|
/// The column an aggregation reads from, or `None` for `Count` (which counts
/// rows and needs no column).
fn Aggregation::column(self : Aggregation) -> String? {
  match self {
    Count => None
    CountOf(name)
    | NUnique(name)
    | Sum(name)
    | Mean(name)
    | Median(name)
    | StdDev(name)
    | Min(name)
    | Max(name)
    | First(name)
    | Last(name) => Some(name)
  }
}

///|
/// One group: the shared key values plus the row positions it contains.
pub struct Group {
  key : Array[Value]
  indices : Array[Int]
} derive(@debug.Debug)

///|
/// A collection of groups produced by `DataFrame::group_by`.
pub struct GroupedDataFrame {
  source : DataFrame
  keys : Array[String]
  groups : Array[Group]
} derive(@debug.Debug)

///|
/// Build the grouped frame: collect each row's key, sort by key, then split
/// into runs of equal keys.
pub fn GroupedDataFrame::new(
  source : DataFrame,
  keys : Array[String],
) -> GroupedDataFrame {
  let n = source.nrows()
  let pairs : Array[(Array[Value], Int)] = []
  for i = 0; i < n; i = i + 1 {
    let key = keys.map(k => {
      match source.column(k) {
        Some(c) => c.get(i)
        None => Null
      }
    })
    pairs.push((key, i))
  }
  pairs.sort_by(fn(a, b) { compare(a.0, b.0) })
  let groups : Array[Group] = []
  for pair in pairs {
    if groups.length() > 0 && groups[groups.length() - 1].key == pair.0 {
      groups[groups.length() - 1].indices.push(pair.1)
    } else {
      groups.push({ key: pair.0, indices: [pair.1], })
    }
  }
  { source, keys, groups, }
}

///|
/// The key column names.
pub fn GroupedDataFrame::keys(self : GroupedDataFrame) -> Array[String] {
  self.keys
}

///|
/// The number of groups.
pub fn GroupedDataFrame::len(self : GroupedDataFrame) -> Int {
  self.groups.length()
}

///|
/// The subset of the source column restricted to the given rows.
fn sub_series(
  source : DataFrame,
  name : String,
  indices : Array[Int],
) -> Series {
  match source.column(name) {
    Some(col) => Series::new(name, indices.map(i => col.get(i)))
    None => Series::new(name, [])
  }
}

///|
fn apply_agg(
  source : DataFrame,
  agg : Aggregation,
  indices : Array[Int],
) -> Value {
  match agg {
    Count => Value::int(indices.length())
    CountOf(name) => Value::int(sub_series(source, name, indices).count())
    NUnique(name) => Value::int(sub_series(source, name, indices).n_unique())
    Sum(name) => sub_series(source, name, indices).sum()
    Mean(name) => sub_series(source, name, indices).mean()
    Median(name) => sub_series(source, name, indices).median()
    StdDev(name) => sub_series(source, name, indices).std()
    Min(name) => sub_series(source, name, indices).min()
    Max(name) => sub_series(source, name, indices).max()
    First(name) => sub_series(source, name, indices).first()
    Last(name) => sub_series(source, name, indices).last()
  }
}

///|
/// Aggregate the groups into a new `DataFrame` whose columns are the key
/// columns followed by one column per `(output_name, aggregation)` pair.
///
/// ```text
/// df.group_by(["city"]).aggregate([("total", Sum("sales")), ("n", Count)])
/// ```
pub fn GroupedDataFrame::aggregate(
  self : GroupedDataFrame,
  specs : Array[(String, Aggregation)],
) -> DataFrame raise DataFrameError {
  for (_, agg) in specs {
    match agg.column() {
      Some(name) =>
        if !self.source.has_column(name) {
          error("no such column: \{name}")
        }
      None => ()
    }
  }
  let columns : Array[Series] = []
  for j = 0; j < self.keys.length(); j = j + 1 {
    let name = self.keys[j]
    let values = self.groups.map(g => g.key[j])
    columns.push(Series::new(name, values))
  }
  for (out_name, agg) in specs {
    let values = self.groups.map(g => apply_agg(self.source, agg, g.indices))
    columns.push(Series::new(out_name, values))
  }
  { columns, }
}

///|
/// Convenience: the number of rows in each group.
pub fn GroupedDataFrame::count(
  self : GroupedDataFrame,
) -> DataFrame raise DataFrameError {
  self.aggregate([("count", Count)])
}
