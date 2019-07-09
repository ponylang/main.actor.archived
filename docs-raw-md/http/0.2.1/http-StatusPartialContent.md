# StatusPartialContent
<span class="source-link">[[Source]](src/http/status.md#L30)</span>
```pony
primitive val StatusPartialContent is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L30)</span>


```pony
new val create()
: StatusPartialContent val^
```

#### Returns

* [StatusPartialContent](http-StatusPartialContent.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L31)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L32)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L31)</span>


```pony
fun box eq(
  that: StatusPartialContent val)
: Bool val
```
#### Parameters

*   that: [StatusPartialContent](http-StatusPartialContent.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L31)</span>


```pony
fun box ne(
  that: StatusPartialContent val)
: Bool val
```
#### Parameters

*   that: [StatusPartialContent](http-StatusPartialContent.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

