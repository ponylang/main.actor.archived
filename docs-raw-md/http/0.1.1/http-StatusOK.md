# StatusOK
<span class="source-link">[[Source]](src/http/status.md#L12)</span>
```pony
primitive val StatusOK is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L12)</span>


```pony
new val create()
: StatusOK val^
```

#### Returns

* [StatusOK](http-StatusOK.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L13)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L14)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L13)</span>


```pony
fun box eq(
  that: StatusOK val)
: Bool val
```
#### Parameters

*   that: [StatusOK](http-StatusOK.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L13)</span>


```pony
fun box ne(
  that: StatusOK val)
: Bool val
```
#### Parameters

*   that: [StatusOK](http-StatusOK.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

