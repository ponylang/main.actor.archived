# ListNode\[A: A\]
<span class="source-link">[[Source]](src/collections/list_node.md#L1)</span>

A node in a list.


```pony
class ref ListNode[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list_node.md#L10)</span>


Create a node. Initially, it is not in any list.


```pony
new ref create(
  item: (A | None val) = seq)
: ListNode[A] ref^
```
#### Parameters

*   item: (A | [None](builtin-None.md) val) = seq

#### Returns

* [ListNode](collections-ListNode.md)\[A\] ref^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/list_node.md#L16)</span>


Return the item, if we have one, otherwise raise an error.


```pony
fun box apply()
: this->A ?
```

#### Returns

* this->A ?

---

### update
<span class="source-link">[[Source]](src/collections/list_node.md#L22)</span>


Replace the item and return the previous one. Raise an error if we have no
previous value.


```pony
fun ref update(
  value: (A | None val))
: A^ ?
```
#### Parameters

*   value: (A | [None](builtin-None.md) val)

#### Returns

* A^ ?

---

### pop
<span class="source-link">[[Source]](src/collections/list_node.md#L29)</span>


Remove the item from the node, if we have one, otherwise raise an error.


```pony
fun ref pop()
: A^ ?
```

#### Returns

* A^ ?

---

### prepend
<span class="source-link">[[Source]](src/collections/list_node.md#L35)</span>


Prepend a node to this one. If `that` is already in a list, it is removed
before it is prepended. Returns true if `that` was removed from another
list.


```pony
fun ref prepend(
  that: ListNode[A] ref)
: Bool val
```
#### Parameters

*   that: [ListNode](collections-ListNode.md)\[A\] ref

#### Returns

* [Bool](builtin-Bool.md) val

---

### append
<span class="source-link">[[Source]](src/collections/list_node.md#L67)</span>


Append a node to this one. If `that` is already in a list, it is removed
before it is appended. Returns true if `that` was removed from another
list.


```pony
fun ref append(
  that: ListNode[A] ref)
: Bool val
```
#### Parameters

*   that: [ListNode](collections-ListNode.md)\[A\] ref

#### Returns

* [Bool](builtin-Bool.md) val

---

### remove
<span class="source-link">[[Source]](src/collections/list_node.md#L99)</span>


Remove a node from a list.


```pony
fun ref remove()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### has_prev
<span class="source-link">[[Source]](src/collections/list_node.md#L132)</span>


Return true if there is a previous node.


```pony
fun box has_prev()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### has_next
<span class="source-link">[[Source]](src/collections/list_node.md#L138)</span>


Return true if there is a next node.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### prev
<span class="source-link">[[Source]](src/collections/list_node.md#L144)</span>


Return the previous node.


```pony
fun box prev()
: (this->ListNode[A] ref | None val)
```

#### Returns

* (this->[ListNode](collections-ListNode.md)\[A\] ref | [None](builtin-None.md) val)

---

### next
<span class="source-link">[[Source]](src/collections/list_node.md#L150)</span>


Return the next node.


```pony
fun box next()
: (this->ListNode[A] ref | None val)
```

#### Returns

* (this->[ListNode](collections-ListNode.md)\[A\] ref | [None](builtin-None.md) val)

---

## Private Functions

### _set_list
<span class="source-link">[[Source]](src/collections/list_node.md#L156)</span>


Make this node the only node on the given list.


```pony
fun ref _set_list(
  list: List[A] ref)
: ListNode[A] ref^
```
#### Parameters

*   list: [List](collections-List.md)\[A\] ref

#### Returns

* [ListNode](collections-ListNode.md)\[A\] ref^

---

