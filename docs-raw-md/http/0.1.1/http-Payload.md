# Payload
<span class="source-link">[[Source]](src/http/payload.md#L11)</span>

This class represent a single HTTP message, which can be either a
`request` or a `response`.

### Transfer Modes

HTTP provides two ways to encode the transmission of a message 'body',
of any size. This package supports both of them:

2. **StreamTransfer**. This is used for payload bodies where the exact
  length is known in advance, including most transfers of files. It is
  selected by calling `Payload.set_length` with an integer bytecount.
  Appication buffer sizes determine how much data is fed to the TCP
  connection at once, but the total amount must match this size.

3. **ChunkedTransfer**. This is used when the payload length can not be
  known in advance, but can be large. It is selected by calling
  `Payload.set_length` with a parameter of `None`. On the TCP link this mode
  can be detected because there is no `Content-Length` header at all, being
  replaced by the `Transfer-Encoding: chunked` header. In addition, the
  message body is separated into chunks, each with its own bytecount. As with
  `StreamTransfer` mode, transmission can be spread out over time with the
  difference that it is the original data source that determines the chunk
  size.

  If `Payload.set_length` is never called at all, a variation on
  `StreamTransfer` called `OneshotTransfer` is used. In this case, all of
  the message body is placed into the message at once, using
  `Payload.add_chunk` calls. The size will be determined when the message is
  submitted for transmission. Care must be taken not to consume too much
  memory, especially on a server where there can be multiple messages in
  transit at once.

  The type of transfer being used by an incoming message can be determined
  from its `transfer_mode` field, which will be one of the
  [TransferMode](net-http-TransferMode) types.

### Sequence

For example, to send a message of possibly large size:

1. Create the message with a call to `Payload.request` or `Payload.response`.
2. Set the `session` field of the message.
2. Call `Payload.set_length` to indicate the length of the body.
3. Add any additional headers that may be required, such as `Content-type`.
4. Submit the message for transmission by calling the either the
`HTTPSession.apply` method (in servers) or the `HTTPCLient.apply` method
in clients.
5. Wait for the `send_body` notification.
6. Make any number of calls to `Payload.send_chunk`.
7. Call `Payload.finish`.

To send a message of small, reasonable size (say, under 20KB), this
simplified method can be used instead:

1. Create the message with a call to `Payload.request` or `Payload.response`.
2. Set the `session` field of the message.
3. Add any additional headers that may be required, such as `Content-type`.
4. Call `add_chunk` one or more times to add body data.
4. Submit the message for transmission by calling the either the
[HTTPSession](net-http-HTTPSession)`.apply` method (in servers) or the
[HTTPClient](net-http-HTTPClient)`.apply` method in clients.


```pony
class trn Payload
```

## Constructors

### request
<span class="source-link">[[Source]](src/http/payload.md#L136)</span>


Create an HTTP `request` message.


```pony
new iso request(
  method': String val = seq,
  url': URL val = seq)
: Payload iso^
```
#### Parameters

*   method': [String](builtin-String.md) val = seq
*   url': [URL](http-URL.md) val = seq

#### Returns

* [Payload](http-Payload.md) iso^

---

### response
<span class="source-link">[[Source]](src/http/payload.md#L145)</span>


Create an HTTP `response` message.


```pony
new iso response(
  status': Status val = seq)
: Payload iso^
```
#### Parameters

*   status': [Status](http-Status.md) val = seq

#### Returns

* [Payload](http-Payload.md) iso^

---

### _empty
<span class="source-link">[[Source]](src/http/payload.md#L154)</span>


Create an empty HTTP payload.


```pony
new iso _empty(
  response': Bool val = seq)
: Payload iso^
```
#### Parameters

*   response': [Bool](builtin-Bool.md) val = seq

#### Returns

* [Payload](http-Payload.md) iso^

---

## Public fields

### var proto: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/payload.md#L75)</span>

The HTTP protocol string



---

### var status: [U16](builtin-U16.md) val
<span class="source-link">[[Source]](src/http/payload.md#L78)</span>

Internal representation of the response [Status](net-http-Status).

Will be `0` for HTTP requests.




---

### var method: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/payload.md#L85)</span>

The HTTP Method.

`GET`, `POST`, `DELETE`, `OPTIONS`, ...

For HTTP responses this will be the status string,
for a `200` status this will be `200 OK`, for `404`, `404 Not Found` etc..




---

### var url: [URL](http-URL.md) val
<span class="source-link">[[Source]](src/http/payload.md#L95)</span>

The HTTP request [URL](net-http-URL).
It will be used for the HTTP path and the `Host` header.
The `user` and `password` fields are ignored.

For HTTP responses this will be an empty [URL](net-http-URL).




---

### var transfer_mode: ([ChunkedTransfer](http-ChunkedTransfer.md) val | [StreamTransfer](http-StreamTransfer.md) val | [OneshotTransfer](http-OneshotTransfer.md) val)
<span class="source-link">[[Source]](src/http/payload.md#L104)</span>

Determines the transfer mode of this message.

In case of outgoing requests or responses,
use `set_length` to control the transfer mode.

In case of incoming requests, this field determines
how the request is transferred.




---

### var session: ([HTTPSession](http-HTTPSession.md) tag | [None](builtin-None.md) val)
<span class="source-link">[[Source]](src/http/payload.md#L114)</span>



---

### var username: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/payload.md#L119)</span>

The username extracted from an `Authentication` header of an HTTP request
received via [HTTPServer](net-http-HTTPServer).

This is not used and not sent using [HTTPClient](net-http-HTTPClient),
use `update` to set an `Authentication` header instead.




---

### var password: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/payload.md#L127)</span>

The password extracted from an `Authentication` header of an HTTP request
received via [HTTPServer](net-http-HTTPServer).

This is not used and not sent using [HTTPClient](net-http-HTTPClient),
use `update` to set an `Authentication` header instead.




---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/payload.md#L163)</span>


Get a header.


```pony
fun box apply(
  key: String val)
: String val ?
```
#### Parameters

*   key: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val ?

---

### is_safe
<span class="source-link">[[Source]](src/http/payload.md#L169)</span>


A request method is "safe" if it does not modify state in the resource.
These methods can be guaranteed not to have any body data.
Return true for a safe request method, false otherwise.


```pony
fun box is_safe()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### body
<span class="source-link">[[Source]](src/http/payload.md#L184)</span>


Get the body in `OneshotTransfer` mode.
In the other modes it raises an error.


```pony
fun box body()
: this->Array[(String val | Array[U8 val] val)] ref ?
```

#### Returns

* this->[Array](builtin-Array.md)\[([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)\] ref ?

---

### set_length
<span class="source-link">[[Source]](src/http/payload.md#L194)</span>


Set the body length when known in advance. This determines the
transfer mode that will be used. A parameter of 'None' will use
Chunked Transfer Encoding. A numeric value will use Streamed
transfer. Not calling this function at all will
use Oneshot transfer.


```pony
fun ref set_length(
  bytecount: (USize val | None val))
: None val
```
#### Parameters

*   bytecount: ([USize](builtin-USize.md) val | [None](builtin-None.md) val)

#### Returns

* [None](builtin-None.md) val

---

### update
<span class="source-link">[[Source]](src/http/payload.md#L214)</span>


Set any header. If we've already received the header, append the value as a
comma separated list, as per RFC 2616 section 4.2.


```pony
fun ref update(
  key: String val,
  value: String val)
: Payload ref^
```
#### Parameters

*   key: [String](builtin-String.md) val
*   value: [String](builtin-String.md) val

#### Returns

* [Payload](http-Payload.md) ref^

---

### headers
<span class="source-link">[[Source]](src/http/payload.md#L225)</span>


Get all the headers.


```pony
fun box headers()
: this->HashMap[String val, String val, HashEq[String val] val] ref
```

#### Returns

* this->[HashMap](collections-HashMap.md)\[[String](builtin-String.md) val, [String](builtin-String.md) val, [HashEq](collections-HashEq.md)\[[String](builtin-String.md) val\] val\] ref

---

### body_size
<span class="source-link">[[Source]](src/http/payload.md#L231)</span>


Get the total intended size of the body.
`ServerConnection` accumulates actual size transferred for logging.


```pony
fun box body_size()
: (USize val | None val)
```

#### Returns

* ([USize](builtin-USize.md) val | [None](builtin-None.md) val)

---

### add_chunk
<span class="source-link">[[Source]](src/http/payload.md#L241)</span>


This is how application code adds data to the body in
`OneshotTransfer` mode. For large bodies, call `set_length`
and use `send_chunk` instead.


```pony
fun ref add_chunk(
  data: (String val | Array[U8 val] val))
: Payload ref^
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [Payload](http-Payload.md) ref^

---

### send_chunk
<span class="source-link">[[Source]](src/http/payload.md#L252)</span>


This is how application code sends body data in `StreamTransfer` and
`ChunkedTransfer` modes. For smaller body lengths, `add_chunk` in
`Oneshot` mode can be used instead.


```pony
fun box send_chunk(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### finish
<span class="source-link">[[Source]](src/http/payload.md#L277)</span>


Mark the end of body transmission. This does not do anything,
and is unnecessary, in Oneshot mode.


```pony
fun val finish()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### respond
<span class="source-link">[[Source]](src/http/payload.md#L293)</span>


Start sending a response from the server to the client.


```pony
fun val respond(
  response': Payload trn)
: None val
```
#### Parameters

*   response': [Payload](http-Payload.md) trn

#### Returns

* [None](builtin-None.md) val

---

### has_body
<span class="source-link">[[Source]](src/http/payload.md#L407)</span>


Determines whether a message has a body portion.


```pony
fun box has_body()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _client_fail
<span class="source-link">[[Source]](src/http/payload.md#L301)</span>


Start sending an error response.


```pony
fun val _client_fail()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _write
<span class="source-link">[[Source]](src/http/payload.md#L313)</span>


Writes the payload to an HTTPSession. Requests and Responses differ
only in the first line of text - everything after that is the same format.


```pony
fun val _write(
  keepalive: Bool val = seq,
  conn: TCPConnection tag)
: None val
```
#### Parameters

*   keepalive: [Bool](builtin-Bool.md) val = seq
*   conn: [TCPConnection](net-TCPConnection.md) tag

#### Returns

* [None](builtin-None.md) val

---

### _write_request
<span class="source-link">[[Source]](src/http/payload.md#L326)</span>


Writes the 'request' parts of an HTTP message.


```pony
fun val _write_request(
  keepalive: Bool val,
  conn: TCPConnection tag)
: None val
```
#### Parameters

*   keepalive: [Bool](builtin-Bool.md) val
*   conn: [TCPConnection](net-TCPConnection.md) tag

#### Returns

* [None](builtin-None.md) val

---

### _write_common
<span class="source-link">[[Source]](src/http/payload.md#L348)</span>


Writes the parts of an HTTP message common to both requests and
responses.


```pony
fun val _write_common(
  conn: TCPConnection tag)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

#### Returns

* [None](builtin-None.md) val

---

### _write_response
<span class="source-link">[[Source]](src/http/payload.md#L362)</span>


Write the response-specific parts of an HTTP message. This is the
status line, consisting of the protocol name, the status value,
and a string representation of the status (carried in the `method`
field). Since writing it out is an actor behavior call, we go to
the trouble of packaging it into a single string before sending.


```pony
fun val _write_response(
  keepalive: Bool val,
  conn: TCPConnection tag)
: None val
```
#### Parameters

*   keepalive: [Bool](builtin-Bool.md) val
*   conn: [TCPConnection](net-TCPConnection.md) tag

#### Returns

* [None](builtin-None.md) val

---

### _write_headers
<span class="source-link">[[Source]](src/http/payload.md#L388)</span>


Write all of the HTTP headers to the comm link.


```pony
fun box _write_headers(
  conn: TCPConnection tag)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

#### Returns

* [None](builtin-None.md) val

---

