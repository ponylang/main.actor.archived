# ContentsLog
<span class="source-link">[[Source]](src/http/contents_log.md#L1)</span>

Logs the contents of HTTP requests and responses.


```pony
class ref ContentsLog is
  Logger val
```

#### Implements

* [Logger](http-Logger.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/contents_log.md#L7)</span>


```pony
new val create(
  out: OutStream tag)
: ContentsLog val^
```
#### Parameters

*   out: [OutStream](builtin-OutStream.md) tag

#### Returns

* [ContentsLog](http-ContentsLog.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/contents_log.md#L10)</span>


```pony
fun val apply(
  ip: String val,
  body_size: USize val,
  request: Payload val,
  response: Payload val)
: None val
```
#### Parameters

*   ip: [String](builtin-String.md) val
*   body_size: [USize](builtin-USize.md) val
*   request: [Payload](http-Payload.md) val
*   response: [Payload](http-Payload.md) val

#### Returns

* [None](builtin-None.md) val

---

