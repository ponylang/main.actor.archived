# _ClientConnHandler
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L4)</span>

This is the network notification handler for the client. It passes
received data to the `HTTPParser` to assemble response `Payload` objects.


```pony
class ref _ClientConnHandler is
  TCPConnectionNotify ref
```

#### Implements

* [TCPConnectionNotify](net-TCPConnectionNotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L14)</span>


The response builder needs to know which Session to forward
parsed information to.


```pony
new iso create(
  client: _ClientConnection tag)
: _ClientConnHandler iso^
```
#### Parameters

*   client: [_ClientConnection](http-_ClientConnection.md) tag

#### Returns

* [_ClientConnHandler](http-_ClientConnHandler.md) iso^

---

## Public Functions

### connected
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L22)</span>


Tell the client we have connected.


```pony
fun ref connected(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### connect_failed
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L28)</span>


The connection could not be established. Tell the client not to proceed.


```pony
fun ref connect_failed(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### auth_failed
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L34)</span>


SSL authentication failed. Tell the client not to proceed.


```pony
fun ref auth_failed(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### received
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L40)</span>


Pass a received chunk of data to the `HTTPParser`.


```pony
fun ref received(
  conn: TCPConnection ref,
  data: Array[U8 val] iso,
  times: USize val)
: Bool val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso
*   times: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### closed
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L56)</span>


The connection has closed, possibly prematurely.


```pony
fun ref closed(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### throttled
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L64)</span>


TCP connection wants us to stop sending. We do not do anything with
this here;  just pass it on to the `HTTPSession`.


```pony
fun ref throttled(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### unthrottle
<span class="source-link">[[Source]](src/http/_client_conn_handler.md#L71)</span>


TCP can accept more data now. We just pass this on to the
`HTTPSession`


```pony
fun ref unthrottle(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### accepted



```pony
fun ref accepted(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

### connecting



```pony
fun ref connecting(
  conn: TCPConnection ref,
  count: U32 val)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   count: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### sent



```pony
fun ref sent(
  conn: TCPConnection ref,
  data: (String val | Array[U8 val] val))
: (String val | Array[U8 val] val)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### sentv



```pony
fun ref sentv(
  conn: TCPConnection ref,
  data: ByteSeqIter val)
: ByteSeqIter val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

#### Returns

* [ByteSeqIter](builtin-ByteSeqIter.md) val

---

### expect



```pony
fun ref expect(
  conn: TCPConnection ref,
  qty: USize val)
: USize val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   qty: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### unthrottled



```pony
fun ref unthrottled(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

