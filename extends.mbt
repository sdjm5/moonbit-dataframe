// The compiler promotes trait methods to regular methods implicitly, which is
// deprecated and will be removed. The declarations below make the promotion
// explicit so the method-style API (`df.to_string()`, `value.compare(other)`)
// keeps working afterwards.
//
// Following the convention used by `moonbitlang/core`, the methods callers
// actually reach for are kept as regular methods, while the ones that only
// exist for symmetry (`to_repr`, `not_equal`, `output`) are marked deprecated
// and hidden so they stay out of the generated interface.

// --- promoted: kept as regular methods ---

///|
pub extend Value with Eq::{equal}

///|
pub extend Value with Compare::{compare}

///|
pub extend Value with Show::{to_string}

///|
pub extend Value with ToJson::{to_json}

///|
pub extend DataType with Eq::{equal}

///|
pub extend DataType with Show::{to_string}

///|
pub extend Series with Eq::{equal}

///|
pub extend DataFrame with Eq::{equal}

///|
pub extend DataFrame with Show::{to_string}

///|
pub extend ReadOptions with Eq::{equal}

///|
pub extend ReadOptions with Default::{default}

///|
pub extend Aggregation with Eq::{equal}

///|
pub extend JoinType with Eq::{equal}

///|
pub extend DataFrameError with Show::{to_string}

// --- deprecated: hidden from the generated interface ---

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend Value with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend Value with Eq::{not_equal}

///|
#deprecated("Use the `Compare` trait explicitly instead", skip_current_package=true)
#doc(hidden)
pub extend Value with Compare::{op_lt, op_le, op_ge, op_gt}

///|
#deprecated("Use `Show::output` via the trait or `to_string` instead", skip_current_package=true)
#doc(hidden)
pub extend Value with Show::{output}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend DataType with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend DataType with Eq::{not_equal}

///|
#deprecated("Use `Show::output` via the trait or `to_string` instead", skip_current_package=true)
#doc(hidden)
pub extend DataType with Show::{output}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend Series with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend Series with Eq::{not_equal}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend DataFrame with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend DataFrame with Eq::{not_equal}

///|
#deprecated("Use `Show::output` via the trait or `to_string` instead", skip_current_package=true)
#doc(hidden)
pub extend DataFrame with Show::{output}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend Row with @debug.Debug::{to_repr}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend ReadOptions with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend ReadOptions with Eq::{not_equal}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend Group with @debug.Debug::{to_repr}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend GroupedDataFrame with @debug.Debug::{to_repr}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend Aggregation with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend Aggregation with Eq::{not_equal}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend JoinType with @debug.Debug::{to_repr}

///|
#deprecated("Use `!=` instead", skip_current_package=true)
#doc(hidden)
pub extend JoinType with Eq::{not_equal}

///|
#deprecated("Use `Debug::to_repr` instead", skip_current_package=true)
#doc(hidden)
pub extend DataFrameError with @debug.Debug::{to_repr}

///|
#deprecated("Use `Show::output` via the trait or `to_string` instead", skip_current_package=true)
#doc(hidden)
pub extend DataFrameError with Show::{output}
