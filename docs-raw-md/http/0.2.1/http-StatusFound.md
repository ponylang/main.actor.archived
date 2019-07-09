# StatusFound
<span class="source-link">[[Source]](src/http/status.md#L40)</span>
```pony
primitive val StatusFound is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L40)</span>


```pony
new val create()
: StatusFound val^
```

#### Returns

* [StatusFound](http-StatusFound.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L41)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L42)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L41)</span>


```pony
fun box eq(
  that: StatusFound val)
: Bool val
```
#### Parameters

*   that: [StatusFound](http-StatusFound.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L41)</span>


```pony
fun box ne(
  that: StatusFound val)
: Bool val
```
#### Parameters

*   that: [StatusFound](http-StatusFound.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

