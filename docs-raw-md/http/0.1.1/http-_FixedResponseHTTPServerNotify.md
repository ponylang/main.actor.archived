# _FixedResponseHTTPServerNotify
<span class="source-link">[[Source]](src/http/_test.md#L472)</span>

Test http server that spits out fixed responses.
apply returns a TCPListenNotify object.


```pony
primitive val _FixedResponseHTTPServerNotify
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/_test.md#L472)</span>


```pony
new val create()
: _FixedResponseHTTPServerNotify val^
```

#### Returns

* [_FixedResponseHTTPServerNotify](http-_FixedResponseHTTPServerNotify.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/_test.md#L478)</span>


```pony
fun box apply(
  h': TestHelper val,
  f: {(String val)} iso,
  r: Array[String val] val)
: TCPListenNotify iso^
```
#### Parameters

*   h': [TestHelper](ponytest-TestHelper.md) val
*   f: {(String val)} iso
*   r: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val

#### Returns

* [TCPListenNotify](net-TCPListenNotify.md) iso^

---

### eq
<span class="source-link">[[Source]](src/http/_test.md#L478)</span>


```pony
fun box eq(
  that: _FixedResponseHTTPServerNotify val)
: Bool val
```
#### Parameters

*   that: [_FixedResponseHTTPServerNotify](http-_FixedResponseHTTPServerNotify.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/_test.md#L478)</span>


```pony
fun box ne(
  that: _FixedResponseHTTPServerNotify val)
: Bool val
```
#### Parameters

*   that: [_FixedResponseHTTPServerNotify](http-_FixedResponseHTTPServerNotify.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

