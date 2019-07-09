# _IThen\[A: [Any](builtin-Any.md) #share\]
<span class="source-link">[[Source]](src/promises/_then.md#L52)</span>

An interface representing an abstract Then. This allows for any Then that
accepts an input of type A, regardless of the output type.


```pony
interface ref _IThen[A: Any #share]
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/promises/_then.md#L57)</span>


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
<span class="source-link">[[Source]](src/promises/_then.md#L58)</span>


```pony
fun ref reject()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

