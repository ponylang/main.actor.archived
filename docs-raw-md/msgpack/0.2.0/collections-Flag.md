# Flag\[A: (([U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[A\] val)\]
<span class="source-link">[[Source]](src/collections/flag.md#L1)</span>

A flag should be a primitive with a value method that returns the bits that
represent the flag. This allows a flag to encode a single bit, or any
combination of bits.


```pony
interface val Flag[A: ((U8 val | U16 val | U32 val | 
    U64 val | U128 val | ULong val | 
    USize val) & Integer[A] val)]
```

## Public Functions

### value
<span class="source-link">[[Source]](src/collections/flag.md#L7)</span>


```pony
fun box value()
: A
```

#### Returns

* A

---

