# Random
<span class="source-link">[[Source]](src/random/random.md#L21)</span>

The `Random` trait should be implemented by all random number generators. The
only method you need to implement is `fun ref next(): 64`. Once that method
has been implemented, the `Random` trait provides default implementations of
conversions to other number types.


```pony
trait ref Random
```

## Constructors

### create
<span class="source-link">[[Source]](src/random/random.md#L28)</span>


Create with the specified seed. Returned values are deterministic for a
given seed.


```pony
new ref create(
  x: U64 val = 5489,
  y: U64 val = 0)
: Random ref^
```
#### Parameters

*   x: [U64](builtin-U64.md) val = 5489
*   y: [U64](builtin-U64.md) val = 0

#### Returns

* [Random](random-Random.md) ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/random/random.md#L34)</span>


If used as an iterator, this always has another value.


```pony
fun tag has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/random/random.md#L40)</span>


A random integer in [0, 2^64)


```pony
fun ref next()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u8
<span class="source-link">[[Source]](src/random/random.md#L45)</span>


A random integer in [0, 2^8)


```pony
fun ref u8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16
<span class="source-link">[[Source]](src/random/random.md#L51)</span>


A random integer in [0, 2^16)


```pony
fun ref u16()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32
<span class="source-link">[[Source]](src/random/random.md#L57)</span>


A random integer in [0, 2^32)


```pony
fun ref u32()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64
<span class="source-link">[[Source]](src/random/random.md#L63)</span>


A random integer in [0, 2^64)


```pony
fun ref u64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u128
<span class="source-link">[[Source]](src/random/random.md#L69)</span>


A random integer in [0, 2^128)


```pony
fun ref u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ulong
<span class="source-link">[[Source]](src/random/random.md#L75)</span>


A random integer in [0, ULong.max_value()]


```pony
fun ref ulong()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize
<span class="source-link">[[Source]](src/random/random.md#L85)</span>


A random integer in [0, USize.max_value()]


```pony
fun ref usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### i8
<span class="source-link">[[Source]](src/random/random.md#L95)</span>


A random integer in [-2^7, 2^7)


```pony
fun ref i8()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16
<span class="source-link">[[Source]](src/random/random.md#L101)</span>


A random integer in [-2^15, 2^15)


```pony
fun ref i16()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32
<span class="source-link">[[Source]](src/random/random.md#L107)</span>


A random integer in [-2^31, 2^31)


```pony
fun ref i32()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64
<span class="source-link">[[Source]](src/random/random.md#L113)</span>


A random integer in [-2^63, 2^63)


```pony
fun ref i64()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### i128
<span class="source-link">[[Source]](src/random/random.md#L119)</span>


A random integer in [-2^127, 2^127)


```pony
fun ref i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### ilong
<span class="source-link">[[Source]](src/random/random.md#L125)</span>


A random integer in [ILong.min_value(), ILong.max_value()]


```pony
fun ref ilong()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize
<span class="source-link">[[Source]](src/random/random.md#L131)</span>


A random integer in [ISize.min_value(), ISize.max_value()]


```pony
fun ref isize()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### int_fp_mult\[optional N: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Real](builtin-Real.md)\[N\] val)\]
<span class="source-link">[[Source]](src/random/random.md#L137)</span>


A random integer in [0, n)


```pony
fun ref int_fp_mult[optional N: ((U8 val | U16 val | U32 val | 
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

### int\[optional N: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Real](builtin-Real.md)\[N\] val)\]
<span class="source-link">[[Source]](src/random/random.md#L143)</span>


A random integer in [0, n)

Uses fixed-point inversion if platform supports native 128 bit operations
otherwise uses floating-point multiplication.


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

### int_unbiased\[optional N: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Real](builtin-Real.md)\[N\] val)\]
<span class="source-link">[[Source]](src/random/random.md#L159)</span>


A random integer in [0, n)

Not biased with small values of `n` like `int`.


```pony
fun ref int_unbiased[optional N: ((U8 val | U16 val | U32 val | 
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
<span class="source-link">[[Source]](src/random/random.md#L195)</span>


A random number in [0, 1)


```pony
fun ref real()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### shuffle\[A: A\]
<span class="source-link">[[Source]](src/random/random.md#L201)</span>


Shuffle the elements of the array into a random order, mutating the array.


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

## Private Functions

### _u64_unbiased
<span class="source-link">[[Source]](src/random/random.md#L167)</span>


Generates a U64 in the range `[0, n)`
while avoiding bias.

See:
- https://arxiv.org/abs/1805.10941
- http://www.pcg-random.org/posts/bounded-rands.html


```pony
fun ref _u64_unbiased(
  range: U64 val)
: U64 val
```
#### Parameters

*   range: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

