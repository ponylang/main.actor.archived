# Builtin package

The builtin package is home to the following standard library members:

1. Types the compiler needs to know exist, such as None.
2. Types with "magic" internal workings that must be supplied directly by the
compiler, such as U32.
3. Any types needed by others in builtin.

The public types that are defined in this package will always be in scope for
every Pony source file. For details on specific packages, see their individual
entity entries.


## Public Types

* [primitive U8](builtin-U8.md)
* [primitive U16](builtin-U16.md)
* [primitive U32](builtin-U32.md)
* [primitive U64](builtin-U64.md)
* [primitive ULong](builtin-ULong.md)
* [primitive USize](builtin-USize.md)
* [primitive U128](builtin-U128.md)
* [type Unsigned](builtin-Unsigned.md)
* [interface Stringable](builtin-Stringable.md)
* [class String](builtin-String.md)
* [class StringBytes](builtin-StringBytes.md)
* [class StringRunes](builtin-StringRunes.md)
* [interface InputNotify](builtin-InputNotify.md)
* [interface InputStream](builtin-InputStream.md)
* [actor Stdin](builtin-Stdin.md)
* [type ByteSeq](builtin-ByteSeq.md)
* [interface ByteSeqIter](builtin-ByteSeqIter.md)
* [interface OutStream](builtin-OutStream.md)
* [actor StdStream](builtin-StdStream.md)
* [interface SourceLoc](builtin-SourceLoc.md)
* [primitive I8](builtin-I8.md)
* [primitive I16](builtin-I16.md)
* [primitive I32](builtin-I32.md)
* [primitive I64](builtin-I64.md)
* [primitive ILong](builtin-ILong.md)
* [primitive ISize](builtin-ISize.md)
* [primitive I128](builtin-I128.md)
* [type Signed](builtin-Signed.md)
* [interface Seq](builtin-Seq.md)
* [trait Real](builtin-Real.md)
* [trait Integer](builtin-Integer.md)
* [trait SignedInteger](builtin-SignedInteger.md)
* [trait UnsignedInteger](builtin-UnsignedInteger.md)
* [trait FloatingPoint](builtin-FloatingPoint.md)
* [type Number](builtin-Number.md)
* [type Int](builtin-Int.md)
* [interface ReadSeq](builtin-ReadSeq.md)
* [interface ReadElement](builtin-ReadElement.md)
* [struct Pointer](builtin-Pointer.md)
* [primitive Platform](builtin-Platform.md)
* [primitive None](builtin-None.md)
* [struct MaybePointer](builtin-MaybePointer.md)
* [interface Iterator](builtin-Iterator.md)
* [primitive F32](builtin-F32.md)
* [primitive F64](builtin-F64.md)
* [type Float](builtin-Float.md)
* [class Env](builtin-Env.md)
* [primitive DoNotOptimise](builtin-DoNotOptimise.md)
* [interface DisposableActor](builtin-DisposableActor.md)
* [primitive Less](builtin-Less.md)
* [primitive Equal](builtin-Equal.md)
* [primitive Greater](builtin-Greater.md)
* [type Compare](builtin-Compare.md)
* [interface HasEq](builtin-HasEq.md)
* [interface Equatable](builtin-Equatable.md)
* [interface Comparable](builtin-Comparable.md)
* [primitive Bool](builtin-Bool.md)
* [type AsioEventID](builtin-AsioEventID.md)
* [interface AsioEventNotify](builtin-AsioEventNotify.md)
* [primitive AsioEvent](builtin-AsioEvent.md)
* [class Array](builtin-Array.md)
* [class ArrayKeys](builtin-ArrayKeys.md)
* [class ArrayValues](builtin-ArrayValues.md)
* [class ArrayPairs](builtin-ArrayPairs.md)
* [interface Any](builtin-Any.md)
* [primitive AmbientAuth](builtin-AmbientAuth.md)


## Private Types

* [primitive _UTF32Encoder](builtin-_UTF32Encoder.md)
* [trait _ArithmeticConvertible](builtin-_ArithmeticConvertible.md)
* [primitive _ToString](builtin-_ToString.md)
* [primitive _SignedArithmetic](builtin-_SignedArithmetic.md)
* [primitive _SignedUnsafeArithmetic](builtin-_SignedUnsafeArithmetic.md)
* [primitive _UnsignedCheckedArithmetic](builtin-_UnsignedCheckedArithmetic.md)
* [primitive _SignedCheckedArithmetic](builtin-_SignedCheckedArithmetic.md)
* [trait _PartialArithmetic](builtin-_PartialArithmetic.md)
* [primitive _UnsignedPartialArithmetic](builtin-_UnsignedPartialArithmetic.md)
* [primitive _SignedPartialArithmetic](builtin-_SignedPartialArithmetic.md)
