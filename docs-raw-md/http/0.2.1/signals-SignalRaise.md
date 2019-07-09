# SignalRaise
<span class="source-link">[[Source]](src/signals/signal_notify.md#L19)</span>

Raise a signal.


```pony
primitive val SignalRaise
```

## Constructors

### create
<span class="source-link">[[Source]](src/signals/signal_notify.md#L19)</span>


```pony
new val create()
: SignalRaise val^
```

#### Returns

* [SignalRaise](signals-SignalRaise.md) val^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/signals/signal_notify.md#L23)</span>


```pony
fun box apply(
  sig: U32 val)
: None val
```
#### Parameters

*   sig: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### eq
<span class="source-link">[[Source]](src/signals/signal_notify.md#L23)</span>


```pony
fun box eq(
  that: SignalRaise val)
: Bool val
```
#### Parameters

*   that: [SignalRaise](signals-SignalRaise.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/signals/signal_notify.md#L23)</span>


```pony
fun box ne(
  that: SignalRaise val)
: Bool val
```
#### Parameters

*   that: [SignalRaise](signals-SignalRaise.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

