# Base64
<span class="source-link">[[Source]](src/encode-base64/base64.md#L26)</span>
```pony
primitive val Base64
```

## Constructors

### create
<span class="source-link">[[Source]](src/encode-base64/base64.md#L26)</span>


```pony
new val create()
: Base64 val^
```

#### Returns

* [Base64](encode-base64-Base64.md) val^

---

## Public Functions

### encode_pem
<span class="source-link">[[Source]](src/encode-base64/base64.md#L27)</span>


Encode for PEM (RFC 1421).


```pony
fun box encode_pem(
  data: ReadSeq[U8 val] box)
: String iso^
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box

#### Returns

* [String](builtin-String.md) iso^

---

### encode_mime
<span class="source-link">[[Source]](src/encode-base64/base64.md#L33)</span>


Encode for MIME (RFC 2045).


```pony
fun box encode_mime(
  data: ReadSeq[U8 val] box)
: String iso^
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box

#### Returns

* [String](builtin-String.md) iso^

---

### encode_url\[optional A: [Seq](builtin-Seq.md)\[[U8](builtin-U8.md) val\] iso\]
<span class="source-link">[[Source]](src/encode-base64/base64.md#L39)</span>


Encode for URLs (RFC 4648). Padding characters are stripped by default.


```pony
fun box encode_url[optional A: Seq[U8 val] iso](
  data: ReadSeq[U8 val] box,
  pad: Bool val = false)
: A^
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box
*   pad: [Bool](builtin-Bool.md) val = false

#### Returns

* A^

---

### encode\[optional A: [Seq](builtin-Seq.md)\[[U8](builtin-U8.md) val\] iso\]
<span class="source-link">[[Source]](src/encode-base64/base64.md#L50)</span>


Configurable encoding. The defaults are for RFC 4648.


```pony
fun box encode[optional A: Seq[U8 val] iso](
  data: ReadSeq[U8 val] box,
  at62: U8 val = 43,
  at63: U8 val = 47,
  pad: U8 val = 61,
  linelen: USize val = 0,
  linesep: String val = "
")
: A^
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box
*   at62: [U8](builtin-U8.md) val = 43
*   at63: [U8](builtin-U8.md) val = 47
*   pad: [U8](builtin-U8.md) val = 61
*   linelen: [USize](builtin-USize.md) val = 0
*   linesep: [String](builtin-String.md) val = "
"

#### Returns

* A^

---

### decode_url\[optional A: [Seq](builtin-Seq.md)\[[U8](builtin-U8.md) val\] iso\]
<span class="source-link">[[Source]](src/encode-base64/base64.md#L125)</span>


Decode for URLs (RFC 4648).


```pony
fun box decode_url[optional A: Seq[U8 val] iso](
  data: ReadSeq[U8 val] box)
: A^ ?
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box

#### Returns

* A^ ?

---

### decode\[optional A: [Seq](builtin-Seq.md)\[[U8](builtin-U8.md) val\] iso\]
<span class="source-link">[[Source]](src/encode-base64/base64.md#L131)</span>


Configurable decoding. The defaults are for RFC 4648. Missing padding is
not an error. Non-base64 data, other than whitespace (which can appear at
any time), is an error.


```pony
fun box decode[optional A: Seq[U8 val] iso](
  data: ReadSeq[U8 val] box,
  at62: U8 val = 43,
  at63: U8 val = 47,
  pad: U8 val = 61)
: A^ ?
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box
*   at62: [U8](builtin-U8.md) val = 43
*   at63: [U8](builtin-U8.md) val = 47
*   pad: [U8](builtin-U8.md) val = 61

#### Returns

* A^ ?

---

### eq
<span class="source-link">[[Source]](src/encode-base64/base64.md#L27)</span>


```pony
fun box eq(
  that: Base64 val)
: Bool val
```
#### Parameters

*   that: [Base64](encode-base64-Base64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/encode-base64/base64.md#L27)</span>


```pony
fun box ne(
  that: Base64 val)
: Bool val
```
#### Parameters

*   that: [Base64](encode-base64-Base64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _enc_byte
<span class="source-link">[[Source]](src/encode-base64/base64.md#L199)</span>


Encode a single byte.


```pony
fun box _enc_byte(
  i: U8 val,
  at62: U8 val,
  at63: U8 val)
: U8 val ?
```
#### Parameters

*   i: [U8](builtin-U8.md) val
*   at62: [U8](builtin-U8.md) val
*   at63: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

