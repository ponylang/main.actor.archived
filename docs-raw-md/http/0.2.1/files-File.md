# File
<span class="source-link">[[Source]](src/files/file.md#L78)</span>

Operations on a file.


```pony
class ref File
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file.md#L101)</span>


Attempt to open for read/write, creating if it doesn't exist, preserving
the contents if it does exist.
Set errno according to result.


```pony
new ref create(
  from: FilePath val)
: File ref^
```
#### Parameters

*   from: [FilePath](files-FilePath.md) val

#### Returns

* [File](files-File.md) ref^

---

### open
<span class="source-link">[[Source]](src/files/file.md#L141)</span>


Open for read only.
Set _errno according to result.


```pony
new ref open(
  from: FilePath val)
: File ref^
```
#### Parameters

*   from: [FilePath](files-FilePath.md) val

#### Returns

* [File](files-File.md) ref^

---

### _descriptor
<span class="source-link">[[Source]](src/files/file.md#L178)</span>


Internal constructor from a file descriptor and a path.


```pony
new ref _descriptor(
  fd: I32 val,
  from: FilePath val)
: File ref^ ?
```
#### Parameters

*   fd: [I32](builtin-I32.md) val
*   from: [FilePath](files-FilePath.md) val

#### Returns

* [File](files-File.md) ref^ ?

---

## Public fields

### let path: [FilePath](files-FilePath.md) val
<span class="source-link">[[Source]](src/files/file.md#L82)</span>

This is the filesystem path locating this file on the file system
and an object capability granting access to operate on this file.




---

### let writeable: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file.md#L88)</span>

`true` if the underlying file descriptor has been opened as writeable.




---

## Public Functions

### errno
<span class="source-link">[[Source]](src/files/file.md#L192)</span>


Returns the last error code set for this File


```pony
fun box errno()
: (FileOK val | FileError val | FileEOF val | 
    FileBadFileNumber val | FileExists val | FilePermissionDenied val)
```

#### Returns

* ([FileOK](files-FileOK.md) val | [FileError](files-FileError.md) val | [FileEOF](files-FileEOF.md) val | 
    [FileBadFileNumber](files-FileBadFileNumber.md) val | [FileExists](files-FileExists.md) val | [FilePermissionDenied](files-FilePermissionDenied.md) val)

---

### clear_errno
<span class="source-link">[[Source]](src/files/file.md#L198)</span>


Clears the last error code set for this File.
Clears the error indicator for the stream.


```pony
fun ref clear_errno()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### valid
<span class="source-link">[[Source]](src/files/file.md#L219)</span>


Returns true if the file is currently open.


```pony
fun box valid()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### read
<span class="source-link">[[Source]](src/files/file.md#L226)</span>


Returns up to len bytes.


```pony
fun ref read(
  len: USize val)
: Array[U8 val] iso^
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^

---

### read_string
<span class="source-link">[[Source]](src/files/file.md#L252)</span>


Returns up to len bytes. The resulting string may have internal null
characters.


```pony
fun ref read_string(
  len: USize val)
: String iso^
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### print
<span class="source-link">[[Source]](src/files/file.md#L277)</span>


Same as write, buts adds a newline.


```pony
fun ref print(
  data: (String box | Array[U8 val] box))
: Bool val
```
#### Parameters

*   data: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [Bool](builtin-Bool.md) val

---

### printv
<span class="source-link">[[Source]](src/files/file.md#L286)</span>


Print an iterable collection of ByteSeqs.


```pony
fun ref printv(
  data: ByteSeqIter box)
: Bool val
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### write
<span class="source-link">[[Source]](src/files/file.md#L297)</span>


Returns false if the file wasn't opened with write permission.
Returns false and closes the file if not all the bytes were written.


```pony
fun ref write(
  data: (String box | Array[U8 val] box))
: Bool val
```
#### Parameters

*   data: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [Bool](builtin-Bool.md) val

---

### writev
<span class="source-link">[[Source]](src/files/file.md#L306)</span>


Write an iterable collection of ByteSeqs.


```pony
fun ref writev(
  data: ByteSeqIter box)
: Bool val
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### queue
<span class="source-link">[[Source]](src/files/file.md#L316)</span>


Queue data to be written
NOTE: Queue'd data will always be written before normal print/write
requested data


```pony
fun ref queue(
  data: (String box | Array[U8 val] box))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) box | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] box)

#### Returns

* [None](builtin-None.md) val

---

### queuev
<span class="source-link">[[Source]](src/files/file.md#L325)</span>


Queue an iterable collection of ByteSeqs to be written
NOTE: Queue'd data will always be written before normal print/write
requested data


```pony
fun ref queuev(
  data: ByteSeqIter box)
: None val
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) box

#### Returns

* [None](builtin-None.md) val

---

### flush
<span class="source-link">[[Source]](src/files/file.md#L335)</span>


Flush any queued data


```pony
fun ref flush()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### position
<span class="source-link">[[Source]](src/files/file.md#L432)</span>


Return the current cursor position in the file.


```pony
fun ref position()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### size
<span class="source-link">[[Source]](src/files/file.md#L457)</span>


Return the total length of the file.


```pony
fun ref size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### seek_start
<span class="source-link">[[Source]](src/files/file.md#L467)</span>


Set the cursor position relative to the start of the file.


```pony
fun ref seek_start(
  offset: USize val)
: None val
```
#### Parameters

*   offset: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### seek_end
<span class="source-link">[[Source]](src/files/file.md#L475)</span>


Set the cursor position relative to the end of the file.


```pony
fun ref seek_end(
  offset: USize val)
: None val
```
#### Parameters

*   offset: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### seek
<span class="source-link">[[Source]](src/files/file.md#L483)</span>


Move the cursor position.


```pony
fun ref seek(
  offset: ISize val)
: None val
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val

#### Returns

* [None](builtin-None.md) val

---

### sync
<span class="source-link">[[Source]](src/files/file.md#L491)</span>


Sync the file contents to physical storage.


```pony
fun ref sync()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### datasync
<span class="source-link">[[Source]](src/files/file.md#L511)</span>


Sync the file contents to physical storage.


```pony
fun ref datasync()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### set_length
<span class="source-link">[[Source]](src/files/file.md#L530)</span>


Change the file size. If it is made larger, the new contents are undefined.


```pony
fun ref set_length(
  len: USize val)
: Bool val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### info
<span class="source-link">[[Source]](src/files/file.md#L560)</span>


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
<span class="source-link">[[Source]](src/files/file.md#L567)</span>


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
<span class="source-link">[[Source]](src/files/file.md#L573)</span>


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
<span class="source-link">[[Source]](src/files/file.md#L579)</span>


Set the last access and modification times of the directory to now.


```pony
fun box touch()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### set_time
<span class="source-link">[[Source]](src/files/file.md#L585)</span>


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

### lines
<span class="source-link">[[Source]](src/files/file.md#L592)</span>


Returns an iterator for reading lines from the file.


```pony
fun ref lines()
: FileLines ref
```

#### Returns

* [FileLines](files-FileLines.md) ref

---

### dispose
<span class="source-link">[[Source]](src/files/file.md#L598)</span>


Close the file. Future operations will do nothing.


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _get_error
<span class="source-link">[[Source]](src/files/file.md#L205)</span>


Fetch errno from the OS.


```pony
fun box _get_error()
: (FileOK val | FileError val | FileEOF val | 
    FileBadFileNumber val | FileExists val | FilePermissionDenied val)
```

#### Returns

* ([FileOK](files-FileOK.md) val | [FileError](files-FileError.md) val | [FileEOF](files-FileEOF.md) val | 
    [FileBadFileNumber](files-FileBadFileNumber.md) val | [FileExists](files-FileExists.md) val | [FilePermissionDenied](files-FilePermissionDenied.md) val)

---

### _pending_writes
<span class="source-link">[[Source]](src/files/file.md#L341)</span>


Write pending data.
Returns false if the file wasn't opened with write permission.
Returns false and closes the file and discards all pending data
if not all the bytes were written.
Returns true if it sent all pending data.


```pony
fun ref _pending_writes()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### _write_to_disk
<span class="source-link">[[Source]](src/files/file.md#L377)</span>


Write pending data.
Returns false if the file wasn't opened with write permission.
Raises an error if not all the bytes were written.
Returns true if it sent all pending data.
Returns num_processed and new pending_total also.


```pony
fun box _write_to_disk()
: (Bool val , USize val , USize val) ?
```

#### Returns

* ([Bool](builtin-Bool.md) val , [USize](builtin-USize.md) val , [USize](builtin-USize.md) val) ?

---

### _seek
<span class="source-link">[[Source]](src/files/file.md#L623)</span>


Move the cursor position.


```pony
fun ref _seek(
  offset: I64 val,
  base: I32 val)
: None val
```
#### Parameters

*   offset: [I64](builtin-I64.md) val
*   base: [I32](builtin-I32.md) val

#### Returns

* [None](builtin-None.md) val

---

### _final
<span class="source-link">[[Source]](src/files/file.md#L642)</span>


Close the file.


```pony
fun box _final()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

