# _Limit
<span class="source-link">[[Source]](src/msgpack/_limit.md#L19)</span>
```pony
primitive val _Limit
```

## Constructors

### create
<span class="source-link">[[Source]](src/msgpack/_limit.md#L19)</span>


```pony
new val create()
: _Limit val^
```

#### Returns

* [_Limit](msgpack-_Limit.md) val^

---

## Public Functions

### fixarray
<span class="source-link">[[Source]](src/msgpack/_limit.md#L20)</span>


```pony
fun box fixarray()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixmap
<span class="source-link">[[Source]](src/msgpack/_limit.md#L21)</span>


```pony
fun box fixmap()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### fixstr
<span class="source-link">[[Source]](src/msgpack/_limit.md#L22)</span>


```pony
fun box fixstr()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### positive_fixint
<span class="source-link">[[Source]](src/msgpack/_limit.md#L23)</span>


```pony
fun box positive_fixint()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### negative_fixint_low
<span class="source-link">[[Source]](src/msgpack/_limit.md#L24)</span>


```pony
fun box negative_fixint_low()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### negative_fixint_high
<span class="source-link">[[Source]](src/msgpack/_limit.md#L25)</span>


```pony
fun box negative_fixint_high()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### eq
<span class="source-link">[[Source]](src/msgpack/_limit.md#L20)</span>


```pony
fun box eq(
  that: _Limit val)
: Bool val
```
#### Parameters

*   that: [_Limit](msgpack-_Limit.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/msgpack/_limit.md#L20)</span>


```pony
fun box ne(
  that: _Limit val)
: Bool val
```
#### Parameters

*   that: [_Limit](msgpack-_Limit.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

