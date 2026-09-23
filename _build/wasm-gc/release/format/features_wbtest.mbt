///|
test "inner join" {
  let left = DataFrame::from_csv("id,name\n1,Alice\n2,Bob\n3,Carol\n")
  let right = DataFrame::from_csv("id,city\n1,Paris\n2,London\n4,Rome\n")
  let joined = left.join(right, ["id"])
  assert_eq(joined.columns(), ["id", "name", "city"])
  assert_eq(joined.nrows(), 2)
  assert_eq(joined.get(0, "name"), Some(Value::string("Alice")))
  assert_eq(joined.get(0, "city"), Some(Value::string("Paris")))
  assert_eq(joined.get(1, "city"), Some(Value::string("London")))
}

///|
test "left join keeps every left row" {
  let left = DataFrame::from_csv("id,name\n1,Alice\n2,Bob\n3,Carol\n")
  let right = DataFrame::from_csv("id,city\n1,Paris\n2,London\n4,Rome\n")
  let joined = left.join(right, ["id"], how=Left)
  assert_eq(joined.nrows(), 3)
  assert_eq(joined.get(2, "name"), Some(Value::string("Carol")))
  assert_eq(joined.get(2, "city"), Some(Value::null()))
}

///|
test "right join keeps every right row" {
  let left = DataFrame::from_csv("id,name\n1,Alice\n2,Bob\n3,Carol\n")
  let right = DataFrame::from_csv("id,city\n1,Paris\n2,London\n4,Rome\n")
  let joined = left.join(right, ["id"], how=Right)
  assert_eq(joined.nrows(), 3)
  assert_eq(joined.get(2, "id"), Some(Value::int(4)))
  assert_eq(joined.get(2, "name"), Some(Value::null()))
  assert_eq(joined.get(2, "city"), Some(Value::string("Rome")))
}

///|
test "outer join keeps both sides" {
  let left = DataFrame::from_csv("id,name\n1,Alice\n2,Bob\n3,Carol\n")
  let right = DataFrame::from_csv("id,city\n1,Paris\n2,London\n4,Rome\n")
  let joined = left.join(right, ["id"], how=Outer)
  assert_eq(joined.nrows(), 4)
  assert_eq(joined.get(2, "name"), Some(Value::string("Carol")))
  assert_eq(joined.get(2, "city"), Some(Value::null()))
  assert_eq(joined.get(3, "id"), Some(Value::int(4)))
  assert_eq(joined.get(3, "name"), Some(Value::null()))
}

///|
test "join suffixes a colliding column" {
  let left = DataFrame::from_csv("id,v\n1,a\n")
  let right = DataFrame::from_csv("id,v\n1,b\n")
  let joined = left.join(right, ["id"])
  assert_eq(joined.columns(), ["id", "v", "v_right"])
  assert_eq(joined.get(0, "v"), Some(Value::string("a")))
  assert_eq(joined.get(0, "v_right"), Some(Value::string("b")))
}

///|
test "join on a missing key raises" {
  let left = DataFrame::from_csv("id,name\n1,Alice\n")
  let right = DataFrame::from_csv("id,city\n1,Paris\n")
  let outcome = try {
    ignore(left.join(right, ["nope"]))
    "no error"
  } catch {
    _ => "error"
  }
  assert_eq(outcome, "error")
}

///|
test "concat_rows unions columns and pads" {
  let a = DataFrame::from_csv("x,y\n1,2\n")
  let b = DataFrame::from_csv("y,z\n3,4\n")
  let stacked = DataFrame::concat_rows([a, b])
  assert_eq(stacked.columns(), ["x", "y", "z"])
  assert_eq(stacked.nrows(), 2)
  assert_eq(stacked.get(0, "x"), Some(Value::int(1)))
  assert_eq(stacked.get(0, "z"), Some(Value::null()))
  assert_eq(stacked.get(1, "x"), Some(Value::null()))
  assert_eq(stacked.get(1, "y"), Some(Value::int(3)))
  assert_eq(stacked.get(1, "z"), Some(Value::int(4)))
}

///|
test "concat_columns places side by side" {
  let a = DataFrame::from_csv("x\n1\n2\n")
  let b = DataFrame::from_csv("y\n3\n4\n")
  let side = DataFrame::concat_columns([a, b])
  assert_eq(side.columns(), ["x", "y"])
  assert_eq(side.get(0, "y"), Some(Value::int(3)))
  assert_eq(side.get(1, "x"), Some(Value::int(2)))
}

///|
test "concat_columns rejects a row mismatch" {
  let a = DataFrame::from_csv("x\n1\n2\n")
  let b = DataFrame::from_csv("y\n3\n")
  let outcome = try {
    ignore(DataFrame::concat_columns([a, b]))
    "no error"
  } catch {
    _ => "error"
  }
  assert_eq(outcome, "error")
}

///|
test "distinct drops duplicate rows" {
  let df = DataFrame::from_csv("a,b\n1,x\n2,y\n1,x\n")
  assert_eq(df.nrows(), 3)
  let uniq = df.distinct()
  assert_eq(uniq.nrows(), 2)
  assert_eq(uniq.get(0, "a"), Some(Value::int(1)))
  assert_eq(uniq.get(1, "a"), Some(Value::int(2)))
}

///|
test "distinct_by uses only the given columns" {
  let df = DataFrame::from_csv("a,b\n1,x\n1,y\n2,z\n")
  let uniq = df.distinct_by(["a"])
  assert_eq(uniq.nrows(), 2)
  assert_eq(uniq.get(0, "b"), Some(Value::string("x")))
}

///|
test "drop_nulls and fill_null" {
  let df = DataFrame::from_csv("a,b\n1,x\n,y\n3,\n")
  assert_eq(df.drop_nulls().nrows(), 1)
  // only column `a` considered
  assert_eq(df.drop_nulls(columns=["a"]).nrows(), 2)
  let filled = df.fill_null("b", Value::string("?"))
  assert_eq(filled.get(1, "b"), Some(Value::string("y")))
  assert_eq(filled.get(2, "b"), Some(Value::string("?")))
  let all_filled = df.fill_null_all(Value::int(0))
  assert_eq(all_filled.get(1, "a"), Some(Value::int(0)))
  assert_eq(all_filled.get(2, "b"), Some(Value::int(0)))
}

///|
test "cast between types" {
  let df = DataFrame::from_csv("v\n3.7\n5\n")
  let as_int = df.cast("v", DataType::Int)
  assert_eq(as_int.get(0, "v"), Some(Value::int(3)))
  assert_eq(as_int.get(1, "v"), Some(Value::int(5)))
  let as_string = df.cast("v", DataType::String)
  assert_eq(as_string.get(0, "v"), Some(Value::string("3.7")))
  assert_eq(as_string.get(1, "v"), Some(Value::string("5")))
  // a non-numeric string cannot become an Int
  let words = DataFrame::from_csv("s\nabc\n")
  assert_eq(words.cast("s", DataType::Int).get(0, "s"), Some(Value::null()))
  assert_eq(
    words.cast("s", DataType::String).get(0, "s"),
    Some(Value::string("abc")),
  )
}

///|
test "filter helpers" {
  let df = DataFrame::from_csv("name,age\nAlice,30\nBob,25\nCarol,40\n,35\n")
  assert_eq(df.nrows(), 4)
  let gt = df.filter_gt("age", Value::int(28))
  assert_eq(gt.nrows(), 3)
  assert_eq(gt.get(0, "name"), Some(Value::string("Alice")))
  assert_eq(df.filter_lt("age", Value::int(28)).nrows(), 1)
  assert_eq(df.filter_ge("age", Value::int(30)).nrows(), 3)
  assert_eq(df.filter_le("age", Value::int(30)).nrows(), 2)
  assert_eq(df.filter_eq("age", Value::int(30)).nrows(), 1)
  assert_eq(df.filter_ne("age", Value::int(30)).nrows(), 3)
  assert_eq(df.filter_not_null("name").nrows(), 3)
  assert_eq(df.filter_is_null("name").nrows(), 1)
  assert_eq(df.filter_contains("name", "o").nrows(), 2)
  assert_eq(df.filter_in("name", [Value::string("Alice")]).nrows(), 1)
  assert_eq(df.filter_by("age", v => v.is_null()).nrows(), 0)
}

///|
test "a null bound matches nothing in ordering filters" {
  let df = DataFrame::from_csv("a\n1\n2\n")
  assert_eq(df.filter_gt("a", Value::null()).nrows(), 0)
  assert_eq(df.filter_lt("a", Value::null()).nrows(), 0)
}

///|
test "series statistics ignore nulls" {
  let s = Series::new("x", [
    Value::int(1),
    Value::null(),
    Value::int(3),
    Value::int(5),
  ])
  assert_eq(s.count(), 3)
  assert_eq(s.sum(), Value::int(9))
  assert_eq(s.mean(), Value::double(3.0))
  assert_eq(s.median(), Value::double(3.0))
  assert_eq(s.min(), Value::int(1))
  assert_eq(s.max(), Value::int(5))
  // deviations -2, 0, 2 -> sum of squares 8 -> sample variance 8 / 2 = 4
  assert_eq(s.variance(), Value::double(4.0))
  assert_eq(s.std(), Value::double(2.0))
}

///|
test "median of an even count averages the middle" {
  let s = Series::new("x", [
    Value::int(1),
    Value::int(2),
    Value::int(3),
    Value::int(4),
  ])
  assert_eq(s.median(), Value::double(2.5))
}

///|
test "variance and std need two values" {
  let s = Series::new("x", [Value::int(7)])
  assert_eq(s.variance(), Value::null())
  assert_eq(s.std(), Value::null())
  assert_eq(Series::new("e", []).variance(), Value::null())
}

///|
test "series unique and value_counts" {
  let s = Series::new("c", [
    Value::string("a"),
    Value::string("b"),
    Value::string("a"),
    Value::null(),
    Value::string("a"),
  ])
  assert_eq(s.unique(), [Value::string("a"), Value::string("b")])
  assert_eq(s.n_unique(), 2)
  assert_eq(s.value_counts(), [(Value::string("a"), 3), (Value::string("b"), 1)])
}

///|
test "series first and last skip nulls" {
  let s = Series::new("x", [
    Value::null(),
    Value::int(5),
    Value::null(),
    Value::int(7),
    Value::null(),
  ])
  assert_eq(s.first(), Value::int(5))
  assert_eq(s.last(), Value::int(7))
  assert_eq(Series::new("e", [Value::null()]).first(), Value::null())
}

///|
test "extended aggregations" {
  let df = DataFrame::from_csv("g,v\nA,1\nA,3\nA,5\nB,10\n")
  let result = df
    .group_by(["g"])
    .aggregate([
      ("med", Median("v")),
      ("sd", StdDev("v")),
      ("nq", NUnique("v")),
      ("f", First("v")),
      ("l", Last("v")),
    ])
  assert_eq(result.get(0, "g"), Some(Value::string("A")))
  assert_eq(result.get(0, "med"), Some(Value::double(3.0)))
  assert_eq(result.get(0, "sd"), Some(Value::double(2.0)))
  assert_eq(result.get(0, "nq"), Some(Value::int(3)))
  assert_eq(result.get(0, "f"), Some(Value::int(1)))
  assert_eq(result.get(0, "l"), Some(Value::int(5)))
  // a single-row group has no sample deviation
  assert_eq(result.get(1, "sd"), Some(Value::null()))
  assert_eq(result.get(1, "nq"), Some(Value::int(1)))
}

///|
test "describe summarises numeric columns" {
  let df = DataFrame::from_csv("name,age\nAlice,1\nBob,3\nCarol,5\n")
  let summary = df.describe()
  assert_eq(summary.nrows(), 1)
  assert_eq(summary.get(0, "column"), Some(Value::string("age")))
  assert_eq(summary.get(0, "count"), Some(Value::int(3)))
  assert_eq(summary.get(0, "mean"), Some(Value::double(3.0)))
  assert_eq(summary.get(0, "min"), Some(Value::int(1)))
  assert_eq(summary.get(0, "max"), Some(Value::int(5)))
  assert_eq(summary.get(0, "std"), Some(Value::double(2.0)))
}

///|
test "dataframe value_counts" {
  let df = DataFrame::from_csv("c\na\na\nb\nb\n")
  let counts = df.value_counts("c")
  assert_eq(counts.columns(), ["c", "count"])
  assert_eq(counts.get(0, "c"), Some(Value::string("a")))
  assert_eq(counts.get(0, "count"), Some(Value::int(2)))
  let normalized = df.value_counts("c", normalize=true)
  assert_eq(normalized.columns(), ["c", "proportion"])
  assert_eq(normalized.get(0, "proportion"), Some(Value::double(0.5)))
  assert_eq(normalized.get(1, "proportion"), Some(Value::double(0.5)))
}

///|
test "csv file round trip" {
  let path = "test_dataframe_roundtrip.csv"
  let df = DataFrame::from_csv("a,b\n1,x\n2,y\n")
  df.write_csv(path)
  let back = DataFrame::read_csv(path)
  assert_eq(back.columns(), ["a", "b"])
  assert_eq(back.nrows(), 2)
  assert_eq(back.get(0, "a"), Some(Value::int(1)))
  assert_eq(back.get(1, "b"), Some(Value::string("y")))
  @fs.remove_file(path) catch {
    _ => ()
  }
}

///|
test "json file round trip" {
  let path = "test_dataframe_roundtrip.json"
  let df = DataFrame::from_csv("a,b\n1,x\n2,y\n")
  df.write_json(path)
  let back = DataFrame::read_json(path)
  assert_eq(back.columns(), ["a", "b"])
  assert_eq(back.get(1, "a"), Some(Value::int(2)))
  assert_eq(back.get(0, "b"), Some(Value::string("x")))
  @fs.remove_file(path) catch {
    _ => ()
  }
}

///|
test "read options constructor" {
  let opts = ReadOptions::new(
    has_header=false,
    delimiter=';',
    infer_types=false,
  )
  let df = DataFrame::from_csv("1;Alice\n2;Bob\n", options=opts)
  assert_eq(df.columns(), ["col0", "col1"])
  // infer_types is off, so cells stay strings
  assert_eq(df.get(0, "col0"), Some(Value::string("1")))
  assert_eq(df.get(1, "col1"), Some(Value::string("Bob")))
}

///|
test "read options defaults" {
  assert_eq(ReadOptions::new(), ReadOptions::default())
  let df = DataFrame::from_csv("a,b\n1,x\n", options=ReadOptions::new())
  assert_eq(df.columns(), ["a", "b"])
  assert_eq(df.get(0, "a"), Some(Value::int(1)))
}

///|
test "read options custom null spellings" {
  // With no null spellings configured, "NA" stays a string.
  let df = DataFrame::from_csv(
    "a\nNA\n",
    options=ReadOptions::new(null_values=[]),
  )
  assert_eq(df.get(0, "a"), Some(Value::string("NA")))
  // Adding the spelling back makes it a null cell.
  let with_na = DataFrame::from_csv(
    "a\nNA\n",
    options=ReadOptions::new(null_values=["NA"]),
  )
  assert_eq(with_na.get(0, "a"), Some(Value::null()))
}

///|
test "reading a missing file raises" {
  let outcome = try {
    ignore(DataFrame::read_csv("definitely_not_here_12345.csv"))
    "no error"
  } catch {
    _ => "error"
  }
  assert_eq(outcome, "error")
}
