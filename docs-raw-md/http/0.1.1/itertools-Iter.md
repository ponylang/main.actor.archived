# Iter\[A: A\]
<span class="source-link">[[Source]](src/itertools/iter.md#L3)</span>

Wrapper class containing methods to modify iterators.


```pony
class ref Iter[A: A] is
  Iterator[A] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/itertools/iter.md#L9)</span>


```pony
new ref create(
  iter: Iterator[A] ref)
: Iter[A] ref^
```
#### Parameters

*   iter: [Iterator](builtin-Iterator.md)\[A\] ref

#### Returns

* [Iter](itertools-Iter.md)\[A\] ref^

---

### chain
<span class="source-link">[[Source]](src/itertools/iter.md#L18)</span>


Take an iterator of iterators and return an Iter containing the
items of the first one, then the second one, and so on.

## Example
```pony
let xs = [as I64: 1; 2].values()
let ys = [as I64: 3; 4].values()

Iter[I64].chain([xs; ys].values())
```
`1 2 3 4`


```pony
new ref chain(
  outer_iterator: Iterator[Iterator[A] ref] ref)
: Iter[A] ref^
```
#### Parameters

*   outer_iterator: [Iterator](builtin-Iterator.md)\[[Iterator](builtin-Iterator.md)\[A\] ref\] ref

#### Returns

* [Iter](itertools-Iter.md)\[A\] ref^

---

### repeat_value
<span class="source-link">[[Source]](src/itertools/iter.md#L72)</span>


Create an iterator that returns the given value forever.

## Example

```pony
Iter[U32].repeat_value(7)
```
`7 7 7 7 7 7 7 7 7 ...`


```pony
new ref repeat_value(
  value: A)
: Iter[A] ref^
```
#### Parameters

*   value: A

#### Returns

* [Iter](itertools-Iter.md)\[A\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/itertools/iter.md#L12)</span>


```pony
fun ref has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/itertools/iter.md#L15)</span>


```pony
fun ref next()
: A ?
```

#### Returns

* A ?

---

### map_stateful\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L92)</span>


Allows stateful transformaion of each element from the iterator, similar
to `map`.


```pony
fun ref map_stateful[B: B](
  f: {ref(A!): B^ ?}[A, B] ref)
: Iter[B] ref^
```
#### Parameters

*   f: {ref(A!): B^ ?}[A, B] ref

#### Returns

* [Iter](itertools-Iter.md)\[B\] ref^

---

### filter_stateful
<span class="source-link">[[Source]](src/itertools/iter.md#L106)</span>


Allows filtering of elements based on a stateful adapter, similar to
`filter`.


```pony
fun ref filter_stateful(
  f: {ref(A!): Bool ?}[A] ref)
: Iter[A!] ref^
```
#### Parameters

*   f: {ref(A!): Bool ?}[A] ref

#### Returns

* [Iter](itertools-Iter.md)\[A!\] ref^

---

### filter_map_stateful\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L156)</span>


Allows stateful modification to the stream of elements from an iterator,
similar to `filter_map`.


```pony
fun ref filter_map_stateful[B: B](
  f: {ref(A!): (B^ | None) ?}[A, B] ref)
: Iter[B] ref^
```
#### Parameters

*   f: {ref(A!): (B^ | None) ?}[A, B] ref

#### Returns

* [Iter](itertools-Iter.md)\[B\] ref^

---

### all
<span class="source-link">[[Source]](src/itertools/iter.md#L205)</span>


Return false if at least one value of the iterator fails to match the
predicate `f`. This method short-circuits at the first value where the
predicate returns false, otherwise true is returned.

## Examples

```pony
Iter[I64]([2; 4; 6].values())
  .all({(x) => (x % 2) == 0 })
```
`true`

```pony
Iter[I64]([2; 3; 4].values())
  .all({(x) => (x % 2) == 0 })
```
`false`


```pony
fun ref all(
  f: {(A!): Bool ?}[A] box)
: Bool val
```
#### Parameters

*   f: {(A!): Bool ?}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### any
<span class="source-link">[[Source]](src/itertools/iter.md#L232)</span>


Return true if at least one value of the iterator matches the predicate
`f`. This method short-circuits at the first value where the predicate
returns true, otherwise false is returned.

## Examples

```pony
Iter[I64]([2; 4; 6].values())
  .any({(I64) => (x % 2) == 1 })
```
`false`

```pony
Iter[I64]([2; 3; 4].values())
  .any({(I64) => (x % 2) == 1 })
```
`true`


```pony
fun ref any(
  f: {(A!): Bool ?}[A] box)
: Bool val
```
#### Parameters

*   f: {(A!): Bool ?}[A] box

#### Returns

* [Bool](builtin-Bool.md) val

---

### collect\[optional B: [Seq](builtin-Seq.md)\[A!\] ref\]
<span class="source-link">[[Source]](src/itertools/iter.md#L259)</span>


Push each value from the iterator into the collection `coll`.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .collect(Array[I64](3))
```
`[1, 2, 3]`


```pony
fun ref collect[optional B: Seq[A!] ref](
  coll: B)
: B^
```
#### Parameters

*   coll: B

#### Returns

* B^

---

### count
<span class="source-link">[[Source]](src/itertools/iter.md#L276)</span>


Return the number of values in the iterator.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .count()
```
`3`


```pony
fun ref count()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### cycle
<span class="source-link">[[Source]](src/itertools/iter.md#L294)</span>


Repeatedly cycle through the values from the iterator.

WARNING: The values returned by the original iterator are cached, so
the input iterator should be finite.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .cycle()
```
`1 2 3 1 2 3 1 2 3 ...`


```pony
fun ref cycle()
: Iter[A!] ref^
```

#### Returns

* [Iter](itertools-Iter.md)\[A!\] ref^

---

### enum\[optional B: ([Real](builtin-Real.md)\[B\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val))\]
<span class="source-link">[[Source]](src/itertools/iter.md#L351)</span>


An iterator which yields the current iteration count as well as the next
value from the iterator.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .enum()
```
`(0, 1) (1, 2) (2, 3)`


```pony
fun ref enum[optional B: (Real[B] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val))]()
: Iter[(B , A)] ref^
```

#### Returns

* [Iter](itertools-Iter.md)\[(B , A)\] ref^

---

### filter
<span class="source-link">[[Source]](src/itertools/iter.md#L374)</span>


Return an iterator that only returns items that match the predicate `f`.

## Example

```pony
Iter[I64]([1; 2; 3; 4; 5; 6].values())
  .filter({(x) => (x % 2) == 0 })
```
`2 4 6`


```pony
fun ref filter(
  f: {(A!): Bool ?}[A] box)
: Iter[A!] ref^
```
#### Parameters

*   f: {(A!): Bool ?}[A] box

#### Returns

* [Iter](itertools-Iter.md)\[A!\] ref^

---

### find
<span class="source-link">[[Source]](src/itertools/iter.md#L388)</span>


Return the nth value in the iterator that satisfies the predicate `f`.

## Examples

```pony
Iter[I64]([1; 2; 3].values())
  .find({(x) => (x % 2) == 0 })
```
`2`

```pony
Iter[I64]([1; 2; 3; 4].values())
  .find({(x) => (x % 2) == 0 }, 2)
```
`4`


```pony
fun ref find(
  f: {(A!): Bool ?}[A] box,
  n: USize val = seq)
: A! ?
```
#### Parameters

*   f: {(A!): Bool ?}[A] box
*   n: [USize](builtin-USize.md) val = seq

#### Returns

* A! ?

---

### filter_map\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L418)</span>


Return an iterator which applies `f` to each element. If `None` is
returned, then the iterator will try again by applying `f` to the next
element. Otherwise, the value of type `B` is returned.

## Example
```pony
Iter[I64]([as I64: 1; -2; 4; 7; -5])
  .filter_map[USize](
    {(i: I64): (USize | None) => if i >= 0 then i.usize() end })
```
`1 4 7`
```


```pony
fun ref filter_map[B: B](
  f: {(A!): (B^ | None) ?}[A, B] box)
: Iter[B] ref^
```
#### Parameters

*   f: {(A!): (B^ | None) ?}[A, B] box

#### Returns

* [Iter](itertools-Iter.md)\[B\] ref^

---

### flat_map\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L435)</span>


Return an iterator over the values of the iterators produced from the
application of the given function.

## Example

```pony
Iter[String](["alpha"; "beta"; "gamma"])
  .flat_map[U8]({(s: String): Iterator[U8] => s.values() })
```
`a l p h a b e t a g a m m a`


```pony
fun ref flat_map[B: B](
  f: {(A!): Iterator[B] ?}[A, B] box)
: Iter[B] ref^
```
#### Parameters

*   f: {(A!): Iterator[B] ?}[A, B] box

#### Returns

* [Iter](itertools-Iter.md)\[B\] ref^

---

### fold\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L477)</span>


Apply a function to every element, producing an accumulated value.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .fold[I64](0, {(sum, x) => sum + x })
```
`6`


```pony
fun ref fold[B: B](
  acc: B,
  f: {(B, A!): B^}[A, B] box)
: B^
```
#### Parameters

*   acc: B
*   f: {(B, A!): B^}[A, B] box

#### Returns

* B^

---

### fold_partial\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L495)</span>


A partial version of `fold`.


```pony
fun ref fold_partial[B: B](
  acc: B,
  f: {(B, A!): B^ ?}[A, B] box)
: B^ ?
```
#### Parameters

*   acc: B
*   f: {(B, A!): B^ ?}[A, B] box

#### Returns

* B^ ?

---

### last
<span class="source-link">[[Source]](src/itertools/iter.md#L548)</span>


Return the last value of the iterator.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .last()
```
`3`


```pony
fun ref last()
: A ?
```

#### Returns

* A ?

---

### map\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L564)</span>


Return an iterator where each item's value is the application of the given
function to the value in the original iterator.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .map[I64]({(x) => x * x })
```
`1 4 9`


```pony
fun ref map[B: B](
  f: {(A!): B^ ?}[A, B] box)
: Iter[B] ref^
```
#### Parameters

*   f: {(A!): B^ ?}[A, B] box

#### Returns

* [Iter](itertools-Iter.md)\[B\] ref^

---

### nth
<span class="source-link">[[Source]](src/itertools/iter.md#L579)</span>


Return the nth value of the iterator.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .nth(2)
```
`2`


```pony
fun ref nth(
  n: USize val)
: A ?
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* A ?

---

### run
<span class="source-link">[[Source]](src/itertools/iter.md#L602)</span>


Iterate through the values of the iterator without a for loop. The
function `on_error` will be called if the iterator's `has_next` method
returns true but its `next` method throws an error.

## Example

```pony
Iter[I64]([1; 2; 3].values())
  .map[None]({(x) => env.out.print(x.string()) })
  .run()
```
```
1
2
3
```


```pony
fun ref run(
  on_error: {ref()}[A] ref = seq)
: None val
```
#### Parameters

*   on_error: {ref()}[A] ref = seq

#### Returns

* [None](builtin-None.md) val

---

### skip
<span class="source-link">[[Source]](src/itertools/iter.md#L629)</span>


Skip the first n values of the iterator.

## Example

```pony
Iter[I64]([1; 2; 3; 4; 5; 6].values())
  .skip(3)
```
`4 5 6`

```pony
Iter[I64]([1; 2; 3].values())
  .skip(3)
  .has_next()
```
`false`


```pony
fun ref skip(
  n: USize val)
: Iter[A] ref^
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [Iter](itertools-Iter.md)\[A\] ref^

---

### skip_while
<span class="source-link">[[Source]](src/itertools/iter.md#L657)</span>


Skip values of the iterator while the predicate `f` returns true.

## Example

```pony
Iter[I64]([1; 2; 3; 4; 5; 6].values())
  .skip_while({(x) => x < 4 })
```
`4 5 6`


```pony
fun ref skip_while(
  f: {(A!): Bool ?}[A] box)
: Iter[A!] ref^
```
#### Parameters

*   f: {(A!): Bool ?}[A] box

#### Returns

* [Iter](itertools-Iter.md)\[A!\] ref^

---

### take
<span class="source-link">[[Source]](src/itertools/iter.md#L683)</span>


Return an iterator for the first n elements.

## Example

```pony
Iter[I64]([1; 2; 3; 4; 5; 6].values())
  .take(3)
```
`1 2 3`


```pony
fun ref take(
  n: USize val)
: Iter[A] ref^
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [Iter](itertools-Iter.md)\[A\] ref^

---

### take_while
<span class="source-link">[[Source]](src/itertools/iter.md#L711)</span>


Return an iterator that returns values while the predicate `f` returns
true. This iterator short-circuits the first time that `f` returns false or
raises an error.

## Example

```pony
Iter[I64]([1; 2; 3; 4; 5; 6].values())
  .take_while({(x) => x < 4 })
```
`1 2 3`


```pony
fun ref take_while(
  f: {(A!): Bool ?}[A] box)
: Iter[A!] ref^
```
#### Parameters

*   f: {(A!): Bool ?}[A] box

#### Returns

* [Iter](itertools-Iter.md)\[A!\] ref^

---

### zip\[B: B\]
<span class="source-link">[[Source]](src/itertools/iter.md#L774)</span>


Zip two iterators together so that each call to next() results in
a tuple with the next value of the first iterator and the next value
of the second iterator. The number of items returned is the minimum of
the number of items returned by the two iterators.

## Example

```pony
Iter[I64]([1; 2].values())
  .zip[I64]([3; 4].values())
```
`(1, 3) (2, 4)`


```pony
fun ref zip[B: B](
  i2: Iterator[B] ref)
: Iter[(A , B)] ref^
```
#### Parameters

*   i2: [Iterator](builtin-Iterator.md)\[B\] ref

#### Returns

* [Iter](itertools-Iter.md)\[(A , B)\] ref^

---

### zip2\[B: B, C: C\]
<span class="source-link">[[Source]](src/itertools/iter.md#L801)</span>


Zip three iterators together so that each call to next() results in
a tuple with the next value of the first iterator, the next value
of the second iterator, and the value of the third iterator. The
number of items returned is the minimum of the number of items
returned by the three iterators.


```pony
fun ref zip2[B: B, C: C](
  i2: Iterator[B] ref,
  i3: Iterator[C] ref)
: Iter[(A , B , C)] ref^
```
#### Parameters

*   i2: [Iterator](builtin-Iterator.md)\[B\] ref
*   i3: [Iterator](builtin-Iterator.md)\[C\] ref

#### Returns

* [Iter](itertools-Iter.md)\[(A , B , C)\] ref^

---

### zip3\[B: B, C: C, D: D\]
<span class="source-link">[[Source]](src/itertools/iter.md#L822)</span>


Zip four iterators together so that each call to next() results in
a tuple with the next value of each of the iterators. The number of
items returned is the minimum of the number of items returned by the
iterators.


```pony
fun ref zip3[B: B, C: C, D: D](
  i2: Iterator[B] ref,
  i3: Iterator[C] ref,
  i4: Iterator[D] ref)
: Iter[(A , B , C , D)] ref^
```
#### Parameters

*   i2: [Iterator](builtin-Iterator.md)\[B\] ref
*   i3: [Iterator](builtin-Iterator.md)\[C\] ref
*   i4: [Iterator](builtin-Iterator.md)\[D\] ref

#### Returns

* [Iter](itertools-Iter.md)\[(A , B , C , D)\] ref^

---

### zip4\[B: B, C: C, D: D, E: E\]
<span class="source-link">[[Source]](src/itertools/iter.md#L848)</span>


Zip five iterators together so that each call to next() results in
a tuple with the next value of each of the iterators. The number of
items returned is the minimum of the number of items returned by the
iterators.


```pony
fun ref zip4[B: B, C: C, D: D, E: E](
  i2: Iterator[B] ref,
  i3: Iterator[C] ref,
  i4: Iterator[D] ref,
  i5: Iterator[E] ref)
: Iter[(A , B , C , D , E)] ref^
```
#### Parameters

*   i2: [Iterator](builtin-Iterator.md)\[B\] ref
*   i3: [Iterator](builtin-Iterator.md)\[C\] ref
*   i4: [Iterator](builtin-Iterator.md)\[D\] ref
*   i5: [Iterator](builtin-Iterator.md)\[E\] ref

#### Returns

* [Iter](itertools-Iter.md)\[(A , B , C , D , E)\] ref^

---

