# I8
<span class="source-link">[[Source]](src/builtin/signed.md#L1)</span>
```pony
primitive val I8 is
  SignedInteger[I8 val, U8 val] val
```

#### Implements

* [SignedInteger](builtin-SignedInteger.md)\[[I8](builtin-I8.md) val, [U8](builtin-U8.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/signed.md#L2)</span>


```pony
new val create(
  value: I8 val)
: I8 val^
```
#### Parameters

*   value: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/signed.md#L3)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: I8 val^
```
#### Parameters

*   a: A

#### Returns

* [I8](builtin-I8.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/signed.md#L5)</span>


```pony
new val min_value()
: I8 val^
```

#### Returns

* [I8](builtin-I8.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/signed.md#L6)</span>


```pony
new val max_value()
: I8 val^
```

#### Returns

* [I8](builtin-I8.md) val^

---

## Public Functions

### abs
<span class="source-link">[[Source]](src/builtin/signed.md#L8)</span>


```pony
fun box abs()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/signed.md#L9)</span>


```pony
fun box bit_reverse()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/signed.md#L10)</span>


```pony
fun box bswap()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/signed.md#L11)</span>


```pony
fun box popcount()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/signed.md#L12)</span>


```pony
fun box clz()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/signed.md#L13)</span>


```pony
fun box ctz()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L15)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box clz_unsafe()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### ctz_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L22)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box ctz_unsafe()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bitwidth
<span class="source-link">[[Source]](src/builtin/signed.md#L29)</span>


```pony
fun box bitwidth()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/signed.md#L31)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/signed.md#L33)</span>


```pony
fun box min(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/signed.md#L34)</span>


```pony
fun box max(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### fld
<span class="source-link">[[Source]](src/builtin/signed.md#L36)</span>


```pony
fun box fld(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### fld_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L39)</span>


```pony
fun box fld_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### mod
<span class="source-link">[[Source]](src/builtin/signed.md#L42)</span>


```pony
fun box mod(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### mod_unsafe
<span class="source-link">[[Source]](src/builtin/signed.md#L45)</span>


```pony
fun box mod_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### addc
<span class="source-link">[[Source]](src/builtin/signed.md#L48)</span>


```pony
fun box addc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/signed.md#L51)</span>


```pony
fun box subc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/signed.md#L54)</span>


```pony
fun box mulc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/signed.md#L57)</span>


```pony
fun box divc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/signed.md#L60)</span>


```pony
fun box remc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### fldc
<span class="source-link">[[Source]](src/builtin/signed.md#L63)</span>


```pony
fun box fldc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### modc
<span class="source-link">[[Source]](src/builtin/signed.md#L66)</span>


```pony
fun box modc(
  y: I8 val)
: (I8 val , Bool val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L69)</span>


```pony
fun box add_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L72)</span>


```pony
fun box sub_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L75)</span>


```pony
fun box mul_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L78)</span>


```pony
fun box div_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L81)</span>


```pony
fun box rem_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L84)</span>


```pony
fun box divrem_partial(
  y: I8 val)
: (I8 val , I8 val) ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [I8](builtin-I8.md) val) ?

---

### fld_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L87)</span>


```pony
fun box fld_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### mod_partial
<span class="source-link">[[Source]](src/builtin/signed.md#L90)</span>


```pony
fun box mod_partial(
  y: I8 val)
: I8 val ?
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val ?

---

### shl



```pony
fun box shl(
  y: U8 val)
: I8 val
```
#### Parameters

*   y: [U8](builtin-U8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### shr



```pony
fun box shr(
  y: U8 val)
: I8 val
```
#### Parameters

*   y: [U8](builtin-U8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: U8 val)
: I8 val
```
#### Parameters

*   y: [U8](builtin-U8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: U8 val)
: I8 val
```
#### Parameters

*   y: [U8](builtin-U8.md) val

#### Returns

* [I8](builtin-I8.md) val

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
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### mul_unsafe



```pony
fun box mul_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### div_unsafe



```pony
fun box div_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### divrem_unsafe



```pony
fun box divrem_unsafe(
  y: I8 val)
: (I8 val , I8 val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [I8](builtin-I8.md) val)

---

### rem_unsafe



```pony
fun box rem_unsafe(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### op_and



```pony
fun box op_and(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### op_or



```pony
fun box op_or(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### op_xor



```pony
fun box op_xor(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### op_not



```pony
fun box op_not()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### add



```pony
fun box add(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### sub



```pony
fun box sub(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### mul



```pony
fun box mul(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### div



```pony
fun box div(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### divrem



```pony
fun box divrem(
  y: I8 val)
: (I8 val , I8 val)
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* ([I8](builtin-I8.md) val , [I8](builtin-I8.md) val)

---

### rem



```pony
fun box rem(
  y: I8 val)
: I8 val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [I8](builtin-I8.md) val

---

### neg



```pony
fun box neg()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### eq



```pony
fun box eq(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: I8 val)
: Bool val
```
#### Parameters

*   y: [I8](builtin-I8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### hash



```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

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
  that: I8 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [I8](builtin-I8.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

