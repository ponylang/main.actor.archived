# String
<span class="source-link">[[Source]](src/builtin/string.md#L9)</span>

  A String is an ordered collection of characters.

  Strings don't specify an encoding.

  Example usage of some common String methods:

```pony
actor Main
  new create(env: Env) =>
    try
      // construct a new string
      let str = "Hello"

      // make an uppercased version
      let str_upper = str.upper()
      // make a reversed version
      let str_reversed = str.reverse()

      // add " world" to the end of our original string
      let str_new = str.add(" world")

      // count occurrences of letter "l"
      let count = str_new.count("l")

      // find first occurrence of letter "w"
      let first_w = str_new.find("w")
      // find first occurrence of letter "d"
      let first_d = str_new.find("d")

      // get substring capturing "world"
      let substr = str_new.substring(first_w, first_d+1)
      // clone substring
      let substr_clone = substr.clone()

      // print our substr
      env.out.print(consume substr)
  end
```


```pony
class val String is
  Seq[U8 val] ref,
  Comparable[String box] ref,
  Stringable box
```

#### Implements

* [Seq](builtin-Seq.md)\[[U8](builtin-U8.md) val\] ref
* [Comparable](builtin-Comparable.md)\[[String](builtin-String.md) box\] ref
* [Stringable](builtin-Stringable.md) box

---

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/string.md#L54)</span>


An empty string. Enough space for len bytes is reserved.


```pony
new ref create(
  len: USize val = 0)
: String ref^
```
#### Parameters

*   len: [USize](builtin-USize.md) val = 0

#### Returns

* [String](builtin-String.md) ref^

---

### from_array
<span class="source-link">[[Source]](src/builtin/string.md#L63)</span>


Create a string from an array, reusing the underlying data pointer.


```pony
new val from_array(
  data: Array[U8 val] val)
: String val^
```
#### Parameters

*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val

#### Returns

* [String](builtin-String.md) val^

---

### from_iso_array
<span class="source-link">[[Source]](src/builtin/string.md#L71)</span>


Create a string from an array, reusing the underlying data pointer


```pony
new iso from_iso_array(
  data: Array[U8 val] iso)
: String iso^
```
#### Parameters

*   data: [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso

#### Returns

* [String](builtin-String.md) iso^

---

### from_cpointer
<span class="source-link">[[Source]](src/builtin/string.md#L82)</span>


Return a string from binary pointer data without making a
copy. This must be done only with C-FFI functions that return
pony_alloc'd character arrays. If a null pointer is given then an
empty string is returned.


```pony
new ref from_cpointer(
  str: Pointer[U8 val] ref,
  len: USize val,
  alloc: USize val = 0)
: String ref^
```
#### Parameters

*   str: [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] ref
*   len: [USize](builtin-USize.md) val
*   alloc: [USize](builtin-USize.md) val = 0

#### Returns

* [String](builtin-String.md) ref^

---

### from_cstring
<span class="source-link">[[Source]](src/builtin/string.md#L100)</span>


Return a string from a pointer to a null-terminated cstring
without making a copy. The data is not copied. This must be done
only with C-FFI functions that return pony_alloc'd character
arrays. The pointer is scanned for the first null byte, which will
be interpreted as the null terminator. Note that the scan is
unbounded; the pointed to data must be null-terminated within
the allocated array to preserve memory safety. If a null pointer
is given then an empty string is returned.


```pony
new ref from_cstring(
  str: Pointer[U8 val] ref)
: String ref^
```
#### Parameters

*   str: [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] ref

#### Returns

* [String](builtin-String.md) ref^

---

### copy_cpointer
<span class="source-link">[[Source]](src/builtin/string.md#L128)</span>


Create a string by copying a fixed number of bytes from a pointer.


```pony
new ref copy_cpointer(
  str: Pointer[U8 val] box,
  len: USize val)
: String ref^
```
#### Parameters

*   str: [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] box
*   len: [USize](builtin-USize.md) val

#### Returns

* [String](builtin-String.md) ref^

---

### copy_cstring
<span class="source-link">[[Source]](src/builtin/string.md#L144)</span>


Create a string by copying a null-terminated C string. Note that
the scan is unbounded; the pointed to data must be null-terminated
within the allocated array to preserve memory safety. If a null
pointer is given then an empty string is returned.


```pony
new ref copy_cstring(
  str: Pointer[U8 val] box)
: String ref^
```
#### Parameters

*   str: [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] box

#### Returns

* [String](builtin-String.md) ref^

---

### from_utf32
<span class="source-link">[[Source]](src/builtin/string.md#L169)</span>


Create a UTF-8 string from a single UTF-32 code point.


```pony
new ref from_utf32(
  value: U32 val)
: String ref^
```
#### Parameters

*   value: [U32](builtin-U32.md) val

#### Returns

* [String](builtin-String.md) ref^

---

## Public Functions

### push_utf32
<span class="source-link">[[Source]](src/builtin/string.md#L189)</span>


Push a UTF-32 code point.


```pony
fun ref push_utf32(
  value: U32 val)
: None val
```
#### Parameters

*   value: [U32](builtin-U32.md) val

#### Returns

* [None](builtin-None.md) val

---

### cpointer
<span class="source-link">[[Source]](src/builtin/string.md#L216)</span>


Returns a C compatible pointer to the underlying string allocation.


```pony
fun box cpointer(
  offset: USize val = 0)
: Pointer[U8 val] tag
```
#### Parameters

*   offset: [USize](builtin-USize.md) val = 0

#### Returns

* [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] tag

---

### cstring
<span class="source-link">[[Source]](src/builtin/string.md#L222)</span>


Returns a C compatible pointer to a null-terminated version of the
string, safe to pass to an FFI function that doesn't accept a size
argument, expecting a null-terminator. If the underlying string
is already null terminated, this is returned; otherwise the string
is copied into a new, null-terminated allocation.


```pony
fun box cstring()
: Pointer[U8 val] tag
```

#### Returns

* [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] tag

---

### array
<span class="source-link">[[Source]](src/builtin/string.md#L239)</span>


Returns an Array[U8] that reuses the underlying data pointer.


```pony
fun val array()
: Array[U8 val] val
```

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] val

---

### iso_array
<span class="source-link">[[Source]](src/builtin/string.md#L247)</span>


Returns an Array[U8] iso that reuses the underlying data pointer.


```pony
fun iso iso_array()
: Array[U8 val] iso^
```

#### Returns

* [Array](builtin-Array.md)\[[U8](builtin-U8.md) val\] iso^

---

### size
<span class="source-link">[[Source]](src/builtin/string.md#L255)</span>


Returns the length of the string data in bytes.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### codepoints
<span class="source-link">[[Source]](src/builtin/string.md#L261)</span>


Returns the number of unicode code points in the string between the two
offsets. Index range [`from` .. `to`) is half-open.


```pony
fun box codepoints(
  from: ISize val = 0,
  to: ISize val = call)
: USize val
```
#### Parameters

*   from: [ISize](builtin-ISize.md) val = 0
*   to: [ISize](builtin-ISize.md) val = call

#### Returns

* [USize](builtin-USize.md) val

---

### space
<span class="source-link">[[Source]](src/builtin/string.md#L284)</span>


Returns the space available for data, not including the null terminator.


```pony
fun box space()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### reserve
<span class="source-link">[[Source]](src/builtin/string.md#L290)</span>


Reserve space for len bytes. An additional byte will be reserved for the
null terminator.


```pony
fun ref reserve(
  len: USize val)
: None val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### compact
<span class="source-link">[[Source]](src/builtin/string.md#L306)</span>


Try to remove unused space, making it available for garbage collection. The
request may be ignored. The string is returned to allow call chaining.


```pony
fun ref compact()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### recalc
<span class="source-link">[[Source]](src/builtin/string.md#L325)</span>


Recalculates the string length. This is only needed if the string is
changed via an FFI call. If a null terminator byte is not found within the
allocated length, the size will not be changed.


```pony
fun ref recalc()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### truncate
<span class="source-link">[[Source]](src/builtin/string.md#L341)</span>


Truncates the string at the minimum of len and space. Ensures there is a
null terminator. Does not check for null terminators inside the string.

Note that memory is not freed by this operation.


```pony
fun ref truncate(
  len: USize val)
: None val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

### trim_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L357)</span>


Trim the string to a portion of itself, covering `from` until `to`.
Unlike slice, the operation does not allocate a new string nor copy
elements.


```pony
fun ref trim_in_place(
  from: USize val = 0,
  to: USize val = call)
: None val
```
#### Parameters

*   from: [USize](builtin-USize.md) val = 0
*   to: [USize](builtin-USize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### trim
<span class="source-link">[[Source]](src/builtin/string.md#L385)</span>


Return a shared portion of this string, covering `from` until `to`.
Both the original and the new string are immutable, as they share memory.
The operation does not allocate a new string pointer nor copy elements.


```pony
fun val trim(
  from: USize val = 0,
  to: USize val = call)
: String val
```
#### Parameters

*   from: [USize](builtin-USize.md) val = 0
*   to: [USize](builtin-USize.md) val = call

#### Returns

* [String](builtin-String.md) val

---

### chop
<span class="source-link">[[Source]](src/builtin/string.md#L409)</span>


Chops the string in half at the split point requested and returns both
the left and right portions. The original string is trimmed in place and
returned as the left portion. If the split point is larger than the
string, the left portion is the original string and the right portion
is a new empty string.
Both strings are isolated and mutable, as they do not share memory.
The operation does not allocate a new string pointer nor copy elements.


```pony
fun iso chop(
  split_point: USize val)
: (String iso^ , String iso^)
```
#### Parameters

*   split_point: [USize](builtin-USize.md) val

#### Returns

* ([String](builtin-String.md) iso^ , [String](builtin-String.md) iso^)

---

### unchop
<span class="source-link">[[Source]](src/builtin/string.md#L435)</span>


Unchops two iso strings to return the original string they were chopped
from. Both input strings are isolated and mutable and were originally
chopped from a single string. This function checks that they are indeed two
strings chopped from the same original string and can be unchopped before
doing the unchopping and returning the unchopped string. If the two strings
cannot be unchopped it returns both strings without modifying them.
The operation does not allocate a new string pointer nor copy elements.


```pony
fun iso unchop(
  b: String iso)
: ((String iso^ , String iso^) | String iso^)
```
#### Parameters

*   b: [String](builtin-String.md) iso

#### Returns

* (([String](builtin-String.md) iso^ , [String](builtin-String.md) iso^) | [String](builtin-String.md) iso^)

---

### is_null_terminated
<span class="source-link">[[Source]](src/builtin/string.md#L477)</span>


Return true if the string is null-terminated and safe to pass to an FFI
function that doesn't accept a size argument, expecting a null-terminator.
This method checks that there is a null byte just after the final position
of populated bytes in the string, but does not check for other null bytes
which may be present earlier in the content of the string.
If you need a null-terminated copy of this string, use the clone method.


```pony
fun box is_null_terminated()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### utf32
<span class="source-link">[[Source]](src/builtin/string.md#L488)</span>


Return a UTF32 representation of the character at the given offset and the
number of bytes needed to encode that character. If the offset does not
point to the beginning of a valid UTF8 encoding, return 0xFFFD (the unicode
replacement character) and a length of one. Raise an error if the offset is
out of bounds.


```pony
fun box utf32(
  offset: ISize val)
: (U32 val , U8 val) ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val

#### Returns

* ([U32](builtin-U32.md) val , [U8](builtin-U8.md) val) ?

---

### apply
<span class="source-link">[[Source]](src/builtin/string.md#L574)</span>


Returns the i-th byte. Raise an error if the index is out of bounds.


```pony
fun box apply(
  i: USize val)
: U8 val ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

### update
<span class="source-link">[[Source]](src/builtin/string.md#L580)</span>


Change the i-th byte. Raise an error if the index is out of bounds.


```pony
fun ref update(
  i: USize val,
  value: U8 val)
: U8 val ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   value: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

### at_offset
<span class="source-link">[[Source]](src/builtin/string.md#L590)</span>


Returns the byte at the given offset. Raise an error if the offset is out
of bounds.


```pony
fun box at_offset(
  offset: ISize val)
: U8 val ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

### update_offset
<span class="source-link">[[Source]](src/builtin/string.md#L597)</span>


Changes a byte in the string, returning the previous byte at that offset.
Raise an error if the offset is out of bounds.


```pony
fun ref update_offset(
  offset: ISize val,
  value: U8 val)
: U8 val ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val
*   value: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

### clone
<span class="source-link">[[Source]](src/builtin/string.md#L604)</span>


Returns a copy of the string. The resulting string is
null-terminated even if the original is not.


```pony
fun box clone()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### repeat_str
<span class="source-link">[[Source]](src/builtin/string.md#L616)</span>


Returns a copy of the string repeated `num` times with an optional
separator added inbetween repeats.


```pony
fun box repeat_str(
  num: USize val = 1,
  sep: String val = "")
: String iso^
```
#### Parameters

*   num: [USize](builtin-USize.md) val = 1
*   sep: [String](builtin-String.md) val = ""

#### Returns

* [String](builtin-String.md) iso^

---

### mul
<span class="source-link">[[Source]](src/builtin/string.md#L634)</span>


Returns a copy of the string repeated `num` times.


```pony
fun box mul(
  num: USize val)
: String iso^
```
#### Parameters

*   num: [USize](builtin-USize.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### find
<span class="source-link">[[Source]](src/builtin/string.md#L640)</span>


Return the index of the n-th instance of s in the string starting from the
beginning. Raise an error if there is no n-th occurrence of s or s is empty.


```pony
fun box find(
  s: String box,
  offset: ISize val = 0,
  nth: USize val = 0)
: ISize val ?
```
#### Parameters

*   s: [String](builtin-String.md) box
*   offset: [ISize](builtin-ISize.md) val = 0
*   nth: [USize](builtin-USize.md) val = 0

#### Returns

* [ISize](builtin-ISize.md) val ?

---

### rfind
<span class="source-link">[[Source]](src/builtin/string.md#L669)</span>


Return the index of n-th instance of `s` in the string starting from the
end. The `offset` represents the highest index to included in the search.
Raise an error if there is no n-th occurrence of `s` or `s` is empty.


```pony
fun box rfind(
  s: String box,
  offset: ISize val = call,
  nth: USize val = 0)
: ISize val ?
```
#### Parameters

*   s: [String](builtin-String.md) box
*   offset: [ISize](builtin-ISize.md) val = call
*   nth: [USize](builtin-USize.md) val = 0

#### Returns

* [ISize](builtin-ISize.md) val ?

---

### contains
<span class="source-link">[[Source]](src/builtin/string.md#L700)</span>


Returns true if contains s as a substring, false otherwise.


```pony
fun box contains(
  s: String box,
  offset: ISize val = 0,
  nth: USize val = 0)
: Bool val
```
#### Parameters

*   s: [String](builtin-String.md) box
*   offset: [ISize](builtin-ISize.md) val = 0
*   nth: [USize](builtin-USize.md) val = 0

#### Returns

* [Bool](builtin-Bool.md) val

---

### count
<span class="source-link">[[Source]](src/builtin/string.md#L728)</span>


Counts the non-overlapping occurrences of s in the string.


```pony
fun box count(
  s: String box,
  offset: ISize val = 0)
: USize val
```
#### Parameters

*   s: [String](builtin-String.md) box
*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [USize](builtin-USize.md) val

---

### at
<span class="source-link">[[Source]](src/builtin/string.md#L751)</span>


Returns true if the substring s is present at the given offset.


```pony
fun box at(
  s: String box,
  offset: ISize val = 0)
: Bool val
```
#### Parameters

*   s: [String](builtin-String.md) box
*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [Bool](builtin-Bool.md) val

---

### delete
<span class="source-link">[[Source]](src/builtin/string.md#L763)</span>


Delete len bytes at the supplied offset, compacting the string in place.


```pony
fun ref delete(
  offset: ISize val,
  len: USize val = 1)
: None val
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val
*   len: [USize](builtin-USize.md) val = 1

#### Returns

* [None](builtin-None.md) val

---

### substring
<span class="source-link">[[Source]](src/builtin/string.md#L776)</span>


Returns a substring. Index range [`from` .. `to`) is half-open.
Returns an empty string if nothing is in the range.

Note that this operation allocates a new string to be returned. For
similar operations that don't allocate a new string, see `trim` and
`trim_in_place`.


```pony
fun box substring(
  from: ISize val,
  to: ISize val = call)
: String iso^
```
#### Parameters

*   from: [ISize](builtin-ISize.md) val
*   to: [ISize](builtin-ISize.md) val = call

#### Returns

* [String](builtin-String.md) iso^

---

### lower
<span class="source-link">[[Source]](src/builtin/string.md#L799)</span>


Returns a lower case version of the string.


```pony
fun box lower()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### lower_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L807)</span>


Transforms the string to lower case. Currently only knows ASCII case.


```pony
fun ref lower_in_place()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### upper
<span class="source-link">[[Source]](src/builtin/string.md#L823)</span>


Returns an upper case version of the string. Currently only knows ASCII
case.


```pony
fun box upper()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### upper_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L832)</span>


Transforms the string to upper case.


```pony
fun ref upper_in_place()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### reverse
<span class="source-link">[[Source]](src/builtin/string.md#L848)</span>


Returns a reversed version of the string.


```pony
fun box reverse()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### reverse_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L856)</span>


Reverses the byte order in the string. This needs to be changed to handle
UTF-8 correctly.


```pony
fun ref reverse_in_place()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### push
<span class="source-link">[[Source]](src/builtin/string.md#L874)</span>


Add a byte to the end of the string.


```pony
fun ref push(
  value: U8 val)
: None val
```
#### Parameters

*   value: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### pop
<span class="source-link">[[Source]](src/builtin/string.md#L883)</span>


Remove a byte from the end of the string.


```pony
fun ref pop()
: U8 val ?
```

#### Returns

* [U8](builtin-U8.md) val ?

---

### unshift
<span class="source-link">[[Source]](src/builtin/string.md#L894)</span>


Adds a byte to the beginning of the string.


```pony
fun ref unshift(
  value: U8 val)
: None val
```
#### Parameters

*   value: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### shift
<span class="source-link">[[Source]](src/builtin/string.md#L908)</span>


Removes a byte from the beginning of the string.


```pony
fun ref shift()
: U8 val ?
```

#### Returns

* [U8](builtin-U8.md) val ?

---

### append
<span class="source-link">[[Source]](src/builtin/string.md#L921)</span>


Append the elements from a sequence, starting from the given offset.


```pony
fun ref append(
  seq: ReadSeq[U8 val] box,
  offset: USize val = 0,
  len: USize val = call)
: None val
```
#### Parameters

*   seq: [ReadSeq](builtin-ReadSeq.md)\[[U8](builtin-U8.md) val\] box
*   offset: [USize](builtin-USize.md) val = 0
*   len: [USize](builtin-USize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### concat
<span class="source-link">[[Source]](src/builtin/string.md#L949)</span>


Add len iterated bytes to the end of the string, starting from the given
offset.


```pony
fun ref concat(
  iter: Iterator[U8 val] ref,
  offset: USize val = 0,
  len: USize val = call)
: None val
```
#### Parameters

*   iter: [Iterator](builtin-Iterator.md)\[[U8](builtin-U8.md) val\] ref
*   offset: [USize](builtin-USize.md) val = 0
*   len: [USize](builtin-USize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### clear
<span class="source-link">[[Source]](src/builtin/string.md#L980)</span>


Truncate the string to zero length.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### insert
<span class="source-link">[[Source]](src/builtin/string.md#L987)</span>


Returns a version of the string with the given string inserted at the given
offset.


```pony
fun box insert(
  offset: ISize val,
  that: String val)
: String iso^
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val
*   that: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) iso^

---

### insert_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L996)</span>


Inserts the given string at the given offset. Appends the string if the
offset is out of bounds.


```pony
fun ref insert_in_place(
  offset: ISize val,
  that: String box)
: None val
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val
*   that: [String](builtin-String.md) box

#### Returns

* [None](builtin-None.md) val

---

### insert_byte
<span class="source-link">[[Source]](src/builtin/string.md#L1009)</span>


Inserts a byte at the given offset. Appends if the offset is out of bounds.


```pony
fun ref insert_byte(
  offset: ISize val,
  value: U8 val)
: None val
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val
*   value: [U8](builtin-U8.md) val

#### Returns

* [None](builtin-None.md) val

---

### cut
<span class="source-link">[[Source]](src/builtin/string.md#L1021)</span>


Returns a version of the string with the given range deleted.
Index range [`from` .. `to`) is half-open.


```pony
fun box cut(
  from: ISize val,
  to: ISize val = call)
: String iso^
```
#### Parameters

*   from: [ISize](builtin-ISize.md) val
*   to: [ISize](builtin-ISize.md) val = call

#### Returns

* [String](builtin-String.md) iso^

---

### cut_in_place
<span class="source-link">[[Source]](src/builtin/string.md#L1030)</span>


Cuts the given range out of the string.
Index range [`from` .. `to`) is half-open.


```pony
fun ref cut_in_place(
  from: ISize val,
  to: ISize val = call)
: None val
```
#### Parameters

*   from: [ISize](builtin-ISize.md) val
*   to: [ISize](builtin-ISize.md) val = call

#### Returns

* [None](builtin-None.md) val

---

### remove
<span class="source-link">[[Source]](src/builtin/string.md#L1052)</span>


Remove all instances of s from the string. Returns the count of removed
instances.


```pony
fun ref remove(
  s: String box)
: USize val
```
#### Parameters

*   s: [String](builtin-String.md) box

#### Returns

* [USize](builtin-USize.md) val

---

### replace
<span class="source-link">[[Source]](src/builtin/string.md#L1069)</span>


Replace up to n occurrences of `from` in `this` with `to`. If n is 0, all
occurrences will be replaced. Returns the count of replaced occurrences.


```pony
fun ref replace(
  from: String box,
  to: String box,
  n: USize val = 0)
: USize val
```
#### Parameters

*   from: [String](builtin-String.md) box
*   to: [String](builtin-String.md) box
*   n: [USize](builtin-USize.md) val = 0

#### Returns

* [USize](builtin-USize.md) val

---

### split_by
<span class="source-link">[[Source]](src/builtin/string.md#L1094)</span>


Split the string into an array of strings that are delimited by `delim` in
the original string. If `n > 0`, then the split count is limited to n.

Adjacent delimiters result in a zero length entry in the array. For
example, `"1,,2".split(",") => ["1", "", "2"]`.

An empty delimiter results in an array that contains a single element equal
to the whole string.


```pony
fun box split_by(
  delim: String val,
  n: USize val = call)
: Array[String val] iso^
```
#### Parameters

*   delim: [String](builtin-String.md) val
*   n: [USize](builtin-USize.md) val = call

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] iso^

---

### split
<span class="source-link">[[Source]](src/builtin/string.md#L1125)</span>


Split the string into an array of strings. Any character in the delimiter
string is accepted as a delimiter. If `n > 0`, then the split count is
limited to n.

Adjacent delimiters result in a zero length entry in the array. For
example, `"1,,2".split(",") => ["1", "", "2"]`.


```pony
fun box split(
  delim: String val = " 	
",
  n: USize val = 0)
: Array[String val] iso^
```
#### Parameters

*   delim: [String](builtin-String.md) val = " 	
"
*   n: [USize](builtin-USize.md) val = 0

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] iso^

---

### strip
<span class="source-link">[[Source]](src/builtin/string.md#L1185)</span>


Remove all leading and trailing characters from the string that are in s.


```pony
fun ref strip(
  s: String box = " 	
")
: None val
```
#### Parameters

*   s: [String](builtin-String.md) box = " 	
"

#### Returns

* [None](builtin-None.md) val

---

### rstrip
<span class="source-link">[[Source]](src/builtin/string.md#L1191)</span>


Remove all trailing characters within the string that are in s. By default,
trailing whitespace is removed.


```pony
fun ref rstrip(
  s: String box = " 	
")
: None val
```
#### Parameters

*   s: [String](builtin-String.md) box = " 	
"

#### Returns

* [None](builtin-None.md) val

---

### lstrip
<span class="source-link">[[Source]](src/builtin/string.md#L1223)</span>


Remove all leading characters within the string that are in s. By default,
leading whitespace is removed.


```pony
fun ref lstrip(
  s: String box = " 	
")
: None val
```
#### Parameters

*   s: [String](builtin-String.md) box = " 	
"

#### Returns

* [None](builtin-None.md) val

---

### add
<span class="source-link">[[Source]](src/builtin/string.md#L1264)</span>


Return a string that is a concatenation of this and that.


```pony
fun box add(
  that: String box)
: String val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [String](builtin-String.md) val

---

### join
<span class="source-link">[[Source]](src/builtin/string.md#L1272)</span>


Return a string that is a concatenation of the strings in data, using this
as a separator.


```pony
fun box join(
  data: Iterator[Stringable box] ref)
: String iso^
```
#### Parameters

*   data: [Iterator](builtin-Iterator.md)\[[Stringable](builtin-Stringable.md) box\] ref

#### Returns

* [String](builtin-String.md) iso^

---

### compare
<span class="source-link">[[Source]](src/builtin/string.md#L1289)</span>


Lexically compare two strings.


```pony
fun box compare(
  that: String box)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

### compare_sub
<span class="source-link">[[Source]](src/builtin/string.md#L1295)</span>


Lexically compare at most `n` bytes of the substring of `this` starting at
`offset` with the substring of `that` starting at `that_offset`. The
comparison is case sensitive unless `ignore_case` is `true`.

If the substring of `this` is a proper prefix of the substring of `that`,
then `this` is `Less` than `that`. Likewise, if `that` is a proper prefix of
`this`, then `this` is `Greater` than `that`.

Both `offset` and `that_offset` can be negative, in which case the offsets
are computed from the end of the string.

If `n + offset` is greater than the length of `this`, or `n + that_offset`
is greater than the length of `that`, then the number of positions compared
will be reduced to the length of the longest substring.

Needs to be made UTF-8 safe.


```pony
fun box compare_sub(
  that: String box,
  n: USize val,
  offset: ISize val = 0,
  that_offset: ISize val = 0,
  ignore_case: Bool val = false)
: (Less val | Equal val | Greater val)
```
#### Parameters

*   that: [String](builtin-String.md) box
*   n: [USize](builtin-USize.md) val
*   offset: [ISize](builtin-ISize.md) val = 0
*   that_offset: [ISize](builtin-ISize.md) val = 0
*   ignore_case: [Bool](builtin-Bool.md) val = false

#### Returns

* ([Less](builtin-Less.md) val | [Equal](builtin-Equal.md) val | [Greater](builtin-Greater.md) val)

---

### eq
<span class="source-link">[[Source]](src/builtin/string.md#L1352)</span>


Returns true if the two strings have the same contents.


```pony
fun box eq(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### lt
<span class="source-link">[[Source]](src/builtin/string.md#L1362)</span>


Returns true if this is lexically less than that. Needs to be made UTF-8
safe.


```pony
fun box lt(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### le
<span class="source-link">[[Source]](src/builtin/string.md#L1380)</span>


Returns true if this is lexically less than or equal to that. Needs to be
made UTF-8 safe.


```pony
fun box le(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### offset_to_index
<span class="source-link">[[Source]](src/builtin/string.md#L1398)</span>


```pony
fun box offset_to_index(
  i: ISize val)
: USize val
```
#### Parameters

*   i: [ISize](builtin-ISize.md) val

#### Returns

* [USize](builtin-USize.md) val

---

### bool
<span class="source-link">[[Source]](src/builtin/string.md#L1401)</span>


```pony
fun box bool()
: Bool val ?
```

#### Returns

* [Bool](builtin-Bool.md) val ?

---

### i8
<span class="source-link">[[Source]](src/builtin/string.md#L1409)</span>


```pony
fun box i8(
  base: U8 val = 0)
: I8 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [I8](builtin-I8.md) val ?

---

### i16
<span class="source-link">[[Source]](src/builtin/string.md#L1410)</span>


```pony
fun box i16(
  base: U8 val = 0)
: I16 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [I16](builtin-I16.md) val ?

---

### i32
<span class="source-link">[[Source]](src/builtin/string.md#L1411)</span>


```pony
fun box i32(
  base: U8 val = 0)
: I32 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [I32](builtin-I32.md) val ?

---

### i64
<span class="source-link">[[Source]](src/builtin/string.md#L1412)</span>


```pony
fun box i64(
  base: U8 val = 0)
: I64 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [I64](builtin-I64.md) val ?

---

### i128
<span class="source-link">[[Source]](src/builtin/string.md#L1413)</span>


```pony
fun box i128(
  base: U8 val = 0)
: I128 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [I128](builtin-I128.md) val ?

---

### ilong
<span class="source-link">[[Source]](src/builtin/string.md#L1414)</span>


```pony
fun box ilong(
  base: U8 val = 0)
: ILong val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [ILong](builtin-ILong.md) val ?

---

### isize
<span class="source-link">[[Source]](src/builtin/string.md#L1415)</span>


```pony
fun box isize(
  base: U8 val = 0)
: ISize val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [ISize](builtin-ISize.md) val ?

---

### u8
<span class="source-link">[[Source]](src/builtin/string.md#L1416)</span>


```pony
fun box u8(
  base: U8 val = 0)
: U8 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [U8](builtin-U8.md) val ?

---

### u16
<span class="source-link">[[Source]](src/builtin/string.md#L1417)</span>


```pony
fun box u16(
  base: U8 val = 0)
: U16 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [U16](builtin-U16.md) val ?

---

### u32
<span class="source-link">[[Source]](src/builtin/string.md#L1418)</span>


```pony
fun box u32(
  base: U8 val = 0)
: U32 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [U32](builtin-U32.md) val ?

---

### u64
<span class="source-link">[[Source]](src/builtin/string.md#L1419)</span>


```pony
fun box u64(
  base: U8 val = 0)
: U64 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [U64](builtin-U64.md) val ?

---

### u128
<span class="source-link">[[Source]](src/builtin/string.md#L1420)</span>


```pony
fun box u128(
  base: U8 val = 0)
: U128 val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [U128](builtin-U128.md) val ?

---

### ulong
<span class="source-link">[[Source]](src/builtin/string.md#L1421)</span>


```pony
fun box ulong(
  base: U8 val = 0)
: ULong val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [ULong](builtin-ULong.md) val ?

---

### usize
<span class="source-link">[[Source]](src/builtin/string.md#L1422)</span>


```pony
fun box usize(
  base: U8 val = 0)
: USize val ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val = 0

#### Returns

* [USize](builtin-USize.md) val ?

---

### read_int\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/string.md#L1435)</span>


Read an integer from the specified location in this string. The integer
value read and the number of characters consumed are reported.
The base parameter specifies the base to use, 0 indicates using the prefix,
if any, to detect base 2, 10 or 16.
If no integer is found at the specified location, then (0, 0) is returned,
since no characters have been used.
An integer out of range for the target type throws an error.
A leading minus is allowed for signed integer types.
Underscore characters are allowed throughout the integer and are ignored.


```pony
fun box read_int[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val) & Integer[A] val)](
  offset: ISize val = 0,
  base: U8 val = 0)
: (A , USize val) ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val = 0
*   base: [U8](builtin-U8.md) val = 0

#### Returns

* (A , [USize](builtin-USize.md) val) ?

---

### f32
<span class="source-link">[[Source]](src/builtin/string.md#L1549)</span>


Convert this string starting at the given offset
to a 32-bit floating point number ([F32](builtin-F32.md)).

This method errors if this string cannot be parsed to a float,
if the result would over- or underflow,
the offset exceeds the size of this string or
there are leftover characters in the string after conversion.

Examples:

```pony
"1.5".f32()? == F32(1.5)
"1.19208e-07".f32()? == F32(1.19208e-07)
"NaN".f32()?.nan() == true
```


```pony
fun box f32(
  offset: ISize val = 0)
: F32 val ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [F32](builtin-F32.md) val ?

---

### f64
<span class="source-link">[[Source]](src/builtin/string.md#L1582)</span>


Convert this string starting at the given offset
to a 64-bit floating point number ([F64](builtin-F64.md)).

This method errors if this string cannot be parsed to a float,
if the result would over- or underflow,
the offset exceeds the size of this string or
there are leftover characters in the string after conversion.

Examples:

```pony
"1.5".f64()? == F64(1.5)
"1.19208e-07".f64()? == F64(1.19208e-07)
"Inf".f64()?.infinite() == true
```


```pony
fun box f64(
  offset: ISize val = 0)
: F64 val ?
```
#### Parameters

*   offset: [ISize](builtin-ISize.md) val = 0

#### Returns

* [F64](builtin-F64.md) val ?

---

### hash
<span class="source-link">[[Source]](src/builtin/string.md#L1615)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### hash64
<span class="source-link">[[Source]](src/builtin/string.md#L1618)</span>


```pony
fun box hash64()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### string
<span class="source-link">[[Source]](src/builtin/string.md#L1621)</span>


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### values
<span class="source-link">[[Source]](src/builtin/string.md#L1624)</span>


Return an iterator over the bytes in the string.


```pony
fun box values()
: StringBytes ref^
```

#### Returns

* [StringBytes](builtin-StringBytes.md) ref^

---

### runes
<span class="source-link">[[Source]](src/builtin/string.md#L1630)</span>


Return an iterator over the codepoints in the string.


```pony
fun box runes()
: StringRunes ref^
```

#### Returns

* [StringRunes](builtin-StringRunes.md) ref^

---

### ge



```pony
fun box ge(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### gt



```pony
fun box gt(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  that: String box)
: Bool val
```
#### Parameters

*   that: [String](builtin-String.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _copy_to
<span class="source-link">[[Source]](src/builtin/string.md#L209)</span>


Copy copy_len characters from this to that at specified offsets.


```pony
fun box _copy_to(
  ptr: Pointer[U8 val] ref,
  copy_len: USize val,
  from_offset: USize val = 0,
  to_offset: USize val = 0)
: None val
```
#### Parameters

*   ptr: [Pointer](builtin-Pointer.md)\[[U8](builtin-U8.md) val\] ref
*   copy_len: [USize](builtin-USize.md) val
*   from_offset: [USize](builtin-USize.md) val = 0
*   to_offset: [USize](builtin-USize.md) val = 0

#### Returns

* [None](builtin-None.md) val

---

### _append
<span class="source-link">[[Source]](src/builtin/string.md#L1253)</span>


```pony
fun iso _append(
  s: String box)
: String iso^
```
#### Parameters

*   s: [String](builtin-String.md) box

#### Returns

* [String](builtin-String.md) iso^

---

### _to_int\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/string.md#L1424)</span>


Convert the *whole* string to the specified type.
If there are any other characters in the string, or the integer found is
out of range for the target type then an error is thrown.


```pony
fun box _to_int[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val) & Integer[A] val)](
  base: U8 val)
: A ?
```
#### Parameters

*   base: [U8](builtin-U8.md) val

#### Returns

* A ?

---

### _read_int_base\[A: (([I8](builtin-I8.md) val | [I16](builtin-I16.md) val | [I32](builtin-I32.md) val | [I64](builtin-I64.md) val | [I128](builtin-I128.md) val | [ILong](builtin-ILong.md) val | [ISize](builtin-ISize.md) val | [U8](builtin-U8.md) val | [U16](builtin-U16.md) val | [U32](builtin-U32.md) val | [U64](builtin-U64.md) val | [U128](builtin-U128.md) val | [ULong](builtin-ULong.md) val | [USize](builtin-USize.md) val) & [Integer](builtin-Integer.md)\[A\] val)\]
<span class="source-link">[[Source]](src/builtin/string.md#L1512)</span>


Determine the base of an integer starting at the specified index.
If a non-0 base is given use that. If given base is 0 read the base
specifying prefix, if any, to detect base 2 or 16.
If no base is specified and no prefix is found default to decimal.
Note that a leading 0 does NOT imply octal.
Report the base found and the number of characters in the prefix.


```pony
fun box _read_int_base[A: ((I8 val | I16 val | I32 val | 
    I64 val | I128 val | ILong val | 
    ISize val | U8 val | U16 val | 
    U32 val | U64 val | U128 val | 
    ULong val | USize val) & Integer[A] val)](
  base: U8 val,
  index: USize val)
: (A , USize val)
```
#### Parameters

*   base: [U8](builtin-U8.md) val
*   index: [USize](builtin-USize.md) val

#### Returns

* (A , [USize](builtin-USize.md) val)

---

### _set
<span class="source-link">[[Source]](src/builtin/string.md#L1636)</span>


Unsafe update, used internally.


```pony
fun ref _set(
  i: USize val,
  value: U8 val)
: U8 val
```
#### Parameters

*   i: [USize](builtin-USize.md) val
*   value: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val

---

