# Flags\[A: [Flag](collections-Flag.md)\[B\] val, optional B: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[B\] val)\]
<span class="source-link">[[Source]](src/collections/flag.md#L9)</span>

Flags is a set of flags. The flags that are recognised should be passed as
a union type for type parameter A. For example:

primitive SSE
  fun value(): U64 => 1

primitive AVX
  fun value(): U64 => 2

primitive RDTSCP
  fun value(): U64 => 4

type Features is Flags[(SSE | AVX | RDTSCP)]

Type parameter B is the unlying field used to store the flags.


```pony
class ref Flags[A: Flag[B] val, optional B: ((U8 val | U16 val | U32 val | 
    U64 val | U128 val | ULong val | 
    USize val) & Integer[B] val)] is
  Comparable[Flags[A, B] box] ref
```

#### Implements

* [Comparable](builtin-Comparable.md)\[[Flags](collections-Flags.md)\[A, B\] box\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/flag.md#L9)</span>


```pony
new iso create()
: Flags[A, B] iso^
```

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

## Public Functions

### value
<span class="source-link">[[Source]](src/collections/flag.md#L30)</span>


Returns the bit encoding of the set flags.


```pony
fun box value()
: B
```

#### Returns

* B

---

### apply
<span class="source-link">[[Source]](src/collections/flag.md#L36)</span>


Returns true if the flag is set.


```pony
fun box apply(
  flag: A)
: Bool val
```
#### Parameters

*   flag: A

#### Returns

* [Bool](builtin-Bool.md) val

---

### all
<span class="source-link">[[Source]](src/collections/flag.md#L42)</span>


Sets all bits, including undefined flags.


```pony
fun ref all()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### clear
<span class="source-link">[[Source]](src/collections/flag.md#L48)</span>


Unsets all flags.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### set
<span class="source-link">[[Source]](src/collections/flag.md#L54)</span>


Sets the flag.


```pony
fun ref set(
  flag: A)
: None val
```
#### Parameters

*   flag: A

#### Returns

* [None](builtin-None.md) val

---

### unset
<span class="source-link">[[Source]](src/collections/flag.md#L60)</span>


Unsets the flag.


```pony
fun ref unset(
  flag: A)
: None val
```
#### Parameters

*   flag: A

#### Returns

* [None](builtin-None.md) val

---

### flip
<span class="source-link">[[Source]](src/collections/flag.md#L66)</span>


Sets the flag if it is unset, unsets the flag if it is set.


```pony
fun ref flip(
  flag: A)
: None val
```
#### Parameters

*   flag: A

#### Returns

* [None](builtin-None.md) val

---

### union
<span class="source-link">[[Source]](src/collections/flag.md#L72)</span>


The union of this and that.


```pony
fun ref union(
  that: Flags[A, B] box)
: None val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [None](builtin-None.md) val

---

### intersect
<span class="source-link">[[Source]](src/collections/flag.md#L78)</span>


The intersection of this and that.


```pony
fun ref intersect(
  that: Flags[A, B] box)
: None val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [None](builtin-None.md) val

---

### difference
<span class="source-link">[[Source]](src/collections/flag.md#L84)</span>


The symmetric difference of this and that.


```pony
fun ref difference(
  that: Flags[A, B] box)
: None val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [None](builtin-None.md) val

---

### remove
<span class="source-link">[[Source]](src/collections/flag.md#L90)</span>


Unset flags that are set in that.


```pony
fun ref remove(
  that: Flags[A, B] box)
: None val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [None](builtin-None.md) val

---

### add
<span class="source-link">[[Source]](src/collections/flag.md#L96)</span>


This with the flag set.


```pony
fun box add(
  flag: A)
: Flags[A, B] iso^
```
#### Parameters

*   flag: A

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### sub
<span class="source-link">[[Source]](src/collections/flag.md#L104)</span>


This with the flag unset.


```pony
fun box sub(
  flag: A)
: Flags[A, B] iso^
```
#### Parameters

*   flag: A

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### op_or
<span class="source-link">[[Source]](src/collections/flag.md#L112)</span>


The union of this and that.


```pony
fun box op_or(
  that: Flags[A, B] box)
: Flags[A, B] iso^
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### op_and
<span class="source-link">[[Source]](src/collections/flag.md#L120)</span>


The intersection of this and that.


```pony
fun box op_and(
  that: Flags[A, B] box)
: Flags[A, B] iso^
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### op_xor
<span class="source-link">[[Source]](src/collections/flag.md#L128)</span>


The symmetric difference of this and that.


```pony
fun box op_xor(
  that: Flags[A, B] box)
: Flags[A, B] iso^
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### without
<span class="source-link">[[Source]](src/collections/flag.md#L136)</span>


The flags in this that are not in that.


```pony
fun box without(
  that: Flags[A, B] box)
: Flags[A, B] iso^
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### clone
<span class="source-link">[[Source]](src/collections/flag.md#L144)</span>


Create a clone.


```pony
fun box clone()
: Flags[A, B] iso^
```

#### Returns

* [Flags](collections-Flags.md)\[A, B\] iso^

---

### eq
<span class="source-link">[[Source]](src/collections/flag.md#L152)</span>


Returns true if this has the same flags set as that.


```pony
fun box eq(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/collections/flag.md#L158)</span>


Returns true if the flags set on this are a strict subset of the flags set
on that. Flags is only partially ordered, so lt is not the opposite of ge.


```pony
fun box lt(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/collections/flag.md#L165)</span>


Returns true if the flags set on this are a subset of the flags set on
that or they are the same. Flags is only partially ordered, so le is not
the opposite of te.


```pony
fun box le(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/collections/flag.md#L173)</span>


Returns true if the flags set on this are a struct superset of the flags
set on that. Flags is only partially ordered, so gt is not the opposite of
le.


```pony
fun box gt(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/collections/flag.md#L181)</span>


Returns true if the flags set on this are a superset of the flags set on
that or they are the same. Flags is only partially ordered, so ge is not
the opposite of lt.


```pony
fun box ge(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### compare
<span class="source-link">[[Source]](src/builtin/compare.md#L28)</span>


```pony
fun box compare(
  that: Flags[A, B] box)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

### ne
<span class="source-link">[[Source]](src/builtin/compare.md#L20)</span>


```pony
fun box ne(
  that: Flags[A, B] box)
: Bool val
```
#### Parameters

*   that: [Flags](collections-Flags.md)\[A, B\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

