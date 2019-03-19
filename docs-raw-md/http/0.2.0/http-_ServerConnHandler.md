# _ServerConnHandler
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L4)</span>

This is the network notification handler for the server. It uses
`PayloadBuilder` to assemble request `Payload` objects using received
chunks of data. Functions in this class execute within the
`TCPConnection` actor.


```pony
class ref _ServerConnHandler is
  TCPConnectionNotify ref
```

#### Implements

* [TCPConnectionNotify](net-TCPConnectionNotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L19)</span>


Initialize the context for parsing incoming HTTP requests.


```pony
new iso create(
  handlermaker: HandlerFactory val,
  logger: Logger val,
  reversedns: (AmbientAuth val | NetAuth val | DNSAuth val | 
    None val),
  registry: HTTPServer tag)
: _ServerConnHandler iso^
```
#### Parameters

*   handlermaker: [HandlerFactory](http-HandlerFactory.md) val
*   logger: [Logger](http-Logger.md) val
*   reversedns: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [DNSAuth](net-DNSAuth.md) val | 
    [None](builtin-None.md) val)
*   registry: [HTTPServer](http-HTTPServer.md) tag

#### Returns

* [_ServerConnHandler](http-_ServerConnHandler.md) iso^

---

## Public Functions

### accepted
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L33)</span>


Accept the incoming TCP connection and create the actor that will
manage further communication, and the message parser that feeds it.


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

### received
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L50)</span>


Pass chunks of data to the `HTTPParser` for this session. It will
then pass completed information on the the `HTTPSession`.


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

### throttled
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L74)</span>


Notification that the TCP connection to the client can not accept data
for a while.


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

### unthrottled
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L83)</span>


Notification that the TCP connection can resume accepting data.


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

### closed
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L91)</span>


The connection has been closed. Abort the session.


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

### connect_failed
<span class="source-link">[[Source]](src/http/_server_conn_handler.md#L100)</span>


The connect has failed. TODO: is it a case for server-side?


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

### connected



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

### auth_failed



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

