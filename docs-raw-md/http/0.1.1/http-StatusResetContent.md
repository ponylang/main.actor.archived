# StatusResetContent
<span class="source-link">[[Source]](src/http/status.md#L27)</span>
```pony
primitive val StatusResetContent is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L27)</span>


```pony
new val create()
: StatusResetContent val^
```

#### Returns

* [StatusResetContent](http-StatusResetContent.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L28)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L29)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L28)</span>


```pony
fun box eq(
  that: StatusResetContent val)
: Bool val
```
#### Parameters

*   that: [StatusResetContent](http-StatusResetContent.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L28)</span>


```pony
fun box ne(
  that: StatusResetContent val)
: Bool val
```
#### Parameters

*   that: [StatusResetContent](http-StatusResetContent.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

