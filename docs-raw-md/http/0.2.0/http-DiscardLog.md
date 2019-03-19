# DiscardLog
<span class="source-link">[[Source]](src/http/discard_log.md#L1)</span>

Doesn't log anything.


```pony
primitive val DiscardLog
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/discard_log.md#L1)</span>


```pony
new val create()
: DiscardLog val^
```

#### Returns

* [DiscardLog](http-DiscardLog.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/discard_log.md#L5)</span>


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

### eq
<span class="source-link">[[Source]](src/http/discard_log.md#L5)</span>


```pony
fun box eq(
  that: DiscardLog val)
: Bool val
```
#### Parameters

*   that: [DiscardLog](http-DiscardLog.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/discard_log.md#L5)</span>


```pony
fun box ne(
  that: DiscardLog val)
: Bool val
```
#### Parameters

*   that: [DiscardLog](http-DiscardLog.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

