# HashEq\[A: ([Hashable](collections-Hashable.md) #read & [Equatable](builtin-Equatable.md)\[A\] #read)\]
<span class="source-link">[[Source]](src/collections/hashable.md#L57)</span>
```pony
primitive val HashEq[A: (Hashable #read & Equatable[A] #read)] is
  HashFunction[A] val
```

#### Implements

* [HashFunction](collections-HashFunction.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L57)</span>


```pony
new val create()
: HashEq[A] val^
```

#### Returns

* [HashEq](collections-HashEq.md)\[A\] val^

---

## Public Functions

### hash
<span class="source-link">[[Source]](src/collections/hashable.md#L58)</span>


Use the hash function from the type parameter.


```pony
fun box hash(
  x: box->A)
: USize val
```
#### Parameters

*   x: box->A

#### Returns

* [USize](builtin-USize.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/hashable.md#L64)</span>


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
<span class="source-link">[[Source]](src/collections/hashable.md#L58)</span>


```pony
fun box ne(
  that: HashEq[A] val)
: Bool val
```
#### Parameters

*   that: [HashEq](collections-HashEq.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

