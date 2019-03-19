# Fact
<span class="source-link">[[Source]](src/assert/assert.md#L19)</span>

This is an assertion that is always enabled. If the test is false, it will
print any supplied error message to stderr and raise an error.


```pony
primitive val Fact
```

## Constructors

### create
<span class="source-link">[[Source]](src/assert/assert.md#L19)</span>


```pony
new val create()
: Fact val^
```

#### Returns

* [Fact](assert-Fact.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/assert/assert.md#L24)</span>


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
<span class="source-link">[[Source]](src/assert/assert.md#L24)</span>


```pony
fun box eq(
  that: Fact val)
: Bool val
```
#### Parameters

*   that: [Fact](assert-Fact.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/assert/assert.md#L24)</span>


```pony
fun box ne(
  that: Fact val)
: Bool val
```
#### Parameters

*   that: [Fact](assert-Fact.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

