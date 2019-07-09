# Equatable\[A: [Equatable](builtin-Equatable.md)\[A\] #read\]
<span class="source-link">[[Source]](src/builtin/compare.md#L18)</span>
```pony
interface ref Equatable[A: Equatable[A] #read]
```

## Public Functions

### eq
<span class="source-link">[[Source]](src/builtin/compare.md#L19)</span>


```pony
fun box eq(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/compare.md#L20)</span>


```pony
fun box ne(
  that: box->A)
: Bool val
```
#### Parameters

*   that: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

