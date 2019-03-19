# NetAddress
<span class="source-link">[[Source]](src/net/net_address.md#L1)</span>

Represents an IPv4 or IPv6 address. The family field indicates the address
type. The addr field is either the IPv4 address or the IPv6 flow info. The
addr1-4 fields are the IPv6 address, or invalid for an IPv4 address. The
scope field is the IPv6 scope, or invalid for an IPv4 address.

This class is modelled after the C data structure for holding socket
addresses for both IPv4 and IPv6 `sockaddr_storage`.

Use the `name` method to obtain address/hostname and port/service as Strings.


```pony
class val NetAddress is
  Equatable[NetAddress val] ref
```

#### Implements

* [Equatable](builtin-Equatable.md)\[[NetAddress](net-NetAddress.md) val\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/net/net_address.md#L1)</span>


```pony
new iso create()
: NetAddress iso^
```

#### Returns

* [NetAddress](net-NetAddress.md) iso^

---

## Public Functions

### ip4
<span class="source-link">[[Source]](src/net/net_address.md#L55)</span>


Returns true for an IPv4 address.


```pony
fun box ip4()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### ip6
<span class="source-link">[[Source]](src/net/net_address.md#L61)</span>


Returns true for an IPv6 address.


```pony
fun box ip6()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### name
<span class="source-link">[[Source]](src/net/net_address.md#L67)</span>


Returns the host and service name.

If `reversedns` is an instance of `DNSLookupAuth`
a DNS lookup will be executed and the hostname
for this address is returned as first element of the result tuple.
If no hostname could be found, an error is raised.
If `reversedns` is `None` the plain IP address is given
and no DNS lookup is executed.

If `servicename` is `false` the numeric port is returned
as second element of the result tuple.
If it is `true` the port is translated into its
corresponding servicename (e.g. port 80 is returned as `"http"`).

Internally this method uses the POSIX C function `getnameinfo`.


```pony
fun box name(
  reversedns: (AmbientAuth val | NetAuth val | DNSAuth val | 
    None val) = seq,
  servicename: Bool val = seq)
: (String val , String val) ?
```
#### Parameters

*   reversedns: ([AmbientAuth](builtin-AmbientAuth.md) val | [NetAuth](net-NetAuth.md) val | [DNSAuth](net-DNSAuth.md) val | 
    [None](builtin-None.md) val) = seq
*   servicename: [Bool](builtin-Bool.md) val = seq

#### Returns

* ([String](builtin-String.md) val , [String](builtin-String.md) val) ?

---

### eq
<span class="source-link">[[Source]](src/net/net_address.md#L103)</span>


```pony
fun box eq(
  that: NetAddress box)
: Bool val
```
#### Parameters

*   that: [NetAddress](net-NetAddress.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### host_eq
<span class="source-link">[[Source]](src/net/net_address.md#L109)</span>


```pony
fun box host_eq(
  that: NetAddress box)
: Bool val
```
#### Parameters

*   that: [NetAddress](net-NetAddress.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### length
<span class="source-link">[[Source]](src/net/net_address.md#L119)</span>


For platforms (OSX/FreeBSD) with `length` field as part of 
its `struct sockaddr` definition, returns the `length`. 
Else (Linux/Windows) returns the size of `sockaddr_in` or `sockaddr_in6`.


```pony
fun box length()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### family
<span class="source-link">[[Source]](src/net/net_address.md#L136)</span>


Returns the `family`.


```pony
fun box family()
: U8 val
```

#### Returns

* [U8](builtin-U8.md) val

---

### port
<span class="source-link">[[Source]](src/net/net_address.md#L155)</span>


Returns port number in host byte order.


```pony
fun box port()
: U16 val
```

#### Returns

* [U16](builtin-U16.md) val

---

### scope
<span class="source-link">[[Source]](src/net/net_address.md#L161)</span>


Returns IPv6 scope identifier: Unicast, Anycast, Multicast and 
unassigned scopes.


```pony
fun box scope()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### ipv4_addr
<span class="source-link">[[Source]](src/net/net_address.md#L169)</span>


Returns IPV4 address (`_addr` field in the class) if `ip4()` is `True`.
If `ip4()` is `False` then the contents are invalid.


```pony
fun box ipv4_addr()
: U32 val
```

#### Returns

* [U32](builtin-U32.md) val

---

### ipv6_addr
<span class="source-link">[[Source]](src/net/net_address.md#L176)</span>


Returns IPV6 address as the 4-tuple (say `a`). 
`a._1 = _addr1` // Bits 0-32 of the IPv6 address in host byte order.
`a._2 = _addr2  // Bits 33-64 of the IPv6 address in host byte order.
`a._3 = _addr3  // Bits 65-96 of the IPv6 address in host byte order.
`a._4 = _addr4  // Bits 97-128 of the IPv6 address in host byte order.

The contents of the 4-tuple returned are valid only if `ip6()` is `True`.


```pony
fun box ipv6_addr()
: (U32 val , U32 val , U32 val , 
    U32 val)
```

#### Returns

* ([U32](builtin-U32.md) val , [U32](builtin-U32.md) val , [U32](builtin-U32.md) val , 
    [U32](builtin-U32.md) val)

---

### ne
<span class="source-link">[[Source]](src/builtin/compare.md#L20)</span>


```pony
fun box ne(
  that: NetAddress val)
: Bool val
```
#### Parameters

*   that: [NetAddress](net-NetAddress.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

