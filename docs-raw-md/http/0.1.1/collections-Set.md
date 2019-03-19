# Set\[A: ([Hashable](collections-Hashable.md) #read & [Equatable](builtin-Equatable.md)\[A\] #read)\]
<span class="source-link">[[Source]](src/collections/set.md#L1)</span>
```pony
type Set[A: (Hashable #read & Equatable[A] #read)] is
  HashSet[A, HashEq[A] val] ref
```

#### Type Alias For

* [HashSet](collections-HashSet.md)\[A, [HashEq](collections-HashEq.md)\[A\] val\] ref

---

