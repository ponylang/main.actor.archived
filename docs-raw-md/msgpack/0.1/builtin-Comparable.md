# Comparable\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/builtin/compare.md#L22)</span>
```pony
interface ref Comparable[A: Comparable[A] #read] is
  Equatable[A] ref
```

#### Implements

* [Equatable](builtin-Equatable.md)\[A\] ref

---

## Public Functions

### lt
<span class="source-link">[[Source]](src/builtin/compare.md#L23)</span>


```pony
fun box lt(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/compare.md#L24)</span>


```pony
fun box le(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/builtin/compare.md#L25)</span>


```pony
fun box ge(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/builtin/compare.md#L26)</span>


```pony
fun box gt(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### compare
<span class="source-link">[[Source]](src/builtin/compare.md#L28)</span>


```pony
fun box compare(
  that: box->A)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: box->A

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

### eq
<span class="source-link">[[Source]](src/builtin/compare.md#L19)</span>


```pony
fun box eq(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/compare.md#L20)</span>


```pony
fun box ne(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

