# StatusMethodNotAllowed
<span class="source-link">[[Source]](src/http/status.md#L71)</span>
```pony
primitive val StatusMethodNotAllowed is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L71)</span>


```pony
new val create()
: StatusMethodNotAllowed val^
```

#### Returns

* [StatusMethodNotAllowed](http-StatusMethodNotAllowed.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L72)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L73)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L72)</span>


```pony
fun box eq(
  that: StatusMethodNotAllowed val)
: Bool val
```
#### Parameters

*   that: [StatusMethodNotAllowed](http-StatusMethodNotAllowed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L72)</span>


```pony
fun box ne(
  that: StatusMethodNotAllowed val)
: Bool val
```
#### Parameters

*   that: [StatusMethodNotAllowed](http-StatusMethodNotAllowed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

