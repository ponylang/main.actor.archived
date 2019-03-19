# _ServerListener
<span class="source-link">[[Source]](src/http/_server_listener.md#L4)</span>

Manages the listening socket for an HTTP server. Incoming requests
are assembled and dispatched.


```pony
class ref _ServerListener is
  TCPListenNotify ref
```

#### Implements

* [TCPListenNotify](net-TCPListenNotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_server_listener.md#L15)</span>


Creates a new listening socket manager.


```pony
new iso create(
  server: HTTPServer tag,
  sslctx: (SSLContext val | None val),
  handler: HandlerFactory val,
  logger: Logger val,
  reversedns: (AmbientAuth val | NetAuth val | DNSAuth val | 
    None val))
: _ServerListener iso^
```
#### Parameters

*   server: [HTTPServer](http-HTTPServer.md) tag
*   sslctx: ([SSLContext](net-ssl-SSLContext.md) val | [None](builtin-None.md) val)
*   handler: [HandlerFactory](http-HandlerFactory.md) val
*   logger: [Logger](http-Logger.md) val
*   reversedns: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [DNSAuth](net-DNSAuth.md) val | 
    [None](builtin-None.md) val)

#### Returns

* [_ServerListener](http-_ServerListener.md) iso^

---

## Public Functions

### listening
<span class="source-link">[[Source]](src/http/_server_listener.md#L31)</span>


Inform the server of the bound IP address.


```pony
fun ref listening(
  listen: TCPListener ref)
: None val
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) ref

#### Returns

* [None](builtin-None.md) val

---

### not_listening
<span class="source-link">[[Source]](src/http/_server_listener.md#L37)</span>


Inform the server we failed to listen.


```pony
fun ref not_listening(
  listen: TCPListener ref)
: None val
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) ref

#### Returns

* [None](builtin-None.md) val

---

### closed
<span class="source-link">[[Source]](src/http/_server_listener.md#L43)</span>


Inform the server we have stopped listening.


```pony
fun ref closed(
  listen: TCPListener ref)
: None val
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) ref

#### Returns

* [None](builtin-None.md) val

---

### connected
<span class="source-link">[[Source]](src/http/_server_listener.md#L49)</span>


Create a notifier for a specific HTTP socket. A new instance of the
back-end Handler is passed along so it can be used on each `Payload`.


```pony
fun ref connected(
  listen: TCPListener ref)
: TCPConnectionNotify iso^
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) ref

#### Returns

* [TCPConnectionNotify](net-TCPConnectionNotify.md) iso^

---

