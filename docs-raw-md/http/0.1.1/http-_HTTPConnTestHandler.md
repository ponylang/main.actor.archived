# _HTTPConnTestHandler
<span class="source-link">[[Source]](src/http/_test.md#L372)</span>
```pony
class ref _HTTPConnTestHandler is
  HTTPHandler ref
```

#### Implements

* [HTTPHandler](http-HTTPHandler.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_test.md#L376)</span>


```pony
new ref create(
  h': TestHelper val)
: _HTTPConnTestHandler ref^
```
#### Parameters

*   h': [TestHelper](ponytest-TestHelper.md) val

#### Returns

* [_HTTPConnTestHandler](http-_HTTPConnTestHandler.md) ref^

---

## Public fields

### var n_received: [U32](builtin-U32.md) val
<span class="source-link">[[Source]](src/http/_test.md#L373)</span>



---

### let h: [TestHelper](ponytest-TestHelper.md) val
<span class="source-link">[[Source]](src/http/_test.md#L374)</span>



---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/_test.md#L380)</span>


```pony
fun ref apply(
  payload: Payload val)
: Any tag
```
#### Parameters

*   payload: [Payload](http-Payload.md) val

#### Returns

* [Any](builtin-Any.md) tag

---

### chunk
<span class="source-link">[[Source]](src/http/_test.md#L384)</span>


```pony
fun ref chunk(
  data: (String val | Array[U8 val] val))
: None val
```
#### Parameters

*   data: ([String](builtin-String.md) val | [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val)

#### Returns

* [None](builtin-None.md) val

---

### finished
<span class="source-link">[[Source]](src/http/http_handler.md#L64)</span>


```pony
fun ref finished()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### cancelled
<span class="source-link">[[Source]](src/http/http_handler.md#L70)</span>


```pony
fun ref cancelled()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### throttled
<span class="source-link">[[Source]](src/http/http_handler.md#L77)</span>


```pony
fun ref throttled()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### unthrottled
<span class="source-link">[[Source]](src/http/http_handler.md#L82)</span>


```pony
fun ref unthrottled()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### need_body
<span class="source-link">[[Source]](src/http/http_handler.md#L87)</span>


```pony
fun ref need_body()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

