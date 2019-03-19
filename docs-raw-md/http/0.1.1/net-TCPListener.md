# TCPListener
<span class="source-link">[[Source]](src/net/tcp_listener.md#L3)</span>

Listens for new network connections.

The following program creates an echo server that listens for
connections on port 8989 and echoes back any data it receives.

```pony
use "net"

class MyTCPConnectionNotify is TCPConnectionNotify
  fun ref received(
    conn: TCPConnection ref,
    data: Array[U8] iso,
    times: USize)
    : Bool
  =>
    conn.write(String.from_array(consume data))
    true

  fun ref connect_failed(conn: TCPConnection ref) =>
    None

class MyTCPListenNotify is TCPListenNotify
  fun ref connected(listen: TCPListener ref): TCPConnectionNotify iso^ =>
    MyTCPConnectionNotify

  fun ref not_listening(listen: TCPListener ref) =>
    None

actor Main
  new create(env: Env) =>
    try
      TCPListener(env.root as AmbientAuth,
        recover MyTCPListenNotify end, "", "8989")
    end
```


```pony
actor tag TCPListener
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/tcp_listener.md#L51)</span>


Listens for both IPv4 and IPv6 connections.


```pony
new tag create(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPListenAuth val),
  notify: TCPListenNotify iso,
  host: String val = seq,
  service: String val = seq,
  limit: USize val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPListener tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPListenAuth](net-TCPListenAuth.md) val)
*   notify: [TCPListenNotify](net-TCPListenNotify.md) iso
*   host: [String](builtin-String.md) val = seq
*   service: [String](builtin-String.md) val = seq
*   limit: [USize](builtin-USize.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPListener](net-TCPListener.md) tag^

---

### ip4
<span class="source-link">[[Source]](src/net/tcp_listener.md#L73)</span>


Listens for IPv4 connections.


```pony
new tag ip4(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPListenAuth val),
  notify: TCPListenNotify iso,
  host: String val = seq,
  service: String val = seq,
  limit: USize val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPListener tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPListenAuth](net-TCPListenAuth.md) val)
*   notify: [TCPListenNotify](net-TCPListenNotify.md) iso
*   host: [String](builtin-String.md) val = seq
*   service: [String](builtin-String.md) val = seq
*   limit: [USize](builtin-USize.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPListener](net-TCPListener.md) tag^

---

### ip6
<span class="source-link">[[Source]](src/net/tcp_listener.md#L95)</span>


Listens for IPv6 connections.


```pony
new tag ip6(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPListenAuth val),
  notify: TCPListenNotify iso,
  host: String val = seq,
  service: String val = seq,
  limit: USize val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPListener tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPListenAuth](net-TCPListenAuth.md) val)
*   notify: [TCPListenNotify](net-TCPListenNotify.md) iso
*   host: [String](builtin-String.md) val = seq
*   service: [String](builtin-String.md) val = seq
*   limit: [USize](builtin-USize.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPListener](net-TCPListener.md) tag^

---

## Public Behaviours

### set_notify
<span class="source-link">[[Source]](src/net/tcp_listener.md#L117)</span>


Change the notifier.


```pony
be set_notify(
  notify: TCPListenNotify iso)
```
#### Parameters

*   notify: [TCPListenNotify](net-TCPListenNotify.md) iso

---

### dispose
<span class="source-link">[[Source]](src/net/tcp_listener.md#L123)</span>


Stop listening.


```pony
be dispose()
```

---

## Public Functions

### local_address
<span class="source-link">[[Source]](src/net/tcp_listener.md#L129)</span>


Return the bound IP address.


```pony
fun box local_address()
: NetAddress val
```

#### Returns

* [NetAddress](net-NetAddress.md) val

---

### close
<span class="source-link">[[Source]](src/net/tcp_listener.md#L238)</span>


Dispose of resources.


```pony
fun ref close()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Behaviours

### _event_notify
<span class="source-link">[[Source]](src/net/tcp_listener.md#L137)</span>


When we are readable, we accept new connections until none remain.


```pony
be _event_notify(
  event: Pointer[AsioEvent val] tag,
  flags: U32 val,
  arg: U32 val)
```
#### Parameters

*   event: [Pointer](builtin-Pointer.md)\[[AsioEvent](builtin-AsioEvent.md) val\] tag
*   flags: [U32](builtin-U32.md) val
*   arg: [U32](builtin-U32.md) val

---

### _conn_closed
<span class="source-link">[[Source]](src/net/tcp_listener.md#L154)</span>


An accepted connection has closed. If we have dropped below the limit, try
to accept new connections.


```pony
be _conn_closed()
```

---

## Private Functions

### _accept
<span class="source-link">[[Source]](src/net/tcp_listener.md#L166)</span>


Accept connections as long as we have spawned fewer than our limit.


```pony
fun ref _accept(
  ns: U32 val = seq)
: None val
```
#### Parameters

*   ns: [U32](builtin-U32.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### _spawn
<span class="source-link">[[Source]](src/net/tcp_listener.md#L215)</span>


Spawn a new connection.


```pony
fun ref _spawn(
  ns: U32 val)
: None val
```
#### Parameters

*   ns: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### _notify_listening
<span class="source-link">[[Source]](src/net/tcp_listener.md#L227)</span>


Inform the notifier that we're listening.


```pony
fun ref _notify_listening()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

