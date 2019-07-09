# _UnsignedCheckedArithmetic
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L30)</span>
```pony
primitive val _UnsignedCheckedArithmetic
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L30)</span>


```pony
new val create()
: _UnsignedCheckedArithmetic val^
```

#### Returns

* [_UnsignedCheckedArithmetic](builtin-_UnsignedCheckedArithmetic.md) val^

---

## Public Functions

### div_checked\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L31)</span>


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
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L34)</span>


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

### fld_checked\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L37)</span>


```pony
fun box fld_checked[T: UnsignedInteger[T] val](
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

### mod_checked\[T: [UnsignedInteger](builtin-UnsignedInteger.md)\[T\] val\]
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L40)</span>


```pony
fun box mod_checked[T: UnsignedInteger[T] val](
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
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L31)</span>


```pony
fun box eq(
  that: _UnsignedCheckedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_UnsignedCheckedArithmetic](builtin-_UnsignedCheckedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_arithmetic.md#L31)</span>


```pony
fun box ne(
  that: _UnsignedCheckedArithmetic val)
: Bool val
```
#### Parameters

*   that: [_UnsignedCheckedArithmetic](builtin-_UnsignedCheckedArithmetic.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

