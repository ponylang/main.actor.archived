# CommonLog
<span class="source-link">[[Source]](src/http/common_log.md#L3)</span>

Logs HTTP requests in the common log format.


```pony
class ref CommonLog is
  Logger val
```

#### Implements

* [Logger](http-Logger.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/common_log.md#L9)</span>


```pony
new val create(
  out: OutStream tag)
: CommonLog val^
```
#### Parameters

*   out: [OutStream](builtin-OutStream.md) tag

#### Returns

* [CommonLog](http-CommonLog.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/common_log.md#L12)</span>


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

## Private Functions

### _entry
<span class="source-link">[[Source]](src/http/common_log.md#L59)</span>


```pony
fun box _entry(
  s: String val)
: String val
```
#### Parameters

*   s: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

