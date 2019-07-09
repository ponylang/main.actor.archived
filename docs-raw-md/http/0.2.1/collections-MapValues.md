# MapValues\[K: K, V: V, H: [HashFunction](collections-HashFunction.md)\[K\] val, M: [HashMap](collections-HashMap.md)\[K, V, H\] #read\]
<span class="source-link">[[Source]](src/collections/map.md#L412)</span>

An iterator over the values in a map.


```pony
class ref MapValues[K: K, V: V, H: HashFunction[K] val, M: HashMap[K, V, H] #read] is
  Iterator[M->V] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[M->V\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/map.md#L421)</span>


Creates an iterator for the given map.


```pony
new ref create(
  map: M)
: MapValues[K, V, H, M] ref^
```
#### Parameters

*   map: M

#### Returns

* [MapValues](collections-MapValues.md)\[K, V, H, M\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/map.md#L427)</span>


True if it believes there are remaining entries. May not be right if values
were added or removed from the map.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/collections/map.md#L434)</span>


Returns the next value, or raises an error if there isn't one. If values
are added during iteration, this may not return all values.


```pony
fun ref next()
: M->V ?
```

#### Returns

* M->V ?

---

