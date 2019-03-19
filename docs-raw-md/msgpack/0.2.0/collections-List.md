# List\[A: A\]
<span class="source-link">[[Source]](src/collections/list.md#L1)</span>

A doubly linked list.


```pony
class ref List[A: A] is
  Seq[A] ref
```

#### Implements

* [Seq](builtin-Seq.md)\[A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/list.md#L9)</span>


Do nothing, but be compatible with Seq.


```pony
new ref create(
  len: USize val = seq)
: List[A] ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val = seq

#### Returns

* [List](collections-List.md)\[A\] ref^

---

### unit
<span class="source-link">[[Source]](src/collections/list.md#L15)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L21)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L29)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L35)</span>


Returns the number of items in the list.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/collections/list.md#L41)</span>


Get the i-th element, raising an error if the index is out of bounds.


```pony
fun box apply(
  i: USize val = seq)
: this->A ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val = seq

#### Returns

* this->A ?

---

### update
<span class="source-link">[[Source]](src/collections/list.md#L47)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L55)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L73)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L80)</span>


Empties the list.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### head
<span class="source-link">[[Source]](src/collections/list.md#L88)</span>


Get the head of the list.


```pony
fun box head()
: this->ListNode[A] ref ?
```

#### Returns

* this->[ListNode](collections-ListNode.md)\[A\] ref ?

---

### tail
<span class="source-link">[[Source]](src/collections/list.md#L94)</span>


Get the tail of the list.


```pony
fun box tail()
: this->ListNode[A] ref ?
```

#### Returns

* this->[ListNode](collections-ListNode.md)\[A\] ref ?

---

### prepend_node
<span class="source-link">[[Source]](src/collections/list.md#L100)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L111)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L122)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L132)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L142)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L148)</span>


Removes a value from the tail of the list.


```pony
fun ref pop()
: A^ ?
```

#### Returns

* A^ ?

---

### unshift
<span class="source-link">[[Source]](src/collections/list.md#L154)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L160)</span>


Removes a value from the head of the list.


```pony
fun ref shift()
: A^ ?
```

#### Returns

* A^ ?

---

### append
<span class="source-link">[[Source]](src/collections/list.md#L166)</span>


Append len elements from a sequence, starting from the given offset.


```pony
fun ref append(
  seq: (ReadSeq[A] box & ReadElement[A^] box),
  offset: USize val = seq,
  len: USize val = seq)
: None val
```
#### Parameters

*   seq: ([ReadSeq](builtin-ReadSeq.md)\[A\] box & [ReadElement](builtin-ReadElement.md)\[A^\] box)
*   offset: [USize](builtin-USize.md) val = seq
*   len: [USize](builtin-USize.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### concat
<span class="source-link">[[Source]](src/collections/list.md#L191)</span>


Add len iterated elements to the end of the list, starting from the given
offset.


```pony
fun ref concat(
  iter: Iterator[A^] ref,
  offset: USize val = seq,
  len: USize val = seq)
: None val
```
#### Parameters

*   iter: [Iterator](builtin-Iterator.md)\[A^\] ref
*   offset: [USize](builtin-USize.md) val = seq
*   len: [USize](builtin-USize.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### truncate
<span class="source-link">[[Source]](src/collections/list.md#L214)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L225)</span>


Clone the list.


```pony
fun box clone()
: List[this->A!] ref^
```

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### map\[B: B\]
<span class="source-link">[[Source]](src/collections/list.md#L236)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L263)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L290)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L319)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L349)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L374)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L399)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L415)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L433)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L451)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L471)</span>


Builds a new list by reversing the elements in the list.


```pony
fun box reverse()
: List[this->A!] ref^
```

#### Returns

* [List](collections-List.md)\[this->A!\] ref^

---

### contains\[optional B: (A & [HasEq](builtin-HasEq.md)\[A!\] #read)\]
<span class="source-link">[[Source]](src/collections/list.md#L493)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L521)</span>


Return an iterator on the nodes in the list.


```pony
fun box nodes()
: ListNodes[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListNodes](collections-ListNodes.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### rnodes
<span class="source-link">[[Source]](src/collections/list.md#L527)</span>


Return an iterator on the nodes in the list.


```pony
fun box rnodes()
: ListNodes[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListNodes](collections-ListNodes.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### values
<span class="source-link">[[Source]](src/collections/list.md#L533)</span>


Return an iterator on the values in the list.


```pony
fun box values()
: ListValues[A, this->ListNode[A] ref] ref^
```

#### Returns

* [ListValues](collections-ListValues.md)\[A, this->[ListNode](collections-ListNode.md)\[A\] ref\] ref^

---

### rvalues
<span class="source-link">[[Source]](src/collections/list.md#L539)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L246)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L274)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L300)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L331)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L360)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L385)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L481)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L503)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L545)</span>


```pony
fun ref _increment()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _decrement
<span class="source-link">[[Source]](src/collections/list.md#L548)</span>


```pony
fun ref _decrement()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _set_head
<span class="source-link">[[Source]](src/collections/list.md#L551)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L554)</span>


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
<span class="source-link">[[Source]](src/collections/list.md#L557)</span>


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

