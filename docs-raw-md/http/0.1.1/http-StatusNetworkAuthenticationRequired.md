# StatusNetworkAuthenticationRequired
<span class="source-link">[[Source]](src/http/status.md#L144)</span>
```pony
primitive val StatusNetworkAuthenticationRequired is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L144)</span>


```pony
new val create()
: StatusNetworkAuthenticationRequired val^
```

#### Returns

* [StatusNetworkAuthenticationRequired](http-StatusNetworkAuthenticationRequired.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L145)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L146)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L145)</span>


```pony
fun box eq(
  that: StatusNetworkAuthenticationRequired val)
: Bool val
```
#### Parameters

*   that: [StatusNetworkAuthenticationRequired](http-StatusNetworkAuthenticationRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L145)</span>


```pony
fun box ne(
  that: StatusNetworkAuthenticationRequired val)
: Bool val
```
#### Parameters

*   that: [StatusNetworkAuthenticationRequired](http-StatusNetworkAuthenticationRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

