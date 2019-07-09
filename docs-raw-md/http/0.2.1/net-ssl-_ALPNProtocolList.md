# _ALPNProtocolList
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L48)</span>
```pony
primitive val _ALPNProtocolList
```

## Constructors

### create
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L48)</span>


```pony
new val create()
: _ALPNProtocolList val^
```

#### Returns

* [_ALPNProtocolList](net-ssl-_ALPNProtocolList.md) val^

---

## Public Functions

### from_array
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L49)</span>


Try to pack the protocol names in `protocols` into a *protocol name list*


```pony
fun box from_array(
  protocols: Array[String val] box)
: String val ?
```
#### Parameters

*   protocols: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] box

#### Returns

* [String](builtin-String.md) val ?

---

### to_array
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L69)</span>


Try to unpack a *protocol name list* into an `Array[String]`


```pony
fun box to_array(
  protocol_list: String box)
: Array[String val] val ?
```
#### Parameters

*   protocol_list: [String](builtin-String.md) box

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val ?

---

### eq
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L49)</span>


```pony
fun box eq(
  that: _ALPNProtocolList val)
: Bool val
```
#### Parameters

*   that: [_ALPNProtocolList](net-ssl-_ALPNProtocolList.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L49)</span>


```pony
fun box ne(
  that: _ALPNProtocolList val)
: Bool val
```
#### Parameters

*   that: [_ALPNProtocolList](net-ssl-_ALPNProtocolList.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

