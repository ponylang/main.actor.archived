# UDPAuth
<span class="source-link">[[Source]](src/net/auth.md#L9)</span>
```pony
primitive val UDPAuth
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/auth.md#L10)</span>


```pony
new val create(
  from: (AmbientAuth val | NetAuth val))
: UDPAuth val^
```
#### Parameters

*   from: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val)

#### Returns

* [UDPAuth](net-UDPAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/net/auth.md#L10)</span>


```pony
fun box eq(
  that: UDPAuth val)
: Bool val
```
#### Parameters

*   that: [UDPAuth](net-UDPAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/auth.md#L10)</span>


```pony
fun box ne(
  that: UDPAuth val)
: Bool val
```
#### Parameters

*   that: [UDPAuth](net-UDPAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

