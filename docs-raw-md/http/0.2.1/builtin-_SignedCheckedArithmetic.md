# _SignedCheckedArithmetic
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L44)</span>
```pony
primitive val _SignedCheckedArithmetic
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L44)</span>


```pony
new val create()
: _SignedCheckedArithmetic val^
```

#### Returns

* [_SignedCheckedArithmetic](builtin-_SignedCheckedArithmetic.md) val^

---

## Public Functions

### div_checked\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L79)</span>


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
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L82)</span>


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

### fld_checked\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L85)</span>


```pony
fun box fld_checked[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
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

### mod_checked\[T: ([SignedInteger](builtin-SignedInteger.md)\[T, U\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val)), U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L88)</span>


```pony
fun box mod_checked[T: (SignedInteger[T, U] val & (I8 val | I16 val | I32 val | 
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

### eq
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L45)</span>


```pony
fun box eq(
  that: _SignedCheckedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedCheckedArithmetic](builtin-_SignedCheckedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L45)</span>


```pony
fun box ne(
  that: _SignedCheckedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_SignedCheckedArithmetic](builtin-_SignedCheckedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _mul_checked\[U: [UnsignedInteger](builtin-UnsignedInteger.md)\[U\] val, T: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val) & [SignedInteger](builtin-SignedInteger.md)\[T, U\] val)\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L45)</span>


basically exactly what the runtime functions __muloti4, mulodi4 etc. are doing
and roughly as fast as these.

Additionally on (at least some) 32 bit systems, the runtime function for checked 64 bit integer addition __mulodi4 is not available.
So we shouldn't use: `@"llvm.smul.with.overflow.i64"[(I64, Bool)](this, y)`

Also see https://bugs.llvm.org/show_bug.cgi?id=14469

That's basically why we rolled our own.


```pony
fun box _mul_checked[U: UnsignedInteger[U] val, T: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val) & SignedInteger[T, U] val)](
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

