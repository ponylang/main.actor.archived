# ListValues\[A: A, N: [ListNode](collections-ListNode.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/list.md#L600)</span>

Iterate over the values in a list.


```pony
class ref ListValues[A: A, N: ListNode[A] #read] is
  Iterator[N->A] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[N->A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list.md#L607)</span>


Keep the next list node to be examined.


```pony
new ref create(
  head: (N | None val),
  reverse: Bool val = seq)
: ListValues[A, N] ref^
```
#### Parameters

*   head: (N | [None](builtin-None.md) val)
*   reverse: [Bool](builtin-Bool.md) val = seq

#### Returns

* [ListValues](collections-ListValues.md)\[A, N\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/list.md#L614)</span>


If we have a list node, we have more values.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/collections/list.md#L620)</span>


Get the value of the list node and replace it with the next one.


```pony
fun ref next()
: N->A ?
```

#### Returns

* N->A ?

---

