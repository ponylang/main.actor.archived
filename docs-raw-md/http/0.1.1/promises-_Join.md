# _Join\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/promise.md#L331)</span>
```pony
actor tag _Join[A: Any #share]
```

## Constructors

### create
<span class="source-link">[[Source]](src/promises/promise.md#L336)</span>


```pony
new tag create(
  p: Promise[Array[A] val] tag,
  space: USize val)
: _Join[A] tag^
```
#### Parameters

*   p: [Promise](promises-Promise.md)\[[Array](builtin-Array.md)\[A\] val\] tag
*   space: [USize](builtin-USize.md) val

#### Returns

* [_Join](promises-_Join.md)\[A\] tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/promises/promise.md#L339)</span>


```pony
be apply(
  a: A)
```
#### Parameters

*   a: A

---

