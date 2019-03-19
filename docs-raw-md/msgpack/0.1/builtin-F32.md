# F32
<span class="source-link">[[Source]](src/builtin/float.md#L1)</span>
```pony
primitive val F32 is
  FloatingPoint[F32 val] val
```

#### Implements

* [FloatingPoint](builtin-FloatingPoint.md)\[[F32](builtin-F32.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/float.md#L2)</span>


```pony
new val create(
  value: F32 val = seq)
: F32 val^
```
#### Parameters

*   value: [F32](builtin-F32.md) val = seq

#### Returns

* [F32](builtin-F32.md) val^

---

### pi
<span class="source-link">[[Source]](src/builtin/float.md#L3)</span>


```pony
new val pi()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### e
<span class="source-link">[[Source]](src/builtin/float.md#L4)</span>


```pony
new val e()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### _nan
<span class="source-link">[[Source]](src/builtin/float.md#L6)</span>


```pony
new val _nan()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### _inf
<span class="source-link">[[Source]](src/builtin/float.md#L7)</span>


```pony
new val _inf(
  negative: Bool val)
: F32 val^
```
#### Parameters

*   negative: [Bool](builtin-Bool.md) val

#### Returns

* [F32](builtin-F32.md) val^

---

### from_bits
<span class="source-link">[[Source]](src/builtin/float.md#L9)</span>


```pony
new val from_bits(
  i: U32 val)
: F32 val^
```
#### Parameters

*   i: [U32](builtin-U32.md) val

#### Returns

* [F32](builtin-F32.md) val^

---

### from\[B: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[B\] val)\]
<span class="source-link">[[Source]](src/builtin/float.md#L11)</span>


```pony
new val from[B: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[B] val)](
  a: B)
: F32 val^
```
#### Parameters

*   a: B

#### Returns

* [F32](builtin-F32.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/float.md#L13)</span>


Minimum negative value representable.


```pony
new val min_value()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/float.md#L19)</span>


Maximum positive value representable.


```pony
new val max_value()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### min_normalised
<span class="source-link">[[Source]](src/builtin/float.md#L25)</span>


Minimum positive value representable at full precision (ie a normalised
number).


```pony
new val min_normalised()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

### epsilon
<span class="source-link">[[Source]](src/builtin/float.md#L32)</span>


Minimum positive value such that (1 + epsilon) != 1.


```pony
new val epsilon()
: F32 val^
```

#### Returns

* [F32](builtin-F32.md) val^

---

## Public Functions

### bits
<span class="source-link">[[Source]](src/builtin/float.md#L10)</span>


```pony
fun box bits()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### radix
<span class="source-link">[[Source]](src/builtin/float.md#L38)</span>


Exponent radix.


```pony
fun tag radix()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### precision2
<span class="source-link">[[Source]](src/builtin/float.md#L44)</span>


Mantissa precision in bits.


```pony
fun tag precision2()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### precision10
<span class="source-link">[[Source]](src/builtin/float.md#L50)</span>


Mantissa precision in decimal digits.


```pony
fun tag precision10()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### min_exp2
<span class="source-link">[[Source]](src/builtin/float.md#L56)</span>


Minimum exponent value such that (2^exponent) - 1 is representable at full
precision (ie a normalised number).


```pony
fun tag min_exp2()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### min_exp10
<span class="source-link">[[Source]](src/builtin/float.md#L63)</span>


Minimum exponent value such that (10^exponent) - 1 is representable at full
precision (ie a normalised number).


```pony
fun tag min_exp10()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### max_exp2
<span class="source-link">[[Source]](src/builtin/float.md#L70)</span>


Maximum exponent value such that (2^exponent) - 1 is representable.


```pony
fun tag max_exp2()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### max_exp10
<span class="source-link">[[Source]](src/builtin/float.md#L76)</span>


Maximum exponent value such that (10^exponent) - 1 is representable.


```pony
fun tag max_exp10()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### abs
<span class="source-link">[[Source]](src/builtin/float.md#L82)</span>


```pony
fun box abs()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### ceil
<span class="source-link">[[Source]](src/builtin/float.md#L83)</span>


```pony
fun box ceil()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### floor
<span class="source-link">[[Source]](src/builtin/float.md#L84)</span>


```pony
fun box floor()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### round
<span class="source-link">[[Source]](src/builtin/float.md#L85)</span>


```pony
fun box round()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### trunc
<span class="source-link">[[Source]](src/builtin/float.md#L86)</span>


```pony
fun box trunc()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/float.md#L88)</span>


```pony
fun box min(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/float.md#L89)</span>


```pony
fun box max(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### finite
<span class="source-link">[[Source]](src/builtin/float.md#L91)</span>


Check whether this number is finite, ie not +/-infinity and not NaN.


```pony
fun box finite()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### infinite
<span class="source-link">[[Source]](src/builtin/float.md#L98)</span>


Check whether this number is +/-infinity


```pony
fun box infinite()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### nan
<span class="source-link">[[Source]](src/builtin/float.md#L106)</span>


Check whether this number is NaN.


```pony
fun box nan()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### ldexp
<span class="source-link">[[Source]](src/builtin/float.md#L114)</span>


```pony
fun box ldexp(
  x: F32 val,
  exponent: I32 val)
: F32 val
```
#### Parameters

*   x: [F32](builtin-F32.md) val
*   exponent: [I32](builtin-I32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### frexp
<span class="source-link">[[Source]](src/builtin/float.md#L117)</span>


```pony
fun box frexp()
: (F32 val , U32 val)
```

#### Returns

* ([F32](builtin-F32.md) val , [U32](builtin-U32.md) val)

---

### log
<span class="source-link">[[Source]](src/builtin/float.md#L122)</span>


```pony
fun box log()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### log2
<span class="source-link">[[Source]](src/builtin/float.md#L123)</span>


```pony
fun box log2()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### log10
<span class="source-link">[[Source]](src/builtin/float.md#L124)</span>


```pony
fun box log10()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### logb
<span class="source-link">[[Source]](src/builtin/float.md#L125)</span>


```pony
fun box logb()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### pow
<span class="source-link">[[Source]](src/builtin/float.md#L127)</span>


```pony
fun box pow(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### powi
<span class="source-link">[[Source]](src/builtin/float.md#L128)</span>


```pony
fun box powi(
  y: I32 val)
: F32 val
```
#### Parameters

*   y: [I32](builtin-I32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### sqrt
<span class="source-link">[[Source]](src/builtin/float.md#L135)</span>


```pony
fun box sqrt()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### sqrt_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L142)</span>


Unsafe operation.
If this is negative, the result is undefined.


```pony
fun box sqrt_unsafe()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### cbrt
<span class="source-link">[[Source]](src/builtin/float.md#L149)</span>


```pony
fun box cbrt()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### exp
<span class="source-link">[[Source]](src/builtin/float.md#L150)</span>


```pony
fun box exp()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### exp2
<span class="source-link">[[Source]](src/builtin/float.md#L151)</span>


```pony
fun box exp2()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### cos
<span class="source-link">[[Source]](src/builtin/float.md#L153)</span>


```pony
fun box cos()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### sin
<span class="source-link">[[Source]](src/builtin/float.md#L154)</span>


```pony
fun box sin()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### tan
<span class="source-link">[[Source]](src/builtin/float.md#L155)</span>


```pony
fun box tan()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### cosh
<span class="source-link">[[Source]](src/builtin/float.md#L157)</span>


```pony
fun box cosh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### sinh
<span class="source-link">[[Source]](src/builtin/float.md#L158)</span>


```pony
fun box sinh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### tanh
<span class="source-link">[[Source]](src/builtin/float.md#L159)</span>


```pony
fun box tanh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### acos
<span class="source-link">[[Source]](src/builtin/float.md#L161)</span>


```pony
fun box acos()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### asin
<span class="source-link">[[Source]](src/builtin/float.md#L162)</span>


```pony
fun box asin()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### atan
<span class="source-link">[[Source]](src/builtin/float.md#L163)</span>


```pony
fun box atan()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### atan2
<span class="source-link">[[Source]](src/builtin/float.md#L164)</span>


```pony
fun box atan2(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### acosh
<span class="source-link">[[Source]](src/builtin/float.md#L166)</span>


```pony
fun box acosh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### asinh
<span class="source-link">[[Source]](src/builtin/float.md#L167)</span>


```pony
fun box asinh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### atanh
<span class="source-link">[[Source]](src/builtin/float.md#L168)</span>


```pony
fun box atanh()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### copysign
<span class="source-link">[[Source]](src/builtin/float.md#L170)</span>


```pony
fun box copysign(
  sign: F32 val)
: F32 val
```
#### Parameters

*   sign: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/float.md#L172)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/float.md#L173)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### i128
<span class="source-link">[[Source]](src/builtin/float.md#L175)</span>


```pony
fun box i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### u128
<span class="source-link">[[Source]](src/builtin/float.md#L176)</span>


```pony
fun box u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### i128_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L178)</span>


Unsafe operation.
If the value doesn't fit in the destination type, the result is undefined.


```pony
fun box i128_unsafe()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### u128_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L185)</span>


Unsafe operation.
If the value doesn't fit in the destination type, the result is undefined.


```pony
fun box u128_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### add_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L442)</span>


```pony
fun box add_unsafe(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### sub_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L451)</span>


```pony
fun box sub_unsafe(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### mul_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L460)</span>


```pony
fun box mul_unsafe(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### div_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L469)</span>


```pony
fun box div_unsafe(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### divrem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L478)</span>


```pony
fun box divrem_unsafe(
  y: F32 val)
: (F32 val , F32 val)
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* ([F32](builtin-F32.md) val , [F32](builtin-F32.md) val)

---

### rem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L487)</span>


```pony
fun box rem_unsafe(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### neg_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L496)</span>


```pony
fun box neg_unsafe()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### eq_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L505)</span>


```pony
fun box eq_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L514)</span>


```pony
fun box ne_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L523)</span>


```pony
fun box lt_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L532)</span>


```pony
fun box le_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L541)</span>


```pony
fun box ge_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L550)</span>


```pony
fun box gt_unsafe(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/real.md#L610)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### add
<span class="source-link">[[Source]](src/builtin/real.md#L141)</span>


```pony
fun box add(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### sub
<span class="source-link">[[Source]](src/builtin/real.md#L142)</span>


```pony
fun box sub(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### mul
<span class="source-link">[[Source]](src/builtin/real.md#L143)</span>


```pony
fun box mul(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### div
<span class="source-link">[[Source]](src/builtin/real.md#L144)</span>


```pony
fun box div(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### divrem
<span class="source-link">[[Source]](src/builtin/real.md#L145)</span>


```pony
fun box divrem(
  y: F32 val)
: (F32 val , F32 val)
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* ([F32](builtin-F32.md) val , [F32](builtin-F32.md) val)

---

### rem
<span class="source-link">[[Source]](src/builtin/real.md#L146)</span>


```pony
fun box rem(
  y: F32 val)
: F32 val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [F32](builtin-F32.md) val

---

### neg
<span class="source-link">[[Source]](src/builtin/real.md#L147)</span>


```pony
fun box neg()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### eq
<span class="source-link">[[Source]](src/builtin/real.md#L149)</span>


```pony
fun box eq(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/real.md#L150)</span>


```pony
fun box ne(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/builtin/real.md#L151)</span>


```pony
fun box lt(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/real.md#L152)</span>


```pony
fun box le(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/builtin/real.md#L153)</span>


```pony
fun box ge(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/builtin/real.md#L154)</span>


```pony
fun box gt(
  y: F32 val)
: Bool val
```
#### Parameters

*   y: [F32](builtin-F32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### i8
<span class="source-link">[[Source]](src/builtin/real.md#L2)</span>


```pony
fun box i8()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16
<span class="source-link">[[Source]](src/builtin/real.md#L3)</span>


```pony
fun box i16()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32
<span class="source-link">[[Source]](src/builtin/real.md#L4)</span>


```pony
fun box i32()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64
<span class="source-link">[[Source]](src/builtin/real.md#L5)</span>


```pony
fun box i64()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### ilong
<span class="source-link">[[Source]](src/builtin/real.md#L7)</span>


```pony
fun box ilong()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize
<span class="source-link">[[Source]](src/builtin/real.md#L8)</span>


```pony
fun box isize()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### u8
<span class="source-link">[[Source]](src/builtin/real.md#L10)</span>


```pony
fun box u8()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16
<span class="source-link">[[Source]](src/builtin/real.md#L11)</span>


```pony
fun box u16()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32
<span class="source-link">[[Source]](src/builtin/real.md#L12)</span>


```pony
fun box u32()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64
<span class="source-link">[[Source]](src/builtin/real.md#L13)</span>


```pony
fun box u64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### ulong
<span class="source-link">[[Source]](src/builtin/real.md#L15)</span>


```pony
fun box ulong()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize
<span class="source-link">[[Source]](src/builtin/real.md#L16)</span>


```pony
fun box usize()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### f32
<span class="source-link">[[Source]](src/builtin/real.md#L18)</span>


```pony
fun box f32()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64
<span class="source-link">[[Source]](src/builtin/real.md#L19)</span>


```pony
fun box f64()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### i8_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L21)</span>


```pony
fun box i8_unsafe()
: I8 val
```

#### Returns

* [I8](builtin-I8.md) val

---

### i16_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L28)</span>


```pony
fun box i16_unsafe()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### i32_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L35)</span>


```pony
fun box i32_unsafe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### i64_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L42)</span>


```pony
fun box i64_unsafe()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### ilong_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L56)</span>


```pony
fun box ilong_unsafe()
: ILong val
```

#### Returns

* [ILong](builtin-ILong.md) val

---

### isize_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L63)</span>


```pony
fun box isize_unsafe()
: ISize val
```

#### Returns

* [ISize](builtin-ISize.md) val

---

### u8_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L70)</span>


```pony
fun box u8_unsafe()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### u16_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L77)</span>


```pony
fun box u16_unsafe()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### u32_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L84)</span>


```pony
fun box u32_unsafe()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### u64_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L91)</span>


```pony
fun box u64_unsafe()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### ulong_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L105)</span>


```pony
fun box ulong_unsafe()
: ULong val
```

#### Returns

* [ULong](builtin-ULong.md) val

---

### usize_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L112)</span>


```pony
fun box usize_unsafe()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### f32_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L119)</span>


```pony
fun box f32_unsafe()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

### f64_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L126)</span>


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
  that: F32 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [F32](builtin-F32.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value
<span class="source-link">[[Source]](src/builtin/real.md#L188)</span>


```pony
fun box _value()
: F32 val
```

#### Returns

* [F32](builtin-F32.md) val

---

