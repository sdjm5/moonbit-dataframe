///|
/// A named column of `Value` cells.
pub struct Series {
  name : String
  values : Array[Value]
} derive(Eq, @debug.Debug)

///|
pub fn Series::new(name : String, values : Array[Value]) -> Series {
  { name, values, }
}

///|
pub fn Series::name(self : Series) -> String {
  self.name
}

///|
/// The number of cells in this column.
pub fn Series::len(self : Series) -> Int {
  self.values.length()
}

///|
/// The cell at position `i`.
pub fn Series::get(self : Series, i : Int) -> Value {
  self.values[i]
}

///|
/// The underlying cell array.
pub fn Series::to_array(self : Series) -> Array[Value] {
  self.values
}

///|
/// The inferred type of this column, based on its non-null values.
pub fn Series::dtype(self : Series) -> DataType {
  let mut has_int = false
  let mut has_double = false
  let mut has_bool = false
  let mut has_string = false
  for v in self.values {
    match v {
      Null => ()
      Int(_) => has_int = true
      Double(_) => has_double = true
      Bool(_) => has_bool = true
      Str(_) => has_string = true
    }
  }
  let numeric = has_int || has_double
  let kinds = (if numeric { 1 } else { 0 }) +
    (if has_bool { 1 } else { 0 }) +
    (if has_string { 1 } else { 0 })
  if kinds == 0 {
    Null
  } else if kinds > 1 {
    Any
  } else if numeric {
    if has_double {
      Double
    } else {
      Int
    }
  } else if has_bool {
    Bool
  } else {
    String
  }
}

///|
/// The number of non-null cells in this column.
pub fn Series::count(self : Series) -> Int {
  self.values.count_if(v => !v.is_null())
}

///|
/// Sum of the numeric cells, ignoring nulls. The result is `Int` when every
/// numeric cell is an integer and `Double` otherwise; it is `Null` when there
/// are no numeric cells.
pub fn Series::sum(self : Series) -> Value {
  let mut int_sum = 0
  let mut double_sum = 0.0
  let mut has_double = false
  let mut count = 0
  for v in self.values {
    match v {
      Int(i) => {
        int_sum = int_sum + i
        count = count + 1
      }
      Double(d) => {
        double_sum = double_sum + d
        has_double = true
        count = count + 1
      }
      _ => ()
    }
  }
  if count == 0 {
    Null
  } else if has_double {
    Double(int_sum.to_double() + double_sum)
  } else {
    Int(int_sum)
  }
}

///|
/// Arithmetic mean of the numeric cells, ignoring nulls (`Null` when there are
/// no numeric cells).
pub fn Series::mean(self : Series) -> Value {
  let mut sum = 0.0
  let mut count = 0
  for v in self.values {
    match v.as_double() {
      Some(d) => {
        sum = sum + d
        count = count + 1
      }
      None => ()
    }
  }
  if count == 0 {
    Null
  } else {
    Double(sum / count.to_double())
  }
}

///|
/// The smallest cell, ignoring nulls (`Null` when the column has no non-null
/// cells).
pub fn Series::min(self : Series) -> Value {
  let mut best : Value? = None
  for v in self.values {
    if v.is_null() {
      continue
    }
    match best {
      None => best = Some(v)
      Some(b) => if v.compare(b) < 0 { best = Some(v) }
    }
  }
  match best {
    Some(v) => v
    None => Null
  }
}

///|
/// The largest cell, ignoring nulls (`Null` when the column has no non-null
/// cells).
pub fn Series::max(self : Series) -> Value {
  let mut best : Value? = None
  for v in self.values {
    if v.is_null() {
      continue
    }
    match best {
      None => best = Some(v)
      Some(b) => if v.compare(b) > 0 { best = Some(v) }
    }
  }
  match best {
    Some(v) => v
    None => Null
  }
}

///|
/// The non-null numeric cells of this column, promoted to `Double`.
fn Series::numeric_values(self : Series) -> Array[Double] {
  let nums : Array[Double] = []
  for v in self.values {
    match v.as_double() {
      Some(d) => nums.push(d)
      None => ()
    }
  }
  nums
}

///|
/// The median of the numeric cells, ignoring nulls (`Null` when there are no
/// numeric cells). For an even count the two middle values are averaged.
pub fn Series::median(self : Series) -> Value {
  let nums = self.numeric_values()
  let n = nums.length()
  if n == 0 {
    return Null
  }
  nums.sort()
  if n % 2 == 1 {
    Double(nums[n / 2])
  } else {
    Double((nums[n / 2 - 1] + nums[n / 2]) / 2.0)
  }
}

///|
/// The sample variance of the numeric cells (dividing by `n - 1`), ignoring
/// nulls. `Null` when fewer than two numeric cells are present.
pub fn Series::variance(self : Series) -> Value {
  let nums = self.numeric_values()
  let n = nums.length()
  if n < 2 {
    return Null
  }
  let mut sum = 0.0
  for d in nums {
    sum = sum + d
  }
  let mean = sum / n.to_double()
  let mut acc = 0.0
  for d in nums {
    acc = acc + (d - mean) * (d - mean)
  }
  Double(acc / (n - 1).to_double())
}

///|
/// The sample standard deviation of the numeric cells, ignoring nulls. `Null`
/// when fewer than two numeric cells are present.
pub fn Series::std(self : Series) -> Value {
  match self.variance() {
    Double(v) => Double(v.sqrt())
    _ => Null
  }
}

///|
/// The distinct non-null cells, in first-seen order.
pub fn Series::unique(self : Series) -> Array[Value] {
  let seen : Map[String, Unit] = Map([])
  let out : Array[Value] = []
  for v in self.values {
    if v.is_null() {
      continue
    }
    let key = v.key_repr()
    if !seen.contains(key) {
      seen[key] = ()
      out.push(v)
    }
  }
  out
}

///|
/// The number of distinct non-null cells.
pub fn Series::n_unique(self : Series) -> Int {
  self.unique().length()
}

///|
/// How often each distinct non-null cell occurs, sorted by count descending
/// (ties keep first-seen order).
pub fn Series::value_counts(self : Series) -> Array[(Value, Int)] {
  // value, count, first-seen position
  let entries : Array[(Value, Int, Int)] = []
  let positions : Map[String, Int] = Map([])
  for v in self.values {
    if v.is_null() {
      continue
    }
    let key = v.key_repr()
    match positions.get(key) {
      Some(pos) => {
        let entry = entries[pos]
        entries[pos] = (entry.0, entry.1 + 1, entry.2)
      }
      None => {
        let pos = entries.length()
        positions[key] = pos
        entries.push((v, 1, pos))
      }
    }
  }
  entries.sort_by(fn(a, b) { if a.1 != b.1 { b.1 - a.1 } else { a.2 - b.2 } })
  entries.map(entry => (entry.0, entry.1))
}

///|
/// The first non-null cell, or `Null` when there is none.
pub fn Series::first(self : Series) -> Value {
  for v in self.values {
    if !v.is_null() {
      return v
    }
  }
  Null
}

///|
/// The last non-null cell, or `Null` when there is none.
pub fn Series::last(self : Series) -> Value {
  let n = self.values.length()
  for i = n - 1; i >= 0; i = i - 1 {
    let v = self.values[i]
    if !v.is_null() {
      return v
    }
  }
  Null
}
