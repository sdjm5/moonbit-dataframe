///|
/// Read a UTF-8 text file, reporting the failure as a `DataFrameError`.
fn read_text_file(path : String) -> String raise DataFrameError {
  @fs.read_file_to_string(path) catch {
    @fs.IOError(msg) => error("cannot read \{path}: \{msg}")
  }
}

///|
/// Load a CSV file from disk. See `from_csv` for the parsing rules.
pub fn DataFrame::read_csv(
  path : String,
  options? : ReadOptions,
) -> DataFrame raise DataFrameError {
  DataFrame::from_csv(read_text_file(path), options?)
}

///|
/// Load a JSON file from disk. Accepts an array of objects (records) or an
/// object of arrays (columns); see `from_json`.
pub fn DataFrame::read_json(path : String) -> DataFrame raise DataFrameError {
  DataFrame::from_json(read_text_file(path))
}

///|
/// Write this frame to a CSV file at `path`.
pub fn DataFrame::write_csv(
  self : DataFrame,
  path : String,
  delimiter? : Char = ',',
) -> Unit raise DataFrameError {
  let text = self.to_csv(delimiter~)
  @fs.write_string_to_file(path, text) catch {
    @fs.IOError(msg) => error("cannot write \{path}: \{msg}")
  }
}

///|
/// Write this frame to a JSON file at `path`, as an array of objects.
pub fn DataFrame::write_json(
  self : DataFrame,
  path : String,
) -> Unit raise DataFrameError {
  let text = self.to_json()
  @fs.write_string_to_file(path, text) catch {
    @fs.IOError(msg) => error("cannot write \{path}: \{msg}")
  }
}
