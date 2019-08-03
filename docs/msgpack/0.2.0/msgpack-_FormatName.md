# _FormatName
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L19)</span>
```pony
primitive val _FormatName
```

## Constructors

### create
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L19)</span>


```pony
new val create()
: _FormatName val^
```

#### Returns

* [_FormatName](msgpack-_FormatName.md) val^

---

## Public Functions

### positive_fixint
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L20)</span>


```pony
fun box positive_fixint()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixmap
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L21)</span>


```pony
fun box fixmap()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixarray
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L22)</span>


```pony
fun box fixarray()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixstr
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L23)</span>


```pony
fun box fixstr()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### nil
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L24)</span>


```pony
fun box nil()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### falsey
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L25)</span>


```pony
fun box falsey()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### truthy
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L26)</span>


```pony
fun box truthy()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bin_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L27)</span>


```pony
fun box bin_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bin_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L28)</span>


```pony
fun box bin_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bin_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L29)</span>


```pony
fun box bin_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### ext_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L30)</span>


```pony
fun box ext_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### ext_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L31)</span>


```pony
fun box ext_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### ext_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L32)</span>


```pony
fun box ext_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### float_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L33)</span>


```pony
fun box float_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### float_64
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L34)</span>


```pony
fun box float_64()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### uint_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L35)</span>


```pony
fun box uint_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### uint_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L36)</span>


```pony
fun box uint_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### uint_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L37)</span>


```pony
fun box uint_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### uint_64
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L38)</span>


```pony
fun box uint_64()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### int_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L39)</span>


```pony
fun box int_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### int_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L40)</span>


```pony
fun box int_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### int_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L41)</span>


```pony
fun box int_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### int_64
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L42)</span>


```pony
fun box int_64()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixext_1
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L43)</span>


```pony
fun box fixext_1()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixext_2
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L44)</span>


```pony
fun box fixext_2()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixext_4
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L45)</span>


```pony
fun box fixext_4()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixext_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L46)</span>


```pony
fun box fixext_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixext_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L47)</span>


```pony
fun box fixext_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### str_8
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L48)</span>


```pony
fun box str_8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### str_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L49)</span>


```pony
fun box str_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### str_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L50)</span>


```pony
fun box str_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### array_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L51)</span>


```pony
fun box array_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### array_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L52)</span>


```pony
fun box array_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### map_16
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L53)</span>


```pony
fun box map_16()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### map_32
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L54)</span>


```pony
fun box map_32()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### negative_fixint
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L55)</span>


```pony
fun box negative_fixint()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### eq
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L20)</span>


```pony
fun box eq(
  that: _FormatName val)
: Bool val
```
#### Parameters

*   that: [_FormatName](msgpack-_FormatName.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/msgpack/_format_name.md#L20)</span>


```pony
fun box ne(
  that: _FormatName val)
: Bool val
```
#### Parameters

*   that: [_FormatName](msgpack-_FormatName.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

