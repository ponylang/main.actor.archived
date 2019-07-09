# StatusLengthRequired
<span class="source-link">[[Source]](src/http/status.md#L89)</span>
```pony
primitive val StatusLengthRequired is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L89)</span>


```pony
new val create()
: StatusLengthRequired val^
```

#### Returns

* [StatusLengthRequired](http-StatusLengthRequired.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L90)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L91)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L90)</span>


```pony
fun box eq(
  that: StatusLengthRequired val)
: Bool val
```
#### Parameters

*   that: [StatusLengthRequired](http-StatusLengthRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L90)</span>


```pony
fun box ne(
  that: StatusLengthRequired val)
: Bool val
```
#### Parameters

*   that: [StatusLengthRequired](http-StatusLengthRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

