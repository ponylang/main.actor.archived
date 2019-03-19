# StatusNotAcceptable
<span class="source-link">[[Source]](src/http/status.md#L74)</span>
```pony
primitive val StatusNotAcceptable is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L74)</span>


```pony
new val create()
: StatusNotAcceptable val^
```

#### Returns

* [StatusNotAcceptable](http-StatusNotAcceptable.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L75)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L76)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L75)</span>


```pony
fun box eq(
  that: StatusNotAcceptable val)
: Bool val
```
#### Parameters

*   that: [StatusNotAcceptable](http-StatusNotAcceptable.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L75)</span>


```pony
fun box ne(
  that: StatusNotAcceptable val)
: Bool val
```
#### Parameters

*   that: [StatusNotAcceptable](http-StatusNotAcceptable.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

