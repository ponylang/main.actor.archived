# TCPConnection
<span class="source-link">[[Source]](src/net/tcp_connection.md#L16)</span>

A TCP connection. When connecting, the Happy Eyeballs algorithm is used.

The following code creates a client that connects to port 8989 of
the local host, writes "hello world", and listens for a response,
which it then prints.

```pony
use "net"

class MyTCPConnectionNotify is TCPConnectionNotify
  let _out: OutStream

  new create(out: OutStream) =>
    _out = out

  fun ref connected(conn: TCPConnection ref) =>
    conn.write("hello world")

  fun ref received(
    conn: TCPConnection ref,
    data: Array[U8] iso,
    times: USize)
    : Bool
  =>
    _out.print("GOT:" + String.from_array(consume data))
    conn.close()
    true

  fun ref connect_failed(conn: TCPConnection ref) =>
    None

actor Main
  new create(env: Env) =>
    try
      TCPConnection(env.root as AmbientAuth,
        recover MyTCPConnectionNotify(env.out) end, "", "8989")
    end
```

Note: when writing to the connection data will be silently discarded if the
connection has not yet been established.

## Backpressure support

### Write

The TCP protocol has built-in backpressure support. This is generally
experienced as the outgoing write buffer becoming full and being unable
to write all requested data to the socket. In `TCPConnection`, this is
hidden from the programmer. When this occurs, `TCPConnection` will buffer
the extra data until such time as it is able to be sent. Left unchecked,
this could result in uncontrolled queuing. To address this,
`TCPConnectionNotify` implements two methods `throttled` and `unthrottled`
that are called when backpressure is applied and released.

Upon receiving a `throttled` notification, your application has two choices
on how to handle it. One is to inform the Pony runtime that it can no
longer make progress and that runtime backpressure should be applied to
any actors sending this one messages. For example, you might construct your
application like:

```pony
// Here we have a TCPConnectionNotify that upon construction
// is given a BackpressureAuth token. This allows the notifier
// to inform the Pony runtime when to apply and release backpressure
// as the connection experiences it.
// Note the calls to
//
// Backpressure.apply(_auth)
// Backpressure.release(_auth)
//
// that apply and release backpressure as needed

use "backpressure"
use "collections"
use "net"

class SlowDown is TCPConnectionNotify
  let _auth: BackpressureAuth
  let _out: StdStream

  new iso create(auth: BackpressureAuth, out: StdStream) =>
    _auth = auth
    _out = out

  fun ref throttled(connection: TCPConnection ref) =>
    _out.print("Experiencing backpressure!")
    Backpressure.apply(_auth)

  fun ref unthrottled(connection: TCPConnection ref) =>
    _out.print("Releasing backpressure!")
    Backpressure.release(_auth)

  fun ref closed(connection: TCPConnection ref) =>
    // if backpressure has been applied, make sure we release
    // when shutting down
    _out.print("Releasing backpressure if applied!")
    Backpressure.release(_auth)

  fun ref connect_failed(conn: TCPConnection ref) =>
    None

actor Main
  new create(env: Env) =>
    try
      let auth = env.root as AmbientAuth
      let socket = TCPConnection(auth, recover SlowDown(auth, env.out) end,
        "", "7669")
    end

```

Or if you want, you could handle backpressure by shedding load, that is,
dropping the extra data rather than carrying out the send. This might look
like:

```pony
use "net"

class ThrowItAway is TCPConnectionNotify
  var _throttled: Bool = false

  fun ref sent(conn: TCPConnection ref, data: ByteSeq): ByteSeq =>
    if not _throttled then
      data
    else
      ""
    end

  fun ref sentv(conn: TCPConnection ref, data: ByteSeqIter): ByteSeqIter =>
    if not _throttled then
      data
    else
      recover Array[String] end
    end

  fun ref throttled(connection: TCPConnection ref) =>
    _throttled = true

  fun ref unthrottled(connection: TCPConnection ref) =>
    _throttled = false

  fun ref connect_failed(conn: TCPConnection ref) =>
    None

actor Main
  new create(env: Env) =>
    try
      TCPConnection(env.root as AmbientAuth,
        recover ThrowItAway end, "", "7669")
    end
```

In general, unless you have a very specific use case, we strongly advise that
you don't implement a load shedding scheme where you drop data.

### Read

If your application is unable to keep up with data being sent to it over
a `TCPConnection` you can use the builtin read backpressure support to
pause reading the socket which will in turn start to exert backpressure on
the corresponding writer on the other end of that socket.

The `mute` behavior allow any other actors in your application to request
the cessation of additional reads until such time as `unmute` is called.
Please note that this cessation is not guaranteed to happen immediately as
it is the result of an asynchronous behavior call and as such will have to
wait for existing messages in the `TCPConnection`'s mailbox to be handled.

On non-windows platforms, your `TCPConnection` will not notice if the
other end of the connection closes until you unmute it. Unix type systems
like FreeBSD, Linux and OSX learn about a closed connection upon read. On
these platforms, you **must** call `unmute` on a muted connection to have
it close. Without calling `unmute` the `TCPConnection` actor will never
exit.


```pony
actor tag TCPConnection
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/tcp_connection.md#L225)</span>


Connect via IPv4 or IPv6. If `from` is a non-empty string, the connection
will be made from the specified interface.


```pony
new tag create(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPConnectAuth val),
  notify: TCPConnectionNotify iso,
  host: String val,
  service: String val,
  from: String val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPConnection tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPConnectAuth](net-TCPConnectAuth.md) val)
*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso
*   host: [String](builtin-String.md) val
*   service: [String](builtin-String.md) val
*   from: [String](builtin-String.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPConnection](net-TCPConnection.md) tag^

---

### ip4
<span class="source-link">[[Source]](src/net/tcp_connection.md#L247)</span>


Connect via IPv4.


```pony
new tag ip4(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPConnectAuth val),
  notify: TCPConnectionNotify iso,
  host: String val,
  service: String val,
  from: String val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPConnection tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPConnectAuth](net-TCPConnectAuth.md) val)
*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso
*   host: [String](builtin-String.md) val
*   service: [String](builtin-String.md) val
*   from: [String](builtin-String.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPConnection](net-TCPConnection.md) tag^

---

### ip6
<span class="source-link">[[Source]](src/net/tcp_connection.md#L268)</span>


Connect via IPv6.


```pony
new tag ip6(
  auth: (AmbientAuth val | NetAuth val | TCPAuth val | 
    TCPConnectAuth val),
  notify: TCPConnectionNotify iso,
  host: String val,
  service: String val,
  from: String val = seq,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPConnection tag^
```
#### Parameters

*   auth: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val | 
    [TCPConnectAuth](net-TCPConnectAuth.md) val)
*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso
*   host: [String](builtin-String.md) val
*   service: [String](builtin-String.md) val
*   from: [String](builtin-String.md) val = seq
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPConnection](net-TCPConnection.md) tag^

---

### _accept
<span class="source-link">[[Source]](src/net/tcp_connection.md#L289)</span>


A new connection accepted on a server.


```pony
new tag _accept(
  listen: TCPListener tag,
  notify: TCPConnectionNotify iso,
  fd: U32 val,
  init_size: USize val = seq,
  max_size: USize val = seq)
: TCPConnection tag^
```
#### Parameters

*   listen: [TCPListener](net-TCPListener.md) tag
*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso
*   fd: [U32](builtin-U32.md) val
*   init_size: [USize](builtin-USize.md) val = seq
*   max_size: [USize](builtin-USize.md) val = seq

#### Returns

* [TCPConnection](net-TCPConnection.md) tag^

---

## Public Behaviours

### write
<span class="source-link">[[Source]](src/net/tcp_connection.md#L325)</span>


Write a single sequence of bytes. Data will be silently discarded if the
connection has not yet been established though.


```pony
be write(
  data: (String val | Array[U8 val] val))
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

---

### writev
<span class="source-link">[[Source]](src/net/tcp_connection.md#L336)</span>


Write a sequence of sequences of bytes. Data will be silently discarded if
the connection has not yet been established though.


```pony
be writev(
  data: ByteSeqIter val)
```
#### Parameters

*   data: [ByteSeqIter](builtin-ByteSeqIter.md) val

---

### mute
<span class="source-link">[[Source]](src/net/tcp_connection.md#L387)</span>


Temporarily suspend reading off this TCPConnection until such time as
`unmute` is called.


```pony
be mute()
```

---

### unmute
<span class="source-link">[[Source]](src/net/tcp_connection.md#L394)</span>


Start reading off this TCPConnection again after having been muted.


```pony
be unmute()
```

---

### set_notify
<span class="source-link">[[Source]](src/net/tcp_connection.md#L401)</span>


Change the notifier.


```pony
be set_notify(
  notify: TCPConnectionNotify iso)
```
#### Parameters

*   notify: [TCPConnectionNotify](net-TCPConnectionNotify.md) iso

---

### dispose
<span class="source-link">[[Source]](src/net/tcp_connection.md#L407)</span>


Close the connection gracefully once all writes are sent.


```pony
be dispose()
```

---

## Public Functions

### local_address
<span class="source-link">[[Source]](src/net/tcp_connection.md#L413)</span>


Return the local IP address.


```pony
fun box local_address()
: NetAddress val
```

#### Returns

* [NetAddress](net-NetAddress.md) val

---

### remote_address
<span class="source-link">[[Source]](src/net/tcp_connection.md#L421)</span>


Return the remote IP address.


```pony
fun box remote_address()
: NetAddress val
```

#### Returns

* [NetAddress](net-NetAddress.md) val

---

### expect
<span class="source-link">[[Source]](src/net/tcp_connection.md#L429)</span>


A `received` call on the notifier must contain exactly `qty` bytes. If
`qty` is zero, the call can contain any amount of data. This has no effect
if called in the `sent` notifier callback.


```pony
fun ref expect(
  qty: USize val = seq)
: None val
```
#### Parameters

*   qty: [USize](builtin-USize.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### set_nodelay
<span class="source-link">[[Source]](src/net/tcp_connection.md#L440)</span>


Turn Nagle on/off. Defaults to on. This can only be set on a connected
socket.


```pony
fun ref set_nodelay(
  state: Bool val)
: None val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### set_keepalive
<span class="source-link">[[Source]](src/net/tcp_connection.md#L449)</span>


Sets the TCP keepalive timeout to approximately `secs` seconds. Exact
timing is OS dependent. If `secs` is zero, TCP keepalive is disabled. TCP
keepalive is disabled by default. This can only be set on a connected
socket.


```pony
fun ref set_keepalive(
  secs: U32 val)
: None val
```
#### Parameters

*   secs: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### write_final
<span class="source-link">[[Source]](src/net/tcp_connection.md#L551)</span>


Write as much as possible to the socket. Set `_writeable` to `false` if not
everything was written. On an error, close the connection. This is for data
that has already been transformed by the notifier. Data will be silently
discarded if the connection has not yet been established though.


```pony
fun ref write_final(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### close
<span class="source-link">[[Source]](src/net/tcp_connection.md#L863)</span>


Attempt to perform a graceful shutdown. Don't accept new writes. If the
connection isn't muted then we won't finish closing until we get a zero
length read. If the connection is muted, perform a hard close and shut
down immediately.


```pony
fun ref close()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### getsockopt
<span class="source-link">[[Source]](src/net/tcp_connection.md#L984)</span>


General wrapper for TCP sockets to the `getsockopt(2)` system call.

The caller must provide an array that is pre-allocated to be
at least as large as the largest data structure that the kernel
may return for the requested option.

In case of system call success, this function returns the 2-tuple:
1. The integer `0`.
2. An `Array[U8]` of data returned by the system call's `void *`
   4th argument.  Its size is specified by the kernel via the
   system call's `sockopt_len_t *` 5th argument.

In case of system call failure, this function returns the 2-tuple:
1. The value of `errno`.
2. An undefined value that must be ignored.

Usage example:

```pony
// connected() is a callback function for class TCPConnectionNotify
fun ref connected(conn: TCPConnection ref) =>
  match conn.getsockopt(OSSockOpt.sol_socket(), OSSockOpt.so_rcvbuf(), 4)
    | (0, let gbytes: Array[U8] iso) =>
      try
        let br = Reader.create().>append(consume gbytes)
        ifdef littleendian then
          let buffer_size = br.u32_le()?
        else
          let buffer_size = br.u32_be()?
        end
      end
    | (let errno: U32, _) =>
      // System call failed
  end
```


```pony
fun ref getsockopt(
  level: I32 val,
  option_name: I32 val,
  option_max_size: USize val = seq)
: (U32 val , Array[U8 val] iso^)
```
#### Parameters

*   level: [I32](builtin-I32.md) val
*   option_name: [I32](builtin-I32.md) val
*   option_max_size: [USize](builtin-USize.md) val = seq

#### Returns

* ([U32](builtin-U32.md) val , [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^)

---

### getsockopt_u32
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1025)</span>


Wrapper for TCP sockets to the `getsockopt(2)` system call where
the kernel's returned option value is a C `uint32_t` type / Pony
type `U32`.

In case of system call success, this function returns the 2-tuple:
1. The integer `0`.
2. The `*option_value` returned by the kernel converted to a Pony `U32`.

In case of system call failure, this function returns the 2-tuple:
1. The value of `errno`.
2. An undefined value that must be ignored.


```pony
fun ref getsockopt_u32(
  level: I32 val,
  option_name: I32 val)
: (U32 val , U32 val)
```
#### Parameters

*   level: [I32](builtin-I32.md) val
*   option_name: [I32](builtin-I32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### setsockopt
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1041)</span>


General wrapper for TCP sockets to the `setsockopt(2)` system call.

The caller is responsible for the correct size and byte contents of
the `option` array for the requested `level` and `option_name`,
including using the appropriate machine endian byte order.

This function returns `0` on success, else the value of `errno` on
failure.

Usage example:

```pony
// connected() is a callback function for class TCPConnectionNotify
fun ref connected(conn: TCPConnection ref) =>
  let sb = Writer

  sb.u32_le(7744)             // Our desired socket buffer size
  let sbytes = Array[U8]
  for bs in sb.done().values() do
    sbytes.append(bs)
  end
  match conn.setsockopt(OSSockOpt.sol_socket(), OSSockOpt.so_rcvbuf(), sbytes)
    | 0 =>
      // System call was successful
    | let errno: U32 =>
      // System call failed
  end
```


```pony
fun ref setsockopt(
  level: I32 val,
  option_name: I32 val,
  option: Array[U8 val] ref)
: U32 val
```
#### Parameters

*   level: [I32](builtin-I32.md) val
*   option_name: [I32](builtin-I32.md) val
*   option: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] ref

#### Returns

* [U32](builtin-U32.md) val

---

### setsockopt_u32
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1074)</span>


General wrapper for TCP sockets to the `setsockopt(2)` system call where
the kernel expects an option value of a C `uint32_t` type / Pony
type `U32`.

This function returns `0` on success, else the value of `errno` on
failure.


```pony
fun ref setsockopt_u32(
  level: I32 val,
  option_name: I32 val,
  option: U32 val)
: U32 val
```
#### Parameters

*   level: [I32](builtin-I32.md) val
*   option_name: [I32](builtin-I32.md) val
*   option: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### get_so_error
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1086)</span>


Wrapper for the FFI call `getsockopt(fd, SOL_SOCKET, SO_ERROR, ...)`


```pony
fun ref get_so_error()
: (U32 val , U32 val)
```

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### get_so_rcvbuf
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1092)</span>


Wrapper for the FFI call `getsockopt(fd, SOL_SOCKET, SO_RCVBUF, ...)`


```pony
fun ref get_so_rcvbuf()
: (U32 val , U32 val)
```

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### get_so_sndbuf
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1098)</span>


Wrapper for the FFI call `getsockopt(fd, SOL_SOCKET, SO_SNDBUF, ...)`


```pony
fun ref get_so_sndbuf()
: (U32 val , U32 val)
```

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### get_tcp_nodelay
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1104)</span>


Wrapper for the FFI call `getsockopt(fd, SOL_SOCKET, TCP_NODELAY, ...)`


```pony
fun ref get_tcp_nodelay()
: (U32 val , U32 val)
```

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### set_so_rcvbuf
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1111)</span>


Wrapper for the FFI call `setsockopt(fd, SOL_SOCKET, SO_RCVBUF, ...)`


```pony
fun ref set_so_rcvbuf(
  bufsize: U32 val)
: U32 val
```
#### Parameters

*   bufsize: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### set_so_sndbuf
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1117)</span>


Wrapper for the FFI call `setsockopt(fd, SOL_SOCKET, SO_SNDBUF, ...)`


```pony
fun ref set_so_sndbuf(
  bufsize: U32 val)
: U32 val
```
#### Parameters

*   bufsize: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### set_tcp_nodelay
<span class="source-link">[[Source]](src/net/tcp_connection.md#L1123)</span>


Wrapper for the FFI call `setsockopt(fd, SOL_SOCKET, TCP_NODELAY, ...)`


```pony
fun ref set_tcp_nodelay(
  state: Bool val)
: U32 val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val

#### Returns

* [U32](builtin-U32.md) val

---

## Private Behaviours

### _event_notify
<span class="source-link">[[Source]](src/net/tcp_connection.md#L460)</span>


Handle socket events.


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

### _read_again
<span class="source-link">[[Source]](src/net/tcp_connection.md#L545)</span>


Resume reading.


```pony
be _read_again()
```

---

## Private Functions

### _complete_writes
<span class="source-link">[[Source]](src/net/tcp_connection.md#L586)</span>


The OS has informed us that `len` bytes of pending writes have completed.
This occurs only with IOCP on Windows.


```pony
fun ref _complete_writes(
  len: U32 val)
: None val
```
#### Parameters

*   len: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### _pending_writes
<span class="source-link">[[Source]](src/net/tcp_connection.md#L611)</span>


Send pending data. If any data can't be sent, keep it and mark as not
writeable. On an error, dispose of the connection. Returns whether
it sent all pending data or not.


```pony
fun ref _pending_writes()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### _manage_pending_buffer
<span class="source-link">[[Source]](src/net/tcp_connection.md#L654)</span>


Manage pending buffer for data sent. Returns a boolean of whether
the pending buffer is empty or not.


```pony
fun ref _manage_pending_buffer(
  bytes_sent: USize val,
  bytes_to_send: USize val,
  num_to_send: USize val)
: Bool val ?
```
#### Parameters

*   bytes_sent: [USize](builtin-USize.md) val
*   bytes_to_send: [USize](builtin-USize.md) val
*   num_to_send: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val ?

---

### _complete_reads
<span class="source-link">[[Source]](src/net/tcp_connection.md#L727)</span>


The OS has informed us that `len` bytes of pending reads have completed.
This occurs only with IOCP on Windows.


```pony
fun ref _complete_reads(
  len: U32 val)
: None val
```
#### Parameters

*   len: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### _read_buf_size
<span class="source-link">[[Source]](src/net/tcp_connection.md#L759)</span>


Resize the read buffer.


```pony
fun ref _read_buf_size()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _queue_read
<span class="source-link">[[Source]](src/net/tcp_connection.md#L769)</span>


Begin an IOCP read on Windows.


```pony
fun ref _queue_read()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _pending_reads
<span class="source-link">[[Source]](src/net/tcp_connection.md#L784)</span>


Unless this connection is currently muted, read while data is available,
guessing the next packet length as we go. If we read 4 kb of data, send
ourself a resume message and stop reading, to avoid starving other actors.


```pony
fun ref _pending_reads()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _notify_connecting
<span class="source-link">[[Source]](src/net/tcp_connection.md#L852)</span>


Inform the notifier that we're connecting.


```pony
fun ref _notify_connecting()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _close
<span class="source-link">[[Source]](src/net/tcp_connection.md#L880)</span>


```pony
fun ref _close()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _try_shutdown
<span class="source-link">[[Source]](src/net/tcp_connection.md#L884)</span>


If we have closed and we have no remaining writes or pending connections,
then shutdown.


```pony
fun ref _try_shutdown()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _hard_close
<span class="source-link">[[Source]](src/net/tcp_connection.md#L919)</span>


When an error happens, do a non-graceful close.


```pony
fun ref _hard_close()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _is_sock_connected
<span class="source-link">[[Source]](src/net/tcp_connection.md#L958)</span>


```pony
fun box _is_sock_connected(
  fd: U32 val)
: Bool val
```
#### Parameters

*   fd: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _apply_backpressure
<span class="source-link">[[Source]](src/net/tcp_connection.md#L962)</span>


```pony
fun ref _apply_backpressure()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _release_backpressure
<span class="source-link">[[Source]](src/net/tcp_connection.md#L976)</span>


```pony
fun ref _release_backpressure()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

