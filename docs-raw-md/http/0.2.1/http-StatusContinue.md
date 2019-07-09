# StatusContinue
<span class="source-link">[[Source]](src/http/status.md#L5)</span>
```pony
primitive val StatusContinue is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L5)</span>


```pony
new val create()
: StatusContinue val^
```

#### Returns

* [StatusContinue](http-StatusContinue.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L6)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L7)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L6)</span>


```pony
fun box eq(
  that: StatusContinue val)
: Bool val
```
#### Parameters

*   that: [StatusContinue](http-StatusContinue.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L6)</span>


```pony
fun box ne(
  that: StatusContinue val)
: Bool val
```
#### Parameters

*   that: [StatusContinue](http-StatusContinue.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

