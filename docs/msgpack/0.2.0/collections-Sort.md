# Sort\[A: [Seq](builtin-Seq.md)\[B\] ref, B: [Comparable](builtin-Comparable.md)\[B\] #read\]
<span class="source-link">[[Source]](src/collections/sort.md#L1)</span>

Implementation of dual-pivot quicksort.


```pony
primitive val Sort[A: Seq[B] ref, B: Comparable[B] #read]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/sort.md#L1)</span>


```pony
new val create()
: Sort[A, B] val^
```

#### Returns

* [Sort](collections-Sort.md)\[A, B\] val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/collections/sort.md#L5)</span>


Sort the given seq.


```pony
fun box apply(
  a: A)
: A^
```
#### Parameters

*   a: A

#### Returns

* A^

---

### eq
<span class="source-link">[[Source]](src/collections/sort.md#L5)</span>


```pony
fun box eq(
  that: Sort[A, B] val)
: Bool val
```
#### Parameters

*   that: [Sort](collections-Sort.md)\[A, B\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/collections/sort.md#L5)</span>


```pony
fun box ne(
  that: Sort[A, B] val)
: Bool val
```
#### Parameters

*   that: [Sort](collections-Sort.md)\[A, B\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _sort
<span class="source-link">[[Source]](src/collections/sort.md#L12)</span>


```pony
fun box _sort(
  a: A,
  lo: ISize val,
  hi: ISize val)
: None val ?
```
#### Parameters

*   a: A
*   lo: [ISize](builtin-ISize.md) val
*   hi: [ISize](builtin-ISize.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### _swap
<span class="source-link">[[Source]](src/collections/sort.md#L44)</span>


```pony
fun box _swap(
  a: A,
  i: ISize val,
  j: ISize val)
: None val ?
```
#### Parameters

*   a: A
*   i: [ISize](builtin-ISize.md) val
*   j: [ISize](builtin-ISize.md) val

#### Returns

* [None](builtin-None.md) val ?

---

