# SSLConnection
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L4)</span>

Wrap another protocol in an SSL connection.


```pony
class ref SSLConnection is
  TCPConnectionNotify ref
```

#### Implements

* [TCPConnectionNotify](net-TCPConnectionNotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L15)</span>


Initialise with a wrapped protocol and an SSL session.


```pony
new iso create(
  notify: TCPConnectionNotify iso,
  ssl: SSL iso)
: SSLConnection iso^
```
#### Parameters

*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso
*   ssl: [SSL](net-ssl-SSL.md) iso

#### Returns

* [SSLConnection](net-ssl-SSLConnection.md) iso^

---

## Public Functions

### accepted
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L22)</span>


Forward to the wrapped protocol.


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
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L28)</span>


Forward to the wrapped protocol.


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
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L34)</span>


Swallow this event until the handshake is complete.


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
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L40)</span>


Forward to the wrapped protocol.


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

### sent
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L46)</span>


Pass the data to the SSL session and check for both new application data
and new destination data.


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
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L65)</span>


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

### received
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L72)</span>


Pass the data to the SSL session and check for both new application data
and new destination data.


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

### expect
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L86)</span>


Keep track of the expect count for the wrapped protocol. Always tell the
TCPConnection to read all available data.


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

### closed
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L94)</span>


Forward to the wrapped protocol.


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

### auth_failed
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L43)</span>


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

### throttled
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L99)</span>


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L109)</span>


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

## Private Functions

### _poll
<span class="source-link">[[Source]](src/net-ssl/ssl_connection.md#L107)</span>


Checks for both new application data and new destination data. Informs the
wrapped protocol that is has connected when the handshake is complete.


```pony
fun ref _poll(
  conn: TCPConnection ref)
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref

#### Returns

* [None](builtin-None.md) val

---

