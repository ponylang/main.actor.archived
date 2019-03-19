# StatusExpectationFailed
<span class="source-link">[[Source]](src/http/status.md#L107)</span>
```pony
primitive val StatusExpectationFailed is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L107)</span>


```pony
new val create()
: StatusExpectationFailed val^
```

#### Returns

* [StatusExpectationFailed](http-StatusExpectationFailed.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L108)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L109)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L108)</span>


```pony
fun box eq(
  that: StatusExpectationFailed val)
: Bool val
```
#### Parameters

*   that: [StatusExpectationFailed](http-StatusExpectationFailed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L108)</span>


```pony
fun box ne(
  that: StatusExpectationFailed val)
: Bool val
```
#### Parameters

*   that: [StatusExpectationFailed](http-StatusExpectationFailed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

