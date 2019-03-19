# _ToString
<span class="source-link">[[Source]](src/builtin/_to_string.md#L1)</span>

Worker type providing simple to string conversions for numbers.


```pony
primitive val _ToString
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/_to_string.md#L1)</span>


```pony
new val create()
: _ToString val^
```

#### Returns

* [_ToString](builtin-_ToString.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/builtin/_to_string.md#L5)</span>


```pony
fun box eq(
  that: _ToString val)
: Bool val
```
#### Parameters

*   that: [_ToString](builtin-_ToString.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/_to_string.md#L5)</span>


```pony
fun box ne(
  that: _ToString val)
: Bool val
```
#### Parameters

*   that: [_ToString](builtin-_ToString.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _u64
<span class="source-link">[[Source]](src/builtin/_to_string.md#L5)</span>


```pony
fun box _u64(
  x: U64 val,
  neg: Bool val)
: String iso^
```
#### Parameters

*   x: [U64](builtin-U64.md) val
*   neg: [Bool](builtin-Bool.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### _u128
<span class="source-link">[[Source]](src/builtin/_to_string.md#L28)</span>


```pony
fun box _u128(
  x: U128 val,
  neg: Bool val)
: String iso^
```
#### Parameters

*   x: [U128](builtin-U128.md) val
*   neg: [Bool](builtin-Bool.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### _f64
<span class="source-link">[[Source]](src/builtin/_to_string.md#L51)</span>


```pony
fun box _f64(
  x: F64 val)
: String iso^
```
#### Parameters

*   x: [F64](builtin-F64.md) val

#### Returns

* [String](builtin-String.md) iso^

---

