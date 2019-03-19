# None
<span class="source-link">[[Source]](src/builtin/none.md#L1)</span>
```pony
primitive val None is
  Stringable box
```

#### Implements

* [Stringable](builtin-Stringable.md) box

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/none.md#L1)</span>


```pony
new val create()
: None val^
```

#### Returns

* [None](builtin-None.md) val^

---

## Public Functions

### string
<span class="source-link">[[Source]](src/builtin/none.md#L2)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### eq
<span class="source-link">[[Source]](src/builtin/none.md#L2)</span>


```pony
fun box eq(
  that: None val)
: Bool val
```
#### Parameters

*   that: [None](builtin-None.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/none.md#L2)</span>


```pony
fun box ne(
  that: None val)
: Bool val
```
#### Parameters

*   that: [None](builtin-None.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

