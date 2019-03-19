# BinaryHeapPriority\[A: [Comparable](builtin-Comparable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/heap.md#L131)</span>
```pony
type BinaryHeapPriority[A: Comparable[A] #read] is
  (_BinaryHeapPriority[A] val & (MinHeapPriority[A] val | MaxHeapPriority[A] val))
```

#### Type Alias For

* ([_BinaryHeapPriority](collections-_BinaryHeapPriority.md)\[A\] val & ([MinHeapPriority](collections-MinHeapPriority.md)\[A\] val | [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val))

---

