# SignalNotify
<span class="source-link">[[Source]](src/signals/signal_notify.md#L1)</span>

Notifications for a signal.


```pony
interface ref SignalNotify
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/signals/signal_notify.md#L5)</span>


Called with the the number of times the signal has fired since this was
last called. Return false to stop listening for the signal.


```pony
fun ref apply(
  count: U32 val)
: Bool val
```
#### Parameters

*   count: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### dispose
<span class="source-link">[[Source]](src/signals/signal_notify.md#L12)</span>


Called if the signal is disposed. This is also called if the notifier
returns false.


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

