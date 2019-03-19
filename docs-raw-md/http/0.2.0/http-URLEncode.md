# URLEncode
<span class="source-link">[[Source]](src/http/url_encode.md#L18)</span>

Functions for checking, encoding, and decoding parts of URLs.


```pony
primitive val URLEncode
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/url_encode.md#L18)</span>


```pony
new val create()
: URLEncode val^
```

#### Returns

* [URLEncode](http-URLEncode.md) val^

---

## Public Functions

### encode
<span class="source-link">[[Source]](src/http/url_encode.md#L23)</span>


URL encode and normilase the given string.
The percent_encoded parameter indicates how '%' characters should be
interpretted.
true => given string is already at least partially encoded, so '%'s
  indicate an encoded character.
false => given string is not yet encoded at all, so '%'s are just '%'s.
An error is raised on invalid existing encoding or illegal characters that
cannot be encoded.


```pony
fun box encode(
  from: String val,
  part: (URLPartUser val | URLPartPassword val | URLPartHost val | 
    URLPartPath val | URLPartQuery val | URLPartFragment val),
  percent_encoded: Bool val = seq)
: String val ?
```
#### Parameters

*   from: [String](builtin-String.md) val
*   part: ([URLPartUser](http-URLPartUser.md) val | [URLPartPassword](http-URLPartPassword.md) val | [URLPartHost](http-URLPartHost.md) val | 
    [URLPartPath](http-URLPartPath.md) val | [URLPartQuery](http-URLPartQuery.md) val | [URLPartFragment](http-URLPartFragment.md) val)
*   percent_encoded: [Bool](builtin-Bool.md) val = seq

#### Returns

* [String](builtin-String.md) val ?

---

### decode
<span class="source-link">[[Source]](src/http/url_encode.md#L70)</span>


URL decode a string. Raise an error on invalid URL encoded.


```pony
fun box decode(
  from: String val)
: String val ?
```
#### Parameters

*   from: [String](builtin-String.md) val

#### Returns

* [String](builtin-String.md) val ?

---

### check_scheme
<span class="source-link">[[Source]](src/http/url_encode.md#L96)</span>


Check that the given string is a valid scheme.


```pony
fun box check_scheme(
  scheme: String val)
: Bool val
```
#### Parameters

*   scheme: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### check
<span class="source-link">[[Source]](src/http/url_encode.md#L123)</span>


Check that the given string is valid to be the given URL part without
further encoding. Canonical form is not checked for, merely validity.


```pony
fun box check(
  from: String val,
  part: (URLPartUser val | URLPartPassword val | URLPartHost val | 
    URLPartPath val | URLPartQuery val | URLPartFragment val))
: Bool val
```
#### Parameters

*   from: [String](builtin-String.md) val
*   part: ([URLPartUser](http-URLPartUser.md) val | [URLPartPassword](http-URLPartPassword.md) val | [URLPartHost](http-URLPartHost.md) val | 
    [URLPartPath](http-URLPartPath.md) val | [URLPartQuery](http-URLPartQuery.md) val | [URLPartFragment](http-URLPartFragment.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### eq
<span class="source-link">[[Source]](src/http/url_encode.md#L23)</span>


```pony
fun box eq(
  that: URLEncode val)
: Bool val
```
#### Parameters

*   that: [URLEncode](http-URLEncode.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/http/url_encode.md#L23)</span>


```pony
fun box ne(
  that: URLEncode val)
: Bool val
```
#### Parameters

*   that: [URLEncode](http-URLEncode.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _is_char_legal
<span class="source-link">[[Source]](src/http/url_encode.md#L159)</span>


Determine whether the given character is legal to appear in the specified
URL part.


```pony
fun box _is_char_legal(
  value: U8 val,
  part: (URLPartUser val | URLPartPassword val | URLPartHost val | 
    URLPartPath val | URLPartQuery val | URLPartFragment val))
: Bool val
```
#### Parameters

*   value: [U8](builtin-U8.md) val
*   part: ([URLPartUser](http-URLPartUser.md) val | [URLPartPassword](http-URLPartPassword.md) val | [URLPartHost](http-URLPartHost.md) val | 
    [URLPartPath](http-URLPartPath.md) val | [URLPartQuery](http-URLPartQuery.md) val | [URLPartFragment](http-URLPartFragment.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### _normal_decode
<span class="source-link">[[Source]](src/http/url_encode.md#L187)</span>


Determine whether the given character should be decoded to give normal
form. Some characters, such as sub-delims, are valid to have either in
encoded or unencoded form. These should be left as they are when
normalising. This will return false for such characters.


```pony
fun box _normal_decode(
  value: U8 val,
  part: (URLPartUser val | URLPartPassword val | URLPartHost val | 
    URLPartPath val | URLPartQuery val | URLPartFragment val))
: Bool val
```
#### Parameters

*   value: [U8](builtin-U8.md) val
*   part: ([URLPartUser](http-URLPartUser.md) val | [URLPartPassword](http-URLPartPassword.md) val | [URLPartHost](http-URLPartHost.md) val | 
    [URLPartPath](http-URLPartPath.md) val | [URLPartQuery](http-URLPartQuery.md) val | [URLPartFragment](http-URLPartFragment.md) val)

#### Returns

* [Bool](builtin-Bool.md) val

---

### _is_host_ipv6
<span class="source-link">[[Source]](src/http/url_encode.md#L219)</span>


Check whether the given string is a valid IPv6 format host.
Returns:
  true if string is a valid IPv6 format host.
  false if string is not an IPv6 foramt host at all.
  Raises an error if string is an invalid IPv6 format host.


```pony
fun box _is_host_ipv6(
  host: String val,
  part: (URLPartUser val | URLPartPassword val | URLPartHost val | 
    URLPartPath val | URLPartQuery val | URLPartFragment val))
: Bool val ?
```
#### Parameters

*   host: [String](builtin-String.md) val
*   part: ([URLPartUser](http-URLPartUser.md) val | [URLPartPassword](http-URLPartPassword.md) val | [URLPartHost](http-URLPartHost.md) val | 
    [URLPartPath](http-URLPartPath.md) val | [URLPartQuery](http-URLPartQuery.md) val | [URLPartFragment](http-URLPartFragment.md) val)

#### Returns

* [Bool](builtin-Bool.md) val ?

---

### _hex
<span class="source-link">[[Source]](src/http/url_encode.md#L257)</span>


Turn 4 bits into a hex value.


```pony
fun box _hex(
  value: U8 val)
: U8 val ?
```
#### Parameters

*   value: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

### _unhex
<span class="source-link">[[Source]](src/http/url_encode.md#L269)</span>


Turn a hex value into 4 bits.


```pony
fun box _unhex(
  value: U8 val)
: U8 val ?
```
#### Parameters

*   value: [U8](builtin-U8.md) val

#### Returns

* [U8](builtin-U8.md) val ?

---

