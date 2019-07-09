# Promise\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/promise.md#L94)</span>

A promise to eventually produce a result of type A. This promise can either
be fulfilled or rejected.

Any number of promises can be chained after this one.


```pony
actor tag Promise[A: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/promise.md#L94)</span>


```pony
new tag create()
: Promise[A] tag^
```

#### Returns

* [Promise](promises-Promise.md)\[A\] tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/promises/promise.md#L104)</span>


Fulfill the promise.


```pony
be apply(
  value: A)
```
#### Parameters

*   value: A

---

### reject
<span class="source-link">[[Source]](src/promises/promise.md#L120)</span>


Reject the promise.


```pony
be reject()
```

---

## Public Functions

### next\[B: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/promise.md#L136)</span>


Chain a promise after this one.

When this promise is fulfilled, the result of type A is passed to the
fulfill function, generating in an intermediate result of type B. This
is then used to fulfill the next promise in the chain.

If there is no fulfill function, or if the fulfill function raises an
error, then the next promise in the chain will be rejected.

If this promise is rejected, this step's reject function is called with no
input, generating an intermediate result of type B which is used to
fulfill the next promise in the chain.

If there is no reject function, of if the reject function raises an error,
then the next promise in the chain will be rejected.


```pony
fun tag next[B: Any #share](
  fulfill: Fulfill[A, B] iso,
  rejected: Reject[B] iso = qualify)
: Promise[B] tag
```
#### Parameters

*   fulfill: [Fulfill](promises-Fulfill.md)\[A, B\] iso
*   rejected: [Reject](promises-Reject.md)\[B\] iso = qualify

#### Returns

* [Promise](promises-Promise.md)\[B\] tag

---

### add\[optional B: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/promise.md#L163)</span>


Add two promises into one promise that returns the result of both when
they are fulfilled. If either of the promises is rejected then the new
promise is also rejected.


```pony
fun tag add[optional B: Any #share](
  p: Promise[B] tag)
: Promise[(A , B)] tag
```
#### Parameters

*   p: [Promise](promises-Promise.md)\[B\] tag

#### Returns

* [Promise](promises-Promise.md)\[(A , B)\] tag

---

### join
<span class="source-link">[[Source]](src/promises/promise.md#L199)</span>


Create a promise that is fulfilled when the receiver and all promises in
the given iterator are fulfilled. If the receiver or any promise in the
sequence is rejected then the new promise is also rejected.

Join `p1` and `p2` with an existing promise, `p3`.
```pony
use "promises"

actor Main
  new create(env: Env) =>

    let p1 = Promise[String val]
    let p2 = Promise[String val]
    let p3 = Promise[String val]

    p3.join([p1; p2].values())
      .next[None]({(a: Array[String val] val) =>
        for s in a.values() do
          env.out.print(s)
        end
      })

    p2("second")
    p3("third")
    p1("first")
```


```pony
fun tag join(
  ps: Iterator[Promise[A] tag] ref)
: Promise[Array[A] val] tag
```
#### Parameters

*   ps: [Iterator](builtin-Iterator.md)\[[Promise](promises-Promise.md)\[A\] tag\] ref

#### Returns

* [Promise](promises-Promise.md)\[[Array](builtin-Array.md)\[A\] val\] tag

---

### select
<span class="source-link">[[Source]](src/promises/promise.md#L233)</span>


Return a promise that is fulfilled when either promise is fulfilled,
resulting in a tuple of its value and the other promise.


```pony
fun tag select(
  p: Promise[A] tag)
: Promise[(A , Promise[A] tag)] tag
```
#### Parameters

*   p: [Promise](promises-Promise.md)\[A\] tag

#### Returns

* [Promise](promises-Promise.md)\[(A , [Promise](promises-Promise.md)\[A\] tag)\] tag

---

### timeout
<span class="source-link">[[Source]](src/promises/promise.md#L257)</span>


Reject the promise after the given expiration in nanoseconds.


```pony
fun tag timeout(
  expiration: U64 val)
: None val
```
#### Parameters

*   expiration: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

## Private Behaviours

### _attach
<span class="source-link">[[Source]](src/promises/promise.md#L270)</span>


Attaches a step asynchronously. If this promise has already been fulfilled
or rejected, immediately fulfill or reject the incoming step. Otherwise,
keep it in a list.


```pony
be _attach(
  attach: _IThen[A] iso)
```
#### Parameters

*   attach: [_IThen](promises-_IThen.md)\[A\] iso

---

