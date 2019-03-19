# Nanos
<span class="source-link">[[Source]](src/time/nanos.md#L2)</span>

Collection of utility functions for converting various durations of time
to nanoseconds, for passing to other functions in the time package.


```pony
primitive val Nanos
```

## Constructors

### create
<span class="source-link">[[Source]](src/time/nanos.md#L2)</span>


```pony
new val create()
: Nanos val^
```

#### Returns

* [Nanos](time-Nanos.md) val^

---

## Public Functions

### from_seconds
<span class="source-link">[[Source]](src/time/nanos.md#L7)</span>


```pony
fun box from_seconds(
  t: U64 val)
: U64 val
```
#### Parameters

*   t: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_millis
<span class="source-link">[[Source]](src/time/nanos.md#L10)</span>


```pony
fun box from_millis(
  t: U64 val)
: U64 val
```
#### Parameters

*   t: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_micros
<span class="source-link">[[Source]](src/time/nanos.md#L13)</span>


```pony
fun box from_micros(
  t: U64 val)
: U64 val
```
#### Parameters

*   t: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_seconds_f
<span class="source-link">[[Source]](src/time/nanos.md#L16)</span>


```pony
fun box from_seconds_f(
  t: F64 val)
: U64 val
```
#### Parameters

*   t: [F64](builtin-F64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_millis_f
<span class="source-link">[[Source]](src/time/nanos.md#L19)</span>


```pony
fun box from_millis_f(
  t: F64 val)
: U64 val
```
#### Parameters

*   t: [F64](builtin-F64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_micros_f
<span class="source-link">[[Source]](src/time/nanos.md#L22)</span>


```pony
fun box from_micros_f(
  t: F64 val)
: U64 val
```
#### Parameters

*   t: [F64](builtin-F64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

### from_wall_clock
<span class="source-link">[[Source]](src/time/nanos.md#L25)</span>


```pony
fun box from_wall_clock(
  wall: (I64 val , I64 val))
: U64 val
```
#### Parameters

*   wall: ([I64](builtin-I64.md) val , [I64](builtin-I64.md) val)

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/time/nanos.md#L7)</span>


```pony
fun box eq(
  that: Nanos val)
: Bool val
```
#### Parameters

*   that: [Nanos](time-Nanos.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/time/nanos.md#L7)</span>


```pony
fun box ne(
  that: Nanos val)
: Bool val
```
#### Parameters

*   that: [Nanos](time-Nanos.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

