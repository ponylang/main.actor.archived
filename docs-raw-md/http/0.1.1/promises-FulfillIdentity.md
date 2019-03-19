# FulfillIdentity\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/fulfill.md#L16)</span>

An identity function for fulfilling promises.


```pony
class iso FulfillIdentity[A: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/fulfill.md#L16)</span>


```pony
new iso create()
: FulfillIdentity[A] iso^
```

#### Returns

* [FulfillIdentity](promises-FulfillIdentity.md)\[A\] iso^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/promises/fulfill.md#L20)</span>


```pony
fun ref apply(
  value: A)
: A
```
#### Parameters

*   value: A

#### Returns

* A

---

