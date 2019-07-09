# F64
<span class="source-link">[[Source]](src/builtin/float.md#L218)</span>
```pony
primitive val F64 is
  FloatingPoint[F64 val] val
```

#### Implements

* [FloatingPoint](builtin-FloatingPoint.md)\[[F64](builtin-F64.md) val\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/float.md#L219)</span>


```pony
new val create(
  value: F64 val = 0)
: F64 val^
```
#### Parameters

*   value: [F64](builtin-F64.md) val = 0

#### Returns

* [F64](builtin-F64.md) val^

---

### pi
<span class="source-link">[[Source]](src/builtin/float.md#L220)</span>


```pony
new val pi()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### e
<span class="source-link">[[Source]](src/builtin/float.md#L221)</span>


```pony
new val e()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### _nan
<span class="source-link">[[Source]](src/builtin/float.md#L223)</span>


```pony
new val _nan()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### _inf
<span class="source-link">[[Source]](src/builtin/float.md#L224)</span>


```pony
new val _inf(
  negative: Bool val)
: F64 val^
```
#### Parameters

*   negative: [Bool](builtin-Bool.md) val

#### Returns

* [F64](builtin-F64.md) val^

---

### from_bits
<span class="source-link">[[Source]](src/builtin/float.md#L226)</span>


```pony
new val from_bits(
  i: U64 val)
: F64 val^
```
#### Parameters

*   i: [U64](builtin-U64.md) val

#### Returns

* [F64](builtin-F64.md) val^

---

### from\[B: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[B\] val)\]
<span class="source-link">[[Source]](src/builtin/float.md#L228)</span>


```pony
new val from[B: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[B] val)](
  a: B)
: F64 val^
```
#### Parameters

*   a: B

#### Returns

* [F64](builtin-F64.md) val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/float.md#L230)</span>


Minimum negative value representable.


```pony
new val min_value()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/float.md#L236)</span>


Maximum positive value representable.


```pony
new val max_value()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### min_normalised
<span class="source-link">[[Source]](src/builtin/float.md#L242)</span>


Minimum positive value representable at full precision (ie a normalised
number).


```pony
new val min_normalised()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

### epsilon
<span class="source-link">[[Source]](src/builtin/float.md#L249)</span>


Minimum positive value such that (1 + epsilon) != 1.


```pony
new val epsilon()
: F64 val^
```

#### Returns

* [F64](builtin-F64.md) val^

---

## Public Functions

### bits
<span class="source-link">[[Source]](src/builtin/float.md#L227)</span>


```pony
fun box bits()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### radix
<span class="source-link">[[Source]](src/builtin/float.md#L255)</span>


Exponent radix.


```pony
fun tag radix()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### precision2
<span class="source-link">[[Source]](src/builtin/float.md#L261)</span>


Mantissa precision in bits.


```pony
fun tag precision2()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### precision10
<span class="source-link">[[Source]](src/builtin/float.md#L267)</span>


Mantissa precision in decimal digits.


```pony
fun tag precision10()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### min_exp2
<span class="source-link">[[Source]](src/builtin/float.md#L273)</span>


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
<span class="source-link">[[Source]](src/builtin/float.md#L280)</span>


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
<span class="source-link">[[Source]](src/builtin/float.md#L287)</span>


Maximum exponent value such that (2^exponent) - 1 is representable.


```pony
fun tag max_exp2()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### max_exp10
<span class="source-link">[[Source]](src/builtin/float.md#L293)</span>


Maximum exponent value such that (10^exponent) - 1 is representable.


```pony
fun tag max_exp10()
: I16 val
```

#### Returns

* [I16](builtin-I16.md) val

---

### abs
<span class="source-link">[[Source]](src/builtin/float.md#L299)</span>


```pony
fun box abs()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### ceil
<span class="source-link">[[Source]](src/builtin/float.md#L300)</span>


```pony
fun box ceil()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### floor
<span class="source-link">[[Source]](src/builtin/float.md#L301)</span>


```pony
fun box floor()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### round
<span class="source-link">[[Source]](src/builtin/float.md#L302)</span>


```pony
fun box round()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### trunc
<span class="source-link">[[Source]](src/builtin/float.md#L303)</span>


```pony
fun box trunc()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/float.md#L305)</span>


```pony
fun box min(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### max
<span class="source-link">[[Source]](src/builtin/float.md#L306)</span>


```pony
fun box max(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### fld
<span class="source-link">[[Source]](src/builtin/float.md#L308)</span>


```pony
fun box fld(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### fld_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L311)</span>


```pony
fun box fld_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### mod
<span class="source-link">[[Source]](src/builtin/float.md#L314)</span>


```pony
fun box mod(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### mod_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L324)</span>


```pony
fun box mod_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### finite
<span class="source-link">[[Source]](src/builtin/float.md#L334)</span>


Check whether this number is finite, ie not +/-infinity and not NaN.


```pony
fun box finite()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### infinite
<span class="source-link">[[Source]](src/builtin/float.md#L341)</span>


Check whether this number is +/-infinity


```pony
fun box infinite()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### nan
<span class="source-link">[[Source]](src/builtin/float.md#L349)</span>


Check whether this number is NaN.


```pony
fun box nan()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### ldexp
<span class="source-link">[[Source]](src/builtin/float.md#L357)</span>


```pony
fun box ldexp(
  x: F64 val,
  exponent: I32 val)
: F64 val
```
#### Parameters

*   x: [F64](builtin-F64.md) val
*   exponent: [I32](builtin-I32.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### frexp
<span class="source-link">[[Source]](src/builtin/float.md#L360)</span>


```pony
fun box frexp()
: (F64 val , U32 val)
```

#### Returns

* ([F64](builtin-F64.md) val , [U32](builtin-U32.md) val)

---

### log
<span class="source-link">[[Source]](src/builtin/float.md#L365)</span>


```pony
fun box log()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### log2
<span class="source-link">[[Source]](src/builtin/float.md#L366)</span>


```pony
fun box log2()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### log10
<span class="source-link">[[Source]](src/builtin/float.md#L367)</span>


```pony
fun box log10()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### logb
<span class="source-link">[[Source]](src/builtin/float.md#L368)</span>


```pony
fun box logb()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### pow
<span class="source-link">[[Source]](src/builtin/float.md#L370)</span>


```pony
fun box pow(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### powi
<span class="source-link">[[Source]](src/builtin/float.md#L371)</span>


```pony
fun box powi(
  y: I32 val)
: F64 val
```
#### Parameters

*   y: [I32](builtin-I32.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### sqrt
<span class="source-link">[[Source]](src/builtin/float.md#L378)</span>


```pony
fun box sqrt()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### sqrt_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L385)</span>


Unsafe operation.
If this is negative, the result is undefined.


```pony
fun box sqrt_unsafe()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### cbrt
<span class="source-link">[[Source]](src/builtin/float.md#L392)</span>


```pony
fun box cbrt()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### exp
<span class="source-link">[[Source]](src/builtin/float.md#L393)</span>


```pony
fun box exp()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### exp2
<span class="source-link">[[Source]](src/builtin/float.md#L394)</span>


```pony
fun box exp2()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### cos
<span class="source-link">[[Source]](src/builtin/float.md#L396)</span>


```pony
fun box cos()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### sin
<span class="source-link">[[Source]](src/builtin/float.md#L397)</span>


```pony
fun box sin()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### tan
<span class="source-link">[[Source]](src/builtin/float.md#L398)</span>


```pony
fun box tan()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### cosh
<span class="source-link">[[Source]](src/builtin/float.md#L400)</span>


```pony
fun box cosh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### sinh
<span class="source-link">[[Source]](src/builtin/float.md#L401)</span>


```pony
fun box sinh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### tanh
<span class="source-link">[[Source]](src/builtin/float.md#L402)</span>


```pony
fun box tanh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### acos
<span class="source-link">[[Source]](src/builtin/float.md#L404)</span>


```pony
fun box acos()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### asin
<span class="source-link">[[Source]](src/builtin/float.md#L405)</span>


```pony
fun box asin()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### atan
<span class="source-link">[[Source]](src/builtin/float.md#L406)</span>


```pony
fun box atan()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### atan2
<span class="source-link">[[Source]](src/builtin/float.md#L407)</span>


```pony
fun box atan2(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### acosh
<span class="source-link">[[Source]](src/builtin/float.md#L409)</span>


```pony
fun box acosh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### asinh
<span class="source-link">[[Source]](src/builtin/float.md#L410)</span>


```pony
fun box asinh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### atanh
<span class="source-link">[[Source]](src/builtin/float.md#L411)</span>


```pony
fun box atanh()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### copysign
<span class="source-link">[[Source]](src/builtin/float.md#L413)</span>


```pony
fun box copysign(
  sign: F64 val)
: F64 val
```
#### Parameters

*   sign: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### hash
<span class="source-link">[[Source]](src/builtin/float.md#L415)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/float.md#L416)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### i128
<span class="source-link">[[Source]](src/builtin/float.md#L418)</span>


```pony
fun box i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

---

### u128
<span class="source-link">[[Source]](src/builtin/float.md#L445)</span>


```pony
fun box u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

---

### i128_unsafe
<span class="source-link">[[Source]](src/builtin/float.md#L471)</span>


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
<span class="source-link">[[Source]](src/builtin/float.md#L478)</span>


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
<span class="source-link">[[Source]](src/builtin/real.md#L527)</span>


```pony
fun box add_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### sub_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L536)</span>


```pony
fun box sub_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### mul_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L545)</span>


```pony
fun box mul_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### div_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L554)</span>


```pony
fun box div_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### divrem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L571)</span>


```pony
fun box divrem_unsafe(
  y: F64 val)
: (F64 val , F64 val)
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* ([F64](builtin-F64.md) val , [F64](builtin-F64.md) val)

---

### rem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L580)</span>


```pony
fun box rem_unsafe(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### neg_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L597)</span>


```pony
fun box neg_unsafe()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### eq_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L606)</span>


```pony
fun box eq_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L615)</span>


```pony
fun box ne_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L624)</span>


```pony
fun box lt_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L633)</span>


```pony
fun box le_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L642)</span>


```pony
fun box ge_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L651)</span>


```pony
fun box gt_unsafe(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/real.md#L711)</span>


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
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### sub
<span class="source-link">[[Source]](src/builtin/real.md#L142)</span>


```pony
fun box sub(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### mul
<span class="source-link">[[Source]](src/builtin/real.md#L143)</span>


```pony
fun box mul(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### div
<span class="source-link">[[Source]](src/builtin/real.md#L144)</span>


```pony
fun box div(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### divrem
<span class="source-link">[[Source]](src/builtin/real.md#L150)</span>


```pony
fun box divrem(
  y: F64 val)
: (F64 val , F64 val)
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* ([F64](builtin-F64.md) val , [F64](builtin-F64.md) val)

---

### rem
<span class="source-link">[[Source]](src/builtin/real.md#L151)</span>


```pony
fun box rem(
  y: F64 val)
: F64 val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [F64](builtin-F64.md) val

---

### neg
<span class="source-link">[[Source]](src/builtin/real.md#L159)</span>


```pony
fun box neg()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

### eq
<span class="source-link">[[Source]](src/builtin/real.md#L172)</span>


```pony
fun box eq(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/real.md#L173)</span>


```pony
fun box ne(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/builtin/real.md#L174)</span>


```pony
fun box lt(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/real.md#L175)</span>


```pony
fun box le(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/builtin/real.md#L176)</span>


```pony
fun box ge(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/builtin/real.md#L177)</span>


```pony
fun box gt(
  y: F64 val)
: Bool val
```
#### Parameters

*   y: [F64](builtin-F64.md) val

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
  that: F64 val)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [F64](builtin-F64.md) val

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value
<span class="source-link">[[Source]](src/builtin/real.md#L211)</span>


```pony
fun box _value()
: F64 val
```

#### Returns

* [F64](builtin-F64.md) val

---

