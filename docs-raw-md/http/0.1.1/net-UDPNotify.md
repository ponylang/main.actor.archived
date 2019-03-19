# UDPNotify
<span class="source-link">[[Source]](src/net/udp_notify.md#L1)</span>

Notifications for UDP connections.

For an example of using this class please see the documentatoin for the
`UDPSocket` actor.


```pony
interface ref UDPNotify
```

## Public Functions

### listening
<span class="source-link">[[Source]](src/net/udp_notify.md#L8)</span>


Called when the socket has been bound to an address.


```pony
fun ref listening(
  sock: UDPSocket ref)
: None val
```
#### Parameters

*   sock: [UDPSocket](net-UDPSocket.md) ref

#### Returns

* [None](builtin-None.md) val

---

### not_listening
<span class="source-link">[[Source]](src/net/udp_notify.md#L14)</span>


Called if it wasn't possible to bind the socket to an address.

It is expected to implement proper error handling. You need to opt in to
ignoring errors, which can be implemented like this:

```pony
fun ref not_listening(sock: UDPSocket ref) =>
  None
```


```pony
fun ref not_listening(
  sock: UDPSocket ref)
: None val
```
#### Parameters

*   sock: [UDPSocket](net-UDPSocket.md) ref

#### Returns

* [None](builtin-None.md) val

---

### received
<span class="source-link">[[Source]](src/net/udp_notify.md#L27)</span>


Called when new data is received on the socket.


```pony
fun ref received(
  sock: UDPSocket ref,
  data: Array[U8 val] iso,
  from: NetAddress val)
: None val
```
#### Parameters

*   sock: [UDPSocket](net-UDPSocket.md) ref
*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso
*   from: [NetAddress](net-NetAddress.md) val

#### Returns

* [None](builtin-None.md) val

---

### closed
<span class="source-link">[[Source]](src/net/udp_notify.md#L37)</span>


Called when the socket is closed.


```pony
fun ref closed(
  sock: UDPSocket ref)
: None val
```
#### Parameters

*   sock: [UDPSocket](net-UDPSocket.md) ref

#### Returns

* [None](builtin-None.md) val

---

