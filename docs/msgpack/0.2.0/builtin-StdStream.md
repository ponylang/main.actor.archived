# StdStream
<span class="source-link">[[Source]](src/builtin/std_stream.md#L33)</span>

Asynchronous access to stdout and stderr. The constructors are private to
ensure that access is provided only via an environment.


```pony
actor tag StdStream
```

## Constructors

### _out
<span class="source-link">[[Source]](src/builtin/std_stream.md#L40)</span>


Create an async stream for stdout.


```pony
new tag _out()
: StdStream tag^
```

#### Returns

* [StdStream](builtin-StdStream.md) tag^

---

### _err
<span class="source-link">[[Source]](src/builtin/std_stream.md#L46)</span>


Create an async stream for stderr.


```pony
new tag _err()
: StdStream tag^
```

#### Returns

* [StdStream](builtin-StdStream.md) tag^

---

## Public Behaviours

### print
<span class="source-link">[[Source]](src/builtin/std_stream.md#L52)</span>


Print some bytes and insert a newline afterwards.


```pony
be print(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### write
<span class="source-link">[[Source]](src/builtin/std_stream.md#L58)</span>


Print some bytes without inserting a newline afterwards.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### printv
<span class="source-link">[[Source]](src/builtin/std_stream.md#L64)</span>


Print an iterable collection of ByteSeqs.


```pony
be printv(
  data: ByteSeqIter val)
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

---

### writev
<span class="source-link">[[Source]](src/builtin/std_stream.md#L72)</span>


Write an iterable collection of ByteSeqs.


```pony
be writev(
  data: ByteSeqIter val)
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

---

## Private Functions

### _write
<span class="source-link">[[Source]](src/builtin/std_stream.md#L80)</span>


Write the bytes without explicitly flushing.


```pony
fun ref _write(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### _print
<span class="source-link">[[Source]](src/builtin/std_stream.md#L86)</span>


Write the bytes and a newline without explicitly flushing.


```pony
fun ref _print(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

