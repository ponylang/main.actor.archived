# SSL
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L19)</span>

An SSL session manages handshakes, encryption and decryption. It is not tied
to any transport layer.


```pony
class ref SSL
```

## Constructors

### _create
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L31)</span>


Create a client or server SSL session from a context.


```pony
new ref _create(
  ctx: Pointer[_SSLContext val] tag,
  server: Bool val,
  verify: Bool val,
  hostname: String val = seq)
: SSL ref^ ?
```
#### Parameters

*   ctx: [Pointer](builtin-Pointer.md)\[[_SSLContext](net-ssl-_SSLContext.md) val\] tag
*   server: [Bool](builtin-Bool.md) val
*   verify: [Bool](builtin-Bool.md) val
*   hostname: [String](builtin-String.md) val = seq

#### Returns

* [SSL](net-ssl-SSL.md) ref^ ?

---

## Public Functions

### alpn_selected
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L74)</span>


Get the protocol identifier negotiated via ALPN


```pony
fun box alpn_selected()
: (String val | None val)
```

#### Returns

* ([String](builtin-String.md) val | [None](builtin-None.md) val)

---

### state
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L89)</span>


Returns the SSL session state.


```pony
fun box state()
: (SSLHandshake val | SSLAuthFail val | SSLReady val | 
    SSLError val)
```

#### Returns

* ([SSLHandshake](net-ssl-SSLHandshake.md) val | [SSLAuthFail](net-ssl-SSLAuthFail.md) val | [SSLReady](net-ssl-SSLReady.md) val | 
    [SSLError](net-ssl-SSLError.md) val)

---

### read
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L95)</span>


Returns unencrypted bytes to be passed to the application. If `expect` is
non-zero, the number of bytes returned will be exactly `expect`. If no data
(or less than `expect` bytes) is available, this returns None.


```pony
fun ref read(
  expect: USize val = seq)
: (Array[U8 val] iso^ | None val)
```
#### Parameters

*   expect: [USize](builtin-USize.md) val = seq

#### Returns

* ([Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^ | [None](builtin-None.md) val)

---

### write
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L153)</span>


When application data is sent, add it to the SSL session. Raises an error
if the handshake is not complete.


```pony
fun ref write(
  data: (String val | Array[U8 val] val))
: None val ?
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val ?

---

### receive
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L164)</span>


When data is received, add it to the SSL session.


```pony
fun ref receive(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### can_send
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L183)</span>


Returns true if there are encrypted bytes to be passed to the destination.


```pony
fun ref can_send()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### send
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L189)</span>


Returns encrypted bytes to be passed to the destination. Raises an error
if no data is available.


```pony
fun ref send()
: Array[U8 val] iso^ ?
```

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^ ?

---

### dispose
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L201)</span>


Dispose of the session.


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _final
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L210)</span>


Dispose of the session.


```pony
fun box _final()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _verify_hostname
<span class="source-link">[[Source]](src/net-ssl/ssl.md#L218)</span>


Verify that the certificate is valid for the given hostname.


```pony
fun ref _verify_hostname()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

