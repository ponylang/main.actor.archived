# TCPConnectAuth
<span class="source-link">[[Source]](src/net/auth.md#L21)</span>
```pony
primitive val TCPConnectAuth
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/auth.md#L22)</span>


```pony
new val create(
  from: (AmbientAuth val | NetAuth val | TCPAuth val))
: TCPConnectAuth val^
```
#### Parameters

*   from: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val)

#### Returns

* [TCPConnectAuth](net-TCPConnectAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/net/auth.md#L22)</span>


```pony
fun box eq(
  that: TCPConnectAuth val)
: Bool val
```
#### Parameters

*   that: [TCPConnectAuth](net-TCPConnectAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/auth.md#L22)</span>


```pony
fun box ne(
  that: TCPConnectAuth val)
: Bool val
```
#### Parameters

*   that: [TCPConnectAuth](net-TCPConnectAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

