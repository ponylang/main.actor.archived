# Stdin
<span class="source-link">[[Source]](src/builtin/stdin.md#L49)</span>

Asynchronous access to stdin. The constructor is private to ensure that
access is provided only via an environment.

Reading from stdin is done by registering an `InputNotify`:

```pony
actor Main
  new create(env: Env) =>
    // do not forget to call `env.input.dispose` at some point
    env.input(
      object iso is InputNotify
        fun ref apply(data: Array[U8] iso) =>
          env.out.write(String.from_iso_array(consume data))

        fun ref dispose() =>
          env.out.print("Done.")
      end,
      512)
```

**Note:** For reading user input from a terminal, use the [term](term--index.md) package.


```pony
actor tag Stdin
```

## Constructors

### _create
<span class="source-link">[[Source]](src/builtin/stdin.md#L78)</span>


Create an asynchronous stdin provider.


```pony
new tag _create(
  use_event: Bool val)
: Stdin tag^
```
#### Parameters

*   use_event: [Bool](builtin-Bool.md) val

#### Returns

* [Stdin](builtin-Stdin.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/builtin/stdin.md#L84)</span>


Set the notifier. Optionally, also sets the chunk size, dictating the
maximum number of bytes of each chunk that will be passed to the notifier.


```pony
be apply(
  notify: (InputNotify iso | None val),
  chunk_size: USize val = seq)
```
#### Parameters

*   notify: ([InputNotify](builtin-InputNotify.md) iso | [None](builtin-None.md) val)
*   chunk_size: [USize](builtin-USize.md) val = seq

---

### dispose
<span class="source-link">[[Source]](src/builtin/stdin.md#L92)</span>


Clear the notifier in order to shut down input.


```pony
be dispose()
```

---

## Private Behaviours

### _loop_read
<span class="source-link">[[Source]](src/builtin/stdin.md#L121)</span>


If we are able to read from stdin, schedule another read.


```pony
be _loop_read()
```

---

### _event_notify
<span class="source-link">[[Source]](src/builtin/stdin.md#L129)</span>


When the event fires, read from stdin.


```pony
be _event_notify(
  event: Pointer[AsioEvent val] tag,
  flags: U32 val,
  arg: U32 val)
```
#### Parameters

*   event: [Pointer](builtin-Pointer.md)\[[AsioEvent](builtin-AsioEvent.md) val\] tag
*   flags: [U32](builtin-U32.md) val
*   arg: [U32](builtin-U32.md) val

---

### _read_again
<span class="source-link">[[Source]](src/builtin/stdin.md#L139)</span>


Resume reading.


```pony
be _read_again()
```

---

## Private Functions

### _set_notify
<span class="source-link">[[Source]](src/builtin/stdin.md#L98)</span>


Set the notifier.


```pony
fun ref _set_notify(
  notify: (InputNotify iso | None val))
: None val
```
#### Parameters

*   notify: ([InputNotify](builtin-InputNotify.md) iso | [None](builtin-None.md) val)

#### Returns

* [None](builtin-None.md) val

---

### _read
<span class="source-link">[[Source]](src/builtin/stdin.md#L145)</span>


Read a chunk of data from stdin. Read a maximum of _chunk_size bytes, send
ourself a resume message and stop reading to avoid starving other actors.


```pony
fun ref _read()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### _close_event
<span class="source-link">[[Source]](src/builtin/stdin.md#L200)</span>


Close the event.


```pony
fun ref _close_event()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

