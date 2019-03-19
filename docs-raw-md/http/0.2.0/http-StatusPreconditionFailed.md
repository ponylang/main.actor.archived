# StatusPreconditionFailed
<span class="source-link">[[Source]](src/http/status.md#L92)</span>
```pony
primitive val StatusPreconditionFailed is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L92)</span>


```pony
new val create()
: StatusPreconditionFailed val^
```

#### Returns

* [StatusPreconditionFailed](http-StatusPreconditionFailed.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L93)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L94)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L93)</span>


```pony
fun box eq(
  that: StatusPreconditionFailed val)
: Bool val
```
#### Parameters

*   that: [StatusPreconditionFailed](http-StatusPreconditionFailed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L93)</span>


```pony
fun box ne(
  that: StatusPreconditionFailed val)
: Bool val
```
#### Parameters

*   that: [StatusPreconditionFailed](http-StatusPreconditionFailed.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

