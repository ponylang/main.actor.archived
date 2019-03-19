# ANSI
<span class="source-link">[[Source]](src/term/ansi.md#L1)</span>

These strings can be embedded in text when writing to a StdStream to create
a text-based UI.


```pony
primitive val ANSI
```

## Constructors

### create
<span class="source-link">[[Source]](src/term/ansi.md#L1)</span>


```pony
new val create()
: ANSI val^
```

#### Returns

* [ANSI](term-ANSI.md) val^

---

## Public Functions

### up
<span class="source-link">[[Source]](src/term/ansi.md#L6)</span>


Move the cursor up n lines. 0 is the same as 1.


```pony
fun box up(
  n: U32 val = seq)
: String val
```
#### Parameters

*   n: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### down
<span class="source-link">[[Source]](src/term/ansi.md#L16)</span>


Move the cursor down n lines. 0 is the same as 1.


```pony
fun box down(
  n: U32 val = seq)
: String val
```
#### Parameters

*   n: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### right
<span class="source-link">[[Source]](src/term/ansi.md#L26)</span>


Move the cursor right n columns. 0 is the same as 1.


```pony
fun box right(
  n: U32 val = seq)
: String val
```
#### Parameters

*   n: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### left
<span class="source-link">[[Source]](src/term/ansi.md#L36)</span>


Move the cursor left n columns. 0 is the same as 1.


```pony
fun box left(
  n: U32 val = seq)
: String val
```
#### Parameters

*   n: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### cursor
<span class="source-link">[[Source]](src/term/ansi.md#L46)</span>


Move the cursor to line y, column x. 0 is the same as 1. This indexes from
the top left corner of the screen.


```pony
fun box cursor(
  x: U32 val = seq,
  y: U32 val = seq)
: String val
```
#### Parameters

*   x: [U32](builtin-U32.md) val = seq
*   y: [U32](builtin-U32.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### clear
<span class="source-link">[[Source]](src/term/ansi.md#L57)</span>


Clear the screen and move the cursor to the top left corner.


```pony
fun box clear()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### erase
<span class="source-link">[[Source]](src/term/ansi.md#L63)</span>


Erases everything to the left of the cursor on the line the cursor is on.


```pony
fun box erase()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### reset
<span class="source-link">[[Source]](src/term/ansi.md#L69)</span>


Resets all colours and text styles to the default.


```pony
fun box reset()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bold
<span class="source-link">[[Source]](src/term/ansi.md#L75)</span>


Bold text. Does nothing on Windows.


```pony
fun box bold(
  state: Bool val = seq)
: String val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### underline
<span class="source-link">[[Source]](src/term/ansi.md#L81)</span>


Underlined text. Does nothing on Windows.


```pony
fun box underline(
  state: Bool val = seq)
: String val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### blink
<span class="source-link">[[Source]](src/term/ansi.md#L87)</span>


Blinking text. Does nothing on Windows.


```pony
fun box blink(
  state: Bool val = seq)
: String val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### reverse
<span class="source-link">[[Source]](src/term/ansi.md#L93)</span>


Swap foreground and background colour.


```pony
fun box reverse(
  state: Bool val = seq)
: String val
```
#### Parameters

*   state: [Bool](builtin-Bool.md) val = seq

#### Returns

* [String](builtin-String.md) val

---

### black
<span class="source-link">[[Source]](src/term/ansi.md#L99)</span>


Black text.


```pony
fun box black()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### red
<span class="source-link">[[Source]](src/term/ansi.md#L105)</span>


Red text.


```pony
fun box red()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### green
<span class="source-link">[[Source]](src/term/ansi.md#L111)</span>


Green text.


```pony
fun box green()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### yellow
<span class="source-link">[[Source]](src/term/ansi.md#L117)</span>


Yellow text.


```pony
fun box yellow()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### blue
<span class="source-link">[[Source]](src/term/ansi.md#L123)</span>


Blue text.


```pony
fun box blue()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### magenta
<span class="source-link">[[Source]](src/term/ansi.md#L129)</span>


Magenta text.


```pony
fun box magenta()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### cyan
<span class="source-link">[[Source]](src/term/ansi.md#L135)</span>


Cyan text.


```pony
fun box cyan()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### grey
<span class="source-link">[[Source]](src/term/ansi.md#L141)</span>


Grey text.


```pony
fun box grey()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### white
<span class="source-link">[[Source]](src/term/ansi.md#L147)</span>


White text.


```pony
fun box white()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_red
<span class="source-link">[[Source]](src/term/ansi.md#L153)</span>


Bright red text.


```pony
fun box bright_red()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_green
<span class="source-link">[[Source]](src/term/ansi.md#L159)</span>


Bright green text.


```pony
fun box bright_green()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_yellow
<span class="source-link">[[Source]](src/term/ansi.md#L165)</span>


Bright yellow text.


```pony
fun box bright_yellow()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_blue
<span class="source-link">[[Source]](src/term/ansi.md#L171)</span>


Bright blue text.


```pony
fun box bright_blue()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_magenta
<span class="source-link">[[Source]](src/term/ansi.md#L177)</span>


Bright magenta text.


```pony
fun box bright_magenta()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_cyan
<span class="source-link">[[Source]](src/term/ansi.md#L183)</span>


Bright cyan text.


```pony
fun box bright_cyan()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_grey
<span class="source-link">[[Source]](src/term/ansi.md#L189)</span>


Bright grey text.


```pony
fun box bright_grey()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### black_bg
<span class="source-link">[[Source]](src/term/ansi.md#L195)</span>


Black background.


```pony
fun box black_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### red_bg
<span class="source-link">[[Source]](src/term/ansi.md#L201)</span>


Red background.


```pony
fun box red_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### green_bg
<span class="source-link">[[Source]](src/term/ansi.md#L207)</span>


Green background.


```pony
fun box green_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### yellow_bg
<span class="source-link">[[Source]](src/term/ansi.md#L213)</span>


Yellow background.


```pony
fun box yellow_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### blue_bg
<span class="source-link">[[Source]](src/term/ansi.md#L219)</span>


Blue background.


```pony
fun box blue_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### magenta_bg
<span class="source-link">[[Source]](src/term/ansi.md#L225)</span>


Magenta background.


```pony
fun box magenta_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### cyan_bg
<span class="source-link">[[Source]](src/term/ansi.md#L231)</span>


Cyan background.


```pony
fun box cyan_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### grey_bg
<span class="source-link">[[Source]](src/term/ansi.md#L237)</span>


Grey background.


```pony
fun box grey_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### white_bg
<span class="source-link">[[Source]](src/term/ansi.md#L243)</span>


White background.


```pony
fun box white_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_red_bg
<span class="source-link">[[Source]](src/term/ansi.md#L249)</span>


Bright red background.


```pony
fun box bright_red_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_green_bg
<span class="source-link">[[Source]](src/term/ansi.md#L255)</span>


Bright green background.


```pony
fun box bright_green_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_yellow_bg
<span class="source-link">[[Source]](src/term/ansi.md#L261)</span>


Bright yellow background.


```pony
fun box bright_yellow_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_blue_bg
<span class="source-link">[[Source]](src/term/ansi.md#L267)</span>


Bright blue background.


```pony
fun box bright_blue_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_magenta_bg
<span class="source-link">[[Source]](src/term/ansi.md#L273)</span>


Bright magenta background.


```pony
fun box bright_magenta_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_cyan_bg
<span class="source-link">[[Source]](src/term/ansi.md#L279)</span>


Bright cyan background.


```pony
fun box bright_cyan_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### bright_grey_bg
<span class="source-link">[[Source]](src/term/ansi.md#L285)</span>


Bright grey background.


```pony
fun box bright_grey_bg()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/term/ansi.md#L6)</span>


```pony
fun box eq(
  that: ANSI val)
: Bool val
```
#### Parameters

*   that: [ANSI](term-ANSI.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/term/ansi.md#L6)</span>


```pony
fun box ne(
  that: ANSI val)
: Bool val
```
#### Parameters

*   that: [ANSI](term-ANSI.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

