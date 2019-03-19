# _FormatFloat
<span class="source-link">[[Source]](src/format/_format_float.md#L1)</span>

Worker type providing to string conversions for floats.


```pony
primitive val _FormatFloat
```

## Constructors

### create
<span class="source-link">[[Source]](src/format/_format_float.md#L1)</span>


```pony
new val create()
: _FormatFloat val^
```

#### Returns

* [_FormatFloat](format-_FormatFloat.md) val^

---

## Public Functions

### f64
<span class="source-link">[[Source]](src/format/_format_float.md#L5)</span>


```pony
fun box f64(
  x: F64 val,
  fmt: (FormatDefault val | FormatExp val | FormatExpLarge val | 
    FormatFix val | FormatFixLarge val | FormatGeneral val | 
    FormatGeneralLarge val) = seq,
  prefix: (PrefixDefault val | PrefixSpace val | PrefixSign val) = seq,
  prec: USize val = seq,
  width: USize val = seq,
  align: (AlignLeft val | AlignRight val | AlignCenter val) = seq,
  fill: U32 val = seq)
: String iso^
```
#### Parameters

*   x: [F64](builtin-F64.md) val
*   fmt: ([FormatDefault](format-FormatDefault.md) val | [FormatExp](format-FormatExp.md) val | [FormatExpLarge](format-FormatExpLarge.md) val | 
    [FormatFix](format-FormatFix.md) val | [FormatFixLarge](format-FormatFixLarge.md) val | [FormatGeneral](format-FormatGeneral.md) val | 
    [FormatGeneralLarge](format-FormatGeneralLarge.md) val) = seq
*   prefix: ([PrefixDefault](format-PrefixDefault.md) val | [PrefixSpace](format-PrefixSpace.md) val | [PrefixSign](format-PrefixSign.md) val) = seq
*   prec: [USize](builtin-USize.md) val = seq
*   width: [USize](builtin-USize.md) val = seq
*   align: ([AlignLeft](format-AlignLeft.md) val | [AlignRight](format-AlignRight.md) val | [AlignCenter](format-AlignCenter.md) val) = seq
*   fill: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) iso^

---

### eq
<span class="source-link">[[Source]](src/format/_format_float.md#L5)</span>


```pony
fun box eq(
  that: _FormatFloat val)
: Bool val
```
#### Parameters

*   that: [_FormatFloat](format-_FormatFloat.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/format/_format_float.md#L5)</span>


```pony
fun box ne(
  that: _FormatFloat val)
: Bool val
```
#### Parameters

*   that: [_FormatFloat](format-_FormatFloat.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

