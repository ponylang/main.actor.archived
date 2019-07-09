# DNSAuth
<span class="source-link">[[Source]](src/net/auth.md#L5)</span>
```pony
primitive val DNSAuth
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/auth.md#L6)</span>


```pony
new val create(
  from: (AmbientAuth val | NetAuth val))
: DNSAuth val^
```
#### Parameters

*   from: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val)

#### Returns

* [DNSAuth](net-DNSAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/net/auth.md#L6)</span>


```pony
fun box eq(
  that: DNSAuth val)
: Bool val
```
#### Parameters

*   that: [DNSAuth](net-DNSAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/auth.md#L6)</span>


```pony
fun box ne(
  that: DNSAuth val)
: Bool val
```
#### Parameters

*   that: [DNSAuth](net-DNSAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

