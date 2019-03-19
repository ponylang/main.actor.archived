# _Color
<span class="source-link">[[Source]](src/ponytest/_color.md#L1)</span>

Strings to embedded in text to specify colours. These are copies of the
strings defined in packages/term. They are duplicated here to avoid a
dependency.


```pony
primitive val _Color
```

## Constructors

### create
<span class="source-link">[[Source]](src/ponytest/_color.md#L1)</span>


```pony
new val create()
: _Color val^
```

#### Returns

* [_Color](ponytest-_Color.md) val^

---

## Public Functions

### reset
<span class="source-link">[[Source]](src/ponytest/_color.md#L7)</span>


Resets all colours and text styles to the default.


```pony
fun box reset()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### red
<span class="source-link">[[Source]](src/ponytest/_color.md#L13)</span>


Bright red text.


```pony
fun box red()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### green
<span class="source-link">[[Source]](src/ponytest/_color.md#L19)</span>


Bright green text.


```pony
fun box green()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/ponytest/_color.md#L7)</span>


```pony
fun box eq(
  that: _Color val)
: Bool val
```
#### Parameters

*   that: [_Color](ponytest-_Color.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/ponytest/_color.md#L7)</span>


```pony
fun box ne(
  that: _Color val)
: Bool val
```
#### Parameters

*   that: [_Color](ponytest-_Color.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

