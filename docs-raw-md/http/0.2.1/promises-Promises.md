# Promises\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/promise.md#L284)</span>
```pony
primitive val Promises[A: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/promise.md#L284)</span>


```pony
new val create()
: Promises[A] val^
```

#### Returns

* [Promises](promises-Promises.md)\[A\] val^

---

## Public Functions

### join
<span class="source-link">[[Source]](src/promises/promise.md#L285)</span>


Create a promise that is fulfilled when all promises in the given sequence
are fulfilled. If any promise in the sequence is rejected then the new
promise is also rejected. The order that values appear in the final array
is based on when each promise is fulfilled and not the order that they are
given.

Join three existing promises to make a fourth.
```pony
use "promises"

actor Main
  new create(env: Env) =>

    let p1 = Promise[String val]
    let p2 = Promise[String val]
    let p3 = Promise[String val]

    Promises[String val].join([p1; p2; p3].values())
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
fun box join(
  ps: Iterator[Promise[A] tag] ref)
: Promise[Array[A] val] tag
```
#### Parameters

*   ps: [Iterator](builtin-Iterator.md)\[[Promise](promises-Promise.md)\[A\] tag\] ref

#### Returns

* [Promise](promises-Promise.md)\[[Array](builtin-Array.md)\[A\] val\] tag

---

### eq
<span class="source-link">[[Source]](src/promises/promise.md#L285)</span>


```pony
fun box eq(
  that: Promises[A] val)
: Bool val
```
#### Parameters

*   that: [Promises](promises-Promises.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/promises/promise.md#L285)</span>


```pony
fun box ne(
  that: Promises[A] val)
: Bool val
```
#### Parameters

*   that: [Promises](promises-Promises.md)\[A\] val

#### Returns

* [Bool](builtin-Bool.md) val

---

