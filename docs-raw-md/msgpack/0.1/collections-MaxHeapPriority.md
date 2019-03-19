# MaxHeapPriority\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L143)</span>
```pony
primitive val MaxHeapPriority[A: Comparable[A] #read] is
  _BinaryHeapPriority[A] val
```

#### Implements

* [_BinaryHeapPriority](collections-_BinaryHeapPriority.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/heap.md#L143)</span>


```pony
new val create()
: MaxHeapPriority[A] val^
```

#### Returns

* [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/heap.md#L144)</span>


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
<span class="source-link">[[Source]](src/collections/heap.md#L144)</span>


```pony
fun box eq(
  that: MaxHeapPriority[A] val)
: Bool val
```
#### Parameters

*   that: [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/heap.md#L144)</span>


```pony
fun box ne(
  that: MaxHeapPriority[A] val)
: Bool val
```
#### Parameters

*   that: [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

