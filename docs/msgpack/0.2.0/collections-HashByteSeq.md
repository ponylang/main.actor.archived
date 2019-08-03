# HashByteSeq
<span class="source-link">[[Source]](src/collections/hashable.md#L103)</span>

Hash and equality functions for arbitrary ByteSeq.


```pony
primitive val HashByteSeq is
  HashFunction[(String box | Array[U8 val] box)] val,
  HashFunction64[(String box | Array[U8 val] box)] val
```

#### Implements

* [HashFunction](collections-HashFunction.md)\[([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)\] val
* [HashFunction64](collections-HashFunction64.md)\[([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/hashable.md#L103)</span>


```pony
new val create()
: HashByteSeq val^
```

#### Returns

* [HashByteSeq](collections-HashByteSeq.md) val^

---

## Public Functions

### hash
<span class="source-link">[[Source]](src/collections/hashable.md#L108)</span>


```pony
fun box hash(
  x: (String box | Array[U8 val] box))
: USize val
```
#### Parameters

*   x: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/collections/hashable.md#L111)</span>


```pony
fun box hash64(
  x: (String box | Array[U8 val] box))
: U64 val
```
#### Parameters

*   x: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/hashable.md#L114)</span>


```pony
fun box eq(
  x: (String box | Array[U8 val] box),
  y: (String box | Array[U8 val] box))
: Bool val
```
#### Parameters

*   x: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)
*   y: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/hashable.md#L108)</span>


```pony
fun box ne(
  that: HashByteSeq val)
: Bool val
```
#### Parameters

*   that: [HashByteSeq](collections-HashByteSeq.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

