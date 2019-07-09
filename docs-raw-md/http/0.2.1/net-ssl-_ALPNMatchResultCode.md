# _ALPNMatchResultCode
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L42)</span>
```pony
primitive val _ALPNMatchResultCode
```

## Constructors

### create
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L42)</span>


```pony
new val create()
: _ALPNMatchResultCode val^
```

#### Returns

* [_ALPNMatchResultCode](net-ssl-_ALPNMatchResultCode.md) val^

---

## Public Functions

### ok
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L43)</span>


```pony
fun box ok()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### warning
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L44)</span>


```pony
fun box warning()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### fatal
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L45)</span>


```pony
fun box fatal()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### no_ack
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L46)</span>


```pony
fun box no_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### eq
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L43)</span>


```pony
fun box eq(
  that: _ALPNMatchResultCode val)
: Bool val
```
#### Parameters

*   that: [_ALPNMatchResultCode](net-ssl-_ALPNMatchResultCode.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L43)</span>


```pony
fun box ne(
  that: _ALPNMatchResultCode val)
: Bool val
```
#### Parameters

*   that: [_ALPNMatchResultCode](net-ssl-_ALPNMatchResultCode.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

