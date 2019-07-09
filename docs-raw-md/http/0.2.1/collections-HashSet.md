# HashSet\[A: A, H: [HashFunction](collections-HashFunction.md)\[A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L5)</span>

A set, built on top of a HashMap. This is implemented as map of an alias of
a type to itself


```pony
class ref HashSet[A: A, H: HashFunction[A!] val] is
  Comparable[HashSet[A, H] box] ref
```

#### Implements

* [Comparable](builtin-Comparable.md)\[[HashSet](collections-HashSet.md)\[A, H\] box\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/set.md#L12)</span>


Defaults to a prealloc of 8.


```pony
new ref create(
  prealloc: USize val = 8)
: HashSet[A, H] ref^
```
#### Parameters

*   prealloc: [USize](builtin-USize.md) val = 8

#### Returns

* [HashSet](collections-HashSet.md)\[A, H\] ref^

---

## Public Functions

### size
<span class="source-link">[[Source]](src/collections/set.md#L18)</span>


The number of items in the set.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### space
<span class="source-link">[[Source]](src/collections/set.md#L24)</span>


The available space in the set.


```pony
fun box space()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/collections/set.md#L30)</span>


Return the value if its in the set, otherwise raise an error.


```pony
fun box apply(
  value: box->A!)
: this->A ?
```
#### Parameters

*   value: box->A!

#### Returns

* this->A ?

---

### contains
<span class="source-link">[[Source]](src/collections/set.md#L36)</span>


Checks whether the set contains the value.


```pony
fun box contains(
  value: box->A!)
: Bool val
```
#### Parameters

*   value: box->A!

#### Returns

* [Bool](builtin-Bool.md) val

---

### clear
<span class="source-link">[[Source]](src/collections/set.md#L42)</span>


Remove all elements from the set.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### set
<span class="source-link">[[Source]](src/collections/set.md#L48)</span>


Add a value to the set.


```pony
fun ref set(
  value: A)
: None val
```
#### Parameters

*   value: A

#### Returns

* [None](builtin-None.md) val

---

### unset
<span class="source-link">[[Source]](src/collections/set.md#L54)</span>


Remove a value from the set.


```pony
fun ref unset(
  value: box->A!)
: None val
```
#### Parameters

*   value: box->A!

#### Returns

* [None](builtin-None.md) val

---

### extract
<span class="source-link">[[Source]](src/collections/set.md#L60)</span>


Remove a value from the set and return it. Raises an error if the value
wasn't in the set.


```pony
fun ref extract(
  value: box->A!)
: A^ ?
```
#### Parameters

*   value: box->A!

#### Returns

* A^ ?

---

### union
<span class="source-link">[[Source]](src/collections/set.md#L67)</span>


Add everything in that to the set.


```pony
fun ref union(
  that: Iterator[A^] ref)
: None val
```
#### Parameters

*   that: [Iterator](builtin-Iterator.md)\[A^\] ref

#### Returns

* [None](builtin-None.md) val

---

### intersect\[optional K: [HashFunction](collections-HashFunction.md)\[box->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L75)</span>


Remove everything that isn't in that.


```pony
fun ref intersect[optional K: HashFunction[box->A!] val](
  that: HashSet[box->A!, K] ref)
: None val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[box->A!, K\] ref

#### Returns

* [None](builtin-None.md) val

---

### difference
<span class="source-link">[[Source]](src/collections/set.md#L95)</span>


Remove elements in this which are also in that. Add elements in that which
are not in this.


```pony
fun ref difference(
  that: Iterator[A^] ref)
: None val
```
#### Parameters

*   that: [Iterator](builtin-Iterator.md)\[A^\] ref

#### Returns

* [None](builtin-None.md) val

---

### remove
<span class="source-link">[[Source]](src/collections/set.md#L108)</span>


Remove everything that is in that.


```pony
fun ref remove(
  that: Iterator[box->A!] ref)
: None val
```
#### Parameters

*   that: [Iterator](builtin-Iterator.md)\[box->A!\] ref

#### Returns

* [None](builtin-None.md) val

---

### add\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L116)</span>


Add a value to the set.


```pony
fun box add[optional K: HashFunction[this->A!] val](
  value: this->A!)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   value: this->A!

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### sub\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L125)</span>


Remove a value from the set.


```pony
fun box sub[optional K: HashFunction[this->A!] val](
  value: box->this->A!)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   value: box->this->A!

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### op_or\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L134)</span>


Create a set with the elements of both this and that.


```pony
fun box op_or[optional K: HashFunction[this->A!] val](
  that: this->HashSet[A, H] ref)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   that: this->[HashSet](collections-HashSet.md)\[A, H\] ref

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### op_and\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L148)</span>


Create a set with the elements that are in both this and that.


```pony
fun box op_and[optional K: HashFunction[this->A!] val](
  that: this->HashSet[A, H] ref)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   that: this->[HashSet](collections-HashSet.md)\[A, H\] ref

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### op_xor\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L165)</span>


Create a set with the elements that are in either set but not both.


```pony
fun box op_xor[optional K: HashFunction[this->A!] val](
  that: this->HashSet[A, H] ref)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   that: this->[HashSet](collections-HashSet.md)\[A, H\] ref

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### without\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L191)</span>


Create a set with the elements of this that are not in that.


```pony
fun box without[optional K: HashFunction[this->A!] val](
  that: this->HashSet[A, H] ref)
: HashSet[this->A!, K] ref^
```
#### Parameters

*   that: this->[HashSet](collections-HashSet.md)\[A, H\] ref

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### clone\[optional K: [HashFunction](collections-HashFunction.md)\[this->A!\] val\]
<span class="source-link">[[Source]](src/collections/set.md#L209)</span>


Create a clone. The element type may be different due to aliasing and
viewpoint adaptation.


```pony
fun box clone[optional K: HashFunction[this->A!] val]()
: HashSet[this->A!, K] ref^
```

#### Returns

* [HashSet](collections-HashSet.md)\[this->A!, K\] ref^

---

### eq
<span class="source-link">[[Source]](src/collections/set.md#L221)</span>


Returns true if the sets contain the same elements.


```pony
fun box eq(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/set.md#L227)</span>


Returns false if the sets contain the same elements.


```pony
fun box ne(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/collections/set.md#L233)</span>


Returns true if every element in this is also in that, and this has fewer
elements than that.


```pony
fun box lt(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/collections/set.md#L240)</span>


Returns true if every element in this is also in that.


```pony
fun box le(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/collections/set.md#L253)</span>


Returns true if every element in that is also in this, and this has more
elements than that.


```pony
fun box gt(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/collections/set.md#L260)</span>


Returns true if every element in that is also in this.


```pony
fun box ge(
  that: HashSet[A, H] box)
: Bool val
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### next_index
<span class="source-link">[[Source]](src/collections/set.md#L266)</span>


Given an index, return the next index that has a populated value. Raise an
error if there is no next populated index.


```pony
fun box next_index(
  prev: USize val = call)
: USize val ?
```
#### Parameters

*   prev: [USize](builtin-USize.md) val = call

#### Returns

* [USize](builtin-USize.md) val ?

---

### index
<span class="source-link">[[Source]](src/collections/set.md#L273)</span>


Returns the value at a given index. Raise an error if the index is not
populated.


```pony
fun box index(
  i: USize val)
: this->A ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* this->A ?

---

### values
<span class="source-link">[[Source]](src/collections/set.md#L280)</span>


Return an iterator over the values.


```pony
fun box values()
: SetValues[A, H, this->HashSet[A, H] ref] ref^
```

#### Returns

* [SetValues](collections-SetValues.md)\[A, H, this->[HashSet](collections-HashSet.md)\[A, H\] ref\] ref^

---

### compare
<span class="source-link">[[Source]](src/builtin/compare.md#L28)</span>


```pony
fun box compare(
  that: HashSet[A, H] box)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [HashSet](collections-HashSet.md)\[A, H\] box

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

