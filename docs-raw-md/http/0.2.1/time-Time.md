# Time
<span class="source-link">[[Source]](src/time/time.md#L38)</span>

A collection of ways to fetch the current time.


```pony
primitive val Time
```

## Constructors

### create
<span class="source-link">[[Source]](src/time/time.md#L38)</span>


```pony
new val create()
: Time val^
```

#### Returns

* [Time](time-Time.md) val^

---

## Public Functions

### now
<span class="source-link">[[Source]](src/time/time.md#L42)</span>


The wall-clock adjusted system time with nanoseconds.
Return: (seconds, nanoseconds)


```pony
fun box now()
: (I64 val , I64 val)
```

#### Returns

* ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

---

### seconds
<span class="source-link">[[Source]](src/time/time.md#L65)</span>


The wall-clock adjusted system time.


```pony
fun box seconds()
: I64 val
```

#### Returns

* [I64](builtin-I64.md) val

---

### millis
<span class="source-link">[[Source]](src/time/time.md#L71)</span>


Monotonic unadjusted milliseconds.


```pony
fun box millis()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### micros
<span class="source-link">[[Source]](src/time/time.md#L87)</span>


Monotonic unadjusted microseconds.


```pony
fun box micros()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### nanos
<span class="source-link">[[Source]](src/time/time.md#L103)</span>


Monotonic unadjusted nanoseconds.


```pony
fun box nanos()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### cycles
<span class="source-link">[[Source]](src/time/time.md#L119)</span>


Processor cycle count. Don't use this for performance timing, as it does
not control for out-of-order execution.


```pony
fun box cycles()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### perf_begin
<span class="source-link">[[Source]](src/time/time.md#L126)</span>


Get a cycle count for beginning a performance testing block. This will
will prevent instructions from before this call leaking into the block and
instructions after this call being executed earlier.


```pony
fun box perf_begin()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### perf_end
<span class="source-link">[[Source]](src/time/time.md#L139)</span>


Get a cycle count for ending a performance testing block. This will
will prevent instructions from after this call leaking into the block and
instructions before this call being executed later.


```pony
fun box perf_end()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/time/time.md#L42)</span>


```pony
fun box eq(
  that: Time val)
: Bool val
```
#### Parameters

*   that: [Time](time-Time.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/time/time.md#L42)</span>


```pony
fun box ne(
  that: Time val)
: Bool val
```
#### Parameters

*   that: [Time](time-Time.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _clock_gettime
<span class="source-link">[[Source]](src/time/time.md#L154)</span>


Return a clock time on linux and bsd.


```pony
fun box _clock_gettime(
  clock: (_ClockRealtime val | _ClockMonotonic val))
: (I64 val , I64 val)
```
#### Parameters

*   clock: ([_ClockRealtime](time-_ClockRealtime.md) val | [_ClockMonotonic](time-_ClockMonotonic.md) val)

#### Returns

* ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

---

### _query_performance_counter
<span class="source-link">[[Source]](src/time/time.md#L170)</span>


Return QPC and QPF.


```pony
fun box _query_performance_counter()
: (U64 val , U64 val)
```

#### Returns

* ([U64](builtin-U64.md) val , [U64](builtin-U64.md) val)

---

