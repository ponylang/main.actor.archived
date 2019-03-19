# StatusMovedPermanently
<span class="source-link">[[Source]](src/http/status.md#L37)</span>
```pony
primitive val StatusMovedPermanently is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L37)</span>


```pony
new val create()
: StatusMovedPermanently val^
```

#### Returns

* [StatusMovedPermanently](http-StatusMovedPermanently.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L38)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L39)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L38)</span>


```pony
fun box eq(
  that: StatusMovedPermanently val)
: Bool val
```
#### Parameters

*   that: [StatusMovedPermanently](http-StatusMovedPermanently.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L38)</span>


```pony
fun box ne(
  that: StatusMovedPermanently val)
: Bool val
```
#### Parameters

*   that: [StatusMovedPermanently](http-StatusMovedPermanently.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

