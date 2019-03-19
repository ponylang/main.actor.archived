# StatusCreated
<span class="source-link">[[Source]](src/http/status.md#L15)</span>
```pony
primitive val StatusCreated is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L15)</span>


```pony
new val create()
: StatusCreated val^
```

#### Returns

* [StatusCreated](http-StatusCreated.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L16)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L17)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L16)</span>


```pony
fun box eq(
  that: StatusCreated val)
: Bool val
```
#### Parameters

*   that: [StatusCreated](http-StatusCreated.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L16)</span>


```pony
fun box ne(
  that: StatusCreated val)
: Bool val
```
#### Parameters

*   that: [StatusCreated](http-StatusCreated.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

