# SetValues\[A: A, H: [HashFunction](collections-HashFunction.md)\[A!\] val, S: [HashSet](collections-HashSet.md)\[A, H\] #read\]
<span class="source-link">[[Source]](src/collections/set.md#L286)</span>

An iterator over the values in a set.


```pony
class ref SetValues[A: A, H: HashFunction[A!] val, S: HashSet[A, H] #read] is
  Iterator[S->A] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[S->A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/set.md#L295)</span>


Creates an iterator for the given set.


```pony
new ref create(
  set: S)
: SetValues[A, H, S] ref^
```
#### Parameters

*   set: S

#### Returns

* [SetValues](collections-SetValues.md)\[A, H, S\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/set.md#L301)</span>


True if it believes there are remaining entries. May not be right if values
were added or removed from the set.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/collections/set.md#L308)</span>


Returns the next value, or raises an error if there isn't one. If values
are added during iteration, this may not return all values.


```pony
fun ref next()
: S->A ?
```

#### Returns

* S->A ?

---

