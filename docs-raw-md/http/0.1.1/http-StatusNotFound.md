# StatusNotFound
<span class="source-link">[[Source]](src/http/status.md#L68)</span>
```pony
primitive val StatusNotFound is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L68)</span>


```pony
new val create()
: StatusNotFound val^
```

#### Returns

* [StatusNotFound](http-StatusNotFound.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L69)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L70)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L69)</span>


```pony
fun box eq(
  that: StatusNotFound val)
: Bool val
```
#### Parameters

*   that: [StatusNotFound](http-StatusNotFound.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L69)</span>


```pony
fun box ne(
  that: StatusNotFound val)
: Bool val
```
#### Parameters

*   that: [StatusNotFound](http-StatusNotFound.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

