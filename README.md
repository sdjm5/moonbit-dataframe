# moonbit-dataframe

A lightweight, in-memory **DataFrame** library for [MoonBit](https://www.moonbitlang.com/).

Load tabular data from **CSV** or **JSON**, then **filter**, **select**, **transform**, **join** and **aggregate** it through a small, column-oriented API — written in pure MoonBit, with no runtime beyond the standard library.

```text
region   rep     units   price   revenue
North    Alice   10      2.5     25
South    Bob     5       3       15
North    Bob     7       2.5     17.5
```

```moonbit
let sales = @df.DataFrame::read_csv("sales.csv")

// Filter — no null cells match an ordering comparison
let big = sales.filter_ge("units", @df.Value::int(7))

// Transform — derive a column from the rest of the row
let priced = sales.derive_column(
  "revenue",
  r =>
    match (r.get_double("units"), r.get_double("price")) {
      (Some(units), Some(price)) => @df.Value::double(units * price)
      _ => @df.Value::null()
    },
)

// Aggregate
let by_region = priced
  .group_by(["region"])
  .aggregate([
    ("rows", @df.Aggregation::Count),
    ("revenue", @df.Aggregation::Sum("revenue")),
    ("mean_price", @df.Aggregation::Mean("price")),
  ])
```

## Features

- **Load** — `from_csv` / `read_csv` and `from_json` / `read_json`, with automatic
  type inference (`Int`, `Double`, `Bool`, `String`) and configurable null spellings.
  JSON input may be an array of objects (records) or an object of arrays (columns).
- **Filter** — row predicates over a typed `Row`, plus ready-made helpers
  (`filter_eq`, `filter_gt`, `filter_contains`, `filter_in`, `filter_not_null`, …).
- **Select & shape** — `select`, `drop`, `rename`, `head`, `tail`, `slice`, `sort_by`.
- **Transform** — `map_column`, `derive_column` (from a whole row), `with_column`, `cast`.
- **Combine** — `join` (inner / left / right / outer) and `concat_rows` / `concat_columns`.
- **Aggregate** — per-column statistics and grouped aggregation by one or more keys.
- **Clean** — `distinct`, `distinct_by`, `drop_nulls`, `fill_null`, `cast`.
- **Summarize** — `describe` and `value_counts`.
- **Persist** — `to_csv` / `to_json`, `write_csv` / `write_json`.
- **Typed and safe** — `Value` cells with explicit nulls, and a `DataFrameError`
  for schema mistakes (missing columns, mismatched lengths, ambiguous joins).

## Requirements

MoonBit CLI 0.1.20260920 or newer. File I/O uses
[`moonbitlang/x/fs`](https://mooncakes.io/docs/moonbitlang/x), which MoonBit
builds for the wasm, wasm-gc, js and native backends; everything except the
`read_*` / `write_*` functions works on any backend.

## Adding the dependency

Once the package is published to [mooncakes.io](https://mooncakes.io):

```
moon add SDJM5/moonbit-dataframe
```

Then import the package where you use it (in that package's `moon.pkg`):

```
import {
  "SDJM5/moonbit-dataframe" @df,
}
```

`moon.mod` only resolves versioned registry dependencies, so to work against a
local checkout of this repository, publish it to a registry or develop against
the library in place.

## Loading

### From a string

```moonbit
let df = @df.DataFrame::from_csv("name,age\nAlice,30\nBob,25\n")
let df = @df.DataFrame::from_json("[{\"name\":\"Alice\",\"age\":30}]")
let df = @df.DataFrame::from_json("{\"name\":[\"Alice\",\"Bob\"],\"age\":[30,25]}")
```

The first CSV row is the header and cell types are inferred. Pass a
`ReadOptions` value to change this — its fields are private, so build one
through `ReadOptions::new`, which defaults everything you leave out:

```moonbit
let opts = @df.ReadOptions::new(
  has_header=false,          // synthesize col0, col1, …
  delimiter=';',
  infer_types=false,          // keep every cell as a String
  null_values=["", "NA"],
)
let df = @df.DataFrame::from_csv("1;Alice\n2;Bob\n", options=opts)
```

The defaults are `has_header=true`, `delimiter=','`, `infer_types=true` and
`null_values=["", "null", "NA", "NaN", "NULL", "na"]`.

Quoted CSV fields are handled, including `""` escapes, embedded delimiters and
newlines, and `\n` / `\r\n` / `\r` line endings.

### From a file

```moonbit
let df = @df.DataFrame::read_csv("sales.csv")
let df = @df.DataFrame::read_json("sales.json")
let df = @df.DataFrame::read_csv("sales.tsv", options=opts)
```

### Inspecting

```moonbit
df.nrows()             // row count
df.ncols()             // column count
df.columns()           // ["name", "age"]
df.has_column("age")   // true
df.column("age")       // Series?
df.get(0, "name")      // Value?
df.row(0)              // Row
match df.column("age") { Some(col) => col.mean(); None => @df.Value::null() }
```

### Building by hand

```moonbit
let df = @df.DataFrame::new([
  @df.Series::new("name", [@df.Value::string("Alice")]),
  @df.Series::new("age", [@df.Value::int(30)]),
])
@df.DataFrame::empty()
```

All columns must share one length and have distinct names, otherwise
`DataFrameError` is raised.

## Filtering

A predicate receives a `Row` and returns `Bool`:

```moonbit
df.filter(r => r.get_string("name") == Some("Alice"))
df.filter(r => r.get_double("age").unwrap_or(0.0) >= 18.0)
```

For the common cases there are helpers that name the column directly:

```moonbit
df.filter_eq("name", @df.Value::string("Alice"))
df.filter_ne("name", @df.Value::string("Alice"))
df.filter_gt("age", @df.Value::int(28))
df.filter_ge("age", @df.Value::int(28))
df.filter_lt("age", @df.Value::int(28))
df.filter_le("age", @df.Value::int(28))
df.filter_in("region", [@df.Value::string("North"), @df.Value::string("South")])
df.filter_contains("name", "li")      // substring match on string cells
df.filter_not_null("rep")
df.filter_is_null("rep")
df.filter_by("age", v => v.is_numeric())   // any predicate on one column
```

Ordering helpers never match a `Null` cell, so `filter_gt` needs no extra null
check. `filter_eq` treats two `Null` cells as equal, which makes
`filter_eq(col, @df.Value::null())` the way to select missing values.

## Selecting and shaping

```moonbit
df.select(["name", "age"])            // subset, in the given order
df.drop(["age"])
df.rename({ "name": "full_name" })
df.head(n=5)
df.tail(n=5)
df.slice(start=10, end=20)
df.sort_by("age")                     // ascending
df.sort_by("age", ascending=false)
```

`sort_by` orders numerically across `Int` and `Double`, and places `Null` cells
first.

## Transforming

```moonbit
// One cell at a time
df.map_column("age", v => match v {
  @df.Value::Int(i) => @df.Value::int(i * 2)
  _ => v
})

// From the whole row
df.derive_column("revenue", r =>
  match (r.get_double("units"), r.get_double("price")) {
    (Some(u), Some(p)) => @df.Value::double(u * p)
    _ => @df.Value::null()
  }
)

// A column computed elsewhere
df.with_column(@df.Series::new("flag", [@df.Value::boolean(true), @df.Value::boolean(false)]))

// Change a column's type (unconvertible cells become Null)
df.cast("units", @df.DataType::Double)
```

`with_column` appends the column, or replaces the existing one with that name.

## Aggregating

Per column, via `Series`:

```moonbit
col.count()        // non-null cells
col.sum()          // Int when every value is an Int, else Double
col.mean()         // Double
col.median()
col.variance()     // sample variance (n - 1)
col.std()          // sample standard deviation
col.min()
col.max()
col.unique()       // distinct non-null cells, first-seen order
col.n_unique()
col.value_counts() // [(Value, Int)], most frequent first
col.first()
col.last()
```

Every one of these ignores `Null` cells, and yields `Null` (or `0` for the
counts) when no value qualifies.

Grouped, via `group_by`:

```moonbit
let by_region = df
  .group_by(["region"])                        // one or more key columns
  .aggregate([
    ("rows", @df.Aggregation::Count),          // rows in the group
    ("reps", @df.Aggregation::CountOf("rep")), // non-null cells
    ("distinct_reps", @df.Aggregation::NUnique("rep")),
    ("total", @df.Aggregation::Sum("units")),
    ("average", @df.Aggregation::Mean("units")),
    ("middle", @df.Aggregation::Median("units")),
    ("spread", @df.Aggregation::StdDev("units")),
    ("lowest", @df.Aggregation::Min("units")),
    ("highest", @df.Aggregation::Max("units")),
    ("first_rep", @df.Aggregation::First("rep")),
    ("last_rep", @df.Aggregation::Last("rep")),
  ])
```

The result holds the key columns followed by one column per `(name, aggregation)`
pair, with groups ordered by their key. `GroupedDataFrame::count()` is shorthand
for a single `Count` column.

## Combining

```moonbit
df.join(other, ["id"])                              // inner
df.join(other, ["id"], how=@df.JoinType::Left)
df.join(other, ["id"], how=@df.JoinType::Right)
df.join(other, ["id"], how=@df.JoinType::Outer)

@df.DataFrame::concat_rows([jan, feb, mar])         // stack rows, union columns
@df.DataFrame::concat_columns([features, labels])   // place side by side
```

A join keeps the key columns first, then the remaining left columns, then the
remaining right columns. When a non-key column name occurs on both sides the
right-hand one is emitted as `<name>_right`, so nothing is silently dropped.

`concat_rows` fills absent columns with `Null`. `concat_columns` requires equal
row counts and distinct column names.

## Cleaning

```moonbit
df.distinct()                       // drop duplicate rows
df.distinct_by(["id"])              // drop duplicates of a key
df.drop_nulls()                      // drop rows with a null anywhere
df.drop_nulls(columns=["age"])       // …or in the named columns only
df.fill_null("rep", @df.Value::string("unknown"))
df.fill_null_all(@df.Value::int(0))
```

## Summarizing

```moonbit
df.describe()                // per numeric column: count, mean, min, max, std
df.value_counts("region")    // (region, count), most frequent first
df.value_counts("region", normalize=true)   // (region, proportion)
```

## Serializing

```moonbit
df.to_csv()                        // "name,age\nAlice,30\n"
df.to_csv(delimiter=';')
df.to_json()                       // [{"name":"Alice","age":30}]
df.write_csv("out.csv")            // …to disk
df.write_json("out.json")
```

CSV output quotes any field containing the delimiter, a quote or a newline.

`DataFrame` implements `Show`, so `println(df)` prints an aligned table.

## Core types

| Type | Purpose |
| --- | --- |
| `Value` | One cell: `Null`, `Int`, `Double`, `Bool` or `Str`. |
| `DataType` | `Null`, `Int`, `Double`, `Bool`, `String` or `Any`. |
| `Series` | A named column of `Value` cells, with the statistics above. |
| `DataFrame` | The table: an ordered list of equally long `Series`. |
| `Row` | A read-only view of one row, given to `filter` / `derive_column`. |
| `Aggregation` | What `group_by(..).aggregate()` computes per group. |
| `JoinType` | `Inner`, `Left`, `Right` or `Outer`. |
| `ReadOptions` | CSV parsing options. |
| `DataFrameError` | Raised for schema mistakes. |

### `Value`

Construct with `Value::int`, `Value::double`, `Value::boolean`, `Value::string`,
`Value::null`. Read back with `as_int`, `as_double`, `as_bool`, `as_string`,
each returning an `Option` (so `None` means "missing, or a different type"),
plus `is_null`, `is_numeric`, `to_text` and `cast`.

`Value` compares numerically across `Int` and `Double`, and defines an order
across the other types, which is what `sort_by`, `min` and `max` rely on.

### `Row`

`get(column) -> Value?` plus typed `get_int`, `get_double`, `get_bool`,
`get_string`, and `index()` for the row's position in the source frame.

## Errors

Operations that can fail raise `DataFrameError`:

```moonbit
try {
  df.select(["does_not_exist"])
} catch {
  @df.DataFrameError(msg) => println("bad column: \{msg}")
}
```

## Development

```
moon check                        # type check
moon test                         # run the test suite (wasm-gc)
moon test --target native         # …on the C backend (needs a C compiler)
moon build --target js            # …on the JavaScript backend
moon run examples/demo
```

CI runs the test suite on ubuntu, windows and macos across the
wasm-gc, js and native targets.

## License

[Apache-2.0](LICENSE)
