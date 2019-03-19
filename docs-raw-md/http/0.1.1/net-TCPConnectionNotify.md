# TCPConnectionNotify
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L1)</span>

Notifications for TCP connections.

For an example of using this class please see the documentation for the
`TCPConnection` and `TCPListener` actors.


```pony
interface ref TCPConnectionNotify
```

## Public Functions

### accepted
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L8)</span>


Called when a TCPConnection is accepted by a TCPListener.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L14)</span>


Called if name resolution succeeded for a TCPConnection and we are now
waiting for a connection to the server to succeed. The count is the number
of connections we're trying. The notifier will be informed each time the
count changes, until a connection is made or connect_failed() is called.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L23)</span>


Called when we have successfully connected to the server.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L29)</span>


Called when we have failed to connect to all possible addresses for the
server. At this point, the connection will never be established.

It is expected to implement proper error handling. You need to opt in to
ignoring errors, which can be implemented like this:

```pony
fun ref connect_failed(conn: TCPConnection ref) =>
  None
```


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L43)</span>


A raw TCPConnection has no authentication mechanism. However, when
protocols are wrapped in other protocols, this can be used to report an
authentication failure in a lower level protocol (e.g. SSL).


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L51)</span>


Called when data is sent on the connection. This gives the notifier an
opportunity to modify sent data before it is written. To swallow data,
return an empty string.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L59)</span>


Called when multiple chunks of data are sent to the connection in a single
call. This gives the notifier an opportunity to modify the sent data chunks
before they are written. To swallow the send, return an empty
Array[String].


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L68)</span>


Called when new data is received on the connection. Return true if you
want to continue receiving messages without yielding until you read
max_size on the TCPConnection. Return false to cause the TCPConnection
to yield now.

Includes the number of times during the current behavior, that received has
been called. This allows the notifier to end reads on a regular basis.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L85)</span>


Called when the connection has been told to expect a certain quantity of
bytes. This allows nested notifiers to change the expected quantity, which
allows a lower level protocol to handle any framing (e.g. SSL).


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L93)</span>


Called when the connection is closed.


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
<span class="source-link">[[Source]](src/net/tcp_connection_notify.md#L99)</span>


Called when the connection starts experiencing TCP backpressure. You should
respond to this by pausing additional calls to `write` and `writev` until
you are informed that pressure has been released. Failure to respond to
the `throttled` notification will result in outgoing data queuing in the
connection and increasing memory usage.


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


Called when the connection stops experiencing TCP backpressure. Upon
receiving this notification, you should feel free to start making calls to
`write` and `writev` again.


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

