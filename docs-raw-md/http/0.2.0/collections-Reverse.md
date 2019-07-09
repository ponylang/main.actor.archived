# Reverse\[optional A: ([Real](builtin-Real.md)\[A\] val & ([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val))\]
<span class="source-link">[[Source]](src/collections/reverse.md#L1)</span>

Produces a decreasing range [max, min] with step `dec`, for any `Number` type.
(i.e. the reverse of `Range`)

Example program: 

```pony
use "collections"
actor Main
  new create(env: Env) =>
    for e in Reverse(10, 2, 2) do
      env.out.print(e.string())
    end 
```
Which outputs: 
```
10
8
6
4
2
```

If `dec` is 0, produces an infinite series of `max`.

If `dec` is negative, produces a range with `max` as the only value.



```pony
class ref Reverse[optional A: (Real[A] val & (I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val))] is
  Iterator[A] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[A\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/collections/reverse.md#L36)</span>


```pony
new ref create(
  max: A,
  min: A,
  dec: A = 1)
: Reverse[A] ref^
```
#### Parameters

*   max: A
*   min: A
*   dec: A = 1

#### Returns

* [Reverse](collections-Reverse.md)\[A\] ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/collections/reverse.md#L42)</span>


```pony
fun box has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/collections/reverse.md#L45)</span>


```pony
fun ref next()
: A
```

#### Returns

* A

---

### rewind
<span class="source-link">[[Source]](src/collections/reverse.md#L52)</span>


```pony
fun ref rewind()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

