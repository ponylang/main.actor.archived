# Assert
<span class="source-link">[[Source]](src/assert/assert.md#L9)</span>

This is a debug only assertion. If the test is false, it will print any
supplied error message to stderr and raise an error.


```pony
primitive val Assert
```

## Constructors

### create
<span class="source-link">[[Source]](src/assert/assert.md#L9)</span>


```pony
new val create()
: Assert val^
```

#### Returns

* [Assert](assert-Assert.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/assert/assert.md#L14)</span>


```pony
fun box apply(
  test: Bool val,
  msg: String val = seq)
: None val ?
```
#### Parameters

*   test: [Bool](builtin-Bool.md) val
*   msg: [String](builtin-String.md) val = seq

#### Returns

* [None](builtin-None.md) val ?

---

### eq
<span class="source-link">[[Source]](src/assert/assert.md#L14)</span>


```pony
fun box eq(
  that: Assert val)
: Bool val
```
#### Parameters

*   that: [Assert](assert-Assert.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/assert/assert.md#L14)</span>


```pony
fun box ne(
  that: Assert val)
: Bool val
```
#### Parameters

*   that: [Assert](assert-Assert.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

