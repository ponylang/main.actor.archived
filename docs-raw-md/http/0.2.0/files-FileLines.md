# FileLines
<span class="source-link">[[Source]](src/files/file_lines.md#L3)</span>

Iterate over the lines in a file.

Returns lines without trailing line breaks.
Advances the file cursor to the end of each line returned from `next`.

This class buffers the file contents to accumulate full lines. If the file
does not contain linebreaks, the whole file content is read and buffered, which
might exceed memory resources. Take care.


```pony
class ref FileLines is
  Iterator[String iso^] ref
```

#### Implements

* [Iterator](builtin-Iterator.md)\[[String](builtin-String.md) iso^\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_lines.md#L24)</span>


Create a FileLines instance on a given file.

This instance returns lines from the position of the given `file`
at the time this constructor is called. Later manipulation of the file position
is not accounted for. As a result iterating with this class will always return the full
file content without gaps or repeated lines.

`min_read_size` determines the minimum amount of bytes to read from the file
in one go. This class keeps track of the line lengths in the current file
and uses the length of the last line as amount of bytes to read next, but it
will never read less than `min_read_size`.


```pony
new ref create(
  file: File ref,
  min_read_size: USize val = 256)
: FileLines ref^
```
#### Parameters

*   file: [File](files-File.md) ref
*   min_read_size: [USize](builtin-USize.md) val = 256

#### Returns

* [FileLines](files-FileLines.md) ref^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/files/file_lines.md#L45)</span>


```pony
fun ref has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/files/file_lines.md#L48)</span>


Returns the next line in the file.


```pony
fun ref next()
: String iso^ ?
```

#### Returns

* [String](builtin-String.md) iso^ ?

---

## Private Functions

### _read_line
<span class="source-link">[[Source]](src/files/file_lines.md#L71)</span>


```pony
fun ref _read_line()
: String iso^ ?
```

#### Returns

* [String](builtin-String.md) iso^ ?

---

### _fill_buffer
<span class="source-link">[[Source]](src/files/file_lines.md#L84)</span>


read from file and fill the reader-buffer.

Returns `true` if data could be read from the file.

After a successful reading operation `_buffer_cursor` is updated.


```pony
fun ref _fill_buffer()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### _read_last_line
<span class="source-link">[[Source]](src/files/file_lines.md#L116)</span>


```pony
fun ref _read_last_line()
: String iso^ ?
```

#### Returns

* [String](builtin-String.md) iso^ ?

---

### _inc_public_file_cursor
<span class="source-link">[[Source]](src/files/file_lines.md#L121)</span>


```pony
fun ref _inc_public_file_cursor(
  amount: USize val)
: None val
```
#### Parameters

*   amount: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

