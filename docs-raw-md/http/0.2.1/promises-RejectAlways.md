# RejectAlways\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/fulfill.md#L23)</span>

A reject that always raises an error.


```pony
class iso RejectAlways[A: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/fulfill.md#L23)</span>


```pony
new iso create()
: RejectAlways[A] iso^
```

#### Returns

* [RejectAlways](promises-RejectAlways.md)\[A\] iso^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/promises/fulfill.md#L27)</span>


```pony
fun ref apply()
: A ?
```

#### Returns

* A ?

---

