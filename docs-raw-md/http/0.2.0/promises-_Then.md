# _Then\[A: [Any](builtin-Any.md) #share, B: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/_then.md#L1)</span>

A step in a promise pipeline.


```pony
class ref _Then[A: Any #share, B: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/_then.md#L10)</span>


A step is represented by a fulfill function and a reject function.


```pony
new iso create(
  fulfill: Fulfill[A, B] iso,
  rejected: Reject[B] iso)
: _Then[A, B] iso^
```
#### Parameters

*   fulfill: [Fulfill](promises-Fulfill.md)\[A, B\] iso
*   rejected: [Reject](promises-Reject.md)\[B\] iso

#### Returns

* [_Then](promises-_Then.md)\[A, B\] iso^

---

## Public Functions

### promise
<span class="source-link">[[Source]](src/promises/_then.md#L18)</span>


Returns the next promise in the chain.


```pony
fun box promise()
: Promise[B] tag
```

#### Returns

* [Promise](promises-Promise.md)\[B\] tag

---

### apply
<span class="source-link">[[Source]](src/promises/_then.md#L24)</span>


Called with the result of the previous promise when it is fulfilled.


```pony
fun ref apply(
  value: A)
: None val
```
#### Parameters

*   value: A

#### Returns

* [None](builtin-None.md) val

---

### reject
<span class="source-link">[[Source]](src/promises/_then.md#L38)</span>


Called when the previous promise is rejected.


```pony
fun ref reject()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

