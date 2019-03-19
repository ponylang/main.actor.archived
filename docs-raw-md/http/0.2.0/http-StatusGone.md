# StatusGone
<span class="source-link">[[Source]](src/http/status.md#L86)</span>
```pony
primitive val StatusGone is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L86)</span>


```pony
new val create()
: StatusGone val^
```

#### Returns

* [StatusGone](http-StatusGone.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L87)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L88)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L87)</span>


```pony
fun box eq(
  that: StatusGone val)
: Bool val
```
#### Parameters

*   that: [StatusGone](http-StatusGone.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L87)</span>


```pony
fun box ne(
  that: StatusGone val)
: Bool val
```
#### Parameters

*   that: [StatusGone](http-StatusGone.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

