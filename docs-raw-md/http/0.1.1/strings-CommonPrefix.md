# CommonPrefix
<span class="source-link">[[Source]](src/strings/common_prefix.md#L1)</span>

Creates a string that is the common prefix of the supplied strings, possibly
empty.


```pony
primitive val CommonPrefix
```

## Constructors

### create
<span class="source-link">[[Source]](src/strings/common_prefix.md#L1)</span>


```pony
new val create()
: CommonPrefix val^
```

#### Returns

* [CommonPrefix](strings-CommonPrefix.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/strings/common_prefix.md#L7)</span>


```pony
fun box apply(
  data: ReadSeq[Stringable box] box)
: String iso^
```
#### Parameters

*   data: [ReadSeq](builtin-ReadSeq.md)\[[Stringable](builtin-Stringable.md) box\] box

#### Returns

* [String](builtin-String.md) iso^

---

### eq
<span class="source-link">[[Source]](src/strings/common_prefix.md#L7)</span>


```pony
fun box eq(
  that: CommonPrefix val)
: Bool val
```
#### Parameters

*   that: [CommonPrefix](strings-CommonPrefix.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/strings/common_prefix.md#L7)</span>


```pony
fun box ne(
  that: CommonPrefix val)
: Bool val
```
#### Parameters

*   that: [CommonPrefix](strings-CommonPrefix.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

