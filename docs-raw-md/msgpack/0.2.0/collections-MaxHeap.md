# MaxHeap\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L3)</span>
```pony
type MaxHeap[A: Comparable[A] #read] is
  BinaryHeap[A, MaxHeapPriority[A] val] ref
```

#### Type Alias For

* [BinaryHeap](collections-BinaryHeap.md)\[A, [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val\] ref

---

