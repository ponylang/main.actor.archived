# MessagePackEncoder
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L21)</span>

Implements low-level encoding into the [MessagePack serialization format](https://github.com/msgpack/msgpack/blob/master/spec.md).

You should be familiar with how MessagePack encodes messages if you use this
API directly. There are very few guardrails preventing you from creating
invalid documents. This is particularly true when using the `array` and `map`
format family encoding methods.


```pony
primitive val MessagePackEncoder
```

## Constructors

### create
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L21)</span>


```pony
new val create()
: MessagePackEncoder val^
```

#### Returns

* [MessagePackEncoder](msgpack-MessagePackEncoder.md) val^

---

## Public Functions

### nil
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L34)</span>


nil format stores nil in 1 byte.


```pony
fun box nil(
  b: Writer ref)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref

#### Returns

* [None](builtin-None.md) val

---

### bool
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L44)</span>


bool format family stores false or true in 1 byte.


```pony
fun box bool(
  b: Writer ref,
  t_or_f: Bool val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t_or_f: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### positive_fixint
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L58)</span>


positive fixnum stores 7-bit positive integer.

- Max value that can be encoded is `127`.

Attemping to encode an out of range value will result in an `error`.


```pony
fun box positive_fixint(
  b: Writer ref,
  v: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### negative_fixint
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L72)</span>


negative fixnum stores 5-bit negative integer.

- Max value that can be encoded is `-1`.
- Min value that can be encoded is `-32`.

Attemping to encode an out of range value will result in an `error`.


```pony
fun box negative_fixint(
  b: Writer ref,
  v: I8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [I8](builtin-I8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### uint_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L89)</span>


uint 8 stores a 8-bit unsigned integer.


```pony
fun box uint_8(
  b: Writer ref,
  v: U8 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### uint_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L96)</span>


uint 16 stores a 16-bit big-endian unsigned integer.


```pony
fun box uint_16(
  b: Writer ref,
  v: U16 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

### uint_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L103)</span>


uint 32 stores a 32-bit big-endian unsigned integer.


```pony
fun box uint_32(
  b: Writer ref,
  v: U32 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### uint_64
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L110)</span>


uint 64 stores a 64-bit big-endian unsigned integer.


```pony
fun box uint_64(
  b: Writer ref,
  v: U64 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### int_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L117)</span>


int 8 stores a 8-bit signed integer.


```pony
fun box int_8(
  b: Writer ref,
  v: I8 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [I8](builtin-I8.md) val

#### Returns

* [None](builtin-None.md) val

---

### int_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L124)</span>


int 16 stores a 16-bit big-endian signed integer.


```pony
fun box int_16(
  b: Writer ref,
  v: I16 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [I16](builtin-I16.md) val

#### Returns

* [None](builtin-None.md) val

---

### int_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L131)</span>


int 32 stores a 32-bit big-endian signed integer.


```pony
fun box int_32(
  b: Writer ref,
  v: I32 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [I32](builtin-I32.md) val

#### Returns

* [None](builtin-None.md) val

---

### int_64
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L138)</span>


int 64 stores a 64-bit big-endian signed integer.


```pony
fun box int_64(
  b: Writer ref,
  v: I64 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [I64](builtin-I64.md) val

#### Returns

* [None](builtin-None.md) val

---

### float_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L149)</span>


float 32 stores a floating point number in IEEE 754 single precision
floating point number format.


```pony
fun box float_32(
  b: Writer ref,
  v: F32 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [F32](builtin-F32.md) val

#### Returns

* [None](builtin-None.md) val

---

### float_64
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L157)</span>


float 64 stores a floating point number in IEEE 754 double precision
floating point number format.


```pony
fun box float_64(
  b: Writer ref,
  v: F64 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [F64](builtin-F64.md) val

#### Returns

* [None](builtin-None.md) val

---

### fixstr
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L169)</span>


fixstr stores a byte array whose length is upto 31 bytes.

Attempting to encode a `ByteSeq` larger than 31 bytes will result in
an `error`.


```pony
fun box fixstr(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### str_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L183)</span>


str 8 stores a byte array whose length is upto (2^8)-1 bytes.

Attempting to encode a `ByteSeq` larger than (2^8)-1 bytes will result in
an `error`.


```pony
fun box str_8(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### str_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L192)</span>


str 16 stores a byte array whose length is upto (2^16)-1 bytes.

Attempting to encode a `ByteSeq` larger than (2^16)-1 bytes will result in
an `error`.


```pony
fun box str_16(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### str_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L201)</span>


str 32 stores a byte array whose length is upto (2^32)-1.

Attempting to encode a `ByteSeq` larger than (2^32)-1 bytes will result in
an `error`.


```pony
fun box str_32(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### bin_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L214)</span>


bin 8 stores a byte array whose length is upto (2^8)-1 bytes.

Attempting to encode a `ByteSeq` larger than (2^8)-1 bytes will result in
an `error`.


```pony
fun box bin_8(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### bin_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L223)</span>


bin 16 stores a byte array whose length is upto (2^16)-1 bytes.

Attempting to encode a `ByteSeq` larger than (2^16)-1 bytes will result in
an `error`.


```pony
fun box bin_16(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### bin_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L232)</span>


bin 32 stores a byte array whose length is upto (2^32)-1 bytes.

Attempting to encode a `ByteSeq` larger than (2^32)-1 bytes will result in
an `error`.


```pony
fun box bin_32(
  b: Writer ref,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### fixarray
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L245)</span>


Creates a header for a MessagePack "fixarray". This only creates the
header. `s` number of array items should be written via other methods
after this is called.

fixarray stores an array whose length is upto 15 elements.

Attempting to encode a value larger than 15 will result in an `error`.


```pony
fun box fixarray(
  b: Writer ref,
  s: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### array_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L261)</span>


Creates a header for a MessagePack "array_16". This only creates the
header. `s` number of array items should be written via other methods
after this is called.

array 16 stores an array whose length is upto (2^16)-1 elements.

Attempting to encode a value larger than (2^16)-1 bytes will result in
an `error`.


```pony
fun box array_16(
  b: Writer ref,
  s: U16 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

### array_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L275)</span>


Creates a header for a MessagePack "array_32". This only creates the
header. `s` number of array items should be written via other methods
after this is called.

array 32 stores an array whose length is upto (2^32)-1 elements.

Attempting to encode a value larger than (2^32)-1 bytes will result in
an `error`.


```pony
fun box array_32(
  b: Writer ref,
  s: U32 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### fixmap
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L293)</span>


Creates a header for a MessagePack "fixmap". This only creates the
header. `s` number of map items should be written via other methods
after this is called.

fixmap stores a map whose length is upto 15 elements.

Attempting to encode a value larger than 15 will result in an `error`.


```pony
fun box fixmap(
  b: Writer ref,
  s: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### map_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L309)</span>


Creates a header for a MessagePack "map_16". This only creates the
header. `s` number of map items should be written via other methods
after this is called.

map 16 stores an array whose length is upto (2^16)-1 elements.

Attempting to encode a value larger than (2^16)-1 bytes will result in
an `error`.


```pony
fun box map_16(
  b: Writer ref,
  s: U16 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

### map_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L323)</span>


Creates a header for a MessagePack "map_32". This only creates the
header. `s` number of map items should be written via other methods
after this is called.

map 32 stores an array whose length is upto (2^32)-1 elements.

Attempting to encode a value larger than (2^32)-1 bytes will result in
an `error`.


```pony
fun box map_32(
  b: Writer ref,
  s: U32 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   s: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### fixext_1
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L341)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

fixext 1 stores an integer and a byte array whose length is 1 byte.

Attempting to encode a `ByteSeq` that is not 1 element in size will result
in an `error`.


```pony
fun box fixext_1(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### fixext_2
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L364)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

fixext 2 stores an integer and a byte array whose length is 2 byte.

Attempting to encode a `ByteSeq` that is not 2 element in size will result
in an `error`.


```pony
fun box fixext_2(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### fixext_4
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L387)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

fixext 4 stores an integer and a byte array whose length is 4 byte.

Attempting to encode a `ByteSeq` that is not 4 element in size will result
in an `error`.


```pony
fun box fixext_4(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### fixext_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L410)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

fixext 8 stores an integer and a byte array whose length is 8 byte.

Attempting to encode a `ByteSeq` that is not 8 element in size will result
in an `error`.


```pony
fun box fixext_8(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### fixext_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L433)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

fixext 16 stores an integer and a byte array whose length is 16 byte.

Attempting to encode a `ByteSeq` that is not 16 element in size will result
in an `error`.


```pony
fun box fixext_16(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### ext_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L456)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

ext 8 stores an integer and a byte array whose length is
upto (2^8)-1 bytes.

Attempting to encode a `ByteSeq` that is larger than (2^8)-1 bytes in
size will result in an `error`.


```pony
fun box ext_8(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### ext_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L481)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

ext 16 stores an integer and a byte array whose length is
upto (2^16)-1 bytes.

Attempting to encode a `ByteSeq` that is larger than (2^16)-1 bytes in
size will result in an `error`.


```pony
fun box ext_16(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### ext_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L506)</span>


Allows for the creation of user supplied extensions to the MessagePack
format. User should provide not just the value `v` to be encoded, but a
unique type identifier `t` as well.

Type identifiers `0` to `127` are valid for user supplied types.
MessagePack reserves -1 to -128 for future extension to add predefined
types.

ext 32 stores an integer and a byte array whose length is
upto (2^32)-1 bytes.

Attempting to encode a `ByteSeq` that is larger than (2^32)-1 bytes in
size will result in an `error`.


```pony
fun box ext_32(
  b: Writer ref,
  t: U8 val,
  v: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### eq
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L34)</span>


```pony
fun box eq(
  that: MessagePackEncoder val)
: Bool val
```
#### Parameters

*   that: [MessagePackEncoder](msgpack-MessagePackEncoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L34)</span>


```pony
fun box ne(
  that: MessagePackEncoder val)
: Bool val
```
#### Parameters

*   that: [MessagePackEncoder](msgpack-MessagePackEncoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _write_type
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L535)</span>


```pony
fun box _write_type(
  b: Writer ref,
  t: U8 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   t: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### _write_fixed_value
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L538)</span>


```pony
fun box _write_fixed_value(
  b: Writer ref,
  v: U8 val)
: None val
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### _write_btye_array_8
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L541)</span>


```pony
fun box _write_btye_array_8(
  b: Writer ref,
  v: (String val | Array[U8 val] val),
  t: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)
*   t: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### _write_btye_array_16
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L550)</span>


```pony
fun box _write_btye_array_16(
  b: Writer ref,
  v: (String val | Array[U8 val] val),
  t: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)
*   t: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### _write_btye_array_32
<span class="source-link">[[Source]](src/msgpack/message_pack_encoder.md#L559)</span>


```pony
fun box _write_btye_array_32(
  b: Writer ref,
  v: (String val | Array[U8 val] val),
  t: U8 val)
: None val ?
```
#### Parameters

*   b: [Writer](buffered-Writer.md) ref
*   v: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)
*   t: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val ?

---

