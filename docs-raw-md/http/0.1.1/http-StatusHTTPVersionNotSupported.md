# StatusHTTPVersionNotSupported
<span class="source-link">[[Source]](src/http/status.md#L141)</span>
```pony
primitive val StatusHTTPVersionNotSupported is
  Status val
```

#### Implements

* [Status](http-Status.md) val

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/status.md#L141)</span>


```pony
new val create()
: StatusHTTPVersionNotSupported val^
```

#### Returns

* [StatusHTTPVersionNotSupported](http-StatusHTTPVersionNotSupported.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/status.md#L142)</span>


```pony
fun box apply()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### string
<span class="source-link">[[Source]](src/http/status.md#L143)</span>


```pony
fun box string()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/http/status.md#L142)</span>


```pony
fun box eq(
  that: StatusHTTPVersionNotSupported val)
: Bool val
```
#### Parameters

*   that: [StatusHTTPVersionNotSupported](http-StatusHTTPVersionNotSupported.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/status.md#L142)</span>


```pony
fun box ne(
  that: StatusHTTPVersionNotSupported val)
: Bool val
```
#### Parameters

*   that: [StatusHTTPVersionNotSupported](http-StatusHTTPVersionNotSupported.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

