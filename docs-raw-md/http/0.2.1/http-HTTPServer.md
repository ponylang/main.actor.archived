# HTTPServer
<span class="source-link">[[Source]](src/http/server.md#L5)</span>

Runs an HTTP server.

### Server operation

Information flow into the Server is as follows:

1. `Server` listens for incoming TCP connections.

2. `RequestBuilder` is the notification class for new connections. It creates
a `ServerConnection` actor and receives all the raw data from TCP. It uses
the `HTTPParser` to assemble complete `Payload` objects which are passed off
to the `ServerConnection`.

3. The `ServerConnection` actor deals with *completely formed* requests
that have been parsed by the `HTTPParser`. This is where requests get
dispatched to the caller-provided Handler.

With streaming content, dispatch to the application's back end Handler
has to happen *before* all of the body has been received. This has to be
carefully choreographed because a `Payload` is an `iso` object and can only
belong to one actor at a time, yet the `RequestBuilder` is running within
the `TCPConnection` actor while the `RequestHandler` is running under the
`ServerConnection` actor. Each incoming bufferful of body data, a
`ByteSeq val`, is handed off to `ServerConnection`, to be passed on to the
back end Handler.

1. It turns out that the issues in sending a request and a response are the
same, as are the issues in receiving them. Therefore the same notification
interface, `HTTPHandler` is used on both ends, and the same sending
interface `HTTPSession` is used. This makes the code easier to read as well.

1. `HTTPHandler.apply()` will be the way the client/server is informed of a
new response/request message. All of the headers will be present so that the
request can be dispatched for correct processing. Subsequent calls to a new
function `HTTPHandler.chunk` will provide the body data, if any. This
stream will be terminated by a call to the new function
`HTTPHandler.finished`.

2. Pipelining of requests is to optimize the transmission of requests over
slow links (such as over satellites), not to cause simultaneous execution
on the server within one session. Multiple received simple requests (`GET`,
`HEAD`, and `OPTIONS`) are queued in the server and passed to the back end
application one at a time. If a client wants true parallel execution of
requests, it should use multiple sessions (which many browsers actually
do already).

Since processing of a streaming response can take a relatively long time,
acting on additional requests in the meantime does nothing but use up memory
since responses would have to be queued. And if the server is being used to
stream media, it is possible that these additional requests will themselves
generate large responses.  Instead we will just let the requests queue up
until a maximum queue length is reached (a small number) at which point we
will back-pressure the inbound TCP stream.


```pony
actor tag HTTPServer
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/server.md#L71)</span>


Create a server bound to the given host and service. To do this we
listen for incoming TCP connections, with a notification handler
that will create a server session actor for each one.


```pony
new tag create(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPListenAuth val),
  notify: ServerNotify iso,
  handler: HandlerFactory val,
  logger: Logger val = reference,
  host: String val = "",
  service: String val = "0",
  limit: USize val = 0,
  sslctx: (SSLContext val | None val) = reference,
  reversedns: (AmbientAuth val | NetAuth val | DNSAuth val | 
    None val) = reference)
: HTTPServer tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPListenAuth](net-TCPListenAuth.md) val)
*   notify: [ServerNotify](http-ServerNotify.md) iso
*   handler: [HandlerFactory](http-HandlerFactory.md) val
*   logger: [Logger](http-Logger.md) val = reference
*   host: [String](builtin-String.md) val = ""
*   service: [String](builtin-String.md) val = "0"
*   limit: [USize](builtin-USize.md) val = 0
*   sslctx: ([SSLContext](net-ssl-SSLContext.md) val | [None](builtin-None.md) val) = reference
*   reversedns: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [DNSAuth](net-DNSAuth.md) val | 
    [None](builtin-None.md) val) = reference

#### Returns

* [HTTPServer](http-HTTPServer.md) tag^

---

## Public Behaviours

### register_session
<span class="source-link">[[Source]](src/http/server.md#L94)</span>


```pony
be register_session(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### unregister_session
<span class="source-link">[[Source]](src/http/server.md#L97)</span>


```pony
be unregister_session(
  conn: TCPConnection tag)
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) tag

---

### set_handler
<span class="source-link">[[Source]](src/http/server.md#L100)</span>


Replace the request handler.


```pony
be set_handler(
  handler: HandlerFactory val)
```
#### Parameters

*   handler: [HandlerFactory](http-HandlerFactory.md) val

---

### set_logger
<span class="source-link">[[Source]](src/http/server.md#L108)</span>


Replace the logger.


```pony
be set_logger(
  logger: Logger val)
```
#### Parameters

*   logger: [Logger](http-Logger.md) val

---

### dispose
<span class="source-link">[[Source]](src/http/server.md#L116)</span>


Shut down the server gracefully. To do this we have to eliminate
and source of further inputs. So we stop listening for new incoming
TCP connections, and close any that still exist.


```pony
be dispose()
```

---

## Public Functions

### local_address
<span class="source-link">[[Source]](src/http/server.md#L127)</span>


Returns the locally bound address.


```pony
fun box local_address()
: NetAddress val
```

#### Returns

* [NetAddress](net-NetAddress.md) val

---

## Private Behaviours

### _listening
<span class="source-link">[[Source]](src/http/server.md#L133)</span>


Called when we are listening.


```pony
be _listening(
  address: NetAddress val)
```
#### Parameters

*   address: [NetAddress](net-NetAddress.md) val

---

### _not_listening
<span class="source-link">[[Source]](src/http/server.md#L140)</span>


Called when we fail to listen.


```pony
be _not_listening()
```

---

### _closed
<span class="source-link">[[Source]](src/http/server.md#L146)</span>


Called when we stop listening.


```pony
be _closed()
```

---

