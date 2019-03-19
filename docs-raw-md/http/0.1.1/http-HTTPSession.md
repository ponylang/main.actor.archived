# HTTPSession
<span class="source-link">[[Source]](src/http/http_session.md#L1)</span>

An HTTP Session is the external API to the communication link
between client and server. A session can only transfer one message
at a time in each direction. The client and server each have their
own ways of implementing this interface, but to application code (either
in the client or in the server 'back end') this interface provides a
common view of how information is passed *into* the `net/http` package.


```pony
interface tag HTTPSession
```

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/http/http_session.md#L10)</span>


Start sending a request or response. The `Payload` must have all its
essential fields filled in at this point, because ownership is being
transferred to the session actor. This begins an outbound message.


```pony
be apply(
  payload: Payload val)
```
#### Parameters

*   payload: [Payload](http-Payload.md) val

---

### finish
<span class="source-link">[[Source]](src/http/http_session.md#L17)</span>


Indicate that all *outbound* `add_chunk` calls have been made and
submission of the HTTP message is complete.


```pony
be finish()
```

---

### dispose
<span class="source-link">[[Source]](src/http/http_session.md#L23)</span>


Close the connection from this end.


```pony
be dispose()
```

---

### write
<span class="source-link">[[Source]](src/http/http_session.md#L28)</span>


Write raw byte stream to the outbound TCP connection.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### cancel
<span class="source-link">[[Source]](src/http/http_session.md#L44)</span>


Tell the session to stop sending an *outbound* message.


```pony
be cancel(
  msg: Payload val)
```
#### Parameters

*   msg: [Payload](http-Payload.md) val

---

## Private Behaviours

### _mute
<span class="source-link">[[Source]](src/http/http_session.md#L33)</span>


Stop delivering *incoming* data to the handler. This may not
be effective instantly.


```pony
be _mute()
```

---

### _unmute
<span class="source-link">[[Source]](src/http/http_session.md#L39)</span>


Resume delivering incoming data to the handler.


```pony
be _unmute()
```

---

### _deliver
<span class="source-link">[[Source]](src/http/http_session.md#L49)</span>


The appropriate Payload Builder will call this from the `TCPConnection`
actor to start delivery of a new *inbound* message. If the `Payload`s
`transfer_mode` is `OneshotTransfer`, this is the only notification 
that will happen for the message. Otherwise there will be one or more
`_chunk` calls followed by a `_finish` call.


```pony
be _deliver(
  payload: Payload val)
```
#### Parameters

*   payload: [Payload](http-Payload.md) val

---

### _chunk
<span class="source-link">[[Source]](src/http/http_session.md#L58)</span>


Deliver a piece of *inbound* body data to the application `HTTPHandler`
This is called by the PayloadBuilder.


```pony
be _chunk(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### _finish
<span class="source-link">[[Source]](src/http/http_session.md#L64)</span>


Inidcates that the last *inbound* body chunk has been sent to
`_chunk`. This is called by the PayloadBuilder.


```pony
be _finish()
```

---

