# _SignedPartialArithmetic
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L44)</span>
```pony
primitive val _SignedPartialArithmetic is
  _PartialArithmetic ref
```

#### Implements

* [_PartialArithmetic](builtin-_PartialArithmetic.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L44)</span>


```pony
new val create()
: _SignedPartialArithmetic val^
```

#### Returns

* [_SignedPartialArithmetic](builtin-_SignedPartialArithmetic.md) val^

---

## Public Functions

### div_checked\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L46)</span>


```pony
fun box div_checked[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: (T , Bool val)
```
#### Parameters

*   x: T
*   y: T

#### Returns

* (T , [Bool](builtin-Bool.md) val)

---

### rem_checked\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L49)</span>


```pony
fun box rem_checked[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: (T , Bool val)
```
#### Parameters

*   x: T
*   y: T

#### Returns

* (T , [Bool](builtin-Bool.md) val)

---

### div_partial\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L52)</span>


```pony
fun box div_partial[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: T ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T ?

---

### rem_partial\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L59)</span>


```pony
fun box rem_partial[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: T ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T ?

---

### divrem_partial\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L66)</span>


```pony
fun box divrem_partial[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: (T , T) ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* (T , T) ?

---

### neg_partial\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L73)</span>


```pony
fun box neg_partial[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T)
: T ?
```
#### Parameters

*   x: T

#### Returns

* T ?

---

### add_partial\[T: ([Integer](builtin-Integer.md)\[T\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val))\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L3)</span>


```pony
fun box add_partial[T: (Integer[T] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val))](
  x: T,
  y: T)
: T ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T ?

---

### sub_partial\[T: ([Integer](builtin-Integer.md)\[T\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val))\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L7)</span>


```pony
fun box sub_partial[T: (Integer[T] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val))](
  x: T,
  y: T)
: T ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T ?

---

### mul_partial\[T: ([Integer](builtin-Integer.md)\[T\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val))\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L11)</span>


```pony
fun box mul_partial[T: (Integer[T] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val))](
  x: T,
  y: T)
: T ?
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T ?

---

### eq
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L46)</span>


```pony
fun box eq(
  that: _SignedPartialArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedPartialArithmetic](builtin-_SignedPartialArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L46)</span>


```pony
fun box ne(
  that: _SignedPartialArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedPartialArithmetic](builtin-_SignedPartialArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

