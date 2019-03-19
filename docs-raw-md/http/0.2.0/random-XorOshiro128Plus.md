# XorOshiro128Plus
<span class="source-link">[[Source]](src/random/xoroshiro.md#L1)</span>

This is an implementation of xoroshiro128+, as detailed at:

http://xoroshiro.di.unimi.it

This is currently the default Rand implementation.


```pony
class ref XorOshiro128Plus is
  Random ref
```

#### Implements

* [Random](random-Random.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/random/xoroshiro.md#L12)</span>


Create with the specified seed. Returned values are deterministic for a
given seed.


```pony
new ref create(
  x: U64 val = seq,
  y: U64 val = seq)
: XorOshiro128Plus ref^
```
#### Parameters

*   x: [U64](builtin-U64.md) val = seq
*   y: [U64](builtin-U64.md) val = seq

#### Returns

* [XorOshiro128Plus](random-XorOshiro128Plus.md) ref^

---

## Public Functions

### next
<span class="source-link">[[Source]](src/random/xoroshiro.md#L21)</span>


A random integer in [0, 2^64)


```pony
fun ref next()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### has_next



```pony
fun tag has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### u8



```pony
fun ref u8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16



```pony
fun ref u16()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32



```pony
fun ref u32()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64



```pony
fun ref u64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u128



```pony
fun ref u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ulong



```pony
fun ref ulong()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize



```pony
fun ref usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### i8



```pony
fun ref i8()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16



```pony
fun ref i16()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32



```pony
fun ref i32()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64



```pony
fun ref i64()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### i128



```pony
fun ref i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### ilong



```pony
fun ref ilong()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize



```pony
fun ref isize()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### int\[optional N: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Real](builtin-Real.md)\[N\] val)\]



```pony
fun ref int[optional N: ((U8 val | U16 val | U32 val | 
    U64 val | U128 val | ULong val | 
    USize val) & Real[N] val)](
  n: N)
: N
```
#### Parameters

*   n: N

#### Returns

* N

---

### real



```pony
fun ref real()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### shuffle\[A: A\]



```pony
fun ref shuffle[A: A](
  array: Array[A] ref)
: None val
```
#### Parameters

*   array: [Array](builtin-Array.md)\[A\] ref

#### Returns

* [None](builtin-None.md) val

---

