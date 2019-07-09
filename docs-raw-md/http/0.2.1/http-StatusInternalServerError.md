# StatusInternalServerError
<span class="source-link">[[Source]](src/http/status.md#L126)</span>
```pony
primitive val StatusInternalServerError is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L126)</span>


```pony
new val create()
: StatusInternalServerError val^
```

#### Returns

* [StatusInternalServerError](http-StatusInternalServerError.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L127)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L128)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L127)</span>


```pony
fun box eq(
  that: StatusInternalServerError val)
: Bool val
```
#### Parameters

*   that: [StatusInternalServerError](http-StatusInternalServerError.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L127)</span>


```pony
fun box ne(
  that: StatusInternalServerError val)
: Bool val
```
#### Parameters

*   that: [StatusInternalServerError](http-StatusInternalServerError.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

