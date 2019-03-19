# Cap
<span class="source-link">[[Source]](src/capsicum/cap.md#L1)</span>

The Capsicum rights.


```pony
primitive val Cap
```

## Constructors

### create
<span class="source-link">[[Source]](src/capsicum/cap.md#L1)</span>


```pony
new val create()
: Cap val^
```

#### Returns

* [Cap](capsicum-Cap.md) val^

---

## Public Functions

### enter
<span class="source-link">[[Source]](src/capsicum/cap.md#L5)</span>


This places the current process into capability mode, a mode of execution
in which processes may only issue system calls operating on file
descriptors or reading limited global system state. Access to global name
spaces, such as file system or IPC name spaces, is prevented.


```pony
fun box enter()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### read
<span class="source-link">[[Source]](src/capsicum/cap.md#L18)</span>


```pony
fun box read()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### write
<span class="source-link">[[Source]](src/capsicum/cap.md#L19)</span>


```pony
fun box write()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### seek_tell
<span class="source-link">[[Source]](src/capsicum/cap.md#L20)</span>


```pony
fun box seek_tell()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### seek
<span class="source-link">[[Source]](src/capsicum/cap.md#L21)</span>


```pony
fun box seek()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### pread
<span class="source-link">[[Source]](src/capsicum/cap.md#L22)</span>


```pony
fun box pread()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### pwrite
<span class="source-link">[[Source]](src/capsicum/cap.md#L23)</span>


```pony
fun box pwrite()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap
<span class="source-link">[[Source]](src/capsicum/cap.md#L25)</span>


```pony
fun box mmap()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_r
<span class="source-link">[[Source]](src/capsicum/cap.md#L26)</span>


```pony
fun box mmap_r()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_w
<span class="source-link">[[Source]](src/capsicum/cap.md#L27)</span>


```pony
fun box mmap_w()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_x
<span class="source-link">[[Source]](src/capsicum/cap.md#L28)</span>


```pony
fun box mmap_x()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_rw
<span class="source-link">[[Source]](src/capsicum/cap.md#L29)</span>


```pony
fun box mmap_rw()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_rx
<span class="source-link">[[Source]](src/capsicum/cap.md#L30)</span>


```pony
fun box mmap_rx()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_wx
<span class="source-link">[[Source]](src/capsicum/cap.md#L31)</span>


```pony
fun box mmap_wx()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mmap_rwx
<span class="source-link">[[Source]](src/capsicum/cap.md#L32)</span>


```pony
fun box mmap_rwx()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### creat
<span class="source-link">[[Source]](src/capsicum/cap.md#L34)</span>


```pony
fun box creat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fexecve
<span class="source-link">[[Source]](src/capsicum/cap.md#L35)</span>


```pony
fun box fexecve()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fsync
<span class="source-link">[[Source]](src/capsicum/cap.md#L36)</span>


```pony
fun box fsync()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### ftruncate
<span class="source-link">[[Source]](src/capsicum/cap.md#L37)</span>


```pony
fun box ftruncate()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### lookup
<span class="source-link">[[Source]](src/capsicum/cap.md#L38)</span>


```pony
fun box lookup()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchdir
<span class="source-link">[[Source]](src/capsicum/cap.md#L39)</span>


```pony
fun box fchdir()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchflags
<span class="source-link">[[Source]](src/capsicum/cap.md#L40)</span>


```pony
fun box fchflags()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### chflagsat
<span class="source-link">[[Source]](src/capsicum/cap.md#L41)</span>


```pony
fun box chflagsat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchmod
<span class="source-link">[[Source]](src/capsicum/cap.md#L42)</span>


```pony
fun box fchmod()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchmodat
<span class="source-link">[[Source]](src/capsicum/cap.md#L43)</span>


```pony
fun box fchmodat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchown
<span class="source-link">[[Source]](src/capsicum/cap.md#L44)</span>


```pony
fun box fchown()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fchownat
<span class="source-link">[[Source]](src/capsicum/cap.md#L45)</span>


```pony
fun box fchownat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fcntl
<span class="source-link">[[Source]](src/capsicum/cap.md#L46)</span>


```pony
fun box fcntl()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### flock
<span class="source-link">[[Source]](src/capsicum/cap.md#L47)</span>


```pony
fun box flock()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fpathconf
<span class="source-link">[[Source]](src/capsicum/cap.md#L48)</span>


```pony
fun box fpathconf()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fsck
<span class="source-link">[[Source]](src/capsicum/cap.md#L49)</span>


```pony
fun box fsck()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fstat
<span class="source-link">[[Source]](src/capsicum/cap.md#L50)</span>


```pony
fun box fstat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fstatat
<span class="source-link">[[Source]](src/capsicum/cap.md#L51)</span>


```pony
fun box fstatat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### fstatfs
<span class="source-link">[[Source]](src/capsicum/cap.md#L52)</span>


```pony
fun box fstatfs()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### futimes
<span class="source-link">[[Source]](src/capsicum/cap.md#L53)</span>


```pony
fun box futimes()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### futimesat
<span class="source-link">[[Source]](src/capsicum/cap.md#L54)</span>


```pony
fun box futimesat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### linkat
<span class="source-link">[[Source]](src/capsicum/cap.md#L56)</span>


```pony
fun box linkat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mkdirat
<span class="source-link">[[Source]](src/capsicum/cap.md#L57)</span>


```pony
fun box mkdirat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mkfifoat
<span class="source-link">[[Source]](src/capsicum/cap.md#L58)</span>


```pony
fun box mkfifoat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mknodat
<span class="source-link">[[Source]](src/capsicum/cap.md#L59)</span>


```pony
fun box mknodat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### renameat
<span class="source-link">[[Source]](src/capsicum/cap.md#L60)</span>


```pony
fun box renameat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### symlinkat
<span class="source-link">[[Source]](src/capsicum/cap.md#L61)</span>


```pony
fun box symlinkat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### unlinkat
<span class="source-link">[[Source]](src/capsicum/cap.md#L62)</span>


```pony
fun box unlinkat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### accept
<span class="source-link">[[Source]](src/capsicum/cap.md#L64)</span>


```pony
fun box accept()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### bind
<span class="source-link">[[Source]](src/capsicum/cap.md#L65)</span>


```pony
fun box bind()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### connect
<span class="source-link">[[Source]](src/capsicum/cap.md#L66)</span>


```pony
fun box connect()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### getpeername
<span class="source-link">[[Source]](src/capsicum/cap.md#L67)</span>


```pony
fun box getpeername()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### getsockname
<span class="source-link">[[Source]](src/capsicum/cap.md#L68)</span>


```pony
fun box getsockname()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### getsockopt
<span class="source-link">[[Source]](src/capsicum/cap.md#L69)</span>


```pony
fun box getsockopt()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### listen
<span class="source-link">[[Source]](src/capsicum/cap.md#L70)</span>


```pony
fun box listen()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### peeloff
<span class="source-link">[[Source]](src/capsicum/cap.md#L71)</span>


```pony
fun box peeloff()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### recv
<span class="source-link">[[Source]](src/capsicum/cap.md#L72)</span>


```pony
fun box recv()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### send
<span class="source-link">[[Source]](src/capsicum/cap.md#L73)</span>


```pony
fun box send()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### setsockopt
<span class="source-link">[[Source]](src/capsicum/cap.md#L74)</span>


```pony
fun box setsockopt()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### shutdown
<span class="source-link">[[Source]](src/capsicum/cap.md#L75)</span>


```pony
fun box shutdown()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### bindat
<span class="source-link">[[Source]](src/capsicum/cap.md#L76)</span>


```pony
fun box bindat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### connectat
<span class="source-link">[[Source]](src/capsicum/cap.md#L77)</span>


```pony
fun box connectat()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### sock_client
<span class="source-link">[[Source]](src/capsicum/cap.md#L79)</span>


```pony
fun box sock_client()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### sock_server
<span class="source-link">[[Source]](src/capsicum/cap.md#L83)</span>


```pony
fun box sock_server()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mac_get
<span class="source-link">[[Source]](src/capsicum/cap.md#L87)</span>


```pony
fun box mac_get()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### mac_set
<span class="source-link">[[Source]](src/capsicum/cap.md#L88)</span>


```pony
fun box mac_set()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### sem_getvalue
<span class="source-link">[[Source]](src/capsicum/cap.md#L90)</span>


```pony
fun box sem_getvalue()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### sem_post
<span class="source-link">[[Source]](src/capsicum/cap.md#L91)</span>


```pony
fun box sem_post()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### sem_wait
<span class="source-link">[[Source]](src/capsicum/cap.md#L92)</span>


```pony
fun box sem_wait()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### event
<span class="source-link">[[Source]](src/capsicum/cap.md#L94)</span>


```pony
fun box event()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### kqueue_event
<span class="source-link">[[Source]](src/capsicum/cap.md#L95)</span>


```pony
fun box kqueue_event()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### ioctl
<span class="source-link">[[Source]](src/capsicum/cap.md#L96)</span>


```pony
fun box ioctl()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### ttyhook
<span class="source-link">[[Source]](src/capsicum/cap.md#L97)</span>


```pony
fun box ttyhook()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### pdgetpid
<span class="source-link">[[Source]](src/capsicum/cap.md#L99)</span>


```pony
fun box pdgetpid()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### pdwait
<span class="source-link">[[Source]](src/capsicum/cap.md#L100)</span>


```pony
fun box pdwait()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### pdkill
<span class="source-link">[[Source]](src/capsicum/cap.md#L101)</span>


```pony
fun box pdkill()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### exattr_delete
<span class="source-link">[[Source]](src/capsicum/cap.md#L103)</span>


```pony
fun box exattr_delete()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### exattr_get
<span class="source-link">[[Source]](src/capsicum/cap.md#L104)</span>


```pony
fun box exattr_get()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### exattr_list
<span class="source-link">[[Source]](src/capsicum/cap.md#L105)</span>


```pony
fun box exattr_list()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### exattr_set
<span class="source-link">[[Source]](src/capsicum/cap.md#L106)</span>


```pony
fun box exattr_set()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### acl_check
<span class="source-link">[[Source]](src/capsicum/cap.md#L108)</span>


```pony
fun box acl_check()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### acl_delete
<span class="source-link">[[Source]](src/capsicum/cap.md#L109)</span>


```pony
fun box acl_delete()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### acl_get
<span class="source-link">[[Source]](src/capsicum/cap.md#L110)</span>


```pony
fun box acl_get()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### acl_set
<span class="source-link">[[Source]](src/capsicum/cap.md#L111)</span>


```pony
fun box acl_set()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### kqueue_change
<span class="source-link">[[Source]](src/capsicum/cap.md#L113)</span>


```pony
fun box kqueue_change()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### kqueue
<span class="source-link">[[Source]](src/capsicum/cap.md#L114)</span>


```pony
fun box kqueue()
: U64 val
```

#### Returns

* [U64](builtin-U64.md) val

---

### eq
<span class="source-link">[[Source]](src/capsicum/cap.md#L5)</span>


```pony
fun box eq(
  that: Cap val)
: Bool val
```
#### Parameters

*   that: [Cap](capsicum-Cap.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/capsicum/cap.md#L5)</span>


```pony
fun box ne(
  that: Cap val)
: Bool val
```
#### Parameters

*   that: [Cap](capsicum-Cap.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _id
<span class="source-link">[[Source]](src/capsicum/cap.md#L116)</span>


Build a Capsicum ID from an index and a bit position.


```pony
fun box _id(
  idx: U64 val,
  bit: U64 val)
: U64 val
```
#### Parameters

*   idx: [U64](builtin-U64.md) val
*   bit: [U64](builtin-U64.md) val

#### Returns

* [U64](builtin-U64.md) val

---

