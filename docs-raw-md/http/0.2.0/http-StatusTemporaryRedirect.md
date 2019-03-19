# StatusTemporaryRedirect
<span class="source-link">[[Source]](src/http/status.md#L52)</span>
```pony
primitive val StatusTemporaryRedirect is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L52)</span>


```pony
new val create()
: StatusTemporaryRedirect val^
```

#### Returns

* [StatusTemporaryRedirect](http-StatusTemporaryRedirect.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L53)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L54)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L53)</span>


```pony
fun box eq(
  that: StatusTemporaryRedirect val)
: Bool val
```
#### Parameters

*   that: [StatusTemporaryRedirect](http-StatusTemporaryRedirect.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L53)</span>


```pony
fun box ne(
  that: StatusTemporaryRedirect val)
: Bool val
```
#### Parameters

*   that: [StatusTemporaryRedirect](http-StatusTemporaryRedirect.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

