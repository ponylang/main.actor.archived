# FileStream
<span class="source-link">[[Source]](src/files/file_stream.md#L1)</span>

Asynchronous access to a File object. Wraps file operations print, write,
printv and writev. The File will be disposed through File._final.


```pony
actor tag FileStream is
  OutStream tag
```

#### Implements

* [OutStream](builtin-OutStream.md) tag

---

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_stream.md#L8)</span>


```pony
new tag create(
  file: File iso)
: FileStream tag^
```
#### Parameters

*   file: [File](files-File.md) iso

#### Returns

* [FileStream](files-FileStream.md) tag^

---

## Public Behaviours

### print
<span class="source-link">[[Source]](src/files/file_stream.md#L11)</span>


Print some bytes and insert a newline afterwards.


```pony
be print(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### write
<span class="source-link">[[Source]](src/files/file_stream.md#L17)</span>


Print some bytes without inserting a newline afterwards.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### printv
<span class="source-link">[[Source]](src/files/file_stream.md#L23)</span>


Print an iterable collection of ByteSeqs.


```pony
be printv(
  data: ByteSeqIter val)
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

---

### writev
<span class="source-link">[[Source]](src/files/file_stream.md#L29)</span>


Write an iterable collection of ByteSeqs.


```pony
be writev(
  data: ByteSeqIter val)
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

---

