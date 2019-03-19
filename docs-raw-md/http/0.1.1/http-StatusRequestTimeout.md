# StatusRequestTimeout
<span class="source-link">[[Source]](src/http/status.md#L80)</span>
```pony
primitive val StatusRequestTimeout is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L80)</span>


```pony
new val create()
: StatusRequestTimeout val^
```

#### Returns

* [StatusRequestTimeout](http-StatusRequestTimeout.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L81)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L82)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L81)</span>


```pony
fun box eq(
  that: StatusRequestTimeout val)
: Bool val
```
#### Parameters

*   that: [StatusRequestTimeout](http-StatusRequestTimeout.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L81)</span>


```pony
fun box ne(
  that: StatusRequestTimeout val)
: Bool val
```
#### Parameters

*   that: [StatusRequestTimeout](http-StatusRequestTimeout.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

