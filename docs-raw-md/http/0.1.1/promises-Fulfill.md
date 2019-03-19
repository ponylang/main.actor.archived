# Fulfill\[A: [Any](builtin-Any.md) #share, B: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/fulfill.md#L4)</span>

A function from A to B that is called when a promise is fulfilled.


```pony
interface iso Fulfill[A: Any #share, B: Any #share]
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/promises/fulfill.md#L8)</span>


```pony
fun ref apply(
  value: A)
: B ?
```
#### Parameters

*   value: A

#### Returns

* B ?

---

