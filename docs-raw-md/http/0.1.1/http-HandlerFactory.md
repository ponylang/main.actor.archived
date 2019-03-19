# HandlerFactory
<span class="source-link">[[Source]](src/http/http_handler.md#L93)</span>

The TCP connections that underlie HTTP sessions get created within
the `net/http` package at times that the application code can not
predict. Yet, the application code has to provide custom hooks into
these connections as they are created. To accomplish this, the
application code provides an instance of a `class` that implements
this interface.

The `HandlerFactory.apply` method will be called when a new
`HTTPSession` is created, giving the application a chance to create
an instance of its own `HTTPHandler`. This happens on both
client and server ends.


```pony
interface ref HandlerFactory
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/http_handler.md#L108)</span>


Called by the `HTTPSession` when it needs a new instance of the
application's `HTTPHandler`. It is suggested that the
`session` value be passed to the constructor for the new
`HTTPHandler` so that it is available for making
`throttle` and `unthrottle` calls.


```pony
fun box apply(
  session: HTTPSession tag)
: HTTPHandler ref^
```
#### Parameters

*   session: [HTTPSession](http-HTTPSession.md) tag

#### Returns

* [HTTPHandler](http-HTTPHandler.md) ref^

---

