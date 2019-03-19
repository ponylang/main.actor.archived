# MapIs\[K: K, V: V\]
<span class="source-link">[[Source]](src/collections/map.md#L10)</span>

This is a map that uses identity comparison on the key.


```pony
type MapIs[K: K, V: V] is
  HashMap[K, V, HashIs[K] val] ref
```

#### Type Alias For

* [HashMap](collections-HashMap.md)\[K, V, [HashIs](collections-HashIs.md)\[K\] val\] ref

---

