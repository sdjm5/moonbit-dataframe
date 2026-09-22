///|
/// A dynamically-typed cell value stored inside a `DataFrame`.
///
/// `Value` mirrors the JSON data model plus a dedicated integer type, so both
/// CSV and JSON inputs round-trip naturally. Missing data is represented by
/// `Null`.
pub enum Value {
  Null
  Int(Int)
  Double(Double)
  Bool(Bool)
  Str(String)
} derive(Eq, @debug.Debug)

///|
pub fn Value::null() -> Value {
  Null
}

///|
pub fn Value::int(i : Int) -> Value {
  Int(i)
}

///|
pub fn Value::double(d : Double) -> Value {
  Double(d)
}

///|
pub fn Value::boolean(b : Bool) -> Value {
  Bool(b)
}

///|
pub fn Value::string(s : String) -> Value {
  Str(s)
}

///|
pub fn Value::is_null(self : Value) -> Bool {
  match self {
    Null => true
    _ => false
  }
}

///|
/// Whether this cell holds an integer or a floating-point number.
pub fn Value::is_numeric(self : Value) -> Bool {
  match self {
    Int(_) | Double(_) => true
    _ => false
  }
}

///|
pub fn Value::as_int(self : Value) -> Int? {
  match self {
    Int(i) => Some(i)
    _ => None
  }
}

///|
/// The numeric value of this cell as a `Double`. Integers are promoted.
pub fn Value::as_double(self : Value) -> Double? {
  match self {
    Double(d) => Some(d)
    Int(i) => Some(i.to_double())
    _ => None
  }
}

///|
pub fn Value::as_bool(self : Value) -> Bool? {
  match self {
    Bool(b) => Some(b)
    _ => None
  }
}

///|
pub fn Value::as_string(self : Value) -> String? {
  match self {
    Str(s) => Some(s)
    _ => None
  }
}

///|
/// A coarse type rank used for cross-type ordering: `Null` < `Bool` < numeric
/// < `String`.
fn Value::rank(self : Value) -> Int {
  match self {
    Null => 0
    Bool(_) => 1
    Int(_) | Double(_) => 2
    Str(_) => 3
  }
}

///|
/// Ordering that is numeric-aware across `Int` and `Double`: when both cells
/// are numeric they are compared as numbers, otherwise by type rank (and then
/// by their natural ordering within the same type).
pub impl Compare for Value with fn compare(self : Value, other : Value) -> Int {
  match (self.as_double(), other.as_double()) {
    (Some(a), Some(b)) => if a < b { -1 } else if a > b { 1 } else { 0 }
    (_, _) => {
      let r = self.rank().compare(other.rank())
      if r != 0 {
        r
      } else {
        match (self, other) {
          (Bool(a), Bool(b)) => a.compare(b)
          (Str(a), Str(b)) => a.compare(b)
          (Null, Null) => 0
          _ => 0
        }
      }
    }
  }
}

///|
pub impl Show for Value with fn output(self : Value, logger) {
  match self {
    Null => logger.write_string("null")
    Int(i) => logger.write_object(i)
    Double(d) => logger.write_object(d)
    Bool(b) => logger.write_object(b)
    Str(s) => logger.write_string("\"" + s + "\"")
  }
}

///|
pub impl ToJson for Value with fn to_json(self : Value) -> Json {
  match self {
    Null => Json::null()
    Int(i) => Json(i)
    Double(d) => Json(d)
    Bool(b) => Json::boolean(b)
    Str(s) => Json::string(s)
  }
}

///|
/// Convert this cell to its plain text form (strings unquoted, `Null` renders
/// as the empty string). This is what CSV and the printed table show.
pub fn Value::to_text(self : Value) -> String {
  match self {
    Null => ""
    Int(i) => i.to_string()
    Double(d) => d.to_string()
    Bool(b) => b.to_string()
    Str(s) => s
  }
}

///|
/// A canonical string key for this cell, used for grouping, de-duplication and
/// set membership.
///
/// The type tag keeps `Int(1)` and `Str("1")` apart, and strings are
/// length-prefixed so that a value containing the separator cannot collide with
/// a different list of values.
fn Value::key_repr(self : Value) -> String {
  match self {
    Null => "n;"
    Int(i) => "i" + i.to_string() + ";"
    Double(d) => "d" + d.to_string() + ";"
    Bool(b) => "b" + b.to_string() + ";"
    Str(s) => "s" + s.length().to_string() + ":" + s + ";"
  }
}

///|
/// Convert a `Double` to an `Int`, or `None` when it is not a finite integral
/// value inside the 32-bit range.
fn double_to_int(d : Double) -> Int? {
  if d.is_nan() || d.is_inf() {
    return None
  }
  let truncated = d.trunc()
  if truncated < -2147483648.0 || truncated > 2147483647.0 {
    return None
  }
  Some(truncated.to_int())
}

///|
/// Convert a `Json` value into a `Value`. Numbers are kept as `Int` when they
/// are integral and fit in the 32-bit range, and as `Double` otherwise. Nested
/// arrays and objects are flattened to their stringified JSON form.
pub fn Value::from_json(j : Json) -> Value {
  match j {
    Null => Null
    True => Bool(true)
    False => Bool(false)
    Number(n, ..) =>
      match double_to_int(n) {
        Some(i) => Int(i)
        None => Double(n)
      }
    String(s) => Str(s)
    Array(_) | Object(_) => Str(j.stringify())
  }
}

///|
/// The type of a column, inferred from its non-null values.
pub(all) enum DataType {
  Null
  Int
  Double
  Bool
  String
  Any
} derive(Eq, @debug.Debug)

///|
pub impl Show for DataType with fn output(self : DataType, logger) {
  match self {
    Null => logger.write_string("Null")
    Int => logger.write_string("Int")
    Double => logger.write_string("Double")
    Bool => logger.write_string("Bool")
    String => logger.write_string("String")
    Any => logger.write_string("Any")
  }
}

///|
fn is_digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
/// True when `s` is a plain integer literal (`-?[0-9]+`) without leading zeros,
/// so that strings such as `"007"` are not silently reinterpreted as numbers.
fn is_plain_int(s : String) -> Bool {
  let chars = s.to_array()
  if chars.length() == 0 {
    return false
  }
  let start = if chars[0] == '+' || chars[0] == '-' { 1 } else { 0 }
  if start >= chars.length() {
    return false
  }
  if chars[start] == '0' && start + 1 < chars.length() {
    return false
  }
  for i = start; i < chars.length(); i = i + 1 {
    if !is_digit(chars[i]) {
      return false
    }
  }
  true
}

///|
/// True when `s` carries a decimal point or an exponent, i.e. it should be
/// parsed as a floating-point number.
fn looks_like_float(s : String) -> Bool {
  s.contains(".") || s.contains("e") || s.contains("E")
}

///|
/// Parse a raw (already unquoted) CSV cell into a `Value`.
///
/// * `infer_types`: when true, booleans, integers and doubles are detected.
/// * `null_values`: spellings (typically the empty string, `"null"`, `"NA"`)
///   that are treated as `Null`.
pub fn Value::parse(
  raw : String,
  infer_types~ : Bool,
  null_values~ : Array[String],
) -> Value {
  if null_values.contains(raw) {
    return Null
  }
  if !infer_types {
    return Str(raw)
  }
  let lower = raw.to_lower()
  if lower == "true" {
    return Bool(true)
  }
  if lower == "false" {
    return Bool(false)
  }
  if is_plain_int(raw) {
    let parsed = Some(@string.parse_int64(raw)) catch { _ => None }
    match parsed {
      Some(n) =>
        if n >= -2147483648L && n <= 2147483647L {
          return Int(n.to_int())
        } else {
          return Double(n.to_double())
        }
      None => ()
    }
  }
  if looks_like_float(raw) {
    let parsed_double = Some(@string.parse_double(raw)) catch { _ => None }
    match parsed_double {
      Some(d) => return Double(d)
      None => ()
    }
  }
  Str(raw)
}

///|
/// Convert this cell to `dtype`.
///
/// `Null` always stays `Null`. A conversion that is impossible (a non-numeric
/// string to `Int`, for instance) also yields `Null` rather than guessing, so
/// lossy casts are visible instead of silent.
pub fn Value::cast(self : Value, dtype : DataType) -> Value {
  if self.is_null() {
    return Null
  }
  match dtype {
    Null => Null
    Any => self
    Int =>
      match self {
        Int(_) => self
        Double(d) =>
          match double_to_int(d) {
            Some(i) => Int(i)
            None => Null
          }
        Bool(b) => Int(if b { 1 } else { 0 })
        Str(s) => {
          let parsed = Some(@string.parse_int64(s)) catch { _ => None }
          match parsed {
            Some(n) =>
              if n >= -2147483648L && n <= 2147483647L {
                Int(n.to_int())
              } else {
                Null
              }
            None => Null
          }
        }
        Null => Null
      }
    Double =>
      match self {
        Double(_) => self
        Int(i) => Double(i.to_double())
        Bool(b) => Double(if b { 1.0 } else { 0.0 })
        Str(s) => {
          let parsed = Some(@string.parse_double(s)) catch { _ => None }
          match parsed {
            Some(d) => Double(d)
            None => Null
          }
        }
        Null => Null
      }
    Bool =>
      match self {
        Bool(_) => self
        Int(i) => Bool(i != 0)
        Double(d) => Bool(d != 0.0)
        Str(s) =>
          match s.to_lower() {
            "true" | "1" | "yes" | "y" => Bool(true)
            "false" | "0" | "no" | "n" => Bool(false)
            _ => Null
          }
        Null => Null
      }
    String => Str(self.to_text())
  }
}
