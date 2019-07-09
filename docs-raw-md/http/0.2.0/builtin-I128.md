# I128
<span class="source-link">[[Source]](src/builtin/signed.md#L664)</span>
```pony
primitive val I128 is
  SignedInteger[I128 val, U128 val] val
```

#### Implements

* [SignedInteger](builtin-SignedInteger.md)\[[I128](builtin-I128.md) val, [U128](builtin-U128.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/signed.md#L665)</span>


```pony
new val create(
  value: I128 val)
: I128 val^
```
#### Parameters

*   value: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/signed.md#L666)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: I128 val^
```
#### Parameters

*   a: A

#### Returns

* [I128](builtin-I128.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/signed.md#L668)</span>


```pony
new val min_value()
: I128 val^
```

#### Returns

* [I128](builtin-I128.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/signed.md#L669)</span>


```pony
new val max_value()
: I128 val^
```

#### Returns

* [I128](builtin-I128.md) val^

---

## Public Functions

### abs
<span class="source-link">[[Source]](src/builtin/signed.md#L671)</span>


```pony
fun box abs()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/signed.md#L672)</span>


```pony
fun box bit_reverse()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/signed.md#L673)</span>


```pony
fun box bswap()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/signed.md#L674)</span>


```pony
fun box popcount()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/signed.md#L675)</span>


```pony
fun box clz()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/signed.md#L676)</span>


```pony
fun box ctz()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L678)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box clz_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ctz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L685)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box ctz_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bitwidth
<span class="source-link">[[Source]](src/builtin/signed.md#L692)</span>


```pony
fun box bitwidth()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/signed.md#L694)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/signed.md#L696)</span>


```pony
fun box min(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/signed.md#L697)</span>


```pony
fun box max(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### fld
<span class="source-link">[[Source]](src/builtin/signed.md#L699)</span>


```pony
fun box fld(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### fld_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L701)</span>


```pony
fun box fld_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### mod
<span class="source-link">[[Source]](src/builtin/signed.md#L704)</span>


```pony
fun box mod(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### mod_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L707)</span>


```pony
fun box mod_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/signed.md#L710)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/signed.md#L711)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/signed.md#L713)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### mul
<span class="source-link">[[Source]](src/builtin/signed.md#L716)</span>


```pony
fun box mul(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### divrem
<span class="source-link">[[Source]](src/builtin/signed.md#L719)</span>


```pony
fun box divrem(
  y: I128 val)
: (I128 val , I128 val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [I128](builtin-I128.md) val)

---

### div
<span class="source-link">[[Source]](src/builtin/signed.md#L746)</span>


```pony
fun box div(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### rem
<span class="source-link">[[Source]](src/builtin/signed.md#L754)</span>


```pony
fun box rem(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### mul_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L762)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box mul_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### divrem_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L773)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box divrem_unsafe(
  y: I128 val)
: (I128 val , I128 val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [I128](builtin-I128.md) val)

---

### div_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L785)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box div_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### rem_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L797)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box rem_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### f32
<span class="source-link">[[Source]](src/builtin/signed.md#L809)</span>


```pony
fun box f32()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64
<span class="source-link">[[Source]](src/builtin/signed.md#L812)</span>


```pony
fun box f64()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### f32_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L819)</span>


Unsafe operation.
If the value doesn't fit in the destination type, the result is undefined.


```pony
fun box f32_unsafe()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L826)</span>


Unsafe operation.
If the value doesn't fit in the destination type, the result is undefined.


```pony
fun box f64_unsafe()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### addc
<span class="source-link">[[Source]](src/builtin/signed.md#L833)</span>


```pony
fun box addc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/signed.md#L847)</span>


```pony
fun box subc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/signed.md#L861)</span>


```pony
fun box mulc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/signed.md#L869)</span>


```pony
fun box divc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/signed.md#L872)</span>


```pony
fun box remc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### fldc
<span class="source-link">[[Source]](src/builtin/signed.md#L875)</span>


```pony
fun box fldc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### modc
<span class="source-link">[[Source]](src/builtin/signed.md#L878)</span>


```pony
fun box modc(
  y: I128 val)
: (I128 val , Bool val)
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L881)</span>


```pony
fun box add_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L884)</span>


```pony
fun box sub_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L887)</span>


```pony
fun box mul_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L890)</span>


```pony
fun box div_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L893)</span>


```pony
fun box rem_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L896)</span>


```pony
fun box divrem_partial(
  y: I128 val)
: (I128 val , I128 val) ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* ([I128](builtin-I128.md) val , [I128](builtin-I128.md) val) ?

---

### fld_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L899)</span>


```pony
fun box fld_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### mod_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L902)</span>


```pony
fun box mod_partial(
  y: I128 val)
: I128 val ?
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val ?

---

### shl



```pony
fun box shl(
  y: U128 val)
: I128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### shr



```pony
fun box shr(
  y: U128 val)
: I128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: U128 val)
: I128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: U128 val)
: I128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### add_unsafe



```pony
fun box add_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### op_and



```pony
fun box op_and(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### op_or



```pony
fun box op_or(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### op_xor



```pony
fun box op_xor(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### op_not



```pony
fun box op_not()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### add



```pony
fun box add(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### sub



```pony
fun box sub(
  y: I128 val)
: I128 val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [I128](builtin-I128.md) val

---

### neg



```pony
fun box neg()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### eq



```pony
fun box eq(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: I128 val)
: Bool val
```
#### Parameters

*   y: [I128](builtin-I128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### i8



```pony
fun box i8()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16



```pony
fun box i16()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32



```pony
fun box i32()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64



```pony
fun box i64()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### i128



```pony
fun box i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### ilong



```pony
fun box ilong()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize



```pony
fun box isize()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### u8



```pony
fun box u8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16



```pony
fun box u16()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32



```pony
fun box u32()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64



```pony
fun box u64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u128



```pony
fun box u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ulong



```pony
fun box ulong()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize



```pony
fun box usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### i8_unsafe



```pony
fun box i8_unsafe()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16_unsafe



```pony
fun box i16_unsafe()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32_unsafe



```pony
fun box i32_unsafe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64_unsafe



```pony
fun box i64_unsafe()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### i128_unsafe



```pony
fun box i128_unsafe()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### ilong_unsafe



```pony
fun box ilong_unsafe()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize_unsafe



```pony
fun box isize_unsafe()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### u8_unsafe



```pony
fun box u8_unsafe()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16_unsafe



```pony
fun box u16_unsafe()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32_unsafe



```pony
fun box u32_unsafe()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64_unsafe



```pony
fun box u64_unsafe()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### u128_unsafe



```pony
fun box u128_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ulong_unsafe



```pony
fun box ulong_unsafe()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize_unsafe



```pony
fun box usize_unsafe()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### compare



```pony
fun box compare(
  that: I128 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [I128](builtin-I128.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

