# URL
<span class="source-link">[[Source]](src/http/url.md#L1)</span>

Holds the components of a URL. These are always stored as valid, URL-encoded
values.


```pony
class val URL
```

## Constructors

### create
<span class="source-link">[[Source]](src/http/url.md#L94)</span>


Create an empty URL.


```pony
new val create()
: URL val^
```

#### Returns

* [URL](http-URL.md) val^

---

### build
<span class="source-link">[[Source]](src/http/url.md#L100)</span>


Parse the URL string into its components. If it isn't URL encoded, encode
it. If existing URL encoding is invalid, raise an error.


```pony
new val build(
  from: String val,
  percent_encoded: Bool val = seq)
: URL val^ ?
```
#### Parameters

*   from: [String](builtin-String.md) val
*   percent_encoded: [Bool](builtin-Bool.md) val = seq

#### Returns

* [URL](http-URL.md) val^ ?

---

### valid
<span class="source-link">[[Source]](src/http/url.md#L115)</span>


Parse the URL string into its components. If it isn't URL encoded, raise an
error.


```pony
new val valid(
  from: String val)
: URL val^ ?
```
#### Parameters

*   from: [String](builtin-String.md) val

#### Returns

* [URL](http-URL.md) val^ ?

---

## Public fields

### var scheme: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L6)</span>

URL scheme.

If the given URL does not provide a scheme, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.1).




---

### var user: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L15)</span>

URL user as part of the URLs authority component:

```
authority = [ user [ ":" password ] "@" ] host [ ":" port ]
```

If the URL does not provide user information, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.2.1).




---

### var password: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L28)</span>

URL password as part of the URLs authority component:

```
authority = [ user [ ":" password ] "@" ] host [ ":" port ]
```

If the URL does not provide a password, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.2.1).




---

### var host: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L41)</span>

URL host as part of the URLs authority component:

```
authority = [ user [ ":" password ] "@" ] host [ ":" port ]
```

If the URL does not provide a host, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.2.2).




---

### var port: [U16](builtin-U16.md) val
<span class="source-link">[[Source]](src/http/url.md#L54)</span>

URL port as part of the URLs authority component:

```
authority = [ user [ ":" password ] "@" ] host [ ":" port ]
```

If the URL does not provide a port, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.2.3).




---

### var path: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L67)</span>

URL path component.

If the URL does not provide a path component, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.3).




---

### var query: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L76)</span>

URL query component.

If the URL does not provide a query component, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.4).




---

### var fragment: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/url.md#L85)</span>

Url fragment identifier component.

If the URL does not provide a fragment identifier component, this will be the empty string.

See also [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3.5).




---

## Public Functions

### is_valid
<span class="source-link">[[Source]](src/http/url.md#L126)</span>


Return true if all elements are correctly URL encoded.


```pony
fun box is_valid()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### string
<span class="source-link">[[Source]](src/http/url.md#L138)</span>


Combine the components into a string.


```pony
fun box string()
: String iso^
```

#### Returns

* [String](builtin-String.md) iso^

---

### join
<span class="source-link">[[Source]](src/http/url.md#L191)</span>


Using this as a base URL, concatenate with another, possibly relative, URL
in the same way a browser does for a link.


```pony
fun val join(
  that: URL val)
: URL val
```
#### Parameters

*   that: [URL](http-URL.md) val

#### Returns

* [URL](http-URL.md) val

---

### default_port
<span class="source-link">[[Source]](src/http/url.md#L199)</span>


Report the default port for our scheme.
Returns 0 for unrecognised schemes.


```pony
fun box default_port()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

## Private Functions

### _parse
<span class="source-link">[[Source]](src/http/url.md#L210)</span>


Parse the given string as a URL.
Raises an error on invalid port number.


```pony
fun ref _parse(
  from: String val)
: None val ?
```
#### Parameters

*   from: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### _parse_scheme
<span class="source-link">[[Source]](src/http/url.md#L243)</span>


Find the scheme, if any, at the start of the given string.
The offset of the part following the scheme is returned.


```pony
fun box _parse_scheme(
  from: String val)
: (ISize val , String val)
```
#### Parameters

*   from: [String](builtin-String.md) val

#### Returns

* ([ISize](builtin-ISize.md) val , [String](builtin-String.md) val)

---

### _parse_part
<span class="source-link">[[Source]](src/http/url.md#L272)</span>


Attempt to parse the specified part out of the given string. Only attempt
the parse if the given prefix is found first. Pass "" if no prefix is
needed. The part ends when any one of the given terminator characters is
found, or the end of the input is reached. The offset of the terminator is
returned, if one is found.


```pony
fun box _parse_part(
  from: String val,
  prefix: String val,
  terminators: String val,
  offset: ISize val)
: (ISize val , String val)
```
#### Parameters

*   from: [String](builtin-String.md) val
*   prefix: [String](builtin-String.md) val
*   terminators: [String](builtin-String.md) val
*   offset: [ISize](builtin-ISize.md) val

#### Returns

* ([ISize](builtin-ISize.md) val , [String](builtin-String.md) val)

---

### _split
<span class="source-link">[[Source]](src/http/url.md#L316)</span>


Split the given string in 2 around the first instance of the specified
separator. If the string does not contain the separator then the first
resulting string is the whole src and the second is empty.


```pony
fun box _split(
  src: String val,
  separator: U8 val)
: (String val , String val)
```
#### Parameters

*   src: [String](builtin-String.md) val
*   separator: [U8](builtin-U8.md) val

#### Returns

* ([String](builtin-String.md) val , [String](builtin-String.md) val)

---

### _parse_hostport
<span class="source-link">[[Source]](src/http/url.md#L338)</span>


Split the given "host and port" string into the host and port parts.


```pony
fun box _parse_hostport(
  hostport: String val)
: (String val , String val)
```
#### Parameters

*   hostport: [String](builtin-String.md) val

#### Returns

* ([String](builtin-String.md) val , [String](builtin-String.md) val)

---

