# StatusUnsupportedMediaType
<span class="source-link">[[Source]](src/http/status.md#L101)</span>
```pony
primitive val StatusUnsupportedMediaType is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L101)</span>


```pony
new val create()
: StatusUnsupportedMediaType val^
```

#### Returns

* [StatusUnsupportedMediaType](http-StatusUnsupportedMediaType.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L102)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L103)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L102)</span>


```pony
fun box eq(
  that: StatusUnsupportedMediaType val)
: Bool val
```
#### Parameters

*   that: [StatusUnsupportedMediaType](http-StatusUnsupportedMediaType.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L102)</span>


```pony
fun box ne(
  that: StatusUnsupportedMediaType val)
: Bool val
```
#### Parameters

*   that: [StatusUnsupportedMediaType](http-StatusUnsupportedMediaType.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

