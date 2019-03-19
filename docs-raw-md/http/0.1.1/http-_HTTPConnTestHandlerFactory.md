# _HTTPConnTestHandlerFactory
<span class="source-link">[[Source]](src/http/_test.md#L387)</span>
```pony
class val _HTTPConnTestHandlerFactory is
  HandlerFactory ref
```

#### Implements

* [HandlerFactory](http-HandlerFactory.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_test.md#L390)</span>


```pony
new val create(
  h': TestHelper val)
: _HTTPConnTestHandlerFactory val^
```
#### Parameters

*   h': [TestHelper](ponytest-TestHelper.md) val

#### Returns

* [_HTTPConnTestHandlerFactory](http-_HTTPConnTestHandlerFactory.md) val^

---

## Public fields

### let h: [TestHelper](ponytest-TestHelper.md) val
<span class="source-link">[[Source]](src/http/_test.md#L388)</span>



---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/_test.md#L393)</span>


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

