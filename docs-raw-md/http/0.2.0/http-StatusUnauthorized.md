# StatusUnauthorized
<span class="source-link">[[Source]](src/http/status.md#L59)</span>
```pony
primitive val StatusUnauthorized is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L59)</span>


```pony
new val create()
: StatusUnauthorized val^
```

#### Returns

* [StatusUnauthorized](http-StatusUnauthorized.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L60)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L61)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L60)</span>


```pony
fun box eq(
  that: StatusUnauthorized val)
: Bool val
```
#### Parameters

*   that: [StatusUnauthorized](http-StatusUnauthorized.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L60)</span>


```pony
fun box ne(
  that: StatusUnauthorized val)
: Bool val
```
#### Parameters

*   that: [StatusUnauthorized](http-StatusUnauthorized.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

