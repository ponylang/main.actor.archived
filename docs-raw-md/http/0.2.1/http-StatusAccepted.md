# StatusAccepted
<span class="source-link">[[Source]](src/http/status.md#L18)</span>
```pony
primitive val StatusAccepted is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L18)</span>


```pony
new val create()
: StatusAccepted val^
```

#### Returns

* [StatusAccepted](http-StatusAccepted.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L19)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L20)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L19)</span>


```pony
fun box eq(
  that: StatusAccepted val)
: Bool val
```
#### Parameters

*   that: [StatusAccepted](http-StatusAccepted.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L19)</span>


```pony
fun box ne(
  that: StatusAccepted val)
: Bool val
```
#### Parameters

*   that: [StatusAccepted](http-StatusAccepted.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

