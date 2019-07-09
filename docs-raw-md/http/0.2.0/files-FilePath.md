# FilePath
<span class="source-link">[[Source]](src/files/file_path.md#L9)</span>

A FilePath represents a capability to access a path. The path will be
represented as an absolute path and a set of capabilities for operations on
that path.


```pony
class val FilePath
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_path.md#L24)</span>


Create a new path. The caller must either provide the root capability or an
existing FilePath.

If the root capability is provided, path' will be relative to the program's
working directory. Otherwise, it will be relative to the existing FilePath,
and the existing FilePath must be a prefix of the resulting path.

The resulting FilePath will have capabilities that are the intersection of
the supplied capabilities and the capabilities on the parent.


```pony
new val create(
  base: (FilePath val | AmbientAuth val),
  path': String val,
  caps': Flags[(FileCreate val | FileChmod val | FileChown val | FileLink val | FileLookup val | FileMkdir val | FileRead val | FileRemove val | FileRename val | FileSeek val | FileStat val | FileSync val | FileTime val | FileTruncate val | FileWrite val | FileExec val), U32 val] val = recover)
: FilePath val^ ?
```
#### Parameters

*   base: ([FilePath](files-FilePath.md) val | [AmbientAuth](builtin-AmbientAuth.md) val)
*   path': [String](builtin-String.md) val
*   caps': [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] val = recover

#### Returns

* [FilePath](files-FilePath.md) val^ ?

---

### mkdtemp
<span class="source-link">[[Source]](src/files/file_path.md#L60)</span>


Create a temporary directory and returns a path to it. The directory's name
will begin with `prefix`. The caller must either provide the root
capability or an existing FilePath.

If AmbientAuth is provided, pattern will be relative to the program's
working directory. Otherwise, it will be relative to the existing
FilePath, and the existing FilePath must be a prefix of the resulting path.

The resulting FilePath will have capabilities that are the intersection of
the supplied capabilities and the capabilities on the base.


```pony
new val mkdtemp(
  base: (FilePath val | AmbientAuth val),
  prefix: String val = "",
  caps': Flags[(FileCreate val | FileChmod val | FileChown val | FileLink val | FileLookup val | FileMkdir val | FileRead val | FileRemove val | FileRename val | FileSeek val | FileStat val | FileSync val | FileTime val | FileTruncate val | FileWrite val | FileExec val), U32 val] val = recover)
: FilePath val^ ?
```
#### Parameters

*   base: ([FilePath](files-FilePath.md) val | [AmbientAuth](builtin-AmbientAuth.md) val)
*   prefix: [String](builtin-String.md) val = ""
*   caps': [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] val = recover

#### Returns

* [FilePath](files-FilePath.md) val^ ?

---

### _create
<span class="source-link">[[Source]](src/files/file_path.md#L95)</span>


Internal constructor.


```pony
new val _create(
  path': String val,
  caps': Flags[(FileCreate val | FileChmod val | FileChown val | FileLink val | FileLookup val | FileMkdir val | FileRead val | FileRemove val | FileRename val | FileSeek val | FileStat val | FileSync val | FileTime val | FileTruncate val | FileWrite val | FileExec val), U32 val] val)
: FilePath val^
```
#### Parameters

*   path': [String](builtin-String.md) val
*   caps': [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] val

#### Returns

* [FilePath](files-FilePath.md) val^

---

## Public fields

### let path: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/files/file_path.md#L15)</span>

Absolute filesystem path.




---

### let caps: [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] ref
<span class="source-link">[[Source]](src/files/file_path.md#L19)</span>

Set of capabilities for operations on `path`.




---

## Public Functions

### join
<span class="source-link">[[Source]](src/files/file_path.md#L102)</span>


Return a new path relative to this one.


```pony
fun val join(
  path': String val,
  caps': Flags[(FileCreate val | FileChmod val | FileChown val | FileLink val | FileLookup val | FileMkdir val | FileRead val | FileRemove val | FileRename val | FileSeek val | FileStat val | FileSync val | FileTime val | FileTruncate val | FileWrite val | FileExec val), U32 val] val = recover)
: FilePath val ?
```
#### Parameters

*   path': [String](builtin-String.md) val
*   caps': [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] val = recover

#### Returns

* [FilePath](files-FilePath.md) val ?

---

### walk
<span class="source-link">[[Source]](src/files/file_path.md#L112)</span>


Walks a directory structure starting at this.

`handler(dir_path, dir_entries)` will be called for each directory
starting with this one. The handler can control which subdirectories are
expanded by removing them from the `dir_entries` list.


```pony
fun val walk(
  handler: WalkHandler ref,
  follow_links: Bool val = false)
: None val
```
#### Parameters

*   handler: [WalkHandler](files-WalkHandler.md) ref
*   follow_links: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### canonical
<span class="source-link">[[Source]](src/files/file_path.md#L136)</span>


Return the equivalent canonical absolute path. Raise an error if there
isn't one.


```pony
fun val canonical()
: FilePath val ?
```

#### Returns

* [FilePath](files-FilePath.md) val ?

---

### exists
<span class="source-link">[[Source]](src/files/file_path.md#L143)</span>


Returns true if the path exists. Returns false for a broken symlink.


```pony
fun val exists()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### mkdir
<span class="source-link">[[Source]](src/files/file_path.md#L153)</span>


Creates the directory. Will recursively create each element. Returns true
if the directory exists when we're done, false if it does not. If we do not
have the FileStat permission, this will return false even if the directory
does exist.


```pony
fun val mkdir(
  must_create: Bool val = false)
: Bool val
```
#### Parameters

*   must_create: [Bool](builtin-Bool.md) val = false

#### Returns

* [Bool](builtin-Bool.md) val

---

### remove
<span class="source-link">[[Source]](src/files/file_path.md#L200)</span>


Remove the file or directory. The directory contents will be removed as
well, recursively. Symlinks will be removed but not traversed.


```pony
fun val remove()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### rename
<span class="source-link">[[Source]](src/files/file_path.md#L239)</span>


Rename a file or directory.


```pony
fun box rename(
  new_path: FilePath val)
: Bool val
```
#### Parameters

*   new_path: [FilePath](files-FilePath.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### symlink
<span class="source-link">[[Source]](src/files/file_path.md#L249)</span>


Create a symlink to a file or directory.


```pony
fun box symlink(
  link_name: FilePath val)
: Bool val
```
#### Parameters

*   link_name: [FilePath](files-FilePath.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### chmod
<span class="source-link">[[Source]](src/files/file_path.md#L263)</span>


Set the FileMode for a path.


```pony
fun box chmod(
  mode: FileMode box)
: Bool val
```
#### Parameters

*   mode: [FileMode](files-FileMode.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### chown
<span class="source-link">[[Source]](src/files/file_path.md#L279)</span>


Set the owner and group for a path. Does nothing on Windows.


```pony
fun box chown(
  uid: U32 val,
  gid: U32 val)
: Bool val
```
#### Parameters

*   uid: [U32](builtin-U32.md) val
*   gid: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### touch
<span class="source-link">[[Source]](src/files/file_path.md#L293)</span>


Set the last access and modification times of a path to now.


```pony
fun box touch()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_time
<span class="source-link">[[Source]](src/files/file_path.md#L299)</span>


Set the last access and modification times of a path to the given values.


```pony
fun box set_time(
  atime: (I64 val , I64 val),
  mtime: (I64 val , I64 val))
: Bool val
```
#### Parameters

*   atime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
*   mtime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

