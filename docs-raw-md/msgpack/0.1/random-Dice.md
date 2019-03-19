# Dice
<span class="source-link">[[Source]](src/random/dice.md#L1)</span>

A simple dice roller.


```pony
class ref Dice
```

## Constructors

### create
<span class="source-link">[[Source]](src/random/dice.md#L7)</span>


Initialise with a random number generator.


```pony
new ref create(
  from: Random ref)
: Dice ref^
```
#### Parameters

*   from: [Random](random-Random.md) ref

#### Returns

* [Dice](random-Dice.md) ref^

---

## Public fields

### var r: [Random](random-Random.md) ref
<span class="source-link">[[Source]](src/random/dice.md#L5)</span>



---

## Public Functions

### apply
<span class="source-link">[[Source]](src/random/dice.md#L13)</span>


Return the sum of `count` rolls of a die with the given number of `sides`.
The die is numbered from 1 to `sides`. For example, count = 2 and
sides = 6 will return a value between 2 and 12.


```pony
fun ref apply(
  count: U64 val,
  sides: U64 val)
: U64 val
```
#### Parameters

*   count: [U64](builtin-U64.md) val
*   sides: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

