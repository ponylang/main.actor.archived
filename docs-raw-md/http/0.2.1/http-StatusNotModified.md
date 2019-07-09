# StatusNotModified
<span class="source-link">[[Source]](src/http/status.md#L46)</span>
```pony
primitive val StatusNotModified is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L46)</span>


```pony
new val create()
: StatusNotModified val^
```

#### Returns

* [StatusNotModified](http-StatusNotModified.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L47)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L48)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L47)</span>


```pony
fun box eq(
  that: StatusNotModified val)
: Bool val
```
#### Parameters

*   that: [StatusNotModified](http-StatusNotModified.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L47)</span>


```pony
fun box ne(
  that: StatusNotModified val)
: Bool val
```
#### Parameters

*   that: [StatusNotModified](http-StatusNotModified.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

