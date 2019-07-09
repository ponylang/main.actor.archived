# Integer\[A: [Integer](builtin-Integer.md)\[A\] val\]
<span class="source-link">[[Source]](src/builtin/real.md#L213)</span>
```pony
trait val Integer[A: Integer[A] val] is
  Real[A] val
```

#### Implements

* [Real](builtin-Real.md)\[A\] val

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/real.md#L135)</span>


```pony
new val create(
  value: A)
: Real[A] val^
```
#### Parameters

*   value: A

#### Returns

* [Real](builtin-Real.md)\[A\] val^

---

### from\[B: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val | [F32](builtin-F32.md) val | [F64](builtin-F64.md) val) & [Real](builtin-Real.md)\[B\] val)\]
<span class="source-link">[[Source]](src/builtin/real.md#L137)</span>


```pony
new val from[B: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val | F32 val | 
    F64 val) & Real[B] val)](
  a: B)
: Real[A] val^
```
#### Parameters

*   a: B

#### Returns

* [Real](builtin-Real.md)\[A\] val^

---

### min_value
<span class="source-link">[[Source]](src/builtin/real.md#L138)</span>


```pony
new val min_value()
: Real[A] val^
```

#### Returns

* [Real](builtin-Real.md)\[A\] val^

---

### max_value
<span class="source-link">[[Source]](src/builtin/real.md#L139)</span>


```pony
new val max_value()
: Real[A] val^
```

#### Returns

* [Real](builtin-Real.md)\[A\] val^

---

## Public Functions

### add_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L214)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box add_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### sub_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L221)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box sub_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### mul_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L228)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box mul_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### div_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L235)</span>


Integer division, rounded towards zero.

Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box div_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### divrem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L245)</span>


Calculates the quotient of this number and `y` and the remainder.

Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box divrem_unsafe(
  y: A)
: (A , A)
```
#### Parameters

*   y: A

#### Returns

* (A , A)

---

### rem_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L255)</span>


Calculates the remainder of this number divided by `y`.

Unsafe operation.
If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box rem_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### fld_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L265)</span>


Floored division, rounded towards negative infinity,
as opposed to `div` which rounds towards zero.

*Unsafe Operation*

If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box fld_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### mod_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L276)</span>


Calculates the modulo of this number after floored division by `y`.

*Unsafe Operation.*

If y is 0, the result is undefined.
If the operation overflows, the result is undefined.


```pony
fun box mod_unsafe(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### add_partial
<span class="source-link">[[Source]](src/builtin/real.md#L286)</span>


Add y to this number.

If the operation overflows this function errors.


```pony
fun box add_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### sub_partial
<span class="source-link">[[Source]](src/builtin/real.md#L293)</span>


Subtract y from this number.

If the operation overflows/underflows this function errors.


```pony
fun box sub_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### mul_partial
<span class="source-link">[[Source]](src/builtin/real.md#L300)</span>


Multiply y with this number.

If the operation overflows this function errors.


```pony
fun box mul_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### div_partial
<span class="source-link">[[Source]](src/builtin/real.md#L307)</span>


Divides this number by `y`, rounds the result towards zero.

If y is `0` or the operation overflows, this function errors.


```pony
fun box div_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### rem_partial
<span class="source-link">[[Source]](src/builtin/real.md#L314)</span>


Calculates the remainder of this number divided by y.
The result has the sign of the dividend.

If y is `0` or the operation overflows, this function errors.


```pony
fun box rem_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### divrem_partial
<span class="source-link">[[Source]](src/builtin/real.md#L322)</span>


Divides this number by y and calculates the remainder of the operation.

If y is `0` or the operation overflows, this function errors.


```pony
fun box divrem_partial(
  y: A)
: (A , A) ?
```
#### Parameters

*   y: A

#### Returns

* (A , A) ?

---

### fld_partial
<span class="source-link">[[Source]](src/builtin/real.md#L329)</span>


Floored integer division, rounded towards negative infinity.

If y is `0` or the operation overflows, this function errors


```pony
fun box fld_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### mod_partial
<span class="source-link">[[Source]](src/builtin/real.md#L336)</span>


Calculates the modulo of this number and `y` after floored division (`fld`).
The result has the sign of the divisor.

If y is `0` or the operation overflows, this function errors.


```pony
fun box mod_partial(
  y: A)
: A ?
```
#### Parameters

*   y: A

#### Returns

* A ?

---

### neg_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L344)</span>


Unsafe operation.
If the operation overflows, the result is undefined.


```pony
fun box neg_unsafe()
: A
```

#### Returns

* A

---

### addc
<span class="source-link">[[Source]](src/builtin/real.md#L351)</span>


Add `y` to this integer and return the result and a flag indicating overflow.


```pony
fun box addc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### subc
<span class="source-link">[[Source]](src/builtin/real.md#L355)</span>


Subtract `y` from this integer and return the result and a flag indicating overflow.


```pony
fun box subc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### mulc
<span class="source-link">[[Source]](src/builtin/real.md#L359)</span>


Multiply `y` with this integer and return the result and a flag indicating overflow.


```pony
fun box mulc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### divc
<span class="source-link">[[Source]](src/builtin/real.md#L363)</span>


Divide this integer by `y` and return the result and a flag indicating overflow or division by zero.


```pony
fun box divc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### remc
<span class="source-link">[[Source]](src/builtin/real.md#L367)</span>


Calculate the remainder of this number divided by `y` and return the result and a flag indicating division by zero or overflow.

The result will have the sign of the dividend.


```pony
fun box remc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### fldc
<span class="source-link">[[Source]](src/builtin/real.md#L373)</span>


Divide this integer by `y` and return the result, rounded towards negative infinity and a flag indicating overflow or division by zero.


```pony
fun box fldc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### modc
<span class="source-link">[[Source]](src/builtin/real.md#L377)</span>


Calculate the modulo of this number after floored division by `y` and return the result and a flag indicating division by zero or overflow.

The result will have the sign of the divisor.


```pony
fun box modc(
  y: A)
: (A , Bool val)
```
#### Parameters

*   y: A

#### Returns

* (A , [Bool](builtin-Bool.md) val)

---

### op_and
<span class="source-link">[[Source]](src/builtin/real.md#L384)</span>


```pony
fun box op_and(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### op_or
<span class="source-link">[[Source]](src/builtin/real.md#L385)</span>


```pony
fun box op_or(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### op_xor
<span class="source-link">[[Source]](src/builtin/real.md#L386)</span>


```pony
fun box op_xor(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### op_not
<span class="source-link">[[Source]](src/builtin/real.md#L387)</span>


```pony
fun box op_not()
: A
```

#### Returns

* A

---

### bit_reverse
<span class="source-link">[[Source]](src/builtin/real.md#L389)</span>


Reverse the order of the bits within the integer.
For example, 0b11101101 (237) would return 0b10110111 (183).


```pony
fun box bit_reverse()
: A
```

#### Returns

* A

---

### bswap
<span class="source-link">[[Source]](src/builtin/real.md#L395)</span>


```pony
fun box bswap()
: A
```

#### Returns

* A

---

### add
<span class="source-link">[[Source]](src/builtin/real.md#L141)</span>


```pony
fun box add(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### sub
<span class="source-link">[[Source]](src/builtin/real.md#L142)</span>


```pony
fun box sub(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### mul
<span class="source-link">[[Source]](src/builtin/real.md#L143)</span>


```pony
fun box mul(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### div
<span class="source-link">[[Source]](src/builtin/real.md#L144)</span>


```pony
fun box div(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### divrem
<span class="source-link">[[Source]](src/builtin/real.md#L150)</span>


```pony
fun box divrem(
  y: A)
: (A , A)
```
#### Parameters

*   y: A

#### Returns

* (A , A)

---

### rem
<span class="source-link">[[Source]](src/builtin/real.md#L151)</span>


```pony
fun box rem(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### neg
<span class="source-link">[[Source]](src/builtin/real.md#L159)</span>


```pony
fun box neg()
: A
```

#### Returns

* A

---

### fld
<span class="source-link">[[Source]](src/builtin/real.md#L161)</span>


```pony
fun box fld(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### mod
<span class="source-link">[[Source]](src/builtin/real.md#L165)</span>


```pony
fun box mod(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### eq
<span class="source-link">[[Source]](src/builtin/real.md#L172)</span>


```pony
fun box eq(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/real.md#L173)</span>


```pony
fun box ne(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/builtin/real.md#L174)</span>


```pony
fun box lt(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/real.md#L175)</span>


```pony
fun box le(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### ge
<span class="source-link">[[Source]](src/builtin/real.md#L176)</span>


```pony
fun box ge(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt
<span class="source-link">[[Source]](src/builtin/real.md#L177)</span>


```pony
fun box gt(
  y: box->A)
: Bool val
```
#### Parameters

*   y: box->A

#### Returns

* [Bool](builtin-Bool.md) val

---

### min
<span class="source-link">[[Source]](src/builtin/real.md#L179)</span>


```pony
fun box min(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### max
<span class="source-link">[[Source]](src/builtin/real.md#L180)</span>


```pony
fun box max(
  y: A)
: A
```
#### Parameters

*   y: A

#### Returns

* A

---

### hash
<span class="source-link">[[Source]](src/builtin/real.md#L182)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/real.md#L198)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/stringable.md#L5)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

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

### i128
<span class="source-link">[[Source]](src/builtin/real.md#L6)</span>


```pony
fun box i128()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

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

### u128
<span class="source-link">[[Source]](src/builtin/real.md#L14)</span>


```pony
fun box u128()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

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

### i128_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L49)</span>


```pony
fun box i128_unsafe()
: I128 val
```

#### Returns

* [I128](builtin-I128.md) val

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

### u128_unsafe
<span class="source-link">[[Source]](src/builtin/real.md#L98)</span>


```pony
fun box u128_unsafe()
: U128 val
```

#### Returns

* [U128](builtin-U128.md) val

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
  that: box->A)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: box->A

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

## Private Functions

### _value
<span class="source-link">[[Source]](src/builtin/real.md#L211)</span>


```pony
fun box _value()
: A
```

#### Returns

* A

---

