# ListNodes\[A: A, N: [ListNode](collections-ListNode.md)\[A\] #read\]
<span class="source-link">[[Source]](src/collections/list.md#L677)</span>

Iterate over the nodes in a list.


```pony
class ref ListNodes[A: A, N: ListNode[A] #read] is
  Iterator[N] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[N\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list.md#L684)</span>


Keep the next list node to be examined.


```pony
new ref create(
  head: (N | None val),
  reverse: Bool val = false)
: ListNodes[A, N] ref^
```
#### Parameters

*   head: (N | [None](builtin-None.md) val)
*   reverse: [Bool](builtin-Bool.md) val = false

#### Returns

* [ListNodes](collections-ListNodes.md)\[A, N\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/list.md#L691)</span>


If we have a list node, we have more values.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/collections/list.md#L697)</span>


Get the list node and replace it with the next one.


```pony
fun ref next()
: N ?
```

#### Returns

* N ?

---

