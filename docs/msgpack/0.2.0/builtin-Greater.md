# Greater
<span class="source-link">[[Source]](src/builtin/compare.md#L9)</span>
```pony
primitive val Greater is
  Equatable[(Less val | Equal val | Greater val)] ref
```

#### Implements

* [Equatable](builtin-Equatable.md)\[([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/compare.md#L9)</span>


```pony
new val create()
: Greater val^
```

#### Returns

* [Greater](builtin-Greater.md) val^

---

## Public Functions

### string
<span class="source-link">[[Source]](src/builtin/compare.md#L10)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### eq
<span class="source-link">[[Source]](src/builtin/compare.md#L19)</span>


```pony
fun box eq(
  that: (Less val | Equal val | Greater val))
: Bool val
```
#### Parameters

*   that: ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/compare.md#L20)</span>


```pony
fun box ne(
  that: (Less val | Equal val | Greater val))
: Bool val
```
#### Parameters

*   that: ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

