# MessagePackDecoder
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L23)</span>

Implements low-level decoding from the [MessagePack serialization format](https://github.com/msgpack/msgpack/blob/master/spec.md).

You should be familiar with how MessagePack encodes messages if you use this
API directly. There are very few guardrails preventing you from incorrectly
decoding documents. This is particularly true when using the `array` and
`map` format family encoding methods.


```pony
primitive val MessagePackDecoder
```

## Constructors

### create
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L23)</span>


```pony
new val create()
: MessagePackDecoder val^
```

#### Returns

* [MessagePackDecoder](msgpack-MessagePackDecoder.md) val^

---

## Public Functions

### nil
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L36)</span>


Returns nothing. Throws an error if the next byte isn't a MessagePack nil.


```pony
fun box nil(
  b: Reader ref)
: None val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [None](builtin-None.md) val ?

---

### bool
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L48)</span>


```pony
fun box bool(
  b: Reader ref)
: Bool val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [Bool](builtin-Bool.md) val ?

---

### positive_fixint
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L60)</span>


```pony
fun box positive_fixint(
  b: Reader ref)
: U8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U8](builtin-U8.md) val ?

---

### negative_fixint
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L63)</span>


```pony
fun box negative_fixint(
  b: Reader ref)
: I8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [I8](builtin-I8.md) val ?

---

### u8
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L70)</span>


```pony
fun box u8(
  b: Reader ref)
: U8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U8](builtin-U8.md) val ?

---

### u16
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L77)</span>


```pony
fun box u16(
  b: Reader ref)
: U16 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U16](builtin-U16.md) val ?

---

### u32
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L84)</span>


```pony
fun box u32(
  b: Reader ref)
: U32 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U32](builtin-U32.md) val ?

---

### u64
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L91)</span>


```pony
fun box u64(
  b: Reader ref)
: U64 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U64](builtin-U64.md) val ?

---

### i8
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L102)</span>


```pony
fun box i8(
  b: Reader ref)
: I8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [I8](builtin-I8.md) val ?

---

### i16
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L109)</span>


```pony
fun box i16(
  b: Reader ref)
: I16 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [I16](builtin-I16.md) val ?

---

### i32
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L116)</span>


```pony
fun box i32(
  b: Reader ref)
: I32 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [I32](builtin-I32.md) val ?

---

### i64
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L123)</span>


```pony
fun box i64(
  b: Reader ref)
: I64 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [I64](builtin-I64.md) val ?

---

### f32
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L134)</span>


```pony
fun box f32(
  b: Reader ref)
: F32 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [F32](builtin-F32.md) val ?

---

### f64
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L141)</span>


```pony
fun box f64(
  b: Reader ref)
: F64 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [F64](builtin-F64.md) val ?

---

### fixstr
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L152)</span>


```pony
fun box fixstr(
  b: Reader ref)
: String iso^ ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [String](builtin-String.md) iso^ ?

---

### str
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L156)</span>


```pony
fun box str(
  b: Reader ref)
: String iso^ ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [String](builtin-String.md) iso^ ?

---

### byte_array
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L175)</span>


```pony
fun box byte_array(
  b: Reader ref)
: Array[U8 val] iso^ ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^ ?

---

### fixarray
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L194)</span>


Reads a header for a MessgePack "fixarray". This only reads the
header. The number of array items returned by this method needs
to be read via other methods after this is called.


```pony
fun box fixarray(
  b: Reader ref)
: U8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U8](builtin-U8.md) val ?

---

### array_16
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L202)</span>


Reads a header for a MessgePack "array_16". This only reads the
header. The number of array items returned by this method needs
to be read via other methods after this is called.


```pony
fun box array_16(
  b: Reader ref)
: U16 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U16](builtin-U16.md) val ?

---

### array_32
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L214)</span>


Reads a header for a MessgePack "array_32". This only reads the
header. The number of array items returned by this method needs
to be read via other methods after this is called.


```pony
fun box array_32(
  b: Reader ref)
: U32 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U32](builtin-U32.md) val ?

---

### fixmap
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L230)</span>


Reads a header for a MessgePack "fixmap". This only reads the
header. The number of map items returned by this method needs
to be read via other methods after this is called.


```pony
fun box fixmap(
  b: Reader ref)
: U8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U8](builtin-U8.md) val ?

---

### map_16
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L238)</span>


Reads a header for a MessgePack "map_16". This only reads the
header. The number of map items returned by this method needs
to be read via other methods after this is called.


```pony
fun box map_16(
  b: Reader ref)
: U16 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U16](builtin-U16.md) val ?

---

### map_32
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L250)</span>


Reads a header for a MessgePack "map_32". This only reads the
header. The number of map items returned by this method needs
to be read via other methods after this is called.


```pony
fun box map_32(
  b: Reader ref)
: U32 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U32](builtin-U32.md) val ?

---

### ext
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L266)</span>


Allows for the reading of user supplied extensions to the MessagePack
format.

fixext * types return a tuple representing:

(user supplied type indentifier, data byte array)


```pony
fun box ext(
  b: Reader ref)
: (U8 val , Array[U8 val] val) ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* ([U8](builtin-U8.md) val , [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val) ?

---

### eq
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L36)</span>


```pony
fun box eq(
  that: MessagePackDecoder val)
: Bool val
```
#### Parameters

*   that: [MessagePackDecoder](msgpack-MessagePackDecoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L36)</span>


```pony
fun box ne(
  that: MessagePackDecoder val)
: Bool val
```
#### Parameters

*   that: [MessagePackDecoder](msgpack-MessagePackDecoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _read_type
<span class="source-link">[[Source]](src/msgpack/message_pack_decoder.md#L303)</span>


```pony
fun box _read_type(
  b: Reader ref)
: U8 val ?
```
#### Parameters

*   b: [Reader](buffered-Reader.md) ref

#### Returns

* [U8](builtin-U8.md) val ?

---

