# MinHeap\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L2)</span>
```pony
type MinHeap[A: Comparable[A] #read] is
  BinaryHeap[A, MinHeapPriority[A] val] ref
```

#### Type Alias For

* [BinaryHeap](collections-BinaryHeap.md)\[A, [MinHeapPriority](collections-MinHeapPriority.md)\[A\] val\] ref

---

