# _SessionGuard
<span class="source-link">[[Source]](src/http/client.md#L110)</span>

Enforces the rule that an 'unsafe' request monopolizes the
HTTPSession. A 'safe' request does not modify a resource state on
the server, and such a request has no body.


```pony
class ref _SessionGuard
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/client.md#L121)</span>


```pony
new iso create(
  session: HTTPSession tag)
: _SessionGuard iso^
```
#### Parameters

*   session: [HTTPSession](http-HTTPSession.md) tag

#### Returns

* [_SessionGuard](http-_SessionGuard.md) iso^

---

## Public fields

### var current: ([Payload](http-Payload.md) val | [None](builtin-None.md) val)
<span class="source-link">[[Source]](src/http/client.md#L119)</span>



---

## Public Functions

### submit
<span class="source-link">[[Source]](src/http/client.md#L124)</span>


Accept a request for transmission to the server. This will fail if
the request is not "safe" and the HTTPSession is busy. Due to the
possibly large body size, these requests can not be queued.


```pony
fun ref submit(
  request: Payload val)
: None val ?
```
#### Parameters

*   request: [Payload](http-Payload.md) val

#### Returns

* [None](builtin-None.md) val ?

---

