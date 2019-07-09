# List\[A: A\]
<span class="source-link">[[Source]](src/collections/list.md#L1)</span>

A doubly linked list.

(The following is paraphrased from [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list).)

A doubly linked list is a linked data structure that consists of a set of sequentially
linked records called nodes. (Implemented in Ponylang via the collections.ListNode class.) Each
node contains four fields: two link fields (references to the previous and to the next node in
the sequence of nodes), one data field, and the reference to the in which it resides.  A doubly
linked list can be conceptualized as two singly linked lists formed from the same data items, but
in opposite sequential orders.

As you would expect. functions are provided to perform all the common list operations such as
creation, traversal, node addition and removal, iteration, mapping, filtering, etc.

## Example program
There are a _lot_ of functions in List. The following code picks out a few common examples.

It outputs:

    A new empty list has 0 nodes.
    Adding one node to our empty list means it now has a size of 1.
    The first (index 0) node has the value: A single String
    A list created by appending our second single-node list onto our first has size: 2
    The List nodes of our first list are now:
      A single String
      Another String
    Append *moves* the nodes from the second list so that now has 0 nodes.
    A list created from an array of three strings has size: 3
      First
      Second
      Third
    Mapping over our three-node list produces a new list of size: 3
    Each node-value in the resulting list is now far more exciting:
      First BOOM!
      Second BOOM!
      Third BOOM!
    Filtering our three-node list produces a new list of size: 2
      Second BOOM!
      Third BOOM!
    The size of our first partitioned list (matches predicate): 1
    The size of our second partitioned list (doesn't match predicate): 1
    Our matching partition elements are:
      Second BOOM!

```pony
  use "collections"

  actor Main
    new create(env:Env) =>
      
      // Create a new empty List of type String
      let my_list = List[String]()
      
      env.out.print("A new empty list has " + my_list.size().string() + " nodes.") // 0
      
      // Push a String literal onto our empty List
      my_list.push("A single String")
      env.out.print("Adding one node to our empty list means it now has a size of "
                    + my_list.size().string() + ".") // 1
      
      // Get the first element of our List
      try env.out.print("The first (index 0) node has the value: "
                        + my_list.index(0)?()?.string()) end // A single String
      
      // Create a second List from a single String literal
      let my_second_list = List[String].unit("Another String")
      
      // Append the second List to the first
      my_list.append_list(my_second_list)
      env.out.print("A list created by appending our second single-node list onto our first has size: "
                    + my_list.size().string()) // 2
      env.out.print("The List nodes of our first list are now:")
      for n in my_list.values() do
        env.out.print("\t" + n.string())
      end
      // NOTE: this _moves_ the elements so second_list consequently ends up empty
      env.out.print("Append *moves* the nodes from the second list so that now has "
                    + my_second_list.size().string() + " nodes.") // 0
      
      // Create a third List from a Seq(ence)
      // (In this case a literal array of Strings)
      let my_third_list = List[String].from(["First"; "Second"; "Third"])
      env.out.print("A list created from an array of three strings has size: "
                    + my_third_list.size().string()) // 3
      for n in my_third_list.values() do
        env.out.print("\t" + n.string())
      end
      
      // Map over the third List, concatenating some "BOOM!'s" into a new List
      let new_list = my_third_list.map[String]({ (n) => n + " BOOM!" })
      env.out.print("Mapping over our three-node list produces a new list of size: "
                    + new_list.size().string()) // 3
      env.out.print("Each node-value in the resulting list is now far more exciting:")
      for n in new_list.values() do
        env.out.print("\t" + n.string())
      end

      // Filter the new list to extract 2 elements
      let filtered_list = new_list.filter({ (n) => n.string().contains("d BOOM!") })
      env.out.print("Filtering our three-node list produces a new list of size: "
                        + filtered_list.size().string()) // 2
      for n in filtered_list.values() do
        env.out.print("\t" + n.string()) // Second BOOM!\nThird BOOM!
      end
      
      // Partition the filtered list
      let partitioned_lists = filtered_list.partition({ (n) => n.string().contains("Second") })
      env.out.print("The size of our first partitioned list (matches predicate): " + partitioned_lists._1.size().string())        // 1
      env.out.print("The size of our second partitioned list (doesn't match predicate): " + partitioned_lists._2.size().string())  // 1
      env.out.print("Our matching partition elements are:")
      for n in partitioned_lists._1.values() do
        env.out.print("\t" + n.string()) // Second BOOM!
      end
```



```pony
class ref List[A: A] is
  Seq[A] ref
```

#### Implements

* [Seq](builtin-Seq.md)\[A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list.md#L123)</span>


Do nothing, but be compatible with Seq.


```pony
new ref create(
  len: USize val = 0)
: List[A] ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val = 0

#### Returns

* [List](collections-List.md)\[A\] ref^

---

### unit
<span class="source-link">[[Source]](src/collections/list.md#L129)</span>


Builds a new list from an element.


```pony
new ref unit(
  a: A)
: List[A] ref^
```
#### Parameters

*   a: A

#### Returns

* [List](collections-List.md)\[A\] ref^

---

### from
<span class="source-link">[[Source]](src/collections/list.md#L135)</span>


Builds a new list from the sequence passed in.


```pony
new ref from(
  seq: Array[A^] ref)
: List[A] ref^
```
#### Parameters

*   seq: [Array](builtin-Array.md)\[A^\] ref

#### Returns

* [List](collections-List.md)\[A\] ref^

---

## Public Functions

### reserve
<span class="source-link">[[Source]](src/collections/list.md#L143)</span>


Do nothing, but be compatible with Seq.


```pony
fun ref reserve(
  len: USize val)
: None val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### size
<span class="source-link">[[Source]](src/collections/list.md#L149)</span>


Returns the number of items in the list.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/collections/list.md#L155)</span>


Get the i-th element, raising an error if the index is out of bounds.


```pony
fun box apply(
  i: USize val = 0)
: this->A ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val = 0

#### Returns

* this->A ?

---

### update
<span class="source-link">[[Source]](src/collections/list.md#L161)</span>


Change the i-th element, raising an error if the index is out of bounds.
Returns the previous value, which may be None if the node has been popped
but left on the list.


```pony
fun ref update(
  i: USize val,
  value: A)
: A^ ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   value: A

#### Returns

* A^ ?

---

### index
<span class="source-link">[[Source]](src/collections/list.md#L169)</span>


Gets the i-th node, raising an error if the index is out of bounds.


```pony
fun box index(
  i: USize val)
: this->ListNode[A] ref ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* this->[ListNode](collections-ListNode.md)\[A\] ref ?

---

### remove
<span class="source-link">[[Source]](src/collections/list.md#L187)</span>


Remove the i-th node, raising an error if the index is out of bounds.
The removed node is returned.


```pony
fun ref remove(
  i: USize val)
: ListNode[A] ref ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* [ListNode](collections-ListNode.md)\[A\] ref ?

---

### clear
<span class="source-link">[[Source]](src/collections/list.md#L194)</span>


Empties the list.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### head
<span class="source-link">[[Source]](src/collections/list.md#L202)</span>


Get the head of the list.


```pony
fun box head()
: this->ListNode[A] ref ?
```

#### Returns

* this->[ListNode](collections-ListNode.md)\[A\] ref ?

---

### tail
<span class="source-link">[[Source]](src/collections/list.md#L208)</span>


Get the tail of the list.


```pony
fun box tail()
: this->ListNode[A] ref ?
```

#### Returns

* this->[ListNode](collections-ListNode.md)\[A\] ref ?

---

### prepend_node
<span class="source-link">[[Source]](src/collections/list.md#L214)</span>


Adds a node to the head of the list.


```pony
fun ref prepend_node(
  node: ListNode[A] ref)
: None val
```
#### Parameters

*   node: [ListNode](collections-ListNode.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

### append_node
<span class="source-link">[[Source]](src/collections/list.md#L225)</span>


Adds a node to the tail of the list.


```pony
fun ref append_node(
  node: ListNode[A] ref)
: None val
```
#### Parameters

*   node: [ListNode](collections-ListNode.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

### append_list
<span class="source-link">[[Source]](src/collections/list.md#L236)</span>


Remove all nodes from that and append them to this.


```pony
fun ref append_list(
  that: List[A] ref)
: None val
```
#### Parameters

*   that: [List](collections-List.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

### prepend_list
<span class="source-link">[[Source]](src/collections/list.md#L246)</span>


Remove all nodes from that and prepend them to this.


```pony
fun ref prepend_list(
  that: List[A] ref)
: None val
```
#### Parameters

*   that: [List](collections-List.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

### push
<span class="source-link">[[Source]](src/collections/list.md#L256)</span>


Adds a value to the tail of the list.


```pony
fun ref push(
  a: A)
: None val
```
#### Parameters

*   a: A

#### Returns

* [None](builtin-None.md) val

---

### pop
<span class="source-link">[[Source]](src/collections/list.md#L262)</span>


Removes a value from the tail of the list.


```pony
fun ref pop()
: A^ ?
```

#### Returns

* A^ ?

---

### unshift
<span class="source-link">[[Source]](src/collections/list.md#L268)</span>


Adds a value to the head of the list.


```pony
fun ref unshift(
  a: A)
: None val
```
#### Parameters

*   a: A

#### Returns

* [None](builtin-None.md) val

---

### shift
<span class="source-link">[[Source]](src/collections/list.md#L274)</span>


Removes a value from the head of the list.


```pony
fun ref shift()
: A^ ?
```

#### Returns

* A^ ?

---

### append
<span class="source-link">[[Source]](src/collections/list.md#L280)</span>


Append len elements from a sequence, starting from the given offset.


```pony
fun ref append(
  seq: (ReadSeq[A] box & ReadElement[A^] box),
  offset: USize val = 0,
  len: USize val = call)
: None val
```
#### Parameters

*   seq: ([ReadSeq](builtin-ReadSeq.md)\[A\] box & [ReadElement](builtin-ReadElement.md)\[A^\] box)
*   offset: [USize](builtin-USize.md) val = 0
*   len: [USize](builtin-USize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### concat
<span class="source-link">[[Source]](src/collections/list.md#L305)</span>


Add len iterated elements to the end of the list, starting from the given
offset.


```pony
fun ref concat(
  iter: Iterator[A^] ref,
  offset: USize val = 0,
  len: USize val = call)
: None val
```
#### Parameters

*   iter: [Iterator](builtin-Iterator.md)\[A^\] ref
*   offset: [USize](builtin-USize.md) val = 0
*   len: [USize](builtin-USize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### truncate
<span class="source-link">[[Source]](src/collections/list.md#L328)</span>


Truncate the list to the given length, discarding excess elements.
If the list is already smaller than len, do nothing.


```pony
fun ref truncate(
  len: USize val)
: None val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### clone
<span class="source-link">[[Source]](src/collections/list.md#L339)</span>


Clone the list.


```pony
fun box clone()
: List[this->A!] ref^
```

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### map\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L350)</span>


Builds a new list by applying a function to every member of the list.


```pony
fun box map[B: B](
  f: {(this->A!): B^}[A, B] box)
: List[B] ref^
```
#### Parameters

*   f: {(this->A!): B^}[A, B] box

#### Returns

* [List](collections-List.md)\[B\] ref^

---

### flat_map\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L377)</span>


Builds a new list by applying a function to every member of the list and
using the elements of the resulting lists.


```pony
fun box flat_map[B: B](
  f: {(this->A!): List[B]}[A, B] box)
: List[B] ref^
```
#### Parameters

*   f: {(this->A!): List[B]}[A, B] box

#### Returns

* [List](collections-List.md)\[B\] ref^

---

### filter
<span class="source-link">[[Source]](src/collections/list.md#L404)</span>


Builds a new list with those elements that satisfy a provided predicate.


```pony
fun box filter(
  f: {(this->A!): Bool}[A] box)
: List[this->A!] ref^
```
#### Parameters

*   f: {(this->A!): Bool}[A] box

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### fold\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L433)</span>


Folds the elements of the list using the supplied function.


```pony
fun box fold[B: B](
  f: {(B!, this->A!): B^}[A, B] box,
  acc: B)
: B
```
#### Parameters

*   f: {(B!, this->A!): B^}[A, B] box
*   acc: B

#### Returns

* B

---

### every
<span class="source-link">[[Source]](src/collections/list.md#L463)</span>


Returns true if every element satisfies the provided predicate, false
otherwise.


```pony
fun box every(
  f: {(this->A!): Bool}[A] box)
: Bool val
```
#### Parameters

*   f: {(this->A!): Bool}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### exists
<span class="source-link">[[Source]](src/collections/list.md#L488)</span>


Returns true if at least one element satisfies the provided predicate,
false otherwise.


```pony
fun box exists(
  f: {(this->A!): Bool}[A] box)
: Bool val
```
#### Parameters

*   f: {(this->A!): Bool}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### partition
<span class="source-link">[[Source]](src/collections/list.md#L513)</span>


Builds a pair of lists, the first of which is made up of the elements
satisfying the supplied predicate and the second of which is made up of
those that do not.


```pony
fun box partition(
  f: {(this->A!): Bool}[A] box)
: (List[this->A!] ref^ , List[this->A!] ref^)
```
#### Parameters

*   f: {(this->A!): Bool}[A] box

#### Returns

* ([List](collections-List.md)\[this->A!\] ref^ , [List](collections-List.md)\[this->A!\] ref^)

---

### drop
<span class="source-link">[[Source]](src/collections/list.md#L529)</span>


Builds a list by dropping the first n elements.


```pony
fun box drop(
  n: USize val)
: List[this->A!] ref^
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### take
<span class="source-link">[[Source]](src/collections/list.md#L547)</span>


Builds a list of the first n elements.


```pony
fun box take(
  n: USize val)
: List[this->A!] ref
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [List](collections-List.md)\[this->A!\] ref

---

### take_while
<span class="source-link">[[Source]](src/collections/list.md#L565)</span>


Builds a list of elements satisfying the provided predicate until one does
not.


```pony
fun box take_while(
  f: {(this->A!): Bool}[A] box)
: List[this->A!] ref^
```
#### Parameters

*   f: {(this->A!): Bool}[A] box

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### reverse
<span class="source-link">[[Source]](src/collections/list.md#L585)</span>


Builds a new list by reversing the elements in the list.


```pony
fun box reverse()
: List[this->A!] ref^
```

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### contains\[optional B: (A & [HasEq](builtin-HasEq.md)\[A!\] #read)\]
<span class="source-link">[[Source]](src/collections/list.md#L607)</span>


Returns true if the list contains the provided element, false otherwise.


```pony
fun box contains[optional B: (A & HasEq[A!] #read)](
  a: box->B)
: Bool val
```
#### Parameters

*   a: box->B

#### Returns

* [Bool](builtin-Bool.md) val

---

### nodes
<span class="source-link">[[Source]](src/collections/list.md#L635)</span>


Return an iterator on the nodes in the list.


```pony
fun box nodes()
: ListNodes[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListNodes](collections-ListNodes.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### rnodes
<span class="source-link">[[Source]](src/collections/list.md#L641)</span>


Return an iterator on the nodes in the list.


```pony
fun box rnodes()
: ListNodes[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListNodes](collections-ListNodes.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### values
<span class="source-link">[[Source]](src/collections/list.md#L647)</span>


Return an iterator on the values in the list.


```pony
fun box values()
: ListValues[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListValues](collections-ListValues.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### rvalues
<span class="source-link">[[Source]](src/collections/list.md#L653)</span>


Return an iterator on the values in the list.


```pony
fun box rvalues()
: ListValues[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListValues](collections-ListValues.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

## Private Functions

### _map\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L360)</span>


Private helper for map, recursively working with ListNodes.


```pony
fun box _map[B: B](
  ln: this->ListNode[A] ref,
  f: {(this->A!): B^}[A, B] box,
  acc: List[B] ref)
: List[B] ref^
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(this->A!): B^}[A, B] box
*   acc: [List](collections-List.md)\[B\] ref

#### Returns

* [List](collections-List.md)\[B\] ref^

---

### _flat_map\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L388)</span>


Private helper for flat_map, recursively working with ListNodes.


```pony
fun box _flat_map[B: B](
  ln: this->ListNode[A] ref,
  f: {(this->A!): List[B]}[A, B] box,
  acc: List[B] ref)
: List[B] ref^
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(this->A!): List[B]}[A, B] box
*   acc: [List](collections-List.md)\[B\] ref

#### Returns

* [List](collections-List.md)\[B\] ref^

---

### _filter
<span class="source-link">[[Source]](src/collections/list.md#L414)</span>


Private helper for filter, recursively working with ListNodes.


```pony
fun box _filter(
  ln: this->ListNode[A] ref,
  f: {(this->A!): Bool}[A] box,
  acc: List[this->A!] ref)
: List[this->A!] ref
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(this->A!): Bool}[A] box
*   acc: [List](collections-List.md)\[this->A!\] ref

#### Returns

* [List](collections-List.md)\[this->A!\] ref

---

### _fold\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L445)</span>


Private helper for fold, recursively working with ListNodes.


```pony
fun box _fold[B: B](
  ln: this->ListNode[A] ref,
  f: {(B!, this->A!): B^}[A, B] box,
  acc: B)
: B
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(B!, this->A!): B^}[A, B] box
*   acc: B

#### Returns

* B

---

### _every
<span class="source-link">[[Source]](src/collections/list.md#L474)</span>


Private helper for every, recursively working with ListNodes.


```pony
fun box _every(
  ln: this->ListNode[A] ref,
  f: {(this->A!): Bool}[A] box)
: Bool val
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(this->A!): Bool}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### _exists
<span class="source-link">[[Source]](src/collections/list.md#L499)</span>


Private helper for exists, recursively working with ListNodes.


```pony
fun box _exists(
  ln: this->ListNode[A] ref,
  f: {(this->A!): Bool}[A] box)
: Bool val
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   f: {(this->A!): Bool}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### _reverse
<span class="source-link">[[Source]](src/collections/list.md#L595)</span>


Private helper for reverse, recursively working with ListNodes.


```pony
fun box _reverse(
  ln: this->ListNode[A] ref,
  acc: List[this->A!] ref)
: List[this->A!] ref^
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   acc: [List](collections-List.md)\[this->A!\] ref

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### _contains\[optional B: (A & [HasEq](builtin-HasEq.md)\[A!\] #read)\]
<span class="source-link">[[Source]](src/collections/list.md#L617)</span>


Private helper for contains, recursively working with ListNodes.


```pony
fun box _contains[optional B: (A & HasEq[A!] #read)](
  ln: this->ListNode[A] ref,
  a: box->B)
: Bool val
```
#### Parameters

*   ln: this->[ListNode](collections-ListNode.md)\[A\] ref
*   a: box->B

#### Returns

* [Bool](builtin-Bool.md) val

---

### _increment
<span class="source-link">[[Source]](src/collections/list.md#L659)</span>


```pony
fun ref _increment()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _decrement
<span class="source-link">[[Source]](src/collections/list.md#L662)</span>


```pony
fun ref _decrement()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _set_head
<span class="source-link">[[Source]](src/collections/list.md#L665)</span>


```pony
fun ref _set_head(
  head': (ListNode[A] ref | None val))
: None val
```
#### Parameters

*   head': ([ListNode](collections-ListNode.md)\[A\] ref | [None](builtin-None.md) val)

#### Returns

* [None](builtin-None.md) val

---

### _set_tail
<span class="source-link">[[Source]](src/collections/list.md#L668)</span>


```pony
fun ref _set_tail(
  tail': (ListNode[A] ref | None val))
: None val
```
#### Parameters

*   tail': ([ListNode](collections-ListNode.md)\[A\] ref | [None](builtin-None.md) val)

#### Returns

* [None](builtin-None.md) val

---

### _set_both
<span class="source-link">[[Source]](src/collections/list.md#L671)</span>


```pony
fun ref _set_both(
  node: ListNode[A] ref)
: None val
```
#### Parameters

*   node: [ListNode](collections-ListNode.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

