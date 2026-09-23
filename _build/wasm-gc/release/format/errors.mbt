///|
/// Error raised by dataframe operations, for example when a referenced column
/// does not exist or when two columns have different lengths.
pub(all) suberror DataFrameError {
  DataFrameError(String)
} derive(@debug.Debug)

///|
/// The human-readable message carried by this error.
pub fn DataFrameError::message(self : DataFrameError) -> String {
  match self {
    DataFrameError(msg) => msg
  }
}

///|
pub impl Show for DataFrameError with fn output(self : DataFrameError, logger) {
  logger.write_string("DataFrameError: ")
  logger.write_string(self.message())
}

///|
/// Raise a `DataFrameError` with the given message. The return type is generic
/// so this can be used in tail position of any function.
fn[T] error(msg : String) -> T raise DataFrameError {
  raise DataFrameError(msg)
}
