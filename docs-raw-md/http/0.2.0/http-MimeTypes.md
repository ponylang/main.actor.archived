# MimeTypes
<span class="source-link">[[Source]](src/http/mimetypes.md#L1)</span>

Provide mapping from file names to MIME types.
TODO load from /etc/mime.types


```pony
primitive val MimeTypes
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/mimetypes.md#L1)</span>


```pony
new val create()
: MimeTypes val^
```

#### Returns

* [MimeTypes](http-MimeTypes.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/http/mimetypes.md#L7)</span>


Mapping is based on the file type, following the last period in the name.


```pony
fun box apply(
  name: String val)
: String val^
```
#### Parameters

*   name: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val^

---

### eq
<span class="source-link">[[Source]](src/http/mimetypes.md#L7)</span>


```pony
fun box eq(
  that: MimeTypes val)
: Bool val
```
#### Parameters

*   that: [MimeTypes](http-MimeTypes.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/mimetypes.md#L7)</span>


```pony
fun box ne(
  that: MimeTypes val)
: Bool val
```
#### Parameters

*   that: [MimeTypes](http-MimeTypes.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

