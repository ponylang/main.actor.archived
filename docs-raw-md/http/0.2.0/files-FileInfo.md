# FileInfo
<span class="source-link">[[Source]](src/files/file_info.md#L1)</span>

This contains file system metadata for a path.

A symlink will report information about itself, other than the size which
will be the size of the target. A broken symlink will report as much as it
can and will set the broken flag.


```pony
class val FileInfo
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_info.md#L86)</span>


This will raise an error if the FileStat capability isn't available or the
path doesn't exist.


```pony
new val create(
  from: FilePath val)
: FileInfo val^ ?
```
#### Parameters

*   from: [FilePath](files-FilePath.md) val

#### Returns

* [FileInfo](files-FileInfo.md) val^ ?

---

### _descriptor
<span class="source-link">[[Source]](src/files/file_info.md#L101)</span>


This will raise an error if the FileStat capability isn't available or the
file descriptor is invalid.


```pony
new val _descriptor(
  fd: I32 val,
  path: FilePath val)
: FileInfo val^ ?
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val

#### Returns

* [FileInfo](files-FileInfo.md) val^ ?

---

### _relative
<span class="source-link">[[Source]](src/files/file_info.md#L116)</span>


```pony
new val _relative(
  fd: I32 val,
  path: FilePath val,
  from: String val)
: FileInfo val^ ?
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val
*   from: [String](builtin-String.md) val

#### Returns

* [FileInfo](files-FileInfo.md) val^ ?

---

## Public fields

### let filepath: [FilePath](files-FilePath.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L9)</span>



---

### let mode: [FileMode](files-FileMode.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L11)</span>

UNIX-style file mode.



---

### let hard_links: [U32](builtin-U32.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L14)</span>

Number of hardlinks to this `filepath`.



---

### let device: [U64](builtin-U64.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L17)</span>

OS id of the device containing this `filepath`.
Device IDs consist of a major and minor device id,
denoting the type of device and the instance of this type on the system.




---

### let inode: [U64](builtin-U64.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L24)</span>

UNIX specific INODE number of `filepath`. Is 0 on Windows.



---

### let uid: [U32](builtin-U32.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L27)</span>

UNIX-style user ID of the owner of `filepath`.



---

### let gid: [U32](builtin-U32.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L30)</span>

UNIX-style user ID of the owning group of `filepath`.



---

### let size: [USize](builtin-USize.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L33)</span>

Total size of `filepath` in bytes.

In case of a symlink this is the size of the target, not the symlink itself.




---

### let access_time: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
<span class="source-link">[[Source]](src/files/file_info.md#L40)</span>

Time of last access as a tuple of seconds and nanoseconds since the epoch:

```pony
(let a_secs: I64, let a_nanos: I64) = file_info.access_time
```




---

### let modified_time: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
<span class="source-link">[[Source]](src/files/file_info.md#L49)</span>

Time of last modification as tuple of seconds and nanoseconds since the epoch:

```pony
(let m_secs: I64, let m_nanos: I64) = file_info.modified_time
```




---

### let change_time: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
<span class="source-link">[[Source]](src/files/file_info.md#L58)</span>

Time of the last change either the attributes (number of links, owner,
group, file mode, ...) or the content of `filepath`
as a tuple of seconds and nanoseconds since the epoch:

```pony
(let c_secs: I64, let c_nanos: I64) = file_info.change_time
```

On Windows this will be the file creation time.




---

### let file: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L71)</span>

`true` if `filepath` points to an a regular file.



---

### let directory: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L74)</span>

`true` if `filepath` points to a directory.



---

### let pipe: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L77)</span>

`true` if `filepath` points to a named pipe.



---

### let symlink: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L80)</span>

`true` if `filepath` points to a symbolic link.



---

### let broken: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_info.md#L83)</span>

`true` if `filepath` points to a broken symlink.



---

