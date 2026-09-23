const { writeFileSync: writeFileSync$6372, unlinkSync: unlinkSync$6380, readFileSync: readFileSync$6367 } = require("node:fs");
function _M0DTPB4Json4Null() {}
_M0DTPB4Json4Null.prototype.$tag = 0;
const _M0DTPB4Json4Null__ = new _M0DTPB4Json4Null();
function _M0DTPB4Json4True() {}
_M0DTPB4Json4True.prototype.$tag = 1;
const _M0DTPB4Json4True__ = new _M0DTPB4Json4True();
function _M0DTPB4Json5False() {}
_M0DTPB4Json5False.prototype.$tag = 2;
const _M0DTPB4Json5False__ = new _M0DTPB4Json5False();
function _M0DTPB4Json6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPB4Json6Number.prototype.$tag = 3;
function _M0DTPB4Json6String(param0) {
  this._0 = param0;
}
_M0DTPB4Json6String.prototype.$tag = 4;
function _M0DTPB4Json5Array(param0) {
  this._0 = param0;
}
_M0DTPB4Json5Array.prototype.$tag = 5;
function _M0DTPB4Json6Object(param0) {
  this._0 = param0;
}
_M0DTPB4Json6Object.prototype.$tag = 6;
const $reinterpret_view = new DataView(new ArrayBuffer(8));
function $i64_reinterpret_f64(a) {
  $reinterpret_view.setBigUint64(0, BigInt.asUintN(64, a), false);
  return $reinterpret_view.getFloat64(0, false);
}
function _M0TPC28internal7strconv9FloatInfo(param0, param1, param2) {
  this.mantissa_bits = param0;
  this.exponent_bits = param1;
  this.bias = param2;
}
function _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError.prototype.$tag = 11;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError.prototype.$tag = 10;
function _M0DTPC15error5Error97SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error97SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 9;
function _M0DTPC15error5Error99SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error99SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 8;
function _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError.prototype.$tag = 7;
function _M0DTPC15error5Error61SDJM5_2fmoonbit_2ddataframe_2eDataFrameError_2eDataFrameError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error61SDJM5_2fmoonbit_2ddataframe_2eDataFrameError_2eDataFrameError.prototype.$tag = 6;
function _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar.prototype.$tag = 5;
function _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof() {}
_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof.prototype.$tag = 4;
const _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__ = new _M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof();
function _M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error54moonbitlang_2fcore_2fjson_2eParseError_2eInvalidNumber.prototype.$tag = 3;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eInvalidIdentEscape.prototype.$tag = 2;
function _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded() {}
_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded.prototype.$tag = 1;
const _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__ = new _M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded();
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPB4IterGUsRPB4JsonEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGkE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB9ArrayViewGRP25SDJM519moonbit_2ddataframe6SeriesE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsuE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsiE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB4JsonE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGiEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPC15debug4ReprE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGiEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGiEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGiEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGiEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGiEE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP25SDJM519moonbit_2ddataframe6SeriesERP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP25SDJM519moonbit_2ddataframe6SeriesERP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP25SDJM519moonbit_2ddataframe6SeriesERP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP25SDJM519moonbit_2ddataframe6SeriesERP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
const $bytes_literal$0 = new Uint8Array();
function _M0TPB9ArrayViewGRPC15debug4ReprE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB12MutArrayViewGURP25SDJM519moonbit_2ddataframe5ValueiiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB12MutArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB12MutArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0DTPC15debug9ReprDelta4Same(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug9ReprDelta4Same.prototype.$tag = 0;
function _M0DTPC15debug9ReprDelta9Different(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug9ReprDelta9Different.prototype.$tag = 1;
function _M0DTPC15debug9ReprDelta6Extra1(param0) {
  this._0 = param0;
}
_M0DTPC15debug9ReprDelta6Extra1.prototype.$tag = 2;
function _M0DTPC15debug9ReprDelta6Extra2(param0) {
  this._0 = param0;
}
_M0DTPC15debug9ReprDelta6Extra2.prototype.$tag = 3;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGdRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv6Number(param0, param1, param2, param3) {
  this.exponent = param0;
  this.mantissa = param1;
  this.negative = param2;
  this.many_digits = param3;
}
function _M0DTPC16result6ResultGdRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGdRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $i64_clz(a) {
  a = BigInt.asUintN(64, a);
  if (a === 0n) return 64;
  const hi = Number(a >> 32n);
  if (hi !== 0) {
    return Math.clz32(hi);
  }
  return 32 + Math.clz32(Number(a & 0xffffffffn));
}
function _M0DTPC16result6ResultGlRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC15error5ErrorE2Ok.prototype.$tag = 1;
function _M0TPC28internal7strconv12EiselProduct(param0, param1) {
  this.lo = param0;
  this.hi = param1;
}
function _M0TPC28internal7strconv7Decimal(param0, param1, param2, param3, param4, param5) {
  this.digits = param0;
  this.digits_num = param1;
  this.decimal_point = param2;
  this.negative = param3;
  this.truncated = param4;
  this.overflowed = param5;
}
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $f64_convert_i64_u(a) {
  return Number(a);
}
function _M0TPC14json8Position(param0, param1) {
  this.line = param0;
  this.column = param1;
}
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0TPC14json12ParseContext(param0, param1, param2) {
  this.offset = param0;
  this.input = param1;
  this.end_offset = param2;
}
function $f64_convert_i64(a) {
  return Number(BigInt.asIntN(64, a));
}
function _M0TPC14json11LexedNumber(param0, param1) {
  this.repr = param0;
  this.value = param1;
}
function _M0TPC14json14JsonNumberScan(param0, param1, param2, param3, param4) {
  this.negative = param0;
  this.is_integer = param1;
  this.mantissa = param2;
  this.exponent = param3;
  this.many_digits = param4;
}
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok.prototype.$tag = 1;
function _M0DTPC14json5Token4Null() {}
_M0DTPC14json5Token4Null.prototype.$tag = 0;
const _M0DTPC14json5Token4Null__ = new _M0DTPC14json5Token4Null();
function _M0DTPC14json5Token4True() {}
_M0DTPC14json5Token4True.prototype.$tag = 1;
const _M0DTPC14json5Token4True__ = new _M0DTPC14json5Token4True();
function _M0DTPC14json5Token5False() {}
_M0DTPC14json5Token5False.prototype.$tag = 2;
const _M0DTPC14json5Token5False__ = new _M0DTPC14json5Token5False();
function _M0DTPC14json5Token6Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json5Token6Number.prototype.$tag = 3;
function _M0DTPC14json5Token6String(param0) {
  this._0 = param0;
}
_M0DTPC14json5Token6String.prototype.$tag = 4;
function _M0DTPC14json5Token6LBrace() {}
_M0DTPC14json5Token6LBrace.prototype.$tag = 5;
const _M0DTPC14json5Token6LBrace__ = new _M0DTPC14json5Token6LBrace();
function _M0DTPC14json5Token6RBrace() {}
_M0DTPC14json5Token6RBrace.prototype.$tag = 6;
const _M0DTPC14json5Token6RBrace__ = new _M0DTPC14json5Token6RBrace();
function _M0DTPC14json5Token8LBracket() {}
_M0DTPC14json5Token8LBracket.prototype.$tag = 7;
const _M0DTPC14json5Token8LBracket__ = new _M0DTPC14json5Token8LBracket();
function _M0DTPC14json5Token8RBracket() {}
_M0DTPC14json5Token8RBracket.prototype.$tag = 8;
const _M0DTPC14json5Token8RBracket__ = new _M0DTPC14json5Token8RBracket();
function _M0DTPC14json5Token5Comma() {}
_M0DTPC14json5Token5Comma.prototype.$tag = 9;
const _M0DTPC14json5Token5Comma__ = new _M0DTPC14json5Token5Comma();
function _M0TPB9ArrayViewGUsRPB4JsonEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC14json10WriteFrame5Array(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame5Array.prototype.$tag = 0;
function _M0DTPC14json10WriteFrame6Object(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC14json10WriteFrame6Object.prototype.$tag = 1;
function _M0TPB9ArrayViewGyE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGcE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MP311moonbitlang1x2fs13FsBytesResult6is__ok = (res) => res.ok;
const _M0MP311moonbitlang1x2fs13FsBytesResult7content = (res) => res.content;
const _M0MP311moonbitlang1x2fs13FsBytesResult14error__message = (res) => res.content;
const _M0MP311moonbitlang1x2fs12FsUnitResult6is__ok = (res) => res.ok;
const _M0MP311moonbitlang1x2fs12FsUnitResult14error__message = (res) => res.content;
const _M0FP311moonbitlang1x2fs15read__file__ffi = function(readFile, path) {
   try {
     const content = readFile(path);
     return { ok: true, content };
   } catch (error) {
     return { ok: false, content: error.message };
   }
 };
const _M0FP311moonbitlang1x2fs16write__file__ffi = function(writeFile, path, content) {
   try {
     writeFile(path, Buffer.from(content));
     return { ok: true, content: "" };
   } catch (error) {
     return { ok: false, content: error.message };
   }
 };
function _M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE2Ok.prototype.$tag = 1;
const _M0FP311moonbitlang1x2fs17remove__file__ffi = function(removeFile, path) {
  try {
    removeFile(path);
    return { ok: true, content: "" };
  } catch (error) {
    return { ok: false, content: error.message };
  }
 };
function _M0TPB9ArrayViewGUsRPC15debug4ReprEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP25SDJM519moonbit_2ddataframe5Value4Null() {}
_M0DTP25SDJM519moonbit_2ddataframe5Value4Null.prototype.$tag = 0;
const _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__ = new _M0DTP25SDJM519moonbit_2ddataframe5Value4Null();
function _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe5Value3Int.prototype.$tag = 1;
function _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe5Value6Double.prototype.$tag = 2;
function _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe5Value4Bool.prototype.$tag = 3;
function _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe5Value3Str.prototype.$tag = 4;
function _M0TP25SDJM519moonbit_2ddataframe6Series(param0, param1) {
  this.name = param0;
  this.values = param1;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGORP25SDJM519moonbit_2ddataframe5ValueE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUsuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsiEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGiEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
function _M0TP25SDJM519moonbit_2ddataframe9DataFrame(param0) {
  this.columns = param0;
}
function _M0TPB9ArrayViewGRP25SDJM519moonbit_2ddataframe5ValueE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGsRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
function _M0TP25SDJM519moonbit_2ddataframe11ReadOptions(param0, param1, param2, param3) {
  this.has_header = param0;
  this.delimiter = param1;
  this.infer_types = param2;
  this.null_values = param3;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TP25SDJM519moonbit_2ddataframe5Group(param0, param1) {
  this.key = param0;
  this.indices = param1;
}
function _M0TP25SDJM519moonbit_2ddataframe16GroupedDataFrame(param0, param1, param2) {
  this.source = param0;
  this.keys = param1;
  this.groups = param2;
}
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe16GroupedDataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe16GroupedDataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe16GroupedDataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe16GroupedDataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok.prototype.$tag = 1;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count() {}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count.prototype.$tag = 0;
const _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count__ = new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count();
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation7CountOf(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation7CountOf.prototype.$tag = 1;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation7NUnique(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation7NUnique.prototype.$tag = 2;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Sum(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Sum.prototype.$tag = 3;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Mean(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Mean.prototype.$tag = 4;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation6Median(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation6Median.prototype.$tag = 5;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation6StdDev(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation6StdDev.prototype.$tag = 6;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Min(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Min.prototype.$tag = 7;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Max(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Max.prototype.$tag = 8;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5First(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation5First.prototype.$tag = 9;
function _M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Last(param0) {
  this._0 = param0;
}
_M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Last.prototype.$tag = 10;
function _M0TP25SDJM519moonbit_2ddataframe3Row(param0, param1) {
  this.df = param0;
  this.index = param1;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP25SDJM519moonbit_2ddataframe34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP25SDJM519moonbit_2ddataframe34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP25SDJM519moonbit_2ddataframe42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP25SDJM519moonbit_2ddataframe38moonbit__test__driver__js__parse__args = () => {
  try {
    let testParams = []
    // check if there is command line argument
    if (process.argv.length > 2) {
      const testArgs = JSON.parse(process.argv[2])
      testParams = testArgs.file_and_index.flatMap(([file, ranges]) => {
        let arr = []
        for (let range of ranges) {
          for (let i = range.start; i < range.end; i++) {
            arr.push([file, i])
          }
        }
        return arr
      })
      return testParams
    }
  } catch (error) {
    console.error('failed to parse args: ', error.message)
    process.exit(1)
  }
};
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGiE, method_1: _M0IPC13int3IntPB4Show10to__string };
const _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow = { method_0: _M0IP016_24default__implPB4Show6outputGsE, method_1: _M0IPC16string6StringPB4Show10to__string };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 10: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
    case 6: {
      return _M0IP016_24default__implPB4Show10to__stringGRP25SDJM519moonbit_2ddataframe14DataFrameErrorE(_e);
    }
    case 8: {
      return "SDJM5/moonbit-dataframe.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    case 3: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 4: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 5: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    case 7: {
      return "moonbitlang/x/fs.IOError.IOError";
    }
    case 11: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    case 9: {
      return "SDJM5/moonbit-dataframe.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
    }
    case 2: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
    default: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(_e);
    }
  }
}
const _M0MPC16string6String4trimN7_2abindS6932 = "\t\n\r ";
const _M0FPB4null = _M0DTPB4Json4Null__;
const _M0FPB18double__max__value = $i64_reinterpret_f64(9218868437227405311n);
const _M0FPB18double__min__value = $i64_reinterpret_f64(18442240474082181119n);
const _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE = 0;
const _M0MPB4Iter4nextN6constrS9909GcE = 0;
const _M0MPB4Iter4nextN6constrS9910GcE = 0;
const _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE = 0;
const _M0MPB4Iter3newN6constrS9917GcE = 0;
const _M0FPC15debug15compact__middleN7_2abindS1131 = "";
const _M0FPC15debug15compact__middleN7_2abindS1139 = " ";
const _M0FPC15debug15compact__middleN7_2abindS1133 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1143 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1142 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1140 = "";
const _M0FPC15debug14compact__linesN7_2abindS1145 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1151 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1160 = "";
const _M0FPC15debug14print__contentN7_2abindS1229 = "\n";
const _M0FPC16double14not__a__number = $i64_reinterpret_f64(9221120237041090561n);
const _M0FPC16double8infinity = $i64_reinterpret_f64(9218868437227405312n);
const _M0FPC16double13neg__infinity = $i64_reinterpret_f64(18442240474082181120n);
const _M0FPC28internal7strconv14base__err__str = "invalid base";
const _M0FPC28internal7strconv15range__err__str = "value out of range";
const _M0FPC28internal7strconv16syntax__err__str = "invalid syntax";
const _M0FPC28internal7strconv17min__19digit__int = 1000000000000000000n;
const _M0FPC28internal7strconv17parse__scientificN8exp__numS354 = 0n;
const _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681 = "";
const _M0FPC28internal7strconv27eisel__lemire__pow10__table = [18054884314459144840n, 1671618768450675795n, 11284302696536965525n, 1044761730281672372n, 14105378370671206906n, 5917638181279478369n, 17631722963339008632n, 16620419763454123769n, 11019826852086880395n, 10387762352158827356n, 13774783565108600494n, 8373016921771146291n, 17218479456385750618n, 1242899115359157055n, 10761549660241094136n, 5388497965526861063n, 13451937075301367670n, 6735622456908576329n, 16814921344126709587n, 17642900107990496220n, 10509325840079193492n, 8720969558280366185n, 13136657300098991865n, 10901211947850457732n, 16420821625123739831n, 18238200953240460069n, 10263013515702337394n, 18316404623416369399n, 12828766894627921743n, 13672133742415685941n, 16035958618284902179n, 12478481159592219522n, 10022474136428063862n, 5493207715531443249n, 12528092670535079827n, 16089881681269079869n, 15660115838168849784n, 15500666083158961933n, 9787572398855531115n, 9687916301974351208n, 12234465498569413894n, 7498209359040551106n, 15293081873211767368n, 149389661945913074n, 9558176170757354605n, 93368538716195671n, 11947720213446693256n, 4728396691822632493n, 14934650266808366570n, 5910495864778290617n, 9334156416755229106n, 8305745933913819539n, 11667695520944036383n, 1158810380537498616n, 14584619401180045478n, 15283571030954036982n, 18230774251475056848n, 9881091751837770420n, 11394233907171910530n, 6175682344898606512n, 14242792383964888162n, 16942974967978033949n, 17803490479956110203n, 11955346673117766628n, 11127181549972568877n, 5166248661484910190n, 13908976937465711096n, 11069496845283525642n, 17386221171832138870n, 13836871056604407053n, 10866388232395086794n, 4036358391950366504n, 13582985290493858492n, 14268820026792733938n, 16978731613117323115n, 17836025033490917422n, 10611707258198326947n, 8841672636718129437n, 13264634072747908684n, 6440404777470273892n, 16580792590934885855n, 8050505971837842365n, 10362995369334303659n, 11949095260039733334n, 12953744211667879574n, 10324683056622278764n, 16192180264584849468n, 3682481783923072647n, 10120112665365530917n, 11524923151806696212n, 12650140831706913647n, 571095884476206553n, 15812676039633642058n, 14548927910877421904n, 9882922524771026286n, 13704765962725776594n, 12353653155963782858n, 7907585416552444934n, 15442066444954728573n, 661109733835780360n, 9651291528096705358n, 2719036592861056677n, 12064114410120881697n, 12622167777931096654n, 15080143012651102122n, 1942651667131707105n, 9425089382906938826n, 5825843310384704845n, 11781361728633673532n, 16505676174835656864n, 14726702160792091916n, 2185351144835019464n, 18408377700990114895n, 2731688931043774330n, 11505236063118821809n, 8624834609543440812n, 14381545078898527261n, 15392729280356688919n, 17976931348623159077n, 5405853545163697437n, 11235582092889474423n, 5684501474941004850n, 14044477616111843029n, 2493940825248868159n, 17555597020139803786n, 7729112049988473103n, 10972248137587377366n, 9442381049670183593n, 13715310171984221708n, 2579604275232953683n, 17144137714980277135n, 3224505344041192104n, 10715086071862673209n, 8932844867666826921n, 13393857589828341511n, 15777742103010921555n, 16742321987285426889n, 15110491610336264040n, 10463951242053391806n, 2526528228819083169n, 13079939052566739757n, 12381532322878629770n, 16349923815708424697n, 1641857348316123500n, 10218702384817765435n, 12555375888766046947n, 12773377981022206794n, 11082533842530170780n, 15966722476277758493n, 4629795266307937667n, 9979201547673599058n, 5199465050656154994n, 12474001934591998822n, 15722703350174969551n, 15592502418239998528n, 10430007150863936130n, 9745314011399999080n, 6518754469289960081n, 12181642514249998850n, 8148443086612450102n, 15227053142812498563n, 962181821410786819n, 9516908214257811601n, 16742264702877599426n, 11896135267822264502n, 7092772823314835570n, 14870169084777830627n, 18089338065998320271n, 9293855677986144142n, 8999993282035256217n, 11617319597482680178n, 2026619565689294464n, 14521649496853350222n, 11756646493966393888n, 18152061871066687778n, 5472436080603216552n, 11345038669416679861n, 8031958568804398249n, 14181298336770849826n, 14651634229432885715n, 17726622920963562283n, 9091170749936331336n, 11079139325602226427n, 3376138709496513133n, 13848924157002783033n, 18055231442152805128n, 17311155196253478792n, 8733981247408842698n, 10819471997658424245n, 5458738279630526686n, 13524339997073030306n, 11435108867965546262n, 16905424996341287883n, 5070514048102157020n, 10565890622713304927n, 863228270850154185n, 13207363278391631158n, 14914093393844856443n, 16509204097989538948n, 9419244705451294746n, 10318252561243461842n, 15110399977761835024n, 12897815701554327303n, 9664627935347517973n, 16122269626942909129n, 7469098900757009562n, 10076418516839318205n, 16197401859041600736n, 12595523146049147757n, 6411694268519837208n, 15744403932561434696n, 12626303854077184414n, 9840252457850896685n, 7891439908798240259n, 12300315572313620856n, 14475985904425188227n, 15375394465392026070n, 18094982380531485284n, 9609621540870016294n, 6697677969404790399n, 12012026926087520367n, 17595469498610763806n, 15015033657609400459n, 17382650854836066854n, 9384396036005875287n, 8558313775058847832n, 11730495045007344109n, 6086206200396171886n, 14663118806259180136n, 12219443768922602761n, 18328898507823975170n, 15274304711153253452n, 11455561567389984481n, 14158126462898171311n, 14319451959237480602n, 3862600023340550427n, 17899314949046850752n, 14051622066030463842n, 11187071843154281720n, 8782263791269039901n, 13983839803942852150n, 10977829739086299876n, 17479799754928565188n, 4498915137003099037n, 10924874846830353242n, 12035193997481712706n, 13656093558537941553n, 5820620459997365075n, 17070116948172426941n, 11887461593424094248n, 10668823092607766838n, 9735506505103752857n, 13336028865759708548n, 2946011094524915263n, 16670036082199635685n, 3682513868156144079n, 10418772551374772303n, 4607414176811284001n, 13023465689218465379n, 1147581702586717097n, 16279332111523081723n, 15269535183515560084n, 10174582569701926077n, 7237616480483531100n, 12718228212127407596n, 13658706619031801779n, 15897785265159259495n, 17073383273789752224n, 9936115790724537184n, 17588393573759676996n, 12420144738405671481n, 3538747893490044629n, 15525180923007089351n, 9035120885289943691n, 9703238076879430844n, 12564479580947296663n, 12129047596099288555n, 15705599476184120828n, 15161309495124110694n, 15020313326802763131n, 9475818434452569184n, 4776009810824339053n, 11844773043065711480n, 5970012263530423816n, 14805966303832139350n, 7462515329413029771n, 9253728939895087094n, 52386062455755702n, 11567161174868858867n, 9288854614924470436n, 14458951468586073584n, 6999382250228200141n, 18073689335732591980n, 8749227812785250177n, 11296055834832869987n, 14691639419845557168n, 14120069793541087484n, 13752863256379558556n, 17650087241926359355n, 17191079070474448196n, 11031304526203974597n, 8438581409832836170n, 13789130657754968246n, 15159912780718433117n, 17236413322193710308n, 9726518939043265588n, 10772758326371068942n, 15302446373756816800n, 13465947907963836178n, 9904685930341245193n, 16832434884954795223n, 3157485376071780683n, 10520271803096747014n, 8890957387685944783n, 13150339753870933768n, 1890324697752655170n, 16437924692338667210n, 2362905872190818963n, 10273702932711667006n, 6088502188546649756n, 12842128665889583757n, 16833999772538088003n, 16052660832361979697n, 7207441660390446292n, 10032913020226237310n, 16033866083812498692n, 12541141275282796638n, 10818960567910847557n, 15676426594103495798n, 4300328673033783639n, 9797766621314684873n, 16522763475928278486n, 12247208276643356092n, 6818396289628184396n, 15309010345804195115n, 8522995362035230495n, 9568131466127621947n, 3021029092058325107n, 11960164332659527433n, 17611344420355070096n, 14950205415824409292n, 8179122470161673908n, 9343878384890255807n, 14335323580705822000n, 11679847981112819759n, 13307468457454889596n, 14599809976391024699n, 12022649553391224092n, 18249762470488780874n, 10416625923311642211n, 11406101544055488046n, 11122077220497164286n, 14257626930069360058n, 4679224488766679549n, 17822033662586700072n, 15072402647813125244n, 11138771039116687545n, 9420251654883203278n, 13923463798895859431n, 16387000587031392001n, 17404329748619824289n, 15872064715361852097n, 10877706092887390181n, 3002511419460075705n, 13597132616109237726n, 8364825292752482535n, 16996415770136547158n, 1232659579085827361n, 10622759856335341973n, 14605470292210805812n, 13278449820419177467n, 4421779809981343554n, 16598062275523971834n, 915538744049291538n, 10373788922202482396n, 5183897733458195115n, 12967236152753102995n, 6479872166822743894n, 16209045190941378744n, 3488154190101041964n, 10130653244338361715n, 2180096368813151227n, 12663316555422952143n, 16560178516298602746n, 15829145694278690179n, 16088537126945865529n, 9893216058924181362n, 7749492695127472003n, 12366520073655226703n, 463493832054564196n, 15458150092069033378n, 14414425345350368957n, 9661343807543145861n, 13620701859271368502n, 12076679759428932327n, 3190819268807046916n, 15095849699286165408n, 17823582141290972357n, 9434906062053853380n, 11139738838306857723n, 11793632577567316725n, 13924673547883572154n, 14742040721959145907n, 3570783879572301480n, 18427550902448932383n, 18298537904747540562n, 11517219314030582739n, 18354115218108294707n, 14396524142538228424n, 18330958004207980480n, 17995655178172785531n, 4466953431550423984n, 11247284486357990957n, 486002885505321038n, 14059105607947488696n, 5219189625309039202n, 17573882009934360870n, 6523987031636299002n, 10983676256208975543n, 17912549950054850588n, 13729595320261219429n, 17779001419141175331n, 17161994150326524287n, 8388693718644305452n, 10726246343954077679n, 12160462601793772764n, 13407807929942597099n, 10588892233814828051n, 16759759912428246374n, 8624429273841147159n, 10474849945267653984n, 778582277723329070n, 13093562431584567480n, 973227847154161338n, 16366953039480709350n, 1216534808942701673n, 10229345649675443343n, 14595392310871352257n, 12786682062094304179n, 13632554370161802418n, 15983352577617880224n, 12429006944274865118n, 9989595361011175140n, 7768129340171790699n, 12486994201263968925n, 9710161675214738374n, 15608742751579961156n, 16749388112445810871n, 9755464219737475723n, 1244995533423855986n, 12194330274671844653n, 15391302472061983695n, 15242912843339805817n, 5404070034795315907n, 9526820527087378635n, 14906758817815542202n, 11908525658859223294n, 14021762503842039848n, 14885657073574029118n, 8303831092947774002n, 9303535670983768199n, 578208414664970847n, 11629419588729710248n, 14557818573613377271n, 14536774485912137810n, 18197273217016721589n, 18170968107390172263n, 13523219484416126178n, 11356855067118857664n, 15369541205401160717n, 14196068833898572081n, 765182433041899281n, 17745086042373215101n, 5568164059729762005n, 11090678776483259438n, 5785945546544795205n, 13863348470604074297n, 16455803970035769814n, 17329185588255092872n, 6734696907262548556n, 10830740992659433045n, 4209185567039092847n, 13538426240824291306n, 9873167977226253963n, 16923032801030364133n, 3118087934678041646n, 10576895500643977583n, 4254647968387469981n, 13221119375804971979n, 706623942056949572n, 16526399219756214973n, 14718337982853350677n, 10328999512347634358n, 11504804248497038125n, 12911249390434542948n, 5157633273766521849n, 16139061738043178685n, 6447041592208152311n, 10086913586276986678n, 6335244004343789146n, 12608641982846233347n, 17142427042284512241n, 15760802478557791684n, 16816347784428252397n, 9850501549098619803n, 1286845328412881940n, 12313126936373274753n, 15443614715798266137n, 15391408670466593442n, 5469460339465668959n, 9619630419041620901n, 8030098730593431003n, 12024538023802026126n, 14649309431669176658n, 15030672529752532658n, 9088264752731695015n, 9394170331095332911n, 10291851488884697288n, 11742712913869166139n, 8253128342678483706n, 14678391142336457674n, 5704724409920716729n, 18347988927920572092n, 16354277549255671720n, 11467493079950357558n, 998051431430019017n, 14334366349937946947n, 10470936326142299579n, 17917957937422433684n, 8476984389250486570n, 11198723710889021052n, 14521487280136329914n, 13998404638611276315n, 18151859100170412392n, 17498005798264095394n, 18078137856785627587n, 10936253623915059621n, 15910522178918405146n, 13670317029893824527n, 6053094668365842720n, 17087896287367280659n, 2954682317029915496n, 10679935179604550411n, 17987577512639554849n, 13349918974505688014n, 17872785872372055657n, 16687398718132110018n, 13117610303610293764n, 10429624198832568761n, 12810192458183821506n, 13037030248540710952n, 2177682517447613171n, 16296287810675888690n, 2722103146809516464n, 10185179881672430431n, 6313000485183335694n, 12731474852090538039n, 3279564588051781713n, 15914343565113172548n, 17934513790346890853n, 9946464728195732843n, 1985699082112030975n, 12433080910244666053n, 16317181907922202431n, 15541351137805832567n, 6561419329620589327n, 9713344461128645354n, 11018416108653950185n, 12141680576410806693n, 4549648098962661924n, 15177100720513508366n, 10298746142130715309n, 9485687950320942729n, 1825030320404309164n, 11857109937901178411n, 6892973918932774359n, 14821387422376473014n, 4004531380238580045n, 9263367138985295633n, 16337890167931276240n, 11579208923731619542n, 6587304654631931588n, 14474011154664524427n, 17457502855144690293n, 18092513943330655534n, 17210192550503474962n, 11307821214581659709n, 6144684325637283947n, 14134776518227074636n, 12292541425473992838n, 17668470647783843295n, 15365676781842491048n, 11042794154864902059n, 16521077016292638761n, 13803492693581127574n, 16039660251938410547n, 17254365866976409468n, 10826203278068237376n, 10783978666860255917n, 15989749085647424168n, 13479973333575319897n, 6152128301777116498n, 16849966666969149871n, 12301846395648783526n, 10531229166855718669n, 14606183024921571560n, 13164036458569648337n, 4422670725869800738n, 16455045573212060421n, 10140024425764638826n, 10284403483257537763n, 8643358275316593218n, 12855504354071922204n, 6192511825718353619n, 16069380442589902755n, 7740639782147942024n, 10043362776618689222n, 2532056854628769813n, 12554203470773361527n, 12388443105140738074n, 15692754338466701909n, 10873867862998534689n, 9807971461541688693n, 9102010423587778132n, 12259964326927110866n, 15989199047912110569n, 15324955408658888583n, 10763126773035362404n, 9578097130411805364n, 13644483260788183358n, 11972621413014756705n, 17055604075985229198n, 14965776766268445882n, 7484447039699372786n, 9353610478917778676n, 9289465418239495895n, 11692013098647223345n, 11611831772799369869n, 14615016373309029182n, 679731660717048624n, 18268770466636286477n, 10073036612751086588n, 11417981541647679048n, 8601490892183123069n, 14272476927059598810n, 10751863615228903837n, 17840596158824498513n, 4216457482181353988n, 11150372599265311570n, 14164500972431816002n, 13937965749081639463n, 8482254178684994195n, 17422457186352049329n, 5991131704928854840n, 10889035741470030830n, 15273672361649004035n, 13611294676837538538n, 9868718415206479236n, 17014118346046923173n, 3112525982153323237n, 10633823966279326983n, 4251171748059520975n, 13292279957849158729n, 702278666647013314n, 16615349947311448411n, 5489534351736154547n, 10384593717069655257n, 1125115960621402640n, 12980742146337069071n, 6018080969204141204n, 16225927682921336339n, 2910915193077788601n, 10141204801825835211n, 17960223060169475539n, 12676506002282294014n, 17838592806784456520n, 15845632502852867518n, 13074868971625794843n, 9903520314283042199n, 3560107088838733872n, 12379400392853802748n, 18285191916330581053n, 15474250491067253436n, 4409745821703674700n, 9671406556917033397n, 11979463175419572495n, 12089258196146291747n, 1139270913992301907n, 15111572745182864683n, 15259146697772541096n, 9444732965739290427n, 7231123676894144233n, 11805916207174113034n, 4427218577690292387n, 14757395258967641292n, 14757395258967641292n, 9223372036854775808n, 0n, 11529215046068469760n, 0n, 14411518807585587200n, 0n, 18014398509481984000n, 0n, 11258999068426240000n, 0n, 14073748835532800000n, 0n, 17592186044416000000n, 0n, 10995116277760000000n, 0n, 13743895347200000000n, 0n, 17179869184000000000n, 0n, 10737418240000000000n, 0n, 13421772800000000000n, 0n, 16777216000000000000n, 0n, 10485760000000000000n, 0n, 13107200000000000000n, 0n, 16384000000000000000n, 0n, 10240000000000000000n, 0n, 12800000000000000000n, 0n, 16000000000000000000n, 0n, 10000000000000000000n, 0n, 12500000000000000000n, 0n, 15625000000000000000n, 0n, 9765625000000000000n, 0n, 12207031250000000000n, 0n, 15258789062500000000n, 0n, 9536743164062500000n, 0n, 11920928955078125000n, 0n, 14901161193847656250n, 0n, 9313225746154785156n, 4611686018427387904n, 11641532182693481445n, 5764607523034234880n, 14551915228366851806n, 11817445422220181504n, 18189894035458564758n, 5548434740920451072n, 11368683772161602973n, 17302829768357445632n, 14210854715202003717n, 7793479155164643328n, 17763568394002504646n, 14353534962383192064n, 11102230246251565404n, 4359273333062107136n, 13877787807814456755n, 5449091666327633920n, 17347234759768070944n, 2199678564482154496n, 10842021724855044340n, 1374799102801346560n, 13552527156068805425n, 1718498878501683200n, 16940658945086006781n, 6759809616554491904n, 10587911840678754238n, 6530724019560251392n, 13234889800848442797n, 17386777061305090048n, 16543612251060553497n, 7898413271349198848n, 10339757656912845935n, 16465723340661719040n, 12924697071141057419n, 15970468157399760896n, 16155871338926321774n, 15351399178322313216n, 10097419586828951109n, 4982938468024057856n, 12621774483536188886n, 10840359103457460224n, 15777218104420236108n, 4327076842467049472n, 9860761315262647567n, 11927795063396681728n, 12325951644078309459n, 10298057810818464256n, 15407439555097886824n, 8260886245095692416n, 9629649721936179265n, 5163053903184807760n, 12037062152420224081n, 11065503397408397604n, 15046327690525280101n, 18443565265187884909n, 9403954806578300063n, 13833071299956122020n, 11754943508222875079n, 12679653106517764621n, 14693679385278593849n, 11237880364719817872n, 18367099231598242312n, 212292400617608628n, 11479437019748901445n, 132682750386005392n, 14349296274686126806n, 4777539456409894645n, 17936620343357658507n, 15195296357367144114n, 11210387714598536567n, 7191217214140771119n, 14012984643248170709n, 4377335499248575995n, 17516230804060213386n, 10083355392488107898n, 10947644252537633366n, 10913783138732455340n, 13684555315672041708n, 4418856886560793367n, 17105694144590052135n, 5523571108200991709n, 10691058840368782584n, 10369760970266701674n, 13363823550460978230n, 12962201212833377092n, 16704779438076222788n, 6979379479186945558n, 10440487148797639242n, 13585484211346616781n, 13050608935997049053n, 7758483227328495169n, 16313261169996311316n, 14309790052588006865n, 10195788231247694572n, 18166990819722280098n, 12744735289059618216n, 4261994450943298507n, 15930919111324522770n, 5327493063679123134n, 9956824444577826731n, 7941369183226839863n, 12446030555722283414n, 5315025460606161924n, 15557538194652854267n, 15867153862612478214n, 9723461371658033917n, 7611128154919104931n, 12154326714572542396n, 14125596212076269068n, 15192908393215677995n, 17656995265095336336n, 9495567745759798747n, 8729779031470891258n, 11869459682199748434n, 6300537770911226168n, 14836824602749685542n, 17099044250493808518n, 9273015376718553464n, 6075216638131242420n, 11591269220898191830n, 7594020797664053025n, 14489086526122739788n, 269153960225290473n, 18111358157653424735n, 336442450281613091n, 11319598848533390459n, 7127805559067090038n, 14149498560666738074n, 4298070930406474644n, 17686873200833422592n, 14595960699862869113n, 11054295750520889120n, 9122475437414293195n, 13817869688151111400n, 11403094296767866494n, 17272337110188889250n, 14253867870959833118n, 10795210693868055781n, 13520353437777283602n, 13494013367335069727n, 3065383741939440791n, 16867516709168837158n, 17666787732706464701n, 10542197943230523224n, 6430056314514152534n, 13177747429038154030n, 8037570393142690668n, 16472184286297692538n, 823590954573587527n, 10295115178936057836n, 5126430365035880108n, 12868893973670072295n, 6408037956294850135n, 16086117467087590369n, 3398361426941174765n, 10053823416929743980n, 13653190937906703988n, 12567279271162179975n, 17066488672383379985n, 15709099088952724969n, 16721424822051837077n, 9818186930595453106n, 3533361486141316317n, 12272733663244316382n, 13640073894531421205n, 15340917079055395478n, 7826720331309500698n, 9588073174409622174n, 280014188641050032n, 11985091468012027717n, 9573389772656088348n, 14981364335015034646n, 16578423234247498339n, 9363352709384396654n, 5749828502977298558n, 11704190886730495817n, 16410657665576399005n, 14630238608413119772n, 6678264026688335045n, 18287798260516399715n, 8347830033360418806n, 11429873912822749822n, 2911550761636567802n, 14287342391028437277n, 12862810488900485560n, 17859177988785546597n, 2243455055843443238n, 11161986242990966623n, 3708002419115845976n, 13952482803738708279n, 23317005467419566n, 17440603504673385348n, 13864204312116438170n, 10900377190420865842n, 17888499731927549664n, 13625471488026082303n, 13137252628054661272n, 17031839360032602879n, 11809879766640938686n, 10644899600020376799n, 14298703881791668535n, 13306124500025470999n, 13261693833812197764n, 16632655625031838749n, 11965431273837859301n, 10395409765644899218n, 9784237555362356015n, 12994262207056124023n, 3006924907348169211n, 16242827758820155028n, 17593714189467375226n, 10151767349262596893n, 1772699331562333708n, 12689709186578246116n, 6827560182880305039n, 15862136483222807645n, 8534450228600381299n, 9913835302014254778n, 7639874402088932264n, 12392294127517818473n, 326470965756389522n, 15490367659397273091n, 5019774725622874806n, 9681479787123295682n, 831516194300602802n, 12101849733904119602n, 10262767279730529310n, 15127312167380149503n, 3605087062808385830n, 9454570104612593439n, 9170708441896323000n, 11818212630765741799n, 6851699533943015846n, 14772765788457177249n, 3952938399001381903n, 9232978617785735780n, 13999801545444333449n, 11541223272232169725n, 17499751931805416812n, 14426529090290212157n, 8039631859474607303n, 18033161362862765196n, 14661225842770647033n, 11270725851789228247n, 18386638188586430203n, 14088407314736535309n, 18371611717305649850n, 17610509143420669137n, 9129456591349898601n, 11006568214637918210n, 17235125415662156385n, 13758210268297397763n, 12320534732722919674n, 17197762835371747204n, 10788982397476261688n, 10748601772107342002n, 15966486035277439363n, 13435752215134177503n, 10734735507242023396n, 16794690268917721879n, 8806733365625141341n, 10496681418073576174n, 12421737381156795194n, 13120851772591970218n, 6303799689591218185n, 16401064715739962772n, 17103121648843798539n, 10250665447337476733n, 1466078993672598279n, 12813331809171845916n, 6444284760518135752n, 16016664761464807395n, 8055355950647669691n, 10010415475915504622n, 2728754459941099604n, 12513019344894380777n, 12634315111781150314n, 15641274181117975972n, 1957835834444274180n, 9775796363198734982n, 10447019433382447170n, 12219745453998418728n, 3835402254873283155n, 15274681817498023410n, 4794252818591603944n, 9546676135936264631n, 7608094030047140369n, 11933345169920330789n, 4898431519131537557n, 14916681462400413486n, 10734725417341809851n, 9322925914000258429n, 2097517367411243253n, 11653657392500323036n, 7233582727691441970n, 14567071740625403795n, 9041978409614302462n, 18208839675781754744n, 6690786993590490174n, 11380524797363596715n, 4181741870994056359n, 14225655996704495894n, 615491320315182544n, 17782069995880619867n, 9992736187248753989n, 11113793747425387417n, 3939617107816777291n, 13892242184281734271n, 9536207403198359517n, 17365302730352167839n, 7308573235570561493n, 10853314206470104899n, 11485387299872682789n, 13566642758087631124n, 9745048106413465582n, 16958303447609538905n, 12181310133016831978n, 10598939654755961816n, 695789805494438130n, 13248674568444952270n, 869737256868047663n, 16560843210556190337n, 10310543607939835386n, 10350527006597618960n, 17973304801030866876n, 12938158758247023701n, 4019886927579031980n, 16172698447808779626n, 9636544677901177879n, 10107936529880487266n, 10634526442115624078n, 12634920662350609083n, 4069786015789754290n, 15793650827938261354n, 475546501309804958n, 9871031767461413346n, 4908902581746016003n, 12338789709326766682n, 15359500264037295811n, 15423487136658458353n, 9976003293191843956n, 9639679460411536470n, 17764217104313372233n, 12049599325514420588n, 12981899343536939483n, 15061999156893025735n, 16227374179421174354n, 9413749473058141084n, 17059637889779315827n, 11767186841322676356n, 2877803288514593168n, 14708983551653345445n, 3597254110643241460n, 18386229439566681806n, 9108253656731439729n, 11491393399729176129n, 1080972517029761926n, 14364241749661470161n, 5962901664714590312n, 17955302187076837701n, 12065313099320625794n, 11222063866923023563n, 9846663696289085073n, 14027579833653779454n, 7696643601933968437n, 17534474792067224318n, 397432465562684739n, 10959046745042015198n, 14083453346258841674n, 13698808431302518998n, 8380944645968776284n, 17123510539128148748n, 1252808770606194547n, 10702194086955092967n, 10006377518483647400n, 13377742608693866209n, 7896285879677171346n, 16722178260867332761n, 14482043368023852087n, 10451361413042082976n, 2133748077373825698n, 13064201766302603720n, 2667185096717282123n, 16330252207878254650n, 3333981370896602653n, 10206407629923909156n, 6695424375237764562n, 12758009537404886445n, 8369280469047205703n, 15947511921756108056n, 15073286604736395033n, 9967194951097567535n, 9420804127960246895n, 12458993688871959419n, 7164319141522920715n, 15573742111089949274n, 4343712908476262990n, 9733588819431218296n, 7326506586225052273n, 12166986024289022870n, 9158133232781315341n, 15208732530361278588n, 2224294504121868368n, 9505457831475799117n, 10613556101930943538n, 11881822289344748896n, 17878631145841067327n, 14852277861680936121n, 3901544858591782542n, 9282673663550585075n, 13967680582688333849n, 11603342079438231344n, 12847914709933029407n, 14504177599297789180n, 16059893387416286759n, 18130221999122236476n, 1628122660560806833n, 11331388749451397797n, 10240948699705280078n, 14164235936814247246n, 17412871893058988002n, 17705294921017809058n, 12542717829468959195n, 11065809325636130661n, 12450884661845487401n, 13832261657045163327n, 1728547772024695539n, 17290327071306454158n, 15995742770313033136n, 10806454419566533849n, 5385653213018257806n, 13508068024458167311n, 11343752534700210161n, 16885085030572709139n, 9568004649947874797n, 10553178144107943212n, 3674159897003727796n, 13191472680134929015n, 4592699871254659745n, 16489340850168661269n, 1129188820640936778n, 10305838031355413293n, 3011586022114279438n, 12882297539194266616n, 8376168546070237202n, 16102871923992833270n, 10470210682587796502n, 10064294952495520794n, 1932195658189984910n, 12580368690619400992n, 11638616609592256945n, 15725460863274251240n, 14548270761990321182n, 9828413039546407025n, 9092669226243950738n, 12285516299433008781n, 15977522551232326327n, 15356895374291260977n, 6136845133758244197n, 9598059608932038110n, 15364743254667372383n, 11997574511165047638n, 9982557031479439671n, 14996968138956309548n, 3254824252494523781n, 9373105086847693467n, 11257637194663853171n, 11716381358559616834n, 9460360474902428559n, 14645476698199521043n, 2602078556773259891n, 18306845872749401303n, 17087656251248738576n, 11441778670468375814n, 17597314184671543466n, 14302223338085469768n, 12773270693984653525n, 17877779172606837210n, 15966588367480816906n, 11173611982879273256n, 14590803748102898470n, 13967014978599091570n, 18238504685128623088n, 17458768723248864463n, 13574758819556003052n, 10911730452030540289n, 15401753289863583763n, 13639663065038175362n, 5417133557047315992n, 17049578831297719202n, 15994788983163920798n, 10655986769561074501n, 14608429132904838403n, 13319983461951343127n, 4425478360848884291n, 16649979327439178909n, 920161932633717460n, 10406237079649486818n, 2880944217109767365n, 13007796349561858522n, 12824552308241985014n, 16259745436952323153n, 6807318348447705459n, 10162340898095201970n, 15783789013848285672n, 12702926122619002463n, 10506364230455581282n, 15878657653273753079n, 8521269269642088699n, 9924161033296095674n, 12243322321167387293n, 12405201291620119593n, 6080780864604458308n, 15506501614525149491n, 12212662099182960789n, 9691563509078218432n, 5327070802775656541n, 12114454386347773040n, 6658838503469570676n, 15143067982934716300n, 8323548129336963345n, 9464417489334197687n, 14425589617690377899n, 11830521861667747109n, 13420301003685584469n, 14788152327084683887n, 2940318199324816875n, 9242595204427927429n, 8755227902219092403n, 11553244005534909286n, 15555720896201253407n, 14441555006918636608n, 10221279083396790951n, 18051943758648295760n, 12776598854245988689n, 11282464849155184850n, 7985374283903742931n, 14103081061443981063n, 758345818024902856n, 17628851326804976328n, 14782990327813292282n, 11018032079253110205n, 9239368954883307676n, 13772540099066387756n, 16160897212031522499n, 17215675123832984696n, 1754377441329851508n, 10759796952395615435n, 1096485900831157192n, 13449746190494519293n, 15205665431321110202n, 16812182738118149117n, 5172023733869224041n, 10507614211323843198n, 5538357842881958977n, 13134517764154803997n, 16146319340457224530n, 16418147205193504997n, 6347841120289366950n, 10261342003245940623n, 6273243709394548296n, 12826677504057425779n, 3229868618315797466n, 16033346880071782223n, 17872393828176910545n, 10020841800044863889n, 18087775170251650946n, 12526052250056079862n, 8774660907532399971n, 15657565312570099828n, 1744954097560724156n, 9785978320356312392n, 10313968347830228405n, 12232472900445390490n, 12892460434787785506n, 15290591125556738113n, 6892203506629956075n, 9556619453472961320n, 15836842237712192307n, 11945774316841201651n, 1349308723430688768n, 14932217896051502063n, 15521693959570524672n, 9332636185032188789n, 16618587752372659776n, 11665795231290235987n, 6938176635183661008n, 14582244039112794984n, 4061034775552188356n, 18227805048890993730n, 5076293469440235445n, 11392378155556871081n, 7784369436827535057n, 14240472694446088851n, 14342147814461806725n, 17800590868057611064n, 13315998749649870503n, 11125369292536006915n, 8322499218531169064n, 13906711615670008644n, 5791438004736573426n, 17383389519587510805n, 7239297505920716783n, 10864618449742194253n, 6830403950414141941n, 13580773062177742816n, 13149690956445065330n, 16975966327722178520n, 16437113695556331663n, 10609978954826361575n, 10273196059722707289n, 13262473693532951969n, 8229809056225996208n, 16578092116916189961n, 14898947338709883164n, 10361307573072618726n, 2394313059052595121n, 12951634466340773407n, 12216263360670519709n, 16189543082925966759n, 10658643182410761733n, 10118464426828729224n, 13579181016647807939n, 12648080533535911530n, 16973976270809759924n, 15810100666919889413n, 11994098301657424097n, 9881312916824930883n, 9802154447749584012n, 12351641146031163604n, 7641007041259592112n, 15439551432538954505n, 9551258801574490140n, 9649719645336846565n, 17498751797052526097n, 12062149556671058207n, 8038381691033493909n, 15077686945838822759n, 5436291095364479483n];
const _M0FPC28internal7strconv12double__info = new _M0TPC28internal7strconv9FloatInfo(52, 11, -1023);
const _M0FPC28internal7strconv25min__exponent__fast__path = 18446744073709551594n;
const _M0FPC28internal7strconv25max__exponent__fast__path = 22n;
const _M0FPC28internal7strconv36max__exponent__disguised__fast__path = 37n;
const _M0FPC28internal7strconv25max__mantissa__fast__path = 9007199254740992n;
const _M0FPC28internal7strconv6powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022 = { _0: 0, _1: "" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023 = { _0: 1, _1: "5" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024 = { _0: 1, _1: "25" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025 = { _0: 1, _1: "125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026 = { _0: 2, _1: "625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027 = { _0: 2, _1: "3125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028 = { _0: 2, _1: "15625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029 = { _0: 3, _1: "78125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030 = { _0: 3, _1: "390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031 = { _0: 3, _1: "1953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032 = { _0: 4, _1: "9765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033 = { _0: 4, _1: "48828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034 = { _0: 4, _1: "244140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035 = { _0: 4, _1: "1220703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036 = { _0: 5, _1: "6103515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037 = { _0: 5, _1: "30517578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038 = { _0: 5, _1: "152587890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039 = { _0: 6, _1: "762939453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040 = { _0: 6, _1: "3814697265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041 = { _0: 6, _1: "19073486328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042 = { _0: 7, _1: "95367431640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043 = { _0: 7, _1: "476837158203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044 = { _0: 7, _1: "2384185791015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045 = { _0: 7, _1: "11920928955078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046 = { _0: 8, _1: "59604644775390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047 = { _0: 8, _1: "298023223876953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048 = { _0: 8, _1: "1490116119384765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049 = { _0: 9, _1: "7450580596923828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050 = { _0: 9, _1: "37252902984619140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051 = { _0: 9, _1: "186264514923095703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052 = { _0: 10, _1: "931322574615478515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053 = { _0: 10, _1: "4656612873077392578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054 = { _0: 10, _1: "23283064365386962890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055 = { _0: 10, _1: "116415321826934814453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056 = { _0: 11, _1: "582076609134674072265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057 = { _0: 11, _1: "2910383045673370361328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058 = { _0: 11, _1: "14551915228366851806640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059 = { _0: 12, _1: "72759576141834259033203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060 = { _0: 12, _1: "363797880709171295166015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061 = { _0: 12, _1: "1818989403545856475830078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062 = { _0: 13, _1: "9094947017729282379150390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063 = { _0: 13, _1: "45474735088646411895751953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064 = { _0: 13, _1: "227373675443232059478759765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065 = { _0: 13, _1: "1136868377216160297393798828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066 = { _0: 14, _1: "5684341886080801486968994140625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067 = { _0: 14, _1: "28421709430404007434844970703125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068 = { _0: 14, _1: "142108547152020037174224853515625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069 = { _0: 15, _1: "710542735760100185871124267578125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070 = { _0: 15, _1: "3552713678800500929355621337890625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071 = { _0: 15, _1: "17763568394002504646778106689453125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072 = { _0: 16, _1: "88817841970012523233890533447265625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073 = { _0: 16, _1: "444089209850062616169452667236328125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074 = { _0: 16, _1: "2220446049250313080847263336181640625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075 = { _0: 16, _1: "11102230246251565404236316680908203125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076 = { _0: 17, _1: "55511151231257827021181583404541015625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077 = { _0: 17, _1: "277555756156289135105907917022705078125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078 = { _0: 17, _1: "1387778780781445675529539585113525390625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079 = { _0: 18, _1: "6938893903907228377647697925567626953125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080 = { _0: 18, _1: "34694469519536141888238489627838134765625" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081 = { _0: 18, _1: "173472347597680709441192448139190673828125" };
const _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082 = { _0: 19, _1: "867361737988403547205962240695953369140625" };
const _M0FPC28internal7strconv19left__shift__cheats = [_M0FPC28internal7strconv19left__shift__cheatsN5tupleS1022, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1023, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1024, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1025, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1026, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1027, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1028, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1029, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1030, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1031, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1032, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1033, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1034, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1035, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1036, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1037, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1038, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1039, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1040, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1041, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1042, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1043, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1044, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1045, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1046, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1047, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1048, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1049, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1050, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1051, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1052, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1053, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1054, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1055, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1056, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1057, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1058, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1059, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1060, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1061, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1062, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1063, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1064, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1065, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1066, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1067, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1068, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1069, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1070, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1071, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1072, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1073, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1074, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1075, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1076, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1077, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1078, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1079, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1080, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1081, _M0FPC28internal7strconv19left__shift__cheatsN5tupleS1082];
const _M0FPC28internal7strconv10int__pow10 = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC28internal7strconv5table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC28internal7strconv12checked__mulN6constrS1163 = 0n;
const _M0FPC14json17int__pow10__table = [1n, 10n, 100n, 1000n, 10000n, 100000n, 1000000n, 10000000n, 100000000n, 1000000000n, 10000000000n, 100000000000n, 1000000000000n, 10000000000000n, 100000000000000n, 1000000000000000n];
const _M0FPC14json12pow10__table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const _M0FPC14json12checked__mulN6constrS1890 = 0n;
(() => {
})();
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 0, 1, 2, 5];
const _M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312 = [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 3, 4, 14, 14, 14, 14, 14, 14, 14, 7, 14, 14, 14, 14, 5, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 6, 14, 14, 14, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 8, 14, 14, 14, 14, 14, 1, 14, 14, 9, 14, 14, 14, 14, 14, 14, 14, 14, 10, 14, 14, 14, 14, 14, 14, 11, 14, 14, 14, 14, 14, 14, 14, 14, 14, 12, 14, 14, 14, 14, 14, 14, 14, 14, 13, 14, 1, 14, 14, 14, 14, 14, 14, 14];
const _M0MPC16string10StringView4findN6constrS9919 = 0;
const _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 = 16;
const _M0FPC15debug6renderN6constrS1683 = 16;
const _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe9DataFrameE = false;
const _M0FPC15debug10assert__eqN6constrS1686GORP25SDJM519moonbit_2ddataframe5ValueE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGsEE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe5ValueE = false;
const _M0FPC15debug10assert__eqN6constrS1686GsE = false;
const _M0FPC15debug10assert__eqN6constrS1686GiE = false;
const _M0IPC14json4JsonPC15debug5Debug8to__reprN6constrS1685 = "repr";
const _M0FPC15debug10assert__eqN6constrS1686GRPB4JsonE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE = false;
const _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe11ReadOptionsE = false;
const _bind = [{ _0: 0, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__0, _1: ["inner join"] } }, { _0: 1, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__1, _1: ["left join keeps every left row"] } }, { _0: 2, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__2, _1: ["right join keeps every right row"] } }, { _0: 3, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__3, _1: ["outer join keeps both sides"] } }, { _0: 4, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__4, _1: ["join suffixes a colliding column"] } }, { _0: 5, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__5, _1: ["join on a missing key raises"] } }, { _0: 6, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__6, _1: ["concat_rows unions columns and pads"] } }, { _0: 7, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__7, _1: ["concat_columns places side by side"] } }, { _0: 8, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__8, _1: ["concat_columns rejects a row mismatch"] } }, { _0: 9, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__9, _1: ["distinct drops duplicate rows"] } }, { _0: 10, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__10, _1: ["distinct_by uses only the given columns"] } }, { _0: 11, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__11, _1: ["drop_nulls and fill_null"] } }, { _0: 12, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__12, _1: ["cast between types"] } }, { _0: 13, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__13, _1: ["filter helpers"] } }, { _0: 14, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__14, _1: ["a null bound matches nothing in ordering filters"] } }, { _0: 15, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__15, _1: ["series statistics ignore nulls"] } }, { _0: 16, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__16, _1: ["median of an even count averages the middle"] } }, { _0: 17, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__17, _1: ["variance and std need two values"] } }, { _0: 18, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__18, _1: ["series unique and value_counts"] } }, { _0: 19, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__19, _1: ["series first and last skip nulls"] } }, { _0: 20, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__20, _1: ["extended aggregations"] } }, { _0: 21, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__21, _1: ["describe summarises numeric columns"] } }, { _0: 22, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__22, _1: ["dataframe value_counts"] } }, { _0: 23, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__23, _1: ["csv file round trip"] } }, { _0: 24, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__24, _1: ["json file round trip"] } }, { _0: 25, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__25, _1: ["read options constructor"] } }, { _0: 26, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__26, _1: ["read options defaults"] } }, { _0: 27, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__27, _1: ["read options custom null spellings"] } }, { _0: 28, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__28, _1: ["reading a missing file raises"] } }];
const _tmp = { _0: "features_wbtest.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 29), undefined) };
const _bind$2 = [{ _0: 0, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__0, _1: ["Value::parse infers types"] } }, { _0: 1, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__1, _1: ["from_csv with header"] } }, { _0: 2, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__2, _1: ["from_csv without header"] } }, { _0: 3, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__3, _1: ["from_csv quoted fields"] } }, { _0: 4, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__4, _1: ["to_csv round trip"] } }, { _0: 5, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__5, _1: ["filter"] } }, { _0: 6, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__6, _1: ["select and drop"] } }, { _0: 7, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__7, _1: ["sort_by"] } }, { _0: 8, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__8, _1: ["with_column and map_column"] } }, { _0: 9, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__9, _1: ["rename"] } }, { _0: 10, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__10, _1: ["head tail slice"] } }, { _0: 11, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__11, _1: ["series aggregates"] } }, { _0: 12, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__12, _1: ["group_by and aggregate"] } }, { _0: 13, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__13, _1: ["group_by count convenience"] } }, { _0: 14, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__14, _1: ["json records round trip"] } }, { _0: 15, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__15, _1: ["json column-oriented"] } }, { _0: 16, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__16, _1: ["missing column raises"] } }, { _0: 17, _1: { _0: _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__17, _1: ["show renders a table"] } }];
const _bind$3 = [_tmp, { _0: "dataframe_wbtest.mbt", _1: _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$2, 0, 18), undefined) }];
const _M0FP25SDJM519moonbit_2ddataframe48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$3, 0, 2), undefined);
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0MPC14json4Json5array(array) {
  return new _M0DTPB4Json5Array(array);
}
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_5642, _x_5643) {
  const _Failure = _x_5642;
  const _$42$arg_5644 = _Failure._0;
  _x_5643.method_table.method_0(_x_5643.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_5643, _$42$arg_5644);
  _x_5643.method_table.method_0(_x_5643.self, ")");
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0FPB13clamp__offset(offset, len) {
  return offset < 0 ? 0 : offset > len ? len : offset;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$2 = len - 1 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$2 = len - 1 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        if (_tmp$3 >>> 0 < dst.length) {
          dst[_tmp$3] = _tmp$4 >>> 0 < src.length ? src[_tmp$4] : $oob();
        } else {
          $oob();
        }
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGyEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(src, allocate_len, src_offset, dst_offset, blit_len) {
  const dst = new Uint8Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGyE(dst, dst_offset, src, src_offset, blit_len);
  return dst;
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGbE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGbE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPB9SourceLocE(self, obj) {
  _M0IPB9SourceLocPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGdE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGdE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS4038(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView21clamped__view_2einner(self, start, end) {
  const len = self.end - self.start | 0;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  const str = self.str;
  const base = self.start;
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + lo | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + lo | 0) - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(str.charCodeAt(base + hi | 0)) && _M0MPC16uint166UInt1622is__leading__surrogate(str.charCodeAt((base + hi | 0) - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(str, base + lo | 0, base + lo | 0) : new _M0TPC16string10StringView(str, base + lo | 0, base + hi | 0);
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView21clamped__view_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: logger, _1: self };
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  _L: while (true) {
    const i = _tmp$2;
    const seg = _tmp$3;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp$2 = i + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp$2 = i + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp$2 = i + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp$2 = i + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_0(logger.self, "}");
            _tmp$2 = i + 1 | 0;
            _tmp$3 = i + 1 | 0;
            continue _L;
          } else {
            _tmp$2 = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS4021(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp$2 = i + 1 | 0;
    _tmp$3 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array13ReadOnlyArray11unsafe__getGiE(self, index) {
  return self[index];
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0MPC16uint646UInt648to__byte(self) {
  return (Number(BigInt.asIntN(32, self)) | 0) & 255;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPC14json4Json6number(number, repr) {
  return new _M0DTPB4Json6Number(number, repr);
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IPC15tuple6Tuple2PB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueiE(self, other) {
  return _M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(self._0, other._0) && self._1 === other._1;
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGORP25SDJM519moonbit_2ddataframe5ValueE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe5ValueE(x, y) {
  return !_M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(x, y) {
  return !_M0IPC15array5ArrayPB2Eq5equalGURP25SDJM519moonbit_2ddataframe5ValueiEE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe8DataTypeE(x, y) {
  return !_M0IP25SDJM519moonbit_2ddataframe8DataTypePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(x, y) {
  return !_M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe9DataFrameE(x, y) {
  return !_M0IP25SDJM519moonbit_2ddataframe9DataFramePB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPB4JsonE(x, y) {
  return !_M0IPC14json4JsonPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__gtGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) > 0;
}
function _M0IP016_24default__implPB7Compare6op__geGsE(x, y) {
  return _M0IPC16string6StringPB7Compare7compare(x, y) >= 0;
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String21clamped__view_2einner(self, start, end) {
  const len = self.length;
  let lo = start < 0 ? 0 : start > len ? len : start;
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _e = _Some;
    hi = _e < 0 ? 0 : _e > len ? len : _e;
  }
  if (lo > 0 && (lo < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(lo)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(lo - 1 | 0))))) {
    lo = lo + 1 | 0;
  }
  if (hi > 0 && (hi < len && (_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(hi)) && _M0MPC16uint166UInt1622is__leading__surrogate(self.charCodeAt(hi - 1 | 0))))) {
    hi = hi - 1 | 0;
  }
  return lo >= hi ? new _M0TPC16string10StringView(self, lo, lo) : new _M0TPC16string10StringView(self, lo, hi);
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String21clamped__view_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGbE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC14bool4BoolPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGdE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16double6DoublePB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRP25SDJM519moonbit_2ddataframe9DataFrameE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP25SDJM519moonbit_2ddataframe9DataFramePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC14json10ParseErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRP25SDJM519moonbit_2ddataframe14DataFrameErrorE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP25SDJM519moonbit_2ddataframe14DataFrameErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGUsRPB4JsonEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$4 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GUsRPB4JsonEE;
  } else {
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GUsRPB4JsonEE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$4 = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9910GcE;
  } else {
    if (_bind$4 === undefined) {
    } else {
      const _Some = _bind$4;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9909GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0FPB4failGuE(msg, loc) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(9);
  _M0MPB13StringBuilder13write__objectGRPB9SourceLocE(_string_builder, loc);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " FAILED: ");
  _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, msg);
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0MPB13StringBuilder10to__string(_string_builder)));
}
function _M0FPB12assert__true(x, msg, loc) {
  if (!x) {
    let fail_msg;
    if (msg === undefined) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGbE(_string_builder, x);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "` is not true");
      const _bind$4 = _M0MPB13StringBuilder10to__string(_string_builder);
      const msg$2 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
      fail_msg = msg$2;
    } else {
      const _Some = msg;
      const _msg = _Some;
      fail_msg = _msg;
    }
    return _M0FPB4failGuE(fail_msg, loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0MPB4Iter3newGUsRPB4JsonEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GUsRPB4JsonEE;
  }
  return new _M0TPB4IterGUsRPB4JsonEE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9917GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC15array10FixedArray21clamped__view_2einnerGkE(self, start, end) {
  const len = self.length;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$4 = self;
  return new _M0TPB9ArrayViewGkE(_bind$4, lo, lo + count | 0);
}
function _M0MPC15array10FixedArray5makeiGkE(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp$2 = 1;
    while (true) {
      const i = _tmp$2;
      if (i < length) {
        if (i >>> 0 < array.length) {
          array[i] = value(i);
        } else {
          $oob();
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function _M0MPC16string10StringView11code__units(self) {
  return _M0MPC15array10FixedArray21clamped__view_2einnerGkE(_M0MPC15array10FixedArray5makeiGkE(self.str.length, (i) => self.str.charCodeAt(i)), self.start, self.end);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind$4 = self.str;
  const _bind$5 = self.start;
  const _bind$6 = self.end;
  let _tmp$2 = _bind$5;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String11from__array(chars) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(Math.imul(chars.end - chars.start | 0, 4) | 0);
  const _bind$4 = chars.end - chars.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const c = chars.buf[chars.start + _ | 0];
      _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp$2 = start_offset;
  let _tmp$3 = 0;
  while (true) {
    const index = _tmp$2;
    const count = _tmp$3;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp$2 = index + 2 | 0;
          _tmp$3 = count + 1 | 0;
          continue;
        } else {
          _M0FPC15abort5abortGuE("invalid surrogate pair");
        }
      }
      _tmp$2 = index + 1 | 0;
      _tmp$3 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp$2 = end_offset;
  let _tmp$3 = 0;
  while (true) {
    const utf16_offset = _tmp$2;
    const char_count = _tmp$3;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp$2 = utf16_offset - 2 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$2 = utf16_offset - 1 | 0;
        _tmp$3 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$2 = start_offset;
    let _tmp$3 = 0;
    while (true) {
      const utf16_offset = _tmp$2;
      const char_count = _tmp$3;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp$2 = utf16_offset + 2 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$2 = utf16_offset + 1 | 0;
          _tmp$3 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPB13StringBuilder5reset(self) {
  self.val = "";
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$3 = k - 1 | 0;
          k = _tmp$3 >>> 0 < table.length ? table[_tmp$3] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp$2 = target_start;
  let _tmp$3 = 0;
  while (true) {
    const pos = _tmp$2;
    const failures = _tmp$3;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp$2 = found + 1 | 0;
      _tmp$3 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9919;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRPC16string10StringViewE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp$2;
        if (len === 0) {
          _tmp$2 = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp$2 = (total / n | 0) === len;
        }
        if (_tmp$2) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRPC16string10StringViewE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC14char4Char10utf16__len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function _M0MPC16string10StringView8find__by(self, pred) {
  const _bind$4 = self.str;
  const _bind$5 = self.start;
  const _bind$6 = self.end;
  let _tmp$2 = _bind$5;
  let _tmp$3 = 0;
  while (true) {
    const _string_index = _tmp$2;
    const offset = _tmp$3;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      if (pred(_decoded_char)) {
        return offset;
      }
      _tmp$2 = _decoded_next_string_index;
      _tmp$3 = offset + _M0MPC14char4Char10utf16__len(_decoded_char) | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC16string6String8find__by(self, pred) {
  return _M0MPC16string10StringView8find__by(new _M0TPC16string10StringView(self, 0, self.length), pred);
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGsE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGRPB5ArrayGsEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGdE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGyE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGcE(self);
    if (_bind$4 === -1) {
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind$4 = str.end - str.start | 0;
  switch (_bind$4) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$5 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$5 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind$4 = chars.str;
  const _bind$5 = chars.start;
  const _bind$6 = chars.end;
  let _tmp$2 = _bind$5;
  while (true) {
    const _string_index = _tmp$2;
    if (_string_index < _bind$6) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$7 = _bind$4.charCodeAt(_string_index);
        if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
          const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
          if (_bind$8 >= 56320 && _bind$8 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$7 = code >>> 5 | 0;
        switch (_bind$7) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp$2 = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind$4 = code >>> 5 | 0;
    switch (_bind$4) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = start;
  while (true) {
    const pos = _tmp$2;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp$2 = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp$2 = end;
  while (true) {
    const pos = _tmp$2;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp$2 = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp$2 = 0;
            while (true) {
              const i = _tmp$2;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp$2 = i + 2 | 0;
                  continue;
                }
                _tmp$2 = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$3 = x.str;
      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$4;
      if (_bind$4 === undefined) {
        _tmp$4 = x.end;
      } else {
        const _Some = _bind$4;
        _tmp$4 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$3, _tmp$4, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp$2 = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind$4 = _M0FPB23build__ascii__char__set(chars);
  if (_bind$4 === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string6String14contains__char(self, c) {
  return _M0MPC16string10StringView14contains__char(new _M0TPC16string10StringView(self, 0, self.length), c);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6932, 0, _M0MPC16string6String4trimN7_2abindS6932.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGssE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind$4 = self.size_hint;
  let result;
  if (_bind$4 === undefined) {
    result = [];
  } else {
    const _Some = _bind$4;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGsE(_n);
  }
  while (true) {
    const _bind$5 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$5 === undefined) {
      break;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String12replace__all(self, old, new_) {
  const len = self.length;
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(len);
  const old_len = old.end - old.start | 0;
  const new$2 = _M0MPC16string10StringView9to__owned(new_);
  if (old_len === 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
    const _bind$4 = self.length;
    let _tmp$2 = 0;
    while (true) {
      const _string_index = _tmp$2;
      if (_string_index < _bind$4) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$5 = self.charCodeAt(_string_index);
          if (_bind$5 >= 55296 && _bind$5 <= 56319 && (_string_index + 1 | 0) < _bind$4) {
            const _bind$6 = self.charCodeAt(_string_index + 1 | 0);
            if (_bind$6 >= 56320 && _bind$6 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$5 - 55296 | 0, 1024) | 0) + _bind$6 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$5);
            break _L;
          }
        }
        _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        _tmp$2 = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  } else {
    const first_end = _M0MPC16string6String4find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp$2 = new _M0TPC16string10StringView(self, 0, self.length);
      let _tmp$3 = _end;
      while (true) {
        const view = _tmp$2;
        const end = _tmp$3;
        const seg = _M0MPC16string10StringView12view_2einner(view, 0, end);
        _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(seg), _M0MPC16string10StringView13start__offset(seg), seg.end - seg.start | 0);
        _M0IPB13StringBuilderPB6Logger13write__string(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = _M0MPC16string10StringView12view_2einner(view, end + old_len | 0, undefined);
          const _bind$4 = _M0MPC16string10StringView4find(next_view, old);
          if (_bind$4 === undefined) {
            _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(next_view), _M0MPC16string10StringView13start__offset(next_view), next_view.end - next_view.start | 0);
            break;
          } else {
            const _Some$2 = _bind$4;
            const _next_end = _Some$2;
            _tmp$2 = next_view;
            _tmp$3 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return _M0MPB13StringBuilder10to__string(buf);
    }
  }
}
function _M0MPC14char4Char20is__ascii__uppercase(self) {
  return self >= 65 && self <= 90;
}
function _M0MPC16string6String9to__lower(self) {
  const _bind$4 = _M0MPC16string6String8find__by(self, (c) => _M0MPC14char4Char20is__ascii__uppercase(c));
  if (_bind$4 === undefined) {
    return self;
  } else {
    const _Some = _bind$4;
    const _idx = _Some;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
    const head = _M0MPC16string6String12view_2einner(self, 0, _idx);
    _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(buf, _M0MPC16string10StringView4data(head), _M0MPC16string10StringView13start__offset(head), head.end - head.start | 0);
    const _bind$5 = _M0MPC16string6String12view_2einner(self, _idx, undefined);
    const _bind$6 = _bind$5.str;
    const _bind$7 = _bind$5.start;
    const _bind$8 = _bind$5.end;
    let _tmp$2 = _bind$7;
    while (true) {
      const _string_index = _tmp$2;
      if (_string_index < _bind$8) {
        let _decoded_next_string_index;
        let _decoded_char;
        _L: {
          const _bind$9 = _bind$6.charCodeAt(_string_index);
          if (_bind$9 >= 55296 && _bind$9 <= 56319 && (_string_index + 1 | 0) < _bind$8) {
            const _bind$10 = _bind$6.charCodeAt(_string_index + 1 | 0);
            if (_bind$10 >= 56320 && _bind$10 <= 57343) {
              _decoded_next_string_index = _string_index + 2 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$9 - 55296 | 0, 1024) | 0) + _bind$10 | 0) - 56320 | 0) + 65536 | 0);
              break _L;
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$9);
              break _L;
            }
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$9);
            break _L;
          }
        }
        if (_M0MPC14char4Char20is__ascii__uppercase(_decoded_char)) {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char + 32 | 0);
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(buf, _decoded_char);
        }
        _tmp$2 = _decoded_next_string_index;
        continue;
      } else {
        break;
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16string10StringView9get__char(self, idx) {
  if (idx >= 0 && idx < (self.end - self.start | 0)) {
    const c = self.str.charCodeAt(self.start + idx | 0);
    if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
      if ((idx + 1 | 0) < (self.end - self.start | 0)) {
        const next = self.str.charCodeAt(self.start + (idx + 1 | 0) | 0);
        return _M0MPC16uint166UInt1623is__trailing__surrogate(next) ? _M0FPB32code__point__of__surrogate__pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return _M0MPC16uint166UInt1623is__trailing__surrogate(c) ? -1 : _M0MPC16uint166UInt1616unsafe__to__char(c);
    }
  } else {
    return -1;
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0IPC16string6StringPB7Compare7compare(self, other) {
  const len = self.length;
  const _bind$4 = $compare_int(len, other.length);
  if (_bind$4 === 0) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const order = _M0IPC16uint166UInt16PB7Compare7compare(self.charCodeAt(i), other.charCodeAt(i));
        if (order !== 0) {
          return order;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return 0;
  } else {
    return _bind$4;
  }
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(self) {
  return _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(new _M0TPB9ArrayViewGRP25SDJM519moonbit_2ddataframe6SeriesE(self, 0, self.length));
}
function _M0MPC15array13ReadOnlyArray2atGmE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGiE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray2atGdE(self, index) {
  return index >>> 0 < self.length ? self[index] : $oob();
}
function _M0MPC15array13ReadOnlyArray6lengthGiE(self) {
  return self.length;
}
function _M0MPC15array9ArrayView21clamped__view_2einnerGkE(self, start, end) {
  const len = self.end - self.start | 0;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$4 = self.buf;
  const _bind$5 = self.start + lo | 0;
  return new _M0TPB9ArrayViewGkE(_bind$4, _bind$5, _bind$5 + count | 0);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind$4 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$2 = 0;
    let _tmp$3 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$2;
      const size_hint$2 = _tmp$3;
      if (_ < _bind$4) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$2 = _ + 1 | 0;
        const _bind$5 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$3 = (size_hint$2 + (_bind$5.end - _bind$5.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind$4 = _x_end - _x_start | 0;
    let size_hint;
    let _tmp$2 = 0;
    let _tmp$3 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp$2;
      const size_hint$2 = _tmp$3;
      if (_ < _bind$4) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp$2 = _ + 1 | 0;
        const _bind$5 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$3 = (size_hint$2 + (_bind$5.end - _bind$5.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$5 = _x_end - _x_start | 0;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$5) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option6unwrapGcE(self) {
  return self === -1 ? $panic() : self;
}
function _M0MPC16option6Option10unwrap__orGcE(self, default_) {
  if (self === -1) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC16option6Option3mapGRPC16string10StringViewsE(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGsuE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsuE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGsiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsiE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB8new__mapGsRPB5ArrayGiEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$4 = capacity$2 - 1 | 0;
  const _bind$5 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$6 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$7 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGiEE(_bind$6, 0, capacity$2, _bind$4, _bind$5, _bind$7, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4 >>> 0 < _tmp$2.length ? _tmp$2[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4 >>> 0 < _tmp$2.length ? _tmp$2[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4 >>> 0 < _tmp$2.length ? _tmp$2[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4 >>> 0 < _tmp$2.length ? _tmp$2[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGiEE(self, idx, entry) {
  const _bind$4 = self.tail;
  if (_bind$4 === -1) {
    self.head = entry;
  } else {
    const _tmp$2 = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$4 >>> 0 < _tmp$2.length ? _tmp$2[_bind$4] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsuE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsiE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGiEE(self, entry, new_idx) {
  const _bind$4 = entry.next;
  if (_bind$4 === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind$4;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsuE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsuE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsiE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGiEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _bind$4 = self.entries[idx$2];
    if (_bind$4 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGiEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGiEE(self, entry$2, idx$2);
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsuE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsuE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsiE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGiEE(self, outer) {
  const hash = outer.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGiEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGiEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGiEE(self, idx, outer);
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGiUWEuQRPC15error5ErrorNsEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsuE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsuE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsiE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGiEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$2 = old_head;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGiEE(self, _e);
      _tmp$2 = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsuE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsuE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsuE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsuE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsuE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsuE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsuE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsiE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsiE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsiE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsiE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsiE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsiE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsiE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPB4JsonE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGiEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGiEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGiEE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGiEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGiEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGiEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGiEE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGiEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const _bind$5 = self.tail;
      const _bind$6 = undefined;
      const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$5, _bind$6, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$4;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$5 = self.tail;
        const _bind$6 = undefined;
        const entry = new _M0TPB5EntryGsRPC15debug4ReprE(_bind$5, _bind$6, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPB3Map3setGsuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsiE(self, key, value) {
  _M0MPB3Map15set__with__hashGsiE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB4JsonE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB4JsonE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGiEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGiEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPC15debug4ReprE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC15debug4ReprE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGiUWEuQRPC15error5ErrorNsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGiUWEuQRPC15error5ErrorNsEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsuE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsuE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsiE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsiE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB4JsonE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB4JsonE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPB5ArrayGiEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGiEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGiEE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC15debug4ReprE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity$2);
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC15debug4ReprE(m, e._0, e._1);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsiE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGiEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGiEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGiEE4None__;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB4JsonE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map12contains__kvGsRPB4JsonE(self, key, value) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _bind$4 = self.entries[idx];
    if (_bind$4 === undefined) {
      return false;
    } else {
      const _Some = _bind$4;
      const _entry = _Some;
      if (_entry.hash === hash && (_entry.key === key && _M0IPC14json4JsonPB2Eq5equal(_entry.value, value))) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map9is__emptyGsRPB4JsonE(self) {
  return self.size === 0;
}
function _M0MPB3Map4iterGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$4 = curr_entry.val;
        if (_bind$4 === undefined) {
          break _L;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsRPC15debug4ReprE(self) {
  return _M0MPB3Map4iterGsRPB4JsonE(self);
}
function _M0MPB3Map4keysGsRPB4JsonE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsRPB4JsonEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsRPB4JsonEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind$4 = curr_entry.val;
        if (_bind$4 === undefined) {
          break _L;
        } else {
          const _Some = _bind$4;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0IPB3MapPB2Eq5equalGsRPB4JsonE(self, that) {
  if (self.size === that.size) {
    const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(self);
    while (true) {
      const _bind$4 = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
      if (_bind$4 === undefined) {
        return true;
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        const _k = _x._0;
        const _v = _x._1;
        if (_M0MPB3Map12contains__kvGsRPB4JsonE(that, _k, _v)) {
        } else {
          return false;
        }
        continue;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC14byte4BytePB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC14json4JsonPB2Eq5equal(a, b) {
  switch (a.$tag) {
    case 0: {
      if (b.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (b.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (b.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      const _Number = a;
      const _a_num = _Number._0;
      if (b.$tag === 3) {
        const _Number$2 = b;
        const _b_num = _Number$2._0;
        return _a_num === _b_num;
      } else {
        return false;
      }
    }
    case 4: {
      const _String = a;
      const _a_str = _String._0;
      if (b.$tag === 4) {
        const _String$2 = b;
        const _b_str = _String$2._0;
        return _a_str === _b_str;
      } else {
        return false;
      }
    }
    case 5: {
      const _Array = a;
      const _a_arr = _Array._0;
      if (b.$tag === 5) {
        const _Array$2 = b;
        const _b_arr = _Array$2._0;
        return _M0IPC15array5ArrayPB2Eq5equalGRPB4JsonE(_a_arr, _b_arr);
      } else {
        return false;
      }
    }
    default: {
      const _Object = a;
      const _a_obj = _Object._0;
      if (b.$tag === 6) {
        const _Object$2 = b;
        const _b_obj = _Object$2._0;
        return _M0IPB3MapPB2Eq5equalGsRPB4JsonE(_a_obj, _b_obj);
      } else {
        return false;
      }
    }
  }
}
function _M0MPC14json4Json4null() {
  return _M0DTPB4Json4Null__;
}
function _M0MPC14json4Json6string(string) {
  return new _M0DTPB4Json6String(string);
}
function _M0MPC14json4Json7boolean(boolean) {
  return boolean ? _M0DTPB4Json4True__ : _M0DTPB4Json5False__;
}
function _M0MPC14json4Json6object(object) {
  return new _M0DTPB4Json6Object(object);
}
function _M0MPC14json4Json4JsonGdE(value) {
  return _M0IPC16double6DoublePB6ToJson8to__json(value);
}
function _M0MPC14json4Json4JsonGiE(value) {
  return _M0IPC13int3IntPB6ToJson8to__json(value);
}
function _M0IPC13int3IntPB6ToJson8to__json(self) {
  return _M0MPC14json4Json6number(self + 0, undefined);
}
function _M0IPC16double6DoublePB6ToJson8to__json(self) {
  return self !== self ? _M0MPC14json4Json6string("NaN") : self > $i64_reinterpret_f64(9218868437227405311n) ? _M0MPC14json4Json6string("Infinity") : self < $i64_reinterpret_f64(18442240474082181119n) ? _M0MPC14json4Json6string("-Infinity") : _M0MPC14json4Json6number(self, undefined);
}
function _M0MPC15array5Array3mapGRPB5ArrayGsERP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriessE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe6SeriesE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5ValueRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiiEURP25SDJM519moonbit_2ddataframe5ValueiEE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5GroupRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe6SeriesEHRP25SDJM519moonbit_2ddataframe14DataFrameError(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      const _bind$5 = f(v);
      let _tmp$3;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$3 = _ok._0;
      } else {
        return _bind$5;
      }
      arr[i] = _tmp$3;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP25SDJM519moonbit_2ddataframe6SeriesERP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(arr);
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe6SeriesE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGiRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPB4JsonRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsiE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGsRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5ValueRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriesRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPB4JsonRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGURPC15debug4ReprRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const v = self[i];
      arr[i] = f(v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter11find__firstGRP25SDJM519moonbit_2ddataframe6SeriesE(self, f) {
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(self);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (f(_x)) {
        return _x;
      }
      continue;
    }
  }
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPB5Iter24nextGsRPC15debug4ReprE(self) {
  return _M0MPB4Iter4nextGUsRPB4JsonEE(self);
}
function _M0MPC14byte4Byte9to__int64(self) {
  return BigInt.asUintN(64, BigInt(self));
}
function _M0MPC13int3Int22is__leading__surrogate(self) {
  return 55296 <= self && self <= 56319;
}
function _M0MPC13int3Int23is__trailing__surrogate(self) {
  return 56320 <= self && self <= 57343;
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5trunc(_tmp$2) {
  return Math.trunc(_tmp$2);
}
function _M0MPC16double6Double7is__nan(self) {
  return self !== self;
}
function _M0MPC16double6Double7is__inf(self) {
  return self > _M0FPB18double__max__value || self < _M0FPB18double__min__value;
}
function _M0IPC16double6DoublePB4Show10to__string(self) {
  return String(self);
}
function _M0FPB7printlnGsE(input) {
  console.log(_M0IPC16string6StringPB4Show10to__string(input));
}
function _M0FPB7compareGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(x, y) {
  return _M0IPC15array5ArrayPB7Compare7compareGRP25SDJM519moonbit_2ddataframe5ValueE(x, y);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_0(logger.self, "}");
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15bytes5Bytes11from__array(arr) {
  const len = arr.end - arr.start | 0;
  if (len === 0) {
    return $bytes_literal$0;
  }
  const result = _M0MPB18UninitializedArray23unsafe__make__and__blitGyE(arr.buf, len, arr.start, 0, len);
  return result;
}
function _M0IPB9SourceLocPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(self, start, end) {
  const len = self.length;
  const lo = _M0FPB13clamp__offset(start, len);
  let hi;
  if (end === undefined) {
    hi = len;
  } else {
    const _Some = end;
    const _end = _Some;
    hi = _M0FPB13clamp__offset(_end, len);
  }
  const count = hi > lo ? hi - lo | 0 : 0;
  const _bind$4 = self;
  return new _M0TPB9ArrayViewGRPC15debug4ReprE(_bind$4, lo, lo + count | 0);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGRP25SDJM519moonbit_2ddataframe5ValueE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGRPB4JsonE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPC14json10WriteFrameE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB4JsonE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPC14json10WriteFrameE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGRPB5ArrayGsEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGdE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGbE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGdE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView4swapGiE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGdE(arr, start, end) {
  const _bind$4 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$4)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGdE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, start, end) {
  const _bind$4 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$4)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array12MutArrayView5sliceGiE(arr, start, end) {
  const _bind$4 = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind$4)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGiE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGURP25SDJM519moonbit_2ddataframe5ValueiiEE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGbE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGdE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGiE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp$2 = len;
  let _tmp$3 = 0;
  while (true) {
    const len$2 = _tmp$2;
    const limit = _tmp$3;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp$2 = len$2 / 2 | 0;
      _tmp$3 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB19fixed__bubble__sortGdE(arr) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB19fixed__bubble__sortGsE(arr) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__choose__pivotN7sort__2S564GdE(_env, a, b) {
  const swaps = _env._1;
  const arr = _env._0;
  if (arr.buf[arr.start + a | 0] > arr.buf[arr.start + b | 0]) {
    _M0MPC15array12MutArrayView4swapGdE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S568GdE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S564GdE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S564GdE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S564GdE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotN7sort__2S564GsE(_env, a, b) {
  const swaps = _env._1;
  const arr = _env._0;
  if (_M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0])) {
    _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB20fixed__choose__pivotN7sort__3S568GsE(_env, a, b, c) {
  _M0FPB20fixed__choose__pivotN7sort__2S564GsE(_env, a, b);
  _M0FPB20fixed__choose__pivotN7sort__2S564GsE(_env, b, c);
  _M0FPB20fixed__choose__pivotN7sort__2S564GsE(_env, a, b);
}
function _M0FPB20fixed__choose__pivotGdE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S568GdE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GdE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GdE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S568GdE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGdE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB20fixed__choose__pivotGsE(arr) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: arr, _1: swaps };
    if (len > 50) {
      _M0FPB20fixed__choose__pivotN7sort__3S568GsE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GsE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB20fixed__choose__pivotN7sort__3S568GsE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB20fixed__choose__pivotN7sort__3S568GsE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB17fixed__sift__downGdE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && arr.buf[arr.start + child | 0] < arr.buf[arr.start + (child + 1 | 0) | 0] ? child + 1 | 0 : child;
      if (arr.buf[arr.start + index$2 | 0] >= arr.buf[arr.start + child$2 | 0]) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGdE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__sift__downGsE(arr, index) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && _M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) ? child + 1 | 0 : child;
      if (_M0IP016_24default__implPB7Compare6op__geGsE(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0])) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGdE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$4 = len / 2 | 0;
  let _tmp$2 = _bind$4 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGdE(arr, i);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGdE(arr, 0, i);
      _M0FPB17fixed__sift__downGdE(_M0MPC15array12MutArrayView5sliceGdE(arr, 0, i), 0);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__heap__sortGsE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$4 = len / 2 | 0;
  let _tmp$2 = _bind$4 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB17fixed__sift__downGsE(arr, i);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, 0, i);
      _M0FPB17fixed__sift__downGsE(_M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, 0, i), 0);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB16fixed__partitionGdE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGdE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$4 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$4) {
      if (arr.buf[arr.start + j | 0] < pivot) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGdE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGdE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB16fixed__partitionGsE(arr, pivot_index) {
  _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$4 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$4) {
      if (_M0IP016_24default__implPB7Compare6op__ltGsE(arr.buf[arr.start + j | 0], pivot)) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGdE(arr) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$4) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && arr.buf[arr.start + (j - 1 | 0) | 0] > arr.buf[arr.start + j | 0]) {
          _M0MPC15array12MutArrayView4swapGdE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB24fixed__try__bubble__sortGsE(arr) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$4) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && _M0IP016_24default__implPB7Compare6op__gtGsE(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0])) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB18fixed__quick__sortGdE(arr, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGdE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGdE(arr$2);
      return undefined;
    }
    const _bind$4 = _M0FPB20fixed__choose__pivotGdE(arr$2);
    const _pivot_index = _bind$4._0;
    const _likely_sorted = _bind$4._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGdE(arr$2)) {
        return undefined;
      }
    }
    const _bind$5 = _M0FPB16fixed__partitionGdE(arr$2, _pivot_index);
    const _pivot = _bind$5._0;
    const _partitioned = _bind$5._1;
    const _tmp$7 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$7 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2.$tag === 1) {
      const _Some = pred$2;
      const _p = _Some._0;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$8 = _pivot;
        while (true) {
          const i$2 = _tmp$8;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$8 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGdE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGdE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGdE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGdE(left, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]);
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGdE(right, new _M0DTPC16option6OptionGdE4Some(arr$2.buf[arr$2.start + _pivot | 0]), limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0FPB18fixed__quick__sortGsE(arr, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB19fixed__bubble__sortGsE(arr$2);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB17fixed__heap__sortGsE(arr$2);
      return undefined;
    }
    const _bind$4 = _M0FPB20fixed__choose__pivotGsE(arr$2);
    const _pivot_index = _bind$4._0;
    const _likely_sorted = _bind$4._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB24fixed__try__bubble__sortGsE(arr$2)) {
        return undefined;
      }
    }
    const _bind$5 = _M0FPB16fixed__partitionGsE(arr$2, _pivot_index);
    const _pivot = _bind$5._0;
    const _partitioned = _bind$5._1;
    const _tmp$7 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$7 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (_p === arr$2.buf[arr$2.start + _pivot | 0]) {
        let i;
        let _tmp$8 = _pivot;
        while (true) {
          const i$2 = _tmp$8;
          if (i$2 < len && _p === arr$2.buf[arr$2.start + i$2 | 0]) {
            _tmp$8 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB18fixed__quick__sortGsE(left, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB18fixed__quick__sortGsE(right, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView4sortGdE(self) {
  _M0FPB18fixed__quick__sortGdE(self, _M0DTPC16option6OptionGdE4None__, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array12MutArrayView4sortGsE(self) {
  _M0FPB18fixed__quick__sortGsE(self, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0FPB23fixed__bubble__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGiE(arr, cmp) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      let _tmp$3 = i;
      while (true) {
        const j = _tmp$3;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b) {
  const arr = _env._2;
  const cmp = _env._1;
  const swaps = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGiE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S444GiE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GURP25SDJM519moonbit_2ddataframe5ValueiiEE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB24fixed__choose__pivot__byGiE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: swaps, _1: cmp, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S448GiE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGiE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__sift__down__byGiE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp$2 = index;
  let _tmp$3 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp$2;
    const child = _tmp$3;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGiE(arr, index$2, child$2);
      _tmp$2 = child$2;
      _tmp$3 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$4 = len / 2 | 0;
  let _tmp$2 = _bind$4 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(_M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, 0, i), 0, cmp);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGiE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind$4 = len / 2 | 0;
  let _tmp$2 = _bind$4 - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGiE(arr, i, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$3 = len - 1 | 0;
  while (true) {
    const i = _tmp$3;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGiE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGiE(_M0MPC15array12MutArrayView5sliceGiE(arr, 0, i), 0, cmp);
      _tmp$3 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$4 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$4) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB20fixed__partition__byGiE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGiE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind$4 = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  let _tmp$4 = true;
  while (true) {
    const j = _tmp$2;
    const i = _tmp$3;
    const partitioned = _tmp$4;
    if (j < _bind$4) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGiE(arr, i, j);
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          _tmp$2 = j + 1 | 0;
          _tmp$3 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp$2 = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGiE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$4) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGiE(arr, cmp) {
  const _bind$4 = arr.end - arr.start | 0;
  let _tmp$2 = 1;
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$2;
    const tries = _tmp$3;
    if (i < _bind$4) {
      let sorted;
      let _tmp$4 = i;
      let _tmp$5 = true;
      while (true) {
        const j = _tmp$4;
        const sorted$2 = _tmp$5;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGiE(arr, j, j - 1 | 0);
          _tmp$4 = j - 1 | 0;
          _tmp$5 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        _tmp$3 = tries$2;
        continue;
      } else {
        _tmp$2 = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr, cmp, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, cmp);
      return undefined;
    }
    const _bind$4 = _M0FPB24fixed__choose__pivot__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, cmp);
    const _pivot_index = _bind$4._0;
    const _likely_sorted = _bind$4._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$5 = _M0FPB20fixed__partition__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$5._0;
    const _partitioned = _bind$5._1;
    const _tmp$7 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$7 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$8 = _pivot;
        while (true) {
          const i$2 = _tmp$8;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$8 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGURP25SDJM519moonbit_2ddataframe5ValueiiEE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(left, cmp, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGiE(arr, cmp, pred, limit) {
  let _tmp$2 = limit;
  let _tmp$3 = arr;
  let _tmp$4 = pred;
  let _tmp$5 = true;
  let _tmp$6 = true;
  while (true) {
    const limit$2 = _tmp$2;
    const arr$2 = _tmp$3;
    const pred$2 = _tmp$4;
    const was_partitioned = _tmp$5;
    const balanced = _tmp$6;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGiE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGiE(arr$2, cmp);
      return undefined;
    }
    const _bind$4 = _M0FPB24fixed__choose__pivot__byGiE(arr$2, cmp);
    const _pivot_index = _bind$4._0;
    const _likely_sorted = _bind$4._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGiE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$5 = _M0FPB20fixed__partition__byGiE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$5._0;
    const _partitioned = _bind$5._1;
    const _tmp$7 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$7 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$8 = _pivot;
        while (true) {
          const i$2 = _tmp$8;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$8 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp$2 = limit$3;
        _tmp$3 = _M0MPC15array12MutArrayView5sliceGiE(arr$2, i, len);
        _tmp$5 = _partitioned;
        _tmp$6 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGiE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGiE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGiE(left, cmp, pred$2, limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = right;
      _tmp$4 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGiE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp$2 = limit$3;
      _tmp$3 = left;
      _tmp$5 = _partitioned;
      _tmp$6 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array12MutArrayView8sort__byGiE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGiE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array4sortGdE(self) {
  const _bind$4 = self.length;
  _M0MPC15array12MutArrayView4sortGdE(new _M0TPB12MutArrayViewGdE(self, 0, _bind$4));
}
function _M0MPC15array5Array4sortGsE(self) {
  const _bind$4 = self.length;
  _M0MPC15array12MutArrayView4sortGsE(new _M0TPB12MutArrayViewGsE(self, 0, _bind$4));
}
function _M0MPC15array5Array8sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(self, cmp) {
  const _bind$4 = self.length;
  _M0MPC15array12MutArrayView8sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(new _M0TPB12MutArrayViewGURP25SDJM519moonbit_2ddataframe5ValueiiEE(self, 0, _bind$4), cmp);
}
function _M0MPC15array5Array8sort__byGiE(self, cmp) {
  const _bind$4 = self.length;
  _M0MPC15array12MutArrayView8sort__byGiE(new _M0TPB12MutArrayViewGiE(self, 0, _bind$4), cmp);
}
function _M0MPC15array5Array4makeGbE(len, elem) {
  const arr = new Array(len);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < len) {
      arr[i] = elem;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3getGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : undefined;
}
function _M0IPC15array5ArrayPB2Eq5equalGsE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (_M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGURP25SDJM519moonbit_2ddataframe5ValueiEE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (_M0IPC15tuple6Tuple2PB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueiE(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe6SeriesE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (_M0IP25SDJM519moonbit_2ddataframe6SeriesPB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB2Eq5equalGRPB4JsonE(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < self_len) {
        if (_M0IPC14json4JsonPB2Eq5equal(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _M0IPC15array5ArrayPB7Compare7compareGRP25SDJM519moonbit_2ddataframe5ValueE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  const cmp = $compare_int(len_self, len_other);
  if (cmp === 0) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len_self) {
        const cmp$2 = _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(self[i], other[i]);
        if (cmp$2 === 0) {
        } else {
          return cmp$2;
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return 0;
      }
    }
  } else {
    return cmp;
  }
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(self, f) {
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array6filterGRP25SDJM519moonbit_2ddataframe6SeriesE(self, f) {
  const arr = [];
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array8containsGRP25SDJM519moonbit_2ddataframe5ValueE(self, value) {
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const v = self[_];
      if (_M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(v, value)) {
        return true;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array9count__ifGRP25SDJM519moonbit_2ddataframe5ValueE(self, f) {
  const _bind$4 = self.length;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const count = _tmp$3;
    if (_ < _bind$4) {
      const v = self[_];
      if (f(v)) {
        _tmp$2 = _ + 1 | 0;
        _tmp$3 = count + 1 | 0;
        continue;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return count;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind$4 = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind$4 === undefined) {
  } else {
    const _Some = _bind$4;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$5 = _M0MPB4Iter4nextGUsRPB4JsonEE(iter);
    if (_bind$5 === undefined) {
      return;
    } else {
      const _Some = _bind$5;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGsEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(value);
}
function _M0MPC15debug4Repr4ReprGiE(value) {
  return _M0IPC13int3IntPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGORP25SDJM519moonbit_2ddataframe5ValueE(value) {
  return _M0IPC16option6OptionPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGsE(value) {
  return _M0IPC16string6StringPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(value) {
  return _M0IP25SDJM519moonbit_2ddataframe5ValuePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueE(value);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP25SDJM519moonbit_2ddataframe5ValueiEE(value);
}
function _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(value) {
  return _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe9DataFrameE(value) {
  return _M0IP25SDJM519moonbit_2ddataframe9DataFramePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGRPB4JsonE(value) {
  return _M0IPC14json4JsonPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGURP25SDJM519moonbit_2ddataframe5ValueiEE(value) {
  return _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueiE(value);
}
function _M0MPC15debug4Repr4ReprGdE(value) {
  return _M0IPC16double6DoublePC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr4ReprGOsE(value) {
  return _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(value);
}
function _M0MPC15debug4Repr4ReprGRPB5ArrayGRPB4JsonEE(value) {
  return _M0IPC15array5ArrayPC15debug5Debug8to__reprGRPB4JsonE(value);
}
function _M0MPC15debug4Repr4ReprGRPB3MapGsRPB4JsonEE(value) {
  return _M0IPB3MapPC15debug5Debug8to__reprGsRPB4JsonE(value);
}
function _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe6SeriesE(value) {
  return _M0IP25SDJM519moonbit_2ddataframe6SeriesPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr5tuple(children) {
  return new _M0DTPC15debug4Repr5Tuple(children);
}
function _M0IPC15tuple6Tuple2PC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueiE(self) {
  const _a = self._0;
  const _b = self._1;
  return _M0MPC15debug4Repr5tuple([_M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(_a), _M0MPC15debug4Repr4ReprGiE(_b)]);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr7integer(x) {
  return new _M0DTPC15debug4Repr7Integer(x);
}
function _M0MPC15debug4Repr6double(x) {
  return new _M0DTPC15debug4Repr9DoubleLit(x);
}
function _M0MPC15debug4Repr4bool(x) {
  return new _M0DTPC15debug4Repr7BoolLit(x);
}
function _M0MPC15debug4Repr4char(x) {
  return new _M0DTPC15debug4Repr7CharLit(x);
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr5array(children) {
  return new _M0DTPC15debug4Repr5Array(children);
}
function _M0MPC15debug4Repr6record(fields) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(fields);
  let _tmp$2;
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
    if (_bind$4 === undefined) {
      _tmp$2 = _acc;
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _name = _x._0;
      const _value = _x._1;
      _M0MPC15array5Array4pushGsE(_acc, new _M0DTPC15debug4Repr11RecordField(_name, _value));
      continue;
    }
  }
  return new _M0DTPC15debug4Repr6Record(_tmp$2);
}
function _M0MPC15debug4Repr3map(contents) {
  return new _M0DTPC15debug4Repr3Map(_M0MPC15array5Array3mapGURPC15debug4ReprRPC15debug4ReprERPC15debug4ReprE(contents, (pair) => {
    const _k = pair._0;
    const _v = pair._1;
    return new _M0DTPC15debug4Repr8MapEntry(_k, _v);
  }));
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGsE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_x));
      _M0MPC15array5Array4pushGsE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug15compact__middle(middle) {
  const parts = [];
  const _bind$4 = middle.end - middle.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const m = middle.buf[middle.start + _ | 0];
      const t = _M0MPC16string6String4trim(m, undefined);
      if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1131, 0, _M0FPC15debug15compact__middleN7_2abindS1131.length))) {
        _M0MPC15array5Array4pushGsE(parts, t);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1139, 0, _M0FPC15debug15compact__middleN7_2abindS1139.length));
  const _bind$5 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug15compact__middleN7_2abindS1133, 0, _M0FPC15debug15compact__middleN7_2abindS1133.length));
  if (_bind$5 === undefined) {
    return new _M0TPC16string10StringView(joined0, 0, joined0.length);
  } else {
    const _Some = _bind$5;
    return _Some;
  }
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _bind$4 = lines.length - 1 | 0;
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, _bind$4);
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const joined = _M0FPC15debug15compact__middle(_x);
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1143, 0, _M0FPC15debug14compact__linesN7_2abindS1143.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1142, 0, _M0FPC15debug14compact__linesN7_2abindS1142.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1140, 0, _M0FPC15debug14compact__linesN7_2abindS1140.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1145, 0, _M0FPC15debug14compact__linesN7_2abindS1145.length)) && _last === ")") {
          const joined = _M0FPC15debug15compact__middle(_x);
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind$5 = _bind$4 - 1 | 0;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind$5) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1151, 0, _M0FPC15debug14compact__linesN7_2abindS1151.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGRPB4JsonE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGURP25SDJM519moonbit_2ddataframe5ValueiiEE(lines, last_i, `${_M0MPC15array5Array2atGsE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGsE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(lines));
        _M0MPC15array5Array4pushGsE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1160, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1160.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGsE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind$4 = contents.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$4) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$5 = _x_end - 1 | 0;
              let _tmp$3 = 0;
              while (true) {
                const _$2 = _tmp$3;
                if (_$2 < _bind$5) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$3 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind$4 = _x_end - 1 | 0;
            let _tmp$2 = 0;
            while (true) {
              const _ = _tmp$2;
              if (_ < _bind$4) {
                const item = contents[1 + _ | 0];
                const _bind$5 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGRP25SDJM519moonbit_2ddataframe5ValueE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$5, 0, _bind$5.length));
                _tmp$2 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGsE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGssE(_M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGsE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGsE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind$4 = contents.length;
            let _tmp$2 = 0;
            while (true) {
              const _ = _tmp$2;
              if (_ < _bind$4) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$5 = _x_end - 1 | 0;
                    let _tmp$3 = 0;
                    while (true) {
                      const _$2 = _tmp$3;
                      if (_$2 < _bind$5) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$3 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp$2 = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind$4 = contents.length;
  let _tmp$2 = 0;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$2;
    const size = _tmp$3;
    if (_ < _bind$4) {
      const c = contents[_];
      _tmp$2 = _ + 1 | 0;
      _tmp$3 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1229, 0, _M0FPC15debug14print__contentN7_2abindS1229.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp$2;
  switch (info.$tag) {
    case 12: {
      _tmp$2 = true;
      break;
    }
    case 13: {
      _tmp$2 = true;
      break;
    }
    case 16: {
      _tmp$2 = true;
      break;
    }
    default: {
      _tmp$2 = false;
    }
  }
  return !_tmp$2;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGRPB4JsonE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp$2;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp$2 = 1;
        } else {
          _tmp$2 = 0;
        }
      } else {
        _tmp$2 = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGRPB4JsonE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$4 = v.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _one = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$3 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$3, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind$4 = _val.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _first = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const _tmp$3 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$3, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind$4 = v.lines;
        if (_bind$4.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind$4.length === 1) {
            const _one = _bind$4[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind$4[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind$4, 1, _bind$4.length);
            const _tmp$3 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$3, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1683 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0FPC15debug11double__abs(x) {
  return x < 0 ? -x : x;
}
function _M0FPC15debug11double__max(x, y) {
  return x > y ? x : y;
}
function _M0FPC15debug15relative__error(x, y) {
  if (x === y) {
    return 0;
  } else {
    const denom = _M0FPC15debug11double__max(_M0FPC15debug11double__abs(x), _M0FPC15debug11double__abs(y));
    return denom === 0 ? _M0FPC15debug11double__abs(x - y) : _M0FPC15debug11double__abs(x - y) / denom;
  }
}
function _M0FPC15debug16info__approx__eq(max_relative_error, x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      const _Integer = x;
      const _x1 = _Integer._0;
      if (y.$tag === 1) {
        const _Integer$2 = y;
        const _y1 = _Integer$2._0;
        return _x1 === _y1;
      } else {
        return false;
      }
    }
    case 2: {
      const _DoubleLit = x;
      const _x1$2 = _DoubleLit._0;
      if (y.$tag === 2) {
        const _DoubleLit$2 = y;
        const _y1 = _DoubleLit$2._0;
        return _M0FPC15debug15relative__error(_x1$2, _y1) <= max_relative_error;
      } else {
        return false;
      }
    }
    case 3: {
      const _FloatLit = x;
      const _x1$3 = _FloatLit._0;
      if (y.$tag === 3) {
        const _FloatLit$2 = y;
        const _y1 = _FloatLit$2._0;
        return _x1$3 === _y1;
      } else {
        return false;
      }
    }
    case 4: {
      const _BoolLit = x;
      const _x1$4 = _BoolLit._0;
      if (y.$tag === 4) {
        const _BoolLit$2 = y;
        const _y1 = _BoolLit$2._0;
        return _x1$4 === _y1;
      } else {
        return false;
      }
    }
    case 5: {
      const _CharLit = x;
      const _x1$5 = _CharLit._0;
      if (y.$tag === 5) {
        const _CharLit$2 = y;
        const _y1 = _CharLit$2._0;
        return _x1$5 === _y1;
      } else {
        return false;
      }
    }
    case 6: {
      const _StringLit = x;
      const _x1$6 = _StringLit._0;
      if (y.$tag === 6) {
        const _StringLit$2 = y;
        const _y1 = _StringLit$2._0;
        return _x1$6 === _y1;
      } else {
        return false;
      }
    }
    case 7: {
      if (y.$tag === 7) {
        return true;
      } else {
        return false;
      }
    }
    case 8: {
      if (y.$tag === 8) {
        return true;
      } else {
        return false;
      }
    }
    case 9: {
      if (y.$tag === 9) {
        return true;
      } else {
        return false;
      }
    }
    case 10: {
      const _Enum = x;
      const _n1 = _Enum._0;
      if (y.$tag === 10) {
        const _Enum$2 = y;
        const _n2 = _Enum$2._0;
        return _n1 === _n2;
      } else {
        return false;
      }
    }
    case 11: {
      if (y.$tag === 11) {
        return true;
      } else {
        return false;
      }
    }
    case 12: {
      const _RecordField = x;
      const _n1$2 = _RecordField._0;
      if (y.$tag === 12) {
        const _RecordField$2 = y;
        const _n2 = _RecordField$2._0;
        return _n1$2 === _n2;
      } else {
        return false;
      }
    }
    case 13: {
      const _EnumLabeledArg = x;
      const _n1$3 = _EnumLabeledArg._0;
      if (y.$tag === 13) {
        const _EnumLabeledArg$2 = y;
        const _n2 = _EnumLabeledArg$2._0;
        return _n1$3 === _n2;
      } else {
        return false;
      }
    }
    case 14: {
      const _Opaque = x;
      const _n1$4 = _Opaque._0;
      if (y.$tag === 14) {
        const _Opaque$2 = y;
        const _n2 = _Opaque$2._0;
        return _n1$4 === _n2;
      } else {
        return false;
      }
    }
    case 15: {
      const _Literal = x;
      const _x1$7 = _Literal._0;
      if (y.$tag === 15) {
        const _Literal$2 = y;
        const _y1 = _Literal$2._0;
        return _x1$7 === _y1;
      } else {
        return false;
      }
    }
    case 16: {
      if (y.$tag === 16) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 17) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FPC15debug21info__is__unimportant(info) {
  switch (info.$tag) {
    case 16: {
      return true;
    }
    case 7: {
      return true;
    }
    case 8: {
      return true;
    }
    case 9: {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FPC15debug16diff__info__withN2goS142(max_relative_error, left_node, right_node) {
  if (_M0FPC15debug16info__approx__eq(max_relative_error, left_node, right_node)) {
    const xs = _M0MPC15debug4Repr8children(left_node);
    const ys = _M0MPC15debug4Repr8children(right_node);
    const xlen = xs.length;
    const ylen = ys.length;
    const min_len = xlen < ylen ? xlen : ylen;
    const children = [];
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < min_len) {
        _M0MPC15array5Array4pushGsE(children, _M0FPC15debug16diff__info__withN2goS142(max_relative_error, _M0MPC15array5Array2atGsE(xs, i), _M0MPC15array5Array2atGsE(ys, i)));
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$4 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(xs, min_len, undefined);
    const _bind$5 = _bind$4.end - _bind$4.start | 0;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$5) {
        const t = _bind$4.buf[_bind$4.start + _ | 0];
        _M0MPC15array5Array4pushGsE(children, new _M0DTPC15debug9ReprDelta6Extra1(t));
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    const _bind$6 = _M0MPC15array5Array21clamped__view_2einnerGRPC15debug4ReprE(ys, min_len, undefined);
    const _bind$7 = _bind$6.end - _bind$6.start | 0;
    let _tmp$4 = 0;
    while (true) {
      const _ = _tmp$4;
      if (_ < _bind$7) {
        const t = _bind$6.buf[_bind$6.start + _ | 0];
        _M0MPC15array5Array4pushGsE(children, new _M0DTPC15debug9ReprDelta6Extra2(t));
        _tmp$4 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return _M0FPC15debug21info__is__unimportant(left_node) && (!_M0MPC15array5Array9is__emptyGRPB4JsonE(children) && _M0MPC15array5Array3allGRPC15debug9ReprDeltaE(children, (d) => {
      let _tmp$5;
      if (d.$tag === 0) {
        _tmp$5 = true;
      } else {
        _tmp$5 = false;
      }
      return !_tmp$5;
    })) ? new _M0DTPC15debug9ReprDelta9Different(left_node, right_node) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7shallow(left_node), children);
  } else {
    return new _M0DTPC15debug9ReprDelta9Different(left_node, right_node);
  }
}
function _M0FPC15debug16diff__info__with(left, right, max_relative_error) {
  return _M0FPC15debug16diff__info__withN2goS142(max_relative_error, left, right);
}
function _M0FPC15debug18diff__repr_2einner(x, y, max_relative_error) {
  return _M0FPC15debug16diff__info__with(x, y, max_relative_error);
}
function _M0FPC15debug10diff__repr(x, y, max_relative_error$46$opt) {
  let max_relative_error;
  if (max_relative_error$46$opt.$tag === 1) {
    const _Some = max_relative_error$46$opt;
    max_relative_error = _Some._0;
  } else {
    max_relative_error = 1e-012;
  }
  return _M0FPC15debug18diff__repr_2einner(x, y, max_relative_error);
}
function _M0FPC15debug12prune__deltaN2goS115(d, node) {
  if (d <= 0) {
    _L: {
      switch (node.$tag) {
        case 0: {
          const _Same = node;
          const _label = _Same._0;
          const _children = _Same._1;
          return _M0MPC15array5Array9is__emptyGRPB4JsonE(_children) ? node : !_M0MPC15debug4Repr17info__adds__depth(_label) ? new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(d, child))) : new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
        }
        case 1: {
          break _L;
        }
        case 2: {
          break _L;
        }
        default: {
          break _L;
        }
      }
    }
    return new _M0DTPC15debug9ReprDelta4Same(_M0MPC15debug4Repr7omitted(), []);
  } else {
    switch (node.$tag) {
      case 0: {
        const _Same = node;
        const _label = _Same._0;
        const _children = _Same._1;
        const next_depth = _M0MPC15debug4Repr17info__adds__depth(_label) ? d - 1 | 0 : d;
        return new _M0DTPC15debug9ReprDelta4Same(_label, _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug9ReprDeltaE(_children, (child) => _M0FPC15debug12prune__deltaN2goS115(next_depth, child)));
      }
      case 1: {
        const _Different = node;
        const _left = _Different._0;
        const _right = _Different._1;
        return new _M0DTPC15debug9ReprDelta9Different(_M0MPC15debug4Repr11prune__info(_left, undefined, d), _M0MPC15debug4Repr11prune__info(_right, undefined, d));
      }
      case 2: {
        const _Extra1 = node;
        const _x = _Extra1._0;
        return new _M0DTPC15debug9ReprDelta6Extra1(_M0MPC15debug4Repr11prune__info(_x, undefined, d));
      }
      default: {
        const _Extra2 = node;
        const _x$2 = _Extra2._0;
        return new _M0DTPC15debug9ReprDelta6Extra2(_M0MPC15debug4Repr11prune__info(_x$2, undefined, d));
      }
    }
  }
}
function _M0FPC15debug12prune__delta(max_depth, delta) {
  if (max_depth === undefined) {
    return delta;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0FPC15debug12prune__deltaN2goS115(_M0MPC13int3Int3max(1, _depth), delta);
  }
}
function _M0FPC15debug17delta__root__size(delta) {
  if (delta.$tag === 0) {
    const _Same = delta;
    const _label = _Same._0;
    return _M0FPC15debug10info__size(_label);
  } else {
    return 0;
  }
}
function _M0FPC15debug11mark__added(use_ansi, x) {
  return use_ansi ? _M0FPC15debug8surround("\u001b[32m+", "\u001b[0m", x) : _M0FPC15debug8surround("+", "", x);
}
function _M0FPC15debug13mark__removed(use_ansi, x) {
  return use_ansi ? _M0FPC15debug8surround("\u001b[31m-", "\u001b[0m", x) : _M0FPC15debug8surround("-", "", x);
}
function _M0FPC15debug13render__delta(threshold, use_ansi, delta) {
  switch (delta.$tag) {
    case 0: {
      const _Same = delta;
      const _label = _Same._0;
      const _children_delta = _Same._1;
      const children = _M0MPC15array5Array3mapGRPC15debug9ReprDeltaRPC15debug7ContentE(_children_delta, (child) => _M0FPC15debug13render__delta(threshold, use_ansi, child));
      return _M0FPC15debug14with__resizing(_M0FPC15debug17delta__root__size(delta), threshold, _M0MPC15debug4Repr13pretty__print(_label, children));
    }
    case 1: {
      const _Different = delta;
      const _left = _Different._0;
      const _right = _Different._1;
      const children$2 = [_M0MPC15debug4Repr12render__repr(_left, threshold), _M0MPC15debug4Repr12render__repr(_right, threshold)];
      let _tmp$2;
      if (children$2.length === 2) {
        const _left$2 = children$2[0];
        const _right$2 = children$2[1];
        _tmp$2 = _M0FPC15debug10no__parens(_M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_left$2)), _M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_right$2))));
      } else {
        _tmp$2 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$2);
    }
    case 2: {
      const _Extra1 = delta;
      const _x = _Extra1._0;
      const children$3 = [_M0MPC15debug4Repr12render__repr(_x, threshold)];
      let _tmp$3;
      if (children$3.length === 1) {
        const _x$2 = children$3[0];
        _tmp$3 = _M0FPC15debug10no__parens(_M0FPC15debug13mark__removed(use_ansi, _M0MPC15debug7Content8no__wrap(_x$2)));
      } else {
        _tmp$3 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$3);
    }
    default: {
      const _Extra2 = delta;
      const _x$2 = _Extra2._0;
      const children$4 = [_M0MPC15debug4Repr12render__repr(_x$2, threshold)];
      let _tmp$4;
      if (children$4.length === 1) {
        const _x$3 = children$4[0];
        _tmp$4 = _M0FPC15debug10no__parens(_M0FPC15debug11mark__added(use_ansi, _M0MPC15debug7Content8no__wrap(_x$3)));
      } else {
        _tmp$4 = _M0FPC15debug14empty__content();
      }
      return _M0FPC15debug14with__resizing(0, threshold, _tmp$4);
    }
  }
}
function _M0FPC15debug28pretty__print__delta_2einner(d, max_depth, compact_threshold, use_ansi) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug28pretty__print__delta_2einnerN6constrS1684 : max_depth;
  const delta = _M0FPC15debug12prune__delta(max_depth$2, d);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0FPC15debug13render__delta(compact_threshold, use_ansi, delta)));
}
function _M0FPC15debug20pretty__print__delta(d, max_depth, compact_threshold$46$opt, use_ansi$46$opt) {
  let compact_threshold;
  if (compact_threshold$46$opt === undefined) {
    compact_threshold = 70;
  } else {
    const _Some = compact_threshold$46$opt;
    compact_threshold = _Some;
  }
  const use_ansi = use_ansi$46$opt === -1 ? true : use_ansi$46$opt;
  return _M0FPC15debug28pretty__print__delta_2einner(d, max_depth, compact_threshold, use_ansi);
}
function _M0IPC13int3IntPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr7integer(_M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC16double6DoublePC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6double(self);
}
function _M0IPC14bool4BoolPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4bool(self);
}
function _M0IPC14char4CharPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr4char(self);
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGsRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGsE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5ValueRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGURP25SDJM519moonbit_2ddataframe5ValueiEE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGURP25SDJM519moonbit_2ddataframe5ValueiEE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe6SeriesE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriesRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe6SeriesE(x)));
}
function _M0IPC15array5ArrayPC15debug5Debug8to__reprGRPB4JsonE(self) {
  return _M0MPC15debug4Repr5array(_M0MPC15array5Array3mapGRPB4JsonRPC15debug4ReprE(self, (x) => _M0MPC15debug4Repr4ReprGRPB4JsonE(x)));
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(_x) }]);
  }
}
function _M0IPC16option6OptionPC15debug5Debug8to__reprGsE(self) {
  if (self === undefined) {
    return _M0MPC15debug4Repr4ctor("None", []);
  } else {
    const _Some = self;
    const _x = _Some;
    return _M0MPC15debug4Repr4ctor("Some", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGsE(_x) }]);
  }
}
function _M0IPB3MapPC15debug5Debug8to__reprGsRPB4JsonE(self) {
  const _acc = [];
  const _it = _M0MPB3Map5iter2GsRPC15debug4ReprE(self);
  let _tmp$2;
  while (true) {
    const _bind$4 = _M0MPB5Iter24nextGsRPC15debug4ReprE(_it);
    if (_bind$4 === undefined) {
      _tmp$2 = _acc;
      break;
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPC15array5Array4pushGsE(_acc, { _0: _M0MPC15debug4Repr4ReprGsE(_k), _1: _M0MPC15debug4Repr4ReprGRPB4JsonE(_v) });
      continue;
    }
  }
  return _M0MPC15debug4Repr3map(_tmp$2);
}
function _M0IPC14json4JsonPC15debug5Debug8to__repr(self) {
  switch (self.$tag) {
    case 0: {
      return _M0MPC15debug4Repr4ctor("Null", []);
    }
    case 1: {
      return _M0MPC15debug4Repr4ctor("True", []);
    }
    case 2: {
      return _M0MPC15debug4Repr4ctor("False", []);
    }
    case 3: {
      const _Number = self;
      const _number = _Number._0;
      const _repr = _Number._1;
      return _repr === undefined ? _M0MPC15debug4Repr4ctor("Number", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGdE(_number) }]) : _M0MPC15debug4Repr4ctor("Number", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGdE(_number) }, { _0: _M0IPC14json4JsonPC15debug5Debug8to__reprN6constrS1685, _1: _M0MPC15debug4Repr4ReprGOsE(_repr) }]);
    }
    case 4: {
      const _String = self;
      const _string = _String._0;
      return _M0MPC15debug4Repr4ctor("String", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGsE(_string) }]);
    }
    case 5: {
      const _Array = self;
      const _array = _Array._0;
      return _M0MPC15debug4Repr4ctor("Array", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRPB5ArrayGRPB4JsonEE(_array) }]);
    }
    default: {
      const _Object = self;
      const _object = _Object._0;
      return _M0MPC15debug4Repr4ctor("Object", [{ _0: undefined, _1: _M0MPC15debug4Repr4ReprGRPB3MapGsRPB4JsonEE(_object) }]);
    }
  }
}
function _M0FPC15debug10assert__eqGRPB5ArrayGsEE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGsEE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB5ArrayGsEE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB5ArrayGsEE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGsEE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGiE(a, b, msg, loc) {
  if (a !== b) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGiE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGiE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GiE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGORP25SDJM519moonbit_2ddataframe5ValueE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGORP25SDJM519moonbit_2ddataframe5ValueE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGORP25SDJM519moonbit_2ddataframe5ValueE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GORP25SDJM519moonbit_2ddataframe5ValueE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGsE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGsE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGsE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GsE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe5ValueE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe5ValueE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe5ValueE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe11ReadOptionsE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe9DataFrameE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe9DataFrameE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe9DataFrameE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRP25SDJM519moonbit_2ddataframe9DataFrameE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRP25SDJM519moonbit_2ddataframe9DataFrameE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC15debug10assert__eqGRPB4JsonE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPB4JsonE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      const repr_a = _M0MPC15debug4Repr4ReprGRPB4JsonE(a);
      const repr_b = _M0MPC15debug4Repr4ReprGRPB4JsonE(b);
      const diff = _M0FPC15debug20pretty__print__delta(_M0FPC15debug10diff__repr(repr_a, repr_b, _M0DTPC16option6OptionGdE4None__), undefined, undefined, _M0FPC15debug10assert__eqN6constrS1686GRPB4JsonE);
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(13);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_a, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " != ");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FPC15debug6render(repr_b, undefined));
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "`\ndiff:\n");
      _M0MPB13StringBuilder13write__objectGsE(_string_builder, diff);
      fail_msg = _M0MPB13StringBuilder10to__string(_string_builder);
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(new _M0TPC16string10StringView(fail_msg, 0, fail_msg.length), loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv14base__err__str));
}
function _M0FPC28internal7strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if ((view.end - view.start | 0) >= 2) {
              const _x = view.str.charCodeAt(view.start);
              if (_x === 48) {
                const _x$2 = view.str.charCodeAt(view.start + 1 | 0);
                switch (_x$2) {
                  case 120: {
                    const _x$3 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _x$4 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _x$5 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _x$6 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _x$7 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _x$8 = new _M0TPC16string10StringView(view.str, view.start + 2 | 0, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC15error5ErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC28internal7strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC28internal7strconv10range__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv15range__err__str));
}
function _M0FPC28internal7strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGuE() {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGdE() {
  return new _M0DTPC16result6ResultGdRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE() {
  return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(_M0FPC28internal7strconv16syntax__err__str));
}
function _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(self, init, f) {
  let _tmp$2 = self;
  let _tmp$3 = init;
  let _tmp$4 = 0;
  while (true) {
    const str = _tmp$2;
    const ret = _tmp$3;
    const len = _tmp$4;
    _L: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          _tmp$2 = _x$2;
          _tmp$3 = f(_x - 48 | 0, ret);
          _tmp$4 = len + 1 | 0;
          continue;
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            break _L;
          }
        }
      } else {
        break _L;
      }
    }
    return { _0: str, _1: ret, _2: len };
  }
}
function _M0FPC28internal7strconv13parse__digits(s, x) {
  return _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s, x, (digit, acc) => BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0))));
}
function _M0FPC28internal7strconv20try__parse__19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp$2 = s;
  while (true) {
    const s$2 = _tmp$2;
    let s$3;
    _L: {
      if ((s$2.end - s$2.start | 0) >= 1) {
        const _x = s$2.str.charCodeAt(s$2.start);
        if (_x >= 48 && _x <= 57) {
          const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
          if (BigInt.asUintN(64, x$2) < BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
            len = len + 1 | 0;
            x$2 = BigInt.asUintN(64, BigInt.asUintN(64, x$2 * 10n) + BigInt.asUintN(64, BigInt((_x - 48 | 0) >>> 0)));
            _tmp$2 = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(s$2.str, s$2.start + 1 | 0, s$2.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            s$3 = s$2;
            break _L;
          }
        }
      } else {
        s$3 = s$2;
        break _L;
      }
    }
    return { _0: s$3, _1: x$2, _2: len };
  }
}
function _M0FPC28internal7strconv17parse__scientific(s) {
  let s$2 = s;
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$4 = s$2;
      if ((_bind$4.end - _bind$4.start | 0) >= 1) {
        const _x = _bind$4.str.charCodeAt(_bind$4.start);
        switch (_x) {
          case 43: {
            const _x$2 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _x$3 = new _M0TPC16string10StringView(_bind$4.str, _bind$4.start + 1 | 0, _bind$4.end);
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$4 = s$2;
    if ((_bind$4.end - _bind$4.start | 0) >= 1) {
      const _x = _bind$4.str.charCodeAt(_bind$4.start);
      if (_x >= 48 && _x <= 57) {
        const _bind$5 = _M0EPC16string10StringViewPC28internal7strconv12fold__digitsGmE(s$2, _M0FPC28internal7strconv17parse__scientificN8exp__numS354, (digit, exp_num) => BigInt.asIntN(64, exp_num) < BigInt.asIntN(64, 65536n) ? BigInt.asUintN(64, BigInt.asUintN(64, 10n * exp_num) + BigInt.asUintN(64, BigInt(digit))) : exp_num);
        const _s = _bind$5._0;
        const _exp_num = _bind$5._1;
        return neg_exp ? { _0: _s, _1: BigInt.asUintN(64, -_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function _M0FPC28internal7strconv13parse__number(s) {
  let s$2;
  let negative;
  _L: {
    let rest;
    _L$2: {
      if ((s.end - s.start | 0) >= 1) {
        const _x = s.str.charCodeAt(s.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            s$2 = _x$2;
            negative = true;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(s.str, s.start + 1 | 0, s.end);
            rest = _x$3;
            break _L$2;
          }
          default: {
            rest = s;
            break _L$2;
          }
        }
      } else {
        rest = s;
        break _L$2;
      }
    }
    s$2 = rest;
    negative = false;
    break _L;
  }
  if (_M0MPC16string10StringView9is__empty(s$2)) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  const _bind$4 = _M0FPC28internal7strconv13parse__digits(s$2, 0n);
  const _s = _bind$4._0;
  const _mantissa = _bind$4._1;
  const _consumed = _bind$4._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = 0n;
  const _bind$5 = s$3;
  if ((_bind$5.end - _bind$5.start | 0) >= 1) {
    const _x = _bind$5.str.charCodeAt(_bind$5.start);
    if (_x === 46) {
      const _x$2 = new _M0TPC16string10StringView(_bind$5.str, _bind$5.start + 1 | 0, _bind$5.end);
      s$3 = _x$2;
      const _bind$6 = _M0FPC28internal7strconv13parse__digits(s$3, mantissa);
      const _new_s = _bind$6._0;
      const _new_mantissa = _bind$6._1;
      const _consumed_digit = _bind$6._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = BigInt.asUintN(64, -BigInt.asUintN(64, BigInt(n_after_dot)));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
  }
  let exp_number = 0n;
  let rest;
  _L$2: {
    _L$3: {
      const _bind$6 = s$3;
      if ((_bind$6.end - _bind$6.start | 0) >= 1) {
        const _x = _bind$6.str.charCodeAt(_bind$6.start);
        switch (_x) {
          case 101: {
            const _x$2 = new _M0TPC16string10StringView(_bind$6.str, _bind$6.start + 1 | 0, _bind$6.end);
            rest = _x$2;
            break _L$3;
          }
          case 69: {
            const _x$3 = new _M0TPC16string10StringView(_bind$6.str, _bind$6.start + 1 | 0, _bind$6.end);
            rest = _x$3;
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$6 = _M0FPC28internal7strconv17parse__scientific(rest);
    let _bind$7;
    if (_bind$6 === undefined) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
    } else {
      const _Some = _bind$6;
      _bind$7 = _Some;
    }
    const _new_s = _bind$7._0;
    const _exp_number_val = _bind$7._1;
    s$3 = _new_s;
    exp_number = _exp_number_val;
    exponent = BigInt.asUintN(64, exponent + exp_number);
  }
  const _bind$6 = s$3;
  if ((_bind$6.end - _bind$6.start | 0) === 0) {
    if (n_digits <= 19) {
      return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa, negative, false));
    }
    n_digits = n_digits - 19 | 0;
    let many_digits = false;
    let _tmp$2 = s.str;
    let _tmp$3 = s.start;
    let _tmp$4 = s.end;
    _L$3: while (true) {
      const s_str = _tmp$2;
      const s_start = _tmp$3;
      const s_end = _tmp$4;
      _L$4: {
        let rest$2;
        let ch;
        _L$5: {
          if ((s_end - s_start | 0) >= 1) {
            const _x = s_str.charCodeAt(s_start);
            switch (_x) {
              case 48: {
                const _x$2 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$2;
                ch = _x;
                break _L$5;
              }
              case 46: {
                const _x$3 = new _M0TPC16string10StringView(s_str, s_start + 1 | 0, s_end);
                rest$2 = _x$3;
                ch = _x;
                break _L$5;
              }
              default: {
                break _L$4;
              }
            }
          } else {
            break _L$4;
          }
        }
        const _tmp$5 = n_digits;
        if (2 === 0) {
          $panic();
        }
        n_digits = _tmp$5 - ((ch - 46 | 0) / 2 | 0) | 0;
        _tmp$2 = rest$2.str;
        _tmp$3 = rest$2.start;
        _tmp$4 = rest$2.end;
        continue;
      }
      break;
    }
    let mantissa$2 = mantissa;
    if (n_digits > 0) {
      many_digits = true;
      mantissa$2 = 0n;
      const _bind$7 = _M0FPC28internal7strconv20try__parse__19digits(s, mantissa$2);
      const _s$2 = _bind$7._0;
      const _new_mantissa = _bind$7._1;
      const _consumed_digit = _bind$7._2;
      mantissa$2 = _new_mantissa;
      let _tmp$5;
      if (BigInt.asUintN(64, mantissa$2) >= BigInt.asUintN(64, _M0FPC28internal7strconv17min__19digit__int)) {
        _tmp$5 = _consumed_digit;
      } else {
        if (_M0MPC16string6String24char__length__ge_2einner(_s$2.str, 1, _s$2.start, _s$2.end)) {
          const _tmp$6 = _s$2.str;
          const _bind$8 = _M0MPC16string6String29offset__of__nth__char_2einner(_s$2.str, 1, _s$2.start, _s$2.end);
          let _tmp$7;
          if (_bind$8 === undefined) {
            _tmp$7 = _s$2.end;
          } else {
            const _Some = _bind$8;
            _tmp$7 = _Some;
          }
          const _x = new _M0TPC16string10StringView(_tmp$6, _tmp$7, _s$2.end);
          const _bind$9 = _M0FPC28internal7strconv20try__parse__19digits(_x, mantissa$2);
          const _new_mantissa$2 = _bind$9._1;
          const _consumed_digit$2 = _bind$9._2;
          mantissa$2 = _new_mantissa$2;
          _tmp$5 = _consumed_digit$2;
        } else {
          return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(undefined);
        }
      }
      exponent = BigInt.asUintN(64, BigInt(_tmp$5));
      exponent = BigInt.asUintN(64, exponent + exp_number);
    }
    return new _M0DTPC16result6ResultGORPC28internal7strconv6NumberRPC15error5ErrorE2Ok(new _M0TPC28internal7strconv6Number(exponent, mantissa$2, negative, many_digits));
  } else {
    return _M0FPC28internal7strconv11syntax__errGORPC28internal7strconv6NumberE();
  }
}
function _M0FPC28internal7strconv15parse__inf__nan(rest) {
  let pos;
  let rest$2;
  _L: {
    let rest$3;
    _L$2: {
      if ((rest.end - rest.start | 0) >= 1) {
        const _x = rest.str.charCodeAt(rest.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            pos = false;
            rest$2 = _x$2;
            break _L;
          }
          case 43: {
            const _x$3 = new _M0TPC16string10StringView(rest.str, rest.start + 1 | 0, rest.end);
            rest$3 = _x$3;
            break _L$2;
          }
          default: {
            rest$3 = rest;
            break _L$2;
          }
        }
      } else {
        rest$3 = rest;
        break _L$2;
      }
    }
    pos = true;
    rest$2 = rest$3;
    break _L;
  }
  let _cursor_295 = 0;
  const _input_end_297 = rest$2.end - rest$2.start | 0;
  const _start_296 = _cursor_295;
  let _accept_state_298 = -1;
  let _match_end_299 = -1;
  let _state_300 = 2;
  while (true) {
    if (_state_300 !== 14) {
      if (_state_300 < 2) {
        _accept_state_298 = _state_300;
        _match_end_299 = _cursor_295;
      }
      const _tmp$2 = Math.imul(_state_300, 8) | 0;
      let _next_char_303;
      if (_cursor_295 < _input_end_297) {
        const _char_302 = rest$2.str.charCodeAt(rest$2.start + _cursor_295 | 0);
        _cursor_295 = _cursor_295 + 1 | 0;
        _next_char_303 = _char_302;
      } else {
        _next_char_303 = -1;
      }
      _state_300 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv15parse__inf__nanN25_2atransition__table__304S312, _tmp$2 + (_next_char_303 < 90 ? (_next_char_303 < 73 ? (_next_char_303 < 66 ? (_next_char_303 < 0 ? 0 : _next_char_303 > 64 ? 1 : 7) : _next_char_303 > 69 ? (_next_char_303 < 71 ? 2 : 7) : 7) : _next_char_303 > 73 ? (_next_char_303 < 84 ? (_next_char_303 < 78 ? 7 : _next_char_303 > 78 ? 7 : 4) : _next_char_303 > 84 ? (_next_char_303 < 89 ? 7 : 6) : 5) : 3) : _next_char_303 > 96 ? (_next_char_303 < 110 ? (_next_char_303 < 103 ? (_next_char_303 < 98 ? 1 : _next_char_303 > 101 ? 2 : 7) : _next_char_303 > 104 ? (_next_char_303 < 106 ? 3 : 7) : 7) : _next_char_303 > 110 ? (_next_char_303 < 117 ? (_next_char_303 < 116 ? 7 : 5) : _next_char_303 > 120 ? (_next_char_303 < 122 ? 6 : 7) : 7) : 4) : 7) | 0);
      continue;
    } else {
      break;
    }
  }
  const _bind$4 = _accept_state_298;
  switch (_bind$4) {
    case 0: {
      _cursor_295 = _match_end_299;
      return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double14not__a__number);
    }
    case 1: {
      _cursor_295 = _match_end_299;
      return pos ? new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double8infinity) : new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_M0FPC16double13neg__infinity);
    }
    default: {
      _cursor_295 = _start_296;
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  }
}
function _M0FPC28internal7strconv12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC28internal7strconv12checked__mulN6constrS1163;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  if (BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient)) {
    return undefined;
  }
  return BigInt.asUintN(64, a * b);
}
function _M0FPC28internal7strconv19overflow__threshold(base, neg) {
  if (!neg) {
    if (base === 10) {
      return 922337203685477581n;
    } else {
      if (base === 16) {
        return 576460752303423488n;
      } else {
        const _tmp$2 = BigInt.asUintN(64, BigInt(base));
        if (_tmp$2 === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775807n) / BigInt.asIntN(64, _tmp$2)) + 1n);
      }
    }
  } else {
    if (base === 10) {
      return 17524406870024074036n;
    } else {
      if (base === 16) {
        return 17870283321406128128n;
      } else {
        const _tmp$2 = BigInt.asUintN(64, BigInt(base));
        if (_tmp$2 === 0n) {
          $panic();
        }
        return BigInt.asUintN(64, BigInt.asIntN(64, 9223372036854775808n) / BigInt.asIntN(64, _tmp$2));
      }
    }
  }
}
function _M0FPC28internal7strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681, 0, _M0FPC28internal7strconv20parse__int64_2einnerN7_2abindS681.length))) {
    let neg;
    let rest;
    _L: {
      let rest$2;
      _L$2: {
        if ((str.end - str.start | 0) >= 1) {
          const _x = str.str.charCodeAt(str.start);
          switch (_x) {
            case 43: {
              const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              neg = false;
              rest = _x$2;
              break _L;
            }
            case 45: {
              const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
              neg = true;
              rest = _x$3;
              break _L;
            }
            default: {
              rest$2 = str;
              break _L$2;
            }
          }
        } else {
          rest$2 = str;
          break _L$2;
        }
      }
      neg = false;
      rest = rest$2;
      break _L;
    }
    const _bind$4 = _M0FPC28internal7strconv25check__and__consume__base(rest, base);
    let _bind$5;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _bind$5 = _ok._0;
    } else {
      return _bind$4;
    }
    const _num_base = _bind$5._0;
    const _rest = _bind$5._1;
    const _allow_underscore = _bind$5._2;
    const overflow_threshold = _M0FPC28internal7strconv19overflow__threshold(_num_base, neg);
    let has_digit;
    if ((_rest.end - _rest.start | 0) >= 1) {
      const _x = _rest.str.charCodeAt(_rest.start);
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if ((_rest.end - _rest.start | 0) >= 2) {
              if (_x === 95) {
                const _x$2 = _rest.str.charCodeAt(_rest.start + 1 | 0);
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp$2;
      let _tmp$3 = _rest;
      let _tmp$4 = 0n;
      let _tmp$5 = _allow_underscore;
      while (true) {
        const rest$2 = _tmp$3;
        const acc = _tmp$4;
        const allow_underscore = _tmp$5;
        let acc$2;
        let rest$3;
        let c;
        _L$2: {
          _L$3: {
            if ((rest$2.end - rest$2.start | 0) === 1) {
              const _x = rest$2.str.charCodeAt(rest$2.start);
              if (_x === 95) {
                const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              } else {
                const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                const _tmp$6 = rest$2.str;
                const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                let _tmp$7;
                if (_bind$6 === undefined) {
                  _tmp$7 = rest$2.end;
                } else {
                  const _Some = _bind$6;
                  _tmp$7 = _Some;
                }
                const _x$2 = new _M0TPC16string10StringView(_tmp$6, _tmp$7, rest$2.end);
                acc$2 = acc;
                rest$3 = _x$2;
                c = _c;
                break _L$3;
              }
            } else {
              if ((rest$2.end - rest$2.start | 0) >= 1) {
                const _x = rest$2.str.charCodeAt(rest$2.start);
                if (_x === 95) {
                  if (allow_underscore === false) {
                    const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
                    if (_bind$6.$tag === 1) {
                      const _ok = _bind$6;
                      _ok._0;
                    } else {
                      return _bind$6;
                    }
                  } else {
                    const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
                    _tmp$3 = _x$2;
                    _tmp$5 = false;
                    continue;
                  }
                } else {
                  const _c = _M0MPC16string6String16unsafe__char__at(rest$2.str, _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 0, rest$2.start, rest$2.end));
                  const _tmp$6 = rest$2.str;
                  const _bind$6 = _M0MPC16string6String29offset__of__nth__char_2einner(rest$2.str, 1, rest$2.start, rest$2.end);
                  let _tmp$7;
                  if (_bind$6 === undefined) {
                    _tmp$7 = rest$2.end;
                  } else {
                    const _Some = _bind$6;
                    _tmp$7 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$6, _tmp$7, rest$2.end);
                  acc$2 = acc;
                  rest$3 = _x$2;
                  c = _c;
                  break _L$3;
                }
              } else {
                _tmp$2 = acc;
                break;
              }
            }
            break _L$2;
          }
          const c$2 = c;
          let d;
          if (c$2 >= 48 && c$2 <= 57) {
            d = c$2 - 48 | 0;
          } else {
            if (c$2 >= 97 && c$2 <= 122) {
              d = c$2 + -87 | 0;
            } else {
              if (c$2 >= 65 && c$2 <= 90) {
                d = c$2 + -55 | 0;
              } else {
                const _bind$6 = _M0FPC28internal7strconv11syntax__errGiE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  d = _ok._0;
                } else {
                  return _bind$6;
                }
              }
            }
          }
          if (d < _num_base) {
            if (neg) {
              if (BigInt.asIntN(64, acc$2) >= BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) - BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) <= BigInt.asIntN(64, acc$2)) {
                  _tmp$3 = rest$3;
                  _tmp$4 = next_acc;
                  _tmp$5 = true;
                  continue;
                } else {
                  const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _ok._0;
                  } else {
                    return _bind$6;
                  }
                }
              } else {
                const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
            } else {
              if (BigInt.asIntN(64, acc$2) < BigInt.asIntN(64, overflow_threshold)) {
                const next_acc = BigInt.asUintN(64, BigInt.asUintN(64, acc$2 * BigInt.asUintN(64, BigInt(_num_base))) + BigInt.asUintN(64, BigInt(d)));
                if (BigInt.asIntN(64, next_acc) >= BigInt.asIntN(64, acc$2)) {
                  _tmp$3 = rest$3;
                  _tmp$4 = next_acc;
                  _tmp$5 = true;
                  continue;
                } else {
                  const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                  if (_bind$6.$tag === 1) {
                    const _ok = _bind$6;
                    _ok._0;
                  } else {
                    return _bind$6;
                  }
                }
              } else {
                const _bind$6 = _M0FPC28internal7strconv10range__errGuE();
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
              }
            }
          } else {
            const _bind$6 = _M0FPC28internal7strconv11syntax__errGuE();
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
        }
        continue;
      }
      return new _M0DTPC16result6ResultGlRPC15error5ErrorE2Ok(_tmp$2);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv17check__underscore(str) {
  if (_M0MPC16string10StringView20contains__code__unit(str, 95)) {
    let rest;
    if ((str.end - str.start | 0) >= 1) {
      const _x = str.str.charCodeAt(str.start);
      switch (_x) {
        case 43: {
          const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$2;
          break;
        }
        case 45: {
          const _x$3 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
          rest = _x$3;
          break;
        }
        default: {
          rest = str;
        }
      }
    } else {
      rest = str;
    }
    let rest$2;
    let allow_underscore;
    let hex;
    _L: {
      let _cursor_213 = 0;
      const _input_end_215 = rest.end - rest.start | 0;
      const _start_214 = _cursor_213;
      let _accept_state_216 = -1;
      let _match_end_217 = -1;
      let _state_218 = 3;
      while (true) {
        if (_state_218 !== 5) {
          if (_state_218 < 3) {
            _accept_state_216 = _state_218;
            _match_end_217 = _cursor_213;
          }
          const _tmp$2 = Math.imul(_state_218, 5) | 0;
          let _next_char_221;
          if (_cursor_213 < _input_end_215) {
            const _char_220 = rest.str.charCodeAt(rest.start + _cursor_213 | 0);
            _cursor_213 = _cursor_213 + 1 | 0;
            _next_char_221 = _char_220;
          } else {
            _next_char_221 = -1;
          }
          _state_218 = _M0MPC15array13ReadOnlyArray11unsafe__getGiE(_M0FPC28internal7strconv17check__underscoreN25_2atransition__table__222S230, _tmp$2 + (_next_char_221 < 88 ? (_next_char_221 < 66 ? (_next_char_221 < 48 ? 4 : _next_char_221 > 48 ? 4 : 0) : _next_char_221 > 66 ? (_next_char_221 < 79 ? 4 : _next_char_221 > 79 ? 4 : 2) : 1) : _next_char_221 > 88 ? (_next_char_221 < 111 ? (_next_char_221 < 98 ? 4 : _next_char_221 > 98 ? 4 : 1) : _next_char_221 > 111 ? (_next_char_221 < 120 ? 4 : _next_char_221 > 120 ? 4 : 3) : 2) : 3) | 0);
          continue;
        } else {
          break;
        }
      }
      const _bind$4 = _accept_state_216;
      switch (_bind$4) {
        case 0: {
          _cursor_213 = _match_end_217;
          const rest$3 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$3;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 1: {
          _cursor_213 = _match_end_217;
          const rest$4 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$4;
          allow_underscore = true;
          hex = false;
          break _L;
        }
        case 2: {
          _cursor_213 = _match_end_217;
          const rest$5 = _M0MPC16string10StringView12view_2einner(rest, _match_end_217, _input_end_215);
          rest$2 = rest$5;
          allow_underscore = true;
          hex = true;
          break _L;
        }
        default: {
          _cursor_213 = _start_214;
          rest$2 = rest;
          allow_underscore = false;
          hex = false;
          break _L;
        }
      }
    }
    let _tmp$2 = rest$2.str;
    let _tmp$3 = rest$2.start;
    let _tmp$4 = rest$2.end;
    let _tmp$5 = allow_underscore;
    let _tmp$6 = false;
    while (true) {
      const rest_str = _tmp$2;
      const rest_start = _tmp$3;
      const rest_end = _tmp$4;
      const allow_underscore$2 = _tmp$5;
      const follow_underscore = _tmp$6;
      let rest$3;
      _L$2: {
        _L$3: {
          let rest$4;
          _L$4: {
            _L$5: {
              let rest$5;
              _L$6: {
                let rest$6;
                _L$7: {
                  if ((rest_end - rest_start | 0) === 0) {
                    return true;
                  } else {
                    if ((rest_end - rest_start | 0) === 1) {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        return false;
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$7;
                                      if (_bind$4 === undefined) {
                                        _tmp$7 = rest_end;
                                      } else {
                                        const _Some = _bind$4;
                                        _tmp$7 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$7, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const _x = rest_str.charCodeAt(rest_start);
                      if (_x === 95) {
                        if (allow_underscore$2 === false) {
                          return false;
                        } else {
                          const _bind$4 = rest_start + 1 | 0;
                          _tmp$3 = _bind$4;
                          _tmp$5 = false;
                          _tmp$6 = true;
                          continue;
                        }
                      } else {
                        if (_x >= 48 && _x <= 57) {
                          const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                          rest$6 = _x$2;
                          break _L$7;
                        } else {
                          if (_x >= 97 && _x <= 102) {
                            const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                            if (hex) {
                              rest$5 = _x$2;
                              break _L$6;
                            } else {
                              if (_x === 101) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (follow_underscore === true) {
                                  break _L$3;
                                } else {
                                  rest$3 = _x$2;
                                  break _L$2;
                                }
                              }
                            }
                          } else {
                            if (_x >= 65 && _x <= 70) {
                              const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                              if (hex) {
                                rest$5 = _x$2;
                                break _L$6;
                              } else {
                                if (_x === 69) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (follow_underscore === true) {
                                    break _L$3;
                                  } else {
                                    rest$3 = _x$2;
                                    break _L$2;
                                  }
                                }
                              }
                            } else {
                              if (_x === 46) {
                                if (follow_underscore === true) {
                                  break _L$5;
                                } else {
                                  const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                  rest$4 = _x$2;
                                  break _L$4;
                                }
                              } else {
                                if (_x === 43) {
                                  if (follow_underscore === true) {
                                    break _L$5;
                                  } else {
                                    const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                    rest$4 = _x$2;
                                    break _L$4;
                                  }
                                } else {
                                  if (_x === 45) {
                                    if (follow_underscore === true) {
                                      break _L$5;
                                    } else {
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, rest_start + 1 | 0, rest_end);
                                      rest$4 = _x$2;
                                      break _L$4;
                                    }
                                  } else {
                                    if (follow_underscore === true) {
                                      break _L$3;
                                    } else {
                                      const _bind$4 = _M0MPC16string6String29offset__of__nth__char_2einner(rest_str, 1, rest_start, rest_end);
                                      let _tmp$7;
                                      if (_bind$4 === undefined) {
                                        _tmp$7 = rest_end;
                                      } else {
                                        const _Some = _bind$4;
                                        _tmp$7 = _Some;
                                      }
                                      const _x$2 = new _M0TPC16string10StringView(rest_str, _tmp$7, rest_end);
                                      rest$3 = _x$2;
                                      break _L$2;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                _tmp$2 = rest$6.str;
                _tmp$3 = rest$6.start;
                _tmp$4 = rest$6.end;
                _tmp$5 = true;
                _tmp$6 = false;
                continue;
              }
              _tmp$2 = rest$5.str;
              _tmp$3 = rest$5.start;
              _tmp$4 = rest$5.end;
              _tmp$5 = true;
              _tmp$6 = false;
              continue;
            }
            return false;
          }
          _tmp$2 = rest$4.str;
          _tmp$3 = rest$4.start;
          _tmp$4 = rest$4.end;
          _tmp$5 = false;
          _tmp$6 = false;
          continue;
        }
        return false;
      }
      _tmp$2 = rest$3.str;
      _tmp$3 = rest$3.start;
      _tmp$4 = rest$3.end;
      _tmp$5 = false;
      _tmp$6 = false;
      continue;
    }
  } else {
    return true;
  }
}
function _M0FPC28internal7strconv14eisel__umul128(a, b) {
  const a_lo = BigInt.asUintN(64, a & 4294967295n);
  const a_hi = BigInt.asUintN(64, BigInt.asUintN(64, a) >> BigInt(32 & 63));
  const b_lo = BigInt.asUintN(64, b & 4294967295n);
  const b_hi = BigInt.asUintN(64, BigInt.asUintN(64, b) >> BigInt(32 & 63));
  const x = BigInt.asUintN(64, a_lo * b_lo);
  const y = BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_lo) + BigInt.asUintN(64, BigInt.asUintN(64, x) >> BigInt(32 & 63)));
  const z = BigInt.asUintN(64, BigInt.asUintN(64, a_lo * b_hi) + BigInt.asUintN(64, y & 4294967295n));
  const hi = BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, a_hi * b_hi) + BigInt.asUintN(64, BigInt.asUintN(64, y) >> BigInt(32 & 63))) + BigInt.asUintN(64, BigInt.asUintN(64, z) >> BigInt(32 & 63)));
  return new _M0TPC28internal7strconv12EiselProduct(BigInt.asUintN(64, a * b), hi);
}
function _M0FPC28internal7strconv20eisel__mul__log2__10(exponent) {
  return (Math.imul(exponent, 108853) | 0) >> 15;
}
function _M0FPC28internal7strconv20try__eisel__lemire64(mantissa, exponent, negative) {
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, 0n)) {
    return negative ? $i64_reinterpret_f64(9223372036854775808n) : 0;
  }
  if (BigInt.asIntN(64, exponent) < BigInt.asIntN(64, 18446744073709551268n) || BigInt.asIntN(64, exponent) > BigInt.asIntN(64, 347n)) {
    return _M0FPC16double14not__a__number;
  }
  const exponent$2 = Number(BigInt.asIntN(32, exponent)) | 0;
  const table_index = Math.imul(exponent$2 - -348 | 0, 2) | 0;
  const pow_hi = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index);
  const pow_lo = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv27eisel__lemire__pow10__table, table_index + 1 | 0);
  const pow_exp2 = 1 + _M0FPC28internal7strconv20eisel__mul__log2__10(exponent$2) | 0;
  const leading_zeros = $i64_clz(mantissa);
  const normalized = BigInt.asUintN(64, mantissa << BigInt(leading_zeros & 63));
  let result_exp2 = ((pow_exp2 + 63 | 0) + 1023 | 0) - leading_zeros | 0;
  const product = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_hi);
  let product_hi = product.hi;
  let product_lo = product.lo;
  if (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 511n) && BigInt.asUintN(64, BigInt.asUintN(64, product_lo + normalized)) < BigInt.asUintN(64, normalized)) {
    const wider = _M0FPC28internal7strconv14eisel__umul128(normalized, pow_lo);
    let merged_hi = product_hi;
    const merged_lo = BigInt.asUintN(64, product_lo + wider.hi);
    if (BigInt.asUintN(64, merged_lo) < BigInt.asUintN(64, product_lo)) {
      merged_hi = BigInt.asUintN(64, merged_hi + 1n);
    }
    if (BigInt.asUintN(64, BigInt.asUintN(64, merged_hi & 511n)) === BigInt.asUintN(64, 511n) && (BigInt.asUintN(64, BigInt.asUintN(64, merged_lo + 1n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, wider.lo + normalized)) < BigInt.asUintN(64, normalized))) {
      return _M0FPC16double14not__a__number;
    }
    product_hi = merged_hi;
    product_lo = merged_lo;
  }
  const top_bit = Number(BigInt.asIntN(32, BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt(63 & 63)))) | 0;
  let result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, product_hi) >> BigInt((top_bit + 9 | 0) & 63));
  result_exp2 = result_exp2 - (1 - top_bit | 0) | 0;
  if (BigInt.asUintN(64, product_lo) === BigInt.asUintN(64, 0n) && (BigInt.asUintN(64, BigInt.asUintN(64, product_hi & 511n)) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa & 3n)) === BigInt.asUintN(64, 1n))) {
    return _M0FPC16double14not__a__number;
  }
  result_mantissa = BigInt.asUintN(64, result_mantissa + BigInt.asUintN(64, result_mantissa & 1n));
  result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
  if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(53 & 63))) > BigInt.asUintN(64, 0n)) {
    result_mantissa = BigInt.asUintN(64, BigInt.asUintN(64, result_mantissa) >> BigInt(1 & 63));
    result_exp2 = result_exp2 + 1 | 0;
  }
  if (result_exp2 <= 0 || result_exp2 >= 2047) {
    return _M0FPC16double14not__a__number;
  }
  const exponent_bits = BigInt.asUintN(64, BigInt.asUintN(64, BigInt(result_exp2 >>> 0)) << BigInt(52 & 63));
  let result_bits = BigInt.asUintN(64, exponent_bits | BigInt.asUintN(64, result_mantissa & 4503599627370495n));
  if (negative) {
    result_bits = BigInt.asUintN(64, result_bits | 9223372036854775808n);
  }
  return $i64_reinterpret_f64(result_bits);
}
function _M0MPC28internal7strconv7Decimal9new__priv() {
  return new _M0TPC28internal7strconv7Decimal($makebytes(800, 0), 0, 0, false, false, 0);
}
function _M0MPC28internal7strconv7Decimal4trim(self) {
  while (true) {
    let _tmp$2;
    if (self.digits_num > 0) {
      const _tmp$3 = self.digits;
      const _tmp$4 = self.digits_num - 1 | 0;
      _tmp$2 = _M0IPC14byte4BytePB2Eq5equal(_tmp$4 >>> 0 < _tmp$3.length ? _tmp$3[_tmp$4] : $oob(), 0);
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function _M0FPC28internal7strconv26parse__decimal__from__view(str) {
  const d = _M0MPC28internal7strconv7Decimal9new__priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if ((str.end - str.start | 0) >= 1) {
        const _x = str.str.charCodeAt(str.start);
        switch (_x) {
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            rest = new _M0TPC16string10StringView(str.str, str.start + 1 | 0, str.end);
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp$2 = rest;
  while (true) {
    const rest$3 = _tmp$2;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$3.end - rest$3.start | 0) >= 1) {
          const _x = rest$3.str.charCodeAt(rest$3.start);
          if (_x === 95) {
            const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
            _tmp$2 = _x$2;
            continue;
          } else {
            if (_x === 46) {
              const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
              if (!has_dp) {
                has_dp = true;
                d.decimal_point = d.digits_num;
                _tmp$2 = _x$2;
                continue;
              } else {
                const _bind$4 = _M0FPC28internal7strconv11syntax__errGuE();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _ok._0;
                } else {
                  return _bind$4;
                }
              }
            } else {
              if (_x >= 48 && _x <= 57) {
                const _x$2 = new _M0TPC16string10StringView(rest$3.str, rest$3.start + 1 | 0, rest$3.end);
                has_digits = true;
                if (_x === 48 && d.digits_num === 0) {
                  d.decimal_point = d.decimal_point - 1 | 0;
                  _tmp$2 = _x$2;
                  continue;
                }
                if (d.digits_num < d.digits.length) {
                  const _tmp$3 = d.digits;
                  const _tmp$4 = d.digits_num;
                  if (_tmp$4 >>> 0 < _tmp$3.length) {
                    _tmp$3[_tmp$4] = (_x - 48 | 0) & 255;
                  } else {
                    $oob();
                  }
                  d.digits_num = d.digits_num + 1 | 0;
                } else {
                  if (!has_dp) {
                    d.overflowed = d.overflowed + 1 | 0;
                  }
                  if (_x !== 48) {
                    d.truncated = true;
                  }
                }
                _tmp$2 = _x$2;
                continue;
              } else {
                rest$4 = rest$3;
                break _L$3;
              }
            }
          }
        } else {
          rest$4 = rest$3;
          break _L$3;
        }
        break _L$2;
      }
      rest$2 = rest$4;
      break;
    }
    continue;
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if ((rest$2.end - rest$2.start | 0) >= 1) {
          const _x = rest$2.str.charCodeAt(rest$2.start);
          switch (_x) {
            case 101: {
              const _x$2 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _x$3 = new _M0TPC16string10StringView(rest$2.str, rest$2.start + 1 | 0, rest$2.end);
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if ((rest$4.end - rest$4.start | 0) >= 1) {
        const _x = rest$4.str.charCodeAt(rest$4.start);
        switch (_x) {
          case 43: {
            rest$5 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            break;
          }
          case 45: {
            const _x$2 = new _M0TPC16string10StringView(rest$4.str, rest$4.start + 1 | 0, rest$4.end);
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if ((rest$5.end - rest$5.start | 0) >= 1) {
            const _x = rest$5.str.charCodeAt(rest$5.start);
            if (_x >= 48 && _x <= 57) {
              const effective_dp = d.decimal_point + d.overflowed | 0;
              const exp_limit = exp_sign > 0 ? (effective_dp < 311 ? 311 - effective_dp | 0 : 0) : effective_dp > -331 ? effective_dp + 331 | 0 : 0;
              let exp = 0;
              let rest$6;
              let _tmp$3 = rest$5;
              while (true) {
                const rest$7 = _tmp$3;
                let rest$8;
                _L$6: {
                  if ((rest$7.end - rest$7.start | 0) >= 1) {
                    const _x$2 = rest$7.str.charCodeAt(rest$7.start);
                    if (_x$2 === 95) {
                      const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                      _tmp$3 = _x$3;
                      continue;
                    } else {
                      if (_x$2 >= 48 && _x$2 <= 57) {
                        const _x$3 = new _M0TPC16string10StringView(rest$7.str, rest$7.start + 1 | 0, rest$7.end);
                        if (exp < exp_limit) {
                          exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                          if (exp > exp_limit) {
                            exp = exp_limit;
                          }
                        }
                        _tmp$3 = _x$3;
                        continue;
                      } else {
                        rest$8 = rest$7;
                        break _L$6;
                      }
                    }
                  } else {
                    rest$8 = rest$7;
                    break _L$6;
                  }
                }
                rest$6 = rest$8;
                break;
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind$4 = _M0FPC28internal7strconv11syntax__errGlE();
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          rest$3 = _ok._0;
        } else {
          return _bind$4;
        }
      }
    }
    if ((rest$3.end - rest$3.start | 0) === 0) {
      _M0MPC28internal7strconv7Decimal4trim(d);
      return new _M0DTPC16result6ResultGRPC28internal7strconv7DecimalRPC15error5ErrorE2Ok(d);
    } else {
      return _M0FPC28internal7strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGlE();
  }
}
function _M0FPC28internal7strconv20parse__decimal__priv(str) {
  return _M0FPC28internal7strconv26parse__decimal__from__view(str);
}
function _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, negative) {
  const biased_exp = exponent - _M0FPC28internal7strconv12double__info.bias | 0;
  let bits = BigInt.asUintN(64, mantissa & BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) - 1n));
  const exp_bits = BigInt.asUintN(64, BigInt(biased_exp & ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)));
  bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, exp_bits << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)));
  if (negative) {
    bits = BigInt.asUintN(64, bits | BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)) << BigInt(_M0FPC28internal7strconv12double__info.exponent_bits & 63)));
  }
  return bits;
}
function _M0MPC28internal7strconv7Decimal17should__round__up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp$2;
  const _tmp$3 = self.digits;
  if ((d >>> 0 < _tmp$3.length ? _tmp$3[d] : $oob()) === 5) {
    _tmp$2 = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    if (self.truncated) {
      return true;
    }
    let _tmp$4;
    if (d > 0) {
      const _tmp$5 = self.digits;
      const _tmp$6 = d - 1 | 0;
      if (2 === 0) {
        $panic();
      }
      _tmp$4 = ((_tmp$6 >>> 0 < _tmp$5.length ? _tmp$5[_tmp$6] : $oob()) % 2 | 0) !== 0;
    } else {
      _tmp$4 = false;
    }
    return _tmp$4;
  }
  const _tmp$4 = self.digits;
  return (d >>> 0 < _tmp$4.length ? _tmp$4[d] : $oob()) >= 5;
}
function _M0MPC28internal7strconv7Decimal16rounded__integer(self) {
  if (self.decimal_point > 20) {
    return 18446744073709551615n;
  }
  let _tmp$2 = 0n;
  let _tmp$3 = 0;
  while (true) {
    const n = _tmp$2;
    const i = _tmp$3;
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp$4 = BigInt.asUintN(64, n * 10n);
      const _tmp$5 = self.digits;
      _tmp$2 = BigInt.asUintN(64, _tmp$4 + _M0MPC14byte4Byte9to__int64(i >>> 0 < _tmp$5.length ? _tmp$5[i] : $oob()));
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      let n$2;
      let _tmp$4 = n;
      let _tmp$5 = i;
      while (true) {
        const n$3 = _tmp$4;
        const i$2 = _tmp$5;
        if (i$2 < self.decimal_point) {
          _tmp$4 = BigInt.asUintN(64, n$3 * 10n);
          _tmp$5 = i$2 + 1 | 0;
          continue;
        } else {
          n$2 = n$3;
          break;
        }
      }
      return _M0MPC28internal7strconv7Decimal17should__round__up(self, self.decimal_point) ? BigInt.asUintN(64, n$2 + 1n) : n$2;
    }
  }
}
function _M0MPC28internal7strconv7Decimal11new__digits(self, s) {
  const new_digits = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._0;
  const cheat_num = _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv19left__shift__cheats, s)._1;
  const _bind$4 = cheat_num.length;
  let less;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const code_unit = cheat_num.charCodeAt(i);
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = code_unit - 48 | 0;
      const _tmp$3 = self.digits;
      if ((i >>> 0 < _tmp$3.length ? _tmp$3[i] : $oob()) !== d) {
        const _tmp$4 = self.digits;
        less = (i >>> 0 < _tmp$4.length ? _tmp$4[i] : $oob()) < d;
        break;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      less = false;
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function _M0MPC28internal7strconv7Decimal11left__shift(self, s) {
  const new_digits = _M0MPC28internal7strconv7Decimal11new__digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = 0n;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = read_index;
      const d = _M0MPC14byte4Byte9to__int64(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob());
      acc = BigInt.asUintN(64, acc + BigInt.asUintN(64, d << BigInt(s & 63)));
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, quo * 10n)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$4 = self.digits;
        const _tmp$5 = write_index;
        if (_tmp$5 >>> 0 < _tmp$4.length) {
          _tmp$4[_tmp$5] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, 0n)) {
      if (10n === 0n) {
        $panic();
      }
      const quo = BigInt.asUintN(64, BigInt.asIntN(64, acc) / BigInt.asIntN(64, 10n));
      const rem = Number(BigInt.asIntN(32, BigInt.asUintN(64, acc - BigInt.asUintN(64, 10n * quo)))) | 0;
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$2 = self.digits;
        const _tmp$3 = write_index;
        if (_tmp$3 >>> 0 < _tmp$2.length) {
          _tmp$2[_tmp$3] = rem & 255;
        } else {
          $oob();
        }
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal12right__shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = 0n;
  while (true) {
    if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (BigInt.asUintN(64, BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63))) === BigInt.asUintN(64, 0n)) {
            acc = BigInt.asUintN(64, acc * 10n);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp$2 = self.digits;
      const _tmp$3 = read_index;
      const d = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2[_tmp$3] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = BigInt.asUintN(64, BigInt.asUintN(64, 1n << BigInt(s & 63)) - 1n);
  while (true) {
    if (read_index < self.digits_num) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      const _tmp$2 = self.digits;
      const _tmp$3 = write_index;
      if (_tmp$3 >>> 0 < _tmp$2.length) {
        _tmp$2[_tmp$3] = _M0MPC16uint646UInt648to__byte(out);
      } else {
        $oob();
      }
      write_index = write_index + 1 | 0;
      acc = BigInt.asUintN(64, acc & mask);
      const _tmp$4 = self.digits;
      const _tmp$5 = read_index;
      const d = _tmp$5 >>> 0 < _tmp$4.length ? _tmp$4[_tmp$5] : $oob();
      acc = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + _M0MPC14byte4Byte9to__int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (BigInt.asUintN(64, acc) > BigInt.asUintN(64, 0n)) {
      const out = BigInt.asUintN(64, BigInt.asUintN(64, acc) >> BigInt(s & 63));
      if (write_index < self.digits.length) {
        const _tmp$2 = self.digits;
        const _tmp$3 = write_index;
        if (_tmp$3 >>> 0 < _tmp$2.length) {
          _tmp$2[_tmp$3] = _M0MPC16uint646UInt648to__byte(out);
        } else {
          $oob();
        }
        write_index = write_index + 1 | 0;
      } else {
        if (BigInt.asUintN(64, out) > BigInt.asUintN(64, 0n)) {
          self.truncated = true;
        }
      }
      acc = BigInt.asUintN(64, acc & mask);
      acc = BigInt.asUintN(64, acc * 10n);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  _M0MPC28internal7strconv7Decimal4trim(self);
}
function _M0MPC28internal7strconv7Decimal11shift__priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        _M0MPC28internal7strconv7Decimal11left__shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal11left__shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        _M0MPC28internal7strconv7Decimal12right__shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC28internal7strconv7Decimal12right__shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function _M0MPC28internal7strconv7Decimal16to__double__priv(self) {
  let exponent = 0;
  let mantissa = 0n;
  const effective_dp = self.decimal_point + self.overflowed | 0;
  if (self.digits_num === 0 || effective_dp < -330) {
    mantissa = 0n;
    exponent = _M0FPC28internal7strconv12double__info.bias;
    const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
    return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
  }
  if (self.decimal_point > 310) {
    const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  self.decimal_point = self.decimal_point + self.overflowed | 0;
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, self.decimal_point);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp$2;
    if (self.decimal_point < 0) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      if (self.decimal_point === 0) {
        const _tmp$4 = self.digits;
        _tmp$3 = (0 >>> 0 < _tmp$4.length ? _tmp$4[0] : $oob()) < 5;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    }
    if (_tmp$2) {
      let n = 0;
      if ((-self.decimal_point | 0) >= _M0MPC15array13ReadOnlyArray6lengthGiE(_M0FPC28internal7strconv6powtab)) {
        n = 60;
      } else {
        n = _M0MPC15array13ReadOnlyArray2atGiE(_M0FPC28internal7strconv6powtab, -self.decimal_point | 0);
      }
      _M0MPC28internal7strconv7Decimal11shift__priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (_M0FPC28internal7strconv12double__info.bias + 1 | 0)) {
    const n = (_M0FPC28internal7strconv12double__info.bias + 1 | 0) - exponent | 0;
    _M0MPC28internal7strconv7Decimal11shift__priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
    const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  _M0MPC28internal7strconv7Decimal11shift__priv(self, _M0FPC28internal7strconv12double__info.mantissa_bits + 1 | 0);
  mantissa = _M0MPC28internal7strconv7Decimal16rounded__integer(self);
  if (BigInt.asUintN(64, mantissa) === BigInt.asUintN(64, BigInt.asUintN(64, 2n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) {
    mantissa = BigInt.asUintN(64, BigInt.asIntN(64, mantissa) >> BigInt(1 & 63));
    exponent = exponent + 1 | 0;
    if ((exponent - _M0FPC28internal7strconv12double__info.bias | 0) >= ((1 << _M0FPC28internal7strconv12double__info.exponent_bits) - 1 | 0)) {
      const _bind$4 = _M0FPC28internal7strconv10range__errGuE();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        return _bind$4;
      }
    }
  }
  if (BigInt.asUintN(64, BigInt.asUintN(64, mantissa & BigInt.asUintN(64, 1n << BigInt(_M0FPC28internal7strconv12double__info.mantissa_bits & 63)))) === BigInt.asUintN(64, 0n)) {
    exponent = _M0FPC28internal7strconv12double__info.bias;
  }
  const bits = _M0FPC28internal7strconv14assemble__bits(mantissa, exponent, self.negative);
  return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok($i64_reinterpret_f64(bits));
}
function _M0FPC28internal7strconv17pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC28internal7strconv5table, exponent & 31);
}
function _M0MPC28internal7strconv6Number14is__fast__path(self) {
  return BigInt.asIntN(64, _M0FPC28internal7strconv25min__exponent__fast__path) <= BigInt.asIntN(64, self.exponent) && (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv36max__exponent__disguised__fast__path) && (BigInt.asUintN(64, self.mantissa) <= BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path) && !self.many_digits));
}
function _M0MPC28internal7strconv6Number15try__fast__path(self) {
  if (_M0MPC28internal7strconv6Number14is__fast__path(self)) {
    let value;
    if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, _M0FPC28internal7strconv25max__exponent__fast__path)) {
      const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
      value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC28internal7strconv17pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
    } else {
      const shift = BigInt.asUintN(64, self.exponent - _M0FPC28internal7strconv25max__exponent__fast__path);
      const _bind$4 = _M0FPC28internal7strconv12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC28internal7strconv10int__pow10, Number(BigInt.asIntN(32, shift)) | 0));
      if (_bind$4 === undefined) {
        return _M0DTPC16option6OptionGdE4None__;
      } else {
        const _Some = _bind$4;
        const _mantissa = _Some;
        if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, _M0FPC28internal7strconv25max__mantissa__fast__path)) {
          return _M0DTPC16option6OptionGdE4None__;
        }
        value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC28internal7strconv17pow10__fast__path(Number(BigInt.asIntN(32, _M0FPC28internal7strconv25max__exponent__fast__path)) | 0);
      }
    }
    if (self.negative) {
      value = -value;
    }
    return new _M0DTPC16option6OptionGdE4Some(value);
  } else {
    return _M0DTPC16option6OptionGdE4None__;
  }
}
function _M0FPC28internal7strconv13parse__double(str) {
  if (!_M0MPC16string10StringView9is__empty(str)) {
    if (_M0FPC28internal7strconv17check__underscore(str)) {
      const _bind$4 = _M0FPC28internal7strconv13parse__number(str);
      let _bind$5;
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$5 = _ok._0;
      } else {
        return _bind$4;
      }
      if (_bind$5 === undefined) {
        return _M0FPC28internal7strconv15parse__inf__nan(str);
      } else {
        const _Some = _bind$5;
        const _num = _Some;
        const _bind$6 = _M0MPC28internal7strconv6Number15try__fast__path(_num);
        if (_bind$6.$tag === 1) {
          const _Some$2 = _bind$6;
          const _value = _Some$2._0;
          return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(_value);
        } else {
          const fast = _num.many_digits ? _M0FPC16double14not__a__number : _M0FPC28internal7strconv20try__eisel__lemire64(_num.mantissa, _num.exponent, _num.negative);
          if (_M0MPC16double6Double7is__nan(fast)) {
            const _bind$7 = _M0FPC28internal7strconv20parse__decimal__priv(str);
            let _tmp$2;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$2 = _ok._0;
            } else {
              return _bind$7;
            }
            return _M0MPC28internal7strconv7Decimal16to__double__priv(_tmp$2);
          } else {
            return new _M0DTPC16result6ResultGdRPC15error5ErrorE2Ok(fast);
          }
        }
      }
    } else {
      return _M0FPC28internal7strconv11syntax__errGdE();
    }
  } else {
    return _M0FPC28internal7strconv11syntax__errGdE();
  }
}
function _M0FPC14json20offset__to__position(input, offset) {
  const _bind$4 = _M0MPC15array9ArrayView21clamped__view_2einnerGkE(_M0MPC16string10StringView11code__units(input), 0, offset);
  const _bind$5 = _bind$4.end - _bind$4.start | 0;
  let _tmp$2 = 0;
  let _tmp$3 = 1;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$2;
    const line = _tmp$3;
    const column = _tmp$4;
    if (_ < _bind$5) {
      const code_unit = _bind$4.buf[_bind$4.start + _ | 0];
      if (_M0IPC16uint166UInt16PB2Eq5equal(code_unit, 10)) {
        _tmp$2 = _ + 1 | 0;
        _tmp$3 = line + 1 | 0;
        _tmp$4 = 0;
        continue;
      } else {
        _tmp$2 = _ + 1 | 0;
        _tmp$4 = column + 1 | 0;
        continue;
      }
    } else {
      return new _M0TPC14json8Position(line, column);
    }
  }
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(new _M0DTPC15error5Error52moonbitlang_2fcore_2fjson_2eParseError_2eInvalidChar(_M0FPC14json20offset__to__position(ctx.input, offset), _M0MPC16option6Option10unwrap__orGcE(_M0MPC16string10StringView9get__char(ctx.input, offset), 65533)));
}
function _M0IPC14json10ParseErrorPB4Show6output(self, logger) {
  switch (self.$tag) {
    case 5: {
      const _InvalidChar = self;
      const _x = _InvalidChar._0;
      const _line = _x.line;
      const _column = _x.column;
      const _c = _InvalidChar._1;
      logger.method_table.method_0(logger.self, "Invalid character ");
      logger.method_table.method_4(logger.self, { self: _M0MPC14char4Char14escape_2einner(_c, true), method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 4: {
      logger.method_table.method_0(logger.self, "Unexpected end of file");
      return;
    }
    case 3: {
      const _InvalidNumber = self;
      const _x$2 = _InvalidNumber._0;
      const _line$2 = _x$2.line;
      const _column$2 = _x$2.column;
      const _s = _InvalidNumber._1;
      logger.method_table.method_0(logger.self, "Invalid number ");
      logger.method_table.method_4(logger.self, { self: _s, method_table: _M0FP052String_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, " at line ");
      logger.method_table.method_4(logger.self, { self: _line$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$2, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    case 2: {
      const _InvalidIdentEscape = self;
      const _x$3 = _InvalidIdentEscape._0;
      const _line$3 = _x$3.line;
      const _column$3 = _x$3.column;
      logger.method_table.method_0(logger.self, "Invalid escape sequence in identifier at line ");
      logger.method_table.method_4(logger.self, { self: _line$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      logger.method_table.method_0(logger.self, ", column ");
      logger.method_table.method_4(logger.self, { self: _column$3, method_table: _M0FP049Int_24as_24_40moonbitlang_2fcore_2fbuiltin_2eShow });
      return;
    }
    default: {
      logger.method_table.method_0(logger.self, "Depth limit exceeded, please increase the max_nesting_depth parameter");
      return;
    }
  }
}
function _M0MPC14json12ParseContext21lex__skip__whitespace(ctx) {
  const end = ctx.end_offset;
  let _tmp$2;
  let _tmp$3 = ctx.offset;
  _L: while (true) {
    const offset = _tmp$3;
    if (offset >= end) {
      _tmp$2 = offset;
      break;
    }
    _L$2: {
      const _bind$4 = ctx.input;
      const _bind$5 = _bind$4.str.charCodeAt(_bind$4.start + offset | 0);
      switch (_bind$5) {
        case 32: {
          break _L$2;
        }
        case 9: {
          break _L$2;
        }
        case 13: {
          break _L$2;
        }
        case 10: {
          break _L$2;
        }
        default: {
          _tmp$2 = offset;
          break _L;
        }
      }
    }
    _tmp$3 = offset + 1 | 0;
    continue;
  }
  ctx.offset = _tmp$2;
}
function _M0MPC14json12ParseContext4make(input) {
  return new _M0TPC14json12ParseContext(0, input, input.end - input.start | 0);
}
function _M0MPC14json12ParseContext19expect__ascii__char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$4 = ctx.input;
    const c1 = _bind$4.str.charCodeAt(_bind$4.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1) : new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
  } else {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  }
}
function _M0FPC14json12checked__mul(a, b) {
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 0n) || BigInt.asUintN(64, b) === BigInt.asUintN(64, 0n)) {
    return _M0FPC14json12checked__mulN6constrS1890;
  }
  if (BigInt.asUintN(64, a) === BigInt.asUintN(64, 1n)) {
    return b;
  }
  if (BigInt.asUintN(64, b) === BigInt.asUintN(64, 1n)) {
    return a;
  }
  if ($i64_clz(b) === 0 || $i64_clz(a) === 0) {
    return undefined;
  }
  if (b === 0n) {
    $panic();
  }
  const quotient = BigInt.asUintN(64, BigInt.asUintN(64, 18446744073709551615n) / BigInt.asUintN(64, b));
  return BigInt.asUintN(64, a) > BigInt.asUintN(64, quotient) ? undefined : BigInt.asUintN(64, a * b);
}
function _M0FPC14json23json__pow10__fast__path(exponent) {
  return _M0MPC15array13ReadOnlyArray2atGdE(_M0FPC14json12pow10__table, exponent & 31);
}
function _M0MPC14json14JsonNumberScan17try__fast__double(self) {
  if (BigInt.asUintN(64, self.mantissa) === BigInt.asUintN(64, 0n)) {
    return self.negative ? -0 : 0;
  }
  if (self.many_digits || (BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 18446744073709551594n) || (BigInt.asIntN(64, self.exponent) > BigInt.asIntN(64, 37n) || BigInt.asUintN(64, self.mantissa) > BigInt.asUintN(64, 9007199254740992n)))) {
    return _M0FPC16double14not__a__number;
  }
  let value;
  if (BigInt.asIntN(64, self.exponent) <= BigInt.asIntN(64, 22n)) {
    const value$2 = $f64_convert_i64_u(BigInt.asUintN(64, self.mantissa));
    value = BigInt.asIntN(64, self.exponent) < BigInt.asIntN(64, 0n) ? value$2 / _M0FPC14json23json__pow10__fast__path(-(Number(BigInt.asIntN(32, self.exponent)) | 0) | 0) : value$2 * _M0FPC14json23json__pow10__fast__path(Number(BigInt.asIntN(32, self.exponent)) | 0);
  } else {
    const shift = BigInt.asUintN(64, self.exponent - 22n);
    const _bind$4 = _M0FPC14json12checked__mul(self.mantissa, _M0MPC15array13ReadOnlyArray2atGmE(_M0FPC14json17int__pow10__table, Number(BigInt.asIntN(32, shift)) | 0));
    if (_bind$4 === undefined) {
      return _M0FPC16double14not__a__number;
    } else {
      const _Some = _bind$4;
      const _mantissa = _Some;
      if (BigInt.asUintN(64, _mantissa) > BigInt.asUintN(64, 9007199254740992n)) {
        return _M0FPC16double14not__a__number;
      }
      value = $f64_convert_i64_u(BigInt.asUintN(64, _mantissa)) * _M0FPC14json23json__pow10__fast__path(22);
    }
  }
  return self.negative ? -value : value;
}
function _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end) {
  const _bind$4 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$4.str.charCodeAt(_bind$4.start + start | 0), 45);
  const number_start = negative ? start + 1 | 0 : start;
  let _tmp$2 = number_start;
  let _tmp$3 = 0n;
  while (true) {
    const i = _tmp$2;
    const acc = _tmp$3;
    if (i >= end) {
      const value = negative ? BigInt.asUintN(64, -acc) : acc;
      const _bind$5 = $f64_convert_i64(BigInt.asIntN(64, value));
      const _bind$6 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$6, _bind$5);
    }
    const _bind$5 = ctx.input;
    const digit = BigInt.asUintN(64, BigInt(_bind$5.str.charCodeAt(_bind$5.start + i | 0) - 48 | 0));
    if (10n === 0n) {
      $panic();
    }
    if (BigInt.asIntN(64, acc) > BigInt.asIntN(64, BigInt.asUintN(64, BigInt.asIntN(64, BigInt.asUintN(64, 9007199254740991n - digit)) / BigInt.asIntN(64, 10n)))) {
      const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
      let _try_err;
      _L: {
        const _bind$6 = _M0FPC28internal7strconv13parse__double(s);
        let value;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          value = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        const _bind$7 = s;
        return new _M0TPC14json11LexedNumber(_bind$7, value);
      }
      let _tmp$4;
      if (negative) {
        const _bind$6 = s;
        _tmp$4 = new _M0TPC14json11LexedNumber(_bind$6, _M0FPC16double13neg__infinity);
      } else {
        const _bind$6 = s;
        _tmp$4 = new _M0TPC14json11LexedNumber(_bind$6, _M0FPC16double8infinity);
      }
      return _tmp$4;
    }
    _tmp$2 = i + 1 | 0;
    _tmp$3 = BigInt.asUintN(64, BigInt.asUintN(64, acc * 10n) + digit);
    continue;
  }
}
function _M0MPC14json12ParseContext18scan__json__number(ctx, start, end) {
  const _bind$4 = ctx.input;
  const negative = _M0IPC16uint166UInt16PB2Eq5equal(_bind$4.str.charCodeAt(_bind$4.start + start | 0), 45);
  let has_decimal = false;
  let has_exponent = false;
  let exponent_negative = false;
  let exponent_part = 0n;
  let fractional_digits = 0;
  let mantissa = 0n;
  let significant_digits = 0;
  let seen_nonzero = false;
  const _bind$5 = negative ? start + 1 | 0 : start;
  let _tmp$2 = _bind$5;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      _L: {
        _L$2: {
          const _bind$6 = ctx.input;
          const _bind$7 = _bind$6.str.charCodeAt(_bind$6.start + i | 0);
          if (_bind$7 >= 48 && _bind$7 <= 57) {
            const digit = _bind$7 - 48 | 0;
            if (has_exponent) {
              if (BigInt.asIntN(64, exponent_part) < BigInt.asIntN(64, 100000n)) {
                const next_exponent = BigInt.asUintN(64, BigInt.asUintN(64, exponent_part * 10n) + BigInt.asUintN(64, BigInt(digit)));
                exponent_part = BigInt.asIntN(64, next_exponent) > BigInt.asIntN(64, 100000n) ? 100000n : next_exponent;
              }
            } else {
              if (has_decimal) {
                fractional_digits = fractional_digits + 1 | 0;
              }
              if (digit !== 0 || seen_nonzero) {
                seen_nonzero = true;
                significant_digits = significant_digits + 1 | 0;
                if (significant_digits <= 19) {
                  mantissa = BigInt.asUintN(64, BigInt.asUintN(64, mantissa * 10n) + BigInt.asUintN(64, BigInt(digit >>> 0)));
                }
              }
            }
          } else {
            if (_bind$7 === 46) {
              has_decimal = true;
            } else {
              if (_bind$7 === 101) {
                break _L$2;
              } else {
                if (_bind$7 === 69) {
                  break _L$2;
                }
              }
            }
          }
          break _L;
        }
        has_exponent = true;
        if ((i + 1 | 0) < end) {
          const _bind$6 = ctx.input;
          const next = _bind$6.str.charCodeAt(_bind$6.start + (i + 1 | 0) | 0);
          if (_M0IPC16uint166UInt16PB2Eq5equal(next, 45)) {
            exponent_negative = true;
          }
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const exponent_part$2 = exponent_negative ? BigInt.asUintN(64, -exponent_part) : exponent_part;
  return new _M0TPC14json14JsonNumberScan(negative, !has_decimal && !has_exponent, mantissa, BigInt.asUintN(64, exponent_part$2 - BigInt.asUintN(64, BigInt(fractional_digits))), significant_digits > 19);
}
function _M0MPC14json12ParseContext16lex__number__end(ctx, start, end) {
  const scan = _M0MPC14json12ParseContext18scan__json__number(ctx, start, end);
  if (scan.is_integer) {
    if (!scan.many_digits && (BigInt.asUintN(64, scan.exponent) === BigInt.asUintN(64, 0n) && BigInt.asUintN(64, scan.mantissa) <= BigInt.asUintN(64, 9007199254740991n))) {
      const v = $f64_convert_i64(BigInt.asIntN(64, scan.mantissa));
      const value = scan.negative ? -v : v;
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, value);
    }
    return _M0MPC14json12ParseContext17lex__integer__end(ctx, start, end);
  }
  const fast = _M0MPC14json14JsonNumberScan17try__fast__double(scan);
  if (!_M0MPC16double6Double7is__nan(fast)) {
    const _bind$4 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$4, fast);
  }
  if (!scan.many_digits) {
    const fast$2 = _M0FPC28internal7strconv20try__eisel__lemire64(scan.mantissa, scan.exponent, scan.negative);
    if (!_M0MPC16double6Double7is__nan(fast$2)) {
      const _bind$4 = undefined;
      return new _M0TPC14json11LexedNumber(_bind$4, fast$2);
    }
  }
  const s = _M0MPC16string10StringView12view_2einner(ctx.input, start, end);
  let _try_err;
  _L: {
    const _bind$4 = _M0FPC28internal7strconv13parse__double(s);
    let d;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      d = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    const _bind$5 = undefined;
    return new _M0TPC14json11LexedNumber(_bind$5, d);
  }
  if (scan.negative) {
    const _bind$4 = s;
    return new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double13neg__infinity);
  } else {
    const _bind$4 = s;
    return new _M0TPC14json11LexedNumber(_bind$4, _M0FPC16double8infinity);
  }
}
function _M0MPC14json12ParseContext10read__char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _bind$4 = ctx.input;
    const c1 = _bind$4.str.charCodeAt(_bind$4.start + ctx.offset | 0);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _bind$5 = ctx.input;
        const c2 = _bind$5.str.charCodeAt(_bind$5.start + ctx.offset | 0);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function _M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start) {
  while (true) {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x >= 48 && _x <= 57) {
        continue;
      } else {
        ctx.offset = ctx.offset - 1 | 0;
        return _M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset);
      }
    }
  }
}
function _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start) {
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x >= 48 && _x <= 57) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
    } else {
      ctx.offset = ctx.offset - 1 | 0;
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
    }
  }
}
function _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start) {
  _L: {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x === 43) {
        break _L;
      } else {
        if (_x === 45) {
          break _L;
        } else {
          if (_x >= 48 && _x <= 57) {
            return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext31lex__decimal__exponent__integer(ctx, start));
          } else {
            ctx.offset = ctx.offset - 1 | 0;
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
          }
        }
      }
    }
  }
  const _bind$4 = _M0MPC14json12ParseContext28lex__decimal__exponent__sign(ctx, start);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) {
  while (true) {
    _L: {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              continue;
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
    const _bind$4 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$2 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
  }
}
function _M0MPC14json12ParseContext19lex__decimal__point(ctx, start) {
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    return _x >= 48 && _x <= 57 ? _M0MPC14json12ParseContext22lex__decimal__fraction(ctx, start) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
  }
}
function _M0MPC14json12ParseContext21lex__decimal__integer(ctx, start) {
  while (true) {
    _L: {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x === 46) {
          const _bind$5 = _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
          let _tmp$2;
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _tmp$2 = _ok._0;
          } else {
            return _bind$5;
          }
          return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
        } else {
          if (_x === 101) {
            break _L;
          } else {
            if (_x === 69) {
              break _L;
            } else {
              if (_x >= 48 && _x <= 57) {
                continue;
              } else {
                ctx.offset = ctx.offset - 1 | 0;
                return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
              }
            }
          }
        }
      }
    }
    const _bind$4 = _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
    let _tmp$2;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$2 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_tmp$2);
  }
}
function _M0MPC14json12ParseContext16lex__hex__digits(ctx, n) {
  let _tmp$2;
  let _tmp$3 = 0;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$3;
    const r = _tmp$4;
    if (_ < n) {
      const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
      let d;
      if (_bind$4 === -1) {
        return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
      } else {
        const _Some = _bind$4;
        const _x = _Some;
        if (_x >= 48 && _x <= 57) {
          d = _x - 48 | 0;
        } else {
          if (_x >= 65 && _x <= 70) {
            d = (_x - 65 | 0) + 10 | 0;
          } else {
            if (_x >= 97 && _x <= 102) {
              d = (_x - 97 | 0) + 10 | 0;
            } else {
              const _bind$5 = _M0MPC14json12ParseContext21invalid__char_2einnerGiE(ctx, -_M0MPC14char4Char10utf16__len(_x) | 0);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                d = _ok._0;
              } else {
                return _bind$5;
              }
            }
          }
        }
      }
      _tmp$3 = _ + 1 | 0;
      _tmp$4 = r << 4 | d;
      continue;
    } else {
      _tmp$2 = r;
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start) {
  return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, escape_start - ctx.offset | 0);
}
function _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, end) {
  const ctx = _env._2;
  const start = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    _M0IPB13StringBuilderPB6Logger11write__view(buf, _M0MPC16string10StringView21clamped__view_2einner(ctx.input, start.val, end));
    return;
  } else {
    return;
  }
}
function _M0MPC14json12ParseContext17lex__string__slow(ctx) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const start = new _M0TPB8MutLocalGiE(ctx.offset);
  const _env = { _0: buf, _1: start, _2: ctx };
  _L: while (true) {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      switch (_x) {
        case 34: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          break _L;
        }
        case 92: {
          _M0MPC14json12ParseContext17lex__string__slowN5flushS353(_env, ctx.offset - 1 | 0);
          const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
          if (_bind$5 === -1) {
            return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
          } else {
            const _Some$2 = _bind$5;
            const _x$2 = _Some$2;
            switch (_x$2) {
              case 98: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 8);
                break;
              }
              case 102: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 12);
                break;
              }
              case 110: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 10);
                break;
              }
              case 114: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 13);
                break;
              }
              case 116: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 9);
                break;
              }
              case 34: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
                break;
              }
              case 92: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 92);
                break;
              }
              case 47: {
                _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
                break;
              }
              case 117: {
                const escape_start = ctx.offset - 2 | 0;
                const _bind$6 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                let c;
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  c = _ok._0;
                } else {
                  return _bind$6;
                }
                if (c >= 55296 && c <= 56319) {
                  const _bind$7 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$7 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$7;
                    const _x$3 = _Some$3;
                    if (_x$3 === 92) {
                    } else {
                      const _bind$8 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$8.$tag === 1) {
                        const _ok = _bind$8;
                        _ok._0;
                      } else {
                        return _bind$8;
                      }
                    }
                  }
                  const _bind$8 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$8 === -1) {
                    return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$3 = _bind$8;
                    const _x$3 = _Some$3;
                    if (_x$3 === 117) {
                    } else {
                      const _bind$9 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                      if (_bind$9.$tag === 1) {
                        const _ok = _bind$9;
                        _ok._0;
                      } else {
                        return _bind$9;
                      }
                    }
                  }
                  const _bind$9 = _M0MPC14json12ParseContext16lex__hex__digits(ctx, 4);
                  let c2;
                  if (_bind$9.$tag === 1) {
                    const _ok = _bind$9;
                    c2 = _ok._0;
                  } else {
                    return _bind$9;
                  }
                  if (c2 >= 56320 && c2 <= 57343) {
                    const combined = ((c << 10) + c2 | 0) - 56613888 | 0;
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, combined);
                  } else {
                    const _bind$10 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$10.$tag === 1) {
                      const _ok = _bind$10;
                      _ok._0;
                    } else {
                      return _bind$10;
                    }
                  }
                } else {
                  if (c >= 56320 && c <= 57343) {
                    const _bind$7 = _M0MPC14json12ParseContext19unpaired__surrogateGuE(ctx, escape_start);
                    if (_bind$7.$tag === 1) {
                      const _ok = _bind$7;
                      _ok._0;
                    } else {
                      return _bind$7;
                    }
                  } else {
                    _M0IPB13StringBuilderPB6Logger11write__char(buf, c);
                  }
                }
                break;
              }
              default: {
                const _bind$7 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -_M0MPC14char4Char10utf16__len(_x$2) | 0);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
              }
            }
          }
          start.val = ctx.offset;
          break;
        }
        default: {
          if (_x < 32) {
            const _bind$6 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          } else {
            continue _L;
          }
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPB13StringBuilder10to__string(buf));
}
function _M0MPC14json12ParseContext11lex__string(ctx) {
  const string_start = ctx.offset;
  const _bind$4 = ctx.end_offset;
  let _tmp$2 = string_start;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const _bind$5 = ctx.input;
      const c = _bind$5.str.charCodeAt(_bind$5.start + i | 0);
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34)) {
        ctx.offset = i + 1 | 0;
        const base = _M0MPC16string10StringView13start__offset(ctx.input);
        return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_M0MPC16string10StringView4data(ctx.input).substring(base + string_start | 0, base + i | 0));
      } else {
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 92)) {
          const _bind$6 = _M0MPC14json12ParseContext17lex__string__slow(ctx);
          let _tmp$3;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$3 = _ok._0;
          } else {
            return _bind$6;
          }
          return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE2Ok(_tmp$3);
        } else {
          if (c < 32) {
            ctx.offset = i + 1 | 0;
            const _bind$6 = _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
          }
        }
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGsRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
}
function _M0MPC14json12ParseContext9lex__zero(ctx, start) {
  _L: {
    const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
    if (_bind$4 === -1) {
      return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      if (_x === 46) {
        return _M0MPC14json12ParseContext19lex__decimal__point(ctx, start);
      } else {
        if (_x === 101) {
          break _L;
        } else {
          if (_x === 69) {
            break _L;
          } else {
            if (_x >= 48 && _x <= 57) {
              ctx.offset = ctx.offset - 1 | 0;
              return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
            } else {
              ctx.offset = ctx.offset - 1 | 0;
              return new _M0DTPC16result6ResultGRPC14json11LexedNumberRPC14json10ParseErrorE2Ok(_M0MPC14json12ParseContext16lex__number__end(ctx, start, ctx.offset));
            }
          }
        }
      }
    }
  }
  return _M0MPC14json12ParseContext22lex__decimal__exponent(ctx, start);
}
function _M0MPC14json12ParseContext10lex__value(ctx, allow_rbracket) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 123) {
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6LBrace__);
    } else {
      if (_x === 91) {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8LBracket__);
      } else {
        if (_x === 93) {
          if (allow_rbracket) {
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
          } else {
            return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
          }
        } else {
          if (_x === 110) {
            const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
            if (_bind$5.$tag === 1) {
              const _ok = _bind$5;
              _ok._0;
            } else {
              return _bind$5;
            }
            const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _ok._0;
            } else {
              return _bind$6;
            }
            const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _ok._0;
            } else {
              return _bind$7;
            }
            return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4Null__);
          } else {
            if (_x === 116) {
              const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 114);
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _ok._0;
              } else {
                return _bind$5;
              }
              const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 117);
              if (_bind$6.$tag === 1) {
                const _ok = _bind$6;
                _ok._0;
              } else {
                return _bind$6;
              }
              const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
              if (_bind$7.$tag === 1) {
                const _ok = _bind$7;
                _ok._0;
              } else {
                return _bind$7;
              }
              return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token4True__);
            } else {
              if (_x === 102) {
                const _bind$5 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 97);
                if (_bind$5.$tag === 1) {
                  const _ok = _bind$5;
                  _ok._0;
                } else {
                  return _bind$5;
                }
                const _bind$6 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 108);
                if (_bind$6.$tag === 1) {
                  const _ok = _bind$6;
                  _ok._0;
                } else {
                  return _bind$6;
                }
                const _bind$7 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 115);
                if (_bind$7.$tag === 1) {
                  const _ok = _bind$7;
                  _ok._0;
                } else {
                  return _bind$7;
                }
                const _bind$8 = _M0MPC14json12ParseContext19expect__ascii__char(ctx, 101);
                if (_bind$8.$tag === 1) {
                  const _ok = _bind$8;
                  _ok._0;
                } else {
                  return _bind$8;
                }
                return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5False__);
              } else {
                if (_x === 45) {
                  const _bind$5 = _M0MPC14json12ParseContext10read__char(ctx);
                  if (_bind$5 === -1) {
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
                  } else {
                    const _Some$2 = _bind$5;
                    const _x$2 = _Some$2;
                    if (_x$2 === 48) {
                      const _bind$6 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 2 | 0);
                      let _bind$7;
                      if (_bind$6.$tag === 1) {
                        const _ok = _bind$6;
                        _bind$7 = _ok._0;
                      } else {
                        return _bind$6;
                      }
                      const _n = _bind$7.value;
                      const _repr = _bind$7.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x$2 >= 49 && _x$2 <= 57) {
                        const _bind$6 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 2 | 0);
                        let _bind$7;
                        if (_bind$6.$tag === 1) {
                          const _ok = _bind$6;
                          _bind$7 = _ok._0;
                        } else {
                          return _bind$6;
                        }
                        const _n = _bind$7.value;
                        const _repr = _bind$7.repr;
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                      } else {
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
                      }
                    }
                  }
                } else {
                  if (_x === 48) {
                    const _bind$5 = _M0MPC14json12ParseContext9lex__zero(ctx, ctx.offset - 1 | 0);
                    let _bind$6;
                    if (_bind$5.$tag === 1) {
                      const _ok = _bind$5;
                      _bind$6 = _ok._0;
                    } else {
                      return _bind$5;
                    }
                    const _n = _bind$6.value;
                    const _repr = _bind$6.repr;
                    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                  } else {
                    if (_x >= 49 && _x <= 57) {
                      const _bind$5 = _M0MPC14json12ParseContext21lex__decimal__integer(ctx, ctx.offset - 1 | 0);
                      let _bind$6;
                      if (_bind$5.$tag === 1) {
                        const _ok = _bind$5;
                        _bind$6 = _ok._0;
                      } else {
                        return _bind$5;
                      }
                      const _n = _bind$6.value;
                      const _repr = _bind$6.repr;
                      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6Number(_n, _M0MPC16option6Option3mapGRPC16string10StringViewsE(_repr, (repr) => _M0MPC16string10StringView9to__owned(repr))));
                    } else {
                      if (_x === 34) {
                        const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
                        let s;
                        if (_bind$5.$tag === 1) {
                          const _ok = _bind$5;
                          s = _ok._0;
                        } else {
                          return _bind$5;
                        }
                        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
                      } else {
                        const shift = -_M0MPC14char4Char10utf16__len(_x) | 0;
                        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, shift);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function _M0MPC14json12ParseContext24lex__after__array__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token8RBracket__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext25lex__after__object__value(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 44: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token5Comma__);
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext26lex__after__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 58) {
      return new _M0DTPC16result6ResultGuRPC14json10ParseErrorE2Ok(undefined);
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGuE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext19lex__property__name(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(_M0DTPC14json5Token6RBrace__);
      }
      case 34: {
        const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
        let s;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          s = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
      }
      default: {
        return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
      }
    }
  }
}
function _M0MPC14json12ParseContext20lex__property__name2(ctx) {
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  const _bind$4 = _M0MPC14json12ParseContext10read__char(ctx);
  if (_bind$4 === -1) {
    return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE3Err(_M0DTPC15error5Error51moonbitlang_2fcore_2fjson_2eParseError_2eInvalidEof__);
  } else {
    const _Some = _bind$4;
    const _x = _Some;
    if (_x === 34) {
      const _bind$5 = _M0MPC14json12ParseContext11lex__string(ctx);
      let s;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        s = _ok._0;
      } else {
        return _bind$5;
      }
      return new _M0DTPC16result6ResultGRPC14json5TokenRPC14json10ParseErrorE2Ok(new _M0DTPC14json5Token6String(s));
    } else {
      return _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, -1);
    }
  }
}
function _M0MPC14json12ParseContext12parse__value(ctx, remaining_available_depth) {
  const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, false);
  let tok;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    tok = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth);
}
function _M0MPC14json12ParseContext13parse__value2(ctx, tok, remaining_available_depth) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPB4null);
      }
      case 1: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(true));
      }
      case 2: {
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json7boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0MPC14json4Json6string(_s));
      }
      case 5: {
        return _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth);
      }
      case 7: {
        return _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_M0FPC15abort5abortGRPC16string10StringViewE("unreachable"));
}
function _M0MPC14json12ParseContext12parse__array(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const vec = [];
  let _tmp$2;
  const _bind$4 = _M0MPC14json12ParseContext10lex__value(ctx, true);
  let _tmp$3;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$3 = _ok._0;
  } else {
    return _bind$4;
  }
  let _tmp$4 = _tmp$3;
  _L: while (true) {
    const x = _tmp$4;
    if (x.$tag === 8) {
      _tmp$2 = _M0MPC14json4Json5array(vec);
      break;
    } else {
      const _bind$5 = _M0MPC14json12ParseContext13parse__value2(ctx, x, child_remaining_available_depth);
      let _tmp$5;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$5 = _ok._0;
      } else {
        return _bind$5;
      }
      _M0MPC15array5Array4pushGsE(vec, _tmp$5);
      const _bind$6 = _M0MPC14json12ParseContext24lex__after__array__value(ctx);
      let tok2;
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        tok2 = _ok._0;
      } else {
        return _bind$6;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$7 = _M0MPC14json12ParseContext10lex__value(ctx, false);
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp$4 = _ok._0;
          } else {
            return _bind$7;
          }
          continue _L;
        }
        case 8: {
          _tmp$2 = _M0MPC14json4Json5array(vec);
          break _L;
        }
        default: {
          _M0FPC15abort5abortGuE("unreachable");
        }
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0MPC14json12ParseContext13parse__object(ctx, remaining_available_depth) {
  if (remaining_available_depth <= 0) {
    return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE3Err(_M0DTPC15error5Error59moonbitlang_2fcore_2fjson_2eParseError_2eDepthLimitExceeded__);
  }
  const child_remaining_available_depth = remaining_available_depth - 1 | 0;
  const _bind$4 = [];
  const map = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 0), undefined);
  let _tmp$2;
  const _bind$5 = _M0MPC14json12ParseContext19lex__property__name(ctx);
  let _tmp$3;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$3 = _ok._0;
  } else {
    return _bind$5;
  }
  let _tmp$4 = _tmp$3;
  _L: while (true) {
    const x = _tmp$4;
    switch (x.$tag) {
      case 6: {
        _tmp$2 = _M0MPC14json4Json6object(map);
        break _L;
      }
      case 4: {
        const _String = x;
        const _name = _String._0;
        const _bind$6 = _M0MPC14json12ParseContext26lex__after__property__name(ctx);
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
        const _bind$7 = _M0MPC14json12ParseContext12parse__value(ctx, child_remaining_available_depth);
        let _tmp$5;
        if (_bind$7.$tag === 1) {
          const _ok = _bind$7;
          _tmp$5 = _ok._0;
        } else {
          return _bind$7;
        }
        _M0MPB3Map3setGsRPB4JsonE(map, _name, _tmp$5);
        const _bind$8 = _M0MPC14json12ParseContext25lex__after__object__value(ctx);
        let _bind$9;
        if (_bind$8.$tag === 1) {
          const _ok = _bind$8;
          _bind$9 = _ok._0;
        } else {
          return _bind$8;
        }
        switch (_bind$9.$tag) {
          case 9: {
            const _bind$10 = _M0MPC14json12ParseContext20lex__property__name2(ctx);
            if (_bind$10.$tag === 1) {
              const _ok = _bind$10;
              _tmp$4 = _ok._0;
            } else {
              return _bind$10;
            }
            continue _L;
          }
          case 6: {
            _tmp$2 = _M0MPC14json4Json6object(map);
            break _L;
          }
          default: {
            _M0FPC15abort5abortGuE("unreachable");
          }
        }
        break;
      }
      default: {
        _M0FPC15abort5abortGuE("unreachable");
      }
    }
    continue;
  }
  return new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(_tmp$2);
}
function _M0FPC14json13parse_2einner(input, max_nesting_depth) {
  const ctx = _M0MPC14json12ParseContext4make(input);
  const _bind$4 = _M0MPC14json12ParseContext12parse__value(ctx, max_nesting_depth);
  let val;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    val = _ok._0;
  } else {
    return _bind$4;
  }
  _M0MPC14json12ParseContext21lex__skip__whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new _M0DTPC16result6ResultGRPB4JsonRPC14json10ParseErrorE2Ok(val) : _M0MPC14json12ParseContext21invalid__char_2einnerGRPB4JsonE(ctx, 0);
}
function _M0FPC14json20need__escape__scalar(str, escape_slash, start, end) {
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < end) {
      const code = str.charCodeAt(i);
      if (_M0IPC16uint166UInt16PB2Eq5equal(code, 34) || (_M0IPC16uint166UInt16PB2Eq5equal(code, 92) || (code < 32 || escape_slash && _M0IPC16uint166UInt16PB2Eq5equal(code, 47)))) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPC14json12need__escape(str, escape_slash) {
  return _M0FPC14json20need__escape__scalar(str, escape_slash, 0, str.length);
}
function _M0FPC14json14write__escaped(buf, str, escape_slash) {
  if (!_M0FPC14json12need__escape(str, escape_slash)) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
    return undefined;
  }
  const _bind$4 = str.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const code = str.charCodeAt(_);
      switch (code) {
        case 34: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\"");
          break;
        }
        case 92: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\\\");
          break;
        }
        case 47: {
          if (escape_slash) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\/");
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 47);
          }
          break;
        }
        case 10: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\n");
          break;
        }
        case 13: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\r");
          break;
        }
        case 8: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\b");
          break;
        }
        case 9: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\t");
          break;
        }
        case 12: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\f");
          break;
        }
        default: {
          if (code < 32) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "\\u00");
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC14byte4Byte7to__hex(code & 255));
          } else {
            _M0IPB13StringBuilderPB6Logger11write__char(buf, _M0MPC16uint166UInt1616unsafe__to__char(code));
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPC14json13write__indent(buf, cache, level, indent) {
  while (true) {
    if (cache.length <= level) {
      if (cache.length >= 1) {
        const _last = cache[cache.length - 1 | 0];
        _M0MPC15array5Array4pushGsE(cache, `${_last}${_M0MPC16string6String6repeat(" ", indent)}`);
      } else {
        _M0MPC15array5Array4pushGsE(cache, "\n");
      }
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _M0MPC15array5Array2atGsE(cache, level));
}
function _M0MPC14json4Json17stringify_2einner(self, escape_slash, indent, replacer) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const indent_cache = [];
  const stack = [];
  let depth = 0;
  let _tmp$2 = self;
  while (true) {
    const x = _tmp$2;
    if (x === undefined) {
      if (stack.length === 0) {
        break;
      } else {
        const _x = stack[stack.length - 1 | 0];
        if (_x.$tag === 0) {
          const _Array = _x;
          const _arr = _Array._0;
          const _i = _Array._1;
          if (_i < _arr.length) {
            const element = _M0MPC15array5Array2atGsE(_arr, _i);
            _Array._1 = _i + 1 | 0;
            if (_i > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _tmp$2 = element;
            continue;
          } else {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 93);
            _tmp$2 = undefined;
            continue;
          }
        } else {
          const _Object = _x;
          const _iterator = _Object._0;
          const _first = _Object._1;
          const _bind$4 = _M0MPB4Iter4nextGUsRPB4JsonEE(_iterator);
          if (_bind$4 === undefined) {
            depth = depth - 1 | 0;
            _M0MPC15array5Array3popGRPC14json10WriteFrameE(stack);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 125);
            _tmp$2 = undefined;
            continue;
          } else {
            const _Some = _bind$4;
            const _x$2 = _Some;
            const _k = _x$2._0;
            const _v = _x$2._1;
            let v2 = _v;
            if (replacer === undefined) {
            } else {
              const _Some$2 = replacer;
              const _replacer = _Some$2;
              const _func = _replacer.f;
              const _bind$5 = _func(_k, _v);
              if (_bind$5 === undefined) {
                _tmp$2 = undefined;
                continue;
              } else {
                const _Some$3 = _bind$5;
                const _v$2 = _Some$3;
                v2 = _v$2;
              }
            }
            if (!_first) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 44);
              if (indent > 0) {
                _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
              }
            }
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0FPC14json14write__escaped(buf, _k, escape_slash);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 58);
            if (indent > 0) {
              _M0IPB13StringBuilderPB6Logger11write__char(buf, 32);
            }
            _Object._1 = false;
            _tmp$2 = v2;
            continue;
          }
        }
      }
    } else {
      const _Some = x;
      const _value = _Some;
      switch (_value.$tag) {
        case 6: {
          const _Object = _value;
          const _members = _Object._0;
          if (_M0MPB3Map9is__emptyGsRPB4JsonE(_members)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "{}");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 123);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGsE(stack, new _M0DTPC14json10WriteFrame6Object(_M0MPB3Map4iterGsRPB4JsonE(_members), true));
          }
          break;
        }
        case 5: {
          const _Array = _value;
          const _arr = _Array._0;
          if (_M0MPC15array5Array9is__emptyGRPB4JsonE(_arr)) {
            _M0IPB13StringBuilderPB6Logger13write__string(buf, "[]");
          } else {
            depth = depth + 1 | 0;
            _M0IPB13StringBuilderPB6Logger11write__char(buf, 91);
            if (indent > 0) {
              _M0FPC14json13write__indent(buf, indent_cache, depth, indent);
            }
            _M0MPC15array5Array4pushGsE(stack, new _M0DTPC14json10WriteFrame5Array(_arr, 0));
          }
          break;
        }
        case 4: {
          const _String = _value;
          const _s = _String._0;
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          _M0FPC14json14write__escaped(buf, _s, escape_slash);
          _M0IPB13StringBuilderPB6Logger11write__char(buf, 34);
          break;
        }
        case 3: {
          const _Number = _value;
          const _n = _Number._0;
          const _repr = _Number._1;
          if (_repr === undefined) {
            _M0MPB13StringBuilder13write__objectGdE(buf, _n);
          } else {
            const _Some$2 = _repr;
            const _r = _Some$2;
            _M0IPB13StringBuilderPB6Logger13write__string(buf, _r);
          }
          break;
        }
        case 1: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "true");
          break;
        }
        case 2: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "false");
          break;
        }
        default: {
          _M0IPB13StringBuilderPB6Logger13write__string(buf, "null");
        }
      }
      _tmp$2 = undefined;
      continue;
    }
  }
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FP311moonbitlang1x7unicode21utf16__pair__to__char(hi, lo) {
  return _M0MPC13int3Int22is__leading__surrogate(hi) && _M0MPC13int3Int23is__trailing__surrogate(lo) ? ((hi << 10) + lo | 0) - 56613888 | 0 : -1;
}
function _M0FP311moonbitlang1x7unicode15to__utf8__bytes(s) {
  const res = [];
  const len = s.length;
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < len) {
      const _tmp$2 = i.val;
      const c = new _M0TPB8MutLocalGiE(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob());
      if (_M0MPC13int3Int22is__leading__surrogate(c.val)) {
        i.val = i.val + 1 | 0;
        const _tmp$3 = i.val;
        const l = _tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob();
        c.val = _M0MPC16option6Option6unwrapGcE(_M0FP311moonbitlang1x7unicode21utf16__pair__to__char(c.val, l));
      }
      if (c.val < 128) {
        _M0MPC15array5Array4pushGyE(res, c.val & 255);
      } else {
        if (c.val < 2048) {
          _M0MPC15array5Array4pushGyE(res, (192 + (c.val >> 6) | 0) & 255);
          _M0MPC15array5Array4pushGyE(res, (128 + (c.val & 63) | 0) & 255);
        } else {
          if (c.val < 65536) {
            _M0MPC15array5Array4pushGyE(res, (224 + (c.val >> 12) | 0) & 255);
            _M0MPC15array5Array4pushGyE(res, (128 + (c.val >> 6 & 63) | 0) & 255);
            _M0MPC15array5Array4pushGyE(res, (128 + (c.val & 63) | 0) & 255);
          } else {
            _M0MPC15array5Array4pushGyE(res, (240 + (c.val >> 18) | 0) & 255);
            _M0MPC15array5Array4pushGyE(res, (128 + (c.val >> 12 & 63) | 0) & 255);
            _M0MPC15array5Array4pushGyE(res, (128 + (c.val >> 6 & 63) | 0) & 255);
            _M0MPC15array5Array4pushGyE(res, (128 + (c.val & 63) | 0) & 255);
          }
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15bytes5Bytes11from__array(new _M0TPB9ArrayViewGyE(res, 0, res.length));
}
function _M0FP311moonbitlang1x7unicode21char__to__utf16__pair(ch) {
  const c = ch;
  if (c > 65535) {
    const v = c - 65536 | 0;
    return { _0: 55296 + (v >> 10) | 0, _1: 56320 + (v & 1023) | 0 };
  } else {
    return undefined;
  }
}
function _M0FP311moonbitlang1x7unicode16to__utf8__string(bytes) {
  const res = [];
  const len = bytes.length;
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < len) {
      const _tmp$2 = i.val;
      const c = new _M0TPB8MutLocalGiE(_tmp$2 >>> 0 < bytes.length ? bytes[_tmp$2] : $oob());
      if (c.val < 128) {
        _M0MPC15array5Array4pushGcE(res, c.val);
        i.val = i.val + 1 | 0;
      } else {
        if (c.val < 224) {
          if ((i.val + 1 | 0) >= len) {
            break;
          }
          const _tmp$3 = (c.val & 31) << 6;
          const _tmp$4 = i.val + 1 | 0;
          c.val = _tmp$3 | (_tmp$4 >>> 0 < bytes.length ? bytes[_tmp$4] : $oob()) & 63;
          _M0MPC15array5Array4pushGcE(res, c.val);
          i.val = i.val + 2 | 0;
        } else {
          if (c.val < 240) {
            if ((i.val + 2 | 0) >= len) {
              break;
            }
            const _tmp$3 = (c.val & 15) << 12;
            const _tmp$4 = i.val + 1 | 0;
            const _tmp$5 = _tmp$3 | ((_tmp$4 >>> 0 < bytes.length ? bytes[_tmp$4] : $oob()) & 63) << 6;
            const _tmp$6 = i.val + 2 | 0;
            c.val = _tmp$5 | (_tmp$6 >>> 0 < bytes.length ? bytes[_tmp$6] : $oob()) & 63;
            _M0MPC15array5Array4pushGcE(res, c.val);
            i.val = i.val + 3 | 0;
          } else {
            if ((i.val + 3 | 0) >= len) {
              break;
            }
            const _tmp$3 = (c.val & 7) << 18;
            const _tmp$4 = i.val + 1 | 0;
            const _tmp$5 = _tmp$3 | ((_tmp$4 >>> 0 < bytes.length ? bytes[_tmp$4] : $oob()) & 63) << 12;
            const _tmp$6 = i.val + 2 | 0;
            const _tmp$7 = _tmp$5 | ((_tmp$6 >>> 0 < bytes.length ? bytes[_tmp$6] : $oob()) & 63) << 6;
            const _tmp$8 = i.val + 3 | 0;
            c.val = _tmp$7 | (_tmp$8 >>> 0 < bytes.length ? bytes[_tmp$8] : $oob()) & 63;
            let hi;
            let lo;
            _L: {
              const _bind$4 = _M0FP311moonbitlang1x7unicode21char__to__utf16__pair(c.val);
              if (_bind$4 === undefined) {
                break;
              } else {
                const _Some = _bind$4;
                const _x = _Some;
                const _hi = _x._0;
                const _lo = _x._1;
                hi = _hi;
                lo = _lo;
                break _L;
              }
            }
            _M0MPC15array5Array4pushGcE(res, hi);
            _M0MPC15array5Array4pushGcE(res, lo);
            i.val = i.val + 4 | 0;
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  return _M0MPC16string6String11from__array(new _M0TPB9ArrayViewGcE(res, 0, res.length));
}
function _M0FP311moonbitlang1x2fs16read__file__sync(_tmp$2) {
  return readFileSync$6367(_tmp$2);
}
function _M0FP311moonbitlang1x2fs17write__file__sync(_tmp$2, _tmp$3) {
  return writeFileSync$6372(_tmp$2, _tmp$3);
}
function _M0FP311moonbitlang1x2fs31read__file__to__bytes__internal(path) {
  const res = _M0FP311moonbitlang1x2fs15read__file__ffi(_M0FP311moonbitlang1x2fs16read__file__sync, path);
  if (!_M0MP311moonbitlang1x2fs13FsBytesResult6is__ok(res)) {
    return new _M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE3Err(new _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(_M0MP311moonbitlang1x2fs13FsBytesResult14error__message(res)));
  }
  return new _M0DTPC16result6ResultGzRP311moonbitlang1x2fs7IOErrorE2Ok(_M0MP311moonbitlang1x2fs13FsBytesResult7content(res));
}
function _M0FP311moonbitlang1x2fs40read__file__to__string__internal_2einner(path, encoding) {
  if (encoding === "utf8") {
    const _bind$4 = _M0FP311moonbitlang1x2fs31read__file__to__bytes__internal(path);
    let bytes;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      bytes = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE2Ok(_M0FP311moonbitlang1x7unicode16to__utf8__string(bytes));
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(54);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unsupported encoding: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, encoding);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", only utf8 is supported for now");
    return new _M0DTPC16result6ResultGsRP311moonbitlang1x2fs7IOErrorE3Err(new _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(_M0MPB13StringBuilder10to__string(_string_builder)));
  }
}
function _M0FP311moonbitlang1x2fs32write__bytes__to__file__internal(path, content) {
  const res = _M0FP311moonbitlang1x2fs16write__file__ffi(_M0FP311moonbitlang1x2fs17write__file__sync, path, content);
  if (!_M0MP311moonbitlang1x2fs12FsUnitResult6is__ok(res)) {
    return new _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE3Err(new _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(_M0MP311moonbitlang1x2fs12FsUnitResult14error__message(res)));
  } else {
    return new _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE2Ok(undefined);
  }
}
function _M0FP311moonbitlang1x2fs41write__string__to__file__internal_2einner(path, content, encoding) {
  if (encoding === "utf8") {
    const bytes = _M0FP311moonbitlang1x7unicode15to__utf8__bytes(content);
    return _M0FP311moonbitlang1x2fs32write__bytes__to__file__internal(path, bytes);
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(54);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "Unsupported encoding: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, encoding);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ", only utf8 is supported for now");
    return new _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE3Err(new _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(_M0MPB13StringBuilder10to__string(_string_builder)));
  }
}
function _M0FP311moonbitlang1x2fs18remove__file__sync(_tmp$2) {
  return unlinkSync$6380(_tmp$2);
}
function _M0FP311moonbitlang1x2fs22remove__file__internal(path) {
  const res = _M0FP311moonbitlang1x2fs17remove__file__ffi(_M0FP311moonbitlang1x2fs18remove__file__sync, path);
  if (!_M0MP311moonbitlang1x2fs12FsUnitResult6is__ok(res)) {
    return new _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE3Err(new _M0DTPC15error5Error40moonbitlang_2fx_2ffs_2eIOError_2eIOError(_M0MP311moonbitlang1x2fs12FsUnitResult14error__message(res)));
  } else {
    return new _M0DTPC16result6ResultGuRP311moonbitlang1x2fs7IOErrorE2Ok(undefined);
  }
}
function _M0FP311moonbitlang1x2fs30read__file__to__string_2einner(path, encoding) {
  return _M0FP311moonbitlang1x2fs40read__file__to__string__internal_2einner(path, encoding);
}
function _M0FP311moonbitlang1x2fs31write__string__to__file_2einner(path, content, encoding) {
  return _M0FP311moonbitlang1x2fs41write__string__to__file__internal_2einner(path, content, encoding);
}
function _M0FP311moonbitlang1x2fs12remove__file(path) {
  return _M0FP311moonbitlang1x2fs22remove__file__internal(path);
}
function _M0IP25SDJM519moonbit_2ddataframe6SeriesPB2Eq5equal(_x_903, _x_904) {
  return _x_903.name === _x_904.name && _M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(_x_903.values, _x_904.values);
}
function _M0IP25SDJM519moonbit_2ddataframe6SeriesPC15debug5Debug8to__repr(_x_901) {
  const _bind$4 = [{ _0: "name", _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_x_901.name) }, { _0: "values", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe5ValueE(_x_901.values) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 2), undefined));
}
function _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPB2Eq5equal(_x_897, _x_898) {
  return _x_897.has_header === _x_898.has_header && _x_897.delimiter === _x_898.delimiter && _x_897.infer_types === _x_898.infer_types && _M0IPC15array5ArrayPB2Eq5equalGsE(_x_897.null_values, _x_898.null_values);
}
function _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPC15debug5Debug8to__repr(_x_895) {
  const _bind$4 = [{ _0: "has_header", _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_x_895.has_header) }, { _0: "delimiter", _1: _M0IPC14char4CharPC15debug5Debug8to__repr(_x_895.delimiter) }, { _0: "infer_types", _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_x_895.infer_types) }, { _0: "null_values", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGsE(_x_895.null_values) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 4), undefined));
}
function _M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(_x_875, _x_876) {
  let _x0_883;
  let _y0_884;
  _L: {
    let _x0_881;
    let _y0_882;
    _L$2: {
      let _x0_879;
      let _y0_880;
      _L$3: {
        let _x0_877;
        let _y0_878;
        _L$4: {
          switch (_x_875.$tag) {
            case 0: {
              if (_x_876.$tag === 0) {
                return true;
              } else {
                return false;
              }
            }
            case 1: {
              const _Int = _x_875;
              const _$42$x0_877 = _Int._0;
              if (_x_876.$tag === 1) {
                const _Int$2 = _x_876;
                const _$42$y0_878 = _Int$2._0;
                _x0_877 = _$42$x0_877;
                _y0_878 = _$42$y0_878;
                break _L$4;
              } else {
                return false;
              }
            }
            case 2: {
              const _Double = _x_875;
              const _$42$x0_879 = _Double._0;
              if (_x_876.$tag === 2) {
                const _Double$2 = _x_876;
                const _$42$y0_880 = _Double$2._0;
                _x0_879 = _$42$x0_879;
                _y0_880 = _$42$y0_880;
                break _L$3;
              } else {
                return false;
              }
            }
            case 3: {
              const _Bool = _x_875;
              const _$42$x0_881 = _Bool._0;
              if (_x_876.$tag === 3) {
                const _Bool$2 = _x_876;
                const _$42$y0_882 = _Bool$2._0;
                _x0_881 = _$42$x0_881;
                _y0_882 = _$42$y0_882;
                break _L$2;
              } else {
                return false;
              }
            }
            default: {
              const _Str = _x_875;
              const _$42$x0_883 = _Str._0;
              if (_x_876.$tag === 4) {
                const _Str$2 = _x_876;
                const _$42$y0_884 = _Str$2._0;
                _x0_883 = _$42$x0_883;
                _y0_884 = _$42$y0_884;
                break _L;
              } else {
                return false;
              }
            }
          }
        }
        return _x0_877 === _y0_878;
      }
      return _x0_879 === _y0_880;
    }
    return _x0_881 === _y0_882;
  }
  return _x0_883 === _y0_884;
}
function _M0IP25SDJM519moonbit_2ddataframe5ValuePC15debug5Debug8to__repr(_x_865) {
  let _arg_869;
  _L: {
    let _arg_868;
    _L$2: {
      let _arg_867;
      _L$3: {
        let _arg_866;
        _L$4: {
          switch (_x_865.$tag) {
            case 0: {
              return _M0MPC15debug4Repr4ctor("Null", []);
            }
            case 1: {
              const _Int = _x_865;
              const _$42$arg_866 = _Int._0;
              _arg_866 = _$42$arg_866;
              break _L$4;
            }
            case 2: {
              const _Double = _x_865;
              const _$42$arg_867 = _Double._0;
              _arg_867 = _$42$arg_867;
              break _L$3;
            }
            case 3: {
              const _Bool = _x_865;
              const _$42$arg_868 = _Bool._0;
              _arg_868 = _$42$arg_868;
              break _L$2;
            }
            default: {
              const _Str = _x_865;
              const _$42$arg_869 = _Str._0;
              _arg_869 = _$42$arg_869;
              break _L;
            }
          }
        }
        return _M0MPC15debug4Repr4ctor("Int", [{ _0: undefined, _1: _M0IPC13int3IntPC15debug5Debug8to__repr(_arg_866) }]);
      }
      return _M0MPC15debug4Repr4ctor("Double", [{ _0: undefined, _1: _M0IPC16double6DoublePC15debug5Debug8to__repr(_arg_867) }]);
    }
    return _M0MPC15debug4Repr4ctor("Bool", [{ _0: undefined, _1: _M0IPC14bool4BoolPC15debug5Debug8to__repr(_arg_868) }]);
  }
  return _M0MPC15debug4Repr4ctor("Str", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_869) }]);
}
function _M0IP25SDJM519moonbit_2ddataframe9DataFramePB2Eq5equal(_x_793, _x_794) {
  return _M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe6SeriesE(_x_793.columns, _x_794.columns);
}
function _M0IP25SDJM519moonbit_2ddataframe9DataFramePC15debug5Debug8to__repr(_x_791) {
  const _bind$4 = [{ _0: "columns", _1: _M0IPC15array5ArrayPC15debug5Debug8to__reprGRP25SDJM519moonbit_2ddataframe6SeriesE(_x_791.columns) }];
  return _M0MPC15debug4Repr6record(_M0MPB3Map3MapGsRPC15debug4ReprE(new _M0TPB9ArrayViewGUsRPC15debug4ReprEE(_bind$4, 0, 1), undefined));
}
function _M0IP25SDJM519moonbit_2ddataframe8DataTypePB2Eq5equal(_x_787, _x_788) {
  switch (_x_787) {
    case 0: {
      if (_x_788 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_788 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_788 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_788 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_788 === 4) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_788 === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0MP25SDJM519moonbit_2ddataframe5Value4null() {
  return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
}
function _M0MP25SDJM519moonbit_2ddataframe5Value3int(i) {
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(i);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value6double(d) {
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(d);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value7boolean(b) {
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(b);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value6string(s) {
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(s);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(self) {
  if (self.$tag === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0MP25SDJM519moonbit_2ddataframe5Value7as__int(self) {
  let i;
  _L: {
    if (self.$tag === 1) {
      const _Int = self;
      const _i = _Int._0;
      i = _i;
      break _L;
    } else {
      return undefined;
    }
  }
  return i;
}
function _M0MP25SDJM519moonbit_2ddataframe5Value10as__double(self) {
  let i;
  _L: {
    let d;
    _L$2: {
      switch (self.$tag) {
        case 2: {
          const _Double = self;
          const _d = _Double._0;
          d = _d;
          break _L$2;
        }
        case 1: {
          const _Int = self;
          const _i = _Int._0;
          i = _i;
          break _L;
        }
        default: {
          return _M0DTPC16option6OptionGdE4None__;
        }
      }
    }
    return new _M0DTPC16option6OptionGdE4Some(d);
  }
  return new _M0DTPC16option6OptionGdE4Some(i + 0);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value10as__string(self) {
  let s;
  _L: {
    if (self.$tag === 4) {
      const _Str = self;
      const _s = _Str._0;
      s = _s;
      break _L;
    } else {
      return undefined;
    }
  }
  return s;
}
function _M0MP25SDJM519moonbit_2ddataframe5Value4rank(self) {
  switch (self.$tag) {
    case 0: {
      return 0;
    }
    case 3: {
      return 1;
    }
    case 1: {
      return 2;
    }
    case 2: {
      return 2;
    }
    default: {
      return 3;
    }
  }
}
function _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(self, other) {
  _L: {
    let a;
    let b;
    _L$2: {
      const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe5Value10as__double(self);
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe5Value10as__double(other);
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        const _a = _Some._0;
        if (_bind$5.$tag === 1) {
          const _Some$2 = _bind$5;
          const _b = _Some$2._0;
          a = _a;
          b = _b;
          break _L$2;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  const r = $compare_int(_M0MP25SDJM519moonbit_2ddataframe5Value4rank(self), _M0MP25SDJM519moonbit_2ddataframe5Value4rank(other));
  if (r !== 0) {
    return r;
  } else {
    let a;
    let b;
    _L$2: {
      let a$2;
      let b$2;
      _L$3: {
        switch (self.$tag) {
          case 3: {
            const _Bool = self;
            const _a = _Bool._0;
            if (other.$tag === 3) {
              const _Bool$2 = other;
              const _b = _Bool$2._0;
              a$2 = _a;
              b$2 = _b;
              break _L$3;
            } else {
              return 0;
            }
          }
          case 4: {
            const _Str = self;
            const _a$2 = _Str._0;
            if (other.$tag === 4) {
              const _Str$2 = other;
              const _b = _Str$2._0;
              a = _a$2;
              b = _b;
              break _L$2;
            } else {
              return 0;
            }
          }
          case 0: {
            if (other.$tag === 0) {
              return 0;
            } else {
              return 0;
            }
          }
          default: {
            return 0;
          }
        }
      }
      return $compare_int(a$2, b$2);
    }
    return _M0IPC16string6StringPB7Compare7compare(a, b);
  }
}
function _M0IP25SDJM519moonbit_2ddataframe5ValuePB6ToJson8to__json(self) {
  let s;
  _L: {
    let b;
    _L$2: {
      let d;
      _L$3: {
        let i;
        _L$4: {
          switch (self.$tag) {
            case 0: {
              return _M0MPC14json4Json4null();
            }
            case 1: {
              const _Int = self;
              const _i = _Int._0;
              i = _i;
              break _L$4;
            }
            case 2: {
              const _Double = self;
              const _d = _Double._0;
              d = _d;
              break _L$3;
            }
            case 3: {
              const _Bool = self;
              const _b = _Bool._0;
              b = _b;
              break _L$2;
            }
            default: {
              const _Str = self;
              const _s = _Str._0;
              s = _s;
              break _L;
            }
          }
        }
        return _M0MPC14json4Json4JsonGiE(i);
      }
      return _M0MPC14json4Json4JsonGdE(d);
    }
    return _M0MPC14json4Json7boolean(b);
  }
  return _M0MPC14json4Json6string(s);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value8to__text(self) {
  let b;
  _L: {
    let d;
    _L$2: {
      let i;
      _L$3: {
        switch (self.$tag) {
          case 0: {
            return "";
          }
          case 1: {
            const _Int = self;
            const _i = _Int._0;
            i = _i;
            break _L$3;
          }
          case 2: {
            const _Double = self;
            const _d = _Double._0;
            d = _d;
            break _L$2;
          }
          case 3: {
            const _Bool = self;
            const _b = _Bool._0;
            b = _b;
            break _L;
          }
          default: {
            const _Str = self;
            const _s = _Str._0;
            return _s;
          }
        }
      }
      return _M0MPC13int3Int18to__string_2einner(i, 10);
    }
    return String(d);
  }
  return _M0IPC14bool4BoolPB4Show10to__string(b);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value9key__repr(self) {
  let s;
  _L: {
    let b;
    _L$2: {
      let d;
      _L$3: {
        let i;
        _L$4: {
          switch (self.$tag) {
            case 0: {
              return "n;";
            }
            case 1: {
              const _Int = self;
              const _i = _Int._0;
              i = _i;
              break _L$4;
            }
            case 2: {
              const _Double = self;
              const _d = _Double._0;
              d = _d;
              break _L$3;
            }
            case 3: {
              const _Bool = self;
              const _b = _Bool._0;
              b = _b;
              break _L$2;
            }
            default: {
              const _Str = self;
              const _s = _Str._0;
              s = _s;
              break _L;
            }
          }
        }
        return `i${_M0MPC13int3Int18to__string_2einner(i, 10)};`;
      }
      return `d${String(d)};`;
    }
    return `b${_M0IPC14bool4BoolPB4Show10to__string(b)};`;
  }
  return `s${_M0MPC13int3Int18to__string_2einner(s.length, 10)}:${s};`;
}
function _M0FP25SDJM519moonbit_2ddataframe15double__to__int(d) {
  if (_M0MPC16double6Double7is__nan(d) || _M0MPC16double6Double7is__inf(d)) {
    return undefined;
  }
  const truncated = _M0MPC16double6Double5trunc(d);
  if (truncated < -2147483648 || truncated > 2147483647) {
    return undefined;
  }
  return _M0MPC16double6Double7to__int(truncated);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value10from__json(j) {
  _L: {
    let s;
    _L$2: {
      let n;
      _L$3: {
        switch (j.$tag) {
          case 0: {
            return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          }
          case 1: {
            return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(true);
          }
          case 2: {
            return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(false);
          }
          case 3: {
            const _Number = j;
            const _n = _Number._0;
            n = _n;
            break _L$3;
          }
          case 4: {
            const _String = j;
            const _s = _String._0;
            s = _s;
            break _L$2;
          }
          case 5: {
            break _L;
          }
          default: {
            break _L;
          }
        }
      }
      let i;
      _L$4: {
        const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe15double__to__int(n);
        if (_bind$4 === undefined) {
          return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(n);
        } else {
          const _Some = _bind$4;
          const _i = _Some;
          i = _i;
          break _L$4;
        }
      }
      return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(i);
    }
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(s);
  }
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(_M0MPC14json4Json17stringify_2einner(j, false, 0, undefined));
}
function _M0FP25SDJM519moonbit_2ddataframe9is__digit(c) {
  return c >= 48 && c <= 57;
}
function _M0FP25SDJM519moonbit_2ddataframe14is__plain__int(s) {
  const chars = _M0MPC16string6String9to__array(s);
  if (chars.length === 0) {
    return false;
  }
  const start = _M0MPC15array5Array2atGcE(chars, 0) === 43 || _M0MPC15array5Array2atGcE(chars, 0) === 45 ? 1 : 0;
  if (start >= chars.length) {
    return false;
  }
  if (_M0MPC15array5Array2atGcE(chars, start) === 48 && (start + 1 | 0) < chars.length) {
    return false;
  }
  let _tmp$2 = start;
  while (true) {
    const i = _tmp$2;
    if (i < chars.length) {
      if (!_M0FP25SDJM519moonbit_2ddataframe9is__digit(_M0MPC15array5Array2atGcE(chars, i))) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP25SDJM519moonbit_2ddataframe18looks__like__float(s) {
  const _bind$4 = ".";
  if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    return true;
  } else {
    let _tmp$2;
    const _bind$5 = "e";
    if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
      _tmp$2 = true;
    } else {
      const _bind$6 = "E";
      _tmp$2 = _M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
    }
    return _tmp$2;
  }
}
function _M0MP25SDJM519moonbit_2ddataframe5Value5parse(raw, infer_types, null_values) {
  if (_M0MPC15array5Array8containsGsE(null_values, raw)) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  }
  if (!infer_types) {
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(raw);
  }
  const lower = _M0MPC16string6String9to__lower(raw);
  if (lower === "true") {
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(true);
  }
  if (lower === "false") {
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(false);
  }
  if (_M0FP25SDJM519moonbit_2ddataframe14is__plain__int(raw)) {
    let parsed;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$4 = _M0FPC28internal7strconv20parse__int64_2einner(new _M0TPC16string10StringView(raw, 0, raw.length), 0);
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          parsed = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L$2;
        }
        break _L;
      }
      parsed = undefined;
    }
    let n;
    _L$2: {
      _L$3: {
        if (parsed === undefined) {
        } else {
          const _Some = parsed;
          const _n = _Some;
          n = _n;
          break _L$3;
        }
        break _L$2;
      }
      if (BigInt.asIntN(64, n) >= BigInt.asIntN(64, 18446744071562067968n) && BigInt.asIntN(64, n) <= BigInt.asIntN(64, 2147483647n)) {
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(Number(BigInt.asIntN(32, n)) | 0);
      } else {
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double($f64_convert_i64(BigInt.asIntN(64, n)));
      }
    }
  }
  if (_M0FP25SDJM519moonbit_2ddataframe18looks__like__float(raw)) {
    let parsed_double;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$4 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(raw, 0, raw.length));
        let _tmp$2;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _tmp$2 = _ok._0;
        } else {
          const _err = _bind$4;
          _try_err = _err._0;
          break _L$2;
        }
        parsed_double = new _M0DTPC16option6OptionGdE4Some(_tmp$2);
        break _L;
      }
      parsed_double = _M0DTPC16option6OptionGdE4None__;
    }
    let d;
    _L$2: {
      _L$3: {
        if (parsed_double.$tag === 1) {
          const _Some = parsed_double;
          const _d = _Some._0;
          d = _d;
          break _L$3;
        }
        break _L$2;
      }
      return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(d);
    }
  }
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(raw);
}
function _M0MP25SDJM519moonbit_2ddataframe5Value4cast(self, dtype) {
  if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(self)) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  }
  switch (dtype) {
    case 0: {
      return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
    }
    case 5: {
      return self;
    }
    case 1: {
      let s;
      _L: {
        let b;
        _L$2: {
          let d;
          _L$3: {
            switch (self.$tag) {
              case 1: {
                return self;
              }
              case 2: {
                const _Double = self;
                const _d = _Double._0;
                d = _d;
                break _L$3;
              }
              case 3: {
                const _Bool = self;
                const _b = _Bool._0;
                b = _b;
                break _L$2;
              }
              case 4: {
                const _Str = self;
                const _s = _Str._0;
                s = _s;
                break _L;
              }
              default: {
                return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
              }
            }
          }
          let i;
          _L$4: {
            const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe15double__to__int(d);
            if (_bind$4 === undefined) {
              return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
            } else {
              const _Some = _bind$4;
              const _i = _Some;
              i = _i;
              break _L$4;
            }
          }
          return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(i);
        }
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(b ? 1 : 0);
      }
      let parsed;
      let _try_err;
      _L$2: {
        _L$3: {
          const _bind$4 = _M0FPC28internal7strconv20parse__int64_2einner(new _M0TPC16string10StringView(s, 0, s.length), 0);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            parsed = _ok._0;
          } else {
            const _err = _bind$4;
            _try_err = _err._0;
            break _L$3;
          }
          break _L$2;
        }
        parsed = undefined;
      }
      let n;
      _L$3: {
        if (parsed === undefined) {
          return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
        } else {
          const _Some = parsed;
          const _n = _Some;
          n = _n;
          break _L$3;
        }
      }
      return BigInt.asIntN(64, n) >= BigInt.asIntN(64, 18446744071562067968n) && BigInt.asIntN(64, n) <= BigInt.asIntN(64, 2147483647n) ? new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(Number(BigInt.asIntN(32, n)) | 0) : _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
    }
    case 2: {
      let s$2;
      _L$4: {
        let b;
        _L$5: {
          let i;
          _L$6: {
            switch (self.$tag) {
              case 2: {
                return self;
              }
              case 1: {
                const _Int = self;
                const _i = _Int._0;
                i = _i;
                break _L$6;
              }
              case 3: {
                const _Bool = self;
                const _b = _Bool._0;
                b = _b;
                break _L$5;
              }
              case 4: {
                const _Str = self;
                const _s = _Str._0;
                s$2 = _s;
                break _L$4;
              }
              default: {
                return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
              }
            }
          }
          return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(i + 0);
        }
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(b ? 1 : 0);
      }
      let parsed$2;
      let _try_err$2;
      _L$5: {
        _L$6: {
          const _bind$4 = _M0FPC28internal7strconv13parse__double(new _M0TPC16string10StringView(s$2, 0, s$2.length));
          let _tmp$2;
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$2 = _ok._0;
          } else {
            const _err = _bind$4;
            _try_err$2 = _err._0;
            break _L$6;
          }
          parsed$2 = new _M0DTPC16option6OptionGdE4Some(_tmp$2);
          break _L$5;
        }
        parsed$2 = _M0DTPC16option6OptionGdE4None__;
      }
      let d;
      _L$6: {
        if (parsed$2.$tag === 1) {
          const _Some = parsed$2;
          const _d = _Some._0;
          d = _d;
          break _L$6;
        } else {
          return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
        }
      }
      return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(d);
    }
    case 3: {
      let s$3;
      _L$7: {
        let d$2;
        _L$8: {
          let i;
          _L$9: {
            switch (self.$tag) {
              case 3: {
                return self;
              }
              case 1: {
                const _Int = self;
                const _i = _Int._0;
                i = _i;
                break _L$9;
              }
              case 2: {
                const _Double = self;
                const _d = _Double._0;
                d$2 = _d;
                break _L$8;
              }
              case 4: {
                const _Str = self;
                const _s = _Str._0;
                s$3 = _s;
                break _L$7;
              }
              default: {
                return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
              }
            }
          }
          return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(i !== 0);
        }
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(d$2 !== 0);
      }
      _L$8: {
        _L$9: {
          const _bind$4 = _M0MPC16string6String9to__lower(s$3);
          switch (_bind$4) {
            case "true": {
              break _L$9;
            }
            case "1": {
              break _L$9;
            }
            case "yes": {
              break _L$9;
            }
            case "y": {
              break _L$9;
            }
            case "false": {
              break _L$8;
            }
            case "0": {
              break _L$8;
            }
            case "no": {
              break _L$8;
            }
            case "n": {
              break _L$8;
            }
            default: {
              return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
            }
          }
        }
        return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(true);
      }
      return new _M0DTP25SDJM519moonbit_2ddataframe5Value4Bool(false);
    }
    default: {
      return new _M0DTP25SDJM519moonbit_2ddataframe5Value3Str(_M0MP25SDJM519moonbit_2ddataframe5Value8to__text(self));
    }
  }
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values) {
  return new _M0TP25SDJM519moonbit_2ddataframe6Series(name, values);
}
function _M0MP25SDJM519moonbit_2ddataframe6Series4name(self) {
  return self.name;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3len(self) {
  return self.values.length;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3get(self, i) {
  return _M0MPC15array5Array2atGsE(self.values, i);
}
function _M0MP25SDJM519moonbit_2ddataframe6Series9to__array(self) {
  return self.values;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series5dtype(self) {
  const has_int = new _M0TPB8MutLocalGbE(false);
  const has_double = new _M0TPB8MutLocalGbE(false);
  const has_bool = new _M0TPB8MutLocalGbE(false);
  const has_string = new _M0TPB8MutLocalGbE(false);
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      switch (v.$tag) {
        case 0: {
          break;
        }
        case 1: {
          has_int.val = true;
          break;
        }
        case 2: {
          has_double.val = true;
          break;
        }
        case 3: {
          has_bool.val = true;
          break;
        }
        default: {
          has_string.val = true;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const numeric = has_int.val || has_double.val;
  const kinds = ((numeric ? 1 : 0) + (has_bool.val ? 1 : 0) | 0) + (has_string.val ? 1 : 0) | 0;
  return kinds === 0 ? 0 : kinds > 1 ? 5 : numeric ? (has_double.val ? 2 : 1) : has_bool.val ? 3 : 4;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series5count(self) {
  return _M0MPC15array5Array9count__ifGRP25SDJM519moonbit_2ddataframe5ValueE(self.values, (v) => !_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v));
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3sum(self) {
  const int_sum = new _M0TPB8MutLocalGiE(0);
  const double_sum = new _M0TPB8MutLocalGdE(0);
  const has_double = new _M0TPB8MutLocalGbE(false);
  const count = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      let d;
      _L: {
        _L$2: {
          let i;
          _L$3: {
            _L$4: {
              switch (v.$tag) {
                case 1: {
                  const _Int = v;
                  const _i = _Int._0;
                  i = _i;
                  break _L$4;
                }
                case 2: {
                  const _Double = v;
                  const _d = _Double._0;
                  d = _d;
                  break _L$2;
                }
              }
              break _L$3;
            }
            int_sum.val = int_sum.val + i | 0;
            count.val = count.val + 1 | 0;
          }
          break _L;
        }
        double_sum.val = double_sum.val + d;
        has_double.val = true;
        count.val = count.val + 1 | 0;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return count.val === 0 ? _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__ : has_double.val ? new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(int_sum.val + 0 + double_sum.val) : new _M0DTP25SDJM519moonbit_2ddataframe5Value3Int(int_sum.val);
}
function _M0MP25SDJM519moonbit_2ddataframe6Series4mean(self) {
  const sum = new _M0TPB8MutLocalGdE(0);
  const count = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      let d;
      _L: {
        _L$2: {
          const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe5Value10as__double(v);
          if (_bind$6.$tag === 1) {
            const _Some = _bind$6;
            const _d = _Some._0;
            d = _d;
            break _L$2;
          }
          break _L;
        }
        sum.val = sum.val + d;
        count.val = count.val + 1 | 0;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return count.val === 0 ? _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__ : new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(sum.val / (count.val + 0));
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3min(self) {
  const best = new _M0TPB8MutLocalGORP25SDJM519moonbit_2ddataframe5ValueE(undefined);
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      _L: {
        if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
          break _L;
        }
        let b;
        _L$2: {
          _L$3: {
            const _bind$6 = best.val;
            if (_bind$6 === undefined) {
              best.val = v;
            } else {
              const _Some = _bind$6;
              const _b = _Some;
              b = _b;
              break _L$3;
            }
            break _L$2;
          }
          if (_M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, b) < 0) {
            best.val = v;
          }
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = best.val;
  if (_bind$6 === undefined) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  } else {
    const _Some = _bind$6;
    const _v = _Some;
    return _v;
  }
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3max(self) {
  const best = new _M0TPB8MutLocalGORP25SDJM519moonbit_2ddataframe5ValueE(undefined);
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      _L: {
        if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
          break _L;
        }
        let b;
        _L$2: {
          _L$3: {
            const _bind$6 = best.val;
            if (_bind$6 === undefined) {
              best.val = v;
            } else {
              const _Some = _bind$6;
              const _b = _Some;
              b = _b;
              break _L$3;
            }
            break _L$2;
          }
          if (_M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, b) > 0) {
            best.val = v;
          }
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$6 = best.val;
  if (_bind$6 === undefined) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  } else {
    const _Some = _bind$6;
    const _v = _Some;
    return _v;
  }
}
function _M0MP25SDJM519moonbit_2ddataframe6Series15numeric__values(self) {
  const nums = [];
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      let d;
      _L: {
        _L$2: {
          const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe5Value10as__double(v);
          if (_bind$6.$tag === 1) {
            const _Some = _bind$6;
            const _d = _Some._0;
            d = _d;
            break _L$2;
          }
          break _L;
        }
        _M0MPC15array5Array4pushGdE(nums, d);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return nums;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series6median(self) {
  const nums = _M0MP25SDJM519moonbit_2ddataframe6Series15numeric__values(self);
  const n = nums.length;
  if (n === 0) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  }
  _M0MPC15array5Array4sortGdE(nums);
  if (2 === 0) {
    $panic();
  }
  if ((n % 2 | 0) === 1) {
    if (2 === 0) {
      $panic();
    }
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(_M0MPC15array5Array2atGdE(nums, n / 2 | 0));
  } else {
    if (2 === 0) {
      $panic();
    }
    const _tmp$2 = _M0MPC15array5Array2atGdE(nums, (n / 2 | 0) - 1 | 0);
    if (2 === 0) {
      $panic();
    }
    return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double((_tmp$2 + _M0MPC15array5Array2atGdE(nums, n / 2 | 0)) / 2);
  }
}
function _M0MP25SDJM519moonbit_2ddataframe6Series8variance(self) {
  const nums = _M0MP25SDJM519moonbit_2ddataframe6Series15numeric__values(self);
  const n = nums.length;
  if (n < 2) {
    return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
  }
  const sum = new _M0TPB8MutLocalGdE(0);
  const _bind$4 = nums.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const d = nums[_];
      sum.val = sum.val + d;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const mean = sum.val / (n + 0);
  const acc = new _M0TPB8MutLocalGdE(0);
  const _bind$5 = nums.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const d = nums[_];
      acc.val = acc.val + (d - mean) * (d - mean);
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(acc.val / ((n - 1 | 0) + 0));
}
function _M0MP25SDJM519moonbit_2ddataframe6Series3std(self) {
  let v;
  _L: {
    const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe6Series8variance(self);
    if (_bind$4.$tag === 2) {
      const _Double = _bind$4;
      const _v = _Double._0;
      v = _v;
      break _L;
    } else {
      return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
    }
  }
  return new _M0DTP25SDJM519moonbit_2ddataframe5Value6Double(Math.sqrt(v));
}
function _M0MP25SDJM519moonbit_2ddataframe6Series6unique(self) {
  const _bind$4 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$4, 0, 0), undefined);
  const out = [];
  const _bind$5 = self.values;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const v = _bind$5[_];
      _L: {
        if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
          break _L;
        }
        const key = _M0MP25SDJM519moonbit_2ddataframe5Value9key__repr(v);
        if (!_M0MPB3Map8containsGsuE(seen, key)) {
          _M0MPB3Map3setGsuE(seen, key, undefined);
          _M0MPC15array5Array4pushGsE(out, v);
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series9n__unique(self) {
  return _M0MP25SDJM519moonbit_2ddataframe6Series6unique(self).length;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series13value__counts(self) {
  const entries = [];
  const _bind$4 = [];
  const positions = _M0MPB3Map3MapGsiE(new _M0TPB9ArrayViewGUsiEE(_bind$4, 0, 0), undefined);
  const _bind$5 = self.values;
  const _bind$6 = _bind$5.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$6) {
      const v = _bind$5[_];
      _L: {
        if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
          break _L;
        }
        const key = _M0MP25SDJM519moonbit_2ddataframe5Value9key__repr(v);
        let pos;
        _L$2: {
          _L$3: {
            const _bind$7 = _M0MPB3Map3getGsiE(positions, key);
            if (_bind$7 === undefined) {
              const pos$2 = entries.length;
              _M0MPB3Map3setGsiE(positions, key, pos$2);
              _M0MPC15array5Array4pushGsE(entries, { _0: v, _1: 1, _2: pos$2 });
            } else {
              const _Some = _bind$7;
              const _pos = _Some;
              pos = _pos;
              break _L$3;
            }
            break _L$2;
          }
          const entry = _M0MPC15array5Array2atGsE(entries, pos);
          _M0MPC15array5Array3setGURP25SDJM519moonbit_2ddataframe5ValueiiEE(entries, pos, { _0: entry._0, _1: entry._1 + 1 | 0, _2: entry._2 });
        }
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(entries, (a, b) => a._1 !== b._1 ? b._1 - a._1 | 0 : a._2 - b._2 | 0);
  return _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiiEURP25SDJM519moonbit_2ddataframe5ValueiEE(entries, (entry) => ({ _0: entry._0, _1: entry._1 }));
}
function _M0MP25SDJM519moonbit_2ddataframe6Series5first(self) {
  const _bind$4 = self.values;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const v = _bind$4[_];
      if (!_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
        return v;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
}
function _M0MP25SDJM519moonbit_2ddataframe6Series4last(self) {
  const n = self.values.length;
  let _tmp$2 = n - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 0) {
      const v = _M0MPC15array5Array2atGsE(self.values, i);
      if (!_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v)) {
        return v;
      }
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name) {
  return _M0MPB4Iter11find__firstGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPC15array5Array4iterGRP25SDJM519moonbit_2ddataframe6SeriesE(self.columns), (s) => _M0MP25SDJM519moonbit_2ddataframe6Series4name(s) === name);
}
function _M0FP25SDJM519moonbit_2ddataframe8row__key(frame, i, keys) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind$4 = keys.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const k = keys[_];
      let col;
      _L: {
        _L$2: {
          const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(frame, k);
          if (_bind$5 === undefined) {
            _M0IPB13StringBuilderPB6Logger13write__string(sb, "?;");
          } else {
            const _Some = _bind$5;
            const _col = _Some;
            col = _col;
            break _L$2;
          }
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MP25SDJM519moonbit_2ddataframe5Value9key__repr(_M0MP25SDJM519moonbit_2ddataframe6Series3get(col, i)));
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self) {
  let c;
  _L: {
    const _bind$4 = _M0MPC15array5Array3getGsE(self.columns, 0);
    if (_bind$4 === undefined) {
      return 0;
    } else {
      const _Some = _bind$4;
      const _c = _Some;
      c = _c;
      break _L;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3len(c);
}
function _M0FP25SDJM519moonbit_2ddataframe11index__rows(frame, keys) {
  const _bind$4 = [];
  const index = _M0MPB3Map3MapGsRPB5ArrayGiEE(new _M0TPB9ArrayViewGUsRPB5ArrayGiEEE(_bind$4, 0, 0), undefined);
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(frame)) {
      const key = _M0FP25SDJM519moonbit_2ddataframe8row__key(frame, i, keys);
      let rows;
      _L: {
        _L$2: {
          const _bind$5 = _M0MPB3Map3getGsRPB5ArrayGiEE(index, key);
          if (_bind$5.$tag === 1) {
            const _Some = _bind$5;
            const _rows = _Some._0;
            rows = _rows;
            break _L$2;
          } else {
            _M0MPB3Map3setGsRPB5ArrayGiEE(index, key, [i]);
          }
          break _L;
        }
        _M0MPC15array5Array4pushGiE(rows, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return index;
}
function _M0FP25SDJM519moonbit_2ddataframe11join__pairs(left, right, on, how) {
  const left_rows = [];
  const right_rows = [];
  if (how === 2) {
    const index = _M0FP25SDJM519moonbit_2ddataframe11index__rows(left, on);
    let _tmp$2 = 0;
    while (true) {
      const j = _tmp$2;
      if (j < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(right)) {
        let rows;
        _L: {
          _L$2: {
            const _bind$4 = _M0MPB3Map3getGsRPB5ArrayGiEE(index, _M0FP25SDJM519moonbit_2ddataframe8row__key(right, j, on));
            if (_bind$4.$tag === 1) {
              const _Some = _bind$4;
              const _rows = _Some._0;
              rows = _rows;
              break _L$2;
            } else {
              _M0MPC15array5Array4pushGiE(left_rows, -1);
              _M0MPC15array5Array4pushGiE(right_rows, j);
            }
            break _L;
          }
          const _bind$4 = rows.length;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$4) {
              const i = rows[_];
              _M0MPC15array5Array4pushGiE(left_rows, i);
              _M0MPC15array5Array4pushGiE(right_rows, j);
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        _tmp$2 = j + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    const index = _M0FP25SDJM519moonbit_2ddataframe11index__rows(right, on);
    const right_matched = _M0MPC15array5Array4makeGbE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(right), false);
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(left)) {
        let rows;
        _L: {
          _L$2: {
            const _bind$4 = _M0MPB3Map3getGsRPB5ArrayGiEE(index, _M0FP25SDJM519moonbit_2ddataframe8row__key(left, i, on));
            if (_bind$4.$tag === 1) {
              const _Some = _bind$4;
              const _rows = _Some._0;
              rows = _rows;
              break _L$2;
            } else {
              _L$3: {
                _L$4: {
                  if (how === 1) {
                    break _L$4;
                  } else {
                    if (how === 3) {
                      break _L$4;
                    }
                  }
                  break _L$3;
                }
                _M0MPC15array5Array4pushGiE(left_rows, i);
                _M0MPC15array5Array4pushGiE(right_rows, -1);
              }
            }
            break _L;
          }
          const _bind$4 = rows.length;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$4) {
              const j = rows[_];
              _M0MPC15array5Array4pushGiE(left_rows, i);
              _M0MPC15array5Array4pushGiE(right_rows, j);
              _M0MPC15array5Array3setGbE(right_matched, j, true);
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (how === 3) {
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if (j < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(right)) {
          if (!_M0MPC15array5Array2atGbE(right_matched, j)) {
            _M0MPC15array5Array4pushGiE(left_rows, -1);
            _M0MPC15array5Array4pushGiE(right_rows, j);
          }
          _tmp$3 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return { _0: left_rows, _1: right_rows };
}
function _M0FP25SDJM519moonbit_2ddataframe12gather__side(frame, name, rows) {
  const values = [];
  const _bind$4 = rows.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const r = rows[_];
      if (r < 0) {
        _M0MPC15array5Array4pushGsE(values, _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__);
      } else {
        let _tmp$3;
        let col;
        _L: {
          _L$2: {
            const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(frame, name);
            if (_bind$5 === undefined) {
              _tmp$3 = _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
            } else {
              const _Some = _bind$5;
              const _col = _Some;
              col = _col;
              break _L$2;
            }
            break _L;
          }
          _tmp$3 = _M0MP25SDJM519moonbit_2ddataframe6Series3get(col, r);
        }
        _M0MPC15array5Array4pushGsE(values, _tmp$3);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values);
}
function _M0FP25SDJM519moonbit_2ddataframe11gather__key(left, right, name, left_rows, right_rows) {
  const values = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < left_rows.length) {
      const frame = _M0MPC15array5Array2atGiE(left_rows, i) >= 0 ? left : right;
      const row = _M0MPC15array5Array2atGiE(left_rows, i) >= 0 ? _M0MPC15array5Array2atGiE(left_rows, i) : _M0MPC15array5Array2atGiE(right_rows, i);
      let _tmp$3;
      let col;
      _L: {
        _L$2: {
          const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(frame, name);
          if (_bind$4 === undefined) {
            _tmp$3 = _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$4;
            const _col = _Some;
            col = _col;
            break _L$2;
          }
          break _L;
        }
        _tmp$3 = _M0MP25SDJM519moonbit_2ddataframe6Series3get(col, row);
      }
      _M0MPC15array5Array4pushGsE(values, _tmp$3);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values);
}
function _M0FP25SDJM519moonbit_2ddataframe5errorGuE(msg) {
  return new _M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(new _M0DTPC15error5Error61SDJM5_2fmoonbit_2ddataframe_2eDataFrameError_2eDataFrameError(msg));
}
function _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(msg) {
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE3Err(new _M0DTPC15error5Error61SDJM5_2fmoonbit_2ddataframe_2eDataFrameError_2eDataFrameError(msg));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self) {
  return _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriessE(self.columns, (s) => _M0MP25SDJM519moonbit_2ddataframe6Series4name(s));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, name) {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name);
  return !(_bind$4 === undefined);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns) {
  let first;
  _L: {
    const _bind$4 = _M0MPC15array5Array3getGsE(columns, 0);
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(columns));
    } else {
      const _Some = _bind$4;
      const _first = _Some;
      first = _first;
      break _L;
    }
  }
  const n = _M0MP25SDJM519moonbit_2ddataframe6Series3len(first);
  const _bind$4 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$4, 0, 0), undefined);
  const _bind$5 = columns.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const s = columns[_];
      if (_M0MP25SDJM519moonbit_2ddataframe6Series3len(s) !== n) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "column ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe6Series3len(s));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " cells, expected ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
        const _bind$6 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
      }
      if (_M0MPB3Map8containsGsuE(seen, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s))) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(23);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "duplicate column name: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s));
        const _bind$6 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _ok._0;
        } else {
          return _bind$6;
        }
      }
      _M0MPB3Map3setGsuE(seen, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s), undefined);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(columns));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12join_2einner(self, other, on, how) {
  const _bind$4 = on.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const k = on[_];
      if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, k)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(34);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "join key not found in left frame: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, k);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(other, k)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(35);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "join key not found in right frame: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, k);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const right_plan = [];
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(other);
  const _bind$6 = _bind$5.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const name = _bind$5[_];
      _L: {
        if (_M0MPC15array5Array8containsGsE(on, name)) {
          break _L;
        }
        const out_name = _M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, name) ? `${name}_right` : name;
        const _bind$7 = right_plan.length;
        let _tmp$4 = 0;
        while (true) {
          const _$2 = _tmp$4;
          if (_$2 < _bind$7) {
            const _foreach_element = right_plan[_$2];
            let taken;
            _L$2: {
              const _taken = _foreach_element._0;
              taken = _taken;
              break _L$2;
            }
            if (taken === out_name) {
              const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
              _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "ambiguous column after join: ");
              _M0MPB13StringBuilder13write__objectGsE(_string_builder, out_name);
              const _bind$8 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
              if (_bind$8.$tag === 1) {
                const _ok = _bind$8;
                _ok._0;
              } else {
                return _bind$8;
              }
            }
            _tmp$4 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, out_name) && _M0IP016_24default__implPB2Eq10not__equalGsE(out_name, name)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "ambiguous column after join: ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, out_name);
          const _bind$8 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
          if (_bind$8.$tag === 1) {
            const _ok = _bind$8;
            _ok._0;
          } else {
            return _bind$8;
          }
        }
        _M0MPC15array5Array4pushGsE(right_plan, { _0: out_name, _1: name });
        break _L;
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let left_rows;
  let right_rows;
  _L: {
    const _bind$7 = _M0FP25SDJM519moonbit_2ddataframe11join__pairs(self, other, on, how);
    const _left_rows = _bind$7._0;
    const _right_rows = _bind$7._1;
    left_rows = _left_rows;
    right_rows = _right_rows;
    break _L;
  }
  const columns = [];
  const _bind$7 = on.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$7) {
      const k = on[_];
      _M0MPC15array5Array4pushGsE(columns, _M0FP25SDJM519moonbit_2ddataframe11gather__key(self, other, k, left_rows, right_rows));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$8 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self);
  const _bind$9 = _bind$8.length;
  let _tmp$5 = 0;
  while (true) {
    const _ = _tmp$5;
    if (_ < _bind$9) {
      const name = _bind$8[_];
      _L$2: {
        if (_M0MPC15array5Array8containsGsE(on, name)) {
          break _L$2;
        }
        _M0MPC15array5Array4pushGsE(columns, _M0FP25SDJM519moonbit_2ddataframe12gather__side(self, name, left_rows));
        break _L$2;
      }
      _tmp$5 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$10 = right_plan.length;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind$10) {
      const _foreach_element = right_plan[_];
      let out_name;
      let source_name;
      _L$2: {
        const _out_name = _foreach_element._0;
        const _source_name = _foreach_element._1;
        out_name = _out_name;
        source_name = _source_name;
        break _L$2;
      }
      const gathered = _M0MP25SDJM519moonbit_2ddataframe6Series9to__array(_M0FP25SDJM519moonbit_2ddataframe12gather__side(other, source_name, right_rows));
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(out_name, gathered));
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame4join(self, other, on, how$46$opt) {
  let how;
  if (how$46$opt === undefined) {
    how = 0;
  } else {
    const _Some = how$46$opt;
    how = _Some;
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame12join_2einner(self, other, on, how);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame5empty() {
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame([]);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12concat__rows(frames) {
  if (frames.length === 0) {
    return _M0MP25SDJM519moonbit_2ddataframe9DataFrame5empty();
  }
  const names = [];
  const _bind$4 = frames.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const f = frames[_];
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(f);
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$6) {
          const name = _bind$5[_$2];
          if (!_M0MPC15array5Array8containsGsE(names, name)) {
            _M0MPC15array5Array4pushGsE(names, name);
          }
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const columns = [];
  const _bind$5 = names.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$5) {
      const name = names[_];
      const values = [];
      const _bind$6 = frames.length;
      let _tmp$4 = 0;
      while (true) {
        const _$2 = _tmp$4;
        if (_$2 < _bind$6) {
          const f = frames[_$2];
          let col;
          _L: {
            _L$2: {
              const _bind$7 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(f, name);
              if (_bind$7 === undefined) {
                let _tmp$5 = 0;
                while (true) {
                  const _i = _tmp$5;
                  if (_i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(f)) {
                    _M0MPC15array5Array4pushGsE(values, _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__);
                    _tmp$5 = _i + 1 | 0;
                    continue;
                  } else {
                    break;
                  }
                }
              } else {
                const _Some = _bind$7;
                const _col = _Some;
                col = _col;
                break _L$2;
              }
              break _L;
            }
            const _bind$7 = _M0MP25SDJM519moonbit_2ddataframe6Series9to__array(col);
            _M0MPC15array5Array6appendGRP25SDJM519moonbit_2ddataframe5ValueE(values, new _M0TPB9ArrayViewGRP25SDJM519moonbit_2ddataframe5ValueE(_bind$7, 0, _bind$7.length));
          }
          _tmp$4 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame6series(self) {
  return self.columns;
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame15concat__columns(frames) {
  let first;
  _L: {
    const _bind$4 = _M0MPC15array5Array3getGsE(frames, 0);
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5empty());
    } else {
      const _Some = _bind$4;
      const _first = _Some;
      first = _first;
      break _L;
    }
  }
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(first);
  const columns = [];
  const _bind$4 = frames.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const f = frames[_];
      if (_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(f) !== n) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(31);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cannot place ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(f));
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " rows beside ");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " rows");
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6series(f);
      const _bind$6 = _bind$5.length;
      let _tmp$3 = 0;
      while (true) {
        const _$2 = _tmp$3;
        if (_$2 < _bind$6) {
          const col = _bind$5[_$2];
          _M0MPC15array5Array4pushGsE(columns, col);
          _tmp$3 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, indices) {
  const cols = _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe6SeriesE(self.columns, (s) => _M0MP25SDJM519moonbit_2ddataframe6Series3new(_M0MP25SDJM519moonbit_2ddataframe6Series4name(s), _M0MPC15array5Array3mapGiRP25SDJM519moonbit_2ddataframe5ValueE(indices, (i) => _M0MP25SDJM519moonbit_2ddataframe6Series3get(s, i))));
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(cols);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame14distinct__rows(self, columns) {
  const _bind$4 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$4, 0, 0), undefined);
  const keep = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self)) {
      const key = _M0FP25SDJM519moonbit_2ddataframe8row__key(self, i, columns);
      if (!_M0MPB3Map8containsGsuE(seen, key)) {
        _M0MPB3Map3setGsuE(seen, key, undefined);
        _M0MPC15array5Array4pushGiE(keep, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, keep);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame8distinct(self) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame14distinct__rows(self, _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12distinct__by(self, columns) {
  const _bind$4 = columns.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const c = columns[_];
      if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, c)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, c);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame14distinct__rows(self, columns));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame11drop__nulls(self, columns) {
  let cols;
  if (columns.$tag === 1) {
    const _Some = columns;
    const _c = _Some._0;
    cols = _c;
  } else {
    cols = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self);
  }
  const _bind$4 = cols.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const c = cols[_];
      if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, c)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, c);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const keep = [];
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self)) {
      const complete = new _M0TPB8MutLocalGbE(true);
      const _bind$5 = cols.length;
      let _tmp$4 = 0;
      while (true) {
        const _ = _tmp$4;
        if (_ < _bind$5) {
          const c = cols[_];
          let col;
          _L: {
            _L$2: {
              const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, c);
              if (_bind$6 === undefined) {
              } else {
                const _Some = _bind$6;
                const _col = _Some;
                col = _col;
                break _L$2;
              }
              break _L;
            }
            if (_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(_M0MP25SDJM519moonbit_2ddataframe6Series3get(col, i))) {
              complete.val = false;
            }
          }
          _tmp$4 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (complete.val) {
        _M0MPC15array5Array4pushGiE(keep, i);
      }
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, keep));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12with__column(self, series) {
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  if (_M0MP25SDJM519moonbit_2ddataframe6Series3len(series) !== n) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "column ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe6Series4name(series));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " has ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, _M0MP25SDJM519moonbit_2ddataframe6Series3len(series));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " cells, expected ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, n);
    const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      return _bind$4;
    }
  }
  const cols = [];
  const replaced = new _M0TPB8MutLocalGbE(false);
  const _bind$4 = self.columns;
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const s = _bind$4[_];
      if (_M0MP25SDJM519moonbit_2ddataframe6Series4name(s) === _M0MP25SDJM519moonbit_2ddataframe6Series4name(series)) {
        _M0MPC15array5Array4pushGsE(cols, series);
        replaced.val = true;
      } else {
        _M0MPC15array5Array4pushGsE(cols, s);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!replaced.val) {
    _M0MPC15array5Array4pushGsE(cols, series);
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(cols));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame11map__column(self, name, f) {
  let col;
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name);
  if (_bind$4 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
    const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      col = _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    const _Some = _bind$4;
    const _c = _Some;
    col = _c;
  }
  const new_col = _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5ValueRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series9to__array(col), f));
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame12with__column(self, new_col);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10fill__null(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame11map__column(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) ? value : v);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame15fill__null__all(self, value) {
  const columns = _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self), (name) => {
    let col;
    _L: {
      const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name);
      if (_bind$4 === undefined) {
        return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, []);
      } else {
        const _Some = _bind$4;
        const _col = _Some;
        col = _col;
        break _L;
      }
    }
    return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5ValueRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series9to__array(col), (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) ? value : v));
  });
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame4cast(self, column, dtype) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame11map__column(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value4cast(v, dtype));
}
function _M0FP25SDJM519moonbit_2ddataframe16read__text__file(path) {
  let _try_err;
  _L: {
    const _bind$4 = _M0FP311moonbitlang1x2fs30read__file__to__string_2einner(path, "utf8");
    let _tmp$2;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGsRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_tmp$2);
  }
  let msg;
  _L$2: {
    const _IOError = _try_err;
    const _msg = _IOError._0;
    msg = _msg;
    break _L$2;
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cannot read ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, path);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, msg);
  return _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
}
function _M0FP25SDJM519moonbit_2ddataframe13max__row__len(rows) {
  const m = new _M0TPB8MutLocalGiE(0);
  const _bind$4 = rows.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const r = rows[_];
      if (r.length > m.val) {
        m.val = r.length;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m.val;
}
function _M0FP25SDJM519moonbit_2ddataframe10parse__csv(text, delimiter) {
  const chars = _M0MPC16string6String9to__array(text);
  const n = chars.length;
  const rows = [];
  const row = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const field = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const in_quotes = new _M0TPB8MutLocalGbE(false);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < n) {
      const c = _M0MPC15array5Array2atGcE(chars, i.val);
      if (in_quotes.val) {
        if (c === 34) {
          if ((i.val + 1 | 0) < n && _M0MPC15array5Array2atGcE(chars, i.val + 1 | 0) === 34) {
            _M0IPB13StringBuilderPB6Logger11write__char(field, 34);
            i.val = i.val + 2 | 0;
          } else {
            in_quotes.val = false;
            i.val = i.val + 1 | 0;
          }
        } else {
          _M0IPB13StringBuilderPB6Logger11write__char(field, c);
          i.val = i.val + 1 | 0;
        }
      } else {
        if (c === 34) {
          in_quotes.val = true;
          i.val = i.val + 1 | 0;
        } else {
          if (c === delimiter) {
            _M0MPC15array5Array4pushGsE(row.val, _M0MPB13StringBuilder10to__string(field));
            _M0MPB13StringBuilder5reset(field);
            i.val = i.val + 1 | 0;
          } else {
            if (c === 10) {
              _M0MPC15array5Array4pushGsE(row.val, _M0MPB13StringBuilder10to__string(field));
              _M0MPB13StringBuilder5reset(field);
              _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
              row.val = [];
              i.val = i.val + 1 | 0;
            } else {
              if (c === 13) {
                _M0MPC15array5Array4pushGsE(row.val, _M0MPB13StringBuilder10to__string(field));
                _M0MPB13StringBuilder5reset(field);
                _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
                row.val = [];
                if ((i.val + 1 | 0) < n && _M0MPC15array5Array2atGcE(chars, i.val + 1 | 0) === 10) {
                  i.val = i.val + 2 | 0;
                } else {
                  i.val = i.val + 1 | 0;
                }
              } else {
                _M0IPB13StringBuilderPB6Logger11write__char(field, c);
                i.val = i.val + 1 | 0;
              }
            }
          }
        }
      }
      continue;
    } else {
      break;
    }
  }
  const ends_with_line = n > 0 && (_M0MPC15array5Array2atGcE(chars, n - 1 | 0) === 10 || _M0MPC15array5Array2atGcE(chars, n - 1 | 0) === 13);
  if (!ends_with_line) {
    _M0MPC15array5Array4pushGsE(row.val, _M0MPB13StringBuilder10to__string(field));
    _M0MPC15array5Array4pushGRPB5ArrayGsEE(rows, row.val);
  }
  return rows;
}
function _M0MP25SDJM519moonbit_2ddataframe11ReadOptions11new_2einner(has_header, delimiter, infer_types, null_values) {
  return new _M0TP25SDJM519moonbit_2ddataframe11ReadOptions(has_header, delimiter, infer_types, null_values);
}
function _M0MP25SDJM519moonbit_2ddataframe11ReadOptions3new(has_header$46$opt, delimiter$46$opt, infer_types$46$opt, null_values$46$opt) {
  const has_header = has_header$46$opt === -1 ? true : has_header$46$opt;
  const delimiter = delimiter$46$opt === -1 ? 44 : delimiter$46$opt;
  const infer_types = infer_types$46$opt === -1 ? true : infer_types$46$opt;
  let null_values;
  if (null_values$46$opt.$tag === 1) {
    const _Some = null_values$46$opt;
    null_values = _Some._0;
  } else {
    null_values = ["", "null", "NA", "NaN", "NULL", "na"];
  }
  return _M0MP25SDJM519moonbit_2ddataframe11ReadOptions11new_2einner(has_header, delimiter, infer_types, null_values);
}
function _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPB7Default7default() {
  return _M0MP25SDJM519moonbit_2ddataframe11ReadOptions3new(-1, -1, -1, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv(text, options) {
  let opts;
  if (options === undefined) {
    opts = _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPB7Default7default();
  } else {
    const _Some = options;
    const _o = _Some;
    opts = _o;
  }
  const rows = _M0FP25SDJM519moonbit_2ddataframe10parse__csv(text, opts.delimiter);
  if (rows.length === 0) {
    return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5empty());
  }
  let header_and_data;
  if (opts.has_header) {
    const header = _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, 0);
    const data = [];
    let _tmp$2 = 1;
    while (true) {
      const i = _tmp$2;
      if (i < rows.length) {
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(data, _M0MPC15array5Array2atGRPB5ArrayGsEE(rows, i));
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    header_and_data = { _0: header, _1: data };
  } else {
    const ncols = _M0FP25SDJM519moonbit_2ddataframe13max__row__len(rows);
    const header = [];
    let _tmp$2 = 0;
    while (true) {
      const j = _tmp$2;
      if (j < ncols) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "col");
        _M0MPB13StringBuilder13write__objectGiE(_string_builder, j);
        _M0MPC15array5Array4pushGsE(header, _M0MPB13StringBuilder10to__string(_string_builder));
        _tmp$2 = j + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    header_and_data = { _0: header, _1: rows };
  }
  let header;
  let data;
  _L: {
    const _header = header_and_data._0;
    const _data = header_and_data._1;
    header = _header;
    data = _data;
    break _L;
  }
  const ncols = header.length;
  const columns = [];
  let _tmp$2 = 0;
  while (true) {
    const j = _tmp$2;
    if (j < ncols) {
      const name = _M0MPC15array5Array2atGsE(header, j);
      const values = _M0MPC15array5Array3mapGRPB5ArrayGsERP25SDJM519moonbit_2ddataframe5ValueE(data, (row) => {
        let cell;
        _L$2: {
          const _bind$4 = _M0MPC15array5Array3getGsE(row, j);
          if (_bind$4 === undefined) {
            return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$4;
            const _cell = _Some;
            cell = _cell;
            break _L$2;
          }
        }
        return _M0MP25SDJM519moonbit_2ddataframe5Value5parse(cell, opts.infer_types, opts.null_values);
      });
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values));
      _tmp$2 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame9read__csv(path, options) {
  const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe16read__text__file(path);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv(_tmp$2, options);
}
function _M0FP25SDJM519moonbit_2ddataframe12from__object(obj) {
  let m;
  _L: {
    if (obj.$tag === 6) {
      const _Object = obj;
      const _m = _Object._0;
      m = _m;
      break _L;
    } else {
      return _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE("expected a JSON object");
    }
  }
  const keys = _M0MPB4Iter9to__arrayGsE(_M0MPB3Map4keysGsRPB4JsonE(m));
  _M0MPC15array5Array4sortGsE(keys);
  const columns = [];
  const _bind$4 = keys.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const k = keys[_];
      _L$2: {
        _L$3: {
          let items;
          _L$4: {
            const _bind$5 = _M0MPB3Map3getGsRPB4JsonE(m, k);
            if (_bind$5 === undefined) {
              break _L$3;
            } else {
              const _Some = _bind$5;
              const _x = _Some;
              if (_x.$tag === 5) {
                const _Array = _x;
                const _items = _Array._0;
                items = _items;
                break _L$4;
              } else {
                break _L$3;
              }
            }
          }
          const values = _M0MPC15array5Array3mapGRPB4JsonRP25SDJM519moonbit_2ddataframe5ValueE(items, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value10from__json(v));
          _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(k, values));
          break _L$2;
        }
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(29);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "expected an array for column ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, k);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
        let _tmp$3;
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _tmp$3 = _ok._0;
        } else {
          return _bind$5;
        }
        return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_tmp$3);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns);
}
function _M0FP25SDJM519moonbit_2ddataframe13from__records(items) {
  const names = [];
  const _bind$4 = [];
  const seen = _M0MPB3Map3MapGsuE(new _M0TPB9ArrayViewGUsuEE(_bind$4, 0, 0), undefined);
  const _bind$5 = items.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const item = items[_];
      let m;
      _L: {
        if (item.$tag === 6) {
          const _Object = item;
          const _m = _Object._0;
          m = _m;
          break _L;
        } else {
          const _bind$6 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE("expected a JSON array of objects");
          let _tmp$3;
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$3 = _ok._0;
          } else {
            return _bind$6;
          }
          return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_tmp$3);
        }
      }
      const _it = _M0MPB3Map4iterGsRPB4JsonE(m);
      while (true) {
        let k;
        _L$2: {
          const _bind$6 = _M0MPB4Iter4nextGUsRPB4JsonEE(_it);
          if (_bind$6 === undefined) {
            break;
          } else {
            const _Some = _bind$6;
            const _x = _Some;
            const _k = _x._0;
            k = _k;
            break _L$2;
          }
        }
        if (!_M0MPB3Map8containsGsuE(seen, k)) {
          _M0MPB3Map3setGsuE(seen, k, undefined);
          _M0MPC15array5Array4pushGsE(names, k);
        }
        continue;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const columns = [];
  const _bind$6 = names.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$6) {
      const name = names[_];
      const values = _M0MPC15array5Array3mapGRPB4JsonRP25SDJM519moonbit_2ddataframe5ValueE(items, (item) => {
        let m;
        _L: {
          if (item.$tag === 6) {
            const _Object = item;
            const _m = _Object._0;
            m = _m;
            break _L;
          } else {
            return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          }
        }
        let v;
        _L$2: {
          const _bind$7 = _M0MPB3Map3getGsRPB4JsonE(m, name);
          if (_bind$7 === undefined) {
            return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$7;
            const _v = _Some;
            v = _v;
            break _L$2;
          }
        }
        return _M0MP25SDJM519moonbit_2ddataframe5Value10from__json(v);
      });
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values));
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(columns);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10from__json(text) {
  let j;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$4 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(text, 0, text.length), 1024);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        j = _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L$2;
      }
      break _L;
    }
    const e = _try_err;
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(14);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "invalid JSON: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0IP016_24default__implPB4Show10to__stringGRPC14json10ParseErrorE(e));
    const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
    let _tmp$2;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$2 = _ok._0;
    } else {
      return _bind$4;
    }
    return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_tmp$2);
  }
  let items;
  _L$2: {
    switch (j.$tag) {
      case 5: {
        const _Array = j;
        const _items = _Array._0;
        items = _items;
        break _L$2;
      }
      case 6: {
        return _M0FP25SDJM519moonbit_2ddataframe12from__object(j);
      }
      default: {
        return _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE("expected a JSON array of objects or an object of arrays");
      }
    }
  }
  return _M0FP25SDJM519moonbit_2ddataframe13from__records(items);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10read__json(path) {
  const _bind$4 = _M0FP25SDJM519moonbit_2ddataframe16read__text__file(path);
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10from__json(_tmp$2);
}
function _M0FP25SDJM519moonbit_2ddataframe13cell__to__csv(v) {
  let b;
  _L: {
    let d;
    _L$2: {
      let i;
      _L$3: {
        switch (v.$tag) {
          case 0: {
            return "";
          }
          case 1: {
            const _Int = v;
            const _i = _Int._0;
            i = _i;
            break _L$3;
          }
          case 2: {
            const _Double = v;
            const _d = _Double._0;
            d = _d;
            break _L$2;
          }
          case 3: {
            const _Bool = v;
            const _b = _Bool._0;
            b = _b;
            break _L;
          }
          default: {
            const _Str = v;
            const _s = _Str._0;
            return _s;
          }
        }
      }
      return _M0MPC13int3Int18to__string_2einner(i, 10);
    }
    return String(d);
  }
  return _M0IPC14bool4BoolPB4Show10to__string(b);
}
function _M0FP25SDJM519moonbit_2ddataframe11escape__csv(s, delimiter) {
  let needs_quotes;
  const _bind$4 = "\"";
  if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
    needs_quotes = true;
  } else {
    let _tmp$2;
    if (_M0MPC16string6String14contains__char(s, delimiter)) {
      _tmp$2 = true;
    } else {
      let _tmp$3;
      const _bind$5 = "\n";
      if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length))) {
        _tmp$3 = true;
      } else {
        const _bind$6 = "\r";
        _tmp$3 = _M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length));
      }
      _tmp$2 = _tmp$3;
    }
    needs_quotes = _tmp$2;
  }
  if (needs_quotes) {
    const _bind$5 = "\"";
    const _tmp$2 = new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length);
    const _bind$6 = "\"\"";
    return `\"${_M0MPC16string6String12replace__all(s, _tmp$2, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))}\"`;
  } else {
    return s;
  }
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(self, row, column) {
  let s;
  _L: {
    const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, column);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _s = _Some;
      s = _s;
      break _L;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3get(s, row);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame15to__csv_2einner(self, delimiter) {
  const names = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self);
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  let _tmp$2 = 0;
  while (true) {
    const j = _tmp$2;
    if (j < names.length) {
      if (j > 0) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, delimiter);
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP25SDJM519moonbit_2ddataframe11escape__csv(_M0MPC15array5Array2atGsE(names, j), delimiter));
      _tmp$2 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IPB13StringBuilderPB6Logger11write__char(sb, 10);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < n) {
      let _tmp$4 = 0;
      while (true) {
        const j = _tmp$4;
        if (j < names.length) {
          if (j > 0) {
            _M0IPB13StringBuilderPB6Logger11write__char(sb, delimiter);
          }
          let v;
          const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(self, i, _M0MPC15array5Array2atGsE(names, j));
          if (_bind$4 === undefined) {
            v = _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$4;
            const _x = _Some;
            v = _x;
          }
          _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP25SDJM519moonbit_2ddataframe11escape__csv(_M0FP25SDJM519moonbit_2ddataframe13cell__to__csv(v), delimiter));
          _tmp$4 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0IPB13StringBuilderPB6Logger11write__char(sb, 10);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame18write__csv_2einner(self, path, delimiter) {
  const text = _M0MP25SDJM519moonbit_2ddataframe9DataFrame15to__csv_2einner(self, delimiter);
  let _try_err;
  _L: {
    const _bind$4 = _M0FP311moonbitlang1x2fs31write__string__to__file_2einner(path, text, "utf8");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(undefined);
  }
  let msg;
  _L$2: {
    const _IOError = _try_err;
    const _msg = _IOError._0;
    msg = _msg;
    break _L$2;
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cannot write ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, path);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, msg);
  return _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame8to__json(self) {
  const names = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self);
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  const objs = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const _bind$4 = [];
      const m = _M0MPB3Map3MapGsRPB4JsonE(new _M0TPB9ArrayViewGUsRPB4JsonEE(_bind$4, 0, 0), undefined);
      let _tmp$3 = 0;
      while (true) {
        const j = _tmp$3;
        if (j < names.length) {
          let v;
          const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(self, i, _M0MPC15array5Array2atGsE(names, j));
          if (_bind$5 === undefined) {
            v = _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$5;
            const _x = _Some;
            v = _x;
          }
          _M0MPB3Map3setGsRPB4JsonE(m, _M0MPC15array5Array2atGsE(names, j), _M0IP25SDJM519moonbit_2ddataframe5ValuePB6ToJson8to__json(v));
          _tmp$3 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(objs, _M0MPC14json4Json6object(m));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC14json4Json17stringify_2einner(_M0MPC14json4Json5array(objs), false, 0, undefined);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame11write__json(self, path) {
  const text = _M0MP25SDJM519moonbit_2ddataframe9DataFrame8to__json(self);
  let _try_err;
  _L: {
    const _bind$4 = _M0FP311moonbitlang1x2fs31write__string__to__file_2einner(path, text, "utf8");
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGuRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(undefined);
  }
  let msg;
  _L$2: {
    const _IOError = _try_err;
    const _msg = _IOError._0;
    msg = _msg;
    break _L$2;
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(15);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "cannot write ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, path);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, msg);
  return _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, pred) {
  let col;
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, column);
  if (_bind$4 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
    const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      col = _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    const _Some = _bind$4;
    const _c = _Some;
    col = _c;
  }
  const keep = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self)) {
      if (pred(_M0MP25SDJM519moonbit_2ddataframe6Series3get(col, i))) {
        _M0MPC15array5Array4pushGiE(keep, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, keep));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__eq(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0IP25SDJM519moonbit_2ddataframe5ValuePB2Eq5equal(v, value));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__ne(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe5ValueE(v, value));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__gt(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) || _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(value) ? false : _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, value) > 0);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__ge(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) || _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(value) ? false : _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, value) >= 0);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__lt(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) || _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(value) ? false : _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, value) < 0);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__le(self, column, value) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v) || _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(value) ? false : _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(v, value) <= 0);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame16filter__is__null(self, column) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame17filter__not__null(self, column) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => !_M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__in(self, column, values) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => _M0MPC15array5Array8containsGRP25SDJM519moonbit_2ddataframe5ValueE(values, v));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame16filter__contains(self, column, substring) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(self, column, (v) => {
    let s;
    _L: {
      const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe5Value10as__string(v);
      if (_bind$4 === undefined) {
        return false;
      } else {
        const _Some = _bind$4;
        const _s = _Some;
        s = _s;
        break _L;
      }
    }
    return _M0MPC16string6String8contains(s, new _M0TPC16string10StringView(substring, 0, substring.length));
  });
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__0() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,name\n1,Alice\n2,Bob\n3,Carol\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,city\n1,Paris\n2,London\n4,Rome\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4join(left, right, ["id"], undefined);
  let joined;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    joined = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(joined), ["id", "name", "city"], undefined, "features_wbtest.mbt:6:3-6:54@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(joined), 2, undefined, "features_wbtest.mbt:7:3-7:31@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Alice"), undefined, "features_wbtest.mbt:8:3-8:65@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 0, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Paris"), undefined, "features_wbtest.mbt:9:3-9:65@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 1, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("London"), undefined, "features_wbtest.mbt:10:3-10:66@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__1() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,name\n1,Alice\n2,Bob\n3,Carol\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,city\n1,Paris\n2,London\n4,Rome\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12join_2einner(left, right, ["id"], 1);
  let joined;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    joined = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(joined), 3, undefined, "features_wbtest.mbt:18:3-18:31@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Carol"), undefined, "features_wbtest.mbt:19:3-19:65@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:20:3-20:56@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__2() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,name\n1,Alice\n2,Bob\n3,Carol\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,city\n1,Paris\n2,London\n4,Rome\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12join_2einner(left, right, ["id"], 2);
  let joined;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    joined = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(joined), 3, undefined, "features_wbtest.mbt:28:3-28:31@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "id"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4), undefined, "features_wbtest.mbt:29:3-29:54@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:30:3-30:56@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Rome"), undefined, "features_wbtest.mbt:31:3-31:64@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__3() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,name\n1,Alice\n2,Bob\n3,Carol\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,city\n1,Paris\n2,London\n4,Rome\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12join_2einner(left, right, ["id"], 3);
  let joined;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    joined = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(joined), 4, undefined, "features_wbtest.mbt:39:3-39:31@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Carol"), undefined, "features_wbtest.mbt:40:3-40:65@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 2, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:41:3-41:56@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 3, "id"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4), undefined, "features_wbtest.mbt:42:3-42:54@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 3, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:43:3-43:56@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__4() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,v\n1,a\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,v\n1,b\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4join(left, right, ["id"], undefined);
  let joined;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    joined = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(joined), ["id", "v", "v_right"], undefined, "features_wbtest.mbt:51:3-51:54@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 0, "v"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), undefined, "features_wbtest.mbt:52:3-52:58@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(joined, 0, "v_right"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("b"), undefined, "features_wbtest.mbt:53:3-53:64@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__5() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,name\n1,Alice\n", undefined);
  let left;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    left = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("id,city\n1,Paris\n", undefined);
  let right;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    right = _ok._0;
  } else {
    return _bind$5;
  }
  let outcome;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4join(left, right, ["nope"], undefined);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L$2;
      }
      outcome = "no error";
      break _L;
    }
    outcome = "error";
  }
  return _M0FPC15debug10assert__eqGsE(outcome, "error", undefined, "features_wbtest.mbt:66:3-66:30@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__6() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("x,y\n1,2\n", undefined);
  let a;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    a = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("y,z\n3,4\n", undefined);
  let b;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    b = _ok._0;
  } else {
    return _bind$5;
  }
  const stacked = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12concat__rows([a, b]);
  const _bind$6 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(stacked), ["x", "y", "z"], undefined, "features_wbtest.mbt:74:3-74:48@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(stacked), 2, undefined, "features_wbtest.mbt:75:3-75:32@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(stacked, 0, "x"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:76:3-76:54@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(stacked, 0, "z"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:77:3-77:54@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(stacked, 1, "x"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:78:3-78:54@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(stacked, 1, "y"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "features_wbtest.mbt:79:3-79:54@SDJM5/moonbit-dataframe");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(stacked, 1, "z"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4), undefined, "features_wbtest.mbt:80:3-80:54@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__7() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("x\n1\n2\n", undefined);
  let a;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    a = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("y\n3\n4\n", undefined);
  let b;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    b = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame15concat__columns([a, b]);
  let side;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    side = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(side), ["x", "y"], undefined, "features_wbtest.mbt:88:3-88:40@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(side, 0, "y"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "features_wbtest.mbt:89:3-89:51@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(side, 1, "x"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "features_wbtest.mbt:90:3-90:51@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__8() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("x\n1\n2\n", undefined);
  let a;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    a = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("y\n3\n", undefined);
  let b;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    b = _ok._0;
  } else {
    return _bind$5;
  }
  let outcome;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame15concat__columns([a, b]);
      if (_bind$6.$tag === 1) {
        const _ok = _bind$6;
        _ok._0;
      } else {
        const _err = _bind$6;
        _try_err = _err._0;
        break _L$2;
      }
      outcome = "no error";
      break _L;
    }
    outcome = "error";
  }
  return _M0FPC15debug10assert__eqGsE(outcome, "error", undefined, "features_wbtest.mbt:103:3-103:30@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe51____test__66656174757265735f7762746573742e6d6274__9() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n2,y\n1,x\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(df), 3, undefined, "features_wbtest.mbt:109:3-109:27@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const uniq = _M0MP25SDJM519moonbit_2ddataframe9DataFrame8distinct(df);
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(uniq), 2, undefined, "features_wbtest.mbt:111:3-111:29@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(uniq, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:112:3-112:51@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(uniq, 1, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "features_wbtest.mbt:113:3-113:51@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__10() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n1,y\n2,z\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12distinct__by(df, ["a"]);
  let uniq;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    uniq = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(uniq), 2, undefined, "features_wbtest.mbt:120:3-120:29@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(uniq, 0, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("x"), undefined, "features_wbtest.mbt:121:3-121:56@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__11() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n,y\n3,\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame11drop__nulls(df, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$2), 1, undefined, "features_wbtest.mbt:127:3-127:40@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame11drop__nulls(df, new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(["a"]));
  let _tmp$3;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _tmp$3 = _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$3), 2, undefined, "features_wbtest.mbt:129:3-129:53@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10fill__null(df, "b", _M0MP25SDJM519moonbit_2ddataframe5Value6string("?"));
  let filled;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    filled = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(filled, 1, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("y"), undefined, "features_wbtest.mbt:131:3-131:58@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(filled, 2, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("?"), undefined, "features_wbtest.mbt:132:3-132:58@SDJM5/moonbit-dataframe");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const all_filled = _M0MP25SDJM519moonbit_2ddataframe9DataFrame15fill__null__all(df, _M0MP25SDJM519moonbit_2ddataframe5Value3int(0));
  const _bind$12 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(all_filled, 1, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(0), undefined, "features_wbtest.mbt:134:3-134:57@SDJM5/moonbit-dataframe");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(all_filled, 2, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(0), undefined, "features_wbtest.mbt:135:3-135:57@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__12() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("v\n3.7\n5\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4cast(df, "v", 1);
  let as_int;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    as_int = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(as_int, 0, "v"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "features_wbtest.mbt:142:3-142:53@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(as_int, 1, "v"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), undefined, "features_wbtest.mbt:143:3-143:53@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4cast(df, "v", 4);
  let as_string;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    as_string = _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(as_string, 0, "v"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("3.7"), undefined, "features_wbtest.mbt:145:3-145:63@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(as_string, 1, "v"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("5"), undefined, "features_wbtest.mbt:146:3-146:61@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("s\nabc\n", undefined);
  let words;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    words = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4cast(words, "s", 1);
  let _tmp$2;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _tmp$2 = _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(_tmp$2, 0, "s"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:149:3-149:77@SDJM5/moonbit-dataframe");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4cast(words, "s", 4);
  let _tmp$3;
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _tmp$3 = _ok._0;
  } else {
    return _bind$14;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(_tmp$3, 0, "s"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("abc"), undefined, "features_wbtest.mbt:150:3-153:4@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__13() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,30\nBob,25\nCarol,40\n,35\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(df), 4, undefined, "features_wbtest.mbt:159:3-159:27@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__gt(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(28));
  let gt;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    gt = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(gt), 3, undefined, "features_wbtest.mbt:161:3-161:27@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(gt, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Alice"), undefined, "features_wbtest.mbt:162:3-162:61@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__lt(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(28));
  let _tmp$2;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _tmp$2 = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$2), 1, undefined, "features_wbtest.mbt:163:3-163:60@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__ge(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(30));
  let _tmp$3;
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _tmp$3 = _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$3), 3, undefined, "features_wbtest.mbt:164:3-164:60@SDJM5/moonbit-dataframe");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__le(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(30));
  let _tmp$4;
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _tmp$4 = _ok._0;
  } else {
    return _bind$13;
  }
  const _bind$14 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$4), 2, undefined, "features_wbtest.mbt:165:3-165:60@SDJM5/moonbit-dataframe");
  if (_bind$14.$tag === 1) {
    const _ok = _bind$14;
    _ok._0;
  } else {
    return _bind$14;
  }
  const _bind$15 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__eq(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(30));
  let _tmp$5;
  if (_bind$15.$tag === 1) {
    const _ok = _bind$15;
    _tmp$5 = _ok._0;
  } else {
    return _bind$15;
  }
  const _bind$16 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$5), 1, undefined, "features_wbtest.mbt:166:3-166:60@SDJM5/moonbit-dataframe");
  if (_bind$16.$tag === 1) {
    const _ok = _bind$16;
    _ok._0;
  } else {
    return _bind$16;
  }
  const _bind$17 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__ne(df, "age", _M0MP25SDJM519moonbit_2ddataframe5Value3int(30));
  let _tmp$6;
  if (_bind$17.$tag === 1) {
    const _ok = _bind$17;
    _tmp$6 = _ok._0;
  } else {
    return _bind$17;
  }
  const _bind$18 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$6), 3, undefined, "features_wbtest.mbt:167:3-167:60@SDJM5/moonbit-dataframe");
  if (_bind$18.$tag === 1) {
    const _ok = _bind$18;
    _ok._0;
  } else {
    return _bind$18;
  }
  const _bind$19 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame17filter__not__null(df, "name");
  let _tmp$7;
  if (_bind$19.$tag === 1) {
    const _ok = _bind$19;
    _tmp$7 = _ok._0;
  } else {
    return _bind$19;
  }
  const _bind$20 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$7), 3, undefined, "features_wbtest.mbt:168:3-168:51@SDJM5/moonbit-dataframe");
  if (_bind$20.$tag === 1) {
    const _ok = _bind$20;
    _ok._0;
  } else {
    return _bind$20;
  }
  const _bind$21 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame16filter__is__null(df, "name");
  let _tmp$8;
  if (_bind$21.$tag === 1) {
    const _ok = _bind$21;
    _tmp$8 = _ok._0;
  } else {
    return _bind$21;
  }
  const _bind$22 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$8), 1, undefined, "features_wbtest.mbt:169:3-169:50@SDJM5/moonbit-dataframe");
  if (_bind$22.$tag === 1) {
    const _ok = _bind$22;
    _ok._0;
  } else {
    return _bind$22;
  }
  const _bind$23 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame16filter__contains(df, "name", "o");
  let _tmp$9;
  if (_bind$23.$tag === 1) {
    const _ok = _bind$23;
    _tmp$9 = _ok._0;
  } else {
    return _bind$23;
  }
  const _bind$24 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$9), 2, undefined, "features_wbtest.mbt:170:3-170:56@SDJM5/moonbit-dataframe");
  if (_bind$24.$tag === 1) {
    const _ok = _bind$24;
    _ok._0;
  } else {
    return _bind$24;
  }
  const _bind$25 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__in(df, "name", [_M0MP25SDJM519moonbit_2ddataframe5Value6string("Alice")]);
  let _tmp$10;
  if (_bind$25.$tag === 1) {
    const _ok = _bind$25;
    _tmp$10 = _ok._0;
  } else {
    return _bind$25;
  }
  const _bind$26 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$10), 1, undefined, "features_wbtest.mbt:171:3-171:71@SDJM5/moonbit-dataframe");
  if (_bind$26.$tag === 1) {
    const _ok = _bind$26;
    _ok._0;
  } else {
    return _bind$26;
  }
  const _bind$27 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__by(df, "age", (v) => _M0MP25SDJM519moonbit_2ddataframe5Value8is__null(v));
  let _tmp$11;
  if (_bind$27.$tag === 1) {
    const _ok = _bind$27;
    _tmp$11 = _ok._0;
  } else {
    return _bind$27;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$11), 0, undefined, "features_wbtest.mbt:172:3-172:62@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__14() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\n1\n2\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__gt(df, "a", _M0MP25SDJM519moonbit_2ddataframe5Value4null());
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$2), 0, undefined, "features_wbtest.mbt:178:3-178:57@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10filter__lt(df, "a", _M0MP25SDJM519moonbit_2ddataframe5Value4null());
  let _tmp$3;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _tmp$3 = _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_tmp$3), 0, undefined, "features_wbtest.mbt:179:3-179:57@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__15() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("x", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(1), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5)]);
  const _bind$4 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe6Series5count(s), 3, undefined, "features_wbtest.mbt:190:3-190:26@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3sum(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(9), undefined, "features_wbtest.mbt:191:3-191:36@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series4mean(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(3), undefined, "features_wbtest.mbt:192:3-192:42@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series6median(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(3), undefined, "features_wbtest.mbt:193:3-193:44@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3min(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:194:3-194:36@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3max(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), undefined, "features_wbtest.mbt:195:3-195:36@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series8variance(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(4), undefined, "features_wbtest.mbt:197:3-197:46@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3std(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(2), undefined, "features_wbtest.mbt:198:3-198:41@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__16() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("x", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(1), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4)]);
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series6median(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(2.5), undefined, "features_wbtest.mbt:209:3-209:44@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__17() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("x", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(7)]);
  const _bind$4 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series8variance(s), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:215:3-215:41@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3std(s), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:216:3-216:36@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series8variance(_M0MP25SDJM519moonbit_2ddataframe6Series3new("e", [])), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:217:3-217:60@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__18() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("c", [_M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), _M0MP25SDJM519moonbit_2ddataframe5Value6string("a")]);
  const _bind$4 = _M0FPC15debug10assert__eqGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(_M0MP25SDJM519moonbit_2ddataframe6Series6unique(s), [_M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("b")], undefined, "features_wbtest.mbt:229:3-229:66@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe6Series9n__unique(s), 2, undefined, "features_wbtest.mbt:230:3-230:29@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return _M0FPC15debug10assert__eqGRPB5ArrayGURP25SDJM519moonbit_2ddataframe5ValueiEEE(_M0MP25SDJM519moonbit_2ddataframe6Series13value__counts(s), [{ _0: _M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), _1: 3 }, { _0: _M0MP25SDJM519moonbit_2ddataframe5Value6string("b"), _1: 1 }], undefined, "features_wbtest.mbt:231:3-231:82@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__19() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("x", [_M0MP25SDJM519moonbit_2ddataframe5Value4null(), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), _M0MP25SDJM519moonbit_2ddataframe5Value3int(7), _M0MP25SDJM519moonbit_2ddataframe5Value4null()]);
  const _bind$4 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series5first(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), undefined, "features_wbtest.mbt:243:3-243:38@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series4last(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(7), undefined, "features_wbtest.mbt:244:3-244:37@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series5first(_M0MP25SDJM519moonbit_2ddataframe6Series3new("e", [_M0MP25SDJM519moonbit_2ddataframe5Value4null()])), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:245:3-245:70@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame3new(source, keys) {
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(source);
  const pairs = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      const key = _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe5ValueE(keys, (k) => {
        let c;
        _L: {
          const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(source, k);
          if (_bind$4 === undefined) {
            return _M0DTP25SDJM519moonbit_2ddataframe5Value4Null__;
          } else {
            const _Some = _bind$4;
            const _c = _Some;
            c = _c;
            break _L;
          }
        }
        return _M0MP25SDJM519moonbit_2ddataframe6Series3get(c, i);
      });
      _M0MPC15array5Array4pushGsE(pairs, { _0: key, _1: i });
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array8sort__byGURP25SDJM519moonbit_2ddataframe5ValueiiEE(pairs, (a, b) => _M0FPB7compareGRPB5ArrayGRP25SDJM519moonbit_2ddataframe5ValueEE(a._0, b._0));
  const groups = [];
  const _bind$4 = pairs.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$4) {
      const pair = pairs[_];
      if (groups.length > 0 && _M0IPC15array5ArrayPB2Eq5equalGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MPC15array5Array2atGsE(groups, groups.length - 1 | 0).key, pair._0)) {
        _M0MPC15array5Array4pushGiE(_M0MPC15array5Array2atGsE(groups, groups.length - 1 | 0).indices, pair._1);
      } else {
        _M0MPC15array5Array4pushGsE(groups, new _M0TP25SDJM519moonbit_2ddataframe5Group(pair._0, [pair._1]));
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP25SDJM519moonbit_2ddataframe16GroupedDataFrame(source, keys, groups);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame9group__by(self, keys) {
  const _bind$4 = keys.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const k = keys[_];
      if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self, k)) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, k);
        const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
        if (_bind$5.$tag === 1) {
          const _ok = _bind$5;
          _ok._0;
        } else {
          return _bind$5;
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe16GroupedDataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame3new(self, keys));
}
function _M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name, indices) {
  let col;
  _L: {
    const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(source, name);
    if (_bind$4 === undefined) {
      return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, []);
    } else {
      const _Some = _bind$4;
      const _col = _Some;
      col = _col;
      break _L;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, _M0MPC15array5Array3mapGiRP25SDJM519moonbit_2ddataframe5ValueE(indices, (i) => _M0MP25SDJM519moonbit_2ddataframe6Series3get(col, i)));
}
function _M0FP25SDJM519moonbit_2ddataframe10apply__agg(source, agg, indices) {
  let name;
  _L: {
    let name$2;
    _L$2: {
      let name$3;
      _L$3: {
        let name$4;
        _L$4: {
          let name$5;
          _L$5: {
            let name$6;
            _L$6: {
              let name$7;
              _L$7: {
                let name$8;
                _L$8: {
                  let name$9;
                  _L$9: {
                    let name$10;
                    _L$10: {
                      switch (agg.$tag) {
                        case 0: {
                          return _M0MP25SDJM519moonbit_2ddataframe5Value3int(indices.length);
                        }
                        case 1: {
                          const _CountOf = agg;
                          const _name = _CountOf._0;
                          name$10 = _name;
                          break _L$10;
                        }
                        case 2: {
                          const _NUnique = agg;
                          const _name$2 = _NUnique._0;
                          name$9 = _name$2;
                          break _L$9;
                        }
                        case 3: {
                          const _Sum = agg;
                          const _name$3 = _Sum._0;
                          name$8 = _name$3;
                          break _L$8;
                        }
                        case 4: {
                          const _Mean = agg;
                          const _name$4 = _Mean._0;
                          name$7 = _name$4;
                          break _L$7;
                        }
                        case 5: {
                          const _Median = agg;
                          const _name$5 = _Median._0;
                          name$6 = _name$5;
                          break _L$6;
                        }
                        case 6: {
                          const _StdDev = agg;
                          const _name$6 = _StdDev._0;
                          name$5 = _name$6;
                          break _L$5;
                        }
                        case 7: {
                          const _Min = agg;
                          const _name$7 = _Min._0;
                          name$4 = _name$7;
                          break _L$4;
                        }
                        case 8: {
                          const _Max = agg;
                          const _name$8 = _Max._0;
                          name$3 = _name$8;
                          break _L$3;
                        }
                        case 9: {
                          const _First = agg;
                          const _name$9 = _First._0;
                          name$2 = _name$9;
                          break _L$2;
                        }
                        default: {
                          const _Last = agg;
                          const _name$10 = _Last._0;
                          name = _name$10;
                          break _L;
                        }
                      }
                    }
                    return _M0MP25SDJM519moonbit_2ddataframe5Value3int(_M0MP25SDJM519moonbit_2ddataframe6Series5count(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$10, indices)));
                  }
                  return _M0MP25SDJM519moonbit_2ddataframe5Value3int(_M0MP25SDJM519moonbit_2ddataframe6Series9n__unique(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$9, indices)));
                }
                return _M0MP25SDJM519moonbit_2ddataframe6Series3sum(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$8, indices));
              }
              return _M0MP25SDJM519moonbit_2ddataframe6Series4mean(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$7, indices));
            }
            return _M0MP25SDJM519moonbit_2ddataframe6Series6median(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$6, indices));
          }
          return _M0MP25SDJM519moonbit_2ddataframe6Series3std(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$5, indices));
        }
        return _M0MP25SDJM519moonbit_2ddataframe6Series3min(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$4, indices));
      }
      return _M0MP25SDJM519moonbit_2ddataframe6Series3max(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$3, indices));
    }
    return _M0MP25SDJM519moonbit_2ddataframe6Series5first(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name$2, indices));
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series4last(_M0FP25SDJM519moonbit_2ddataframe11sub__series(source, name, indices));
}
function _M0MP25SDJM519moonbit_2ddataframe11Aggregation6column(self) {
  let name;
  _L: {
    switch (self.$tag) {
      case 0: {
        return undefined;
      }
      case 1: {
        const _CountOf = self;
        const _name = _CountOf._0;
        name = _name;
        break _L;
      }
      case 2: {
        const _NUnique = self;
        const _name$2 = _NUnique._0;
        name = _name$2;
        break _L;
      }
      case 3: {
        const _Sum = self;
        const _name$3 = _Sum._0;
        name = _name$3;
        break _L;
      }
      case 4: {
        const _Mean = self;
        const _name$4 = _Mean._0;
        name = _name$4;
        break _L;
      }
      case 5: {
        const _Median = self;
        const _name$5 = _Median._0;
        name = _name$5;
        break _L;
      }
      case 6: {
        const _StdDev = self;
        const _name$6 = _StdDev._0;
        name = _name$6;
        break _L;
      }
      case 7: {
        const _Min = self;
        const _name$7 = _Min._0;
        name = _name$7;
        break _L;
      }
      case 8: {
        const _Max = self;
        const _name$8 = _Max._0;
        name = _name$8;
        break _L;
      }
      case 9: {
        const _First = self;
        const _name$9 = _First._0;
        name = _name$9;
        break _L;
      }
      default: {
        const _Last = self;
        const _name$10 = _Last._0;
        name = _name$10;
        break _L;
      }
    }
  }
  return name;
}
function _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame9aggregate(self, specs) {
  const _bind$4 = specs.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const _foreach_element = specs[_];
      let agg;
      _L: {
        const _agg = _foreach_element._1;
        agg = _agg;
        break _L;
      }
      let name;
      _L$2: {
        _L$3: {
          const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe11Aggregation6column(agg);
          if (_bind$5 === undefined) {
          } else {
            const _Some = _bind$5;
            const _name = _Some;
            name = _name;
            break _L$3;
          }
          break _L$2;
        }
        if (!_M0MP25SDJM519moonbit_2ddataframe9DataFrame11has__column(self.source, name)) {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
          const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGuE(_M0MPB13StringBuilder10to__string(_string_builder));
          if (_bind$5.$tag === 1) {
            const _ok = _bind$5;
            _ok._0;
          } else {
            return _bind$5;
          }
        }
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const columns = [];
  let _tmp$3 = 0;
  while (true) {
    const j = _tmp$3;
    if (j < self.keys.length) {
      const name = _M0MPC15array5Array2atGsE(self.keys, j);
      const values = _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5GroupRP25SDJM519moonbit_2ddataframe5ValueE(self.groups, (g) => _M0MPC15array5Array2atGsE(g.key, j));
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(name, values));
      _tmp$3 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$5 = specs.length;
  let _tmp$4 = 0;
  while (true) {
    const _ = _tmp$4;
    if (_ < _bind$5) {
      const _foreach_element = specs[_];
      let out_name;
      let agg;
      _L: {
        const _out_name = _foreach_element._0;
        const _agg = _foreach_element._1;
        out_name = _out_name;
        agg = _agg;
        break _L;
      }
      const values = _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe5GroupRP25SDJM519moonbit_2ddataframe5ValueE(self.groups, (g) => _M0FP25SDJM519moonbit_2ddataframe10apply__agg(self.source, agg, g.indices));
      _M0MPC15array5Array4pushGsE(columns, _M0MP25SDJM519moonbit_2ddataframe6Series3new(out_name, values));
      _tmp$4 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(columns));
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__20() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("g,v\nA,1\nA,3\nA,5\nB,10\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9group__by(df, ["g"]);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame9aggregate(_tmp$2, [{ _0: "med", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation6Median("v") }, { _0: "sd", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation6StdDev("v") }, { _0: "nq", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation7NUnique("v") }, { _0: "f", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5First("v") }, { _0: "l", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Last("v") }]);
  let result;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    result = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "g"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("A"), undefined, "features_wbtest.mbt:260:3-260:58@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "med"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(3), undefined, "features_wbtest.mbt:261:3-261:60@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "sd"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(2), undefined, "features_wbtest.mbt:262:3-262:59@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "nq"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "features_wbtest.mbt:263:3-263:54@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "f"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:264:3-264:53@SDJM5/moonbit-dataframe");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  const _bind$12 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "l"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), undefined, "features_wbtest.mbt:265:3-265:53@SDJM5/moonbit-dataframe");
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _ok._0;
  } else {
    return _bind$12;
  }
  const _bind$13 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 1, "sd"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:267:3-267:54@SDJM5/moonbit-dataframe");
  if (_bind$13.$tag === 1) {
    const _ok = _bind$13;
    _ok._0;
  } else {
    return _bind$13;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 1, "nq"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:268:3-268:54@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame8describe(self) {
  const names = [];
  const counts = [];
  const means = [];
  const mins = [];
  const maxs = [];
  const stds = [];
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6series(self);
  const _bind$5 = _bind$4.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$5) {
      const col = _bind$4[_];
      _L: {
        const dtype = _M0MP25SDJM519moonbit_2ddataframe6Series5dtype(col);
        if (_M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe8DataTypeE(dtype, 1) && _M0IP016_24default__implPB2Eq10not__equalGRP25SDJM519moonbit_2ddataframe8DataTypeE(dtype, 2)) {
          break _L;
        }
        _M0MPC15array5Array4pushGsE(names, _M0MP25SDJM519moonbit_2ddataframe6Series4name(col));
        _M0MPC15array5Array4pushGsE(counts, _M0MP25SDJM519moonbit_2ddataframe5Value3int(_M0MP25SDJM519moonbit_2ddataframe6Series5count(col)));
        _M0MPC15array5Array4pushGsE(means, _M0MP25SDJM519moonbit_2ddataframe6Series4mean(col));
        _M0MPC15array5Array4pushGsE(mins, _M0MP25SDJM519moonbit_2ddataframe6Series3min(col));
        _M0MPC15array5Array4pushGsE(maxs, _M0MP25SDJM519moonbit_2ddataframe6Series3max(col));
        _M0MPC15array5Array4pushGsE(stds, _M0MP25SDJM519moonbit_2ddataframe6Series3std(col));
        break _L;
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame([_M0MP25SDJM519moonbit_2ddataframe6Series3new("column", _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe5ValueE(names, (name) => _M0MP25SDJM519moonbit_2ddataframe5Value6string(name))), _M0MP25SDJM519moonbit_2ddataframe6Series3new("count", counts), _M0MP25SDJM519moonbit_2ddataframe6Series3new("mean", means), _M0MP25SDJM519moonbit_2ddataframe6Series3new("min", mins), _M0MP25SDJM519moonbit_2ddataframe6Series3new("max", maxs), _M0MP25SDJM519moonbit_2ddataframe6Series3new("std", stds)]);
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__21() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,1\nBob,3\nCarol,5\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const summary = _M0MP25SDJM519moonbit_2ddataframe9DataFrame8describe(df);
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(summary), 1, undefined, "features_wbtest.mbt:275:3-275:32@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "column"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("age"), undefined, "features_wbtest.mbt:276:3-276:66@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "count"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "features_wbtest.mbt:277:3-277:58@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "mean"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(3), undefined, "features_wbtest.mbt:278:3-278:62@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "min"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:279:3-279:56@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "max"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(5), undefined, "features_wbtest.mbt:280:3-280:56@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(summary, 0, "std"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(2), undefined, "features_wbtest.mbt:281:3-281:61@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame21value__counts_2einner(self, column, normalize) {
  let col;
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, column);
  if (_bind$4 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, column);
    const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      col = _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    const _Some = _bind$4;
    const _c = _Some;
    col = _c;
  }
  const counts = _M0MP25SDJM519moonbit_2ddataframe6Series13value__counts(col);
  const total = _M0MP25SDJM519moonbit_2ddataframe6Series5count(col);
  const values = _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERP25SDJM519moonbit_2ddataframe5ValueE(counts, (pair) => pair._0);
  const measures = normalize ? _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERP25SDJM519moonbit_2ddataframe5ValueE(counts, (pair) => total === 0 ? _M0MP25SDJM519moonbit_2ddataframe5Value4null() : _M0MP25SDJM519moonbit_2ddataframe5Value6double((pair._1 + 0) / (total + 0))) : _M0MPC15array5Array3mapGURP25SDJM519moonbit_2ddataframe5ValueiERP25SDJM519moonbit_2ddataframe5ValueE(counts, (pair) => _M0MP25SDJM519moonbit_2ddataframe5Value3int(pair._1));
  const measure_name = normalize ? "proportion" : "count";
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new([_M0MP25SDJM519moonbit_2ddataframe6Series3new(column, values), _M0MP25SDJM519moonbit_2ddataframe6Series3new(measure_name, measures)]);
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__22() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("c\na\na\nb\nb\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame21value__counts_2einner(df, "c", false);
  let counts;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    counts = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(counts), ["c", "count"], undefined, "features_wbtest.mbt:288:3-288:46@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(counts, 0, "c"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("a"), undefined, "features_wbtest.mbt:289:3-289:58@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(counts, 0, "count"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "features_wbtest.mbt:290:3-290:57@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame21value__counts_2einner(df, "c", true);
  let normalized;
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    normalized = _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(normalized), ["c", "proportion"], undefined, "features_wbtest.mbt:292:3-292:55@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(normalized, 0, "proportion"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(0.5), undefined, "features_wbtest.mbt:293:3-293:71@SDJM5/moonbit-dataframe");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(normalized, 1, "proportion"), _M0MP25SDJM519moonbit_2ddataframe5Value6double(0.5), undefined, "features_wbtest.mbt:294:3-294:71@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__23() {
  const path = "test_dataframe_roundtrip.csv";
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n2,y\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame18write__csv_2einner(df, path, 44);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9read__csv(path, undefined);
  let back;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    back = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(back), ["a", "b"], undefined, "features_wbtest.mbt:303:3-303:40@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(back), 2, undefined, "features_wbtest.mbt:304:3-304:29@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(back, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:305:3-305:51@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(back, 1, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("y"), undefined, "features_wbtest.mbt:306:3-306:56@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  let _try_err;
  _L: {
    const _bind$11 = _M0FP311moonbitlang1x2fs12remove__file(path);
    if (_bind$11.$tag === 1) {
      const _ok = _bind$11;
      _ok._0;
    } else {
      const _err = _bind$11;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__24() {
  const path = "test_dataframe_roundtrip.json";
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n2,y\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame11write__json(df, path);
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10read__json(path);
  let back;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    back = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(back), ["a", "b"], undefined, "features_wbtest.mbt:318:3-318:40@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(back, 1, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "features_wbtest.mbt:319:3-319:51@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(back, 0, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("x"), undefined, "features_wbtest.mbt:320:3-320:56@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  let _try_err;
  _L: {
    const _bind$10 = _M0FP311moonbitlang1x2fs12remove__file(path);
    if (_bind$10.$tag === 1) {
      const _ok = _bind$10;
      _ok._0;
    } else {
      const _err = _bind$10;
      _try_err = _err._0;
      break _L;
    }
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
  return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__25() {
  const opts = _M0MP25SDJM519moonbit_2ddataframe11ReadOptions3new(false, 59, false, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__);
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("1;Alice\n2;Bob\n", opts);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(df), ["col0", "col1"], undefined, "features_wbtest.mbt:334:3-334:44@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "col0"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("1"), undefined, "features_wbtest.mbt:336:3-336:57@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 1, "col1"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Bob"), undefined, "features_wbtest.mbt:337:3-337:59@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__26() {
  const _bind$4 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe11ReadOptionsE(_M0MP25SDJM519moonbit_2ddataframe11ReadOptions3new(-1, -1, -1, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__), _M0IP25SDJM519moonbit_2ddataframe11ReadOptionsPB7Default7default(), undefined, "features_wbtest.mbt:342:3-342:56@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n", _M0MP25SDJM519moonbit_2ddataframe11ReadOptions3new(-1, -1, -1, _M0DTPC16option6OptionGRPB5ArrayGsEE4None__));
  let df;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    df = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(df), ["a", "b"], undefined, "features_wbtest.mbt:344:3-344:38@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "features_wbtest.mbt:345:3-345:49@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__27() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\nNA\n", _M0MP25SDJM519moonbit_2ddataframe11ReadOptions11new_2einner(true, 44, true, []));
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("NA"), undefined, "features_wbtest.mbt:355:3-355:55@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\nNA\n", _M0MP25SDJM519moonbit_2ddataframe11ReadOptions11new_2einner(true, 44, true, ["NA"]));
  let with_na;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    with_na = _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(with_na, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "features_wbtest.mbt:361:3-361:54@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe52____test__66656174757265735f7762746573742e6d6274__28() {
  let outcome;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9read__csv("definitely_not_here_12345.csv", undefined);
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L$2;
      }
      outcome = "no error";
      break _L;
    }
    outcome = "error";
  }
  return _M0FPC15debug10assert__eqGsE(outcome, "error", undefined, "features_wbtest.mbt:372:3-372:30@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe14DataFrameError7message(self) {
  const _DataFrameError = self;
  const _msg = _DataFrameError._0;
  return _msg;
}
function _M0IP25SDJM519moonbit_2ddataframe14DataFrameErrorPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, "DataFrameError: ");
  logger.method_table.method_0(logger.self, _M0MP25SDJM519moonbit_2ddataframe14DataFrameError7message(self));
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__0() {
  const _bind$4 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("42", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value3int(42), undefined, "dataframe_wbtest.mbt:3:3-6:4@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("-7", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value3int(-7), undefined, "dataframe_wbtest.mbt:7:3-10:4@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("3.14", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value6double(3.14), undefined, "dataframe_wbtest.mbt:11:3-14:4@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("true", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value7boolean(true), undefined, "dataframe_wbtest.mbt:15:3-18:4@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("hello", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value6string("hello"), undefined, "dataframe_wbtest.mbt:19:3-22:4@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("007", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value6string("007"), undefined, "dataframe_wbtest.mbt:24:3-27:4@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("", true, [""]), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "dataframe_wbtest.mbt:28:3-28:81@SDJM5/moonbit-dataframe");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe5Value5parse("NA", true, ["", "NA"]), _M0MP25SDJM519moonbit_2ddataframe5Value4null(), undefined, "dataframe_wbtest.mbt:29:3-32:4@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__1() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,30\nBob,25\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(df), ["name", "age"], undefined, "dataframe_wbtest.mbt:38:3-38:43@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(df), 2, undefined, "dataframe_wbtest.mbt:39:3-39:27@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Alice"), undefined, "dataframe_wbtest.mbt:40:3-40:61@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "age"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(30), undefined, "dataframe_wbtest.mbt:41:3-41:52@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 1, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Bob"), undefined, "dataframe_wbtest.mbt:42:3-42:59@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__2() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("1,2\n3,4\n", new _M0TP25SDJM519moonbit_2ddataframe11ReadOptions(false, 44, true, [""]));
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(df), ["col0", "col1"], undefined, "dataframe_wbtest.mbt:53:3-53:44@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(df), 2, undefined, "dataframe_wbtest.mbt:54:3-54:27@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "col0"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "dataframe_wbtest.mbt:55:3-55:52@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 1, "col1"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4), undefined, "dataframe_wbtest.mbt:56:3-56:52@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__3() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,note\nAlice,\"hello, world\"\nBob,\"line1\nline2\"\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "note"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("hello, world"), undefined, "dataframe_wbtest.mbt:64:3-64:68@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 1, "note"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("line1\nline2"), undefined, "dataframe_wbtest.mbt:65:3-65:68@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__4() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,x\n2,y\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0FPC15debug10assert__eqGsE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame15to__csv_2einner(df, 44), "a,b\n1,x\n2,y\n", undefined, "dataframe_wbtest.mbt:71:3-71:44@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame3row(self, i) {
  return new _M0TP25SDJM519moonbit_2ddataframe3Row(self, i);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame6filter(self, pred) {
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  const indices = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      if (pred(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3row(self, i))) {
        _M0MPC15array5Array4pushGiE(indices, i);
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, indices);
}
function _M0MP25SDJM519moonbit_2ddataframe3Row3get(self, column) {
  let s;
  _L: {
    const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self.df, column);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _s = _Some;
      s = _s;
      break _L;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe6Series3get(s, self.index);
}
function _M0MP25SDJM519moonbit_2ddataframe3Row8get__int(self, column) {
  let v;
  _L: {
    const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe3Row3get(self, column);
    if (_bind$4 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$4;
      const _v = _Some;
      v = _v;
      break _L;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe5Value7as__int(v);
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__5() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,30\nBob,25\nCarol,40\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const adults = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6filter(df, (r) => {
    let age;
    _L: {
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe3Row8get__int(r, "age");
      if (_bind$5 === undefined) {
        return false;
      } else {
        const _Some = _bind$5;
        const _age = _Some;
        age = _age;
        break _L;
      }
    }
    return age >= 30;
  });
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(adults), 2, undefined, "dataframe_wbtest.mbt:83:3-83:31@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(adults, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Alice"), undefined, "dataframe_wbtest.mbt:84:3-84:65@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(adults, 1, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Carol"), undefined, "dataframe_wbtest.mbt:85:3-85:65@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame4drop(self, names) {
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(_M0MPC15array5Array6filterGRP25SDJM519moonbit_2ddataframe6SeriesE(self.columns, (s) => !_M0MPC15array5Array8containsGsE(names, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s))));
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame6select(self, names) {
  const _bind$4 = _M0MPC15array5Array3mapGsRP25SDJM519moonbit_2ddataframe6SeriesEHRP25SDJM519moonbit_2ddataframe14DataFrameError(names, (n) => {
    let s;
    _L: {
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, n);
      if (_bind$5 === undefined) {
        const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder, n);
        return _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
      } else {
        const _Some = _bind$5;
        const _s = _Some;
        s = _s;
        break _L;
      }
    }
    return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(s);
  });
  let _tmp$2;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _tmp$2 = _ok._0;
  } else {
    return _bind$4;
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new(_tmp$2);
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__6() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b,c\n1,2,3\n4,5,6\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6select(df, ["c", "a"]);
  let sel;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    sel = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(sel), ["c", "a"], undefined, "dataframe_wbtest.mbt:92:3-92:39@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(sel, 0, "c"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "dataframe_wbtest.mbt:93:3-93:50@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const dropped = _M0MP25SDJM519moonbit_2ddataframe9DataFrame4drop(df, ["b"]);
  return _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(dropped), ["a", "c"], undefined, "dataframe_wbtest.mbt:95:3-95:43@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame16sort__by_2einner(self, name, ascending) {
  let col;
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name);
  if (_bind$4 === undefined) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(16);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "no such column: ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
    const _bind$5 = _M0FP25SDJM519moonbit_2ddataframe5errorGRP25SDJM519moonbit_2ddataframe6SeriesE(_M0MPB13StringBuilder10to__string(_string_builder));
    if (_bind$5.$tag === 1) {
      const _ok = _bind$5;
      col = _ok._0;
    } else {
      return _bind$5;
    }
  } else {
    const _Some = _bind$4;
    const _c = _Some;
    col = _c;
  }
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  const indices = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < n) {
      _M0MPC15array5Array4pushGiE(indices, i);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const factor = ascending ? 1 : -1;
  _M0MPC15array5Array8sort__byGiE(indices, (a, b) => Math.imul(factor, _M0IP25SDJM519moonbit_2ddataframe5ValuePB7Compare7compare(_M0MP25SDJM519moonbit_2ddataframe6Series3get(col, a), _M0MP25SDJM519moonbit_2ddataframe6Series3get(col, b))) | 0);
  return new _M0DTPC16result6ResultGRP25SDJM519moonbit_2ddataframe9DataFrameRP25SDJM519moonbit_2ddataframe14DataFrameErrorE2Ok(_M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, indices));
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__7() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,30\nBob,25\nCarol,40\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame16sort__by_2einner(df, "age", true);
  let sorted;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    sorted = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(sorted, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Bob"), undefined, "dataframe_wbtest.mbt:102:3-102:63@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(sorted, 2, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Carol"), undefined, "dataframe_wbtest.mbt:103:3-103:65@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame16sort__by_2einner(df, "age", false);
  let desc;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    desc = _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(desc, 0, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Carol"), undefined, "dataframe_wbtest.mbt:105:3-105:63@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(desc, 2, "name"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("Bob"), undefined, "dataframe_wbtest.mbt:106:3-106:61@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__8() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\n1\n2\n3\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame11map__column(df, "a", (v) => {
    let i;
    _L: {
      if (v.$tag === 1) {
        const _Int = v;
        const _i = _Int._0;
        i = _i;
        break _L;
      } else {
        return v;
      }
    }
    return _M0MP25SDJM519moonbit_2ddataframe5Value3int(Math.imul(i, 2) | 0);
  });
  let doubled;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    doubled = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(doubled, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "dataframe_wbtest.mbt:118:3-118:54@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(doubled, 2, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(6), undefined, "dataframe_wbtest.mbt:119:3-119:54@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame12with__column(df, _M0MP25SDJM519moonbit_2ddataframe6Series3new("b", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(10), _M0MP25SDJM519moonbit_2ddataframe5Value3int(20), _M0MP25SDJM519moonbit_2ddataframe5Value3int(30)]));
  let with_new;
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    with_new = _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(with_new), ["a", "b"], undefined, "dataframe_wbtest.mbt:123:3-123:44@SDJM5/moonbit-dataframe");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(with_new, 1, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(20), undefined, "dataframe_wbtest.mbt:124:3-124:56@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame6rename(self, mapping) {
  const cols = _M0MPC15array5Array3mapGRP25SDJM519moonbit_2ddataframe6SeriesRP25SDJM519moonbit_2ddataframe6SeriesE(self.columns, (s) => {
    let new_;
    _L: {
      const _bind$4 = _M0MPB3Map3getGssE(mapping, _M0MP25SDJM519moonbit_2ddataframe6Series4name(s));
      if (_bind$4 === undefined) {
        return s;
      } else {
        const _Some = _bind$4;
        const _new = _Some;
        new_ = _new;
        break _L;
      }
    }
    return _M0MP25SDJM519moonbit_2ddataframe6Series3new(new_, _M0MP25SDJM519moonbit_2ddataframe6Series9to__array(s));
  });
  return new _M0TP25SDJM519moonbit_2ddataframe9DataFrame(cols);
}
function _M0FP25SDJM519moonbit_2ddataframe53____test__646174616672616d655f7762746573742e6d6274__9() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a,b\n1,2\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = [{ _0: "a", _1: "x" }];
  const r = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6rename(df, _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$5, 0, 1), undefined));
  return _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(r), ["x", "b"], undefined, "dataframe_wbtest.mbt:131:3-131:37@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame5slice(self, start, end) {
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  let s;
  let v;
  _L: {
    _L$2: {
      if (start === undefined) {
        s = 0;
      } else {
        const _Some = start;
        const _v = _Some;
        v = _v;
        break _L$2;
      }
      break _L;
    }
    s = v < 0 ? 0 : v;
  }
  let e;
  let v$2;
  _L$2: {
    _L$3: {
      if (end === undefined) {
        e = n;
      } else {
        const _Some = end;
        const _v = _Some;
        v$2 = _v;
        break _L$3;
      }
      break _L$2;
    }
    e = v$2 > n ? n : v$2;
  }
  const indices = [];
  let _tmp$2 = s;
  while (true) {
    const i = _tmp$2;
    if (i < e) {
      _M0MPC15array5Array4pushGiE(indices, i);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame10take__rows(self, indices);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12head_2einner(self, n) {
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame5slice(self, undefined, n);
}
function _M0MP25SDJM519moonbit_2ddataframe9DataFrame12tail_2einner(self, n) {
  const start = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self) - n | 0;
  return _M0MP25SDJM519moonbit_2ddataframe9DataFrame5slice(self, start < 0 ? 0 : start, undefined);
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__10() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\n1\n2\n3\n4\n5\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_M0MP25SDJM519moonbit_2ddataframe9DataFrame12head_2einner(df, 2)), 2, undefined, "dataframe_wbtest.mbt:137:3-137:37@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(_M0MP25SDJM519moonbit_2ddataframe9DataFrame12head_2einner(df, 2), 1, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "dataframe_wbtest.mbt:138:3-138:59@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(_M0MP25SDJM519moonbit_2ddataframe9DataFrame12tail_2einner(df, 2), 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(4), undefined, "dataframe_wbtest.mbt:139:3-139:59@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5slice(df, 1, 3)), 2, undefined, "dataframe_wbtest.mbt:140:3-140:49@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5slice(df, 1, 3), 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "dataframe_wbtest.mbt:141:3-141:71@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__11() {
  const s = _M0MP25SDJM519moonbit_2ddataframe6Series3new("x", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(1), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), _M0MP25SDJM519moonbit_2ddataframe5Value4null()]);
  const _bind$4 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3sum(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(6), undefined, "dataframe_wbtest.mbt:152:3-152:36@SDJM5/moonbit-dataframe");
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series4mean(s), _M0MP25SDJM519moonbit_2ddataframe5Value6double(2), undefined, "dataframe_wbtest.mbt:153:3-153:42@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3min(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "dataframe_wbtest.mbt:154:3-154:36@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe6Series3max(s), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "dataframe_wbtest.mbt:155:3-155:36@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe6Series5count(s), 3, undefined, "dataframe_wbtest.mbt:156:3-156:26@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__12() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("city,sales\nA,10\nB,20\nA,30\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9group__by(df, ["city"]);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame9aggregate(_tmp$2, [{ _0: "total", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Sum("sales") }, { _0: "n", _1: _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count__ }, { _0: "valid", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation7CountOf("sales") }, { _0: "avg", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation4Mean("sales") }, { _0: "lo", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Min("sales") }, { _0: "hi", _1: new _M0DTP25SDJM519moonbit_2ddataframe11Aggregation3Max("sales") }]);
  let result;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    result = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame3new([_M0MP25SDJM519moonbit_2ddataframe6Series3new("city", [_M0MP25SDJM519moonbit_2ddataframe5Value6string("A"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("B")]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("total", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(40), _M0MP25SDJM519moonbit_2ddataframe5Value3int(20)]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("n", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(2), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1)]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("valid", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(2), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1)]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("avg", [_M0MP25SDJM519moonbit_2ddataframe5Value6double(20), _M0MP25SDJM519moonbit_2ddataframe5Value6double(20)]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("lo", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(10), _M0MP25SDJM519moonbit_2ddataframe5Value3int(20)]), _M0MP25SDJM519moonbit_2ddataframe6Series3new("hi", [_M0MP25SDJM519moonbit_2ddataframe5Value3int(30), _M0MP25SDJM519moonbit_2ddataframe5Value3int(20)])]);
  let expected;
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    expected = _ok._0;
  } else {
    return _bind$7;
  }
  return _M0FPC15debug10assert__eqGRP25SDJM519moonbit_2ddataframe9DataFrameE(result, expected, undefined, "dataframe_wbtest.mbt:181:3-181:30@SDJM5/moonbit-dataframe");
}
function _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame5count(self) {
  return _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame9aggregate(self, [{ _0: "count", _1: _M0DTP25SDJM519moonbit_2ddataframe11Aggregation5Count__ }]);
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__13() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("city\nA\nA\nB\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9group__by(df, ["city"]);
  let _tmp$2;
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _tmp$2 = _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0MP25SDJM519moonbit_2ddataframe16GroupedDataFrame5count(_tmp$2);
  let result;
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    result = _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "city"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("A"), undefined, "dataframe_wbtest.mbt:188:3-188:61@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 0, "count"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "dataframe_wbtest.mbt:189:3-189:57@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(result, 1, "count"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "dataframe_wbtest.mbt:190:3-190:57@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__14() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10from__json("[{\"a\":1,\"b\":\"x\"},{\"a\":2,\"b\":\"y\"}]");
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGRPB5ArrayGsEE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(df), ["a", "b"], undefined, "dataframe_wbtest.mbt:196:3-196:38@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(1), undefined, "dataframe_wbtest.mbt:197:3-197:49@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 0, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value6string("x"), undefined, "dataframe_wbtest.mbt:198:3-198:54@SDJM5/moonbit-dataframe");
  if (_bind$7.$tag === 1) {
    const _ok = _bind$7;
    _ok._0;
  } else {
    return _bind$7;
  }
  const _bind$8 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 1, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(2), undefined, "dataframe_wbtest.mbt:199:3-199:49@SDJM5/moonbit-dataframe");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame8to__json(df);
  const _bind$10 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(_bind$9, 0, _bind$9.length), 1024);
  let _tmp$2;
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _tmp$2 = _ok._0;
  } else {
    return _bind$10;
  }
  const _tmp$3 = _tmp$2;
  const _bind$11 = "[{\"a\":1,\"b\":\"x\"},{\"a\":2,\"b\":\"y\"}]";
  const _bind$12 = _M0FPC14json13parse_2einner(new _M0TPC16string10StringView(_bind$11, 0, _bind$11.length), 1024);
  let _tmp$4;
  if (_bind$12.$tag === 1) {
    const _ok = _bind$12;
    _tmp$4 = _ok._0;
  } else {
    return _bind$12;
  }
  return _M0FPC15debug10assert__eqGRPB4JsonE(_tmp$3, _tmp$4, undefined, "dataframe_wbtest.mbt:201:3-204:4@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__15() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame10from__json("{\"a\":[1,2,3],\"b\":[4,5,6]}");
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const _bind$5 = _M0FPC15debug10assert__eqGiE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(df), 3, undefined, "dataframe_wbtest.mbt:210:3-210:27@SDJM5/moonbit-dataframe");
  if (_bind$5.$tag === 1) {
    const _ok = _bind$5;
    _ok._0;
  } else {
    return _bind$5;
  }
  const _bind$6 = _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 2, "a"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(3), undefined, "dataframe_wbtest.mbt:211:3-211:49@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  return _M0FPC15debug10assert__eqGORP25SDJM519moonbit_2ddataframe5ValueE(_M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(df, 2, "b"), _M0MP25SDJM519moonbit_2ddataframe5Value3int(6), undefined, "dataframe_wbtest.mbt:212:3-212:49@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__16() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("a\n1\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  let outcome;
  let _try_err;
  _L: {
    _L$2: {
      const _bind$5 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6select(df, ["b"]);
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L$2;
      }
      outcome = "no error";
      break _L;
    }
    outcome = "error";
  }
  return _M0FPC15debug10assert__eqGsE(outcome, "error", undefined, "dataframe_wbtest.mbt:224:3-224:30@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe54____test__646174616672616d655f7762746573742e6d6274__17() {
  const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame9from__csv("name,age\nAlice,30\n", undefined);
  let df;
  if (_bind$4.$tag === 1) {
    const _ok = _bind$4;
    df = _ok._0;
  } else {
    return _bind$4;
  }
  const s = _M0IP016_24default__implPB4Show10to__stringGRP25SDJM519moonbit_2ddataframe9DataFrameE(df);
  const _bind$5 = "name";
  const _bind$6 = _M0FPB12assert__true(_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)), undefined, "dataframe_wbtest.mbt:231:3-231:34@SDJM5/moonbit-dataframe");
  if (_bind$6.$tag === 1) {
    const _ok = _bind$6;
    _ok._0;
  } else {
    return _bind$6;
  }
  const _bind$7 = "Alice";
  return _M0FPB12assert__true(_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length)), undefined, "dataframe_wbtest.mbt:232:3-232:35@SDJM5/moonbit-dataframe");
}
function _M0FP25SDJM519moonbit_2ddataframe13display__cell(v) {
  return _M0MP25SDJM519moonbit_2ddataframe5Value8to__text(v);
}
function _M0IP25SDJM519moonbit_2ddataframe9DataFramePB4Show6output(self, logger) {
  const names = _M0MP25SDJM519moonbit_2ddataframe9DataFrame7columns(self);
  const n = _M0MP25SDJM519moonbit_2ddataframe9DataFrame5nrows(self);
  if (names.length === 0) {
    logger.method_table.method_0(logger.self, "(empty DataFrame)");
    return undefined;
  }
  const widths = _M0MPC15array5Array3mapGsiE(names, (name) => {
    const w = new _M0TPB8MutLocalGiE(name.length);
    let col;
    _L: {
      _L$2: {
        const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame6column(self, name);
        if (_bind$4 === undefined) {
        } else {
          const _Some = _bind$4;
          const _col = _Some;
          col = _col;
          break _L$2;
        }
        break _L;
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < n) {
          const len = _M0FP25SDJM519moonbit_2ddataframe13display__cell(_M0MP25SDJM519moonbit_2ddataframe6Series3get(col, i)).length;
          if (len > w.val) {
            w.val = len;
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return w.val;
  });
  let _tmp$2 = 0;
  while (true) {
    const j = _tmp$2;
    if (j < names.length) {
      logger.method_table.method_0(logger.self, _M0MPC15array5Array2atGsE(names, j));
      let _tmp$3 = 0;
      while (true) {
        const _k = _tmp$3;
        if (_k < (_M0MPC15array5Array2atGiE(widths, j) - _M0MPC15array5Array2atGsE(names, j).length | 0)) {
          logger.method_table.method_3(logger.self, 32);
          _tmp$3 = _k + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      logger.method_table.method_0(logger.self, "   ");
      _tmp$2 = j + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  logger.method_table.method_3(logger.self, 10);
  let _tmp$3 = 0;
  while (true) {
    const i = _tmp$3;
    if (i < n) {
      let _tmp$4 = 0;
      while (true) {
        const j = _tmp$4;
        if (j < names.length) {
          let cell;
          let v;
          _L: {
            _L$2: {
              const _bind$4 = _M0MP25SDJM519moonbit_2ddataframe9DataFrame3get(self, i, _M0MPC15array5Array2atGsE(names, j));
              if (_bind$4 === undefined) {
                cell = "";
              } else {
                const _Some = _bind$4;
                const _v = _Some;
                v = _v;
                break _L$2;
              }
              break _L;
            }
            cell = _M0FP25SDJM519moonbit_2ddataframe13display__cell(v);
          }
          logger.method_table.method_0(logger.self, cell);
          let _tmp$5 = 0;
          while (true) {
            const _k = _tmp$5;
            if (_k < (_M0MPC15array5Array2atGiE(widths, j) - cell.length | 0)) {
              logger.method_table.method_3(logger.self, 32);
              _tmp$5 = _k + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          logger.method_table.method_0(logger.self, "   ");
          _tmp$4 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      logger.method_table.method_3(logger.self, 10);
      _tmp$3 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP016_24default__implP25SDJM519moonbit_2ddataframe28MoonBit__Async__Test__Driver17run__async__testsGRP25SDJM519moonbit_2ddataframe34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5, _discard_$6) {
  return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP25SDJM519moonbit_2ddataframe45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP25SDJM519moonbit_2ddataframe42moonbit__test__driver__internal__js__catch(() => {
    let _try_err;
    _L: {
      const _bind$4 = f();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _ok._0;
      } else {
        const _err = _bind$4;
        _try_err = _err._0;
        break _L;
      }
      on_ok();
      return;
    }
    const err = _try_err;
    on_err(err);
  }, (err_str) => {
    on_err(new _M0DTPC15error5Error97SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP25SDJM519moonbit_2ddataframe41MoonBit__Test__Driver__Internal__No__ArgsP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_start, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$4 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP25SDJM519moonbit_2ddataframe48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$4;
      const _index_map = _Some;
      index_map = _index_map;
      break _L;
    }
  }
  let f;
  let attrs;
  _L$2: {
    const _bind$4 = _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(index_map, index);
    if (_bind$4 === undefined) {
      return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$4;
      const _x = _Some;
      const _f = _x._0;
      const _attrs = _x._1;
      f = _f;
      attrs = _attrs;
      break _L$2;
    }
  }
  let name;
  if (attrs.length >= 1) {
    const _name = attrs[0];
    name = _name;
  } else {
    name = "";
  }
  handle_start();
  _M0FP25SDJM519moonbit_2ddataframe45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP25SDJM519moonbit_2ddataframe33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP25SDJM519moonbit_2ddataframe29moonbit__test__driver__finish() {}
function _M0FP25SDJM519moonbit_2ddataframe44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
  const handle_start = () => {
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(33);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"start\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const handle_result = (_testname, message, skipped) => {
    if (!skipped && false) {
    }
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    const message$2 = _M0MPC16string6String14escape_2einner(message, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(45);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{\"type\":\"result\",\"file\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, file_name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"index\":");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ",\"message\":");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, message$2);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "}");
    _M0FPB7printlnGsE(_M0MPB13StringBuilder10to__string(_string_builder));
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const error_to_string = (err) => {
    let e;
    _L: {
      switch (err.$tag) {
        case 0: {
          const _Failure = err;
          const _e = _Failure._0;
          return _e;
        }
        case 10: {
          const _InspectError = err;
          const _e$2 = _InspectError._0;
          return _e$2;
        }
        case 11: {
          const _SnapshotError = err;
          const _e$3 = _SnapshotError._0;
          return _e$3;
        }
        case 9: {
          const _MoonBitTestDriverInternalJsError = err;
          const _e$4 = _MoonBitTestDriverInternalJsError._0;
          return _e$4;
        }
        default: {
          e = err;
          break _L;
        }
      }
    }
    return _M0FP15Error10to__string(e);
  };
  let _try_err;
  _L: {
    let _tmp$2;
    const _bind$4 = _M0IP25SDJM519moonbit_2ddataframe41MoonBit__Test__Driver__Internal__No__ArgsP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_start, handle_result, error_to_string);
    let _tmp$3;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      _tmp$3 = _ok._0;
    } else {
      const _err = _bind$4;
      _try_err = _err._0;
      break _L;
    }
    if (_tmp$3) {
      _tmp$2 = true;
    } else {
      let _tmp$4;
      const _bind$5 = _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
      let _tmp$5;
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _tmp$5 = _ok._0;
      } else {
        const _err = _bind$5;
        _try_err = _err._0;
        break _L;
      }
      if (_tmp$5) {
        _tmp$4 = true;
      } else {
        let _tmp$6;
        const _bind$6 = _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
        let _tmp$7;
        if (_bind$6.$tag === 1) {
          const _ok = _bind$6;
          _tmp$7 = _ok._0;
        } else {
          const _err = _bind$6;
          _try_err = _err._0;
          break _L;
        }
        if (_tmp$7) {
          _tmp$6 = true;
        } else {
          let _tmp$8;
          const _bind$7 = _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
          let _tmp$9;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _tmp$9 = _ok._0;
          } else {
            const _err = _bind$7;
            _try_err = _err._0;
            break _L;
          }
          if (_tmp$9) {
            _tmp$8 = true;
          } else {
            const _bind$8 = _M0IP016_24default__implP25SDJM519moonbit_2ddataframe21MoonBit__Test__Driver9run__testGRP25SDJM519moonbit_2ddataframe50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_start, handle_result, error_to_string);
            let _tmp$10;
            if (_bind$8.$tag === 1) {
              const _ok = _bind$8;
              _tmp$10 = _ok._0;
            } else {
              const _err = _bind$8;
              _try_err = _err._0;
              break _L;
            }
            _tmp$8 = _tmp$10;
          }
          _tmp$6 = _tmp$8;
        }
        _tmp$4 = _tmp$6;
      }
      _tmp$2 = _tmp$4;
    }
    if (!_tmp$2) {
      _try_err = new _M0DTPC15error5Error99SDJM5_2fmoonbit_2ddataframe_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
      break _L;
    } else {
      return;
    }
  }
  const err = _try_err;
  let name;
  _L$2: {
    const _MoonBitTestDriverInternalSkipTest = err;
    const _name = _MoonBitTestDriverInternalSkipTest._0;
    name = _name;
    break _L$2;
  }
  handle_result(name, "skipped test", true);
}
function _M0FP25SDJM519moonbit_2ddataframe40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$4 = 0;
  const _bind$5 = tests.length;
  let _tmp$2 = _bind$4;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$5) {
      const entry = i >>> 0 < tests.length ? tests[i] : $oob();
      _M0FP25SDJM519moonbit_2ddataframe44moonbit__test__driver__internal__do__execute(async_tests, _M0MP25SDJM519moonbit_2ddataframe34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP25SDJM519moonbit_2ddataframe34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP25SDJM519moonbit_2ddataframe28MoonBit__Async__Test__Driver17run__async__testsGRP25SDJM519moonbit_2ddataframe34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP25SDJM519moonbit_2ddataframe38moonbit__test__driver__js__parse__args();
  _M0FP25SDJM519moonbit_2ddataframe40moonbit__test__driver__internal__execute(test_params);
  _M0FP25SDJM519moonbit_2ddataframe29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP25SDJM519moonbit_2ddataframe29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP25SDJM519moonbit_2ddataframe40moonbit__test__driver__internal__execute;
//# sourceMappingURL=moonbit-dataframe.whitebox_test.js.map
