# USize
<span class="source-link">[[Source]](src/builtin/unsigned.md#L431)</span>
```pony
primitive val USize is
  UnsignedInteger[USize val] val
```

#### Implements

* [UnsignedInteger](builtin-UnsignedInteger.md)\[[USize](builtin-USize.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/unsigned.md#L432)</span>


```pony
new val create(
  value: USize val)
: USize val^
```
#### Parameters

*   value: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val^

---

### from\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/unsigned.md#L433)</span>


```pony
new val from[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[A] val)](
  a: A)
: USize val^
```
#### Parameters

*   a: A

#### Returns

* [USize](builtin-USize.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L435)</span>


```pony
new val min_value()
: USize val^
```

#### Returns

* [USize](builtin-USize.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/unsigned.md#L437)</span>


```pony
new val max_value()
: USize val^
```

#### Returns

* [USize](builtin-USize.md) val^

---

## Public Functions

### next_pow2
<span class="source-link">[[Source]](src/builtin/unsigned.md#L444)</span>


```pony
fun box next_pow2()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### abs
<span class="source-link">[[Source]](src/builtin/unsigned.md#L448)</span>


```pony
fun box abs()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/unsigned.md#L450)</span>


```pony
fun box bit_reverse()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### bswap
<span class="source-link">[[Source]](src/builtin/unsigned.md#L457)</span>


```pony
fun box bswap()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### popcount
<span class="source-link">[[Source]](src/builtin/unsigned.md#L464)</span>


```pony
fun box popcount()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### clz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L471)</span>


```pony
fun box clz()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### ctz
<span class="source-link">[[Source]](src/builtin/unsigned.md#L478)</span>


```pony
fun box ctz()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### clz_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L485)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box clz_unsafe()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### ctz_unsafe
<span class="source-link">[[Source]](src/builtin/unsigned.md#L496)</span>


Unsafe operation.
If this is 0, the result is undefined.


```pony
fun box ctz_unsafe()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### bitwidth
<span class="source-link">[[Source]](src/builtin/unsigned.md#L507)</span>


```pony
fun box bitwidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### bytewidth
<span class="source-link">[[Source]](src/builtin/unsigned.md#L509)</span>


```pony
fun box bytewidth()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/unsigned.md#L511)</span>


```pony
fun box min(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/unsigned.md#L512)</span>


```pony
fun box max(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### addc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L514)</span>


```pony
fun box addc(
  y: USize val)
: (USize val , Bool val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L521)</span>


```pony
fun box subc(
  y: USize val)
: (USize val , Bool val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L528)</span>


```pony
fun box mulc(
  y: USize val)
: (USize val , Bool val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L535)</span>


```pony
fun box divc(
  y: USize val)
: (USize val , Bool val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/unsigned.md#L538)</span>


```pony
fun box remc(
  y: USize val)
: (USize val , Bool val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### add_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L541)</span>


```pony
fun box add_partial(
  y: USize val)
: USize val ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L544)</span>


```pony
fun box sub_partial(
  y: USize val)
: USize val ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L547)</span>


```pony
fun box mul_partial(
  y: USize val)
: USize val ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L550)</span>


```pony
fun box div_partial(
  y: USize val)
: USize val ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L553)</span>


```pony
fun box rem_partial(
  y: USize val)
: USize val ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/unsigned.md#L556)</span>


```pony
fun box divrem_partial(
  y: USize val)
: (USize val , USize val) ?
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [USize](builtin-USize.md) val) ?

---

### shl



```pony
fun box shl(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### shr



```pony
fun box shr(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### shl_unsafe



```pony
fun box shl_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### shr_unsafe



```pony
fun box shr_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### rotl



```pony
fun box rotl(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### rotr



```pony
fun box rotr(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

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
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### sub_unsafe



```pony
fun box sub_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### mul_unsafe



```pony
fun box mul_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### div_unsafe



```pony
fun box div_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### divrem_unsafe



```pony
fun box divrem_unsafe(
  y: USize val)
: (USize val , USize val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [USize](builtin-USize.md) val)

---

### rem_unsafe



```pony
fun box rem_unsafe(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### neg_unsafe



```pony
fun box neg_unsafe()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### op_and



```pony
fun box op_and(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### op_or



```pony
fun box op_or(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### op_xor



```pony
fun box op_xor(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### op_not



```pony
fun box op_not()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### add



```pony
fun box add(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### sub



```pony
fun box sub(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### mul



```pony
fun box mul(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### div



```pony
fun box div(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### divrem



```pony
fun box divrem(
  y: USize val)
: (USize val , USize val)
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* ([USize](builtin-USize.md) val , [USize](builtin-USize.md) val)

---

### rem



```pony
fun box rem(
  y: USize val)
: USize val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### neg



```pony
fun box neg()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### eq



```pony
fun box eq(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt



```pony
fun box lt(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le



```pony
fun box le(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge



```pony
fun box ge(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  y: USize val)
: Bool val
```
#### Parameters

*   y: [USize](builtin-USize.md) val

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
  that: USize val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [USize](builtin-USize.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value



```pony
fun box _value()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

