# StatusRequestEntityTooLarge
<span class="source-link">[[Source]](src/http/status.md#L95)</span>
```pony
primitive val StatusRequestEntityTooLarge is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L95)</span>


```pony
new val create()
: StatusRequestEntityTooLarge val^
```

#### Returns

* [StatusRequestEntityTooLarge](http-StatusRequestEntityTooLarge.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L96)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L97)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L96)</span>


```pony
fun box eq(
  that: StatusRequestEntityTooLarge val)
: Bool val
```
#### Parameters

*   that: [StatusRequestEntityTooLarge](http-StatusRequestEntityTooLarge.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L96)</span>


```pony
fun box ne(
  that: StatusRequestEntityTooLarge val)
: Bool val
```
#### Parameters

*   that: [StatusRequestEntityTooLarge](http-StatusRequestEntityTooLarge.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

