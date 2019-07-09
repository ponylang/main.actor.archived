# _ServerConnection
<span class="source-link">[[Source]](src/http/_server_connection.md#L4)</span>

Manages a stream of requests coming into a server from a single client,
dispatches those request to a back-end, and returns the responses back
to the client.


```pony
actor tag _ServerConnection is
  HTTPSession tag
```

#### Implements

* [HTTPSession](http-HTTPSession.md) tag

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_server_connection.md#L20)</span>


Create a connection actor to manage communication with to a new
client. We also create an instance of the application's back-end
handler that will process incoming requests.


```pony
new tag create(
  handlermaker: HandlerFactory val,
  logger: Logger val,
  conn: TCPConnection tag,
  client_ip: String val)
: _ServerConnection tag^
```
#### Parameters

*   handlermaker: [HandlerFactory](http-HandlerFactory.md) val
*   logger: [Logger](http-Logger.md) val
*   conn: [TCPConnection](net-TCPConnection.md) tag
*   client_ip: [String](builtin-String.md) val

#### Returns

* [_ServerConnection](http-_ServerConnection.md) tag^

---

## Public Behaviours

### dispose
<span class="source-link">[[Source]](src/http/_server_connection.md#L83)</span>


Close the connection from the server end.


```pony
be dispose()
```

---

### cancel
<span class="source-link">[[Source]](src/http/_server_connection.md#L89)</span>


Cancel the current response. The connection has closed.


```pony
be cancel(
  msg: Payload val)
```
#### Parameters

*   msg: [Payload](http-Payload.md) val

---

### apply
<span class="source-link">[[Source]](src/http/_server_connection.md#L103)</span>


Initiate transmission of the HTTP Response message for the current
Request.


```pony
be apply(
  response: Payload val)
```
#### Parameters

*   response: [Payload](http-Payload.md) val

---

### write
<span class="source-link">[[Source]](src/http/_server_connection.md#L148)</span>


Write low level outbound raw byte stream.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### finish
<span class="source-link">[[Source]](src/http/_server_connection.md#L155)</span>


We are done sending a response. We can close the connection if
`keepalive` was not requested.


```pony
be finish()
```

---

### throttled
<span class="source-link">[[Source]](src/http/_server_connection.md#L174)</span>


TCP connection can not accept data for a while.


```pony
be throttled()
```

---

### unthrottled
<span class="source-link">[[Source]](src/http/_server_connection.md#L180)</span>


TCP connection can not accept data for a while.


```pony
be unthrottled()
```

---

## Private Behaviours

### _deliver
<span class="source-link">[[Source]](src/http/_server_connection.md#L36)</span>


Dispatch requests. At the time this behavior is called for StreamTransfer
and ChunkTransfer encodings, only the headers of the request may have
been received. Receiving and dealing with the body, which could be
quite large in POST methods, is up to the chosen application handler.

The client can send several requests without waiting for a response,
but they are only passed to the back end one at a time. Only when all
of the response to a processed request has been sent is the next request
processed.


```pony
be _deliver(
  request: Payload val)
```
#### Parameters

*   request: [Payload](http-Payload.md) val

---

### _chunk
<span class="source-link">[[Source]](src/http/_server_connection.md#L69)</span>


Receive some `request` body data, which we pass on to the handler.


```pony
be _chunk(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### _finish
<span class="source-link">[[Source]](src/http/_server_connection.md#L76)</span>


Inidcates that the last *inbound* body chunk has been sent to
`_chunk`. This is passed on to the back end.


```pony
be _finish()
```

---

### _closed
<span class="source-link">[[Source]](src/http/_server_connection.md#L99)</span>


```pony
be _closed()
```

---

### _mute
<span class="source-link">[[Source]](src/http/_server_connection.md#L186)</span>


```pony
be _mute()
```

---

### _unmute
<span class="source-link">[[Source]](src/http/_server_connection.md#L189)</span>


```pony
be _unmute()
```

---

## Private Functions

### _dispatch_pending
<span class="source-link">[[Source]](src/http/_server_connection.md#L118)</span>


If we have pending requests, dispatch the next one.


```pony
fun ref _dispatch_pending()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _send
<span class="source-link">[[Source]](src/http/_server_connection.md#L130)</span>


Send a single response.


```pony
fun ref _send(
  response: Payload val)
: None val
```
#### Parameters

*   response: [Payload](http-Payload.md) val

#### Returns

* [None](builtin-None.md) val

---

