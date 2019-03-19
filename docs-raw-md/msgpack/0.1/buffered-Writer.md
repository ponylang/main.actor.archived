# Writer
<span class="source-link">[[Source]](src/buffered/writer.md#L1)</span>

A buffer for building messages.

`Writer` provides an way to create byte sequences using common
data encodings. The `Writer` manages the underlying arrays and
sizes. It is useful for encoding data to send over a network or
store in a file. Once a message has been built you can call `done()`
to get the message's `ByteSeq`s, and you can then reuse the
`Writer` for creating a new message.

For example, suppose we have a TCP-based network data protocol where
messages consist of the following:

* `message_length` - the number of bytes in the message as a
  big-endian 32-bit integer
* `list_size` - the number of items in the following list of items
  as a big-endian 32-bit integer
* zero or more items of the following data:
  * a big-endian 64-bit floating point number
  * a string that starts with a big-endian 32-bit integer that
    specifies the length of the string, followed by a number of
    bytes that represent the string

A message would be something like this:

```
[message_length][list_size][float1][string1][float2][string2]...
```

The following program uses a write buffer to encode an array of
tuples as a message of this type:

```pony
use "buffered"

actor Main
  new create(env: Env) =>
    let wb = Writer
    let messages = [[(F32(3597.82), "Anderson"); (F32(-7979.3), "Graham")]
                    [(F32(3.14159), "Hopper"); (F32(-83.83), "Jones")]]
    for items in messages.values() do
      wb.i32_be((items.size() / 2).i32())
      for (f, s) in items.values() do
        wb.f32_be(f)
        wb.i32_be(s.size().i32())
        wb.write(s.array())
      end
      let wb_msg = Writer
      wb_msg.i32_be(wb.size().i32())
      wb_msg.writev(wb.done())
      env.out.writev(wb_msg.done())
    end
```


```pony
class ref Writer
```

## Constructors

### create
<span class="source-link">[[Source]](src/buffered/writer.md#L1)</span>


```pony
new iso create()
: Writer iso^
```

#### Returns

* [Writer](buffered-Writer.md) iso^

---

## Public Functions

### reserve_chunks
<span class="source-link">[[Source]](src/buffered/writer.md#L60)</span>


Reserve space for size' chunks.

This needs to be recalled after every call to `done`
as `done` resets the chunks.


```pony
fun ref reserve_chunks(
  size': USize val)
: None val
```
#### Parameters

*   size': [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### reserve_current
<span class="source-link">[[Source]](src/buffered/writer.md#L69)</span>


Reserve space for size bytes in `_current`.


```pony
fun ref reserve_current(
  size': USize val)
: None val
```
#### Parameters

*   size': [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### size
<span class="source-link">[[Source]](src/buffered/writer.md#L75)</span>


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### u8
<span class="source-link">[[Source]](src/buffered/writer.md#L78)</span>


Write a byte to the buffer.


```pony
fun ref u8(
  data: U8 val)
: None val
```
#### Parameters

*   data: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### u16_le
<span class="source-link">[[Source]](src/buffered/writer.md#L86)</span>


Write a U16 to the buffer in little-endian byte order.


```pony
fun ref u16_le(
  data: U16 val)
: None val
```
#### Parameters

*   data: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

### u16_be
<span class="source-link">[[Source]](src/buffered/writer.md#L98)</span>


Write a U16 to the buffer in big-endian byte order.


```pony
fun ref u16_be(
  data: U16 val)
: None val
```
#### Parameters

*   data: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

### i16_le
<span class="source-link">[[Source]](src/buffered/writer.md#L110)</span>


Write an I16 to the buffer in little-endian byte order.


```pony
fun ref i16_le(
  data: I16 val)
: None val
```
#### Parameters

*   data: [I16](builtin-I16.md) val

#### Returns

* [None](builtin-None.md) val

---

### i16_be
<span class="source-link">[[Source]](src/buffered/writer.md#L116)</span>


Write an I16 to the buffer in big-endian byte order.


```pony
fun ref i16_be(
  data: I16 val)
: None val
```
#### Parameters

*   data: [I16](builtin-I16.md) val

#### Returns

* [None](builtin-None.md) val

---

### u32_le
<span class="source-link">[[Source]](src/buffered/writer.md#L122)</span>


Write a U32 to the buffer in little-endian byte order.


```pony
fun ref u32_le(
  data: U32 val)
: None val
```
#### Parameters

*   data: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### u32_be
<span class="source-link">[[Source]](src/buffered/writer.md#L134)</span>


Write a U32 to the buffer in big-endian byte order.


```pony
fun ref u32_be(
  data: U32 val)
: None val
```
#### Parameters

*   data: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### i32_le
<span class="source-link">[[Source]](src/buffered/writer.md#L146)</span>


Write an I32 to the buffer in little-endian byte order.


```pony
fun ref i32_le(
  data: I32 val)
: None val
```
#### Parameters

*   data: [I32](builtin-I32.md) val

#### Returns

* [None](builtin-None.md) val

---

### i32_be
<span class="source-link">[[Source]](src/buffered/writer.md#L152)</span>


Write an I32 to the buffer in big-endian byte order.


```pony
fun ref i32_be(
  data: I32 val)
: None val
```
#### Parameters

*   data: [I32](builtin-I32.md) val

#### Returns

* [None](builtin-None.md) val

---

### f32_le
<span class="source-link">[[Source]](src/buffered/writer.md#L158)</span>


Write an F32 to the buffer in little-endian byte order.


```pony
fun ref f32_le(
  data: F32 val)
: None val
```
#### Parameters

*   data: [F32](builtin-F32.md) val

#### Returns

* [None](builtin-None.md) val

---

### f32_be
<span class="source-link">[[Source]](src/buffered/writer.md#L164)</span>


Write an F32 to the buffer in big-endian byte order.


```pony
fun ref f32_be(
  data: F32 val)
: None val
```
#### Parameters

*   data: [F32](builtin-F32.md) val

#### Returns

* [None](builtin-None.md) val

---

### u64_le
<span class="source-link">[[Source]](src/buffered/writer.md#L170)</span>


Write a U64 to the buffer in little-endian byte order.


```pony
fun ref u64_le(
  data: U64 val)
: None val
```
#### Parameters

*   data: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### u64_be
<span class="source-link">[[Source]](src/buffered/writer.md#L182)</span>


Write a U64 to the buffer in big-endian byte order.


```pony
fun ref u64_be(
  data: U64 val)
: None val
```
#### Parameters

*   data: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### i64_le
<span class="source-link">[[Source]](src/buffered/writer.md#L194)</span>


Write an I64 to the buffer in little-endian byte order.


```pony
fun ref i64_le(
  data: I64 val)
: None val
```
#### Parameters

*   data: [I64](builtin-I64.md) val

#### Returns

* [None](builtin-None.md) val

---

### i64_be
<span class="source-link">[[Source]](src/buffered/writer.md#L200)</span>


Write an I64 to the buffer in big-endian byte order.


```pony
fun ref i64_be(
  data: I64 val)
: None val
```
#### Parameters

*   data: [I64](builtin-I64.md) val

#### Returns

* [None](builtin-None.md) val

---

### f64_le
<span class="source-link">[[Source]](src/buffered/writer.md#L206)</span>


Write an F64 to the buffer in little-endian byte order.


```pony
fun ref f64_le(
  data: F64 val)
: None val
```
#### Parameters

*   data: [F64](builtin-F64.md) val

#### Returns

* [None](builtin-None.md) val

---

### f64_be
<span class="source-link">[[Source]](src/buffered/writer.md#L212)</span>


Write an F64 to the buffer in big-endian byte order.


```pony
fun ref f64_be(
  data: F64 val)
: None val
```
#### Parameters

*   data: [F64](builtin-F64.md) val

#### Returns

* [None](builtin-None.md) val

---

### u128_le
<span class="source-link">[[Source]](src/buffered/writer.md#L218)</span>


Write a U128 to the buffer in little-endian byte order.


```pony
fun ref u128_le(
  data: U128 val)
: None val
```
#### Parameters

*   data: [U128](builtin-U128.md) val

#### Returns

* [None](builtin-None.md) val

---

### u128_be
<span class="source-link">[[Source]](src/buffered/writer.md#L230)</span>


Write a U128 to the buffer in big-endian byte order.


```pony
fun ref u128_be(
  data: U128 val)
: None val
```
#### Parameters

*   data: [U128](builtin-U128.md) val

#### Returns

* [None](builtin-None.md) val

---

### i128_le
<span class="source-link">[[Source]](src/buffered/writer.md#L242)</span>


Write an I128 to the buffer in little-endian byte order.


```pony
fun ref i128_le(
  data: I128 val)
: None val
```
#### Parameters

*   data: [I128](builtin-I128.md) val

#### Returns

* [None](builtin-None.md) val

---

### i128_be
<span class="source-link">[[Source]](src/buffered/writer.md#L248)</span>


Write an I128 to the buffer in big-endian byte order.


```pony
fun ref i128_be(
  data: I128 val)
: None val
```
#### Parameters

*   data: [I128](builtin-I128.md) val

#### Returns

* [None](builtin-None.md) val

---

### write
<span class="source-link">[[Source]](src/buffered/writer.md#L254)</span>


Write a ByteSeq to the buffer.


```pony
fun ref write(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### writev
<span class="source-link">[[Source]](src/buffered/writer.md#L277)</span>


Write ByteSeqs to the buffer.


```pony
fun ref writev(
  data: ByteSeqIter val)
: None val
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

#### Returns

* [None](builtin-None.md) val

---

### done
<span class="source-link">[[Source]](src/buffered/writer.md#L285)</span>


Return an array of buffered ByteSeqs and reset the Writer's buffer.


```pony
fun ref done()
: Array[(String val | Array[U8 val] val)] iso^
```

#### Returns

* [Array](builtin-Array.md)\[([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)\] iso^

---

## Private Functions

### _append_current
<span class="source-link">[[Source]](src/buffered/writer.md#L293)</span>


```pony
fun ref _append_current()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

