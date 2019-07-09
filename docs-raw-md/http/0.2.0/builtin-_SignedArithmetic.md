# _SignedArithmetic
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L1)</span>
```pony
primitive val _SignedArithmetic
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L1)</span>


```pony
new val create()
: _SignedArithmetic val^
```

#### Returns

* [_SignedArithmetic](builtin-_SignedArithmetic.md) val^

---

## Public Functions

### fld\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L2)</span>


```pony
fun box fld[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: T
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T

---

### mod\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L9)</span>


```pony
fun box mod[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val)), U: UnsignedInteger[U] val](
  x: T,
  y: T)
: T
```
#### Parameters

*   x: T
*   y: T

#### Returns

* T

---

### eq
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L2)</span>


```pony
fun box eq(
  that: _SignedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedArithmetic](builtin-_SignedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L2)</span>


```pony
fun box ne(
  that: _SignedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedArithmetic](builtin-_SignedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

