# HashFunction\[A: A\]
<span class="source-link">[[Source]](src/collections/hashable.md#L13)</span>

A pluggable hash function.


```pony
interface val HashFunction[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L17)</span>


Data structures create instances internally. Use a primitive if possible.


```pony
new val create()
: HashFunction[A] val^
```

#### Returns

* [HashFunction](collections-HashFunction.md)\[A\] val^

---

## Public Functions

### hash
<span class="source-link">[[Source]](src/collections/hashable.md#L22)</span>


Calculate the hash of some type. This is an alias of the type parameter to
allow data structures to hash things without consuming them.


```pony
fun box hash(
  x: box->A!)
: USize val
```
#### Parameters

*   x: box->A!

#### Returns

* [USize](builtin-USize.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/hashable.md#L28)</span>


Determine equality between two keys with the same hash. This is done with
viewpoint adapted aliases to allow data structures to determine equality
in a box fun without consuming keys.


```pony
fun box eq(
  x: box->A!,
  y: box->A!)
: Bool val
```
#### Parameters

*   x: box->A!
*   y: box->A!

#### Returns

* [Bool](builtin-Bool.md) val

---

