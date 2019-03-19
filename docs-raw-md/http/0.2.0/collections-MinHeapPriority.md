# MinHeapPriority\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L139)</span>
```pony
primitive val MinHeapPriority[A: Comparable[A] #read] is
  _BinaryHeapPriority[A] val
```

#### Implements

* [_BinaryHeapPriority](collections-_BinaryHeapPriority.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/heap.md#L139)</span>


```pony
new val create()
: MinHeapPriority[A] val^
```

#### Returns

* [MinHeapPriority](collections-MinHeapPriority.md)\[A\] val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/heap.md#L140)</span>


```pony
fun box apply(
  x: A,
  y: A)
: Bool val
```
#### Parameters

*   x: A
*   y: A

#### Returns

* [Bool](builtin-Bool.md) val

---

### eq
<span class="source-link">[[Source]](src/collections/heap.md#L140)</span>


```pony
fun box eq(
  that: MinHeapPriority[A] val)
: Bool val
```
#### Parameters

*   that: [MinHeapPriority](collections-MinHeapPriority.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/heap.md#L140)</span>


```pony
fun box ne(
  that: MinHeapPriority[A] val)
: Bool val
```
#### Parameters

*   that: [MinHeapPriority](collections-MinHeapPriority.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

