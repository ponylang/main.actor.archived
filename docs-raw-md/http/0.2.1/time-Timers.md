# Timers
<span class="source-link">[[Source]](src/time/timers.md#L13)</span>

A hierarchical set of timing wheels.


```pony
actor tag Timers
```

## Constructors

### create
<span class="source-link">[[Source]](src/time/timers.md#L24)</span>


Create a timer handler with the specified number of slop bits. No slop bits
means trying for nanosecond resolution. 10 slop bits is approximately
microsecond resolution, 20 slop bits is approximately millisecond
resolution.


```pony
new tag create(
  slop: USize val = 20)
: Timers tag^
```
#### Parameters

*   slop: [USize](builtin-USize.md) val = 20

#### Returns

* [Timers](time-Timers.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/time/timers.md#L38)</span>


Sets a timer. Fire it if need be, schedule it on the right timing wheel,
then rearm the timer.


```pony
be apply(
  timer: Timer iso)
```
#### Parameters

*   timer: [Timer](time-Timer.md) iso

---

### cancel
<span class="source-link">[[Source]](src/time/timers.md#L49)</span>


Cancels a timer.


```pony
be cancel(
  timer: Timer tag)
```
#### Parameters

*   timer: [Timer](time-Timer.md) tag

---

### dispose
<span class="source-link">[[Source]](src/time/timers.md#L64)</span>


Dispose of this set of timing wheels.


```pony
be dispose()
```

---

## Private Behaviours

### _event_notify
<span class="source-link">[[Source]](src/time/timers.md#L78)</span>


When the event fires, advance the timing wheels.


```pony
be _event_notify(
  event: Pointer[AsioEvent val] tag,
  flags: U32 val,
  arg: U32 val)
```
#### Parameters

*   event: [Pointer](builtin-Pointer.md)\[[AsioEvent](builtin-AsioEvent.md) val\] tag
*   flags: [U32](builtin-U32.md) val
*   arg: [U32](builtin-U32.md) val

---

## Private Functions

### _advance
<span class="source-link">[[Source]](src/time/timers.md#L88)</span>


Update the current time, process all the timing wheels, and set the event
for the next time we need to advance.


```pony
fun ref _advance()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _fire
<span class="source-link">[[Source]](src/time/timers.md#L128)</span>


Fire a timer if necessary, then schedule it on the correct timing wheel
based on how long it is until it expires.


```pony
fun ref _fire(
  timer: Timer ref)
: None val
```
#### Parameters

*   timer: [Timer](time-Timer.md) ref

#### Returns

* [None](builtin-None.md) val

---

### _next
<span class="source-link">[[Source]](src/time/timers.md#L145)</span>


Return the next time at which the timing wheels should be advanced. This is
adjusted for slop, so it yields nanoseconds. If no events are pending, this
returns -1.


```pony
fun box _next()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### _set_time
<span class="source-link">[[Source]](src/time/timers.md#L165)</span>


Set the current time with precision reduced by the slop bits. Return the
elapsed time.


```pony
fun ref _set_time()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### _get_wheel
<span class="source-link">[[Source]](src/time/timers.md#L173)</span>


Get the hierarchical timing wheel for the given time until expiration.


```pony
fun ref _get_wheel(
  rem: U64 val)
: _TimingWheel ref ?
```
#### Parameters

*   rem: [U64](builtin-U64.md) val

#### Returns

* [_TimingWheel](time-_TimingWheel.md) ref ?

---

### _expiration_max
<span class="source-link">[[Source]](src/time/timers.md#L181)</span>


Get the maximum time the timing wheels cover. Anything beyond this is
scheduled on the last timing wheel.


```pony
fun tag _expiration_max()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### _wheels
<span class="source-link">[[Source]](src/time/timers.md#L188)</span>


```pony
fun tag _wheels()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### _bits
<span class="source-link">[[Source]](src/time/timers.md#L189)</span>


```pony
fun tag _bits()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

