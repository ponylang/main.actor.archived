# WalkHandler
<span class="source-link">[[Source]](src/files/file_path.md#L3)</span>

A handler for `FilePath.walk`.


```pony
interface ref WalkHandler
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/files/file_path.md#L7)</span>


```pony
fun ref apply(
  dir_path: FilePath val,
  dir_entries: Array[String val] ref)
: None val
```
#### Parameters

*   dir_path: [FilePath](files-FilePath.md) val
*   dir_entries: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] ref

#### Returns

* [None](builtin-None.md) val

---

