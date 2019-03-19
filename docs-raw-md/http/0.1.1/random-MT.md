# MT
<span class="source-link">[[Source]](src/random/mt.md#L1)</span>

A Mersenne Twister. This is a non-cryptographic random number generator. This
should only be used for legacy applications that require a Mersenne Twister,
otherwise use Rand.


```pony
class ref MT is
  Random ref
```

#### Implements

* [Random](random-Random.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/random/mt.md#L10)</span>


Create with the specified seed. Returned values are deterministic for a
given seed.


```pony
new ref create(
  x: U64 val = seq,
  y: U64 val = seq)
: MT ref^
```
#### Parameters

*   x: [U64](builtin-U64.md) val = seq
*   y: [U64](builtin-U64.md) val = seq

#### Returns

* [MT](random-MT.md) ref^

---

## Public Functions

### next
<span class="source-link">[[Source]](src/random/mt.md#L29)</span>


A random integer in [0, 2^64)


```pony
fun ref next()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### has_next
<span class="source-link">[[Source]](src/random/random.md#L34)</span>


```pony
fun tag has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### u8
<span class="source-link">[[Source]](src/random/random.md#L45)</span>


```pony
fun ref u8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16
<span class="source-link">[[Source]](src/random/random.md#L51)</span>


```pony
fun ref u16()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32
<span class="source-link">[[Source]](src/random/random.md#L57)</span>


```pony
fun ref u32()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64
<span class="source-link">[[Source]](src/random/random.md#L63)</span>


```pony
fun ref u64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u128
<span class="source-link">[[Source]](src/random/random.md#L69)</span>


```pony
fun ref u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ulong
<span class="source-link">[[Source]](src/random/random.md#L75)</span>


```pony
fun ref ulong()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize
<span class="source-link">[[Source]](src/random/random.md#L85)</span>


```pony
fun ref usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### i8
<span class="source-link">[[Source]](src/random/random.md#L95)</span>


```pony
fun ref i8()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16
<span class="source-link">[[Source]](src/random/random.md#L101)</span>


```pony
fun ref i16()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32
<span class="source-link">[[Source]](src/random/random.md#L107)</span>


```pony
fun ref i32()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64
<span class="source-link">[[Source]](src/random/random.md#L113)</span>


```pony
fun ref i64()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### i128
<span class="source-link">[[Source]](src/random/random.md#L119)</span>


```pony
fun ref i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### ilong
<span class="source-link">[[Source]](src/random/random.md#L125)</span>


```pony
fun ref ilong()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize
<span class="source-link">[[Source]](src/random/random.md#L131)</span>


```pony
fun ref isize()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### int\[optional N: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Real](builtin-Real.md)\[N\] val)\]
<span class="source-link">[[Source]](src/random/random.md#L137)</span>


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
<span class="source-link">[[Source]](src/random/random.md#L143)</span>


```pony
fun ref real()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### shuffle\[A: A\]
<span class="source-link">[[Source]](src/random/random.md#L149)</span>


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

### _populate
<span class="source-link">[[Source]](src/random/mt.md#L49)</span>


Repopulates the state array.


```pony
fun ref _populate()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _n
<span class="source-link">[[Source]](src/random/mt.md#L74)</span>


```pony
fun tag _n()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _m
<span class="source-link">[[Source]](src/random/mt.md#L75)</span>


```pony
fun tag _m()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _n1
<span class="source-link">[[Source]](src/random/mt.md#L76)</span>


```pony
fun tag _n1()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _mask
<span class="source-link">[[Source]](src/random/mt.md#L78)</span>


```pony
fun tag _mask(
  x: U64 val,
  y: U64 val)
: U64 val
```
#### Parameters

*   x: [U64](builtin-U64.md) val
*   y: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### _matrix
<span class="source-link">[[Source]](src/random/mt.md#L81)</span>


```pony
fun tag _matrix(
  x: U64 val)
: U64 val
```
#### Parameters

*   x: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### _mix
<span class="source-link">[[Source]](src/random/mt.md#L83)</span>


```pony
fun tag _mix(
  x: U64 val,
  y: U64 val)
: U64 val
```
#### Parameters

*   x: [U64](builtin-U64.md) val
*   y: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### _lower
<span class="source-link">[[Source]](src/random/mt.md#L87)</span>


```pony
fun ref _lower(
  i: USize val,
  x: U64 val)
: U64 val ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   x: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val ?

---

### _upper
<span class="source-link">[[Source]](src/random/mt.md#L92)</span>


```pony
fun ref _upper(
  i: USize val,
  x: U64 val)
: U64 val ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   x: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val ?

---

### _wrap
<span class="source-link">[[Source]](src/random/mt.md#L97)</span>


```pony
fun ref _wrap()
: U64 val ?
```

#### Returns

* [U64](builtin-U64.md) val ?

---

