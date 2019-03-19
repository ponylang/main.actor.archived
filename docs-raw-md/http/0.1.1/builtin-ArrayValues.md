# ArrayValues\[A: A, B: [Array](builtin-Array.md)\[A\] #read\]
<span class="source-link">[[Source]](src/builtin/array.md#L881)</span>
```pony
class ref ArrayValues[A: A, B: Array[A] #read] is
  Iterator[B->A] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[B->A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/array.md#L885)</span>


```pony
new ref create(
  array: B)
: ArrayValues[A, B] ref^
```
#### Parameters

*   array: B

#### Returns

* [ArrayValues](builtin-ArrayValues.md)\[A, B\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/builtin/array.md#L889)</span>


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/builtin/array.md#L892)</span>


```pony
fun ref next()
: B->A ?
```

#### Returns

* B->A ?

---

### rewind
<span class="source-link">[[Source]](src/builtin/array.md#L895)</span>


```pony
fun ref rewind()
: ArrayValues[A, B] ref
```

#### Returns

* [ArrayValues](builtin-ArrayValues.md)\[A, B\] ref

---

