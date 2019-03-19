# _UnsignedPartialArithmetic
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L15)</span>
```pony
primitive val _UnsignedPartialArithmetic is
  _PartialArithmetic ref
```

#### Implements

* [_PartialArithmetic](builtin-_PartialArithmetic.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L15)</span>


```pony
new val create()
: _UnsignedPartialArithmetic val^
```

#### Returns

* [_UnsignedPartialArithmetic](builtin-_UnsignedPartialArithmetic.md) val^

---

## Public Functions

### div_checked\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L17)</span>


```pony
fun box div_checked[T: UnsignedInteger[T] val](
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

### rem_checked\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L20)</span>


```pony
fun box rem_checked[T: UnsignedInteger[T] val](
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

### div_partial\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L23)</span>


```pony
fun box div_partial[T: UnsignedInteger[T] val](
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

### rem_partial\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L30)</span>


```pony
fun box rem_partial[T: UnsignedInteger[T] val](
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

### divrem_partial\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L37)</span>


```pony
fun box divrem_partial[T: UnsignedInteger[T] val](
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
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L17)</span>


```pony
fun box eq(
  that: _UnsignedPartialArithmetic val)
: Bool val
```
#### Parameters

*   that: [_UnsignedPartialArithmetic](builtin-_UnsignedPartialArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_partial_arithmetic.md#L17)</span>


```pony
fun box ne(
  that: _UnsignedPartialArithmetic val)
: Bool val
```
#### Parameters

*   that: [_UnsignedPartialArithmetic](builtin-_UnsignedPartialArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

