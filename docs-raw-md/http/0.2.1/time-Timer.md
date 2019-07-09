# Timer
<span class="source-link">[[Source]](src/time/timer.md#L3)</span>

The `Timer` class represents a timer that fires after an expiration
time, and then fires at an interval. When a `Timer` fires, it calls
the `apply` method of the `TimerNotify` object that was passed to it
when it was created.

The following example waits 5 seconds and then fires every 2
seconds, and when it fires the `TimerNotify` object prints how many
times it has been called:

```pony
use "time"

actor Main
  new create(env: Env) =>
    let timers = Timers
    let timer = Timer(Notify(env), 5_000_000_000, 2_000_000_000)
    timers(consume timer)

class Notify is TimerNotify
  let _env: Env
  var _counter: U32 = 0
  new iso create(env: Env) =>
    _env = env
  fun ref apply(timer: Timer, count: U64): Bool =>
    _env.out.print(_counter.string())
    _counter = _counter + 1
    true
```


```pony
class ref Timer
```

## Constructors

### create
<span class="source-link">[[Source]](src/time/timer.md#L39)</span>


Create a new timer. The expiration time should be a nanosecond count
until the first expiration. The interval should also be in nanoseconds.


```pony
new iso create(
  notify: TimerNotify iso,
  expiration: U64 val,
  interval: U64 val = 0)
: Timer iso^
```
#### Parameters

*   notify: [TimerNotify](time-TimerNotify.md) iso
*   expiration: [U64](builtin-U64.md) val
*   interval: [U64](builtin-U64.md) val = 0

#### Returns

* [Timer](time-Timer.md) iso^

---

### abs
<span class="source-link">[[Source]](src/time/timer.md#L54)</span>


Creates a new timer with an absolute expiration time rather than a relative
time. The expiration time is wall-clock adjusted system time.


```pony
new ref abs(
  notify: TimerNotify ref,
  expiration: (I64 val , I64 val),
  interval: U64 val = 0)
: Timer ref^
```
#### Parameters

*   notify: [TimerNotify](time-TimerNotify.md) ref
*   expiration: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)
*   interval: [U64](builtin-U64.md) val = 0

#### Returns

* [Timer](time-Timer.md) ref^

---

## Private Functions

### _cancel
<span class="source-link">[[Source]](src/time/timer.md#L65)</span>


Remove the timer from any list.


```pony
fun ref _cancel()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _get_node
<span class="source-link">[[Source]](src/time/timer.md#L72)</span>


Returns the list node pointing to the timer. Used to schedule the timer in
a queue.


```pony
fun ref _get_node()
: ListNode[Timer ref] ref
```

#### Returns

* [ListNode](collections-ListNode.md)\[[Timer](time-Timer.md) ref\] ref

---

### _slop
<span class="source-link">[[Source]](src/time/timer.md#L79)</span>


Apply slop bits to the expiration time and interval. This reduces the
precision by the given number of bits, effectively quantizing time.


```pony
fun ref _slop(
  bits: USize val)
: None val
```
#### Parameters

*   bits: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### _fire
<span class="source-link">[[Source]](src/time/timer.md#L90)</span>


A timer is fired if its expiration time is in the past. The notifier is
called with a count based on the elapsed time since expiration and the
timer interval. The expiration time is set to the next expiration. Returns
true if the timer should be rescheduled, false otherwise.


```pony
fun ref _fire(
  current: U64 val)
: Bool val
```
#### Parameters

*   current: [U64](builtin-U64.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _next
<span class="source-link">[[Source]](src/time/timer.md#L111)</span>


Returns the next expiration time.


```pony
fun box _next()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### _abs_expiration_time
<span class="source-link">[[Source]](src/time/timer.md#L117)</span>


Converts a wall-clock adjusted system time to absolute expiration time


```pony
fun tag _abs_expiration_time(
  wall: (I64 val , I64 val))
: U64 val
```
#### Parameters

*   wall: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

#### Returns

* [U64](builtin-U64.md) val

---

