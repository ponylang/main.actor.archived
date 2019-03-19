# HashEq64\[A: ([Hashable64](collections-Hashable64.md) #read & [Equatable](builtin-Equatable.md)\[A\] #read)\]
<span class="source-link">[[Source]](src/collections/hashable.md#L70)</span>
```pony
primitive val HashEq64[A: (Hashable64 #read & Equatable[A] #read)] is
  HashFunction64[A] val
```

#### Implements

* [HashFunction64](collections-HashFunction64.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L70)</span>


```pony
new val create()
: HashEq64[A] val^
```

#### Returns

* [HashEq64](collections-HashEq64.md)\[A\] val^

---

## Public Functions

### hash64
<span class="source-link">[[Source]](src/collections/hashable.md#L72)</span>


Use the hash function from the type parameter.


```pony
fun box hash64(
  x: box->A)
: U64 val
```
#### Parameters

*   x: box->A

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/hashable.md#L78)</span>


Use the structural equality function from the type parameter.


```pony
fun box eq(
  x: box->A,
  y: box->A)
: Bool val
```
#### Parameters

*   x: box->A
*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/hashable.md#L72)</span>


```pony
fun box ne(
  that: HashEq64[A] val)
: Bool val
```
#### Parameters

*   that: [HashEq64](collections-HashEq64.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

