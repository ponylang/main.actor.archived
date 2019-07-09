# Sort\[A: [Seq](builtin-Seq.md)\[B\] ref, B: [Comparable](builtin-Comparable.md)\[B\] #read\]
<span class="source-link">[[Source]](src/collections/sort.md#L1)</span>

Implementation of dual-pivot quicksort.  It operates in-place on the provided Seq, using 
a small amount of additional memory. The nature of the element-realation is expressed via 
the supplied comparator.

(The following is paraphrased from [Wikipedia](https://en.wikipedia.org/wiki/Quicksort).)

Quicksort is a common implementation of a sort algorithm which can sort items of any type 
for which a "less-than" relation (formally, a total order) is defined. 

On average, the algorithm takes O(n log n) comparisons to sort n items. In the worst case, 
it makes O(n2) comparisons, though this behavior is rare.  Multi-pivot implementations 
(of which dual-pivot is one) make efficient use of modern processor caches.

## Example program
The following takes an reverse-alphabetical array of Strings ("third", "second", "first"), 
and sorts it in place alphabetically using the default String Comparator.

It outputs:
  
  first
  second
  third

```pony
   use "collections"

   actor Main 
     new create(env:Env) => 
       let array = [ "third"; "second"; "first" ]
       let sorted_array = Sort[Array[String], String](array)
       for e in sorted_array.values() do
         env.out.print(e) // prints "first \n second \n third"
       end
  ```


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
<span class="source-link">[[Source]](src/collections/sort.md#L38)</span>


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
<span class="source-link">[[Source]](src/collections/sort.md#L38)</span>


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
<span class="source-link">[[Source]](src/collections/sort.md#L38)</span>


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
<span class="source-link">[[Source]](src/collections/sort.md#L45)</span>


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
<span class="source-link">[[Source]](src/collections/sort.md#L77)</span>


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

