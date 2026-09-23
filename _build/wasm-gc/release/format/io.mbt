///|
/// Options controlling how CSV input is parsed.
///
/// Because the fields are private, build one with `ReadOptions::new`, which
/// takes the same values as labelled arguments and defaults every one of them.
pub struct ReadOptions {
  has_header : Bool
  delimiter : Char
  infer_types : Bool
  null_values : Array[String]
} derive(Eq, @debug.Debug)

///|
/// Build `ReadOptions`, defaulting any value you leave out:
///
/// ```text
/// ReadOptions::new(delimiter=';', infer_types=false)
/// ```
pub fn ReadOptions::new(
  has_header? : Bool = true,
  delimiter? : Char = ',',
  infer_types? : Bool = true,
  null_values? : Array[String] = ["", "null", "NA", "NaN", "NULL", "na"],
) -> ReadOptions {
  { has_header, delimiter, infer_types, null_values, }
}

///|
pub impl Default for ReadOptions with fn default() {
  ReadOptions::new()
}

///|
/// Split CSV text into rows of raw (unquoted) cells. Handles quoted fields,
/// escaped quotes (`""`), commas, and `\n`, `\r\n` and lone `\r` line endings.
fn parse_csv(text : String, delimiter~ : Char) -> Array[Array[String]] {
  let chars = text.to_array()
  let n = chars.length()
  let rows : Array[Array[String]] = []
  let mut row : Array[String] = []
  let field = StringBuilder::StringBuilder()
  let mut in_quotes = false
  let mut i = 0
  while i < n {
    let c = chars[i]
    if in_quotes {
      if c == '"' {
        if i + 1 < n && chars[i + 1] == '"' {
          field.write_char('"')
          i = i + 2
        } else {
          in_quotes = false
          i = i + 1
        }
      } else {
        field.write_char(c)
        i = i + 1
      }
    } else if c == '"' {
      in_quotes = true
      i = i + 1
    } else if c == delimiter {
      row.push(field.to_string())
      field.reset()
      i = i + 1
    } else if c == '\n' {
      row.push(field.to_string())
      field.reset()
      rows.push(row)
      row = []
      i = i + 1
    } else if c == '\r' {
      row.push(field.to_string())
      field.reset()
      rows.push(row)
      row = []
      if i + 1 < n && chars[i + 1] == '\n' {
        i = i + 2
      } else {
        i = i + 1
      }
    } else {
      field.write_char(c)
      i = i + 1
    }
  }
  let ends_with_line = n > 0 && (chars[n - 1] == '\n' || chars[n - 1] == '\r')
  if !ends_with_line {
    row.push(field.to_string())
    rows.push(row)
  }
  rows
}

///|
fn max_row_len(rows : Array[Array[String]]) -> Int {
  let mut m = 0
  for r in rows {
    if r.length() > m {
      m = r.length()
    }
  }
  m
}

///|
/// Build a `DataFrame` from CSV text. With the default options the first row
/// is treated as the header and cell types are inferred (booleans, integers,
/// doubles); otherwise cells stay as strings.
pub fn DataFrame::from_csv(
  text : String,
  options? : ReadOptions,
) -> DataFrame raise DataFrameError {
  let opts = match options {
    Some(o) => o
    None => ReadOptions::default()
  }
  let rows = parse_csv(text, delimiter=opts.delimiter)
  if rows.length() == 0 {
    return DataFrame::empty()
  }
  let header_and_data = if opts.has_header {
    let header = rows[0]
    let data : Array[Array[String]] = []
    for i = 1; i < rows.length(); i = i + 1 {
      data.push(rows[i])
    }
    (header, data)
  } else {
    let ncols = max_row_len(rows)
    let header : Array[String] = []
    for j = 0; j < ncols; j = j + 1 {
      header.push("col\{j}")
    }
    (header, rows)
  }
  let (header, data) = header_and_data
  let ncols = header.length()
  let columns : Array[Series] = []
  for j = 0; j < ncols; j = j + 1 {
    let name = header[j]
    let values = data.map(row => {
      match row.get(j) {
        Some(cell) =>
          Value::parse(
            cell,
            infer_types=opts.infer_types,
            null_values=opts.null_values,
          )
        None => Null
      }
    })
    columns.push(Series::new(name, values))
  }
  DataFrame::new(columns)
}

///|
/// The string used for a cell in CSV output.
fn cell_to_csv(v : Value) -> String {
  match v {
    Null => ""
    Int(i) => i.to_string()
    Double(d) => d.to_string()
    Bool(b) => b.to_string()
    Str(s) => s
  }
}

///|
/// Quote a CSV field when it contains the delimiter, a quote, or a newline.
fn escape_csv(s : String, delimiter~ : Char) -> String {
  let needs_quotes = s.contains("\"") ||
    s.contains_char(delimiter) ||
    s.contains("\n") ||
    s.contains("\r")
  if needs_quotes {
    "\"" + s.replace_all(old="\"", new="\"\"") + "\""
  } else {
    s
  }
}

///|
/// Serialize this frame to CSV text.
pub fn DataFrame::to_csv(self : DataFrame, delimiter? : Char = ',') -> String {
  let names = self.columns()
  let n = self.nrows()
  let sb = StringBuilder::StringBuilder()
  for j = 0; j < names.length(); j = j + 1 {
    if j > 0 {
      sb.write_char(delimiter)
    }
    sb.write_string(escape_csv(names[j], delimiter~))
  }
  sb.write_char('\n')
  for i = 0; i < n; i = i + 1 {
    for j = 0; j < names.length(); j = j + 1 {
      if j > 0 {
        sb.write_char(delimiter)
      }
      let v = match self.get(i, names[j]) {
        Some(x) => x
        None => Null
      }
      sb.write_string(escape_csv(cell_to_csv(v), delimiter~))
    }
    sb.write_char('\n')
  }
  sb.to_string()
}

///|
/// Build a `DataFrame` from a JSON array of objects (record-oriented). Missing
/// keys in any object become `Null`.
fn from_records(items : Array[Json]) -> DataFrame raise DataFrameError {
  let names : Array[String] = []
  let seen : Map[String, Unit] = Map([])
  for item in items {
    match item {
      Object(m) =>
        for (k, _) in m {
          if !seen.contains(k) {
            seen[k] = ()
            names.push(k)
          }
        }
      _ => return error("expected a JSON array of objects")
    }
  }
  let columns : Array[Series] = []
  for name in names {
    let values = items.map(item => {
      match item {
        Object(m) =>
          match m.get(name) {
            Some(v) => Value::from_json(v)
            None => Null
          }
        _ => Null
      }
    })
    columns.push(Series::new(name, values))
  }
  DataFrame::new(columns)
}

///|
/// Build a `DataFrame` from a JSON object whose values are arrays
/// (column-oriented). All arrays must have the same length.
fn from_object(obj : Json) -> DataFrame raise DataFrameError {
  match obj {
    Object(m) => {
      let keys = m.keys().to_array()
      keys.sort()
      let columns : Array[Series] = []
      for k in keys {
        match m.get(k) {
          Some(Array(items)) => {
            let values = items.map(v => Value::from_json(v))
            columns.push(Series::new(k, values))
          }
          _ => return error("expected an array for column \{k}")
        }
      }
      DataFrame::new(columns)
    }
    _ => error("expected a JSON object")
  }
}

///|
/// Build a `DataFrame` from JSON text. Accepts an array of objects (records)
/// or an object of arrays (columns).
pub fn DataFrame::from_json(text : String) -> DataFrame raise DataFrameError {
  let j = @json.parse(text) catch {
    e => return error("invalid JSON: \{e.to_string()}")
  }
  match j {
    Array(items) => from_records(items)
    Object(_) => from_object(j)
    _ => error("expected a JSON array of objects or an object of arrays")
  }
}

///|
/// Serialize this frame to JSON as an array of objects (record-oriented).
pub fn DataFrame::to_json(self : DataFrame) -> String {
  let names = self.columns()
  let n = self.nrows()
  let objs : Array[Json] = []
  for i = 0; i < n; i = i + 1 {
    let m : Map[String, Json] = Map([])
    for j = 0; j < names.length(); j = j + 1 {
      let v = match self.get(i, names[j]) {
        Some(x) => x
        None => Null
      }
      m[names[j]] = v.to_json()
    }
    objs.push(Json::object(m))
  }
  Json::array(objs).stringify()
}
