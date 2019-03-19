# X509
<span class="source-link">[[Source]](src/net-ssl/x509.md#L8)</span>
```pony
primitive val X509
```

## Constructors

### create
<span class="source-link">[[Source]](src/net-ssl/x509.md#L8)</span>


```pony
new val create()
: X509 val^
```

#### Returns

* [X509](net-ssl-X509.md) val^

---

## Public Functions

### valid_for_host
<span class="source-link">[[Source]](src/net-ssl/x509.md#L9)</span>


Checks if an OpenSSL X509 certificate is valid for a given host.


```pony
fun box valid_for_host(
  cert: Pointer[X509 val] ref,
  host: String val)
: Bool val
```
#### Parameters

*   cert: [Pointer](builtin-Pointer.md)\[[X509](net-ssl-X509.md) val\] ref
*   host: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### common_name
<span class="source-link">[[Source]](src/net-ssl/x509.md#L20)</span>


Get the common name for the certificate. Raises an error if the common name
contains any NULL bytes.


```pony
fun box common_name(
  cert: Pointer[X509 val] ref)
: String val ?
```
#### Parameters

*   cert: [Pointer](builtin-Pointer.md)\[[X509](net-ssl-X509.md) val\] ref

#### Returns

* [String](builtin-String.md) val ?

---

### all_names
<span class="source-link">[[Source]](src/net-ssl/x509.md#L48)</span>


Returns an array of all names for the certificate. Any names containing
NULL bytes are not included. This includes the common name and all subject
alternate names.


```pony
fun box all_names(
  cert: Pointer[X509 val] ref)
: Array[String val] val
```
#### Parameters

*   cert: [Pointer](builtin-Pointer.md)\[[X509](net-ssl-X509.md) val\] ref

#### Returns

* [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val

---

### eq
<span class="source-link">[[Source]](src/net-ssl/x509.md#L9)</span>


```pony
fun box eq(
  that: X509 val)
: Bool val
```
#### Parameters

*   that: [X509](net-ssl-X509.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net-ssl/x509.md#L9)</span>


```pony
fun box ne(
  that: X509 val)
: Bool val
```
#### Parameters

*   that: [X509](net-ssl-X509.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _match_name
<span class="source-link">[[Source]](src/net-ssl/x509.md#L131)</span>


Returns true if the name extracted from the certificate is valid for the
given host.


```pony
fun box _match_name(
  host: String val,
  name: String val)
: Bool val
```
#### Parameters

*   host: [String](builtin-String.md) val
*   name: [String](builtin-String.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

