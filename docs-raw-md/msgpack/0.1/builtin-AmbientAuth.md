# AmbientAuth
<span class="source-link">[[Source]](src/builtin/ambient_auth.md#L1)</span>

This type represents the root capability. When a Pony program starts, the
Env passed to the Main actor contains an instance of the root capability.

Ambient access to the root capability is denied outside of the builtin
package. Inside the builtin package, only Env creates a Root.

The root capability can be used by any package that wants to establish a
principle of least authority. A typical usage is to have a parameter on a
constructor for some resource that expects a limiting capability specific to
the package, but will also accept the root capability as representing
unlimited access.


```pony
primitive val AmbientAuth
```

## Constructors

### _create
<span class="source-link">[[Source]](src/builtin/ambient_auth.md#L15)</span>


```pony
new val _create()
: AmbientAuth val^
```

#### Returns

* [AmbientAuth](builtin-AmbientAuth.md) val^

---

## Public Functions

### eq
<span class="source-link">[[Source]](src/builtin/ambient_auth.md#L15)</span>


```pony
fun box eq(
  that: AmbientAuth val)
: Bool val
```
#### Parameters

*   that: [AmbientAuth](builtin-AmbientAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/ambient_auth.md#L15)</span>


```pony
fun box ne(
  that: AmbientAuth val)
: Bool val
```
#### Parameters

*   that: [AmbientAuth](builtin-AmbientAuth.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

