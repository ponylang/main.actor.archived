# _FileDes
<span class="source-link">[[Source]](src/files/_file_des.md#L4)</span>

Convenience operations on file descriptors.


```pony
primitive val _FileDes
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/_file_des.md#L4)</span>


```pony
new val create()
: _FileDes val^
```

#### Returns

* [_FileDes](files-_FileDes.md) val^

---

## Public Functions

### chmod
<span class="source-link">[[Source]](src/files/_file_des.md#L8)</span>


Set the FileMode for this fd.


```pony
fun box chmod(
  fd: I32 val,
  path: FilePath val,
  mode: FileMode box)
: Bool val
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val
*   mode: [FileMode](files-FileMode.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### chown
<span class="source-link">[[Source]](src/files/_file_des.md#L22)</span>


Set the owner and group for this file. Does nothing on Windows.


```pony
fun box chown(
  fd: I32 val,
  path: FilePath val,
  uid: U32 val,
  gid: U32 val)
: Bool val
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val
*   uid: [U32](builtin-U32.md) val
*   gid: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### touch
<span class="source-link">[[Source]](src/files/_file_des.md#L36)</span>


Set the last access and modification times of the file to now.


```pony
fun box touch(
  fd: I32 val,
  path: FilePath val)
: Bool val
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_time
<span class="source-link">[[Source]](src/files/_file_des.md#L42)</span>


Set the last access and modification times of the file to the given values.


```pony
fun box set_time(
  fd: I32 val,
  path: FilePath val,
  atime: (I64 val , I64 val),
  mtime: (I64 val , I64 val))
: Bool val
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val
*   atime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
*   mtime: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_rights
<span class="source-link">[[Source]](src/files/_file_des.md#L65)</span>


Set the Capsicum rights on the file descriptor.


```pony
fun box set_rights(
  fd: I32 val,
  path: FilePath val,
  writeable: Bool val = seq)
: None val ?
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   path: [FilePath](files-FilePath.md) val
*   writeable: [Bool](builtin-Bool.md) val = seq

#### Returns

* [None](builtin-None.md) val ?

---

### eq
<span class="source-link">[[Source]](src/files/_file_des.md#L8)</span>


```pony
fun box eq(
  that: _FileDes val)
: Bool val
```
#### Parameters

*   that: [_FileDes](files-_FileDes.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/files/_file_des.md#L8)</span>


```pony
fun box ne(
  that: _FileDes val)
: Bool val
```
#### Parameters

*   that: [_FileDes](files-_FileDes.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

