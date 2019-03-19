# HashIs\[A: A\]
<span class="source-link">[[Source]](src/collections/hashable.md#L84)</span>
```pony
primitive val HashIs[A: A] is
  HashFunction[A] val,
  HashFunction64[A] val
```

#### Implements

* [HashFunction](collections-HashFunction.md)\[A\] val
* [HashFunction64](collections-HashFunction64.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L84)</span>


```pony
new val create()
: HashIs[A] val^
```

#### Returns

* [HashIs](collections-HashIs.md)\[A\] val^

---

## Public Functions

### hash
<span class="source-link">[[Source]](src/collections/hashable.md#L85)</span>


Hash the identity rather than the contents.


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

### hash64
<span class="source-link">[[Source]](src/collections/hashable.md#L91)</span>


Hash the identity rather than the contents.


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
<span class="source-link">[[Source]](src/collections/hashable.md#L97)</span>


Determine equality by identity rather than structurally.


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

### ne
<span class="source-link">[[Source]](src/collections/hashable.md#L85)</span>


```pony
fun box ne(
  that: HashIs[A] val)
: Bool val
```
#### Parameters

*   that: [HashIs](collections-HashIs.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

