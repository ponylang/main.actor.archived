# _UTF32Encoder
<span class="source-link">[[Source]](src/builtin/string.md#L1672)</span>
```pony
primitive val _UTF32Encoder
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/string.md#L1672)</span>


```pony
new val create()
: _UTF32Encoder val^
```

#### Returns

* [_UTF32Encoder](builtin-_UTF32Encoder.md) val^

---

## Public Functions

### encode
<span class="source-link">[[Source]](src/builtin/string.md#L1673)</span>


Encode the code point into UTF-8. It returns a tuple with the size of the
encoded data and then the data.


```pony
fun box encode(
  value: U32 val)
: (USize val , U8 val , U8 val , 
    U8 val , U8 val)
```
#### Parameters

*   value: [U32](builtin-U32.md) val

#### Returns

* ([USize](builtin-USize.md) val , [U8](builtin-U8.md) val , [U8](builtin-U8.md) val , 
    [U8](builtin-U8.md) val , [U8](builtin-U8.md) val)

---

### eq
<span class="source-link">[[Source]](src/builtin/string.md#L1673)</span>


```pony
fun box eq(
  that: _UTF32Encoder val)
: Bool val
```
#### Parameters

*   that: [_UTF32Encoder](builtin-_UTF32Encoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/string.md#L1673)</span>


```pony
fun box ne(
  that: _UTF32Encoder val)
: Bool val
```
#### Parameters

*   that: [_UTF32Encoder](builtin-_UTF32Encoder.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

