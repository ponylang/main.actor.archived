# BinaryHeap\[A: [Comparable](builtin-Comparable.md)\[A\] #read, P: ([_BinaryHeapPriority](collections-_BinaryHeapPriority.md)\[A\] val & ([MinHeapPriority](collections-MinHeapPriority.md)\[A\] val | [MaxHeapPriority](collections-MaxHeapPriority.md)\[A\] val))\]
<span class="source-link">[[Source]](src/collections/heap.md#L5)</span>

A priority queue implemented as a binary heap. The `BinaryHeapPriority` type
parameter determines whether this is max-heap or a min-heap.


```pony
class ref BinaryHeap[A: Comparable[A] #read, P: (_BinaryHeapPriority[A] val & (MinHeapPriority[A] val | MaxHeapPriority[A] val))]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/heap.md#L12)</span>


Create an empty heap with space for `len` elements.


```pony
new ref create(
  len: USize val)
: BinaryHeap[A, P] ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [BinaryHeap](collections-BinaryHeap.md)\[A, P\] ref^

---

## Public Functions

### clear
<span class="source-link">[[Source]](src/collections/heap.md#L18)</span>


Remove all elements from the heap.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### size
<span class="source-link">[[Source]](src/collections/heap.md#L24)</span>


Return the number of elements in the heap.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### peek
<span class="source-link">[[Source]](src/collections/heap.md#L30)</span>


Return the highest priority item in the heap. For max-heaps, the greatest
item will be returned. For min-heaps, the smallest item will be returned.


```pony
fun box peek()
: this->A ?
```

#### Returns

* this->A ?

---

### push
<span class="source-link">[[Source]](src/collections/heap.md#L37)</span>


Push an item into the heap.

The time complexity of this operation is O(log(n)) with respect to the size
of the heap.


```pony
fun ref push(
  value: A)
: None val
```
#### Parameters

*   value: A

#### Returns

* [None](builtin-None.md) val

---

### pop
<span class="source-link">[[Source]](src/collections/heap.md#L47)</span>


Remove the highest priority value from the heap and return it. For
max-heaps, the greatest item will be returned. For min-heaps, the smallest
item will be returned.

The time complexity of this operation is O(log(n)) with respect to the size
of the heap.


```pony
fun ref pop()
: A^ ?
```

#### Returns

* A^ ?

---

### append
<span class="source-link">[[Source]](src/collections/heap.md#L61)</span>


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
<span class="source-link">[[Source]](src/collections/heap.md#L72)</span>


Add len iterated elements, starting from the given offset.


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

### values
<span class="source-link">[[Source]](src/collections/heap.md#L79)</span>


Return an iterator for the elements in the heap. The order of elements is
arbitrary.


```pony
fun box values()
: ArrayValues[A, this->Array[A] ref] ref^
```

#### Returns

* [ArrayValues](builtin-ArrayValues.md)\[A, this->[Array](builtin-Array.md)\[A\] ref\] ref^

---

## Private Functions

### _make_heap
<span class="source-link">[[Source]](src/collections/heap.md#L86)</span>


```pony
fun ref _make_heap()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _sift_up
<span class="source-link">[[Source]](src/collections/heap.md#L94)</span>


```pony
fun ref _sift_up(
  n: USize val)
: None val
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### _sift_down
<span class="source-link">[[Source]](src/collections/heap.md#L107)</span>


```pony
fun ref _sift_down(
  start: USize val,
  n: USize val)
: Bool val
```
#### Parameters

*   start: [USize](builtin-USize.md) val
*   n: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _apply
<span class="source-link">[[Source]](src/collections/heap.md#L128)</span>


```pony
fun box _apply(
  i: USize val)
: this->A ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* this->A ?

---

