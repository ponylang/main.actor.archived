# U128
<span class="source-link">[[Source]](src/builtin/unsigned.md#L559)</span>
```pony
primitive val U128 is
  UnsignedInteger[U128 val] val
```

#### Implements

* [UnsignedInteger](builtin-UnsignedInteger.md)\[[U128](builtin-U128.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/unsigned.md#L560)</span>


```pony
new val create(
  value: U128 val)
: U128 val^
```
#### Parameters

*   value: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/unsigned.md#L561)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: U128 val^
```
#### Parameters

*   a: A

#### Returns

* [U128](builtin-U128.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L563)</span>


```pony
new val min_value()
: U128 val^
```

#### Returns

* [U128](builtin-U128.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L564)</span>


```pony
new val max_value()
: U128 val^
```

#### Returns

* [U128](builtin-U128.md) val^

---

## Public Functions

### next_pow2
<span class="source-link">[[Source]](src/builtin/unsigned.md#L566)</span>


```pony
fun box next_pow2()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### abs
<span class="source-link">[[Source]](src/builtin/unsigned.md#L570)</span>


```pony
fun box abs()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/unsigned.md#L571)</span>


```pony
fun box bit_reverse()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/unsigned.md#L572)</span>


```pony
fun box bswap()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/unsigned.md#L573)</span>


```pony
fun box popcount()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L574)</span>


```pony
fun box clz()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L575)</span>


```pony
fun box ctz()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L577)</span>


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
<span class="source-link">[[Source]](src/builtin/unsigned.md#L584)</span>


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
<span class="source-link">[[Source]](src/builtin/unsigned.md#L591)</span>


```pony
fun box bitwidth()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/unsigned.md#L593)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/unsigned.md#L595)</span>


```pony
fun box min(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/unsigned.md#L596)</span>


```pony
fun box max(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/unsigned.md#L598)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/unsigned.md#L608)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/unsigned.md#L611)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### mul
<span class="source-link">[[Source]](src/builtin/unsigned.md#L614)</span>


```pony
fun box mul(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### divrem
<span class="source-link">[[Source]](src/builtin/unsigned.md#L643)</span>


```pony
fun box divrem(
  y: U128 val)
: (U128 val , U128 val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [U128](builtin-U128.md) val)

---

### div
<span class="source-link">[[Source]](src/builtin/unsigned.md#L673)</span>


```pony
fun box div(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### rem
<span class="source-link">[[Source]](src/builtin/unsigned.md#L681)</span>


```pony
fun box rem(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### mul_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L689)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box mul_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### divrem_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L700)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box divrem_unsafe(
  y: U128 val)
: (U128 val , U128 val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [U128](builtin-U128.md) val)

---

### div_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L712)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box div_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### rem_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L724)</span>


Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box rem_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### f32
<span class="source-link">[[Source]](src/builtin/unsigned.md#L736)</span>


```pony
fun box f32()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64
<span class="source-link">[[Source]](src/builtin/unsigned.md#L744)</span>


```pony
fun box f64()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### f32_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L778)</span>


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
<span class="source-link">[[Source]](src/builtin/unsigned.md#L785)</span>


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
<span class="source-link">[[Source]](src/builtin/unsigned.md#L792)</span>


```pony
fun box addc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L800)</span>


```pony
fun box subc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L808)</span>


```pony
fun box mulc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L817)</span>


```pony
fun box divc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L820)</span>


```pony
fun box remc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L823)</span>


```pony
fun box add_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L826)</span>


```pony
fun box sub_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L829)</span>


```pony
fun box mul_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L832)</span>


```pony
fun box div_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L835)</span>


```pony
fun box rem_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L838)</span>


```pony
fun box divrem_partial(
  y: U128 val)
: (U128 val , U128 val) ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [U128](builtin-U128.md) val) ?

---

### shl



```pony
fun box shl(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### shr



```pony
fun box shr(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### fld



```pony
fun box fld(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### fldc



```pony
fun box fldc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### fld_partial



```pony
fun box fld_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### fld_unsafe



```pony
fun box fld_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### mod



```pony
fun box mod(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### modc



```pony
fun box modc(
  y: U128 val)
: (U128 val , Bool val)
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* ([U128](builtin-U128.md) val , [Bool](builtin-Bool.md) val)

---

### mod_partial



```pony
fun box mod_partial(
  y: U128 val)
: U128 val ?
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val ?

---

### mod_unsafe



```pony
fun box mod_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### rotl



```pony
fun box rotl(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### rotr



```pony
fun box rotr(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### add_unsafe



```pony
fun box add_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### op_and



```pony
fun box op_and(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### op_or



```pony
fun box op_or(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### op_xor



```pony
fun box op_xor(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### op_not



```pony
fun box op_not()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### add



```pony
fun box add(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### sub



```pony
fun box sub(
  y: U128 val)
: U128 val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [U128](builtin-U128.md) val

---

### neg



```pony
fun box neg()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### eq



```pony
fun box eq(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: U128 val)
: Bool val
```
#### Parameters

*   y: [U128](builtin-U128.md) val

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
  that: U128 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [U128](builtin-U128.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

