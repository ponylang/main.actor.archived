# StatusServiceUnavailable
<span class="source-link">[[Source]](src/http/status.md#L135)</span>
```pony
primitive val StatusServiceUnavailable is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L135)</span>


```pony
new val create()
: StatusServiceUnavailable val^
```

#### Returns

* [StatusServiceUnavailable](http-StatusServiceUnavailable.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L136)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L137)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L136)</span>


```pony
fun box eq(
  that: StatusServiceUnavailable val)
: Bool val
```
#### Parameters

*   that: [StatusServiceUnavailable](http-StatusServiceUnavailable.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L136)</span>


```pony
fun box ne(
  that: StatusServiceUnavailable val)
: Bool val
```
#### Parameters

*   that: [StatusServiceUnavailable](http-StatusServiceUnavailable.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

