# StatusPreconditionRequired
<span class="source-link">[[Source]](src/http/status.md#L113)</span>
```pony
primitive val StatusPreconditionRequired is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L113)</span>


```pony
new val create()
: StatusPreconditionRequired val^
```

#### Returns

* [StatusPreconditionRequired](http-StatusPreconditionRequired.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L114)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L115)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L114)</span>


```pony
fun box eq(
  that: StatusPreconditionRequired val)
: Bool val
```
#### Parameters

*   that: [StatusPreconditionRequired](http-StatusPreconditionRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L114)</span>


```pony
fun box ne(
  that: StatusPreconditionRequired val)
: Bool val
```
#### Parameters

*   that: [StatusPreconditionRequired](http-StatusPreconditionRequired.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

