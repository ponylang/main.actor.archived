# _BinaryHeapPriority\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L135)</span>
```pony
interface val _BinaryHeapPriority[A: Comparable[A] #read]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/heap.md#L136)</span>


```pony
new val create()
: _BinaryHeapPriority[A] val^
```

#### Returns

* [_BinaryHeapPriority](collections-_BinaryHeapPriority.md)\[A\] val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/heap.md#L137)</span>


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

