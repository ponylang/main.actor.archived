# ListNode\[A: A\]
<span class="source-link">[[Source]](src/collections/list_node.md#L1)</span>

A node in a doubly linked list.

(See Ponylang [collections.List](https://stdlib.ponylang.io/collections-List/)
class for usage examples.)

Each node contains four fields: two link fields (references to the previous and
to the next node in the sequence of nodes), one data field, and the reference to
the in which it resides.

As you would expect functions are provided to create a ListNode, update a
ListNode's contained item, and pop the item from the ListNode.

Additional functions are provided to operate on a ListNode as part of a Linked
List. These provide for prepending, appending, removal, and safe traversal in
both directions.  The Ponylang
[collections.List](https://stdlib.ponylang.io/collections-List/) class is the
correct way to create these. _Do not attempt to create a Linked List using only
ListNodes._

## Example program
The functions which are illustrated below are only those which operate on an
individual ListNode.

It outputs:

  My node has the item value: My Node item
  My node has the updated item value: My updated Node item
  Popped the item from the ListNode
  The ListNode has no (None) item.

```pony
  use "collections"
  actor Main
    new create(env:Env) =>
      
      // Create a new ListNode of type String
      let my_list_node = ListNode[String]("My Node item")
      try 
        env.out.print("My node has the item value: "
                      + my_list_node.apply()?) // My Node item
      end
      
      // Update the item contained in the ListNode
      try
        my_list_node.update("My updated Node item")?
        env.out.print("My node has the updated item value: "
                      + my_list_node.apply()?) // My updated Node item
      end
      // Pop the item from the ListNode
      try
        my_list_node.pop()?
        env.out.print("Popped the item from the ListNode")
        my_list_node.apply()? // This will error as the item is now None
      else
        env.out.print("The ListNode has no (None) item.")
      end
...


```pony
class ref ListNode[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list_node.md#L66)</span>


Create a node. Initially, it is not in any list.


```pony
new ref create(
  item: (A | None val) = reference)
: ListNode[A] ref^
```
#### Parameters

*   item: (A | [None](builtin-None.md) val) = reference

#### Returns

* [ListNode](collections-ListNode.md)\[A\] ref^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/list_node.md#L72)</span>


Return the item, if we have one, otherwise raise an error.


```pony
fun box apply()
: this->A ?
```

#### Returns

* this->A ?

---

### update
<span class="source-link">[[Source]](src/collections/list_node.md#L78)</span>


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
<span class="source-link">[[Source]](src/collections/list_node.md#L85)</span>


Remove the item from the node, if we have one, otherwise raise an error.


```pony
fun ref pop()
: A^ ?
```

#### Returns

* A^ ?

---

### prepend
<span class="source-link">[[Source]](src/collections/list_node.md#L91)</span>


Prepend a node to this one. If `that` is already in a list, it is removed
before it is prepended. Returns true if `that` was removed from another
list.
If the ListNode is not contained within a List the prepend will fail.


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
<span class="source-link">[[Source]](src/collections/list_node.md#L124)</span>


Append a node to this one. If `that` is already in a list, it is removed
before it is appended. Returns true if `that` was removed from another
list.

If the ListNode is not contained within a List the append will fail.


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
<span class="source-link">[[Source]](src/collections/list_node.md#L158)</span>


Remove a node from a list.

The ListNode must be contained within a List for this to succeed.


```pony
fun ref remove()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### has_prev
<span class="source-link">[[Source]](src/collections/list_node.md#L193)</span>


Return true if there is a previous node.


```pony
fun box has_prev()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### has_next
<span class="source-link">[[Source]](src/collections/list_node.md#L199)</span>


Return true if there is a next node.


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### prev
<span class="source-link">[[Source]](src/collections/list_node.md#L205)</span>


Return the previous node.


```pony
fun box prev()
: (this->ListNode[A] ref | None val)
```

#### Returns

* (this->[ListNode](collections-ListNode.md)\[A\] ref | [None](builtin-None.md) val)

---

### next
<span class="source-link">[[Source]](src/collections/list_node.md#L211)</span>


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
<span class="source-link">[[Source]](src/collections/list_node.md#L217)</span>


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

