# TCPListenAuth
<span class="source-link">[[Source]](src/net/auth.md#L17)</span>
```pony
primitive val TCPListenAuth
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/auth.md#L18)</span>


```pony
new val create(
  from: (AmbientAuth val | NetAuth val | TCPAuth val))
: TCPListenAuth val^
```
#### Parameters

*   from: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [TCPAuth](net-TCPAuth.md) val)

#### Returns

* [TCPListenAuth](net-TCPListenAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/net/auth.md#L18)</span>


```pony
fun box eq(
  that: TCPListenAuth val)
: Bool val
```
#### Parameters

*   that: [TCPListenAuth](net-TCPListenAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/auth.md#L18)</span>


```pony
fun box ne(
  that: TCPListenAuth val)
: Bool val
```
#### Parameters

*   that: [TCPListenAuth](net-TCPListenAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

