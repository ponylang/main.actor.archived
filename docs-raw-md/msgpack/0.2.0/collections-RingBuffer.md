# RingBuffer\[A: A\]
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L1)</span>

A ring buffer.


```pony
class ref RingBuffer[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L9)</span>


Create a ring buffer with a fixed size. The size will be rounded up to the
next power of 2.


```pony
new ref create(
  len: USize val)
: RingBuffer[A] ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [RingBuffer](collections-RingBuffer.md)\[A\] ref^

---

## Public Functions

### head
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L18)</span>


The first read that will succeed. If nothing has been written to the ring,
this will raise an error.


```pony
fun box head()
: USize val ?
```

#### Returns

* [USize](builtin-USize.md) val ?

---

### size
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L33)</span>


The number of elements that have been added to the ring.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### space
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L39)</span>


The available space in the ring.


```pony
fun box space()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L45)</span>


Get the i-th element from the ring. If the i-th element has not yet been
added or is no longer available, this will raise an error.


```pony
fun box apply(
  i: USize val)
: this->A ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* this->A ?

---

### push
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L56)</span>


Add an element to the ring. If the ring is full, this will drop the oldest
element in the ring. Returns true if an element was dropped.


```pony
fun ref push(
  value: A)
: Bool val
```
#### Parameters

*   value: A

#### Returns

* [Bool](builtin-Bool.md) val

---

### clear
<span class="source-link">[[Source]](src/collections/ring_buffer.md#L73)</span>


Clear the queue.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

