# MaybePointer\[A: A\]
<span class="source-link">[[Source]](src/builtin/maybe_pointer.md#L1)</span>

A MaybePointer[A] is used to encode a possibly-null type. It should
_only_ be used for structs that need to be passed to and from the C FFI.

An optional type for anything that isn't a struct should be encoded as a
union type, for example (A | None).


```pony
struct ref MaybePointer[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/maybe_pointer.md#L9)</span>


This re-encodes the type of `that` from A to MaybePointer[A], allowing
`that` to be assigned to a field or variable of type MaybePointer[A]. It
doesn't allocate a wrapper object: there is no containing object for `that`.


```pony
new ref create(
  that: A)
: MaybePointer[A] ref^
```
#### Parameters

*   that: A

#### Returns

* [MaybePointer](builtin-MaybePointer.md)\[A\] ref^

---

### none
<span class="source-link">[[Source]](src/builtin/maybe_pointer.md#L17)</span>


This returns a null pointer typed as a MaybePointer[A].


```pony
new ref none()
: MaybePointer[A] ref^
```

#### Returns

* [MaybePointer](builtin-MaybePointer.md)\[A\] ref^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/builtin/maybe_pointer.md#L23)</span>


This re-encodes the type of `this` from MaybePointer[A] to A, allowing
`this` to be assigned to a field of variable of type A. If `this` is a null
pointer, an error is raised.


```pony
fun box apply()
: this->A ?
```

#### Returns

* this->A ?

---

### is_none
<span class="source-link">[[Source]](src/builtin/maybe_pointer.md#L31)</span>


Returns true if `this` is null (ie apply would raise an error).


```pony
fun box is_none()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

