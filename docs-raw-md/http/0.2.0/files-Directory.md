# Directory
<span class="source-link">[[Source]](src/files/directory.md#L15)</span>

Operations on a directory.

The directory-relative functions (open, etc) use the *at interface on FreeBSD
and Linux. This isn't available on OS X prior to 10.10, so it is not used. On
FreeBSD, this allows the directory-relative functions to take advantage of
Capsicum.


```pony
class ref Directory
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/directory.md#L37)</span>


This will raise an error if the path doesn't exist or it is not a
directory, or if FileRead or FileStat permission isn't available.


```pony
new ref create(
  from: FilePath val)
: Directory ref^ ?
```
#### Parameters

*   from: [FilePath](files-FilePath.md) val

#### Returns

* [Directory](files-Directory.md) ref^ ?

---

### _relative
<span class="source-link">[[Source]](src/files/directory.md#L70)</span>


Internal constructor. Capsicum rights are already set by inheritence.


```pony
new iso _relative(
  path': FilePath val,
  fd': I32 val)
: Directory iso^
```
#### Parameters

*   path': [FilePath](files-FilePath.md) val
*   fd': [I32](builtin-I32.md) val

#### Returns

* [Directory](files-Directory.md) iso^

---

## Public fields

### let path: [FilePath](files-FilePath.md) val
<span class="source-link">[[Source]](src/files/directory.md#L24)</span>

This is the filesystem path locating this directory on the file system
and an object capability granting access to operate on this directory.




---

## Public Functions

### entries
<span class="source-link">[[Source]](src/files/directory.md#L77)</span>


The entries will include everything in the directory, but it is not
recursive. The path for the entry will be relative to the directory, so it
will contain no directory separators. The entries will not include "." or
"..".


```pony
fun box entries()
: Array[String val] iso^ ?
```

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] iso^ ?

---

### open
<span class="source-link">[[Source]](src/files/directory.md#L149)</span>


Open a directory relative to this one. Raises an error if the path is not
within this directory hierarchy.


```pony
fun box open(
  target: String val)
: Directory iso^ ?
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [Directory](files-Directory.md) iso^ ?

---

### mkdir
<span class="source-link">[[Source]](src/files/directory.md#L171)</span>


Creates a directory relative to this one. Returns false if the path is
not within this directory hierarchy or if FileMkdir permission is missing.


```pony
fun box mkdir(
  target: String val)
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### create_file
<span class="source-link">[[Source]](src/files/directory.md#L210)</span>


Open for read/write, creating if it doesn't exist, preserving the contents
if it does exist.


```pony
fun box create_file(
  target: String val)
: File iso^ ?
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [File](files-File.md) iso^ ?

---

### open_file
<span class="source-link">[[Source]](src/files/directory.md#L238)</span>


Open for read only, failing if it doesn't exist.


```pony
fun box open_file(
  target: String val)
: File iso^ ?
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [File](files-File.md) iso^ ?

---

### info
<span class="source-link">[[Source]](src/files/directory.md#L261)</span>


Return a FileInfo for this directory. Raise an error if the fd is invalid
or if we don't have FileStat permission.


```pony
fun box info()
: FileInfo val ?
```

#### Returns

* [FileInfo](files-FileInfo.md) val ?

---

### chmod
<span class="source-link">[[Source]](src/files/directory.md#L268)</span>


Set the FileMode for this directory.


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
<span class="source-link">[[Source]](src/files/directory.md#L274)</span>


Set the owner and group for this directory. Does nothing on Windows.


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
<span class="source-link">[[Source]](src/files/directory.md#L280)</span>


Set the last access and modification times of the directory to now.


```pony
fun box touch()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_time
<span class="source-link">[[Source]](src/files/directory.md#L286)</span>


Set the last access and modification times of the directory to the given
values.


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

### infoat
<span class="source-link">[[Source]](src/files/directory.md#L293)</span>


Return a FileInfo for some path relative to this directory.


```pony
fun box infoat(
  target: String val)
: FileInfo val ?
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [FileInfo](files-FileInfo.md) val ?

---

### chmodat
<span class="source-link">[[Source]](src/files/directory.md#L313)</span>


Set the FileMode for some path relative to this directory.


```pony
fun box chmodat(
  target: String val,
  mode: FileMode box)
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val
*   mode: [FileMode](files-FileMode.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### chownat
<span class="source-link">[[Source]](src/files/directory.md#L337)</span>


Set the FileMode for some path relative to this directory.


```pony
fun box chownat(
  target: String val,
  uid: U32 val,
  gid: U32 val)
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val
*   uid: [U32](builtin-U32.md) val
*   gid: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### touchat
<span class="source-link">[[Source]](src/files/directory.md#L361)</span>


Set the last access and modification times of the directory to now.


```pony
fun box touchat(
  target: String val)
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_time_at
<span class="source-link">[[Source]](src/files/directory.md#L367)</span>


Set the last access and modification times of the directory to the given
values.


```pony
fun box set_time_at(
  target: String val,
  atime: (I64 val , I64 val),
  mtime: (I64 val , I64 val))
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val
*   atime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
*   mtime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### symlink
<span class="source-link">[[Source]](src/files/directory.md#L401)</span>


Link the source path to the link_name, where the link_name is relative to
this directory.


```pony
fun box symlink(
  source: FilePath val,
  link_name: String val)
: Bool val
```
#### Parameters

*   source: [FilePath](files-FilePath.md) val
*   link_name: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### remove
<span class="source-link">[[Source]](src/files/directory.md#L428)</span>


Remove the file or directory. The directory contents will be removed as
well, recursively. Symlinks will be removed but not traversed.


```pony
fun box remove(
  target: String val)
: Bool val
```
#### Parameters

*   target: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### rename
<span class="source-link">[[Source]](src/files/directory.md#L467)</span>


Rename source (which is relative to this directory) to target (which is
relative to the `to` directory).


```pony
fun box rename(
  source: String val,
  to: Directory box,
  target: String val)
: Bool val
```
#### Parameters

*   source: [String](builtin-String.md) val
*   to: [Directory](files-Directory.md) box
*   target: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### dispose
<span class="source-link">[[Source]](src/files/directory.md#L496)</span>


Close the directory.


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _final
<span class="source-link">[[Source]](src/files/directory.md#L508)</span>


Close the file descriptor.


```pony
fun box _final()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

