# CreateFile
<span class="source-link">[[Source]](src/files/file.md#L49)</span>

Open a File for read/write, creating if it doesn't exist, preserving the
contents if it does exist.


```pony
primitive val CreateFile
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file.md#L49)</span>


```pony
new val create()
: CreateFile val^
```

#### Returns

* [CreateFile](files-CreateFile.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/files/file.md#L54)</span>


```pony
fun box apply(
  from: FilePath val)
: (File ref | FileOK val | FileError val | 
    FileEOF val | FileBadFileNumber val | FileExists val | 
    FilePermissionDenied val)
```
#### Parameters

*   from: [FilePath](files-FilePath.md) val

#### Returns

* ([File](files-File.md) ref | [FileOK](files-FileOK.md) val | [FileError](files-FileError.md) val | 
    [FileEOF](files-FileEOF.md) val | [FileBadFileNumber](files-FileBadFileNumber.md) val | [FileExists](files-FileExists.md) val | 
    [FilePermissionDenied](files-FilePermissionDenied.md) val)

---

### eq
<span class="source-link">[[Source]](src/files/file.md#L54)</span>


```pony
fun box eq(
  that: CreateFile val)
: Bool val
```
#### Parameters

*   that: [CreateFile](files-CreateFile.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/files/file.md#L54)</span>


```pony
fun box ne(
  that: CreateFile val)
: Bool val
```
#### Parameters

*   that: [CreateFile](files-CreateFile.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

