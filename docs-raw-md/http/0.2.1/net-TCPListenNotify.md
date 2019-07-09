# TCPListenNotify
<span class="source-link">[[Source]](src/net/tcp_listen_notify.md#L1)</span>

Notifications for TCP listeners.

For an example of using this class, please see the documentation for the
`TCPListener` actor.


```pony
interface ref TCPListenNotify
```

## Public Functions

### listening
<span class="source-link">[[Source]](src/net/tcp_listen_notify.md#L8)</span>


Called when the listener has been bound to an address.


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
<span class="source-link">[[Source]](src/net/tcp_listen_notify.md#L14)</span>


Called if it wasn't possible to bind the listener to an address.

It is expected to implement proper error handling. You need to opt in to
ignoring errors, which can be implemented like this:

```pony
fun ref not_listening(listen: TCPListener ref) =>
  None
```


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
<span class="source-link">[[Source]](src/net/tcp_listen_notify.md#L27)</span>


Called when the listener is closed.


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
<span class="source-link">[[Source]](src/net/tcp_listen_notify.md#L33)</span>


Create a new TCPConnectionNotify to attach to a new TCPConnection for a
newly established connection to the server.


```pony
fun ref connected(
  listen: TCPListener ref)
: TCPConnectionNotify iso^ ?
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) ref

#### Returns

* [TCPConnectionNotify](net-TCPConnectionNotify.md) iso^ ?

---

