# MapKeys\[K: K, V: V, H: [HashFunction](collections-HashFunction.md)\[K\] val, M: [HashMap](collections-HashMap.md)\[K, V, H\] #read\]
<span class="source-link">[[Source]](src/collections/map.md#L381)</span>

An iterator over the keys in a map.


```pony
class ref MapKeys[K: K, V: V, H: HashFunction[K] val, M: HashMap[K, V, H] #read] is
  Iterator[M->K] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[M->K\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/map.md#L390)</span>


Creates an iterator for the given map.


```pony
new ref create(
  map: M)
: MapKeys[K, V, H, M] ref^
```
#### Parameters

*   map: M

#### Returns

* [MapKeys](collections-MapKeys.md)\[K, V, H, M\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/map.md#L396)</span>


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
<span class="source-link">[[Source]](src/collections/map.md#L403)</span>


Returns the next key, or raises an error if there isn't one. If keys are
added during iteration, this may not return all keys.


```pony
fun ref next()
: M->K ?
```

#### Returns

* M->K ?

---

