# Map\[K: ([Hashable](collections-Hashable.md) #read & [Equatable](builtin-Equatable.md)\[K\] #read), V: V\]
<span class="source-link">[[Source]](src/collections/map.md#L4)</span>

This is a map that uses structural equality on the key.


```pony
type Map[K: (Hashable #read & Equatable[K] #read), V: V] is
  HashMap[K, V, HashEq[K] val] ref
```

#### Type Alias For

* [HashMap](collections-HashMap.md)\[K, V, [HashEq](collections-HashEq.md)\[K\] val\] ref

---

