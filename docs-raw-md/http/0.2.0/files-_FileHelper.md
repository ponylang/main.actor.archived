# _FileHelper
<span class="source-link">[[Source]](src/files/_test.md#L55)</span>
```pony
primitive val _FileHelper
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/_test.md#L55)</span>


```pony
new val create()
: _FileHelper val^
```

#### Returns

* [_FileHelper](files-_FileHelper.md) val^

---

## Public Functions

### make_files
<span class="source-link">[[Source]](src/files/_test.md#L56)</span>


```pony
fun box make_files(
  h: TestHelper val,
  files: Array[String val] ref)
: FilePath val ?
```
#### Parameters

*   h: [TestHelper](ponytest-TestHelper.md) val
*   files: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] ref

#### Returns

* [FilePath](files-FilePath.md) val ?

---

### eq
<span class="source-link">[[Source]](src/files/_test.md#L56)</span>


```pony
fun box eq(
  that: _FileHelper val)
: Bool val
```
#### Parameters

*   that: [_FileHelper](files-_FileHelper.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/files/_test.md#L56)</span>


```pony
fun box ne(
  that: _FileHelper val)
: Bool val
```
#### Parameters

*   that: [_FileHelper](files-_FileHelper.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

