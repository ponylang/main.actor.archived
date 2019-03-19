# ALPNProtocolNotify
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L3)</span>
```pony
interface ref ALPNProtocolNotify
```

## Public Functions

### alpn_negotiated
<span class="source-link">[[Source]](src/net-ssl/alpn.md#L4)</span>


```pony
fun ref alpn_negotiated(
  conn: TCPConnection ref,
  protocol: (String val | None val))
: None val
```
#### Parameters

*   conn: [TCPConnection](net-TCPConnection.md) ref
*   protocol: ([String](builtin-String.md) val | [None](builtin-None.md) val)

#### Returns

* [None](builtin-None.md) val

---

