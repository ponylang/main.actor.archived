# TCPAuth
<span class="source-link">[[Source]](src/net/auth.md#L13)</span>
```pony
primitive val TCPAuth
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/auth.md#L14)</span>


```pony
new val create(
  from: (AmbientAuth val | NetAuth val))
: TCPAuth val^
```
#### Parameters

*   from: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val)

#### Returns

* [TCPAuth](net-TCPAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/net/auth.md#L14)</span>


```pony
fun box eq(
  that: TCPAuth val)
: Bool val
```
#### Parameters

*   that: [TCPAuth](net-TCPAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/auth.md#L14)</span>


```pony
fun box ne(
  that: TCPAuth val)
: Bool val
```
#### Parameters

*   that: [TCPAuth](net-TCPAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

