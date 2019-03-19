# ArrayPairs\[A: A, B: [Array](builtin-Array.md)\[A\] #read\]
<span class="source-link">[[Source]](src/builtin/array.md#L899)</span>
```pony
class ref ArrayPairs[A: A, B: Array[A] #read] is
  Iterator[(USize val , B->A)] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[([USize](builtin-USize.md) val , B->A)\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/array.md#L903)</span>


```pony
new ref create(
  array: B)
: ArrayPairs[A, B] ref^
```
#### Parameters

*   array: B

#### Returns

* [ArrayPairs](builtin-ArrayPairs.md)\[A, B\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/builtin/array.md#L907)</span>


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/builtin/array.md#L910)</span>


```pony
fun ref next()
: (USize val , B->A) ?
```

#### Returns

* ([USize](builtin-USize.md) val , B->A) ?

---

