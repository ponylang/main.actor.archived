# ReadSeq\[A: A\]
<span class="source-link">[[Source]](src/builtin/read_seq.md#L1)</span>

The readable interface of a sequence.


```pony
interface box ReadSeq[A: A]
```

## Public Functions

### size
<span class="source-link">[[Source]](src/builtin/read_seq.md#L5)</span>


Returns the number of elements in the sequence.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/builtin/read_seq.md#L10)</span>


Returns the i-th element of the sequence. Raises an error if the index
is out of bounds. Note that this returns this->A, not A.


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

### values
<span class="source-link">[[Source]](src/builtin/read_seq.md#L16)</span>


Returns an iterator over the elements of the sequence. Note that this
iterates over this->A, not A.


```pony
fun box values()
: Iterator[this->A] ref^
```

#### Returns

* [Iterator](builtin-Iterator.md)\[this->A\] ref^

---

