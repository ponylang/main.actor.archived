# U32
<span class="source-link">[[Source]](src/builtin/unsigned.md#L145)</span>
```pony
primitive val U32 is
  UnsignedInteger[U32 val] val
```

#### Implements

* [UnsignedInteger](builtin-UnsignedInteger.md)\[[U32](builtin-U32.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/unsigned.md#L146)</span>


```pony
new val create(
  value: U32 val)
: U32 val^
```
#### Parameters

*   value: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/unsigned.md#L147)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: U32 val^
```
#### Parameters

*   a: A

#### Returns

* [U32](builtin-U32.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L149)</span>


```pony
new val min_value()
: U32 val^
```

#### Returns

* [U32](builtin-U32.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L150)</span>


```pony
new val max_value()
: U32 val^
```

#### Returns

* [U32](builtin-U32.md) val^

---

## Public Functions

### next_pow2
<span class="source-link">[[Source]](src/builtin/unsigned.md#L152)</span>


```pony
fun box next_pow2()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### abs
<span class="source-link">[[Source]](src/builtin/unsigned.md#L156)</span>


```pony
fun box abs()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/unsigned.md#L157)</span>


```pony
fun box bit_reverse()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/unsigned.md#L158)</span>


```pony
fun box bswap()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/unsigned.md#L159)</span>


```pony
fun box popcount()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L160)</span>


```pony
fun box clz()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L161)</span>


```pony
fun box ctz()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L163)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box clz_unsafe()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### ctz_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L170)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box ctz_unsafe()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### bitwidth
<span class="source-link">[[Source]](src/builtin/unsigned.md#L177)</span>


```pony
fun box bitwidth()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/unsigned.md#L179)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/unsigned.md#L181)</span>


```pony
fun box min(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/unsigned.md#L182)</span>


```pony
fun box max(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### addc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L184)</span>


```pony
fun box addc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L187)</span>


```pony
fun box subc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L190)</span>


```pony
fun box mulc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L193)</span>


```pony
fun box divc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L196)</span>


```pony
fun box remc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L199)</span>


```pony
fun box add_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L202)</span>


```pony
fun box sub_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L205)</span>


```pony
fun box mul_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L208)</span>


```pony
fun box div_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L211)</span>


```pony
fun box rem_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L214)</span>


```pony
fun box divrem_partial(
  y: U32 val)
: (U32 val , U32 val) ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val) ?

---

### shl



```pony
fun box shl(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### shr



```pony
fun box shr(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### fld



```pony
fun box fld(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### fldc



```pony
fun box fldc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### fld_partial



```pony
fun box fld_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### fld_unsafe



```pony
fun box fld_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### mod



```pony
fun box mod(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### modc



```pony
fun box modc(
  y: U32 val)
: (U32 val , Bool val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [Bool](builtin-Bool.md) val)

---

### mod_partial



```pony
fun box mod_partial(
  y: U32 val)
: U32 val ?
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val ?

---

### mod_unsafe



```pony
fun box mod_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### rotl



```pony
fun box rotl(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### rotr



```pony
fun box rotr(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

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
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### mul_unsafe



```pony
fun box mul_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### div_unsafe



```pony
fun box div_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### divrem_unsafe



```pony
fun box divrem_unsafe(
  y: U32 val)
: (U32 val , U32 val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### rem_unsafe



```pony
fun box rem_unsafe(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### op_and



```pony
fun box op_and(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### op_or



```pony
fun box op_or(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### op_xor



```pony
fun box op_xor(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### op_not



```pony
fun box op_not()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### add



```pony
fun box add(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### sub



```pony
fun box sub(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### mul



```pony
fun box mul(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### div



```pony
fun box div(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### divrem



```pony
fun box divrem(
  y: U32 val)
: (U32 val , U32 val)
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val)

---

### rem



```pony
fun box rem(
  y: U32 val)
: U32 val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [U32](builtin-U32.md) val

---

### neg



```pony
fun box neg()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### eq



```pony
fun box eq(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: U32 val)
: Bool val
```
#### Parameters

*   y: [U32](builtin-U32.md) val

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
  that: U32 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [U32](builtin-U32.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

