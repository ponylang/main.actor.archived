# Readline
<span class="source-link">[[Source]](src/term/readline.md#L6)</span>

Line editing, history, and tab completion.


```pony
class ref Readline is
  ANSINotify ref
```

#### Implements

* [ANSINotify](term-ANSINotify.md) ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/term/readline.md#L23)</span>


Create a readline handler to be passed to stdin. It begins blocked. Set an
initial prompt on the ANSITerm to begin processing.


```pony
new iso create(
  notify: ReadlineNotify iso,
  out: OutStream tag,
  path: (FilePath val | None val) = reference,
  maxlen: USize val = 0)
: Readline iso^
```
#### Parameters

*   notify: [ReadlineNotify](term-ReadlineNotify.md) iso
*   out: [OutStream](builtin-OutStream.md) tag
*   path: ([FilePath](files-FilePath.md) val | [None](builtin-None.md) val) = reference
*   maxlen: [USize](builtin-USize.md) val = 0

#### Returns

* [Readline](term-Readline.md) iso^

---

## Public Functions

### apply
<span class="source-link">[[Source]](src/term/readline.md#L41)</span>


Receives input.


```pony
fun ref apply(
  term: ANSITerm ref,
  input: U8 val)
: None val
```
#### Parameters

*   term: [ANSITerm](term-ANSITerm.md) ref
*   input: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### prompt
<span class="source-link">[[Source]](src/term/readline.md#L83)</span>


Set a new prompt, unblock, and handle the pending queue.


```pony
fun ref prompt(
  term: ANSITerm ref,
  value: String val)
: None val
```
#### Parameters

*   term: [ANSITerm](term-ANSITerm.md) ref
*   value: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### closed
<span class="source-link">[[Source]](src/term/readline.md#L99)</span>


No more input is available.


```pony
fun ref closed()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### up
<span class="source-link">[[Source]](src/term/readline.md#L105)</span>


Previous line.


```pony
fun ref up(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### down
<span class="source-link">[[Source]](src/term/readline.md#L117)</span>


Next line.


```pony
fun ref down(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### left
<span class="source-link">[[Source]](src/term/readline.md#L133)</span>


Move left.


```pony
fun ref left(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### right
<span class="source-link">[[Source]](src/term/readline.md#L152)</span>


Move right.


```pony
fun ref right(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### home
<span class="source-link">[[Source]](src/term/readline.md#L171)</span>


Beginning of the line.


```pony
fun ref home(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### end_key
<span class="source-link">[[Source]](src/term/readline.md#L178)</span>


End of the line.


```pony
fun ref end_key(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### delete
<span class="source-link">[[Source]](src/term/readline.md#L211)</span>


Forward delete.


```pony
fun ref delete(
  ctrl: Bool val = false,
  alt: Bool val = false,
  shift: Bool val = false)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val = false
*   alt: [Bool](builtin-Bool.md) val = false
*   shift: [Bool](builtin-Bool.md) val = false

#### Returns

* [None](builtin-None.md) val

---

### insert



```pony
fun ref insert(
  ctrl: Bool val,
  alt: Bool val,
  shift: Bool val)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val
*   alt: [Bool](builtin-Bool.md) val
*   shift: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### page_up



```pony
fun ref page_up(
  ctrl: Bool val,
  alt: Bool val,
  shift: Bool val)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val
*   alt: [Bool](builtin-Bool.md) val
*   shift: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### page_down



```pony
fun ref page_down(
  ctrl: Bool val,
  alt: Bool val,
  shift: Bool val)
: None val
```
#### Parameters

*   ctrl: [Bool](builtin-Bool.md) val
*   alt: [Bool](builtin-Bool.md) val
*   shift: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### fn_key



```pony
fun ref fn_key(
  i: U8 val,
  ctrl: Bool val,
  alt: Bool val,
  shift: Bool val)
: None val
```
#### Parameters

*   i: [U8](builtin-U8.md) val
*   ctrl: [Bool](builtin-Bool.md) val
*   alt: [Bool](builtin-Bool.md) val
*   shift: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### size



```pony
fun ref size(
  rows: U16 val,
  cols: U16 val)
: None val
```
#### Parameters

*   rows: [U16](builtin-U16.md) val
*   cols: [U16](builtin-U16.md) val

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _backspace
<span class="source-link">[[Source]](src/term/readline.md#L189)</span>


Backward delete.


```pony
fun ref _backspace()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _clear
<span class="source-link">[[Source]](src/term/readline.md#L230)</span>


Clear the screen.


```pony
fun ref _clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _swap
<span class="source-link">[[Source]](src/term/readline.md#L237)</span>


Swap the previous character with the current one.


```pony
fun ref _swap()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _delete_prev_word
<span class="source-link">[[Source]](src/term/readline.md#L251)</span>


Delete the previous word.


```pony
fun ref _delete_prev_word()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _tab
<span class="source-link">[[Source]](src/term/readline.md#L270)</span>


Tab completion.

TODO: Improve this.


```pony
fun ref _tab()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _dispatch
<span class="source-link">[[Source]](src/term/readline.md#L296)</span>


Send a finished line to the notifier.


```pony
fun ref _dispatch(
  term: ANSITerm tag)
: None val
```
#### Parameters

*   term: [ANSITerm](term-ANSITerm.md) tag

#### Returns

* [None](builtin-None.md) val

---

### _handle_line
<span class="source-link">[[Source]](src/term/readline.md#L312)</span>


Dispatch a single line.


```pony
fun ref _handle_line(
  term: ANSITerm tag,
  line: String val)
: None val
```
#### Parameters

*   term: [ANSITerm](term-ANSITerm.md) tag
*   line: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### _refresh_line
<span class="source-link">[[Source]](src/term/readline.md#L326)</span>


Refresh the line on screen.


```pony
fun ref _refresh_line()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _add_history
<span class="source-link">[[Source]](src/term/readline.md#L358)</span>


Add a line to the history, trimming an earlier line if necessary.


```pony
fun ref _add_history(
  line: String val)
: None val
```
#### Parameters

*   line: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### _load_history
<span class="source-link">[[Source]](src/term/readline.md#L378)</span>


Load the history from a file.


```pony
fun ref _load_history()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _save_history
<span class="source-link">[[Source]](src/term/readline.md#L392)</span>


Write the history back to a file.


```pony
fun box _save_history()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

