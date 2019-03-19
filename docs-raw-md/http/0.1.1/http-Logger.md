# Logger
<span class="source-link">[[Source]](src/http/server_notify.md#L1)</span>

Handles logging request/response pairs.


```pony
interface val Logger
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/server_notify.md#L5)</span>


```pony
fun val apply(
  ip: String val,
  body_size: USize val,
  request: Payload val,
  response: Payload val)
: Any tag
```
#### Parameters

*   ip: [String](builtin-String.md) val
*   body_size: [USize](builtin-USize.md) val
*   request: [Payload](http-Payload.md) val
*   response: [Payload](http-Payload.md) val

#### Returns

* [Any](builtin-Any.md) tag

---

