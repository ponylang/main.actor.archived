# ANSITerm
<span class="source-link">[[Source]](src/term/ansi_term.md#L45)</span>

Handles ANSI escape codes from stdin.


```pony
actor tag ANSITerm
```

## Constructors

### create
<span class="source-link">[[Source]](src/term/ansi_term.md#L59)</span>


Create a new ANSI term.


```pony
new tag create(
  notify: ANSINotify iso,
  source: DisposableActor tag,
  timers: Timers tag = seq)
: ANSITerm tag^
```
#### Parameters

*   notify: [ANSINotify](term-ANSINotify.md) iso
*   source: [DisposableActor](builtin-DisposableActor.md) tag
*   timers: [Timers](time-Timers.md) tag = seq

#### Returns

* [ANSITerm](term-ANSITerm.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/term/ansi_term.md#L77)</span>


Receives input from stdin.


```pony
be apply(
  data: Array[U8 val] iso)
```
#### Parameters

*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso

---

### prompt
<span class="source-link">[[Source]](src/term/ansi_term.md#L187)</span>


Pass a prompt along to the notifier.


```pony
be prompt(
  value: String val)
```
#### Parameters

*   value: [String](builtin-String.md) val

---

### size
<span class="source-link">[[Source]](src/term/ansi_term.md#L193)</span>


```pony
be size()
```

---

### dispose
<span class="source-link">[[Source]](src/term/ansi_term.md#L206)</span>


Stop accepting input, inform the notifier we have closed, and dispose of
our source.


```pony
be dispose()
```

---

## Private Behaviours

### _timeout
<span class="source-link">[[Source]](src/term/ansi_term.md#L218)</span>


Our timer since receiving an ESC has expired. Send the buffered data as if
it was not an escape sequence.


```pony
be _timeout()
```

---

## Private Functions

### _size
<span class="source-link">[[Source]](src/term/ansi_term.md#L196)</span>


Pass the window size to the notifier.


```pony
fun ref _size()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _mod
<span class="source-link">[[Source]](src/term/ansi_term.md#L226)</span>


Set the modifier bools.


```pony
fun ref _mod()
: (Bool val , Bool val , Bool val)
```

#### Returns

* ([Bool](builtin-Bool.md) val , [Bool](builtin-Bool.md) val , [Bool](builtin-Bool.md) val)

---

### _keypad
<span class="source-link">[[Source]](src/term/ansi_term.md#L244)</span>


An extended key.


```pony
fun ref _keypad()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _up
<span class="source-link">[[Source]](src/term/ansi_term.md#L277)</span>


Up arrow.


```pony
fun ref _up()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _down
<span class="source-link">[[Source]](src/term/ansi_term.md#L285)</span>


Down arrow.


```pony
fun ref _down()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _left
<span class="source-link">[[Source]](src/term/ansi_term.md#L293)</span>


Left arrow.


```pony
fun ref _left()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _right
<span class="source-link">[[Source]](src/term/ansi_term.md#L301)</span>


Right arrow.


```pony
fun ref _right()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _delete
<span class="source-link">[[Source]](src/term/ansi_term.md#L309)</span>


Delete key.


```pony
fun ref _delete()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _insert
<span class="source-link">[[Source]](src/term/ansi_term.md#L317)</span>


Insert key.


```pony
fun ref _insert()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _home
<span class="source-link">[[Source]](src/term/ansi_term.md#L325)</span>


Home key.


```pony
fun ref _home()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _end
<span class="source-link">[[Source]](src/term/ansi_term.md#L333)</span>


End key.


```pony
fun ref _end()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _page_up
<span class="source-link">[[Source]](src/term/ansi_term.md#L341)</span>


Page up key.


```pony
fun ref _page_up()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _page_down
<span class="source-link">[[Source]](src/term/ansi_term.md#L349)</span>


Page down key.


```pony
fun ref _page_down()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _fn_key
<span class="source-link">[[Source]](src/term/ansi_term.md#L357)</span>


Function key.


```pony
fun ref _fn_key(
  i: U8 val)
: None val
```
#### Parameters

*   i: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### _esc_flush
<span class="source-link">[[Source]](src/term/ansi_term.md#L365)</span>


Pass a partial or unrecognised escape sequence to the notifier.


```pony
fun ref _esc_flush()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _esc_clear
<span class="source-link">[[Source]](src/term/ansi_term.md#L375)</span>


Clear the escape state.


```pony
fun ref _esc_clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

