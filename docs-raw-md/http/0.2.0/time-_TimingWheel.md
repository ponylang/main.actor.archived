# _TimingWheel
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L3)</span>

A timing wheel in a hierarchical set of timing wheels. Each wheel covers 6
bits of precision.


```pony
class ref _TimingWheel
```

## Constructors

### create
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L13)</span>


Create a timing wheel at the given hierarchical level.


```pony
new ref create(
  index: USize val)
: _TimingWheel ref^
```
#### Parameters

*   index: [USize](builtin-USize.md) val

#### Returns

* [_TimingWheel](time-_TimingWheel.md) ref^

---

## Public Functions

### schedule
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L25)</span>


Schedule a timer on this wheel. Mark the bit indicating that the given slot
has timers in its list.


```pony
fun ref schedule(
  timer: Timer ref)
: None val
```
#### Parameters

*   timer: [Timer](time-Timer.md) ref

#### Returns

* [None](builtin-None.md) val

---

### advance
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L38)</span>


Remove pending timers from this timing wheel and put them on the pending
list supplied. Needs the current time and the elapsed time since the
previous advance. Returns true if the next timing wheel in the hierarchy
should be advanced.


```pony
fun ref advance(
  list: List[Timer ref] ref,
  current: U64 val,
  elapsed: U64 val)
: Bool val
```
#### Parameters

*   list: [List](collections-List.md)\[[Timer](time-Timer.md) ref\] ref
*   current: [U64](builtin-U64.md) val
*   elapsed: [U64](builtin-U64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L68)</span>


Given a current time, return the next time at which this timing wheel
should be advanced. Returns -1 if no timers are on this timing wheel.


```pony
fun box next(
  current: U64 val)
: U64 val
```
#### Parameters

*   current: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### clear
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L82)</span>


Cancels all pending timers.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _slot
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L92)</span>


Return the slot for a given time.


```pony
fun box _slot(
  time: U64 val)
: U64 val
```
#### Parameters

*   time: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### _bits
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L98)</span>


```pony
fun tag _bits()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _max
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L99)</span>


```pony
fun tag _max()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _mask
<span class="source-link">[[Source]](src/time/_timing_wheel.md#L100)</span>


```pony
fun tag _mask()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

