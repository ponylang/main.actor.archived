# _TermResizeNotify
<span class="source-link">[[Source]](src/term/ansi_term.md#L25)</span>
```pony
class ref _TermResizeNotify is
  SignalNotify ref
```

#### Implements

* [SignalNotify](signals-SignalNotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/term/ansi_term.md#L28)</span>


```pony
new ref create(
  term: ANSITerm tag)
: _TermResizeNotify ref^
```
#### Parameters

*   term: [ANSITerm](term-ANSITerm.md) tag

#### Returns

* [_TermResizeNotify](term-_TermResizeNotify.md) ref^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/term/ansi_term.md#L31)</span>


```pony
fun box apply(
  times: U32 val)
: Bool val
```
#### Parameters

*   times: [U32](builtin-U32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### dispose
<span class="source-link">[[Source]](src/signals/signal_notify.md#L12)</span>


```pony
fun ref dispose()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

