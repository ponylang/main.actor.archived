# HashFunction64\[A: A\]
<span class="source-link">[[Source]](src/collections/hashable.md#L35)</span>

A pluggable hash function with 64-bit hashes.


```pony
interface val HashFunction64[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L39)</span>


Data structures create instances internally. Use a primitive if possible.


```pony
new val create()
: HashFunction64[A] val^
```

#### Returns

* [HashFunction64](collections-HashFunction64.md)\[A\] val^

---

## Public Functions

### hash64
<span class="source-link">[[Source]](src/collections/hashable.md#L44)</span>


Calculate the hash of some type. This is an alias of the type parameter to
allow data structures to hash things without consuming them.


```pony
fun box hash64(
  x: box->A!)
: U64 val
```
#### Parameters

*   x: box->A!

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/hashable.md#L50)</span>


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

