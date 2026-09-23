///|
const SALES : String =
  #|region,rep,units,price
  #|North,Alice,10,2.5
  #|South,Bob,5,3.0
  #|North,Bob,7,2.5
  #|East,Carol,12,1.5
  #|South,Alice,3,3.0
  #|East,,4,1.5

///|
/// A walk through the library: load, filter, transform, aggregate, join and
/// persist. Run with `moon run examples/demo`.
fn main raise {
  let sales = @df.DataFrame::from_csv(SALES)

  println("== loaded ==")
  println(sales)

  println("\n== filter: units >= 7 (null cells never match) ==")
  println(sales.filter_ge("units", @df.Value::int(7)))

  println("\n== filter: rows with a rep, whose name contains \"o\" ==")
  println(sales.filter_not_null("rep").filter_contains("rep", "o"))

  println("\n== filter: a predicate over the whole Row ==")
  println(sales.filter(r => r.get_string("rep") == Some("Bob")))

  println("\n== transform: map_column, matching on a Value ==")
  println(
    sales
    .map_column("units", v => {
      match v {
        @df.Value::Int(i) => @df.Value::int(i * 2)
        _ => v
      }
    })
    .head(n=3),
  )

  println("\n== transform: derive revenue = units * price ==")
  let priced = sales.derive_column("revenue", r => {
    match (r.get_double("units"), r.get_double("price")) {
      (Some(units), Some(price)) => @df.Value::double(units * price)
      _ => @df.Value::null()
    }
  })
  println(priced.select(["region", "rep", "units", "price", "revenue"]))

  println("\n== aggregate: totals per region ==")
  let by_region = priced
    .group_by(["region"])
    .aggregate([
      ("rows", @df.Aggregation::Count),
      ("total_units", @df.Aggregation::Sum("units")),
      ("total_revenue", @df.Aggregation::Sum("revenue")),
      ("mean_price", @df.Aggregation::Mean("price")),
      ("reps", @df.Aggregation::NUnique("rep")),
    ])
  println(by_region)

  println("\n== describe: numeric summary ==")
  println(priced.describe())

  println("\n== join: attach the manager for each region ==")
  let managers = @df.DataFrame::from_csv(
    "region,manager\nNorth,Dana\nSouth,Erin\nWest,Frank\n",
  )
  println(managers)
  println("left join keeps every left row:")
  println(priced.join(managers, ["region"], how=@df.JoinType::Left).head(n=3))

  println("\n== value_counts: how many rows per region ==")
  println(priced.value_counts("region"))

  println("\n== persist: CSV round trip via disk ==")
  let path = "demo_sales.csv"
  priced.write_csv(path)
  let reloaded = @df.DataFrame::read_csv(path)
  println("wrote \{reloaded.nrows()} rows to \{path}")
  @fs.remove_file(path) catch {
    _ => ()
  }

  println(
    "\n== custom options: semicolon-delimited, no header, strings only ==",
  )
  // ReadOptions is built through its constructor because its fields are private.
  let tsv = @df.DataFrame::from_csv(
    "north;10\nsouth;20\n",
    options=@df.ReadOptions::new(
      has_header=false,
      delimiter=';',
      infer_types=false,
    ),
  )
  println(tsv)

  println("\n== to_json ==")
  println(by_region.to_json())
}
