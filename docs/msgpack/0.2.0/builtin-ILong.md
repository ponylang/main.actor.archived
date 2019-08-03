# ILong
<span class="source-link">[[Source]](src/builtin/signed.md#L275)</span>
```pony
primitive val ILong is
  SignedInteger[ILong val, ULong val] val
```

#### Implements

* [SignedInteger](builtin-SignedInteger.md)\[[ILong](builtin-ILong.md) val, [ULong](builtin-ULong.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/signed.md#L276)</span>


```pony
new val create(
  value: ILong val)
: ILong val^
```
#### Parameters

*   value: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/signed.md#L277)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: ILong val^
```
#### Parameters

*   a: A

#### Returns

* [ILong](builtin-ILong.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/signed.md#L279)</span>


```pony
new val min_value()
: ILong val^
```

#### Returns

* [ILong](builtin-ILong.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/signed.md#L286)</span>


```pony
new val max_value()
: ILong val^
```

#### Returns

* [ILong](builtin-ILong.md) val^

---

## Public Functions

### abs
<span class="source-link">[[Source]](src/builtin/signed.md#L293)</span>


```pony
fun box abs()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/signed.md#L295)</span>


```pony
fun box bit_reverse()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/signed.md#L302)</span>


```pony
fun box bswap()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/signed.md#L309)</span>


```pony
fun box popcount()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/signed.md#L316)</span>


```pony
fun box clz()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/signed.md#L323)</span>


```pony
fun box ctz()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L330)</span>


```pony
fun box clz_unsafe()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### ctz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L337)</span>


```pony
fun box ctz_unsafe()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### bitwidth
<span class="source-link">[[Source]](src/builtin/signed.md#L344)</span>


```pony
fun box bitwidth()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/signed.md#L346)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/signed.md#L348)</span>


```pony
fun box min(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/signed.md#L349)</span>


```pony
fun box max(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/signed.md#L350)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### addc
<span class="source-link">[[Source]](src/builtin/signed.md#L352)</span>


```pony
fun box addc(
  y: ILong val)
: (ILong val , Bool val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/signed.md#L359)</span>


```pony
fun box subc(
  y: ILong val)
: (ILong val , Bool val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/signed.md#L366)</span>


```pony
fun box mulc(
  y: ILong val)
: (ILong val , Bool val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/signed.md#L373)</span>


```pony
fun box divc(
  y: ILong val)
: (ILong val , Bool val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/signed.md#L376)</span>


```pony
fun box remc(
  y: ILong val)
: (ILong val , Bool val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L379)</span>


```pony
fun box add_partial(
  y: ILong val)
: ILong val ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L382)</span>


```pony
fun box sub_partial(
  y: ILong val)
: ILong val ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L385)</span>


```pony
fun box mul_partial(
  y: ILong val)
: ILong val ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L388)</span>


```pony
fun box div_partial(
  y: ILong val)
: ILong val ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L391)</span>


```pony
fun box rem_partial(
  y: ILong val)
: ILong val ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L394)</span>


```pony
fun box divrem_partial(
  y: ILong val)
: (ILong val , ILong val) ?
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [ILong](builtin-ILong.md) val) ?

---

### shl



```pony
fun box shl(
  y: ULong val)
: ILong val
```
#### Parameters

*   y: [ULong](builtin-ULong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### shr



```pony
fun box shr(
  y: ULong val)
: ILong val
```
#### Parameters

*   y: [ULong](builtin-ULong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: ULong val)
: ILong val
```
#### Parameters

*   y: [ULong](builtin-ULong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: ULong val)
: ILong val
```
#### Parameters

*   y: [ULong](builtin-ULong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### string



```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### add_unsafe



```pony
fun box add_unsafe(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### mul_unsafe



```pony
fun box mul_unsafe(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### div_unsafe



```pony
fun box div_unsafe(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### divrem_unsafe



```pony
fun box divrem_unsafe(
  y: ILong val)
: (ILong val , ILong val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [ILong](builtin-ILong.md) val)

---

### rem_unsafe



```pony
fun box rem_unsafe(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### op_and



```pony
fun box op_and(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### op_or



```pony
fun box op_or(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### op_xor



```pony
fun box op_xor(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### op_not



```pony
fun box op_not()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### add



```pony
fun box add(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### sub



```pony
fun box sub(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### mul



```pony
fun box mul(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### div



```pony
fun box div(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### divrem



```pony
fun box divrem(
  y: ILong val)
: (ILong val , ILong val)
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* ([ILong](builtin-ILong.md) val , [ILong](builtin-ILong.md) val)

---

### rem



```pony
fun box rem(
  y: ILong val)
: ILong val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [ILong](builtin-ILong.md) val

---

### neg



```pony
fun box neg()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### eq



```pony
fun box eq(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: ILong val)
: Bool val
```
#### Parameters

*   y: [ILong](builtin-ILong.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### hash64



```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

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

### f32



```pony
fun box f32()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64



```pony
fun box f64()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

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

### f32_unsafe



```pony
fun box f32_unsafe()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64_unsafe



```pony
fun box f64_unsafe()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### compare



```pony
fun box compare(
  that: ILong val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [ILong](builtin-ILong.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

