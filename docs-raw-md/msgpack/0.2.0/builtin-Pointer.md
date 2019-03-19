# Pointer\[A: A\]
<span class="source-link">[[Source]](src/builtin/pointer.md#L1)</span>

A Pointer[A] is a raw memory pointer. It has no descriptor and thus can't be
included in a union or intersection, or be a subtype of any interface. Most
functions on a Pointer[A] are private to maintain memory safety.


```pony
struct ref Pointer[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/pointer.md#L7)</span>


A null pointer.


```pony
new ref create()
: Pointer[A] ref^
```

#### Returns

* [Pointer](builtin-Pointer.md)\[A\] ref^

---

### _alloc
<span class="source-link">[[Source]](src/builtin/pointer.md#L13)</span>


Space for len instances of A.


```pony
new ref _alloc(
  len: USize val)
: Pointer[A] ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [Pointer](builtin-Pointer.md)\[A\] ref^

---

## Public Functions

### usize
<span class="source-link">[[Source]](src/builtin/pointer.md#L83)</span>


Convert the pointer into an integer.


```pony
fun tag usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### is_null
<span class="source-link">[[Source]](src/builtin/pointer.md#L89)</span>


Return true for a null pointer, false for anything else.


```pony
fun tag is_null()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### eq
<span class="source-link">[[Source]](src/builtin/pointer.md#L95)</span>


Return true if this address is that address.


```pony
fun tag eq(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/builtin/pointer.md#L101)</span>


Return true if this address is less than that address.


```pony
fun tag lt(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/pointer.md#L107)</span>


```pony
fun tag ne(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/pointer.md#L108)</span>


```pony
fun tag le(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/builtin/pointer.md#L109)</span>


```pony
fun tag ge(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/builtin/pointer.md#L110)</span>


```pony
fun tag gt(
  that: Pointer[A] tag)
: Bool val
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[A\] tag

#### Returns

* [Bool](builtin-Bool.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/pointer.md#L112)</span>


Returns a hash of the address.


```pony
fun tag hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/pointer.md#L118)</span>


Returns a 64-bit hash of the address.


```pony
fun tag hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

## Private Functions

### _realloc
<span class="source-link">[[Source]](src/builtin/pointer.md#L19)</span>


Keep the contents, but reserve space for len instances of A.


```pony
fun ref _realloc(
  len: USize val)
: Pointer[A] ref
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [Pointer](builtin-Pointer.md)\[A\] ref

---

### _unsafe
<span class="source-link">[[Source]](src/builtin/pointer.md#L25)</span>


Unsafe change in reference capability.


```pony
fun tag _unsafe()
: Pointer[A] ref
```

#### Returns

* [Pointer](builtin-Pointer.md)\[A\] ref

---

### _convert\[B: B\]
<span class="source-link">[[Source]](src/builtin/pointer.md#L31)</span>


Convert from Pointer[A] to Pointer[B].


```pony
fun box _convert[B: B]()
: this->Pointer[B] ref
```

#### Returns

* this->[Pointer](builtin-Pointer.md)\[B\] ref

---

### _apply
<span class="source-link">[[Source]](src/builtin/pointer.md#L37)</span>


Retrieve index i.


```pony
fun box _apply(
  i: USize val)
: this->A
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* this->A

---

### _update
<span class="source-link">[[Source]](src/builtin/pointer.md#L43)</span>


Set index i and return the previous value.


```pony
fun ref _update(
  i: USize val,
  value: A!)
: A^
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   value: A!

#### Returns

* A^

---

### _offset
<span class="source-link">[[Source]](src/builtin/pointer.md#L49)</span>


Return a pointer to the n-th element.


```pony
fun box _offset(
  n: USize val)
: this->Pointer[A] ref
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* this->[Pointer](builtin-Pointer.md)\[A\] ref

---

### _element_size
<span class="source-link">[[Source]](src/builtin/pointer.md#L55)</span>


Return the size of a single element in an array of type A.


```pony
fun tag _element_size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _insert
<span class="source-link">[[Source]](src/builtin/pointer.md#L61)</span>


Creates space for n new elements at the head, moving following elements.
The array length before this should be len, and the available space should
be at least n + len.


```pony
fun ref _insert(
  n: USize val,
  len: USize val)
: Pointer[A] ref
```
#### Parameters

*   n: [USize](builtin-USize.md) val
*   len: [USize](builtin-USize.md) val

#### Returns

* [Pointer](builtin-Pointer.md)\[A\] ref

---

### _delete
<span class="source-link">[[Source]](src/builtin/pointer.md#L69)</span>


Delete n elements from the head of pointer, compact remaining elements of
the underlying array. The array length before this should be n + len.
Returns the first deleted element.


```pony
fun ref _delete(
  n: USize val,
  len: USize val)
: A^
```
#### Parameters

*   n: [USize](builtin-USize.md) val
*   len: [USize](builtin-USize.md) val

#### Returns

* A^

---

### _copy_to
<span class="source-link">[[Source]](src/builtin/pointer.md#L77)</span>


Copy n elements from this to that.


```pony
fun box _copy_to(
  that: Pointer[this->A!] ref,
  n: USize val)
: this->Pointer[A] ref
```
#### Parameters

*   that: [Pointer](builtin-Pointer.md)\[this->A!\] ref
*   n: [USize](builtin-USize.md) val

#### Returns

* this->[Pointer](builtin-Pointer.md)\[A\] ref

---

