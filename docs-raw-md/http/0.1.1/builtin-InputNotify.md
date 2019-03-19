# InputNotify
<span class="source-link">[[Source]](src/builtin/stdin.md#L11)</span>

Notification for data arriving via an input stream.


```pony
interface ref InputNotify
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/builtin/stdin.md#L15)</span>


Called when data is available on the stream.


```pony
fun ref apply(
  data: Array[U8 val] iso)
: None val
```
#### Parameters

*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso

#### Returns

* [None](builtin-None.md) val

---

### dispose
<span class="source-link">[[Source]](src/builtin/stdin.md#L21)</span>


Called when no more data will arrive on the stream.


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

