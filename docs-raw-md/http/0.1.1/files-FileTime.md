# FileTime
<span class="source-link">[[Source]](src/files/file_caps.md#L39)</span>
```pony
primitive val FileTime
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_caps.md#L39)</span>


```pony
new val create()
: FileTime val^
```

#### Returns

* [FileTime](files-FileTime.md) val^

---

## Public Functions

### value
<span class="source-link">[[Source]](src/files/file_caps.md#L40)</span>


```pony
fun box value()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### eq
<span class="source-link">[[Source]](src/files/file_caps.md#L40)</span>


```pony
fun box eq(
  that: FileTime val)
: Bool val
```
#### Parameters

*   that: [FileTime](files-FileTime.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/files/file_caps.md#L40)</span>


```pony
fun box ne(
  that: FileTime val)
: Bool val
```
#### Parameters

*   that: [FileTime](files-FileTime.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

