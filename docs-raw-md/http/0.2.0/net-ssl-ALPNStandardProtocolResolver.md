# ALPNStandardProtocolResolver
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L19)</span>

Implements the standard protocol selection akin to the OpenSSL function `SSL_select_next_proto`.


```pony
class val ALPNStandardProtocolResolver is
  ALPNProtocolResolver box
```

#### Implements

* [ALPNProtocolResolver](net-ssl-ALPNProtocolResolver.md) box

---

## Constructors

### create
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L26)</span>


```pony
new val create(
  supported': Array[String val] val,
  use_client_as_fallback': Bool val = seq)
: ALPNStandardProtocolResolver val^
```
#### Parameters

*   supported': [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val
*   use_client_as_fallback': [Bool](builtin-Bool.md) val = seq

#### Returns

* [ALPNStandardProtocolResolver](net-ssl-ALPNStandardProtocolResolver.md) val^

---

## Public fields

### let supported: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L23)</span>



---

### let use_client_as_fallback: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L24)</span>



---

## Public Functions

### resolve
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L30)</span>


```pony
fun box resolve(
  advertised: Array[String val] val)
: (String val | ALPNNoAck val | ALPNWarning val | 
    ALPNFatal val)
```
#### Parameters

*   advertised: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val

#### Returns

* ([String](builtin-String.md) val | [ALPNNoAck](net-ssl-ALPNNoAck.md) val | [ALPNWarning](net-ssl-ALPNWarning.md) val | 
    [ALPNFatal](net-ssl-ALPNFatal.md) val)

---

