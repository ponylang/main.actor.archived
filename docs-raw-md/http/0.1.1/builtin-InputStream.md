# InputStream
<span class="source-link">[[Source]](src/builtin/stdin.md#L33)</span>

Asynchronous access to some input stream.


```pony
interface tag InputStream
```

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/builtin/stdin.md#L37)</span>


Set the notifier. Optionally, also sets the chunk size, dictating the
maximum number of bytes of each chunk that will be passed to the notifier.


```pony
be apply(
  notify: (InputNotify iso | None val),
  chunk_size: USize val = seq)
```
#### Parameters

*   notify: ([InputNotify](builtin-InputNotify.md) iso | [None](builtin-None.md) val)
*   chunk_size: [USize](builtin-USize.md) val = seq

---

### dispose
<span class="source-link">[[Source]](src/builtin/stdin.md#L43)</span>


Clear the notifier in order to shut down input.


```pony
be dispose()
```

---

