# StatusForbidden
<span class="source-link">[[Source]](src/http/status.md#L65)</span>
```pony
primitive val StatusForbidden is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L65)</span>


```pony
new val create()
: StatusForbidden val^
```

#### Returns

* [StatusForbidden](http-StatusForbidden.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L66)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L67)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L66)</span>


```pony
fun box eq(
  that: StatusForbidden val)
: Bool val
```
#### Parameters

*   that: [StatusForbidden](http-StatusForbidden.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L66)</span>


```pony
fun box ne(
  that: StatusForbidden val)
: Bool val
```
#### Parameters

*   that: [StatusForbidden](http-StatusForbidden.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

