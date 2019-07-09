# StatusUseProxy
<span class="source-link">[[Source]](src/http/status.md#L49)</span>
```pony
primitive val StatusUseProxy is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L49)</span>


```pony
new val create()
: StatusUseProxy val^
```

#### Returns

* [StatusUseProxy](http-StatusUseProxy.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L50)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L51)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L50)</span>


```pony
fun box eq(
  that: StatusUseProxy val)
: Bool val
```
#### Parameters

*   that: [StatusUseProxy](http-StatusUseProxy.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L50)</span>


```pony
fun box ne(
  that: StatusUseProxy val)
: Bool val
```
#### Parameters

*   that: [StatusUseProxy](http-StatusUseProxy.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

