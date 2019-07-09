# _FormatInt
<span class="source-link">[[Source]](src/format/_format_int.md#L1)</span>

Worker type providing to string conversions for integers.


```pony
primitive val _FormatInt
```

## Constructors

### create
<span class="source-link">[[Source]](src/format/_format_int.md#L1)</span>


```pony
new val create()
: _FormatInt val^
```

#### Returns

* [_FormatInt](format-_FormatInt.md) val^

---

## Public Functions

### u8
<span class="source-link">[[Source]](src/format/_format_int.md#L65)</span>


```pony
fun box u8(
  x: U8 val,
  neg: Bool val,
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val),
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val),
  prec: USize val,
  width: USize val,
  align: (AlignLeft val | AlignRight val | AlignCenter val),
  fill: U32 val)
: String iso^
```
#### Parameters

*   x: [U8](builtin-U8.md) val
*   neg: [Bool](builtin-Bool.md) val
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val)
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val)
*   prec: [USize](builtin-USize.md) val
*   width: [USize](builtin-USize.md) val
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val)
*   fill: [U32](builtin-U32.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### u16
<span class="source-link">[[Source]](src/format/_format_int.md#L103)</span>


```pony
fun box u16(
  x: U16 val,
  neg: Bool val,
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val),
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val),
  prec: USize val,
  width: USize val,
  align: (AlignLeft val | AlignRight val | AlignCenter val),
  fill: U32 val)
: String iso^
```
#### Parameters

*   x: [U16](builtin-U16.md) val
*   neg: [Bool](builtin-Bool.md) val
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val)
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val)
*   prec: [USize](builtin-USize.md) val
*   width: [USize](builtin-USize.md) val
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val)
*   fill: [U32](builtin-U32.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### u32
<span class="source-link">[[Source]](src/format/_format_int.md#L141)</span>


```pony
fun box u32(
  x: U32 val,
  neg: Bool val,
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val),
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val),
  prec: USize val,
  width: USize val,
  align: (AlignLeft val | AlignRight val | AlignCenter val),
  fill: U32 val)
: String iso^
```
#### Parameters

*   x: [U32](builtin-U32.md) val
*   neg: [Bool](builtin-Bool.md) val
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val)
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val)
*   prec: [USize](builtin-USize.md) val
*   width: [USize](builtin-USize.md) val
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val)
*   fill: [U32](builtin-U32.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### u64
<span class="source-link">[[Source]](src/format/_format_int.md#L183)</span>


```pony
fun box u64(
  x: U64 val,
  neg: Bool val,
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val),
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val),
  prec: USize val,
  width: USize val,
  align: (AlignLeft val | AlignRight val | AlignCenter val),
  fill: U32 val)
: String iso^
```
#### Parameters

*   x: [U64](builtin-U64.md) val
*   neg: [Bool](builtin-Bool.md) val
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val)
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val)
*   prec: [USize](builtin-USize.md) val
*   width: [USize](builtin-USize.md) val
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val)
*   fill: [U32](builtin-U32.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### u128
<span class="source-link">[[Source]](src/format/_format_int.md#L225)</span>


```pony
fun box u128(
  x: U128 val,
  neg: Bool val,
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

*   x: [U128](builtin-U128.md) val
*   neg: [Bool](builtin-Bool.md) val
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

### eq
<span class="source-link">[[Source]](src/format/_format_int.md#L5)</span>


```pony
fun box eq(
  that: _FormatInt val)
: Bool val
```
#### Parameters

*   that: [_FormatInt](format-_FormatInt.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/format/_format_int.md#L5)</span>


```pony
fun box ne(
  that: _FormatInt val)
: Bool val
```
#### Parameters

*   that: [_FormatInt](format-_FormatInt.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _large
<span class="source-link">[[Source]](src/format/_format_int.md#L5)</span>


```pony
fun box _large()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### _small
<span class="source-link">[[Source]](src/format/_format_int.md#L6)</span>


```pony
fun box _small()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### _fmt_int
<span class="source-link">[[Source]](src/format/_format_int.md#L8)</span>


```pony
fun box _fmt_int(
  fmt: (FormatDefault val | FormatUTF32 val | FormatBinary val | 
    FormatBinaryBare val | FormatOctal val | FormatOctalBare val | 
    FormatHex val | FormatHexBare val | FormatHexSmall val | 
    FormatHexSmallBare val))
: (U32 val , String val , String val)
```
#### Parameters

*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatUTF32](format-FormatUTF32.md) val | [FormatBinary](format-FormatBinary.md) val | 
    [FormatBinaryBare](format-FormatBinaryBare.md) val | [FormatOctal](format-FormatOctal.md) val | [FormatOctalBare](format-FormatOctalBare.md) val | 
    [FormatHex](format-FormatHex.md) val | [FormatHexBare](format-FormatHexBare.md) val | [FormatHexSmall](format-FormatHexSmall.md) val | 
    [FormatHexSmallBare](format-FormatHexSmallBare.md) val)

#### Returns

* ([U32](builtin-U32.md) val , [String](builtin-String.md) val , [String](builtin-String.md) val)

---

### _prefix
<span class="source-link">[[Source]](src/format/_format_int.md#L21)</span>


```pony
fun box _prefix(
  neg: Bool val,
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val))
: String val
```
#### Parameters

*   neg: [Bool](builtin-Bool.md) val
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val)

#### Returns

* [String](builtin-String.md) val

---

### _extend_digits
<span class="source-link">[[Source]](src/format/_format_int.md#L31)</span>


```pony
fun box _extend_digits(
  s: String ref,
  digits: USize val)
: None val
```
#### Parameters

*   s: [String](builtin-String.md) ref
*   digits: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### _pad
<span class="source-link">[[Source]](src/format/_format_int.md#L36)</span>


```pony
fun box _pad(
  s: String ref,
  width: USize val,
  align: (AlignLeft val | AlignRight val | AlignCenter val),
  fill: U32 val)
: None val
```
#### Parameters

*   s: [String](builtin-String.md) ref
*   width: [USize](builtin-USize.md) val
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val)
*   fill: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

