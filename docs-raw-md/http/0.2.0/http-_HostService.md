# _HostService
<span class="source-link">[[Source]](src/http/_host_service.md#L3)</span>
```pony
class val _HostService is
  Hashable ref,
  Equatable[_HostService val] ref
```

#### Implements

* [Hashable](collections-Hashable.md) ref
* [Equatable](builtin-Equatable.md)\[[_HostService](http-_HostService.md) val\] ref

---

## Constructors

### create
<span class="source-link">[[Source]](src/http/_host_service.md#L8)</span>


```pony
new val create(
  scheme': String val,
  host': String val,
  service': String val)
: _HostService val^
```
#### Parameters

*   scheme': [String](builtin-String.md) val
*   host': [String](builtin-String.md) val
*   service': [String](builtin-String.md) val

#### Returns

* [_HostService](http-_HostService.md) val^

---

## Public fields

### let scheme: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/_host_service.md#L4)</span>



---

### let host: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/_host_service.md#L5)</span>



---

### let service: [String](builtin-String.md) val
<span class="source-link">[[Source]](src/http/_host_service.md#L6)</span>



---

## Public Functions

### hash
<span class="source-link">[[Source]](src/http/_host_service.md#L13)</span>


```pony
fun box hash()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### eq
<span class="source-link">[[Source]](src/http/_host_service.md#L16)</span>


```pony
fun box eq(
  that: _HostService box)
: Bool val
```
#### Parameters

*   that: [_HostService](http-_HostService.md) box

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne



```pony
fun box ne(
  that: _HostService val)
: Bool val
```
#### Parameters

*   that: [_HostService](http-_HostService.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

