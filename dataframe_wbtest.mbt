///|
test "Value::parse infers types" {
  assert_eq(
    Value::parse("42", infer_types=true, null_values=[""]),
    Value::int(42),
  )
  assert_eq(
    Value::parse("-7", infer_types=true, null_values=[""]),
    Value::int(-7),
  )
  assert_eq(
    Value::parse("3.14", infer_types=true, null_values=[""]),
    Value::double(3.14),
  )
  assert_eq(
    Value::parse("true", infer_types=true, null_values=[""]),
    Value::boolean(true),
  )
  assert_eq(
    Value::parse("hello", infer_types=true, null_values=[""]),
    Value::string("hello"),
  )
  // leading zeros are preserved as strings
  assert_eq(
    Value::parse("007", infer_types=true, null_values=[""]),
    Value::string("007"),
  )
  assert_eq(Value::parse("", infer_types=true, null_values=[""]), Value::null())
  assert_eq(
    Value::parse("NA", infer_types=true, null_values=["", "NA"]),
    Value::null(),
  )
}

///|
test "from_csv with header" {
  let df = DataFrame::from_csv("name,age\nAlice,30\nBob,25\n")
  assert_eq(df.columns(), ["name", "age"])
  assert_eq(df.nrows(), 2)
  assert_eq(df.get(0, "name"), Some(Value::string("Alice")))
  assert_eq(df.get(0, "age"), Some(Value::int(30)))
  assert_eq(df.get(1, "name"), Some(Value::string("Bob")))
}

///|
test "from_csv without header" {
  let df = DataFrame::from_csv("1,2\n3,4\n", options={
    has_header: false,
    delimiter: ',',
    infer_types: true,
    null_values: [""],
  })
  assert_eq(df.columns(), ["col0", "col1"])
  assert_eq(df.nrows(), 2)
  assert_eq(df.get(0, "col0"), Some(Value::int(1)))
  assert_eq(df.get(1, "col1"), Some(Value::int(4)))
}

///|
test "from_csv quoted fields" {
  let df = DataFrame::from_csv(
    "name,note\nAlice,\"hello, world\"\nBob,\"line1\nline2\"\n",
  )
  assert_eq(df.get(0, "note"), Some(Value::string("hello, world")))
  assert_eq(df.get(1, "note"), Some(Value::string("line1\nline2")))
}

///|
test "to_csv round trip" {
  let df = DataFrame::from_csv("a,b\n1,x\n2,y\n")
  assert_eq(df.to_csv(), "a,b\n1,x\n2,y\n")
}

///|
test "filter" {
  let df = DataFrame::from_csv("name,age\nAlice,30\nBob,25\nCarol,40\n")
  let adults = df.filter(r => {
    match r.get_int("age") {
      Some(age) => age >= 30
      None => false
    }
  })
  assert_eq(adults.nrows(), 2)
  assert_eq(adults.get(0, "name"), Some(Value::string("Alice")))
  assert_eq(adults.get(1, "name"), Some(Value::string("Carol")))
}

///|
test "select and drop" {
  let df = DataFrame::from_csv("a,b,c\n1,2,3\n4,5,6\n")
  let sel = df.select(["c", "a"])
  assert_eq(sel.columns(), ["c", "a"])
  assert_eq(sel.get(0, "c"), Some(Value::int(3)))
  let dropped = df.drop(["b"])
  assert_eq(dropped.columns(), ["a", "c"])
}

///|
test "sort_by" {
  let df = DataFrame::from_csv("name,age\nAlice,30\nBob,25\nCarol,40\n")
  let sorted = df.sort_by("age")
  assert_eq(sorted.get(0, "name"), Some(Value::string("Bob")))
  assert_eq(sorted.get(2, "name"), Some(Value::string("Carol")))
  let desc = df.sort_by("age", ascending=false)
  assert_eq(desc.get(0, "name"), Some(Value::string("Carol")))
  assert_eq(desc.get(2, "name"), Some(Value::string("Bob")))
}

///|
test "with_column and map_column" {
  let df = DataFrame::from_csv("a\n1\n2\n3\n")
  let doubled = df.map_column("a", v => {
    match v {
      Int(i) => Value::int(i * 2)
      _ => v
    }
  })
  assert_eq(doubled.get(0, "a"), Some(Value::int(2)))
  assert_eq(doubled.get(2, "a"), Some(Value::int(6)))
  let with_new = df.with_column(
    Series::new("b", [Value::int(10), Value::int(20), Value::int(30)]),
  )
  assert_eq(with_new.columns(), ["a", "b"])
  assert_eq(with_new.get(1, "b"), Some(Value::int(20)))
}

///|
test "rename" {
  let df = DataFrame::from_csv("a,b\n1,2\n")
  let r = df.rename({ "a": "x" })
  assert_eq(r.columns(), ["x", "b"])
}

///|
test "head tail slice" {
  let df = DataFrame::from_csv("a\n1\n2\n3\n4\n5\n")
  assert_eq(df.head(n=2).nrows(), 2)
  assert_eq(df.head(n=2).get(1, "a"), Some(Value::int(2)))
  assert_eq(df.tail(n=2).get(0, "a"), Some(Value::int(4)))
  assert_eq(df.slice(start=1, end=3).nrows(), 2)
  assert_eq(df.slice(start=1, end=3).get(0, "a"), Some(Value::int(2)))
}

///|
test "series aggregates" {
  let s = Series::new("x", [
    Value::int(1),
    Value::int(2),
    Value::int(3),
    Value::null(),
  ])
  assert_eq(s.sum(), Value::int(6))
  assert_eq(s.mean(), Value::double(2.0))
  assert_eq(s.min(), Value::int(1))
  assert_eq(s.max(), Value::int(3))
  assert_eq(s.count(), 3)
}

///|
test "group_by and aggregate" {
  let df = DataFrame::from_csv("city,sales\nA,10\nB,20\nA,30\n")
  let result = df
    .group_by(["city"])
    .aggregate([
      ("total", Sum("sales")),
      ("n", Count),
      ("valid", CountOf("sales")),
      ("avg", Mean("sales")),
      ("lo", Min("sales")),
      ("hi", Max("sales")),
    ])
  let expected = DataFrame::new([
    Series::new("city", [Value::string("A"), Value::string("B")]),
    Series::new("total", [Value::int(40), Value::int(20)]),
    Series::new("n", [Value::int(2), Value::int(1)]),
    Series::new("valid", [Value::int(2), Value::int(1)]),
    Series::new("avg", [Value::double(20.0), Value::double(20.0)]),
    Series::new("lo", [Value::int(10), Value::int(20)]),
    Series::new("hi", [Value::int(30), Value::int(20)]),
  ])
  assert_eq(result, expected)
}

///|
test "group_by count convenience" {
  let df = DataFrame::from_csv("city\nA\nA\nB\n")
  let result = df.group_by(["city"]).count()
  assert_eq(result.get(0, "city"), Some(Value::string("A")))
  assert_eq(result.get(0, "count"), Some(Value::int(2)))
  assert_eq(result.get(1, "count"), Some(Value::int(1)))
}

///|
test "json records round trip" {
  let df = DataFrame::from_json("[{\"a\":1,\"b\":\"x\"},{\"a\":2,\"b\":\"y\"}]")
  assert_eq(df.columns(), ["a", "b"])
  assert_eq(df.get(0, "a"), Some(Value::int(1)))
  assert_eq(df.get(0, "b"), Some(Value::string("x")))
  assert_eq(df.get(1, "a"), Some(Value::int(2)))
  // round-trip: serialize then parse back to the same logical document
  assert_eq(
    @json.parse(df.to_json()),
    @json.parse("[{\"a\":1,\"b\":\"x\"},{\"a\":2,\"b\":\"y\"}]"),
  )
}

///|
test "json column-oriented" {
  let df = DataFrame::from_json("{\"a\":[1,2,3],\"b\":[4,5,6]}")
  assert_eq(df.nrows(), 3)
  assert_eq(df.get(2, "a"), Some(Value::int(3)))
  assert_eq(df.get(2, "b"), Some(Value::int(6)))
}

///|
test "missing column raises" {
  let df = DataFrame::from_csv("a\n1\n")
  let outcome = try {
    ignore(df.select(["b"]))
    "no error"
  } catch {
    _ => "error"
  }
  assert_eq(outcome, "error")
}

///|
test "show renders a table" {
  let df = DataFrame::from_csv("name,age\nAlice,30\n")
  let s = df.to_string()
  assert_true(s.contains("name"))
  assert_true(s.contains("Alice"))
}
