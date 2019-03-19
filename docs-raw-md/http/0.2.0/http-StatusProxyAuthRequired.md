# StatusProxyAuthRequired
<span class="source-link">[[Source]](src/http/status.md#L77)</span>
```pony
primitive val StatusProxyAuthRequired is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L77)</span>


```pony
new val create()
: StatusProxyAuthRequired val^
```

#### Returns

* [StatusProxyAuthRequired](http-StatusProxyAuthRequired.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L78)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L79)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L78)</span>


```pony
fun box eq(
  that: StatusProxyAuthRequired val)
: Bool val
```
#### Parameters

*   that: [StatusProxyAuthRequired](http-StatusProxyAuthRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L78)</span>


```pony
fun box ne(
  that: StatusProxyAuthRequired val)
: Bool val
```
#### Parameters

*   that: [StatusProxyAuthRequired](http-StatusProxyAuthRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

