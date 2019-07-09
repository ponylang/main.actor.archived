# StatusTeapot
<span class="source-link">[[Source]](src/http/status.md#L110)</span>
```pony
primitive val StatusTeapot is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L110)</span>


```pony
new val create()
: StatusTeapot val^
```

#### Returns

* [StatusTeapot](http-StatusTeapot.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L111)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L112)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L111)</span>


```pony
fun box eq(
  that: StatusTeapot val)
: Bool val
```
#### Parameters

*   that: [StatusTeapot](http-StatusTeapot.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L111)</span>


```pony
fun box ne(
  that: StatusTeapot val)
: Bool val
```
#### Parameters

*   that: [StatusTeapot](http-StatusTeapot.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

