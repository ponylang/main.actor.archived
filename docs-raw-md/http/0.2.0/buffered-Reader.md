# Reader
<span class="source-link">[[Source]](src/buffered/reader.md#L3)</span>

Store network data and provide a parsing interface.

`Reader` provides a way to extract typed data from a sequence of
bytes. The `Reader` manages the underlying data structures to
provide a read cursor over a contiguous sequence of bytes. It is
useful for decoding data that is received over a network or stored
in a file. Chunk of bytes are added to the `Reader` using the
`append` method, and typed data is extracted using the getter
methods.

For example, suppose we have a UDP-based network data protocol where
messages consist of the following:

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

The following program uses a `Reader` to decode a message of
this type and print them:

```pony
use "buffered"
use "collections"

class Notify is InputNotify
  let _env: Env
  new create(env: Env) =>
    _env = env
  fun ref apply(data: Array[U8] iso) =>
    let rb = Reader
    rb.append(consume data)
    try
      while true do
        let len = rb.i32_be()?
        let items = rb.i32_be()?.usize()
        for range in Range(0, items) do
          let f = rb.f32_be()?
          let str_len = rb.i32_be()?.usize()
          let str = String.from_array(rb.block(str_len)?)
          _env.out.print("[(" + f.string() + "), (" + str + ")]")
        end
      end
    end

actor Main
  new create(env: Env) =>
    env.input(recover Notify(env) end, 1024)
```


```pony
class ref Reader
```

## Constructors

### create
<span class="source-link">[[Source]](src/buffered/reader.md#L3)</span>


```pony
new iso create()
: Reader iso^
```

#### Returns

* [Reader](buffered-Reader.md) iso^

---

## Public Functions

### size
<span class="source-link">[[Source]](src/buffered/reader.md#L67)</span>


Return the number of available bytes.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### clear
<span class="source-link">[[Source]](src/buffered/reader.md#L73)</span>


Discard all pending data.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### append
<span class="source-link">[[Source]](src/buffered/reader.md#L80)</span>


Add a chunk of data.


```pony
fun ref append(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### skip
<span class="source-link">[[Source]](src/buffered/reader.md#L93)</span>


Skip n bytes.


```pony
fun ref skip(
  n: USize val)
: None val ?
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### block
<span class="source-link">[[Source]](src/buffered/reader.md#L119)</span>


Return a block as a contiguous chunk of memory.
Will throw an error if you request a block larger than what is currently
stored in the `Reader`.


```pony
fun ref block(
  len: USize val)
: Array[U8 val] iso^ ?
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^ ?

---

### read_until
<span class="source-link">[[Source]](src/buffered/reader.md#L159)</span>


Find the first occurrence of the separator and return the block of bytes
before its position. The separator is not included in the returned array,
but it is removed from the buffer. To read a line of text, prefer line()
that handles \n and \r\n.


```pony
fun ref read_until(
  separator: U8 val)
: Array[U8 val] iso^ ?
```
#### Parameters

*   separator: [U8](builtin-U8.md) val

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^ ?

---

### line
<span class="source-link">[[Source]](src/buffered/reader.md#L170)</span>


Return a \n or \r\n terminated line as a string. By default the newline is not
included in the returned string, but it is removed from the buffer.
Set `keep_line_breaks` to `true` to keep the line breaks in the returned line.


```pony
fun ref line(
  keep_line_breaks: Bool val = false)
: String iso^ ?
```
#### Parameters

*   keep_line_breaks: [Bool](builtin-Bool.md) val = false

#### Returns

* [String](builtin-String.md) iso^ ?

---

### u8
<span class="source-link">[[Source]](src/buffered/reader.md#L213)</span>


Get a U8. Raise an error if there isn't enough data.


```pony
fun ref u8()
: U8 val ?
```

#### Returns

* [U8](builtin-U8.md) val ?

---

### i8
<span class="source-link">[[Source]](src/buffered/reader.md#L223)</span>


Get an I8.


```pony
fun ref i8()
: I8 val ?
```

#### Returns

* [I8](builtin-I8.md) val ?

---

### u16_be
<span class="source-link">[[Source]](src/buffered/reader.md#L229)</span>


Get a big-endian U16.


```pony
fun ref u16_be()
: U16 val ?
```

#### Returns

* [U16](builtin-U16.md) val ?

---

### u16_le
<span class="source-link">[[Source]](src/buffered/reader.md#L262)</span>


Get a little-endian U16.


```pony
fun ref u16_le()
: U16 val ?
```

#### Returns

* [U16](builtin-U16.md) val ?

---

### i16_be
<span class="source-link">[[Source]](src/buffered/reader.md#L295)</span>


Get a big-endian I16.


```pony
fun ref i16_be()
: I16 val ?
```

#### Returns

* [I16](builtin-I16.md) val ?

---

### i16_le
<span class="source-link">[[Source]](src/buffered/reader.md#L301)</span>


Get a little-endian I16.


```pony
fun ref i16_le()
: I16 val ?
```

#### Returns

* [I16](builtin-I16.md) val ?

---

### u32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L307)</span>


Get a big-endian U32.


```pony
fun ref u32_be()
: U32 val ?
```

#### Returns

* [U32](builtin-U32.md) val ?

---

### u32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L341)</span>


Get a little-endian U32.


```pony
fun ref u32_le()
: U32 val ?
```

#### Returns

* [U32](builtin-U32.md) val ?

---

### i32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L375)</span>


Get a big-endian I32.


```pony
fun ref i32_be()
: I32 val ?
```

#### Returns

* [I32](builtin-I32.md) val ?

---

### i32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L381)</span>


Get a little-endian I32.


```pony
fun ref i32_le()
: I32 val ?
```

#### Returns

* [I32](builtin-I32.md) val ?

---

### u64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L387)</span>


Get a big-endian U64.


```pony
fun ref u64_be()
: U64 val ?
```

#### Returns

* [U64](builtin-U64.md) val ?

---

### u64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L423)</span>


Get a little-endian U64.


```pony
fun ref u64_le()
: U64 val ?
```

#### Returns

* [U64](builtin-U64.md) val ?

---

### i64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L459)</span>


Get a big-endian I64.


```pony
fun ref i64_be()
: I64 val ?
```

#### Returns

* [I64](builtin-I64.md) val ?

---

### i64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L465)</span>


Get a little-endian I64.


```pony
fun ref i64_le()
: I64 val ?
```

#### Returns

* [I64](builtin-I64.md) val ?

---

### u128_be
<span class="source-link">[[Source]](src/buffered/reader.md#L471)</span>


Get a big-endian U128.


```pony
fun ref u128_be()
: U128 val ?
```

#### Returns

* [U128](builtin-U128.md) val ?

---

### u128_le
<span class="source-link">[[Source]](src/buffered/reader.md#L511)</span>


Get a little-endian U128.


```pony
fun ref u128_le()
: U128 val ?
```

#### Returns

* [U128](builtin-U128.md) val ?

---

### i128_be
<span class="source-link">[[Source]](src/buffered/reader.md#L551)</span>


Get a big-endian I129.


```pony
fun ref i128_be()
: I128 val ?
```

#### Returns

* [I128](builtin-I128.md) val ?

---

### i128_le
<span class="source-link">[[Source]](src/buffered/reader.md#L557)</span>


Get a little-endian I128.


```pony
fun ref i128_le()
: I128 val ?
```

#### Returns

* [I128](builtin-I128.md) val ?

---

### f32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L563)</span>


Get a big-endian F32.


```pony
fun ref f32_be()
: F32 val ?
```

#### Returns

* [F32](builtin-F32.md) val ?

---

### f32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L569)</span>


Get a little-endian F32.


```pony
fun ref f32_le()
: F32 val ?
```

#### Returns

* [F32](builtin-F32.md) val ?

---

### f64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L575)</span>


Get a big-endian F64.


```pony
fun ref f64_be()
: F64 val ?
```

#### Returns

* [F64](builtin-F64.md) val ?

---

### f64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L581)</span>


Get a little-endian F64.


```pony
fun ref f64_le()
: F64 val ?
```

#### Returns

* [F64](builtin-F64.md) val ?

---

### peek_u8
<span class="source-link">[[Source]](src/buffered/reader.md#L605)</span>


Peek at a U8 at the given offset. Raise an error if there isn't enough
data.


```pony
fun box peek_u8(
  offset: USize val = 0)
: U8 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U8](builtin-U8.md) val ?

---

### peek_i8
<span class="source-link">[[Source]](src/buffered/reader.md#L612)</span>


Peek at an I8.


```pony
fun box peek_i8(
  offset: USize val = 0)
: I8 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I8](builtin-I8.md) val ?

---

### peek_u16_be
<span class="source-link">[[Source]](src/buffered/reader.md#L618)</span>


Peek at a big-endian U16.


```pony
fun box peek_u16_be(
  offset: USize val = 0)
: U16 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U16](builtin-U16.md) val ?

---

### peek_u16_le
<span class="source-link">[[Source]](src/buffered/reader.md#L624)</span>


Peek at a little-endian U16.


```pony
fun box peek_u16_le(
  offset: USize val = 0)
: U16 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U16](builtin-U16.md) val ?

---

### peek_i16_be
<span class="source-link">[[Source]](src/buffered/reader.md#L630)</span>


Peek at a big-endian I16.


```pony
fun box peek_i16_be(
  offset: USize val = 0)
: I16 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I16](builtin-I16.md) val ?

---

### peek_i16_le
<span class="source-link">[[Source]](src/buffered/reader.md#L636)</span>


Peek at a little-endian I16.


```pony
fun box peek_i16_le(
  offset: USize val = 0)
: I16 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I16](builtin-I16.md) val ?

---

### peek_u32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L642)</span>


Peek at a big-endian U32.


```pony
fun box peek_u32_be(
  offset: USize val = 0)
: U32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U32](builtin-U32.md) val ?

---

### peek_u32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L648)</span>


Peek at a little-endian U32.


```pony
fun box peek_u32_le(
  offset: USize val = 0)
: U32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U32](builtin-U32.md) val ?

---

### peek_i32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L654)</span>


Peek at a big-endian I32.


```pony
fun box peek_i32_be(
  offset: USize val = 0)
: I32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I32](builtin-I32.md) val ?

---

### peek_i32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L660)</span>


Peek at a little-endian I32.


```pony
fun box peek_i32_le(
  offset: USize val = 0)
: I32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I32](builtin-I32.md) val ?

---

### peek_u64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L666)</span>


Peek at a big-endian U64.


```pony
fun box peek_u64_be(
  offset: USize val = 0)
: U64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U64](builtin-U64.md) val ?

---

### peek_u64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L672)</span>


Peek at a little-endian U64.


```pony
fun box peek_u64_le(
  offset: USize val = 0)
: U64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U64](builtin-U64.md) val ?

---

### peek_i64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L678)</span>


Peek at a big-endian I64.


```pony
fun box peek_i64_be(
  offset: USize val = 0)
: I64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I64](builtin-I64.md) val ?

---

### peek_i64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L684)</span>


Peek at a little-endian I64.


```pony
fun box peek_i64_le(
  offset: USize val = 0)
: I64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I64](builtin-I64.md) val ?

---

### peek_u128_be
<span class="source-link">[[Source]](src/buffered/reader.md#L690)</span>


Peek at a big-endian U128.


```pony
fun box peek_u128_be(
  offset: USize val = 0)
: U128 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U128](builtin-U128.md) val ?

---

### peek_u128_le
<span class="source-link">[[Source]](src/buffered/reader.md#L696)</span>


Peek at a little-endian U128.


```pony
fun box peek_u128_le(
  offset: USize val = 0)
: U128 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U128](builtin-U128.md) val ?

---

### peek_i128_be
<span class="source-link">[[Source]](src/buffered/reader.md#L702)</span>


Peek at a big-endian I129.


```pony
fun box peek_i128_be(
  offset: USize val = 0)
: I128 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I128](builtin-I128.md) val ?

---

### peek_i128_le
<span class="source-link">[[Source]](src/buffered/reader.md#L708)</span>


Peek at a little-endian I128.


```pony
fun box peek_i128_le(
  offset: USize val = 0)
: I128 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [I128](builtin-I128.md) val ?

---

### peek_f32_be
<span class="source-link">[[Source]](src/buffered/reader.md#L714)</span>


Peek at a big-endian F32.


```pony
fun box peek_f32_be(
  offset: USize val = 0)
: F32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [F32](builtin-F32.md) val ?

---

### peek_f32_le
<span class="source-link">[[Source]](src/buffered/reader.md#L720)</span>


Peek at a little-endian F32.


```pony
fun box peek_f32_le(
  offset: USize val = 0)
: F32 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [F32](builtin-F32.md) val ?

---

### peek_f64_be
<span class="source-link">[[Source]](src/buffered/reader.md#L726)</span>


Peek at a big-endian F64.


```pony
fun box peek_f64_be(
  offset: USize val = 0)
: F64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [F64](builtin-F64.md) val ?

---

### peek_f64_le
<span class="source-link">[[Source]](src/buffered/reader.md#L732)</span>


Peek at a little-endian F64.


```pony
fun box peek_f64_le(
  offset: USize val = 0)
: F64 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [F64](builtin-F64.md) val ?

---

## Private Functions

### _byte
<span class="source-link">[[Source]](src/buffered/reader.md#L587)</span>


Get a single byte.


```pony
fun ref _byte()
: U8 val ?
```

#### Returns

* [U8](builtin-U8.md) val ?

---

### _peek_byte
<span class="source-link">[[Source]](src/buffered/reader.md#L738)</span>


Get the byte at the given offset without moving the cursor forward.
Raise an error if the given offset is not yet available.


```pony
fun box _peek_byte(
  offset: USize val = 0)
: U8 val ?
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [U8](builtin-U8.md) val ?

---

### _distance_of
<span class="source-link">[[Source]](src/buffered/reader.md#L761)</span>


Get the distance to the first occurrence of the given byte


```pony
fun ref _distance_of(
  byte: U8 val)
: USize val ?
```
#### Parameters

*   byte: [U8](builtin-U8.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### _search_length
<span class="source-link">[[Source]](src/buffered/reader.md#L792)</span>


Get the length of a pending line. Raise an error if there is no pending
line.


```pony
fun ref _search_length()
: USize val ?
```

#### Returns

* [USize](builtin-USize.md) val ?

---

