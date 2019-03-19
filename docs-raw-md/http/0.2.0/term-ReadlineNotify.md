# ReadlineNotify
<span class="source-link">[[Source]](src/term/readline_notify.md#L3)</span>

Notifier for readline.


```pony
interface ref ReadlineNotify
```

## Public Functions

### apply
<span class="source-link">[[Source]](src/term/readline_notify.md#L7)</span>


Receives finished lines. The next prompt is set by fulfilling the promise.
If the promise is rejected, readline will stop handling input.


```pony
fun ref apply(
  line: String val,
  prompt: Promise[String val] tag)
: None val
```
#### Parameters

*   line: [String](builtin-String.md) val
*   prompt: [Promise](promises-Promise.md)\[[String](builtin-String.md) val\] tag

#### Returns

* [None](builtin-None.md) val

---

### tab
<span class="source-link">[[Source]](src/term/readline_notify.md#L14)</span>


Return tab completion possibilities.


```pony
fun ref tab(
  line: String val)
: Seq[String val] box
```
#### Parameters

*   line: [String](builtin-String.md) val

#### Returns

* [Seq](builtin-Seq.md)\[[String](builtin-String.md) val\] box

---

