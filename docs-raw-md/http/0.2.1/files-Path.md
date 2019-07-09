# Path
<span class="source-link">[[Source]](src/files/path.md#L10)</span>

Operations on paths that do not require a capability. The operations can be
used to manipulate path names, but give no access to the resulting paths.


```pony
primitive val Path
```

## Constructors

### create
<span class="source-link">[[Source]](src/files/path.md#L10)</span>


```pony
new val create()
: Path val^
```

#### Returns

* [Path](files-Path.md) val^

---

## Public Functions

### is_sep
<span class="source-link">[[Source]](src/files/path.md#L15)</span>


Determine if a byte is a path separator.


```pony
fun box is_sep(
  c: U8 val)
: Bool val
```
#### Parameters

*   c: [U8](builtin-U8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### sep
<span class="source-link">[[Source]](src/files/path.md#L25)</span>


Return the path separator as a string.


```pony
fun tag sep()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### is_abs
<span class="source-link">[[Source]](src/files/path.md#L31)</span>


Return true if the path is an absolute path.


```pony
fun box is_abs(
  path: String val)
: Bool val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### join
<span class="source-link">[[Source]](src/files/path.md#L45)</span>


Join two paths together. If the next_path is absolute, simply return it.
The returned path will be cleaned.


```pony
fun box join(
  path: String val,
  next_path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val
*   next_path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### clean
<span class="source-link">[[Source]](src/files/path.md#L69)</span>


Replace multiple separators with a single separator.
Convert / to the OS separator.
Remove instances of . from the path.
Remove instances of .. and the preceding path element from the path.
The result will have no trailing slash unless it is a root directory.
If the result would be empty, "." will be returned instead.


```pony
fun box clean(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### normcase
<span class="source-link">[[Source]](src/files/path.md#L188)</span>


Normalizes the case of path for the runtime platform.


```pony
fun box normcase(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### cwd
<span class="source-link">[[Source]](src/files/path.md#L200)</span>


Returns the program's working directory. Setting the working directory is
not supported, as it is not concurrency-safe.


```pony
fun box cwd()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### abs
<span class="source-link">[[Source]](src/files/path.md#L207)</span>


Returns a cleaned, absolute path.


```pony
fun box abs(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### rel
<span class="source-link">[[Source]](src/files/path.md#L217)</span>


Returns a path such that Path.join(to, Path.rel(to, target)) == target.
Raises an error if this isn't possible.


```pony
fun box rel(
  to: String val,
  target: String val)
: String val ?
```
#### Parameters

*   to: [String](builtin-String.md) val
*   target: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val ?

---

### split
<span class="source-link">[[Source]](src/files/path.md#L307)</span>


Splits the path into a pair, (head, tail) where tail is the last pathname
component and head is everything leading up to that. The tail part will
never contain a slash; if path ends in a slash, tail will be empty. If
there is no slash in path, head will be empty. If path is empty, both head
and tail are empty. The path in head will be cleaned before it is returned.
In all cases, join(head, tail) returns a path to the same location as path
(but the strings may differ). Also see the functions dir() and base().


```pony
fun box split(
  path: String val,
  separator: String val = call)
: (String val , String val)
```
#### Parameters

*   path: [String](builtin-String.md) val
*   separator: [String](builtin-String.md) val = call

#### Returns

* ([String](builtin-String.md) val , [String](builtin-String.md) val)

---

### base
<span class="source-link">[[Source]](src/files/path.md#L324)</span>


Return the path after the last separator, or the whole path if there is no
separator.
If `with_ext` is `false`, the extension as defined by the `ext()` method
will be omitted from the result.


```pony
fun box base(
  path: String val,
  with_ext: Bool val = true)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val
*   with_ext: [Bool](builtin-Bool.md) val = true

#### Returns

* [String](builtin-String.md) val

---

### dir
<span class="source-link">[[Source]](src/files/path.md#L349)</span>


Return a cleaned path before the last separator, or the whole path if there
is no separator.


```pony
fun box dir(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### ext
<span class="source-link">[[Source]](src/files/path.md#L360)</span>


Return the file extension, i.e. the part after the last dot as long as that
dot is after all separators. Return an empty string for no extension.


```pony
fun box ext(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### volume
<span class="source-link">[[Source]](src/files/path.md#L380)</span>


On Windows, this returns the drive letter or UNC base at the beginning of
the path, if there is one. Otherwise, this returns an empty string.


```pony
fun box volume(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### from_slash
<span class="source-link">[[Source]](src/files/path.md#L441)</span>


Changes each / in the path to the OS specific separator.


```pony
fun box from_slash(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### to_slash
<span class="source-link">[[Source]](src/files/path.md#L465)</span>


Changes each OS specific separator in the path to /.


```pony
fun box to_slash(
  path: String val)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val

---

### canonical
<span class="source-link">[[Source]](src/files/path.md#L489)</span>


Return the equivalent canonical absolute path. Raise an error if there
isn't one.


```pony
fun box canonical(
  path: String val)
: String val ?
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val ?

---

### is_list_sep
<span class="source-link">[[Source]](src/files/path.md#L503)</span>


Determine if a byte is a path list separator.


```pony
fun box is_list_sep(
  c: U8 val)
: Bool val
```
#### Parameters

*   c: [U8](builtin-U8.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### list_sep
<span class="source-link">[[Source]](src/files/path.md#L509)</span>


Return the path list separator as a string.


```pony
fun box list_sep()
: String val
```

#### Returns

* [String](builtin-String.md) val

---

### split_list
<span class="source-link">[[Source]](src/files/path.md#L515)</span>


Separate a list of paths into an array of cleaned paths.


```pony
fun box split_list(
  path: String val)
: Array[String val] iso^
```
#### Parameters

*   path: [String](builtin-String.md) val

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] iso^

---

### random
<span class="source-link">[[Source]](src/files/path.md#L534)</span>


Returns a pseudo-random base, suitable as a temporary file name or
directory name, but not guaranteed to not already exist.


```pony
fun box random(
  len: USize val = 6)
: String val
```
#### Parameters

*   len: [USize](builtin-USize.md) val = 6

#### Returns

* [String](builtin-String.md) val

---

### eq
<span class="source-link">[[Source]](src/files/path.md#L15)</span>


```pony
fun box eq(
  that: Path val)
: Bool val
```
#### Parameters

*   that: [Path](files-Path.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/files/path.md#L15)</span>


```pony
fun box ne(
  that: Path val)
: Bool val
```
#### Parameters

*   that: [Path](files-Path.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _drive_letter
<span class="source-link">[[Source]](src/files/path.md#L411)</span>


Look for a drive letter followed by a ':', returning true if we find it.


```pony
fun box _drive_letter(
  path: String val,
  offset: ISize val = 0)
: Bool val
```
#### Parameters

*   path: [String](builtin-String.md) val
*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [Bool](builtin-Bool.md) val

---

### _network_share
<span class="source-link">[[Source]](src/files/path.md#L424)</span>


Look for a host, a \, and a resource. Return the path up to that point if
we found one, otherwise an empty String.


```pony
fun box _network_share(
  path: String val,
  offset: ISize val = 0)
: String val
```
#### Parameters

*   path: [String](builtin-String.md) val
*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [String](builtin-String.md) val

---

