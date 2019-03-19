# OSSockOpt
<span class="source-link">[[Source]](src/net/ossockopt.md#L4)</span>

Convenience functions to fetch the option level and option
name constants (arguments #2 and #3) for the
`getsockopt(2)` and `setsockopt(2)` operating system calls.

The values of the option level and option name constants are
typically C preprocessor macros, e.g., `#define SOMETHING 42`.
These macro names are upper case and may contain multiple
consecutive underscore characters (though this is rare, for
example, `IP_NAT__XXX`).  The function names in this primitive
are derived by the C macro name and then:

  * converted to lower case
  * any double underscore (`__`) is converted to a
    single underscore (`_`).

These constants are _not_ stable between Pony releases.
Values returned by this function may be held by long-lived variables
by the calling process: values cannot change while the process runs.
Programmers must not cache any of these values for purposes of
sharing them for use by any other Pony program (for example,
sharing via serialization & deserialization or via direct
shared memory).

Many functions may return `-1`, which means that the constant's
value could not be determined at the Pony runtime library compile
time.  One cause may be that the option truly isn't available,
for example, the option level constant `IPPROTO_3PC` is available
on MacOS 10.x but not on Linux 4.4.  Another cause may be the
Pony runtime library's compilation did not include the correct
header file(s) for the target OS platform.

A third cause of error is due to the regular expression-based
approach used to harvest desirable constants.  It is not fool-proof.
The regexp used is too broad and finds some macros that are not
supposed to be used with `getsockopt(2)` and `setsockopt(2)`.
Please consult your platform's documentation to verify the names
of the option level and option name macros.

The following code fragments are equivalent: set the socket
receive buffer size for the file descriptor `fd` to `4455`.

```c
/* In C */
int option_value = 4455;
setsockopt(fd, SOL_SOCKET, SO_RCVBUF, &option_value, 4);

/* In Pony */
var option: I32 = 4455;
@pony_os_setsockopt[I32](fd, OSSockOpt.sol_socket(), OSSockOpt.so_rcvbuf(),
  addressof option, I32(4))
```


```pony
primitive val OSSockOpt
```

## Constructors

### create
<span class="source-link">[[Source]](src/net/ossockopt.md#L4)</span>


```pony
new val create()
: OSSockOpt val^
```

#### Returns

* [OSSockOpt](net-OSSockOpt.md) val^

---

## Public Functions

### ipproto_3pc
<span class="source-link">[[Source]](src/net/ossockopt.md#L76)</span>


```pony
fun box ipproto_3pc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_adfs
<span class="source-link">[[Source]](src/net/ossockopt.md#L77)</span>


```pony
fun box ipproto_adfs()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ah
<span class="source-link">[[Source]](src/net/ossockopt.md#L78)</span>


```pony
fun box ipproto_ah()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ahip
<span class="source-link">[[Source]](src/net/ossockopt.md#L79)</span>


```pony
fun box ipproto_ahip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_apes
<span class="source-link">[[Source]](src/net/ossockopt.md#L80)</span>


```pony
fun box ipproto_apes()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_argus
<span class="source-link">[[Source]](src/net/ossockopt.md#L81)</span>


```pony
fun box ipproto_argus()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ax25
<span class="source-link">[[Source]](src/net/ossockopt.md#L82)</span>


```pony
fun box ipproto_ax25()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_beetph
<span class="source-link">[[Source]](src/net/ossockopt.md#L83)</span>


```pony
fun box ipproto_beetph()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_bha
<span class="source-link">[[Source]](src/net/ossockopt.md#L84)</span>


```pony
fun box ipproto_bha()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_blt
<span class="source-link">[[Source]](src/net/ossockopt.md#L85)</span>


```pony
fun box ipproto_blt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_brsatmon
<span class="source-link">[[Source]](src/net/ossockopt.md#L86)</span>


```pony
fun box ipproto_brsatmon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_carp
<span class="source-link">[[Source]](src/net/ossockopt.md#L87)</span>


```pony
fun box ipproto_carp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_cftp
<span class="source-link">[[Source]](src/net/ossockopt.md#L88)</span>


```pony
fun box ipproto_cftp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_chaos
<span class="source-link">[[Source]](src/net/ossockopt.md#L89)</span>


```pony
fun box ipproto_chaos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_cmtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L90)</span>


```pony
fun box ipproto_cmtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_comp
<span class="source-link">[[Source]](src/net/ossockopt.md#L91)</span>


```pony
fun box ipproto_comp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_cphb
<span class="source-link">[[Source]](src/net/ossockopt.md#L92)</span>


```pony
fun box ipproto_cphb()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_cpnx
<span class="source-link">[[Source]](src/net/ossockopt.md#L93)</span>


```pony
fun box ipproto_cpnx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_dccp
<span class="source-link">[[Source]](src/net/ossockopt.md#L94)</span>


```pony
fun box ipproto_dccp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ddp
<span class="source-link">[[Source]](src/net/ossockopt.md#L95)</span>


```pony
fun box ipproto_ddp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_dgp
<span class="source-link">[[Source]](src/net/ossockopt.md#L96)</span>


```pony
fun box ipproto_dgp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_divert
<span class="source-link">[[Source]](src/net/ossockopt.md#L97)</span>


```pony
fun box ipproto_divert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_done
<span class="source-link">[[Source]](src/net/ossockopt.md#L98)</span>


```pony
fun box ipproto_done()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_dstopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L99)</span>


```pony
fun box ipproto_dstopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_egp
<span class="source-link">[[Source]](src/net/ossockopt.md#L100)</span>


```pony
fun box ipproto_egp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_emcon
<span class="source-link">[[Source]](src/net/ossockopt.md#L101)</span>


```pony
fun box ipproto_emcon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_encap
<span class="source-link">[[Source]](src/net/ossockopt.md#L102)</span>


```pony
fun box ipproto_encap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_eon
<span class="source-link">[[Source]](src/net/ossockopt.md#L103)</span>


```pony
fun box ipproto_eon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_esp
<span class="source-link">[[Source]](src/net/ossockopt.md#L104)</span>


```pony
fun box ipproto_esp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_etherip
<span class="source-link">[[Source]](src/net/ossockopt.md#L105)</span>


```pony
fun box ipproto_etherip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_fragment
<span class="source-link">[[Source]](src/net/ossockopt.md#L106)</span>


```pony
fun box ipproto_fragment()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ggp
<span class="source-link">[[Source]](src/net/ossockopt.md#L107)</span>


```pony
fun box ipproto_ggp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_gmtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L108)</span>


```pony
fun box ipproto_gmtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_gre
<span class="source-link">[[Source]](src/net/ossockopt.md#L109)</span>


```pony
fun box ipproto_gre()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_hello
<span class="source-link">[[Source]](src/net/ossockopt.md#L110)</span>


```pony
fun box ipproto_hello()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_hip
<span class="source-link">[[Source]](src/net/ossockopt.md#L111)</span>


```pony
fun box ipproto_hip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_hmp
<span class="source-link">[[Source]](src/net/ossockopt.md#L112)</span>


```pony
fun box ipproto_hmp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_hopopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L113)</span>


```pony
fun box ipproto_hopopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_icmp
<span class="source-link">[[Source]](src/net/ossockopt.md#L114)</span>


```pony
fun box ipproto_icmp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_icmpv6
<span class="source-link">[[Source]](src/net/ossockopt.md#L115)</span>


```pony
fun box ipproto_icmpv6()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_idp
<span class="source-link">[[Source]](src/net/ossockopt.md#L116)</span>


```pony
fun box ipproto_idp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_idpr
<span class="source-link">[[Source]](src/net/ossockopt.md#L117)</span>


```pony
fun box ipproto_idpr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_idrp
<span class="source-link">[[Source]](src/net/ossockopt.md#L118)</span>


```pony
fun box ipproto_idrp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_igmp
<span class="source-link">[[Source]](src/net/ossockopt.md#L119)</span>


```pony
fun box ipproto_igmp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_igp
<span class="source-link">[[Source]](src/net/ossockopt.md#L120)</span>


```pony
fun box ipproto_igp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_igrp
<span class="source-link">[[Source]](src/net/ossockopt.md#L121)</span>


```pony
fun box ipproto_igrp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_il
<span class="source-link">[[Source]](src/net/ossockopt.md#L122)</span>


```pony
fun box ipproto_il()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_inlsp
<span class="source-link">[[Source]](src/net/ossockopt.md#L123)</span>


```pony
fun box ipproto_inlsp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_inp
<span class="source-link">[[Source]](src/net/ossockopt.md#L124)</span>


```pony
fun box ipproto_inp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ip
<span class="source-link">[[Source]](src/net/ossockopt.md#L125)</span>


```pony
fun box ipproto_ip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipcomp
<span class="source-link">[[Source]](src/net/ossockopt.md#L126)</span>


```pony
fun box ipproto_ipcomp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipcv
<span class="source-link">[[Source]](src/net/ossockopt.md#L127)</span>


```pony
fun box ipproto_ipcv()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipeip
<span class="source-link">[[Source]](src/net/ossockopt.md#L128)</span>


```pony
fun box ipproto_ipeip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipip
<span class="source-link">[[Source]](src/net/ossockopt.md#L129)</span>


```pony
fun box ipproto_ipip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ippc
<span class="source-link">[[Source]](src/net/ossockopt.md#L130)</span>


```pony
fun box ipproto_ippc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipv4
<span class="source-link">[[Source]](src/net/ossockopt.md#L131)</span>


```pony
fun box ipproto_ipv4()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ipv6
<span class="source-link">[[Source]](src/net/ossockopt.md#L132)</span>


```pony
fun box ipproto_ipv6()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_irtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L133)</span>


```pony
fun box ipproto_irtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_kryptolan
<span class="source-link">[[Source]](src/net/ossockopt.md#L134)</span>


```pony
fun box ipproto_kryptolan()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_larp
<span class="source-link">[[Source]](src/net/ossockopt.md#L135)</span>


```pony
fun box ipproto_larp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_leaf1
<span class="source-link">[[Source]](src/net/ossockopt.md#L136)</span>


```pony
fun box ipproto_leaf1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_leaf2
<span class="source-link">[[Source]](src/net/ossockopt.md#L137)</span>


```pony
fun box ipproto_leaf2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L138)</span>


```pony
fun box ipproto_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_maxid
<span class="source-link">[[Source]](src/net/ossockopt.md#L139)</span>


```pony
fun box ipproto_maxid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_meas
<span class="source-link">[[Source]](src/net/ossockopt.md#L140)</span>


```pony
fun box ipproto_meas()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mh
<span class="source-link">[[Source]](src/net/ossockopt.md#L141)</span>


```pony
fun box ipproto_mh()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mhrp
<span class="source-link">[[Source]](src/net/ossockopt.md#L142)</span>


```pony
fun box ipproto_mhrp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_micp
<span class="source-link">[[Source]](src/net/ossockopt.md#L143)</span>


```pony
fun box ipproto_micp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mobile
<span class="source-link">[[Source]](src/net/ossockopt.md#L144)</span>


```pony
fun box ipproto_mobile()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mpls
<span class="source-link">[[Source]](src/net/ossockopt.md#L145)</span>


```pony
fun box ipproto_mpls()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L146)</span>


```pony
fun box ipproto_mtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_mux
<span class="source-link">[[Source]](src/net/ossockopt.md#L147)</span>


```pony
fun box ipproto_mux()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_nd
<span class="source-link">[[Source]](src/net/ossockopt.md#L148)</span>


```pony
fun box ipproto_nd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_nhrp
<span class="source-link">[[Source]](src/net/ossockopt.md#L149)</span>


```pony
fun box ipproto_nhrp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_none
<span class="source-link">[[Source]](src/net/ossockopt.md#L150)</span>


```pony
fun box ipproto_none()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_nsp
<span class="source-link">[[Source]](src/net/ossockopt.md#L151)</span>


```pony
fun box ipproto_nsp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_nvpii
<span class="source-link">[[Source]](src/net/ossockopt.md#L152)</span>


```pony
fun box ipproto_nvpii()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_old_divert
<span class="source-link">[[Source]](src/net/ossockopt.md#L153)</span>


```pony
fun box ipproto_old_divert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ospfigp
<span class="source-link">[[Source]](src/net/ossockopt.md#L154)</span>


```pony
fun box ipproto_ospfigp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pfsync
<span class="source-link">[[Source]](src/net/ossockopt.md#L155)</span>


```pony
fun box ipproto_pfsync()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pgm
<span class="source-link">[[Source]](src/net/ossockopt.md#L156)</span>


```pony
fun box ipproto_pgm()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pigp
<span class="source-link">[[Source]](src/net/ossockopt.md#L157)</span>


```pony
fun box ipproto_pigp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pim
<span class="source-link">[[Source]](src/net/ossockopt.md#L158)</span>


```pony
fun box ipproto_pim()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_prm
<span class="source-link">[[Source]](src/net/ossockopt.md#L159)</span>


```pony
fun box ipproto_prm()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pup
<span class="source-link">[[Source]](src/net/ossockopt.md#L160)</span>


```pony
fun box ipproto_pup()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_pvp
<span class="source-link">[[Source]](src/net/ossockopt.md#L161)</span>


```pony
fun box ipproto_pvp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_raw
<span class="source-link">[[Source]](src/net/ossockopt.md#L162)</span>


```pony
fun box ipproto_raw()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_rccmon
<span class="source-link">[[Source]](src/net/ossockopt.md#L163)</span>


```pony
fun box ipproto_rccmon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_rdp
<span class="source-link">[[Source]](src/net/ossockopt.md#L164)</span>


```pony
fun box ipproto_rdp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_reserved_253
<span class="source-link">[[Source]](src/net/ossockopt.md#L165)</span>


```pony
fun box ipproto_reserved_253()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_reserved_254
<span class="source-link">[[Source]](src/net/ossockopt.md#L166)</span>


```pony
fun box ipproto_reserved_254()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_routing
<span class="source-link">[[Source]](src/net/ossockopt.md#L167)</span>


```pony
fun box ipproto_routing()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_rsvp
<span class="source-link">[[Source]](src/net/ossockopt.md#L168)</span>


```pony
fun box ipproto_rsvp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_rvd
<span class="source-link">[[Source]](src/net/ossockopt.md#L169)</span>


```pony
fun box ipproto_rvd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_satexpak
<span class="source-link">[[Source]](src/net/ossockopt.md#L170)</span>


```pony
fun box ipproto_satexpak()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_satmon
<span class="source-link">[[Source]](src/net/ossockopt.md#L171)</span>


```pony
fun box ipproto_satmon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_sccsp
<span class="source-link">[[Source]](src/net/ossockopt.md#L172)</span>


```pony
fun box ipproto_sccsp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_sctp
<span class="source-link">[[Source]](src/net/ossockopt.md#L173)</span>


```pony
fun box ipproto_sctp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_sdrp
<span class="source-link">[[Source]](src/net/ossockopt.md#L174)</span>


```pony
fun box ipproto_sdrp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_send
<span class="source-link">[[Source]](src/net/ossockopt.md#L175)</span>


```pony
fun box ipproto_send()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_sep
<span class="source-link">[[Source]](src/net/ossockopt.md#L176)</span>


```pony
fun box ipproto_sep()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_shim6
<span class="source-link">[[Source]](src/net/ossockopt.md#L177)</span>


```pony
fun box ipproto_shim6()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_skip
<span class="source-link">[[Source]](src/net/ossockopt.md#L178)</span>


```pony
fun box ipproto_skip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_spacer
<span class="source-link">[[Source]](src/net/ossockopt.md#L179)</span>


```pony
fun box ipproto_spacer()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_srpc
<span class="source-link">[[Source]](src/net/ossockopt.md#L180)</span>


```pony
fun box ipproto_srpc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_st
<span class="source-link">[[Source]](src/net/ossockopt.md#L181)</span>


```pony
fun box ipproto_st()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_svmtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L182)</span>


```pony
fun box ipproto_svmtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_swipe
<span class="source-link">[[Source]](src/net/ossockopt.md#L183)</span>


```pony
fun box ipproto_swipe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_tcf
<span class="source-link">[[Source]](src/net/ossockopt.md#L184)</span>


```pony
fun box ipproto_tcf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_tcp
<span class="source-link">[[Source]](src/net/ossockopt.md#L185)</span>


```pony
fun box ipproto_tcp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_tlsp
<span class="source-link">[[Source]](src/net/ossockopt.md#L186)</span>


```pony
fun box ipproto_tlsp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_tp
<span class="source-link">[[Source]](src/net/ossockopt.md#L187)</span>


```pony
fun box ipproto_tp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_tpxx
<span class="source-link">[[Source]](src/net/ossockopt.md#L188)</span>


```pony
fun box ipproto_tpxx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_trunk1
<span class="source-link">[[Source]](src/net/ossockopt.md#L189)</span>


```pony
fun box ipproto_trunk1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_trunk2
<span class="source-link">[[Source]](src/net/ossockopt.md#L190)</span>


```pony
fun box ipproto_trunk2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_ttp
<span class="source-link">[[Source]](src/net/ossockopt.md#L191)</span>


```pony
fun box ipproto_ttp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_udp
<span class="source-link">[[Source]](src/net/ossockopt.md#L192)</span>


```pony
fun box ipproto_udp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_udplite
<span class="source-link">[[Source]](src/net/ossockopt.md#L193)</span>


```pony
fun box ipproto_udplite()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_vines
<span class="source-link">[[Source]](src/net/ossockopt.md#L194)</span>


```pony
fun box ipproto_vines()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_visa
<span class="source-link">[[Source]](src/net/ossockopt.md#L195)</span>


```pony
fun box ipproto_visa()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_vmtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L196)</span>


```pony
fun box ipproto_vmtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_wbexpak
<span class="source-link">[[Source]](src/net/ossockopt.md#L197)</span>


```pony
fun box ipproto_wbexpak()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_wbmon
<span class="source-link">[[Source]](src/net/ossockopt.md#L198)</span>


```pony
fun box ipproto_wbmon()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_wsn
<span class="source-link">[[Source]](src/net/ossockopt.md#L199)</span>


```pony
fun box ipproto_wsn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_xnet
<span class="source-link">[[Source]](src/net/ossockopt.md#L200)</span>


```pony
fun box ipproto_xnet()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipproto_xtp
<span class="source-link">[[Source]](src/net/ossockopt.md#L201)</span>


```pony
fun box ipproto_xtp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_atalk
<span class="source-link">[[Source]](src/net/ossockopt.md#L202)</span>


```pony
fun box sol_atalk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_ax25
<span class="source-link">[[Source]](src/net/ossockopt.md#L203)</span>


```pony
fun box sol_ax25()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_hci_raw
<span class="source-link">[[Source]](src/net/ossockopt.md#L204)</span>


```pony
fun box sol_hci_raw()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_ipx
<span class="source-link">[[Source]](src/net/ossockopt.md#L205)</span>


```pony
fun box sol_ipx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_l2cap
<span class="source-link">[[Source]](src/net/ossockopt.md#L206)</span>


```pony
fun box sol_l2cap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_local
<span class="source-link">[[Source]](src/net/ossockopt.md#L207)</span>


```pony
fun box sol_local()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_ndrvproto
<span class="source-link">[[Source]](src/net/ossockopt.md#L208)</span>


```pony
fun box sol_ndrvproto()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_netrom
<span class="source-link">[[Source]](src/net/ossockopt.md#L209)</span>


```pony
fun box sol_netrom()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_rds
<span class="source-link">[[Source]](src/net/ossockopt.md#L210)</span>


```pony
fun box sol_rds()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_rfcomm
<span class="source-link">[[Source]](src/net/ossockopt.md#L211)</span>


```pony
fun box sol_rfcomm()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_rose
<span class="source-link">[[Source]](src/net/ossockopt.md#L212)</span>


```pony
fun box sol_rose()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_sco
<span class="source-link">[[Source]](src/net/ossockopt.md#L213)</span>


```pony
fun box sol_sco()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_socket
<span class="source-link">[[Source]](src/net/ossockopt.md#L214)</span>


```pony
fun box sol_socket()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_tipc
<span class="source-link">[[Source]](src/net/ossockopt.md#L215)</span>


```pony
fun box sol_tipc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sol_udp
<span class="source-link">[[Source]](src/net/ossockopt.md#L216)</span>


```pony
fun box sol_udp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### af_coip
<span class="source-link">[[Source]](src/net/ossockopt.md#L225)</span>


```pony
fun box af_coip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### af_inet
<span class="source-link">[[Source]](src/net/ossockopt.md#L226)</span>


```pony
fun box af_inet()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### af_inet6
<span class="source-link">[[Source]](src/net/ossockopt.md#L227)</span>


```pony
fun box af_inet6()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### bluetooth_proto_sco
<span class="source-link">[[Source]](src/net/ossockopt.md#L228)</span>


```pony
fun box bluetooth_proto_sco()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_nr_pkt_types
<span class="source-link">[[Source]](src/net/ossockopt.md#L229)</span>


```pony
fun box dccp_nr_pkt_types()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_service_list_max_len
<span class="source-link">[[Source]](src/net/ossockopt.md#L230)</span>


```pony
fun box dccp_service_list_max_len()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_single_opt_maxlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L231)</span>


```pony
fun box dccp_single_opt_maxlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_available_ccids
<span class="source-link">[[Source]](src/net/ossockopt.md#L232)</span>


```pony
fun box dccp_sockopt_available_ccids()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_ccid
<span class="source-link">[[Source]](src/net/ossockopt.md#L233)</span>


```pony
fun box dccp_sockopt_ccid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_ccid_rx_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L234)</span>


```pony
fun box dccp_sockopt_ccid_rx_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_ccid_tx_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L235)</span>


```pony
fun box dccp_sockopt_ccid_tx_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_change_l
<span class="source-link">[[Source]](src/net/ossockopt.md#L236)</span>


```pony
fun box dccp_sockopt_change_l()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_change_r
<span class="source-link">[[Source]](src/net/ossockopt.md#L237)</span>


```pony
fun box dccp_sockopt_change_r()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_get_cur_mps
<span class="source-link">[[Source]](src/net/ossockopt.md#L238)</span>


```pony
fun box dccp_sockopt_get_cur_mps()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_packet_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L239)</span>


```pony
fun box dccp_sockopt_packet_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_qpolicy_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L240)</span>


```pony
fun box dccp_sockopt_qpolicy_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_qpolicy_txqlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L241)</span>


```pony
fun box dccp_sockopt_qpolicy_txqlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_recv_cscov
<span class="source-link">[[Source]](src/net/ossockopt.md#L242)</span>


```pony
fun box dccp_sockopt_recv_cscov()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_rx_ccid
<span class="source-link">[[Source]](src/net/ossockopt.md#L243)</span>


```pony
fun box dccp_sockopt_rx_ccid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_send_cscov
<span class="source-link">[[Source]](src/net/ossockopt.md#L244)</span>


```pony
fun box dccp_sockopt_send_cscov()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_server_timewait
<span class="source-link">[[Source]](src/net/ossockopt.md#L245)</span>


```pony
fun box dccp_sockopt_server_timewait()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_service
<span class="source-link">[[Source]](src/net/ossockopt.md#L246)</span>


```pony
fun box dccp_sockopt_service()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dccp_sockopt_tx_ccid
<span class="source-link">[[Source]](src/net/ossockopt.md#L247)</span>


```pony
fun box dccp_sockopt_tx_ccid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_acceptmode
<span class="source-link">[[Source]](src/net/ossockopt.md#L248)</span>


```pony
fun box dso_acceptmode()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_conaccept
<span class="source-link">[[Source]](src/net/ossockopt.md#L249)</span>


```pony
fun box dso_conaccept()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_conaccess
<span class="source-link">[[Source]](src/net/ossockopt.md#L250)</span>


```pony
fun box dso_conaccess()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_condata
<span class="source-link">[[Source]](src/net/ossockopt.md#L251)</span>


```pony
fun box dso_condata()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_conreject
<span class="source-link">[[Source]](src/net/ossockopt.md#L252)</span>


```pony
fun box dso_conreject()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_cork
<span class="source-link">[[Source]](src/net/ossockopt.md#L253)</span>


```pony
fun box dso_cork()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_disdata
<span class="source-link">[[Source]](src/net/ossockopt.md#L254)</span>


```pony
fun box dso_disdata()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L255)</span>


```pony
fun box dso_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_linkinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L256)</span>


```pony
fun box dso_linkinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L257)</span>


```pony
fun box dso_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_maxwindow
<span class="source-link">[[Source]](src/net/ossockopt.md#L258)</span>


```pony
fun box dso_maxwindow()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_nodelay
<span class="source-link">[[Source]](src/net/ossockopt.md#L259)</span>


```pony
fun box dso_nodelay()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_seqpacket
<span class="source-link">[[Source]](src/net/ossockopt.md#L260)</span>


```pony
fun box dso_seqpacket()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_services
<span class="source-link">[[Source]](src/net/ossockopt.md#L261)</span>


```pony
fun box dso_services()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### dso_stream
<span class="source-link">[[Source]](src/net/ossockopt.md#L262)</span>


```pony
fun box dso_stream()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_address
<span class="source-link">[[Source]](src/net/ossockopt.md#L263)</span>


```pony
fun box icmp_address()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_addressreply
<span class="source-link">[[Source]](src/net/ossockopt.md#L264)</span>


```pony
fun box icmp_addressreply()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_dest_unreach
<span class="source-link">[[Source]](src/net/ossockopt.md#L265)</span>


```pony
fun box icmp_dest_unreach()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_echo
<span class="source-link">[[Source]](src/net/ossockopt.md#L266)</span>


```pony
fun box icmp_echo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_echoreply
<span class="source-link">[[Source]](src/net/ossockopt.md#L267)</span>


```pony
fun box icmp_echoreply()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_exc_fragtime
<span class="source-link">[[Source]](src/net/ossockopt.md#L268)</span>


```pony
fun box icmp_exc_fragtime()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_exc_ttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L269)</span>


```pony
fun box icmp_exc_ttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L270)</span>


```pony
fun box icmp_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_frag_needed
<span class="source-link">[[Source]](src/net/ossockopt.md#L271)</span>


```pony
fun box icmp_frag_needed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_host_ano
<span class="source-link">[[Source]](src/net/ossockopt.md#L272)</span>


```pony
fun box icmp_host_ano()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_host_isolated
<span class="source-link">[[Source]](src/net/ossockopt.md#L273)</span>


```pony
fun box icmp_host_isolated()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_host_unknown
<span class="source-link">[[Source]](src/net/ossockopt.md#L274)</span>


```pony
fun box icmp_host_unknown()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_host_unreach
<span class="source-link">[[Source]](src/net/ossockopt.md#L275)</span>


```pony
fun box icmp_host_unreach()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_host_unr_tos
<span class="source-link">[[Source]](src/net/ossockopt.md#L276)</span>


```pony
fun box icmp_host_unr_tos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_info_reply
<span class="source-link">[[Source]](src/net/ossockopt.md#L277)</span>


```pony
fun box icmp_info_reply()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_info_request
<span class="source-link">[[Source]](src/net/ossockopt.md#L278)</span>


```pony
fun box icmp_info_request()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_net_ano
<span class="source-link">[[Source]](src/net/ossockopt.md#L279)</span>


```pony
fun box icmp_net_ano()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_net_unknown
<span class="source-link">[[Source]](src/net/ossockopt.md#L280)</span>


```pony
fun box icmp_net_unknown()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_net_unreach
<span class="source-link">[[Source]](src/net/ossockopt.md#L281)</span>


```pony
fun box icmp_net_unreach()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_net_unr_tos
<span class="source-link">[[Source]](src/net/ossockopt.md#L282)</span>


```pony
fun box icmp_net_unr_tos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_parameterprob
<span class="source-link">[[Source]](src/net/ossockopt.md#L283)</span>


```pony
fun box icmp_parameterprob()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_pkt_filtered
<span class="source-link">[[Source]](src/net/ossockopt.md#L284)</span>


```pony
fun box icmp_pkt_filtered()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_port_unreach
<span class="source-link">[[Source]](src/net/ossockopt.md#L285)</span>


```pony
fun box icmp_port_unreach()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_prec_cutoff
<span class="source-link">[[Source]](src/net/ossockopt.md#L286)</span>


```pony
fun box icmp_prec_cutoff()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_prec_violation
<span class="source-link">[[Source]](src/net/ossockopt.md#L287)</span>


```pony
fun box icmp_prec_violation()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_prot_unreach
<span class="source-link">[[Source]](src/net/ossockopt.md#L288)</span>


```pony
fun box icmp_prot_unreach()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_redirect
<span class="source-link">[[Source]](src/net/ossockopt.md#L289)</span>


```pony
fun box icmp_redirect()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_redir_host
<span class="source-link">[[Source]](src/net/ossockopt.md#L290)</span>


```pony
fun box icmp_redir_host()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_redir_hosttos
<span class="source-link">[[Source]](src/net/ossockopt.md#L291)</span>


```pony
fun box icmp_redir_hosttos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_redir_net
<span class="source-link">[[Source]](src/net/ossockopt.md#L292)</span>


```pony
fun box icmp_redir_net()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_redir_nettos
<span class="source-link">[[Source]](src/net/ossockopt.md#L293)</span>


```pony
fun box icmp_redir_nettos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_source_quench
<span class="source-link">[[Source]](src/net/ossockopt.md#L294)</span>


```pony
fun box icmp_source_quench()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_sr_failed
<span class="source-link">[[Source]](src/net/ossockopt.md#L295)</span>


```pony
fun box icmp_sr_failed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L296)</span>


```pony
fun box icmp_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_timestampreply
<span class="source-link">[[Source]](src/net/ossockopt.md#L297)</span>


```pony
fun box icmp_timestampreply()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### icmp_time_exceeded
<span class="source-link">[[Source]](src/net/ossockopt.md#L298)</span>


```pony
fun box icmp_time_exceeded()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_acceptsourceroute
<span class="source-link">[[Source]](src/net/ossockopt.md#L299)</span>


```pony
fun box ipctl_acceptsourceroute()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_defmtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L300)</span>


```pony
fun box ipctl_defmtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_defttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L301)</span>


```pony
fun box ipctl_defttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_directedbroadcast
<span class="source-link">[[Source]](src/net/ossockopt.md#L302)</span>


```pony
fun box ipctl_directedbroadcast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_fastforwarding
<span class="source-link">[[Source]](src/net/ossockopt.md#L303)</span>


```pony
fun box ipctl_fastforwarding()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_forwarding
<span class="source-link">[[Source]](src/net/ossockopt.md#L304)</span>


```pony
fun box ipctl_forwarding()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_gif_ttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L305)</span>


```pony
fun box ipctl_gif_ttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_intrdqdrops
<span class="source-link">[[Source]](src/net/ossockopt.md#L306)</span>


```pony
fun box ipctl_intrdqdrops()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_intrdqmaxlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L307)</span>


```pony
fun box ipctl_intrdqmaxlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_intrqdrops
<span class="source-link">[[Source]](src/net/ossockopt.md#L308)</span>


```pony
fun box ipctl_intrqdrops()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_intrqmaxlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L309)</span>


```pony
fun box ipctl_intrqmaxlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_keepfaith
<span class="source-link">[[Source]](src/net/ossockopt.md#L310)</span>


```pony
fun box ipctl_keepfaith()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_maxid
<span class="source-link">[[Source]](src/net/ossockopt.md#L311)</span>


```pony
fun box ipctl_maxid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_rtexpire
<span class="source-link">[[Source]](src/net/ossockopt.md#L312)</span>


```pony
fun box ipctl_rtexpire()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_rtmaxcache
<span class="source-link">[[Source]](src/net/ossockopt.md#L313)</span>


```pony
fun box ipctl_rtmaxcache()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_rtminexpire
<span class="source-link">[[Source]](src/net/ossockopt.md#L314)</span>


```pony
fun box ipctl_rtminexpire()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_sendredirects
<span class="source-link">[[Source]](src/net/ossockopt.md#L315)</span>


```pony
fun box ipctl_sendredirects()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_sourceroute
<span class="source-link">[[Source]](src/net/ossockopt.md#L316)</span>


```pony
fun box ipctl_sourceroute()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipctl_stats
<span class="source-link">[[Source]](src/net/ossockopt.md#L317)</span>


```pony
fun box ipctl_stats()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_ephemeralfirst
<span class="source-link">[[Source]](src/net/ossockopt.md#L318)</span>


```pony
fun box ipport_ephemeralfirst()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_ephemerallast
<span class="source-link">[[Source]](src/net/ossockopt.md#L319)</span>


```pony
fun box ipport_ephemerallast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_hifirstauto
<span class="source-link">[[Source]](src/net/ossockopt.md#L320)</span>


```pony
fun box ipport_hifirstauto()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_hilastauto
<span class="source-link">[[Source]](src/net/ossockopt.md#L321)</span>


```pony
fun box ipport_hilastauto()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L322)</span>


```pony
fun box ipport_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_reserved
<span class="source-link">[[Source]](src/net/ossockopt.md#L323)</span>


```pony
fun box ipport_reserved()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_reservedstart
<span class="source-link">[[Source]](src/net/ossockopt.md#L324)</span>


```pony
fun box ipport_reservedstart()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipport_userreserved
<span class="source-link">[[Source]](src/net/ossockopt.md#L325)</span>


```pony
fun box ipport_userreserved()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292dstopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L326)</span>


```pony
fun box ipv6_2292dstopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292hoplimit
<span class="source-link">[[Source]](src/net/ossockopt.md#L327)</span>


```pony
fun box ipv6_2292hoplimit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292hopopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L328)</span>


```pony
fun box ipv6_2292hopopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292pktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L329)</span>


```pony
fun box ipv6_2292pktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292pktoptions
<span class="source-link">[[Source]](src/net/ossockopt.md#L330)</span>


```pony
fun box ipv6_2292pktoptions()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_2292rthdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L331)</span>


```pony
fun box ipv6_2292rthdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_addrform
<span class="source-link">[[Source]](src/net/ossockopt.md#L332)</span>


```pony
fun box ipv6_addrform()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_addr_preferences
<span class="source-link">[[Source]](src/net/ossockopt.md#L333)</span>


```pony
fun box ipv6_addr_preferences()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_add_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L334)</span>


```pony
fun box ipv6_add_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_authhdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L335)</span>


```pony
fun box ipv6_authhdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_autoflowlabel
<span class="source-link">[[Source]](src/net/ossockopt.md#L336)</span>


```pony
fun box ipv6_autoflowlabel()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_checksum
<span class="source-link">[[Source]](src/net/ossockopt.md#L337)</span>


```pony
fun box ipv6_checksum()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_dontfrag
<span class="source-link">[[Source]](src/net/ossockopt.md#L338)</span>


```pony
fun box ipv6_dontfrag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_drop_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L339)</span>


```pony
fun box ipv6_drop_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_dstopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L340)</span>


```pony
fun box ipv6_dstopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_flowinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L341)</span>


```pony
fun box ipv6_flowinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_flowinfo_flowlabel
<span class="source-link">[[Source]](src/net/ossockopt.md#L342)</span>


```pony
fun box ipv6_flowinfo_flowlabel()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_flowinfo_priority
<span class="source-link">[[Source]](src/net/ossockopt.md#L343)</span>


```pony
fun box ipv6_flowinfo_priority()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_flowinfo_send
<span class="source-link">[[Source]](src/net/ossockopt.md#L344)</span>


```pony
fun box ipv6_flowinfo_send()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_flowlabel_mgr
<span class="source-link">[[Source]](src/net/ossockopt.md#L345)</span>


```pony
fun box ipv6_flowlabel_mgr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_a_get
<span class="source-link">[[Source]](src/net/ossockopt.md#L346)</span>


```pony
fun box ipv6_fl_a_get()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_a_put
<span class="source-link">[[Source]](src/net/ossockopt.md#L347)</span>


```pony
fun box ipv6_fl_a_put()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_a_renew
<span class="source-link">[[Source]](src/net/ossockopt.md#L348)</span>


```pony
fun box ipv6_fl_a_renew()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_f_create
<span class="source-link">[[Source]](src/net/ossockopt.md#L349)</span>


```pony
fun box ipv6_fl_f_create()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_f_excl
<span class="source-link">[[Source]](src/net/ossockopt.md#L350)</span>


```pony
fun box ipv6_fl_f_excl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_f_reflect
<span class="source-link">[[Source]](src/net/ossockopt.md#L351)</span>


```pony
fun box ipv6_fl_f_reflect()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_f_remote
<span class="source-link">[[Source]](src/net/ossockopt.md#L352)</span>


```pony
fun box ipv6_fl_f_remote()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_s_any
<span class="source-link">[[Source]](src/net/ossockopt.md#L353)</span>


```pony
fun box ipv6_fl_s_any()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_s_excl
<span class="source-link">[[Source]](src/net/ossockopt.md#L354)</span>


```pony
fun box ipv6_fl_s_excl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_s_none
<span class="source-link">[[Source]](src/net/ossockopt.md#L355)</span>


```pony
fun box ipv6_fl_s_none()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_s_process
<span class="source-link">[[Source]](src/net/ossockopt.md#L356)</span>


```pony
fun box ipv6_fl_s_process()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_fl_s_user
<span class="source-link">[[Source]](src/net/ossockopt.md#L357)</span>


```pony
fun box ipv6_fl_s_user()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_hoplimit
<span class="source-link">[[Source]](src/net/ossockopt.md#L358)</span>


```pony
fun box ipv6_hoplimit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_hopopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L359)</span>


```pony
fun box ipv6_hopopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_ipsec_policy
<span class="source-link">[[Source]](src/net/ossockopt.md#L360)</span>


```pony
fun box ipv6_ipsec_policy()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_join_anycast
<span class="source-link">[[Source]](src/net/ossockopt.md#L361)</span>


```pony
fun box ipv6_join_anycast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_leave_anycast
<span class="source-link">[[Source]](src/net/ossockopt.md#L362)</span>


```pony
fun box ipv6_leave_anycast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_minhopcount
<span class="source-link">[[Source]](src/net/ossockopt.md#L363)</span>


```pony
fun box ipv6_minhopcount()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L364)</span>


```pony
fun box ipv6_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_mtu_discover
<span class="source-link">[[Source]](src/net/ossockopt.md#L365)</span>


```pony
fun box ipv6_mtu_discover()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_multicast_hops
<span class="source-link">[[Source]](src/net/ossockopt.md#L366)</span>


```pony
fun box ipv6_multicast_hops()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_multicast_if
<span class="source-link">[[Source]](src/net/ossockopt.md#L367)</span>


```pony
fun box ipv6_multicast_if()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_multicast_loop
<span class="source-link">[[Source]](src/net/ossockopt.md#L368)</span>


```pony
fun box ipv6_multicast_loop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_nexthop
<span class="source-link">[[Source]](src/net/ossockopt.md#L369)</span>


```pony
fun box ipv6_nexthop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_origdstaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L370)</span>


```pony
fun box ipv6_origdstaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pathmtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L371)</span>


```pony
fun box ipv6_pathmtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L372)</span>


```pony
fun box ipv6_pktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_do
<span class="source-link">[[Source]](src/net/ossockopt.md#L373)</span>


```pony
fun box ipv6_pmtudisc_do()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_dont
<span class="source-link">[[Source]](src/net/ossockopt.md#L374)</span>


```pony
fun box ipv6_pmtudisc_dont()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_interface
<span class="source-link">[[Source]](src/net/ossockopt.md#L375)</span>


```pony
fun box ipv6_pmtudisc_interface()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_omit
<span class="source-link">[[Source]](src/net/ossockopt.md#L376)</span>


```pony
fun box ipv6_pmtudisc_omit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_probe
<span class="source-link">[[Source]](src/net/ossockopt.md#L377)</span>


```pony
fun box ipv6_pmtudisc_probe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_pmtudisc_want
<span class="source-link">[[Source]](src/net/ossockopt.md#L378)</span>


```pony
fun box ipv6_pmtudisc_want()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_cga
<span class="source-link">[[Source]](src/net/ossockopt.md#L379)</span>


```pony
fun box ipv6_prefer_src_cga()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_coa
<span class="source-link">[[Source]](src/net/ossockopt.md#L380)</span>


```pony
fun box ipv6_prefer_src_coa()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_home
<span class="source-link">[[Source]](src/net/ossockopt.md#L381)</span>


```pony
fun box ipv6_prefer_src_home()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_noncga
<span class="source-link">[[Source]](src/net/ossockopt.md#L382)</span>


```pony
fun box ipv6_prefer_src_noncga()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_public
<span class="source-link">[[Source]](src/net/ossockopt.md#L383)</span>


```pony
fun box ipv6_prefer_src_public()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_pubtmp_default
<span class="source-link">[[Source]](src/net/ossockopt.md#L384)</span>


```pony
fun box ipv6_prefer_src_pubtmp_default()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_prefer_src_tmp
<span class="source-link">[[Source]](src/net/ossockopt.md#L385)</span>


```pony
fun box ipv6_prefer_src_tmp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_10
<span class="source-link">[[Source]](src/net/ossockopt.md#L386)</span>


```pony
fun box ipv6_priority_10()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_11
<span class="source-link">[[Source]](src/net/ossockopt.md#L387)</span>


```pony
fun box ipv6_priority_11()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_12
<span class="source-link">[[Source]](src/net/ossockopt.md#L388)</span>


```pony
fun box ipv6_priority_12()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_13
<span class="source-link">[[Source]](src/net/ossockopt.md#L389)</span>


```pony
fun box ipv6_priority_13()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_14
<span class="source-link">[[Source]](src/net/ossockopt.md#L390)</span>


```pony
fun box ipv6_priority_14()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_15
<span class="source-link">[[Source]](src/net/ossockopt.md#L391)</span>


```pony
fun box ipv6_priority_15()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_8
<span class="source-link">[[Source]](src/net/ossockopt.md#L392)</span>


```pony
fun box ipv6_priority_8()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_9
<span class="source-link">[[Source]](src/net/ossockopt.md#L393)</span>


```pony
fun box ipv6_priority_9()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_bulk
<span class="source-link">[[Source]](src/net/ossockopt.md#L394)</span>


```pony
fun box ipv6_priority_bulk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_control
<span class="source-link">[[Source]](src/net/ossockopt.md#L395)</span>


```pony
fun box ipv6_priority_control()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_filler
<span class="source-link">[[Source]](src/net/ossockopt.md#L396)</span>


```pony
fun box ipv6_priority_filler()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_interactive
<span class="source-link">[[Source]](src/net/ossockopt.md#L397)</span>


```pony
fun box ipv6_priority_interactive()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_reserved1
<span class="source-link">[[Source]](src/net/ossockopt.md#L398)</span>


```pony
fun box ipv6_priority_reserved1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_reserved2
<span class="source-link">[[Source]](src/net/ossockopt.md#L399)</span>


```pony
fun box ipv6_priority_reserved2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_unattended
<span class="source-link">[[Source]](src/net/ossockopt.md#L400)</span>


```pony
fun box ipv6_priority_unattended()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_priority_uncharacterized
<span class="source-link">[[Source]](src/net/ossockopt.md#L401)</span>


```pony
fun box ipv6_priority_uncharacterized()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvdstopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L402)</span>


```pony
fun box ipv6_recvdstopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recverr
<span class="source-link">[[Source]](src/net/ossockopt.md#L403)</span>


```pony
fun box ipv6_recverr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvhoplimit
<span class="source-link">[[Source]](src/net/ossockopt.md#L404)</span>


```pony
fun box ipv6_recvhoplimit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvhopopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L405)</span>


```pony
fun box ipv6_recvhopopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvorigdstaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L406)</span>


```pony
fun box ipv6_recvorigdstaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvpathmtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L407)</span>


```pony
fun box ipv6_recvpathmtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvpktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L408)</span>


```pony
fun box ipv6_recvpktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvrthdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L409)</span>


```pony
fun box ipv6_recvrthdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_recvtclass
<span class="source-link">[[Source]](src/net/ossockopt.md#L410)</span>


```pony
fun box ipv6_recvtclass()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_router_alert
<span class="source-link">[[Source]](src/net/ossockopt.md#L411)</span>


```pony
fun box ipv6_router_alert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_rthdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L412)</span>


```pony
fun box ipv6_rthdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_rthdrdstopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L413)</span>


```pony
fun box ipv6_rthdrdstopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tclass
<span class="source-link">[[Source]](src/net/ossockopt.md#L414)</span>


```pony
fun box ipv6_tclass()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tlv_hao
<span class="source-link">[[Source]](src/net/ossockopt.md#L415)</span>


```pony
fun box ipv6_tlv_hao()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tlv_jumbo
<span class="source-link">[[Source]](src/net/ossockopt.md#L416)</span>


```pony
fun box ipv6_tlv_jumbo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tlv_pad1
<span class="source-link">[[Source]](src/net/ossockopt.md#L417)</span>


```pony
fun box ipv6_tlv_pad1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tlv_padn
<span class="source-link">[[Source]](src/net/ossockopt.md#L418)</span>


```pony
fun box ipv6_tlv_padn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_tlv_routeralert
<span class="source-link">[[Source]](src/net/ossockopt.md#L419)</span>


```pony
fun box ipv6_tlv_routeralert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_transparent
<span class="source-link">[[Source]](src/net/ossockopt.md#L420)</span>


```pony
fun box ipv6_transparent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_unicast_hops
<span class="source-link">[[Source]](src/net/ossockopt.md#L421)</span>


```pony
fun box ipv6_unicast_hops()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_unicast_if
<span class="source-link">[[Source]](src/net/ossockopt.md#L422)</span>


```pony
fun box ipv6_unicast_if()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_use_min_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L423)</span>


```pony
fun box ipv6_use_min_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_v6only
<span class="source-link">[[Source]](src/net/ossockopt.md#L424)</span>


```pony
fun box ipv6_v6only()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipv6_xfrm_policy
<span class="source-link">[[Source]](src/net/ossockopt.md#L425)</span>


```pony
fun box ipv6_xfrm_policy()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_address
<span class="source-link">[[Source]](src/net/ossockopt.md#L426)</span>


```pony
fun box ipx_address()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_address_notify
<span class="source-link">[[Source]](src/net/ossockopt.md#L427)</span>


```pony
fun box ipx_address_notify()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_crtitf
<span class="source-link">[[Source]](src/net/ossockopt.md#L428)</span>


```pony
fun box ipx_crtitf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_dltitf
<span class="source-link">[[Source]](src/net/ossockopt.md#L429)</span>


```pony
fun box ipx_dltitf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_dstype
<span class="source-link">[[Source]](src/net/ossockopt.md#L430)</span>


```pony
fun box ipx_dstype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_extended_address
<span class="source-link">[[Source]](src/net/ossockopt.md#L431)</span>


```pony
fun box ipx_extended_address()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_filterptype
<span class="source-link">[[Source]](src/net/ossockopt.md#L432)</span>


```pony
fun box ipx_filterptype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_8022
<span class="source-link">[[Source]](src/net/ossockopt.md#L433)</span>


```pony
fun box ipx_frame_8022()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_8023
<span class="source-link">[[Source]](src/net/ossockopt.md#L434)</span>


```pony
fun box ipx_frame_8023()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_etherii
<span class="source-link">[[Source]](src/net/ossockopt.md#L435)</span>


```pony
fun box ipx_frame_etherii()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_none
<span class="source-link">[[Source]](src/net/ossockopt.md#L436)</span>


```pony
fun box ipx_frame_none()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_snap
<span class="source-link">[[Source]](src/net/ossockopt.md#L437)</span>


```pony
fun box ipx_frame_snap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_frame_tr_8022
<span class="source-link">[[Source]](src/net/ossockopt.md#L438)</span>


```pony
fun box ipx_frame_tr_8022()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_getnetinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L439)</span>


```pony
fun box ipx_getnetinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_getnetinfo_norip
<span class="source-link">[[Source]](src/net/ossockopt.md#L440)</span>


```pony
fun box ipx_getnetinfo_norip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_immediatespxack
<span class="source-link">[[Source]](src/net/ossockopt.md#L441)</span>


```pony
fun box ipx_immediatespxack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_internal
<span class="source-link">[[Source]](src/net/ossockopt.md#L442)</span>


```pony
fun box ipx_internal()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_maxsize
<span class="source-link">[[Source]](src/net/ossockopt.md#L443)</span>


```pony
fun box ipx_maxsize()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_max_adapter_num
<span class="source-link">[[Source]](src/net/ossockopt.md#L444)</span>


```pony
fun box ipx_max_adapter_num()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L445)</span>


```pony
fun box ipx_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_node_len
<span class="source-link">[[Source]](src/net/ossockopt.md#L446)</span>


```pony
fun box ipx_node_len()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_primary
<span class="source-link">[[Source]](src/net/ossockopt.md#L447)</span>


```pony
fun box ipx_primary()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_ptype
<span class="source-link">[[Source]](src/net/ossockopt.md#L448)</span>


```pony
fun box ipx_ptype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_receive_broadcast
<span class="source-link">[[Source]](src/net/ossockopt.md#L449)</span>


```pony
fun box ipx_receive_broadcast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_recvhdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L450)</span>


```pony
fun box ipx_recvhdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_reripnetnumber
<span class="source-link">[[Source]](src/net/ossockopt.md#L451)</span>


```pony
fun box ipx_reripnetnumber()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_route_no_router
<span class="source-link">[[Source]](src/net/ossockopt.md#L452)</span>


```pony
fun box ipx_route_no_router()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_rt_8022
<span class="source-link">[[Source]](src/net/ossockopt.md#L453)</span>


```pony
fun box ipx_rt_8022()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_rt_bluebook
<span class="source-link">[[Source]](src/net/ossockopt.md#L454)</span>


```pony
fun box ipx_rt_bluebook()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_rt_routed
<span class="source-link">[[Source]](src/net/ossockopt.md#L455)</span>


```pony
fun box ipx_rt_routed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_rt_snap
<span class="source-link">[[Source]](src/net/ossockopt.md#L456)</span>


```pony
fun box ipx_rt_snap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_special_none
<span class="source-link">[[Source]](src/net/ossockopt.md#L457)</span>


```pony
fun box ipx_special_none()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_spxgetconnectionstatus
<span class="source-link">[[Source]](src/net/ossockopt.md#L458)</span>


```pony
fun box ipx_spxgetconnectionstatus()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_stopfilterptype
<span class="source-link">[[Source]](src/net/ossockopt.md#L459)</span>


```pony
fun box ipx_stopfilterptype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ipx_type
<span class="source-link">[[Source]](src/net/ossockopt.md#L460)</span>


```pony
fun box ipx_type()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_add_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L461)</span>


```pony
fun box ip_add_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_add_source_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L462)</span>


```pony
fun box ip_add_source_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_bindany
<span class="source-link">[[Source]](src/net/ossockopt.md#L463)</span>


```pony
fun box ip_bindany()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_bindmulti
<span class="source-link">[[Source]](src/net/ossockopt.md#L464)</span>


```pony
fun box ip_bindmulti()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_bind_address_no_port
<span class="source-link">[[Source]](src/net/ossockopt.md#L465)</span>


```pony
fun box ip_bind_address_no_port()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_block_source
<span class="source-link">[[Source]](src/net/ossockopt.md#L466)</span>


```pony
fun box ip_block_source()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_bound_if
<span class="source-link">[[Source]](src/net/ossockopt.md#L467)</span>


```pony
fun box ip_bound_if()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_checksum
<span class="source-link">[[Source]](src/net/ossockopt.md#L468)</span>


```pony
fun box ip_checksum()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_default_multicast_loop
<span class="source-link">[[Source]](src/net/ossockopt.md#L469)</span>


```pony
fun box ip_default_multicast_loop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_default_multicast_ttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L470)</span>


```pony
fun box ip_default_multicast_ttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dontfrag
<span class="source-link">[[Source]](src/net/ossockopt.md#L471)</span>


```pony
fun box ip_dontfrag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_drop_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L472)</span>


```pony
fun box ip_drop_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_drop_source_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L473)</span>


```pony
fun box ip_drop_source_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dummynet3
<span class="source-link">[[Source]](src/net/ossockopt.md#L474)</span>


```pony
fun box ip_dummynet3()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dummynet_configure
<span class="source-link">[[Source]](src/net/ossockopt.md#L475)</span>


```pony
fun box ip_dummynet_configure()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dummynet_del
<span class="source-link">[[Source]](src/net/ossockopt.md#L476)</span>


```pony
fun box ip_dummynet_del()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dummynet_flush
<span class="source-link">[[Source]](src/net/ossockopt.md#L477)</span>


```pony
fun box ip_dummynet_flush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_dummynet_get
<span class="source-link">[[Source]](src/net/ossockopt.md#L478)</span>


```pony
fun box ip_dummynet_get()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_faith
<span class="source-link">[[Source]](src/net/ossockopt.md#L479)</span>


```pony
fun box ip_faith()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_flowid
<span class="source-link">[[Source]](src/net/ossockopt.md#L480)</span>


```pony
fun box ip_flowid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_flowtype
<span class="source-link">[[Source]](src/net/ossockopt.md#L481)</span>


```pony
fun box ip_flowtype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_freebind
<span class="source-link">[[Source]](src/net/ossockopt.md#L482)</span>


```pony
fun box ip_freebind()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw3
<span class="source-link">[[Source]](src/net/ossockopt.md#L483)</span>


```pony
fun box ip_fw3()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_add
<span class="source-link">[[Source]](src/net/ossockopt.md#L484)</span>


```pony
fun box ip_fw_add()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_del
<span class="source-link">[[Source]](src/net/ossockopt.md#L485)</span>


```pony
fun box ip_fw_del()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_flush
<span class="source-link">[[Source]](src/net/ossockopt.md#L486)</span>


```pony
fun box ip_fw_flush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_get
<span class="source-link">[[Source]](src/net/ossockopt.md#L487)</span>


```pony
fun box ip_fw_get()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_nat_cfg
<span class="source-link">[[Source]](src/net/ossockopt.md#L488)</span>


```pony
fun box ip_fw_nat_cfg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_nat_del
<span class="source-link">[[Source]](src/net/ossockopt.md#L489)</span>


```pony
fun box ip_fw_nat_del()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_nat_get_config
<span class="source-link">[[Source]](src/net/ossockopt.md#L490)</span>


```pony
fun box ip_fw_nat_get_config()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_nat_get_log
<span class="source-link">[[Source]](src/net/ossockopt.md#L491)</span>


```pony
fun box ip_fw_nat_get_log()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_resetlog
<span class="source-link">[[Source]](src/net/ossockopt.md#L492)</span>


```pony
fun box ip_fw_resetlog()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_table_add
<span class="source-link">[[Source]](src/net/ossockopt.md#L493)</span>


```pony
fun box ip_fw_table_add()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_table_del
<span class="source-link">[[Source]](src/net/ossockopt.md#L494)</span>


```pony
fun box ip_fw_table_del()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_table_flush
<span class="source-link">[[Source]](src/net/ossockopt.md#L495)</span>


```pony
fun box ip_fw_table_flush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_table_getsize
<span class="source-link">[[Source]](src/net/ossockopt.md#L496)</span>


```pony
fun box ip_fw_table_getsize()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_table_list
<span class="source-link">[[Source]](src/net/ossockopt.md#L497)</span>


```pony
fun box ip_fw_table_list()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_fw_zero
<span class="source-link">[[Source]](src/net/ossockopt.md#L498)</span>


```pony
fun box ip_fw_zero()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_hdrincl
<span class="source-link">[[Source]](src/net/ossockopt.md#L499)</span>


```pony
fun box ip_hdrincl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_ipsec_policy
<span class="source-link">[[Source]](src/net/ossockopt.md#L500)</span>


```pony
fun box ip_ipsec_policy()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_max_group_src_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L501)</span>


```pony
fun box ip_max_group_src_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_max_memberships
<span class="source-link">[[Source]](src/net/ossockopt.md#L502)</span>


```pony
fun box ip_max_memberships()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_max_sock_mute_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L503)</span>


```pony
fun box ip_max_sock_mute_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_max_sock_src_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L504)</span>


```pony
fun box ip_max_sock_src_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_max_source_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L505)</span>


```pony
fun box ip_max_source_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_minttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L506)</span>


```pony
fun box ip_minttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_min_memberships
<span class="source-link">[[Source]](src/net/ossockopt.md#L507)</span>


```pony
fun box ip_min_memberships()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_msfilter
<span class="source-link">[[Source]](src/net/ossockopt.md#L508)</span>


```pony
fun box ip_msfilter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L509)</span>


```pony
fun box ip_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_mtu_discover
<span class="source-link">[[Source]](src/net/ossockopt.md#L510)</span>


```pony
fun box ip_mtu_discover()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_all
<span class="source-link">[[Source]](src/net/ossockopt.md#L511)</span>


```pony
fun box ip_multicast_all()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_if
<span class="source-link">[[Source]](src/net/ossockopt.md#L512)</span>


```pony
fun box ip_multicast_if()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_ifindex
<span class="source-link">[[Source]](src/net/ossockopt.md#L513)</span>


```pony
fun box ip_multicast_ifindex()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_loop
<span class="source-link">[[Source]](src/net/ossockopt.md#L514)</span>


```pony
fun box ip_multicast_loop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_ttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L515)</span>


```pony
fun box ip_multicast_ttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_multicast_vif
<span class="source-link">[[Source]](src/net/ossockopt.md#L516)</span>


```pony
fun box ip_multicast_vif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_nat_xxx
<span class="source-link">[[Source]](src/net/ossockopt.md#L517)</span>


```pony
fun box ip_nat_xxx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_nodefrag
<span class="source-link">[[Source]](src/net/ossockopt.md#L518)</span>


```pony
fun box ip_nodefrag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_add
<span class="source-link">[[Source]](src/net/ossockopt.md#L519)</span>


```pony
fun box ip_old_fw_add()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_del
<span class="source-link">[[Source]](src/net/ossockopt.md#L520)</span>


```pony
fun box ip_old_fw_del()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_flush
<span class="source-link">[[Source]](src/net/ossockopt.md#L521)</span>


```pony
fun box ip_old_fw_flush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_get
<span class="source-link">[[Source]](src/net/ossockopt.md#L522)</span>


```pony
fun box ip_old_fw_get()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_resetlog
<span class="source-link">[[Source]](src/net/ossockopt.md#L523)</span>


```pony
fun box ip_old_fw_resetlog()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_old_fw_zero
<span class="source-link">[[Source]](src/net/ossockopt.md#L524)</span>


```pony
fun box ip_old_fw_zero()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_onesbcast
<span class="source-link">[[Source]](src/net/ossockopt.md#L525)</span>


```pony
fun box ip_onesbcast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_options
<span class="source-link">[[Source]](src/net/ossockopt.md#L526)</span>


```pony
fun box ip_options()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_origdstaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L527)</span>


```pony
fun box ip_origdstaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_passsec
<span class="source-link">[[Source]](src/net/ossockopt.md#L528)</span>


```pony
fun box ip_passsec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L529)</span>


```pony
fun box ip_pktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pktoptions
<span class="source-link">[[Source]](src/net/ossockopt.md#L530)</span>


```pony
fun box ip_pktoptions()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_do
<span class="source-link">[[Source]](src/net/ossockopt.md#L531)</span>


```pony
fun box ip_pmtudisc_do()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_dont
<span class="source-link">[[Source]](src/net/ossockopt.md#L532)</span>


```pony
fun box ip_pmtudisc_dont()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_interface
<span class="source-link">[[Source]](src/net/ossockopt.md#L533)</span>


```pony
fun box ip_pmtudisc_interface()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_omit
<span class="source-link">[[Source]](src/net/ossockopt.md#L534)</span>


```pony
fun box ip_pmtudisc_omit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_probe
<span class="source-link">[[Source]](src/net/ossockopt.md#L535)</span>


```pony
fun box ip_pmtudisc_probe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_pmtudisc_want
<span class="source-link">[[Source]](src/net/ossockopt.md#L536)</span>


```pony
fun box ip_pmtudisc_want()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_portrange
<span class="source-link">[[Source]](src/net/ossockopt.md#L537)</span>


```pony
fun box ip_portrange()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_portrange_default
<span class="source-link">[[Source]](src/net/ossockopt.md#L538)</span>


```pony
fun box ip_portrange_default()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_portrange_high
<span class="source-link">[[Source]](src/net/ossockopt.md#L539)</span>


```pony
fun box ip_portrange_high()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_portrange_low
<span class="source-link">[[Source]](src/net/ossockopt.md#L540)</span>


```pony
fun box ip_portrange_low()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvdstaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L541)</span>


```pony
fun box ip_recvdstaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recverr
<span class="source-link">[[Source]](src/net/ossockopt.md#L542)</span>


```pony
fun box ip_recverr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvflowid
<span class="source-link">[[Source]](src/net/ossockopt.md#L543)</span>


```pony
fun box ip_recvflowid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvif
<span class="source-link">[[Source]](src/net/ossockopt.md#L544)</span>


```pony
fun box ip_recvif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L545)</span>


```pony
fun box ip_recvopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvorigdstaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L546)</span>


```pony
fun box ip_recvorigdstaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvpktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L547)</span>


```pony
fun box ip_recvpktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvretopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L548)</span>


```pony
fun box ip_recvretopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvrssbucketid
<span class="source-link">[[Source]](src/net/ossockopt.md#L549)</span>


```pony
fun box ip_recvrssbucketid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvtos
<span class="source-link">[[Source]](src/net/ossockopt.md#L550)</span>


```pony
fun box ip_recvtos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_recvttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L551)</span>


```pony
fun box ip_recvttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_retopts
<span class="source-link">[[Source]](src/net/ossockopt.md#L552)</span>


```pony
fun box ip_retopts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_router_alert
<span class="source-link">[[Source]](src/net/ossockopt.md#L553)</span>


```pony
fun box ip_router_alert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rssbucketid
<span class="source-link">[[Source]](src/net/ossockopt.md#L554)</span>


```pony
fun box ip_rssbucketid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rss_listen_bucket
<span class="source-link">[[Source]](src/net/ossockopt.md#L555)</span>


```pony
fun box ip_rss_listen_bucket()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rsvp_off
<span class="source-link">[[Source]](src/net/ossockopt.md#L556)</span>


```pony
fun box ip_rsvp_off()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rsvp_on
<span class="source-link">[[Source]](src/net/ossockopt.md#L557)</span>


```pony
fun box ip_rsvp_on()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rsvp_vif_off
<span class="source-link">[[Source]](src/net/ossockopt.md#L558)</span>


```pony
fun box ip_rsvp_vif_off()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_rsvp_vif_on
<span class="source-link">[[Source]](src/net/ossockopt.md#L559)</span>


```pony
fun box ip_rsvp_vif_on()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_sendsrcaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L560)</span>


```pony
fun box ip_sendsrcaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_striphdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L561)</span>


```pony
fun box ip_striphdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_tos
<span class="source-link">[[Source]](src/net/ossockopt.md#L562)</span>


```pony
fun box ip_tos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_traffic_mgt_background
<span class="source-link">[[Source]](src/net/ossockopt.md#L563)</span>


```pony
fun box ip_traffic_mgt_background()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_transparent
<span class="source-link">[[Source]](src/net/ossockopt.md#L564)</span>


```pony
fun box ip_transparent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_ttl
<span class="source-link">[[Source]](src/net/ossockopt.md#L565)</span>


```pony
fun box ip_ttl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_unblock_source
<span class="source-link">[[Source]](src/net/ossockopt.md#L566)</span>


```pony
fun box ip_unblock_source()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_unicast_if
<span class="source-link">[[Source]](src/net/ossockopt.md#L567)</span>


```pony
fun box ip_unicast_if()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ip_xfrm_policy
<span class="source-link">[[Source]](src/net/ossockopt.md#L568)</span>


```pony
fun box ip_xfrm_policy()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_connwait
<span class="source-link">[[Source]](src/net/ossockopt.md#L569)</span>


```pony
fun box local_connwait()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_creds
<span class="source-link">[[Source]](src/net/ossockopt.md#L570)</span>


```pony
fun box local_creds()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_peercred
<span class="source-link">[[Source]](src/net/ossockopt.md#L571)</span>


```pony
fun box local_peercred()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_peerepid
<span class="source-link">[[Source]](src/net/ossockopt.md#L572)</span>


```pony
fun box local_peerepid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_peereuuid
<span class="source-link">[[Source]](src/net/ossockopt.md#L573)</span>


```pony
fun box local_peereuuid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_peerpid
<span class="source-link">[[Source]](src/net/ossockopt.md#L574)</span>


```pony
fun box local_peerpid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_peeruuid
<span class="source-link">[[Source]](src/net/ossockopt.md#L575)</span>


```pony
fun box local_peeruuid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### local_vendor
<span class="source-link">[[Source]](src/net/ossockopt.md#L576)</span>


```pony
fun box local_vendor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### max_tcpoptlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L577)</span>


```pony
fun box max_tcpoptlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_block_source
<span class="source-link">[[Source]](src/net/ossockopt.md#L578)</span>


```pony
fun box mcast_block_source()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_exclude
<span class="source-link">[[Source]](src/net/ossockopt.md#L579)</span>


```pony
fun box mcast_exclude()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_include
<span class="source-link">[[Source]](src/net/ossockopt.md#L580)</span>


```pony
fun box mcast_include()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_join_group
<span class="source-link">[[Source]](src/net/ossockopt.md#L581)</span>


```pony
fun box mcast_join_group()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_join_source_group
<span class="source-link">[[Source]](src/net/ossockopt.md#L582)</span>


```pony
fun box mcast_join_source_group()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_leave_group
<span class="source-link">[[Source]](src/net/ossockopt.md#L583)</span>


```pony
fun box mcast_leave_group()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_leave_source_group
<span class="source-link">[[Source]](src/net/ossockopt.md#L584)</span>


```pony
fun box mcast_leave_source_group()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_msfilter
<span class="source-link">[[Source]](src/net/ossockopt.md#L585)</span>


```pony
fun box mcast_msfilter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_unblock_source
<span class="source-link">[[Source]](src/net/ossockopt.md#L586)</span>


```pony
fun box mcast_unblock_source()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mcast_undefined
<span class="source-link">[[Source]](src/net/ossockopt.md#L587)</span>


```pony
fun box mcast_undefined()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_add_bw_upcall
<span class="source-link">[[Source]](src/net/ossockopt.md#L588)</span>


```pony
fun box mrt_add_bw_upcall()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_add_mfc
<span class="source-link">[[Source]](src/net/ossockopt.md#L589)</span>


```pony
fun box mrt_add_mfc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_add_vif
<span class="source-link">[[Source]](src/net/ossockopt.md#L590)</span>


```pony
fun box mrt_add_vif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_api_config
<span class="source-link">[[Source]](src/net/ossockopt.md#L591)</span>


```pony
fun box mrt_api_config()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_api_flags_all
<span class="source-link">[[Source]](src/net/ossockopt.md#L592)</span>


```pony
fun box mrt_api_flags_all()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_api_support
<span class="source-link">[[Source]](src/net/ossockopt.md#L593)</span>


```pony
fun box mrt_api_support()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_assert
<span class="source-link">[[Source]](src/net/ossockopt.md#L594)</span>


```pony
fun box mrt_assert()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_del_bw_upcall
<span class="source-link">[[Source]](src/net/ossockopt.md#L595)</span>


```pony
fun box mrt_del_bw_upcall()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_del_mfc
<span class="source-link">[[Source]](src/net/ossockopt.md#L596)</span>


```pony
fun box mrt_del_mfc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_del_vif
<span class="source-link">[[Source]](src/net/ossockopt.md#L597)</span>


```pony
fun box mrt_del_vif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_done
<span class="source-link">[[Source]](src/net/ossockopt.md#L598)</span>


```pony
fun box mrt_done()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_init
<span class="source-link">[[Source]](src/net/ossockopt.md#L599)</span>


```pony
fun box mrt_init()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_mfc_bw_upcall
<span class="source-link">[[Source]](src/net/ossockopt.md#L600)</span>


```pony
fun box mrt_mfc_bw_upcall()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_mfc_flags_all
<span class="source-link">[[Source]](src/net/ossockopt.md#L601)</span>


```pony
fun box mrt_mfc_flags_all()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_mfc_flags_border_vif
<span class="source-link">[[Source]](src/net/ossockopt.md#L602)</span>


```pony
fun box mrt_mfc_flags_border_vif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_mfc_flags_disable_wrongvif
<span class="source-link">[[Source]](src/net/ossockopt.md#L603)</span>


```pony
fun box mrt_mfc_flags_disable_wrongvif()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_mfc_rp
<span class="source-link">[[Source]](src/net/ossockopt.md#L604)</span>


```pony
fun box mrt_mfc_rp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_pim
<span class="source-link">[[Source]](src/net/ossockopt.md#L605)</span>


```pony
fun box mrt_pim()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### mrt_version
<span class="source-link">[[Source]](src/net/ossockopt.md#L606)</span>


```pony
fun box mrt_version()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### msg_notification
<span class="source-link">[[Source]](src/net/ossockopt.md#L607)</span>


```pony
fun box msg_notification()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### msg_socallbck
<span class="source-link">[[Source]](src/net/ossockopt.md#L608)</span>


```pony
fun box msg_socallbck()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrvproto_ndrv
<span class="source-link">[[Source]](src/net/ossockopt.md#L609)</span>


```pony
fun box ndrvproto_ndrv()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_addmulticast
<span class="source-link">[[Source]](src/net/ossockopt.md#L610)</span>


```pony
fun box ndrv_addmulticast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_deldmxspec
<span class="source-link">[[Source]](src/net/ossockopt.md#L611)</span>


```pony
fun box ndrv_deldmxspec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_delmulticast
<span class="source-link">[[Source]](src/net/ossockopt.md#L612)</span>


```pony
fun box ndrv_delmulticast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_demuxtype_ethertype
<span class="source-link">[[Source]](src/net/ossockopt.md#L613)</span>


```pony
fun box ndrv_demuxtype_ethertype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_demuxtype_sap
<span class="source-link">[[Source]](src/net/ossockopt.md#L614)</span>


```pony
fun box ndrv_demuxtype_sap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_demuxtype_snap
<span class="source-link">[[Source]](src/net/ossockopt.md#L615)</span>


```pony
fun box ndrv_demuxtype_snap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_dmux_max_descr
<span class="source-link">[[Source]](src/net/ossockopt.md#L616)</span>


```pony
fun box ndrv_dmux_max_descr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_protocol_desc_vers
<span class="source-link">[[Source]](src/net/ossockopt.md#L617)</span>


```pony
fun box ndrv_protocol_desc_vers()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ndrv_setdmxspec
<span class="source-link">[[Source]](src/net/ossockopt.md#L618)</span>


```pony
fun box ndrv_setdmxspec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_add_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L619)</span>


```pony
fun box netlink_add_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_audit
<span class="source-link">[[Source]](src/net/ossockopt.md#L620)</span>


```pony
fun box netlink_audit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_broadcast_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L621)</span>


```pony
fun box netlink_broadcast_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_cap_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L622)</span>


```pony
fun box netlink_cap_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_connector
<span class="source-link">[[Source]](src/net/ossockopt.md#L623)</span>


```pony
fun box netlink_connector()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_crypto
<span class="source-link">[[Source]](src/net/ossockopt.md#L624)</span>


```pony
fun box netlink_crypto()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_dnrtmsg
<span class="source-link">[[Source]](src/net/ossockopt.md#L625)</span>


```pony
fun box netlink_dnrtmsg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_drop_membership
<span class="source-link">[[Source]](src/net/ossockopt.md#L626)</span>


```pony
fun box netlink_drop_membership()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_ecryptfs
<span class="source-link">[[Source]](src/net/ossockopt.md#L627)</span>


```pony
fun box netlink_ecryptfs()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_fib_lookup
<span class="source-link">[[Source]](src/net/ossockopt.md#L628)</span>


```pony
fun box netlink_fib_lookup()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_firewall
<span class="source-link">[[Source]](src/net/ossockopt.md#L629)</span>


```pony
fun box netlink_firewall()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_generic
<span class="source-link">[[Source]](src/net/ossockopt.md#L630)</span>


```pony
fun box netlink_generic()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_inet_diag
<span class="source-link">[[Source]](src/net/ossockopt.md#L631)</span>


```pony
fun box netlink_inet_diag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_ip6_fw
<span class="source-link">[[Source]](src/net/ossockopt.md#L632)</span>


```pony
fun box netlink_ip6_fw()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_iscsi
<span class="source-link">[[Source]](src/net/ossockopt.md#L633)</span>


```pony
fun box netlink_iscsi()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_kobject_uevent
<span class="source-link">[[Source]](src/net/ossockopt.md#L634)</span>


```pony
fun box netlink_kobject_uevent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_listen_all_nsid
<span class="source-link">[[Source]](src/net/ossockopt.md#L635)</span>


```pony
fun box netlink_listen_all_nsid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_list_memberships
<span class="source-link">[[Source]](src/net/ossockopt.md#L636)</span>


```pony
fun box netlink_list_memberships()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_netfilter
<span class="source-link">[[Source]](src/net/ossockopt.md#L637)</span>


```pony
fun box netlink_netfilter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_nflog
<span class="source-link">[[Source]](src/net/ossockopt.md#L638)</span>


```pony
fun box netlink_nflog()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_no_enobufs
<span class="source-link">[[Source]](src/net/ossockopt.md#L639)</span>


```pony
fun box netlink_no_enobufs()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_pktinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L640)</span>


```pony
fun box netlink_pktinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_rdma
<span class="source-link">[[Source]](src/net/ossockopt.md#L641)</span>


```pony
fun box netlink_rdma()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_route
<span class="source-link">[[Source]](src/net/ossockopt.md#L642)</span>


```pony
fun box netlink_route()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_rx_ring
<span class="source-link">[[Source]](src/net/ossockopt.md#L643)</span>


```pony
fun box netlink_rx_ring()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_scsitransport
<span class="source-link">[[Source]](src/net/ossockopt.md#L644)</span>


```pony
fun box netlink_scsitransport()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_selinux
<span class="source-link">[[Source]](src/net/ossockopt.md#L645)</span>


```pony
fun box netlink_selinux()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_sock_diag
<span class="source-link">[[Source]](src/net/ossockopt.md#L646)</span>


```pony
fun box netlink_sock_diag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_tx_ring
<span class="source-link">[[Source]](src/net/ossockopt.md#L647)</span>


```pony
fun box netlink_tx_ring()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_unused
<span class="source-link">[[Source]](src/net/ossockopt.md#L648)</span>


```pony
fun box netlink_unused()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_usersock
<span class="source-link">[[Source]](src/net/ossockopt.md#L649)</span>


```pony
fun box netlink_usersock()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netlink_xfrm
<span class="source-link">[[Source]](src/net/ossockopt.md#L650)</span>


```pony
fun box netlink_xfrm()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_idle
<span class="source-link">[[Source]](src/net/ossockopt.md#L651)</span>


```pony
fun box netrom_idle()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_kill
<span class="source-link">[[Source]](src/net/ossockopt.md#L652)</span>


```pony
fun box netrom_kill()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_n2
<span class="source-link">[[Source]](src/net/ossockopt.md#L653)</span>


```pony
fun box netrom_n2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_neigh
<span class="source-link">[[Source]](src/net/ossockopt.md#L654)</span>


```pony
fun box netrom_neigh()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_node
<span class="source-link">[[Source]](src/net/ossockopt.md#L655)</span>


```pony
fun box netrom_node()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_paclen
<span class="source-link">[[Source]](src/net/ossockopt.md#L656)</span>


```pony
fun box netrom_paclen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_t1
<span class="source-link">[[Source]](src/net/ossockopt.md#L657)</span>


```pony
fun box netrom_t1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_t2
<span class="source-link">[[Source]](src/net/ossockopt.md#L658)</span>


```pony
fun box netrom_t2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### netrom_t4
<span class="source-link">[[Source]](src/net/ossockopt.md#L659)</span>


```pony
fun box netrom_t4()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### nrdv_multicast_addrs_per_sock
<span class="source-link">[[Source]](src/net/ossockopt.md#L660)</span>


```pony
fun box nrdv_multicast_addrs_per_sock()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### pvd_config
<span class="source-link">[[Source]](src/net/ossockopt.md#L661)</span>


```pony
fun box pvd_config()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cancel_sent_to
<span class="source-link">[[Source]](src/net/ossockopt.md#L662)</span>


```pony
fun box rds_cancel_sent_to()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_atomic_cswp
<span class="source-link">[[Source]](src/net/ossockopt.md#L663)</span>


```pony
fun box rds_cmsg_atomic_cswp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_atomic_fadd
<span class="source-link">[[Source]](src/net/ossockopt.md#L664)</span>


```pony
fun box rds_cmsg_atomic_fadd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_cong_update
<span class="source-link">[[Source]](src/net/ossockopt.md#L665)</span>


```pony
fun box rds_cmsg_cong_update()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_masked_atomic_cswp
<span class="source-link">[[Source]](src/net/ossockopt.md#L666)</span>


```pony
fun box rds_cmsg_masked_atomic_cswp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_masked_atomic_fadd
<span class="source-link">[[Source]](src/net/ossockopt.md#L667)</span>


```pony
fun box rds_cmsg_masked_atomic_fadd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_rdma_args
<span class="source-link">[[Source]](src/net/ossockopt.md#L668)</span>


```pony
fun box rds_cmsg_rdma_args()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_rdma_dest
<span class="source-link">[[Source]](src/net/ossockopt.md#L669)</span>


```pony
fun box rds_cmsg_rdma_dest()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_rdma_map
<span class="source-link">[[Source]](src/net/ossockopt.md#L670)</span>


```pony
fun box rds_cmsg_rdma_map()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cmsg_rdma_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L671)</span>


```pony
fun box rds_cmsg_rdma_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cong_monitor
<span class="source-link">[[Source]](src/net/ossockopt.md#L672)</span>


```pony
fun box rds_cong_monitor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_cong_monitor_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L673)</span>


```pony
fun box rds_cong_monitor_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_free_mr
<span class="source-link">[[Source]](src/net/ossockopt.md#L674)</span>


```pony
fun box rds_free_mr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_get_mr
<span class="source-link">[[Source]](src/net/ossockopt.md#L675)</span>


```pony
fun box rds_get_mr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_get_mr_for_dest
<span class="source-link">[[Source]](src/net/ossockopt.md#L676)</span>


```pony
fun box rds_get_mr_for_dest()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_ib_abi_version
<span class="source-link">[[Source]](src/net/ossockopt.md#L677)</span>


```pony
fun box rds_ib_abi_version()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_ib_gid_len
<span class="source-link">[[Source]](src/net/ossockopt.md#L678)</span>


```pony
fun box rds_ib_gid_len()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_connections
<span class="source-link">[[Source]](src/net/ossockopt.md#L679)</span>


```pony
fun box rds_info_connections()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_connection_flag_connected
<span class="source-link">[[Source]](src/net/ossockopt.md#L680)</span>


```pony
fun box rds_info_connection_flag_connected()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_connection_flag_connecting
<span class="source-link">[[Source]](src/net/ossockopt.md#L681)</span>


```pony
fun box rds_info_connection_flag_connecting()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_connection_flag_sending
<span class="source-link">[[Source]](src/net/ossockopt.md#L682)</span>


```pony
fun box rds_info_connection_flag_sending()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_connection_stats
<span class="source-link">[[Source]](src/net/ossockopt.md#L683)</span>


```pony
fun box rds_info_connection_stats()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_counters
<span class="source-link">[[Source]](src/net/ossockopt.md#L684)</span>


```pony
fun box rds_info_counters()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_first
<span class="source-link">[[Source]](src/net/ossockopt.md#L685)</span>


```pony
fun box rds_info_first()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_ib_connections
<span class="source-link">[[Source]](src/net/ossockopt.md#L686)</span>


```pony
fun box rds_info_ib_connections()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_iwarp_connections
<span class="source-link">[[Source]](src/net/ossockopt.md#L687)</span>


```pony
fun box rds_info_iwarp_connections()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_last
<span class="source-link">[[Source]](src/net/ossockopt.md#L688)</span>


```pony
fun box rds_info_last()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_message_flag_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L689)</span>


```pony
fun box rds_info_message_flag_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_message_flag_fast_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L690)</span>


```pony
fun box rds_info_message_flag_fast_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_recv_messages
<span class="source-link">[[Source]](src/net/ossockopt.md#L691)</span>


```pony
fun box rds_info_recv_messages()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_retrans_messages
<span class="source-link">[[Source]](src/net/ossockopt.md#L692)</span>


```pony
fun box rds_info_retrans_messages()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_send_messages
<span class="source-link">[[Source]](src/net/ossockopt.md#L693)</span>


```pony
fun box rds_info_send_messages()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_sockets
<span class="source-link">[[Source]](src/net/ossockopt.md#L694)</span>


```pony
fun box rds_info_sockets()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_info_tcp_sockets
<span class="source-link">[[Source]](src/net/ossockopt.md#L695)</span>


```pony
fun box rds_info_tcp_sockets()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_canceled
<span class="source-link">[[Source]](src/net/ossockopt.md#L696)</span>


```pony
fun box rds_rdma_canceled()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_dontwait
<span class="source-link">[[Source]](src/net/ossockopt.md#L697)</span>


```pony
fun box rds_rdma_dontwait()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_dropped
<span class="source-link">[[Source]](src/net/ossockopt.md#L698)</span>


```pony
fun box rds_rdma_dropped()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_fence
<span class="source-link">[[Source]](src/net/ossockopt.md#L699)</span>


```pony
fun box rds_rdma_fence()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_invalidate
<span class="source-link">[[Source]](src/net/ossockopt.md#L700)</span>


```pony
fun box rds_rdma_invalidate()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_notify_me
<span class="source-link">[[Source]](src/net/ossockopt.md#L701)</span>


```pony
fun box rds_rdma_notify_me()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_other_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L702)</span>


```pony
fun box rds_rdma_other_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_readwrite
<span class="source-link">[[Source]](src/net/ossockopt.md#L703)</span>


```pony
fun box rds_rdma_readwrite()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_remote_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L704)</span>


```pony
fun box rds_rdma_remote_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_silent
<span class="source-link">[[Source]](src/net/ossockopt.md#L705)</span>


```pony
fun box rds_rdma_silent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_success
<span class="source-link">[[Source]](src/net/ossockopt.md#L706)</span>


```pony
fun box rds_rdma_success()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_rdma_use_once
<span class="source-link">[[Source]](src/net/ossockopt.md#L707)</span>


```pony
fun box rds_rdma_use_once()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_recverr
<span class="source-link">[[Source]](src/net/ossockopt.md#L708)</span>


```pony
fun box rds_recverr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_trans_count
<span class="source-link">[[Source]](src/net/ossockopt.md#L709)</span>


```pony
fun box rds_trans_count()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_trans_ib
<span class="source-link">[[Source]](src/net/ossockopt.md#L710)</span>


```pony
fun box rds_trans_ib()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_trans_iwarp
<span class="source-link">[[Source]](src/net/ossockopt.md#L711)</span>


```pony
fun box rds_trans_iwarp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_trans_none
<span class="source-link">[[Source]](src/net/ossockopt.md#L712)</span>


```pony
fun box rds_trans_none()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rds_trans_tcp
<span class="source-link">[[Source]](src/net/ossockopt.md#L713)</span>


```pony
fun box rds_trans_tcp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_access_barred
<span class="source-link">[[Source]](src/net/ossockopt.md#L714)</span>


```pony
fun box rose_access_barred()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_defer
<span class="source-link">[[Source]](src/net/ossockopt.md#L715)</span>


```pony
fun box rose_defer()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_dte_originated
<span class="source-link">[[Source]](src/net/ossockopt.md#L716)</span>


```pony
fun box rose_dte_originated()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_holdback
<span class="source-link">[[Source]](src/net/ossockopt.md#L717)</span>


```pony
fun box rose_holdback()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_idle
<span class="source-link">[[Source]](src/net/ossockopt.md#L718)</span>


```pony
fun box rose_idle()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_invalid_facility
<span class="source-link">[[Source]](src/net/ossockopt.md#L719)</span>


```pony
fun box rose_invalid_facility()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_local_procedure
<span class="source-link">[[Source]](src/net/ossockopt.md#L720)</span>


```pony
fun box rose_local_procedure()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_max_digis
<span class="source-link">[[Source]](src/net/ossockopt.md#L721)</span>


```pony
fun box rose_max_digis()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L722)</span>


```pony
fun box rose_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_network_congestion
<span class="source-link">[[Source]](src/net/ossockopt.md#L723)</span>


```pony
fun box rose_network_congestion()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_not_obtainable
<span class="source-link">[[Source]](src/net/ossockopt.md#L724)</span>


```pony
fun box rose_not_obtainable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_number_busy
<span class="source-link">[[Source]](src/net/ossockopt.md#L725)</span>


```pony
fun box rose_number_busy()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_out_of_order
<span class="source-link">[[Source]](src/net/ossockopt.md#L726)</span>


```pony
fun box rose_out_of_order()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_qbitincl
<span class="source-link">[[Source]](src/net/ossockopt.md#L727)</span>


```pony
fun box rose_qbitincl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_remote_procedure
<span class="source-link">[[Source]](src/net/ossockopt.md#L728)</span>


```pony
fun box rose_remote_procedure()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_ship_absent
<span class="source-link">[[Source]](src/net/ossockopt.md#L729)</span>


```pony
fun box rose_ship_absent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_t1
<span class="source-link">[[Source]](src/net/ossockopt.md#L730)</span>


```pony
fun box rose_t1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_t2
<span class="source-link">[[Source]](src/net/ossockopt.md#L731)</span>


```pony
fun box rose_t2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### rose_t3
<span class="source-link">[[Source]](src/net/ossockopt.md#L732)</span>


```pony
fun box rose_t3()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### scm_hci_raw_direction
<span class="source-link">[[Source]](src/net/ossockopt.md#L733)</span>


```pony
fun box scm_hci_raw_direction()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### scm_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L734)</span>


```pony
fun box scm_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### scm_timestamping
<span class="source-link">[[Source]](src/net/ossockopt.md#L735)</span>


```pony
fun box scm_timestamping()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### scm_timestampns
<span class="source-link">[[Source]](src/net/ossockopt.md#L736)</span>


```pony
fun box scm_timestampns()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### scm_wifi_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L737)</span>


```pony
fun box scm_wifi_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_abort_association
<span class="source-link">[[Source]](src/net/ossockopt.md#L738)</span>


```pony
fun box sctp_abort_association()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_adaptation_layer
<span class="source-link">[[Source]](src/net/ossockopt.md#L739)</span>


```pony
fun box sctp_adaptation_layer()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_adaption_layer
<span class="source-link">[[Source]](src/net/ossockopt.md#L740)</span>


```pony
fun box sctp_adaption_layer()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_add_streams
<span class="source-link">[[Source]](src/net/ossockopt.md#L741)</span>


```pony
fun box sctp_add_streams()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_add_vrf_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L742)</span>


```pony
fun box sctp_add_vrf_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_asconf
<span class="source-link">[[Source]](src/net/ossockopt.md#L743)</span>


```pony
fun box sctp_asconf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_asconf_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L744)</span>


```pony
fun box sctp_asconf_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_asconf_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L745)</span>


```pony
fun box sctp_asconf_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_associnfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L746)</span>


```pony
fun box sctp_associnfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_authentication
<span class="source-link">[[Source]](src/net/ossockopt.md#L747)</span>


```pony
fun box sctp_authentication()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_active_key
<span class="source-link">[[Source]](src/net/ossockopt.md#L748)</span>


```pony
fun box sctp_auth_active_key()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_chunk
<span class="source-link">[[Source]](src/net/ossockopt.md#L749)</span>


```pony
fun box sctp_auth_chunk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_deactivate_key
<span class="source-link">[[Source]](src/net/ossockopt.md#L750)</span>


```pony
fun box sctp_auth_deactivate_key()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_delete_key
<span class="source-link">[[Source]](src/net/ossockopt.md#L751)</span>


```pony
fun box sctp_auth_delete_key()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_key
<span class="source-link">[[Source]](src/net/ossockopt.md#L752)</span>


```pony
fun box sctp_auth_key()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auth_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L753)</span>


```pony
fun box sctp_auth_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_autoclose
<span class="source-link">[[Source]](src/net/ossockopt.md#L754)</span>


```pony
fun box sctp_autoclose()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_auto_asconf
<span class="source-link">[[Source]](src/net/ossockopt.md#L755)</span>


```pony
fun box sctp_auto_asconf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_badcrc
<span class="source-link">[[Source]](src/net/ossockopt.md#L756)</span>


```pony
fun box sctp_badcrc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_bindx_add_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L757)</span>


```pony
fun box sctp_bindx_add_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_bindx_rem_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L758)</span>


```pony
fun box sctp_bindx_rem_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_blk_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L759)</span>


```pony
fun box sctp_blk_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_bound
<span class="source-link">[[Source]](src/net/ossockopt.md#L760)</span>


```pony
fun box sctp_bound()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_cookie_in_shutdown
<span class="source-link">[[Source]](src/net/ossockopt.md#L761)</span>


```pony
fun box sctp_cause_cookie_in_shutdown()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_deleting_last_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L762)</span>


```pony
fun box sctp_cause_deleting_last_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_deleting_src_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L763)</span>


```pony
fun box sctp_cause_deleting_src_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_illegal_asconf_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L764)</span>


```pony
fun box sctp_cause_illegal_asconf_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_invalid_param
<span class="source-link">[[Source]](src/net/ossockopt.md#L765)</span>


```pony
fun box sctp_cause_invalid_param()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_invalid_stream
<span class="source-link">[[Source]](src/net/ossockopt.md#L766)</span>


```pony
fun box sctp_cause_invalid_stream()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_missing_param
<span class="source-link">[[Source]](src/net/ossockopt.md#L767)</span>


```pony
fun box sctp_cause_missing_param()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_nat_colliding_state
<span class="source-link">[[Source]](src/net/ossockopt.md#L768)</span>


```pony
fun box sctp_cause_nat_colliding_state()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_nat_missing_state
<span class="source-link">[[Source]](src/net/ossockopt.md#L769)</span>


```pony
fun box sctp_cause_nat_missing_state()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_no_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L770)</span>


```pony
fun box sctp_cause_no_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_no_user_data
<span class="source-link">[[Source]](src/net/ossockopt.md#L771)</span>


```pony
fun box sctp_cause_no_user_data()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_out_of_resc
<span class="source-link">[[Source]](src/net/ossockopt.md#L772)</span>


```pony
fun box sctp_cause_out_of_resc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_protocol_violation
<span class="source-link">[[Source]](src/net/ossockopt.md#L773)</span>


```pony
fun box sctp_cause_protocol_violation()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_request_refused
<span class="source-link">[[Source]](src/net/ossockopt.md#L774)</span>


```pony
fun box sctp_cause_request_refused()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_resource_shortage
<span class="source-link">[[Source]](src/net/ossockopt.md#L775)</span>


```pony
fun box sctp_cause_resource_shortage()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_restart_w_newaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L776)</span>


```pony
fun box sctp_cause_restart_w_newaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_stale_cookie
<span class="source-link">[[Source]](src/net/ossockopt.md#L777)</span>


```pony
fun box sctp_cause_stale_cookie()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_unrecog_chunk
<span class="source-link">[[Source]](src/net/ossockopt.md#L778)</span>


```pony
fun box sctp_cause_unrecog_chunk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_unrecog_param
<span class="source-link">[[Source]](src/net/ossockopt.md#L779)</span>


```pony
fun box sctp_cause_unrecog_param()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_unresolvable_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L780)</span>


```pony
fun box sctp_cause_unresolvable_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_unsupported_hmacid
<span class="source-link">[[Source]](src/net/ossockopt.md#L781)</span>


```pony
fun box sctp_cause_unsupported_hmacid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cause_user_initiated_abt
<span class="source-link">[[Source]](src/net/ossockopt.md#L782)</span>


```pony
fun box sctp_cause_user_initiated_abt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_hstcp
<span class="source-link">[[Source]](src/net/ossockopt.md#L783)</span>


```pony
fun box sctp_cc_hstcp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_htcp
<span class="source-link">[[Source]](src/net/ossockopt.md#L784)</span>


```pony
fun box sctp_cc_htcp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_option
<span class="source-link">[[Source]](src/net/ossockopt.md#L785)</span>


```pony
fun box sctp_cc_option()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_opt_rtcc_setmode
<span class="source-link">[[Source]](src/net/ossockopt.md#L786)</span>


```pony
fun box sctp_cc_opt_rtcc_setmode()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_opt_steady_step
<span class="source-link">[[Source]](src/net/ossockopt.md#L787)</span>


```pony
fun box sctp_cc_opt_steady_step()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_opt_use_dccc_ecn
<span class="source-link">[[Source]](src/net/ossockopt.md#L788)</span>


```pony
fun box sctp_cc_opt_use_dccc_ecn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_rfc2581
<span class="source-link">[[Source]](src/net/ossockopt.md#L789)</span>


```pony
fun box sctp_cc_rfc2581()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cc_rtcc
<span class="source-link">[[Source]](src/net/ossockopt.md#L790)</span>


```pony
fun box sctp_cc_rtcc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_closed
<span class="source-link">[[Source]](src/net/ossockopt.md#L791)</span>


```pony
fun box sctp_closed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_clr_stat_log
<span class="source-link">[[Source]](src/net/ossockopt.md#L792)</span>


```pony
fun box sctp_clr_stat_log()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_base
<span class="source-link">[[Source]](src/net/ossockopt.md#L793)</span>


```pony
fun box sctp_cmt_base()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L794)</span>


```pony
fun box sctp_cmt_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_mptcp
<span class="source-link">[[Source]](src/net/ossockopt.md#L795)</span>


```pony
fun box sctp_cmt_mptcp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_off
<span class="source-link">[[Source]](src/net/ossockopt.md#L796)</span>


```pony
fun box sctp_cmt_off()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_on_off
<span class="source-link">[[Source]](src/net/ossockopt.md#L797)</span>


```pony
fun box sctp_cmt_on_off()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_rpv1
<span class="source-link">[[Source]](src/net/ossockopt.md#L798)</span>


```pony
fun box sctp_cmt_rpv1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_rpv2
<span class="source-link">[[Source]](src/net/ossockopt.md#L799)</span>


```pony
fun box sctp_cmt_rpv2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cmt_use_dac
<span class="source-link">[[Source]](src/net/ossockopt.md#L800)</span>


```pony
fun box sctp_cmt_use_dac()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_connect_x
<span class="source-link">[[Source]](src/net/ossockopt.md#L801)</span>


```pony
fun box sctp_connect_x()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_connect_x_complete
<span class="source-link">[[Source]](src/net/ossockopt.md#L802)</span>


```pony
fun box sctp_connect_x_complete()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_connect_x_delayed
<span class="source-link">[[Source]](src/net/ossockopt.md#L803)</span>


```pony
fun box sctp_connect_x_delayed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_context
<span class="source-link">[[Source]](src/net/ossockopt.md#L804)</span>


```pony
fun box sctp_context()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cookie_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L805)</span>


```pony
fun box sctp_cookie_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cookie_echo
<span class="source-link">[[Source]](src/net/ossockopt.md#L806)</span>


```pony
fun box sctp_cookie_echo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cookie_echoed
<span class="source-link">[[Source]](src/net/ossockopt.md#L807)</span>


```pony
fun box sctp_cookie_echoed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cookie_wait
<span class="source-link">[[Source]](src/net/ossockopt.md#L808)</span>


```pony
fun box sctp_cookie_wait()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cwnd_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L809)</span>


```pony
fun box sctp_cwnd_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cwnd_monitor_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L810)</span>


```pony
fun box sctp_cwnd_monitor_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cwr_in_same_window
<span class="source-link">[[Source]](src/net/ossockopt.md#L811)</span>


```pony
fun box sctp_cwr_in_same_window()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_cwr_reduce_override
<span class="source-link">[[Source]](src/net/ossockopt.md#L812)</span>


```pony
fun box sctp_cwr_reduce_override()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data
<span class="source-link">[[Source]](src/net/ossockopt.md#L813)</span>


```pony
fun box sctp_data()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_first_frag
<span class="source-link">[[Source]](src/net/ossockopt.md#L814)</span>


```pony
fun box sctp_data_first_frag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_frag_mask
<span class="source-link">[[Source]](src/net/ossockopt.md#L815)</span>


```pony
fun box sctp_data_frag_mask()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_last_frag
<span class="source-link">[[Source]](src/net/ossockopt.md#L816)</span>


```pony
fun box sctp_data_last_frag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_middle_frag
<span class="source-link">[[Source]](src/net/ossockopt.md#L817)</span>


```pony
fun box sctp_data_middle_frag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_not_frag
<span class="source-link">[[Source]](src/net/ossockopt.md#L818)</span>


```pony
fun box sctp_data_not_frag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_sack_immediately
<span class="source-link">[[Source]](src/net/ossockopt.md#L819)</span>


```pony
fun box sctp_data_sack_immediately()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_data_unordered
<span class="source-link">[[Source]](src/net/ossockopt.md#L820)</span>


```pony
fun box sctp_data_unordered()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_default_prinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L821)</span>


```pony
fun box sctp_default_prinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_default_send_param
<span class="source-link">[[Source]](src/net/ossockopt.md#L822)</span>


```pony
fun box sctp_default_send_param()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_default_sndinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L823)</span>


```pony
fun box sctp_default_sndinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_delayed_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L824)</span>


```pony
fun box sctp_delayed_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_del_vrf_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L825)</span>


```pony
fun box sctp_del_vrf_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_disable_fragments
<span class="source-link">[[Source]](src/net/ossockopt.md#L826)</span>


```pony
fun box sctp_disable_fragments()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ecn_cwr
<span class="source-link">[[Source]](src/net/ossockopt.md#L827)</span>


```pony
fun box sctp_ecn_cwr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ecn_echo
<span class="source-link">[[Source]](src/net/ossockopt.md#L828)</span>


```pony
fun box sctp_ecn_echo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ecn_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L829)</span>


```pony
fun box sctp_ecn_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_enable_change_assoc_req
<span class="source-link">[[Source]](src/net/ossockopt.md#L830)</span>


```pony
fun box sctp_enable_change_assoc_req()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_enable_reset_assoc_req
<span class="source-link">[[Source]](src/net/ossockopt.md#L831)</span>


```pony
fun box sctp_enable_reset_assoc_req()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_enable_reset_stream_req
<span class="source-link">[[Source]](src/net/ossockopt.md#L832)</span>


```pony
fun box sctp_enable_reset_stream_req()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_enable_stream_reset
<span class="source-link">[[Source]](src/net/ossockopt.md#L833)</span>


```pony
fun box sctp_enable_stream_reset()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_enable_value_mask
<span class="source-link">[[Source]](src/net/ossockopt.md#L834)</span>


```pony
fun box sctp_enable_value_mask()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_established
<span class="source-link">[[Source]](src/net/ossockopt.md#L835)</span>


```pony
fun box sctp_established()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_event
<span class="source-link">[[Source]](src/net/ossockopt.md#L836)</span>


```pony
fun box sctp_event()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_events
<span class="source-link">[[Source]](src/net/ossockopt.md#L837)</span>


```pony
fun box sctp_events()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_explicit_eor
<span class="source-link">[[Source]](src/net/ossockopt.md#L838)</span>


```pony
fun box sctp_explicit_eor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_flight_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L839)</span>


```pony
fun box sctp_flight_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_forward_cum_tsn
<span class="source-link">[[Source]](src/net/ossockopt.md#L840)</span>


```pony
fun box sctp_forward_cum_tsn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_fragment_interleave
<span class="source-link">[[Source]](src/net/ossockopt.md#L841)</span>


```pony
fun box sctp_fragment_interleave()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_frag_level_0
<span class="source-link">[[Source]](src/net/ossockopt.md#L842)</span>


```pony
fun box sctp_frag_level_0()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_frag_level_1
<span class="source-link">[[Source]](src/net/ossockopt.md#L843)</span>


```pony
fun box sctp_frag_level_1()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_frag_level_2
<span class="source-link">[[Source]](src/net/ossockopt.md#L844)</span>


```pony
fun box sctp_frag_level_2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_from_middle_box
<span class="source-link">[[Source]](src/net/ossockopt.md#L845)</span>


```pony
fun box sctp_from_middle_box()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_fr_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L846)</span>


```pony
fun box sctp_fr_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_addr_len
<span class="source-link">[[Source]](src/net/ossockopt.md#L847)</span>


```pony
fun box sctp_get_addr_len()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_asoc_vrf
<span class="source-link">[[Source]](src/net/ossockopt.md#L848)</span>


```pony
fun box sctp_get_asoc_vrf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_assoc_id_list
<span class="source-link">[[Source]](src/net/ossockopt.md#L849)</span>


```pony
fun box sctp_get_assoc_id_list()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_assoc_number
<span class="source-link">[[Source]](src/net/ossockopt.md#L850)</span>


```pony
fun box sctp_get_assoc_number()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_local_addresses
<span class="source-link">[[Source]](src/net/ossockopt.md#L851)</span>


```pony
fun box sctp_get_local_addresses()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_local_addr_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L852)</span>


```pony
fun box sctp_get_local_addr_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_nonce_values
<span class="source-link">[[Source]](src/net/ossockopt.md#L853)</span>


```pony
fun box sctp_get_nonce_values()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_packet_log
<span class="source-link">[[Source]](src/net/ossockopt.md#L854)</span>


```pony
fun box sctp_get_packet_log()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_peer_addresses
<span class="source-link">[[Source]](src/net/ossockopt.md#L855)</span>


```pony
fun box sctp_get_peer_addresses()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_peer_addr_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L856)</span>


```pony
fun box sctp_get_peer_addr_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_remote_addr_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L857)</span>


```pony
fun box sctp_get_remote_addr_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_sndbuf_use
<span class="source-link">[[Source]](src/net/ossockopt.md#L858)</span>


```pony
fun box sctp_get_sndbuf_use()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_stat_log
<span class="source-link">[[Source]](src/net/ossockopt.md#L859)</span>


```pony
fun box sctp_get_stat_log()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_get_vrf_ids
<span class="source-link">[[Source]](src/net/ossockopt.md#L860)</span>


```pony
fun box sctp_get_vrf_ids()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_had_no_tcb
<span class="source-link">[[Source]](src/net/ossockopt.md#L861)</span>


```pony
fun box sctp_had_no_tcb()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_heartbeat_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L862)</span>


```pony
fun box sctp_heartbeat_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_heartbeat_request
<span class="source-link">[[Source]](src/net/ossockopt.md#L863)</span>


```pony
fun box sctp_heartbeat_request()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_hmac_ident
<span class="source-link">[[Source]](src/net/ossockopt.md#L864)</span>


```pony
fun box sctp_hmac_ident()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_idata
<span class="source-link">[[Source]](src/net/ossockopt.md#L865)</span>


```pony
fun box sctp_idata()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_iforward_cum_tsn
<span class="source-link">[[Source]](src/net/ossockopt.md#L866)</span>


```pony
fun box sctp_iforward_cum_tsn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_initiation
<span class="source-link">[[Source]](src/net/ossockopt.md#L867)</span>


```pony
fun box sctp_initiation()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_initiation_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L868)</span>


```pony
fun box sctp_initiation_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_initmsg
<span class="source-link">[[Source]](src/net/ossockopt.md#L869)</span>


```pony
fun box sctp_initmsg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_interleaving_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L870)</span>


```pony
fun box sctp_interleaving_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_i_want_mapped_v4_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L871)</span>


```pony
fun box sctp_i_want_mapped_v4_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_last_packet_tracing
<span class="source-link">[[Source]](src/net/ossockopt.md#L872)</span>


```pony
fun box sctp_last_packet_tracing()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_listen
<span class="source-link">[[Source]](src/net/ossockopt.md#L873)</span>


```pony
fun box sctp_listen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_local_auth_chunks
<span class="source-link">[[Source]](src/net/ossockopt.md#L874)</span>


```pony
fun box sctp_local_auth_chunks()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_lock_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L875)</span>


```pony
fun box sctp_lock_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_at_send_2_outq
<span class="source-link">[[Source]](src/net/ossockopt.md#L876)</span>


```pony
fun box sctp_log_at_send_2_outq()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_at_send_2_sctp
<span class="source-link">[[Source]](src/net/ossockopt.md#L877)</span>


```pony
fun box sctp_log_at_send_2_sctp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_maxburst_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L878)</span>


```pony
fun box sctp_log_maxburst_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_rwnd_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L879)</span>


```pony
fun box sctp_log_rwnd_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_sack_arrivals_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L880)</span>


```pony
fun box sctp_log_sack_arrivals_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_log_try_advance
<span class="source-link">[[Source]](src/net/ossockopt.md#L881)</span>


```pony
fun box sctp_log_try_advance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ltrace_chunk_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L882)</span>


```pony
fun box sctp_ltrace_chunk_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ltrace_error_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L883)</span>


```pony
fun box sctp_ltrace_error_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_map_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L884)</span>


```pony
fun box sctp_map_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_maxburst
<span class="source-link">[[Source]](src/net/ossockopt.md#L885)</span>


```pony
fun box sctp_maxburst()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_maxseg
<span class="source-link">[[Source]](src/net/ossockopt.md#L886)</span>


```pony
fun box sctp_maxseg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_max_burst
<span class="source-link">[[Source]](src/net/ossockopt.md#L887)</span>


```pony
fun box sctp_max_burst()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_max_cookie_life
<span class="source-link">[[Source]](src/net/ossockopt.md#L888)</span>


```pony
fun box sctp_max_cookie_life()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_max_cwnd
<span class="source-link">[[Source]](src/net/ossockopt.md#L889)</span>


```pony
fun box sctp_max_cwnd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_max_hb_interval
<span class="source-link">[[Source]](src/net/ossockopt.md#L890)</span>


```pony
fun box sctp_max_hb_interval()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_max_sack_delay
<span class="source-link">[[Source]](src/net/ossockopt.md#L891)</span>


```pony
fun box sctp_max_sack_delay()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_mbcnt_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L892)</span>


```pony
fun box sctp_mbcnt_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_mbuf_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L893)</span>


```pony
fun box sctp_mbuf_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_mobility_base
<span class="source-link">[[Source]](src/net/ossockopt.md#L894)</span>


```pony
fun box sctp_mobility_base()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_mobility_fasthandoff
<span class="source-link">[[Source]](src/net/ossockopt.md#L895)</span>


```pony
fun box sctp_mobility_fasthandoff()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_mobility_prim_deleted
<span class="source-link">[[Source]](src/net/ossockopt.md#L896)</span>


```pony
fun box sctp_mobility_prim_deleted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_nagle_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L897)</span>


```pony
fun box sctp_nagle_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_nodelay
<span class="source-link">[[Source]](src/net/ossockopt.md#L898)</span>


```pony
fun box sctp_nodelay()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_nrsack_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L899)</span>


```pony
fun box sctp_nrsack_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_nr_selective_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L900)</span>


```pony
fun box sctp_nr_selective_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_operation_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L901)</span>


```pony
fun box sctp_operation_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_packed
<span class="source-link">[[Source]](src/net/ossockopt.md#L902)</span>


```pony
fun box sctp_packed()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_packet_dropped
<span class="source-link">[[Source]](src/net/ossockopt.md#L903)</span>


```pony
fun box sctp_packet_dropped()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_packet_log_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L904)</span>


```pony
fun box sctp_packet_log_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_packet_truncated
<span class="source-link">[[Source]](src/net/ossockopt.md#L905)</span>


```pony
fun box sctp_packet_truncated()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pad_chunk
<span class="source-link">[[Source]](src/net/ossockopt.md#L906)</span>


```pony
fun box sctp_pad_chunk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_partial_delivery_point
<span class="source-link">[[Source]](src/net/ossockopt.md#L907)</span>


```pony
fun box sctp_partial_delivery_point()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_copy_flags
<span class="source-link">[[Source]](src/net/ossockopt.md#L908)</span>


```pony
fun box sctp_pcb_copy_flags()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_accepting
<span class="source-link">[[Source]](src/net/ossockopt.md#L909)</span>


```pony
fun box sctp_pcb_flags_accepting()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_adaptationevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L910)</span>


```pony
fun box sctp_pcb_flags_adaptationevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_assoc_resetevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L911)</span>


```pony
fun box sctp_pcb_flags_assoc_resetevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_authevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L912)</span>


```pony
fun box sctp_pcb_flags_authevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_autoclose
<span class="source-link">[[Source]](src/net/ossockopt.md#L913)</span>


```pony
fun box sctp_pcb_flags_autoclose()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_auto_asconf
<span class="source-link">[[Source]](src/net/ossockopt.md#L914)</span>


```pony
fun box sctp_pcb_flags_auto_asconf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_blocking_io
<span class="source-link">[[Source]](src/net/ossockopt.md#L915)</span>


```pony
fun box sctp_pcb_flags_blocking_io()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_boundall
<span class="source-link">[[Source]](src/net/ossockopt.md#L916)</span>


```pony
fun box sctp_pcb_flags_boundall()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_bound_v6
<span class="source-link">[[Source]](src/net/ossockopt.md#L917)</span>


```pony
fun box sctp_pcb_flags_bound_v6()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_close_ip
<span class="source-link">[[Source]](src/net/ossockopt.md#L918)</span>


```pony
fun box sctp_pcb_flags_close_ip()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_connected
<span class="source-link">[[Source]](src/net/ossockopt.md#L919)</span>


```pony
fun box sctp_pcb_flags_connected()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_donot_heartbeat
<span class="source-link">[[Source]](src/net/ossockopt.md#L920)</span>


```pony
fun box sctp_pcb_flags_donot_heartbeat()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_dont_wake
<span class="source-link">[[Source]](src/net/ossockopt.md#L921)</span>


```pony
fun box sctp_pcb_flags_dont_wake()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_do_asconf
<span class="source-link">[[Source]](src/net/ossockopt.md#L922)</span>


```pony
fun box sctp_pcb_flags_do_asconf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_do_not_pmtud
<span class="source-link">[[Source]](src/net/ossockopt.md#L923)</span>


```pony
fun box sctp_pcb_flags_do_not_pmtud()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_dryevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L924)</span>


```pony
fun box sctp_pcb_flags_dryevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_explicit_eor
<span class="source-link">[[Source]](src/net/ossockopt.md#L925)</span>


```pony
fun box sctp_pcb_flags_explicit_eor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_ext_rcvinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L926)</span>


```pony
fun box sctp_pcb_flags_ext_rcvinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_frag_interleave
<span class="source-link">[[Source]](src/net/ossockopt.md#L927)</span>


```pony
fun box sctp_pcb_flags_frag_interleave()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_interleave_strms
<span class="source-link">[[Source]](src/net/ossockopt.md#L928)</span>


```pony
fun box sctp_pcb_flags_interleave_strms()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_in_tcppool
<span class="source-link">[[Source]](src/net/ossockopt.md#L929)</span>


```pony
fun box sctp_pcb_flags_in_tcppool()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_multiple_asconfs
<span class="source-link">[[Source]](src/net/ossockopt.md#L930)</span>


```pony
fun box sctp_pcb_flags_multiple_asconfs()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_needs_mapped_v4
<span class="source-link">[[Source]](src/net/ossockopt.md#L931)</span>


```pony
fun box sctp_pcb_flags_needs_mapped_v4()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_nodelay
<span class="source-link">[[Source]](src/net/ossockopt.md#L932)</span>


```pony
fun box sctp_pcb_flags_nodelay()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_no_fragment
<span class="source-link">[[Source]](src/net/ossockopt.md#L933)</span>


```pony
fun box sctp_pcb_flags_no_fragment()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_pdapievnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L934)</span>


```pony
fun box sctp_pcb_flags_pdapievnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_portreuse
<span class="source-link">[[Source]](src/net/ossockopt.md#L935)</span>


```pony
fun box sctp_pcb_flags_portreuse()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvassocevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L936)</span>


```pony
fun box sctp_pcb_flags_recvassocevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvdataioevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L937)</span>


```pony
fun box sctp_pcb_flags_recvdataioevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvnsendfailevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L938)</span>


```pony
fun box sctp_pcb_flags_recvnsendfailevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvnxtinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L939)</span>


```pony
fun box sctp_pcb_flags_recvnxtinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvpaddrevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L940)</span>


```pony
fun box sctp_pcb_flags_recvpaddrevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvpeererr
<span class="source-link">[[Source]](src/net/ossockopt.md#L941)</span>


```pony
fun box sctp_pcb_flags_recvpeererr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvrcvinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L942)</span>


```pony
fun box sctp_pcb_flags_recvrcvinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvsendfailevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L943)</span>


```pony
fun box sctp_pcb_flags_recvsendfailevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_recvshutdownevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L944)</span>


```pony
fun box sctp_pcb_flags_recvshutdownevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_socket_allgone
<span class="source-link">[[Source]](src/net/ossockopt.md#L945)</span>


```pony
fun box sctp_pcb_flags_socket_allgone()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_socket_cant_read
<span class="source-link">[[Source]](src/net/ossockopt.md#L946)</span>


```pony
fun box sctp_pcb_flags_socket_cant_read()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_socket_gone
<span class="source-link">[[Source]](src/net/ossockopt.md#L947)</span>


```pony
fun box sctp_pcb_flags_socket_gone()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_stream_changeevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L948)</span>


```pony
fun box sctp_pcb_flags_stream_changeevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_stream_resetevnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L949)</span>


```pony
fun box sctp_pcb_flags_stream_resetevnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_tcptype
<span class="source-link">[[Source]](src/net/ossockopt.md#L950)</span>


```pony
fun box sctp_pcb_flags_tcptype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_udptype
<span class="source-link">[[Source]](src/net/ossockopt.md#L951)</span>


```pony
fun box sctp_pcb_flags_udptype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_unbound
<span class="source-link">[[Source]](src/net/ossockopt.md#L952)</span>


```pony
fun box sctp_pcb_flags_unbound()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_wakeinput
<span class="source-link">[[Source]](src/net/ossockopt.md#L953)</span>


```pony
fun box sctp_pcb_flags_wakeinput()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_wakeoutput
<span class="source-link">[[Source]](src/net/ossockopt.md#L954)</span>


```pony
fun box sctp_pcb_flags_wakeoutput()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_was_aborted
<span class="source-link">[[Source]](src/net/ossockopt.md#L955)</span>


```pony
fun box sctp_pcb_flags_was_aborted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_was_connected
<span class="source-link">[[Source]](src/net/ossockopt.md#L956)</span>


```pony
fun box sctp_pcb_flags_was_connected()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_flags_zero_copy_active
<span class="source-link">[[Source]](src/net/ossockopt.md#L957)</span>


```pony
fun box sctp_pcb_flags_zero_copy_active()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pcb_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L958)</span>


```pony
fun box sctp_pcb_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_peeloff
<span class="source-link">[[Source]](src/net/ossockopt.md#L959)</span>


```pony
fun box sctp_peeloff()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_peer_addr_params
<span class="source-link">[[Source]](src/net/ossockopt.md#L960)</span>


```pony
fun box sctp_peer_addr_params()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_peer_addr_thlds
<span class="source-link">[[Source]](src/net/ossockopt.md#L961)</span>


```pony
fun box sctp_peer_addr_thlds()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_peer_auth_chunks
<span class="source-link">[[Source]](src/net/ossockopt.md#L962)</span>


```pony
fun box sctp_peer_auth_chunks()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pktdrop_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L963)</span>


```pony
fun box sctp_pktdrop_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pluggable_cc
<span class="source-link">[[Source]](src/net/ossockopt.md#L964)</span>


```pony
fun box sctp_pluggable_cc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pluggable_ss
<span class="source-link">[[Source]](src/net/ossockopt.md#L965)</span>


```pony
fun box sctp_pluggable_ss()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_primary_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L966)</span>


```pony
fun box sctp_primary_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pr_assoc_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L967)</span>


```pony
fun box sctp_pr_assoc_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pr_stream_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L968)</span>


```pony
fun box sctp_pr_stream_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_pr_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L969)</span>


```pony
fun box sctp_pr_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_reconfig_supported
<span class="source-link">[[Source]](src/net/ossockopt.md#L970)</span>


```pony
fun box sctp_reconfig_supported()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_recvnxtinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L971)</span>


```pony
fun box sctp_recvnxtinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_recvrcvinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L972)</span>


```pony
fun box sctp_recvrcvinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_recv_rwnd_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L973)</span>


```pony
fun box sctp_recv_rwnd_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_remote_udp_encaps_port
<span class="source-link">[[Source]](src/net/ossockopt.md#L974)</span>


```pony
fun box sctp_remote_udp_encaps_port()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_reset_assoc
<span class="source-link">[[Source]](src/net/ossockopt.md#L975)</span>


```pony
fun box sctp_reset_assoc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_reset_streams
<span class="source-link">[[Source]](src/net/ossockopt.md#L976)</span>


```pony
fun box sctp_reset_streams()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_reuse_port
<span class="source-link">[[Source]](src/net/ossockopt.md#L977)</span>


```pony
fun box sctp_reuse_port()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_rtoinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L978)</span>


```pony
fun box sctp_rtoinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_rttvar_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L979)</span>


```pony
fun box sctp_rttvar_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sack_cmt_dac
<span class="source-link">[[Source]](src/net/ossockopt.md#L980)</span>


```pony
fun box sctp_sack_cmt_dac()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sack_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L981)</span>


```pony
fun box sctp_sack_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sack_nonce_sum
<span class="source-link">[[Source]](src/net/ossockopt.md#L982)</span>


```pony
fun box sctp_sack_nonce_sum()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sack_rwnd_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L983)</span>


```pony
fun box sctp_sack_rwnd_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sat_network_burst_incr
<span class="source-link">[[Source]](src/net/ossockopt.md#L984)</span>


```pony
fun box sctp_sat_network_burst_incr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sat_network_min
<span class="source-link">[[Source]](src/net/ossockopt.md#L985)</span>


```pony
fun box sctp_sat_network_min()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_sb_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L986)</span>


```pony
fun box sctp_sb_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_selective_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L987)</span>


```pony
fun box sctp_selective_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_set_debug_level
<span class="source-link">[[Source]](src/net/ossockopt.md#L988)</span>


```pony
fun box sctp_set_debug_level()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_set_dynamic_primary
<span class="source-link">[[Source]](src/net/ossockopt.md#L989)</span>


```pony
fun box sctp_set_dynamic_primary()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_set_initial_dbg_seq
<span class="source-link">[[Source]](src/net/ossockopt.md#L990)</span>


```pony
fun box sctp_set_initial_dbg_seq()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_set_peer_primary_addr
<span class="source-link">[[Source]](src/net/ossockopt.md#L991)</span>


```pony
fun box sctp_set_peer_primary_addr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown
<span class="source-link">[[Source]](src/net/ossockopt.md#L992)</span>


```pony
fun box sctp_shutdown()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_ack
<span class="source-link">[[Source]](src/net/ossockopt.md#L993)</span>


```pony
fun box sctp_shutdown_ack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_ack_sent
<span class="source-link">[[Source]](src/net/ossockopt.md#L994)</span>


```pony
fun box sctp_shutdown_ack_sent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_complete
<span class="source-link">[[Source]](src/net/ossockopt.md#L995)</span>


```pony
fun box sctp_shutdown_complete()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_pending
<span class="source-link">[[Source]](src/net/ossockopt.md#L996)</span>


```pony
fun box sctp_shutdown_pending()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_received
<span class="source-link">[[Source]](src/net/ossockopt.md#L997)</span>


```pony
fun box sctp_shutdown_received()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_shutdown_sent
<span class="source-link">[[Source]](src/net/ossockopt.md#L998)</span>


```pony
fun box sctp_shutdown_sent()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_smallest_pmtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L999)</span>


```pony
fun box sctp_smallest_pmtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_default
<span class="source-link">[[Source]](src/net/ossockopt.md#L1000)</span>


```pony
fun box sctp_ss_default()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_fair_bandwith
<span class="source-link">[[Source]](src/net/ossockopt.md#L1001)</span>


```pony
fun box sctp_ss_fair_bandwith()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_first_come
<span class="source-link">[[Source]](src/net/ossockopt.md#L1002)</span>


```pony
fun box sctp_ss_first_come()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_priority
<span class="source-link">[[Source]](src/net/ossockopt.md#L1003)</span>


```pony
fun box sctp_ss_priority()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_round_robin
<span class="source-link">[[Source]](src/net/ossockopt.md#L1004)</span>


```pony
fun box sctp_ss_round_robin()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_round_robin_packet
<span class="source-link">[[Source]](src/net/ossockopt.md#L1005)</span>


```pony
fun box sctp_ss_round_robin_packet()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_ss_value
<span class="source-link">[[Source]](src/net/ossockopt.md#L1006)</span>


```pony
fun box sctp_ss_value()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L1007)</span>


```pony
fun box sctp_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_stream_reset
<span class="source-link">[[Source]](src/net/ossockopt.md#L1008)</span>


```pony
fun box sctp_stream_reset()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_stream_reset_incoming
<span class="source-link">[[Source]](src/net/ossockopt.md#L1009)</span>


```pony
fun box sctp_stream_reset_incoming()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_stream_reset_outgoing
<span class="source-link">[[Source]](src/net/ossockopt.md#L1010)</span>


```pony
fun box sctp_stream_reset_outgoing()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_str_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L1011)</span>


```pony
fun box sctp_str_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_threshold_logging
<span class="source-link">[[Source]](src/net/ossockopt.md#L1012)</span>


```pony
fun box sctp_threshold_logging()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_timeouts
<span class="source-link">[[Source]](src/net/ossockopt.md#L1013)</span>


```pony
fun box sctp_timeouts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_use_ext_rcvinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1014)</span>


```pony
fun box sctp_use_ext_rcvinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_vrf_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L1015)</span>


```pony
fun box sctp_vrf_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sctp_wake_logging_enable
<span class="source-link">[[Source]](src/net/ossockopt.md#L1016)</span>


```pony
fun box sctp_wake_logging_enable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_cloexec
<span class="source-link">[[Source]](src/net/ossockopt.md#L1017)</span>


```pony
fun box sock_cloexec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_dgram
<span class="source-link">[[Source]](src/net/ossockopt.md#L1018)</span>


```pony
fun box sock_dgram()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_maxaddrlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1019)</span>


```pony
fun box sock_maxaddrlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_nonblock
<span class="source-link">[[Source]](src/net/ossockopt.md#L1020)</span>


```pony
fun box sock_nonblock()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_raw
<span class="source-link">[[Source]](src/net/ossockopt.md#L1021)</span>


```pony
fun box sock_raw()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_rdm
<span class="source-link">[[Source]](src/net/ossockopt.md#L1022)</span>


```pony
fun box sock_rdm()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_seqpacket
<span class="source-link">[[Source]](src/net/ossockopt.md#L1023)</span>


```pony
fun box sock_seqpacket()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sock_stream
<span class="source-link">[[Source]](src/net/ossockopt.md#L1024)</span>


```pony
fun box sock_stream()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### somaxconn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1025)</span>


```pony
fun box somaxconn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### sonpx_setoptshut
<span class="source-link">[[Source]](src/net/ossockopt.md#L1026)</span>


```pony
fun box sonpx_setoptshut()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_acceptconn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1027)</span>


```pony
fun box so_acceptconn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_acceptfilter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1028)</span>


```pony
fun box so_acceptfilter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_atmpvc
<span class="source-link">[[Source]](src/net/ossockopt.md#L1029)</span>


```pony
fun box so_atmpvc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_atmqos
<span class="source-link">[[Source]](src/net/ossockopt.md#L1030)</span>


```pony
fun box so_atmqos()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_atmsap
<span class="source-link">[[Source]](src/net/ossockopt.md#L1031)</span>


```pony
fun box so_atmsap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_attach_bpf
<span class="source-link">[[Source]](src/net/ossockopt.md#L1032)</span>


```pony
fun box so_attach_bpf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_attach_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1033)</span>


```pony
fun box so_attach_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_bindtodevice
<span class="source-link">[[Source]](src/net/ossockopt.md#L1034)</span>


```pony
fun box so_bindtodevice()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_bintime
<span class="source-link">[[Source]](src/net/ossockopt.md#L1035)</span>


```pony
fun box so_bintime()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_bpf_extensions
<span class="source-link">[[Source]](src/net/ossockopt.md#L1036)</span>


```pony
fun box so_bpf_extensions()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_broadcast
<span class="source-link">[[Source]](src/net/ossockopt.md#L1037)</span>


```pony
fun box so_broadcast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_bsdcompat
<span class="source-link">[[Source]](src/net/ossockopt.md#L1038)</span>


```pony
fun box so_bsdcompat()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_bsp_state
<span class="source-link">[[Source]](src/net/ossockopt.md#L1039)</span>


```pony
fun box so_bsp_state()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_busy_poll
<span class="source-link">[[Source]](src/net/ossockopt.md#L1040)</span>


```pony
fun box so_busy_poll()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_conaccess
<span class="source-link">[[Source]](src/net/ossockopt.md#L1041)</span>


```pony
fun box so_conaccess()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_condata
<span class="source-link">[[Source]](src/net/ossockopt.md#L1042)</span>


```pony
fun box so_condata()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_conditional_accept
<span class="source-link">[[Source]](src/net/ossockopt.md#L1043)</span>


```pony
fun box so_conditional_accept()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_connect_time
<span class="source-link">[[Source]](src/net/ossockopt.md#L1044)</span>


```pony
fun box so_connect_time()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_debug
<span class="source-link">[[Source]](src/net/ossockopt.md#L1045)</span>


```pony
fun box so_debug()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_detach_bpf
<span class="source-link">[[Source]](src/net/ossockopt.md#L1046)</span>


```pony
fun box so_detach_bpf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_detach_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1047)</span>


```pony
fun box so_detach_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_domain
<span class="source-link">[[Source]](src/net/ossockopt.md#L1048)</span>


```pony
fun box so_domain()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_dontlinger
<span class="source-link">[[Source]](src/net/ossockopt.md#L1049)</span>


```pony
fun box so_dontlinger()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_dontroute
<span class="source-link">[[Source]](src/net/ossockopt.md#L1050)</span>


```pony
fun box so_dontroute()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_donttrunc
<span class="source-link">[[Source]](src/net/ossockopt.md#L1051)</span>


```pony
fun box so_donttrunc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_error
<span class="source-link">[[Source]](src/net/ossockopt.md#L1052)</span>


```pony
fun box so_error()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_exclusiveaddruse
<span class="source-link">[[Source]](src/net/ossockopt.md#L1053)</span>


```pony
fun box so_exclusiveaddruse()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_get_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1054)</span>


```pony
fun box so_get_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_group_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L1055)</span>


```pony
fun box so_group_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_group_priority
<span class="source-link">[[Source]](src/net/ossockopt.md#L1056)</span>


```pony
fun box so_group_priority()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_hci_raw_direction
<span class="source-link">[[Source]](src/net/ossockopt.md#L1057)</span>


```pony
fun box so_hci_raw_direction()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_hci_raw_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1058)</span>


```pony
fun box so_hci_raw_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_incoming_cpu
<span class="source-link">[[Source]](src/net/ossockopt.md#L1059)</span>


```pony
fun box so_incoming_cpu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_keepalive
<span class="source-link">[[Source]](src/net/ossockopt.md#L1060)</span>


```pony
fun box so_keepalive()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_encrypted
<span class="source-link">[[Source]](src/net/ossockopt.md#L1061)</span>


```pony
fun box so_l2cap_encrypted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_flush
<span class="source-link">[[Source]](src/net/ossockopt.md#L1062)</span>


```pony
fun box so_l2cap_flush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_iflow
<span class="source-link">[[Source]](src/net/ossockopt.md#L1063)</span>


```pony
fun box so_l2cap_iflow()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_imtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L1064)</span>


```pony
fun box so_l2cap_imtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_oflow
<span class="source-link">[[Source]](src/net/ossockopt.md#L1065)</span>


```pony
fun box so_l2cap_oflow()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_l2cap_omtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L1066)</span>


```pony
fun box so_l2cap_omtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_label
<span class="source-link">[[Source]](src/net/ossockopt.md#L1067)</span>


```pony
fun box so_label()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_linger
<span class="source-link">[[Source]](src/net/ossockopt.md#L1068)</span>


```pony
fun box so_linger()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_linger_sec
<span class="source-link">[[Source]](src/net/ossockopt.md#L1069)</span>


```pony
fun box so_linger_sec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_linkinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1070)</span>


```pony
fun box so_linkinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_listenincqlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1071)</span>


```pony
fun box so_listenincqlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_listenqlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1072)</span>


```pony
fun box so_listenqlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_listenqlimit
<span class="source-link">[[Source]](src/net/ossockopt.md#L1073)</span>


```pony
fun box so_listenqlimit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_lock_filter
<span class="source-link">[[Source]](src/net/ossockopt.md#L1074)</span>


```pony
fun box so_lock_filter()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_mark
<span class="source-link">[[Source]](src/net/ossockopt.md#L1075)</span>


```pony
fun box so_mark()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_max_msg_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1076)</span>


```pony
fun box so_max_msg_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_max_pacing_rate
<span class="source-link">[[Source]](src/net/ossockopt.md#L1077)</span>


```pony
fun box so_max_pacing_rate()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_multipoint
<span class="source-link">[[Source]](src/net/ossockopt.md#L1078)</span>


```pony
fun box so_multipoint()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_netsvc_marking_level
<span class="source-link">[[Source]](src/net/ossockopt.md#L1079)</span>


```pony
fun box so_netsvc_marking_level()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_net_service_type
<span class="source-link">[[Source]](src/net/ossockopt.md#L1080)</span>


```pony
fun box so_net_service_type()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_nke
<span class="source-link">[[Source]](src/net/ossockopt.md#L1081)</span>


```pony
fun box so_nke()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_noaddrerr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1082)</span>


```pony
fun box so_noaddrerr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_nofcs
<span class="source-link">[[Source]](src/net/ossockopt.md#L1083)</span>


```pony
fun box so_nofcs()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_nosigpipe
<span class="source-link">[[Source]](src/net/ossockopt.md#L1084)</span>


```pony
fun box so_nosigpipe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_notifyconflict
<span class="source-link">[[Source]](src/net/ossockopt.md#L1085)</span>


```pony
fun box so_notifyconflict()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_no_check
<span class="source-link">[[Source]](src/net/ossockopt.md#L1086)</span>


```pony
fun box so_no_check()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_no_ddp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1087)</span>


```pony
fun box so_no_ddp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_no_offload
<span class="source-link">[[Source]](src/net/ossockopt.md#L1088)</span>


```pony
fun box so_no_offload()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_np_extensions
<span class="source-link">[[Source]](src/net/ossockopt.md#L1089)</span>


```pony
fun box so_np_extensions()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_nread
<span class="source-link">[[Source]](src/net/ossockopt.md#L1090)</span>


```pony
fun box so_nread()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_numrcvpkt
<span class="source-link">[[Source]](src/net/ossockopt.md#L1091)</span>


```pony
fun box so_numrcvpkt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_nwrite
<span class="source-link">[[Source]](src/net/ossockopt.md#L1092)</span>


```pony
fun box so_nwrite()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_oobinline
<span class="source-link">[[Source]](src/net/ossockopt.md#L1093)</span>


```pony
fun box so_oobinline()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_original_dst
<span class="source-link">[[Source]](src/net/ossockopt.md#L1094)</span>


```pony
fun box so_original_dst()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_passcred
<span class="source-link">[[Source]](src/net/ossockopt.md#L1095)</span>


```pony
fun box so_passcred()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_passsec
<span class="source-link">[[Source]](src/net/ossockopt.md#L1096)</span>


```pony
fun box so_passsec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_peek_off
<span class="source-link">[[Source]](src/net/ossockopt.md#L1097)</span>


```pony
fun box so_peek_off()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_peercred
<span class="source-link">[[Source]](src/net/ossockopt.md#L1098)</span>


```pony
fun box so_peercred()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_peerlabel
<span class="source-link">[[Source]](src/net/ossockopt.md#L1099)</span>


```pony
fun box so_peerlabel()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_peername
<span class="source-link">[[Source]](src/net/ossockopt.md#L1100)</span>


```pony
fun box so_peername()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_peersec
<span class="source-link">[[Source]](src/net/ossockopt.md#L1101)</span>


```pony
fun box so_peersec()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_port_scalability
<span class="source-link">[[Source]](src/net/ossockopt.md#L1102)</span>


```pony
fun box so_port_scalability()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_priority
<span class="source-link">[[Source]](src/net/ossockopt.md#L1103)</span>


```pony
fun box so_priority()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_protocol
<span class="source-link">[[Source]](src/net/ossockopt.md#L1104)</span>


```pony
fun box so_protocol()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_protocol_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L1105)</span>


```pony
fun box so_protocol_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_prototype
<span class="source-link">[[Source]](src/net/ossockopt.md#L1106)</span>


```pony
fun box so_prototype()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_proxyusr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1107)</span>


```pony
fun box so_proxyusr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_randomport
<span class="source-link">[[Source]](src/net/ossockopt.md#L1108)</span>


```pony
fun box so_randomport()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rcvbuf
<span class="source-link">[[Source]](src/net/ossockopt.md#L1109)</span>


```pony
fun box so_rcvbuf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rcvbufforce
<span class="source-link">[[Source]](src/net/ossockopt.md#L1110)</span>


```pony
fun box so_rcvbufforce()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rcvlowat
<span class="source-link">[[Source]](src/net/ossockopt.md#L1111)</span>


```pony
fun box so_rcvlowat()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rcvtimeo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1112)</span>


```pony
fun box so_rcvtimeo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rds_transport
<span class="source-link">[[Source]](src/net/ossockopt.md#L1113)</span>


```pony
fun box so_rds_transport()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_reuseaddr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1114)</span>


```pony
fun box so_reuseaddr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_reuseport
<span class="source-link">[[Source]](src/net/ossockopt.md#L1115)</span>


```pony
fun box so_reuseport()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_reuseshareuid
<span class="source-link">[[Source]](src/net/ossockopt.md#L1116)</span>


```pony
fun box so_reuseshareuid()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rfcomm_fc_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L1117)</span>


```pony
fun box so_rfcomm_fc_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rfcomm_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L1118)</span>


```pony
fun box so_rfcomm_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_rxq_ovfl
<span class="source-link">[[Source]](src/net/ossockopt.md#L1119)</span>


```pony
fun box so_rxq_ovfl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sco_conninfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1120)</span>


```pony
fun box so_sco_conninfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sco_mtu
<span class="source-link">[[Source]](src/net/ossockopt.md#L1121)</span>


```pony
fun box so_sco_mtu()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_security_authentication
<span class="source-link">[[Source]](src/net/ossockopt.md#L1122)</span>


```pony
fun box so_security_authentication()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_security_encryption_network
<span class="source-link">[[Source]](src/net/ossockopt.md#L1123)</span>


```pony
fun box so_security_encryption_network()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_security_encryption_transport
<span class="source-link">[[Source]](src/net/ossockopt.md#L1124)</span>


```pony
fun box so_security_encryption_transport()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_select_err_queue
<span class="source-link">[[Source]](src/net/ossockopt.md#L1125)</span>


```pony
fun box so_select_err_queue()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_setclp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1126)</span>


```pony
fun box so_setclp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_setfib
<span class="source-link">[[Source]](src/net/ossockopt.md#L1127)</span>


```pony
fun box so_setfib()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sndbuf
<span class="source-link">[[Source]](src/net/ossockopt.md#L1128)</span>


```pony
fun box so_sndbuf()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sndbufforce
<span class="source-link">[[Source]](src/net/ossockopt.md#L1129)</span>


```pony
fun box so_sndbufforce()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sndlowat
<span class="source-link">[[Source]](src/net/ossockopt.md#L1130)</span>


```pony
fun box so_sndlowat()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_sndtimeo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1131)</span>


```pony
fun box so_sndtimeo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1132)</span>


```pony
fun box so_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_timestamping
<span class="source-link">[[Source]](src/net/ossockopt.md#L1133)</span>


```pony
fun box so_timestamping()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_timestampns
<span class="source-link">[[Source]](src/net/ossockopt.md#L1134)</span>


```pony
fun box so_timestampns()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_timestamp_monotonic
<span class="source-link">[[Source]](src/net/ossockopt.md#L1135)</span>


```pony
fun box so_timestamp_monotonic()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_type
<span class="source-link">[[Source]](src/net/ossockopt.md#L1136)</span>


```pony
fun box so_type()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_upcallclosewait
<span class="source-link">[[Source]](src/net/ossockopt.md#L1137)</span>


```pony
fun box so_upcallclosewait()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_update_accept_context
<span class="source-link">[[Source]](src/net/ossockopt.md#L1138)</span>


```pony
fun box so_update_accept_context()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_useloopback
<span class="source-link">[[Source]](src/net/ossockopt.md#L1139)</span>


```pony
fun box so_useloopback()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_user_cookie
<span class="source-link">[[Source]](src/net/ossockopt.md#L1140)</span>


```pony
fun box so_user_cookie()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vendor
<span class="source-link">[[Source]](src/net/ossockopt.md#L1141)</span>


```pony
fun box so_vendor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_buffer_max_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1142)</span>


```pony
fun box so_vm_sockets_buffer_max_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_buffer_min_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1143)</span>


```pony
fun box so_vm_sockets_buffer_min_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_buffer_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1144)</span>


```pony
fun box so_vm_sockets_buffer_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_connect_timeout
<span class="source-link">[[Source]](src/net/ossockopt.md#L1145)</span>


```pony
fun box so_vm_sockets_connect_timeout()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_nonblock_txrx
<span class="source-link">[[Source]](src/net/ossockopt.md#L1146)</span>


```pony
fun box so_vm_sockets_nonblock_txrx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_peer_host_vm_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L1147)</span>


```pony
fun box so_vm_sockets_peer_host_vm_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_vm_sockets_trusted
<span class="source-link">[[Source]](src/net/ossockopt.md#L1148)</span>


```pony
fun box so_vm_sockets_trusted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_wantmore
<span class="source-link">[[Source]](src/net/ossockopt.md#L1149)</span>


```pony
fun box so_wantmore()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_wantoobflag
<span class="source-link">[[Source]](src/net/ossockopt.md#L1150)</span>


```pony
fun box so_wantoobflag()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### so_wifi_status
<span class="source-link">[[Source]](src/net/ossockopt.md#L1151)</span>


```pony
fun box so_wifi_status()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp6_mss
<span class="source-link">[[Source]](src/net/ossockopt.md#L1152)</span>


```pony
fun box tcp6_mss()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_flag_lossrecovery
<span class="source-link">[[Source]](src/net/ossockopt.md#L1153)</span>


```pony
fun box tcpci_flag_lossrecovery()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_flag_reordering_detected
<span class="source-link">[[Source]](src/net/ossockopt.md#L1154)</span>


```pony
fun box tcpci_flag_reordering_detected()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_opt_ecn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1155)</span>


```pony
fun box tcpci_opt_ecn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_opt_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1156)</span>


```pony
fun box tcpci_opt_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_opt_timestamps
<span class="source-link">[[Source]](src/net/ossockopt.md#L1157)</span>


```pony
fun box tcpci_opt_timestamps()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpci_opt_wscale
<span class="source-link">[[Source]](src/net/ossockopt.md#L1158)</span>


```pony
fun box tcpci_opt_wscale()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpf_ca_cwr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1159)</span>


```pony
fun box tcpf_ca_cwr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpf_ca_disorder
<span class="source-link">[[Source]](src/net/ossockopt.md#L1160)</span>


```pony
fun box tcpf_ca_disorder()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpf_ca_loss
<span class="source-link">[[Source]](src/net/ossockopt.md#L1161)</span>


```pony
fun box tcpf_ca_loss()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpf_ca_open
<span class="source-link">[[Source]](src/net/ossockopt.md#L1162)</span>


```pony
fun box tcpf_ca_open()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpf_ca_recovery
<span class="source-link">[[Source]](src/net/ossockopt.md#L1163)</span>


```pony
fun box tcpf_ca_recovery()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_ecn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1164)</span>


```pony
fun box tcpi_opt_ecn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_ecn_seen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1165)</span>


```pony
fun box tcpi_opt_ecn_seen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1166)</span>


```pony
fun box tcpi_opt_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_syn_data
<span class="source-link">[[Source]](src/net/ossockopt.md#L1167)</span>


```pony
fun box tcpi_opt_syn_data()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_timestamps
<span class="source-link">[[Source]](src/net/ossockopt.md#L1168)</span>


```pony
fun box tcpi_opt_timestamps()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_toe
<span class="source-link">[[Source]](src/net/ossockopt.md#L1169)</span>


```pony
fun box tcpi_opt_toe()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpi_opt_wscale
<span class="source-link">[[Source]](src/net/ossockopt.md#L1170)</span>


```pony
fun box tcpi_opt_wscale()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_cc
<span class="source-link">[[Source]](src/net/ossockopt.md#L1171)</span>


```pony
fun box tcpolen_cc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_cc_appa
<span class="source-link">[[Source]](src/net/ossockopt.md#L1172)</span>


```pony
fun box tcpolen_cc_appa()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_eol
<span class="source-link">[[Source]](src/net/ossockopt.md#L1173)</span>


```pony
fun box tcpolen_eol()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_fastopen_req
<span class="source-link">[[Source]](src/net/ossockopt.md#L1174)</span>


```pony
fun box tcpolen_fastopen_req()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_fast_open_empty
<span class="source-link">[[Source]](src/net/ossockopt.md#L1175)</span>


```pony
fun box tcpolen_fast_open_empty()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_fast_open_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L1176)</span>


```pony
fun box tcpolen_fast_open_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_fast_open_min
<span class="source-link">[[Source]](src/net/ossockopt.md#L1177)</span>


```pony
fun box tcpolen_fast_open_min()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_maxseg
<span class="source-link">[[Source]](src/net/ossockopt.md#L1178)</span>


```pony
fun box tcpolen_maxseg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_nop
<span class="source-link">[[Source]](src/net/ossockopt.md#L1179)</span>


```pony
fun box tcpolen_nop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_pad
<span class="source-link">[[Source]](src/net/ossockopt.md#L1180)</span>


```pony
fun box tcpolen_pad()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1181)</span>


```pony
fun box tcpolen_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_sackhdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1182)</span>


```pony
fun box tcpolen_sackhdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_sack_permitted
<span class="source-link">[[Source]](src/net/ossockopt.md#L1183)</span>


```pony
fun box tcpolen_sack_permitted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_signature
<span class="source-link">[[Source]](src/net/ossockopt.md#L1184)</span>


```pony
fun box tcpolen_signature()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1185)</span>


```pony
fun box tcpolen_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_tstamp_appa
<span class="source-link">[[Source]](src/net/ossockopt.md#L1186)</span>


```pony
fun box tcpolen_tstamp_appa()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpolen_window
<span class="source-link">[[Source]](src/net/ossockopt.md#L1187)</span>


```pony
fun box tcpolen_window()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_cc
<span class="source-link">[[Source]](src/net/ossockopt.md#L1188)</span>


```pony
fun box tcpopt_cc()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_ccecho
<span class="source-link">[[Source]](src/net/ossockopt.md#L1189)</span>


```pony
fun box tcpopt_ccecho()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_ccnew
<span class="source-link">[[Source]](src/net/ossockopt.md#L1190)</span>


```pony
fun box tcpopt_ccnew()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_eol
<span class="source-link">[[Source]](src/net/ossockopt.md#L1191)</span>


```pony
fun box tcpopt_eol()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_fastopen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1192)</span>


```pony
fun box tcpopt_fastopen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_fast_open
<span class="source-link">[[Source]](src/net/ossockopt.md#L1193)</span>


```pony
fun box tcpopt_fast_open()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_maxseg
<span class="source-link">[[Source]](src/net/ossockopt.md#L1194)</span>


```pony
fun box tcpopt_maxseg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_multipath
<span class="source-link">[[Source]](src/net/ossockopt.md#L1195)</span>


```pony
fun box tcpopt_multipath()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_nop
<span class="source-link">[[Source]](src/net/ossockopt.md#L1196)</span>


```pony
fun box tcpopt_nop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_pad
<span class="source-link">[[Source]](src/net/ossockopt.md#L1197)</span>


```pony
fun box tcpopt_pad()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1198)</span>


```pony
fun box tcpopt_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_sack_hdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1199)</span>


```pony
fun box tcpopt_sack_hdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_sack_permitted
<span class="source-link">[[Source]](src/net/ossockopt.md#L1200)</span>


```pony
fun box tcpopt_sack_permitted()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_sack_permit_hdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1201)</span>


```pony
fun box tcpopt_sack_permit_hdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_signature
<span class="source-link">[[Source]](src/net/ossockopt.md#L1202)</span>


```pony
fun box tcpopt_signature()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1203)</span>


```pony
fun box tcpopt_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_tstamp_hdr
<span class="source-link">[[Source]](src/net/ossockopt.md#L1204)</span>


```pony
fun box tcpopt_tstamp_hdr()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcpopt_window
<span class="source-link">[[Source]](src/net/ossockopt.md#L1205)</span>


```pony
fun box tcpopt_window()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_ca_name_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L1206)</span>


```pony
fun box tcp_ca_name_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_ccalgoopt
<span class="source-link">[[Source]](src/net/ossockopt.md#L1207)</span>


```pony
fun box tcp_ccalgoopt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cc_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L1208)</span>


```pony
fun box tcp_cc_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_congestion
<span class="source-link">[[Source]](src/net/ossockopt.md#L1209)</span>


```pony
fun box tcp_congestion()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_connectiontimeout
<span class="source-link">[[Source]](src/net/ossockopt.md#L1210)</span>


```pony
fun box tcp_connectiontimeout()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_connection_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L1211)</span>


```pony
fun box tcp_connection_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_in_always
<span class="source-link">[[Source]](src/net/ossockopt.md#L1212)</span>


```pony
fun box tcp_cookie_in_always()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L1213)</span>


```pony
fun box tcp_cookie_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_min
<span class="source-link">[[Source]](src/net/ossockopt.md#L1214)</span>


```pony
fun box tcp_cookie_min()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_out_never
<span class="source-link">[[Source]](src/net/ossockopt.md#L1215)</span>


```pony
fun box tcp_cookie_out_never()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_pair_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1216)</span>


```pony
fun box tcp_cookie_pair_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cookie_transactions
<span class="source-link">[[Source]](src/net/ossockopt.md#L1217)</span>


```pony
fun box tcp_cookie_transactions()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_cork
<span class="source-link">[[Source]](src/net/ossockopt.md#L1218)</span>


```pony
fun box tcp_cork()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_defer_accept
<span class="source-link">[[Source]](src/net/ossockopt.md#L1219)</span>


```pony
fun box tcp_defer_accept()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_enable_ecn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1220)</span>


```pony
fun box tcp_enable_ecn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_fastopen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1221)</span>


```pony
fun box tcp_fastopen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_function_blk
<span class="source-link">[[Source]](src/net/ossockopt.md#L1222)</span>


```pony
fun box tcp_function_blk()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_function_name_len_max
<span class="source-link">[[Source]](src/net/ossockopt.md#L1223)</span>


```pony
fun box tcp_function_name_len_max()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_info
<span class="source-link">[[Source]](src/net/ossockopt.md#L1224)</span>


```pony
fun box tcp_info()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_keepalive
<span class="source-link">[[Source]](src/net/ossockopt.md#L1225)</span>


```pony
fun box tcp_keepalive()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_keepcnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L1226)</span>


```pony
fun box tcp_keepcnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_keepidle
<span class="source-link">[[Source]](src/net/ossockopt.md#L1227)</span>


```pony
fun box tcp_keepidle()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_keepinit
<span class="source-link">[[Source]](src/net/ossockopt.md#L1228)</span>


```pony
fun box tcp_keepinit()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_keepintvl
<span class="source-link">[[Source]](src/net/ossockopt.md#L1229)</span>


```pony
fun box tcp_keepintvl()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_linger2
<span class="source-link">[[Source]](src/net/ossockopt.md#L1230)</span>


```pony
fun box tcp_linger2()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_maxburst
<span class="source-link">[[Source]](src/net/ossockopt.md#L1231)</span>


```pony
fun box tcp_maxburst()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_maxhlen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1232)</span>


```pony
fun box tcp_maxhlen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_maxolen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1233)</span>


```pony
fun box tcp_maxolen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_maxseg
<span class="source-link">[[Source]](src/net/ossockopt.md#L1234)</span>


```pony
fun box tcp_maxseg()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_maxwin
<span class="source-link">[[Source]](src/net/ossockopt.md#L1235)</span>


```pony
fun box tcp_maxwin()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_max_sack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1236)</span>


```pony
fun box tcp_max_sack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_max_winshift
<span class="source-link">[[Source]](src/net/ossockopt.md#L1237)</span>


```pony
fun box tcp_max_winshift()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_md5sig
<span class="source-link">[[Source]](src/net/ossockopt.md#L1238)</span>


```pony
fun box tcp_md5sig()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_md5sig_maxkeylen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1239)</span>


```pony
fun box tcp_md5sig_maxkeylen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_minmss
<span class="source-link">[[Source]](src/net/ossockopt.md#L1240)</span>


```pony
fun box tcp_minmss()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_mss
<span class="source-link">[[Source]](src/net/ossockopt.md#L1241)</span>


```pony
fun box tcp_mss()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_mss_default
<span class="source-link">[[Source]](src/net/ossockopt.md#L1242)</span>


```pony
fun box tcp_mss_default()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_mss_desired
<span class="source-link">[[Source]](src/net/ossockopt.md#L1243)</span>


```pony
fun box tcp_mss_desired()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_nodelay
<span class="source-link">[[Source]](src/net/ossockopt.md#L1244)</span>


```pony
fun box tcp_nodelay()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_noopt
<span class="source-link">[[Source]](src/net/ossockopt.md#L1245)</span>


```pony
fun box tcp_noopt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_nopush
<span class="source-link">[[Source]](src/net/ossockopt.md#L1246)</span>


```pony
fun box tcp_nopush()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_notsent_lowat
<span class="source-link">[[Source]](src/net/ossockopt.md#L1247)</span>


```pony
fun box tcp_notsent_lowat()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_pcap_in
<span class="source-link">[[Source]](src/net/ossockopt.md#L1248)</span>


```pony
fun box tcp_pcap_in()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_pcap_out
<span class="source-link">[[Source]](src/net/ossockopt.md#L1249)</span>


```pony
fun box tcp_pcap_out()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_queue_seq
<span class="source-link">[[Source]](src/net/ossockopt.md#L1250)</span>


```pony
fun box tcp_queue_seq()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_quickack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1251)</span>


```pony
fun box tcp_quickack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_repair
<span class="source-link">[[Source]](src/net/ossockopt.md#L1252)</span>


```pony
fun box tcp_repair()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_repair_options
<span class="source-link">[[Source]](src/net/ossockopt.md#L1253)</span>


```pony
fun box tcp_repair_options()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_repair_queue
<span class="source-link">[[Source]](src/net/ossockopt.md#L1254)</span>


```pony
fun box tcp_repair_queue()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_rxt_conndroptime
<span class="source-link">[[Source]](src/net/ossockopt.md#L1255)</span>


```pony
fun box tcp_rxt_conndroptime()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_rxt_findrop
<span class="source-link">[[Source]](src/net/ossockopt.md#L1256)</span>


```pony
fun box tcp_rxt_findrop()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_saved_syn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1257)</span>


```pony
fun box tcp_saved_syn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_save_syn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1258)</span>


```pony
fun box tcp_save_syn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_sendmoreacks
<span class="source-link">[[Source]](src/net/ossockopt.md#L1259)</span>


```pony
fun box tcp_sendmoreacks()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_syncnt
<span class="source-link">[[Source]](src/net/ossockopt.md#L1260)</span>


```pony
fun box tcp_syncnt()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_s_data_in
<span class="source-link">[[Source]](src/net/ossockopt.md#L1261)</span>


```pony
fun box tcp_s_data_in()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_s_data_out
<span class="source-link">[[Source]](src/net/ossockopt.md#L1262)</span>


```pony
fun box tcp_s_data_out()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_thin_dupack
<span class="source-link">[[Source]](src/net/ossockopt.md#L1263)</span>


```pony
fun box tcp_thin_dupack()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_thin_linear_timeouts
<span class="source-link">[[Source]](src/net/ossockopt.md#L1264)</span>


```pony
fun box tcp_thin_linear_timeouts()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_timestamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1265)</span>


```pony
fun box tcp_timestamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_user_timeout
<span class="source-link">[[Source]](src/net/ossockopt.md#L1266)</span>


```pony
fun box tcp_user_timeout()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_vendor
<span class="source-link">[[Source]](src/net/ossockopt.md#L1267)</span>


```pony
fun box tcp_vendor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tcp_window_clamp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1268)</span>


```pony
fun box tcp_window_clamp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_addr_id
<span class="source-link">[[Source]](src/net/ossockopt.md#L1269)</span>


```pony
fun box tipc_addr_id()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_addr_mcast
<span class="source-link">[[Source]](src/net/ossockopt.md#L1270)</span>


```pony
fun box tipc_addr_mcast()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_addr_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1271)</span>


```pony
fun box tipc_addr_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_addr_nameseq
<span class="source-link">[[Source]](src/net/ossockopt.md#L1272)</span>


```pony
fun box tipc_addr_nameseq()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_cfg_srv
<span class="source-link">[[Source]](src/net/ossockopt.md#L1273)</span>


```pony
fun box tipc_cfg_srv()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_cluster_scope
<span class="source-link">[[Source]](src/net/ossockopt.md#L1274)</span>


```pony
fun box tipc_cluster_scope()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_conn_shutdown
<span class="source-link">[[Source]](src/net/ossockopt.md#L1275)</span>


```pony
fun box tipc_conn_shutdown()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_conn_timeout
<span class="source-link">[[Source]](src/net/ossockopt.md#L1276)</span>


```pony
fun box tipc_conn_timeout()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_critical_importance
<span class="source-link">[[Source]](src/net/ossockopt.md#L1277)</span>


```pony
fun box tipc_critical_importance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_destname
<span class="source-link">[[Source]](src/net/ossockopt.md#L1278)</span>


```pony
fun box tipc_destname()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_dest_droppable
<span class="source-link">[[Source]](src/net/ossockopt.md#L1279)</span>


```pony
fun box tipc_dest_droppable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_errinfo
<span class="source-link">[[Source]](src/net/ossockopt.md#L1280)</span>


```pony
fun box tipc_errinfo()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_err_no_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1281)</span>


```pony
fun box tipc_err_no_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_err_no_node
<span class="source-link">[[Source]](src/net/ossockopt.md#L1282)</span>


```pony
fun box tipc_err_no_node()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_err_no_port
<span class="source-link">[[Source]](src/net/ossockopt.md#L1283)</span>


```pony
fun box tipc_err_no_port()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_err_overload
<span class="source-link">[[Source]](src/net/ossockopt.md#L1284)</span>


```pony
fun box tipc_err_overload()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_high_importance
<span class="source-link">[[Source]](src/net/ossockopt.md#L1285)</span>


```pony
fun box tipc_high_importance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_importance
<span class="source-link">[[Source]](src/net/ossockopt.md#L1286)</span>


```pony
fun box tipc_importance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_link_state
<span class="source-link">[[Source]](src/net/ossockopt.md#L1287)</span>


```pony
fun box tipc_link_state()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_low_importance
<span class="source-link">[[Source]](src/net/ossockopt.md#L1288)</span>


```pony
fun box tipc_low_importance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_max_bearer_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1289)</span>


```pony
fun box tipc_max_bearer_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_max_if_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1290)</span>


```pony
fun box tipc_max_if_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_max_link_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1291)</span>


```pony
fun box tipc_max_link_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_max_media_name
<span class="source-link">[[Source]](src/net/ossockopt.md#L1292)</span>


```pony
fun box tipc_max_media_name()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_max_user_msg_size
<span class="source-link">[[Source]](src/net/ossockopt.md#L1293)</span>


```pony
fun box tipc_max_user_msg_size()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_medium_importance
<span class="source-link">[[Source]](src/net/ossockopt.md#L1294)</span>


```pony
fun box tipc_medium_importance()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_node_recvq_depth
<span class="source-link">[[Source]](src/net/ossockopt.md#L1295)</span>


```pony
fun box tipc_node_recvq_depth()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_node_scope
<span class="source-link">[[Source]](src/net/ossockopt.md#L1296)</span>


```pony
fun box tipc_node_scope()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_ok
<span class="source-link">[[Source]](src/net/ossockopt.md#L1297)</span>


```pony
fun box tipc_ok()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_published
<span class="source-link">[[Source]](src/net/ossockopt.md#L1298)</span>


```pony
fun box tipc_published()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_reserved_types
<span class="source-link">[[Source]](src/net/ossockopt.md#L1299)</span>


```pony
fun box tipc_reserved_types()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_retdata
<span class="source-link">[[Source]](src/net/ossockopt.md#L1300)</span>


```pony
fun box tipc_retdata()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_sock_recvq_depth
<span class="source-link">[[Source]](src/net/ossockopt.md#L1301)</span>


```pony
fun box tipc_sock_recvq_depth()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_src_droppable
<span class="source-link">[[Source]](src/net/ossockopt.md#L1302)</span>


```pony
fun box tipc_src_droppable()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_subscr_timeout
<span class="source-link">[[Source]](src/net/ossockopt.md#L1303)</span>


```pony
fun box tipc_subscr_timeout()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_sub_cancel
<span class="source-link">[[Source]](src/net/ossockopt.md#L1304)</span>


```pony
fun box tipc_sub_cancel()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_sub_ports
<span class="source-link">[[Source]](src/net/ossockopt.md#L1305)</span>


```pony
fun box tipc_sub_ports()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_sub_service
<span class="source-link">[[Source]](src/net/ossockopt.md#L1306)</span>


```pony
fun box tipc_sub_service()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_top_srv
<span class="source-link">[[Source]](src/net/ossockopt.md#L1307)</span>


```pony
fun box tipc_top_srv()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_wait_forever
<span class="source-link">[[Source]](src/net/ossockopt.md#L1308)</span>


```pony
fun box tipc_wait_forever()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_withdrawn
<span class="source-link">[[Source]](src/net/ossockopt.md#L1309)</span>


```pony
fun box tipc_withdrawn()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### tipc_zone_scope
<span class="source-link">[[Source]](src/net/ossockopt.md#L1310)</span>


```pony
fun box tipc_zone_scope()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### ttcp_client_snd_wnd
<span class="source-link">[[Source]](src/net/ossockopt.md#L1311)</span>


```pony
fun box ttcp_client_snd_wnd()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_cork
<span class="source-link">[[Source]](src/net/ossockopt.md#L1312)</span>


```pony
fun box udp_cork()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap
<span class="source-link">[[Source]](src/net/ossockopt.md#L1313)</span>


```pony
fun box udp_encap()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap_espinudp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1314)</span>


```pony
fun box udp_encap_espinudp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap_espinudp_maxfraglen
<span class="source-link">[[Source]](src/net/ossockopt.md#L1315)</span>


```pony
fun box udp_encap_espinudp_maxfraglen()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap_espinudp_non_ike
<span class="source-link">[[Source]](src/net/ossockopt.md#L1316)</span>


```pony
fun box udp_encap_espinudp_non_ike()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap_espinudp_port
<span class="source-link">[[Source]](src/net/ossockopt.md#L1317)</span>


```pony
fun box udp_encap_espinudp_port()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_encap_l2tpinudp
<span class="source-link">[[Source]](src/net/ossockopt.md#L1318)</span>


```pony
fun box udp_encap_l2tpinudp()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_nocksum
<span class="source-link">[[Source]](src/net/ossockopt.md#L1319)</span>


```pony
fun box udp_nocksum()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_no_check6_rx
<span class="source-link">[[Source]](src/net/ossockopt.md#L1320)</span>


```pony
fun box udp_no_check6_rx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_no_check6_tx
<span class="source-link">[[Source]](src/net/ossockopt.md#L1321)</span>


```pony
fun box udp_no_check6_tx()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### udp_vendor
<span class="source-link">[[Source]](src/net/ossockopt.md#L1322)</span>


```pony
fun box udp_vendor()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

### eq
<span class="source-link">[[Source]](src/net/ossockopt.md#L76)</span>


```pony
fun box eq(
  that: OSSockOpt val)
: Bool val
```
#### Parameters

*   that: [OSSockOpt](net-OSSockOpt.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/net/ossockopt.md#L76)</span>


```pony
fun box ne(
  that: OSSockOpt val)
: Bool val
```
#### Parameters

*   that: [OSSockOpt](net-OSSockOpt.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

