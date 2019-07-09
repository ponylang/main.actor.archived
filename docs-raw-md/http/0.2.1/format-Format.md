# Format
<span class="source-link">[[Source]](src/format/format.md#L37)</span>

Provides functions for generating formatted strings.

* fmt. Format to use.
* prefix. Prefix to use.
* prec. Precision to use. The exact meaning of this depends on the type,
but is generally the number of characters used for all, or part, of the
string. A value of -1 indicates that the default for the type should be
used.
* width. The minimum number of characters that will be in the produced
string. If necessary the string will be padded with the fill character to
make it long enough.
*align. Specify whether fill characters should be added at the beginning or
end of the generated string, or both.
*fill: The character to pad a string with if is is shorter than width.


```pony
primitive val Format
```

## Constructors

### create
<span class="source-link">[[Source]](src/format/format.md#L37)</span>


```pony
new val create()
: Format val^
```

#### Returns

* [Format](format-Format.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/format/format.md#L54)</span>


```pony
fun box apply(
  str: String val,
  fmt: FormatDefault val = reference,
  prefix: PrefixDefault val = reference,
  prec: USize val = call,
  width: USize val = 0,
  align: (AlignLeft val | AlignRight val | AlignCenter val) = reference,
  fill: U32 val = 32)
: String iso^
```
#### Parameters

*   str: [String](builtin-String.md) val
*   fmt: [FormatDefault](format-FormatDefault.md) val = reference
*   prefix: [PrefixDefault](format-PrefixDefault.md) val = reference
*   prec: [USize](builtin-USize.md) val = call
*   width: [USize](builtin-USize.md) val = 0
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val) = reference
*   fill: [U32](builtin-U32.md) val = 32

#### Returns

* [String](builtin-String.md) iso^

---

### int\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[A\])\]
<span class="source-link">[[Source]](src/format/format.md#L94)</span>


```pony
fun box int[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val) & Integer[A])](
  x: A,
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val) = reference,
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val) = reference,
  prec: USize val = call,
  width: USize val = 0,
  align: (AlignLeft val | AlignRight val | AlignCenter val) = reference,
  fill: U32 val = 32)
: String iso^
```
#### Parameters

*   x: A
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val) = reference
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val) = reference
*   prec: [USize](builtin-USize.md) val = call
*   width: [USize](builtin-USize.md) val = 0
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val) = reference
*   fill: [U32](builtin-U32.md) val = 32

#### Returns

* [String](builtin-String.md) iso^

---

### float\[A: (([F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [FloatingPoint](builtin-FloatingPoint.md)\[A\])\]
<span class="source-link">[[Source]](src/format/format.md#L135)</span>


```pony
fun box float[A: ((F32 val | F64 val) & FloatingPoint[A])](
  x: A,
  fmt: (FormatDefault val | FormatExp val | FormatExpLarge val | 
    FormatFix val | FormatFixLarge val | FormatGeneral val | 
    FormatGeneralLarge val) = reference,
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val) = reference,
  prec: USize val = 6,
  width: USize val = 0,
  align: (AlignLeft val | AlignRight val | AlignCenter val) = reference,
  fill: U32 val = 32)
: String iso^
```
#### Parameters

*   x: A
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatExp](format-FormatExp.md) val | [FormatExpLarge](format-FormatExpLarge.md) val | 
    [FormatFix](format-FormatFix.md) val | [FormatFixLarge](format-FormatFixLarge.md) val | [FormatGeneral](format-FormatGeneral.md) val | 
    [FormatGeneralLarge](format-FormatGeneralLarge.md) val) = reference
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val) = reference
*   prec: [USize](builtin-USize.md) val = 6
*   width: [USize](builtin-USize.md) val = 0
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val) = reference
*   fill: [U32](builtin-U32.md) val = 32

#### Returns

* [String](builtin-String.md) iso^

---

### eq
<span class="source-link">[[Source]](src/format/format.md#L54)</span>


```pony
fun box eq(
  that: Format val)
: Bool val
```
#### Parameters

*   that: [Format](format-Format.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/format/format.md#L54)</span>


```pony
fun box ne(
  that: Format val)
: Bool val
```
#### Parameters

*   that: [Format](format-Format.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

