# _ClientConnection
<span class="source-link">[[Source]](src/http/_client_connection.md#L7)</span>

Manages a persistent and possibly pipelined TCP connection to an HTTP server.

This is where pipelining happens, if it has been enabled by the `Client`.
Only "safe" requests (GET, HEAD, OPTIONS) are sent to the server if
*any* responses are still pending.

The `HTTPHandler.send_body` notification function will be called if/when
the `HTTPSession` is ready to receive body data for `POST` operations in
transfer modes other than `Oneshot`.

### Receiving Responses

Reception is handled through an `HTTPHandler` instance.
`HTTPHandler.apply` signals the arrival of a message with headers.
How the body data is obtained depends on the `transfer` mode.

* For `StreamTranfer` and `ChunkedTransfer` modes, there will be
any number of `HTTPHandler.chunk` notifications, followed by
an `HTTPHandler.finished` notification.

* For `OneShotTransfer` mode, the client application just needs to
call `Payload.body` once to get the entire body.

## The HandlerFactory

The `Client` class will try to re-use sessions. If it needs to create
a new session, based on the request URL, it will do that, and then it
will need a new instance of the caller's `HTTPHandler` class.
Since the client application code does not know in advance when this
 will be necessary, it passes in a `HandlerFactory` that creates the
actual `HTTPHandler`, customized
for the client application's needs.


```pony
actor tag _ClientConnection is
  HTTPSession tag
```

#### Implements

* [HTTPSession](http-HTTPSession.md) tag

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_client_connection.md#L54)</span>


Create a connection for the given host and service. We also create
an instance of the client application's HTTPHandler.


```pony
new tag create(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPConnectAuth val),
  host: String val,
  service: String val,
  sslctx: (SSLContext val | None val) = reference,
  pipeline: Bool val = true,
  handlermaker: HandlerFactory val)
: _ClientConnection tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPConnectAuth](net-TCPConnectAuth.md) val)
*   host: [String](builtin-String.md) val
*   service: [String](builtin-String.md) val
*   sslctx: ([SSLContext](net-ssl-SSLContext.md) val | [None](builtin-None.md) val) = reference
*   pipeline: [Bool](builtin-Bool.md) val = true
*   handlermaker: [HandlerFactory](http-HandlerFactory.md) val

#### Returns

* [_ClientConnection](http-_ClientConnection.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/http/_client_connection.md#L73)</span>


Schedule a request to be sent by adding it to the `unsent` queue
for this session.


```pony
be apply(
  request: Payload val)
```
#### Parameters

*   request: [Payload](http-Payload.md) val

---

### cancel
<span class="source-link">[[Source]](src/http/_client_connection.md#L81)</span>


Cancel a request.


```pony
be cancel(
  request: Payload val)
```
#### Parameters

*   request: [Payload](http-Payload.md) val

---

### write
<span class="source-link">[[Source]](src/http/_client_connection.md#L160)</span>


Write a low-level byte stream. The `Payload` objects call this to
generate their wire representation.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### finish
<span class="source-link">[[Source]](src/http/_client_connection.md#L188)</span>


We are done sending a request with a long body.


```pony
be finish()
```

---

### dispose
<span class="source-link">[[Source]](src/http/_client_connection.md#L194)</span>


Cancels all requests and disposes the tcp connection.


```pony
be dispose()
```

---

### throttled
<span class="source-link">[[Source]](src/http/_client_connection.md#L204)</span>


The connection to the server can not accept data for a while.
We set a local flag too so we do not send anything on the queue.


```pony
be throttled()
```

---

### unthrottled
<span class="source-link">[[Source]](src/http/_client_connection.md#L212)</span>


The connection to the server can now accept more data.


```pony
be unthrottled()
```

---

## Private Behaviours

### _deliver
<span class="source-link">[[Source]](src/http/_client_connection.md#L108)</span>


Deal with a new Response coming back from the server.

Since the session operates in a FIFO manner, the Request corresponding
to this Response is the oldest one on the `_sent` list. We take it
off that list and call its handler. It becomes the 'currently being
delivered' response and subsequent body data has to go there as well,
if there is any.


```pony
be _deliver(
  response: Payload val)
```
#### Parameters

*   response: [Payload](http-Payload.md) val

---

### _connected
<span class="source-link">[[Source]](src/http/_client_connection.md#L129)</span>


The connection to the server has been established. Send pending requests.


```pony
be _connected(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### _connect_failed
<span class="source-link">[[Source]](src/http/_client_connection.md#L137)</span>


The connection couldn't be established. Cancel all pending requests.


```pony
be _connect_failed(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### _auth_failed
<span class="source-link">[[Source]](src/http/_client_connection.md#L144)</span>


The connection couldn't be authenticated. Cancel all pending requests.


```pony
be _auth_failed(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### _closed
<span class="source-link">[[Source]](src/http/_client_connection.md#L151)</span>


The connection to the server has closed prematurely. Cancel everything.


```pony
be _closed(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### _chunk
<span class="source-link">[[Source]](src/http/_client_connection.md#L169)</span>


Called when *inbound* body data has arrived for the currently
inbound `Payload`. This should be passed directly to the application's
`HTTPHandler.chunk` method.


```pony
be _chunk(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### _finish
<span class="source-link">[[Source]](src/http/_client_connection.md#L177)</span>


Indicates that the last *inbound* body chunk has been sent to
`_chunk`. This is passed on to the front end.

_send_pending is called to detect that _unsent and _sent are emptye
and that _conn can be disposed.


```pony
be _finish()
```

---

### _mute
<span class="source-link">[[Source]](src/http/_client_connection.md#L320)</span>


The application can not handle any more data for a while.


```pony
be _mute()
```

---

### _unmute
<span class="source-link">[[Source]](src/http/_client_connection.md#L326)</span>


The application can accept more data.


```pony
be _unmute()
```

---

## Private Functions

### _send_pending
<span class="source-link">[[Source]](src/http/_client_connection.md#L220)</span>


Send pending requests to the server. If the connection is closed,
open it. If we have nothing to send and we aren't waiting on any
responses, close the connection.


```pony
fun ref _send_pending()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _new_conn
<span class="source-link">[[Source]](src/http/_client_connection.md#L282)</span>


Creates a new connection. `ResponseBuilder` is the notification class
that will send back a `_connected` call when the connection has been made.


```pony
fun ref _new_conn()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _cancel_all
<span class="source-link">[[Source]](src/http/_client_connection.md#L305)</span>


Cancel all pending requests.


```pony
fun ref _cancel_all()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

