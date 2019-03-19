# ServerNotify
<span class="source-link">[[Source]](src/http/server_notify.md#L16)</span>

Notifications about the creation and closing of `TCPConnection`s
within HTTP servers.


```pony
interface ref ServerNotify
```

## Public Functions

### listening
<span class="source-link">[[Source]](src/http/server_notify.md#L21)</span>


Called when we are listening.


```pony
fun ref listening(
  server: HTTPServer ref)
: None val
```
#### Parameters

*   server: [HTTPServer](http-HTTPServer.md) ref

#### Returns

* [None](builtin-None.md) val

---

### not_listening
<span class="source-link">[[Source]](src/http/server_notify.md#L27)</span>


Called when we fail to listen.


```pony
fun ref not_listening(
  server: HTTPServer ref)
: None val
```
#### Parameters

*   server: [HTTPServer](http-HTTPServer.md) ref

#### Returns

* [None](builtin-None.md) val

---

### closed
<span class="source-link">[[Source]](src/http/server_notify.md#L33)</span>


Called when we stop listening.


```pony
fun ref closed(
  server: HTTPServer ref)
: None val
```
#### Parameters

*   server: [HTTPServer](http-HTTPServer.md) ref

#### Returns

* [None](builtin-None.md) val

---

