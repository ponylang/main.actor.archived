# FileMode
<span class="source-link">[[Source]](src/files/file_mode.md#L1)</span>

This stores a UNIX-style mode broken out into a Bool for each bit. For other
operating systems, the mapping will be approximate. For example, on Windows,
if the file is readable all the read Bools will be set, and if the file is
writeable, all the write Bools will be set.

The default mode is read/write for the owner, read-only for everyone else.


```pony
class ref FileMode
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/file_mode.md#L1)</span>


```pony
new iso create()
: FileMode iso^
```

#### Returns

* [FileMode](files-FileMode.md) iso^

---

## Public fields

### var setuid: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L10)</span>

`true` if the SETUID bit is set.



---

### var setgid: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L13)</span>

`true` if the SETGID bit is set.



---

### var sticky: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L16)</span>

`true` if the sticky bit is set.



---

### var owner_read: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L19)</span>

`true` if the owning user can read the file.



---

### var owner_write: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L22)</span>

`true` if the owning user can write to the file.



---

### var owner_exec: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L25)</span>

`true` if the owning user can execute the file.



---

### var group_read: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L28)</span>

`true` if members of the owning group can read the file.



---

### var group_write: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L31)</span>

`true` if members of the owning group can write to the file.



---

### var group_exec: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L34)</span>

`true` if members of the owning group can execute the file.



---

### var any_read: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L37)</span>

`true` if every user can read the file.



---

### var any_write: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L40)</span>

`true` if every user can write to the file.



---

### var any_exec: [Bool](builtin-Bool.md) val
<span class="source-link">[[Source]](src/files/file_mode.md#L43)</span>

`true if every user can execute the file.



---

## Public Functions

### exec
<span class="source-link">[[Source]](src/files/file_mode.md#L46)</span>


Set the executable flag for everyone.


```pony
fun ref exec()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### shared
<span class="source-link">[[Source]](src/files/file_mode.md#L54)</span>


Set the write flag for everyone to the same as owner_write.


```pony
fun ref shared()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### group
<span class="source-link">[[Source]](src/files/file_mode.md#L61)</span>


Clear all of the any-user flags.


```pony
fun ref group()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### private
<span class="source-link">[[Source]](src/files/file_mode.md#L69)</span>


Clear all of the group and any-user flags.


```pony
fun ref private()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _os
<span class="source-link">[[Source]](src/files/file_mode.md#L80)</span>


Get the OS specific integer for a file mode. On Windows, if any read flag
is set, the path is made readable, and if any write flag is set, the path
is made writeable.


```pony
fun box _os()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

