# CapRights0
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L5)</span>

Version 0 of the capsicum cap_rights_t structure.


```pony
class ref CapRights0
```

## Constructors

### create
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L12)</span>


Initialises with no rights.


```pony
new ref create()
: CapRights0 ref^
```

#### Returns

* [CapRights0](capsicum-CapRights0.md) ref^

---

### from
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L18)</span>


Initialises with the rights from a FileCaps.


```pony
new ref from(
  caps: Flags[(FileCreate val | FileChmod val | FileChown val | FileLink val | FileLookup val | FileMkdir val | FileRead val | FileRemove val | FileRename val | FileSeek val | FileStat val | FileSync val | FileTime val | FileTruncate val | FileWrite val | FileExec val), U32 val] box)
: CapRights0 ref^
```
#### Parameters

*   caps: [Flags](collections-Flags.md)\[([FileCreate](files-FileCreate.md) val | [FileChmod](files-FileChmod.md) val | [FileChown](files-FileChown.md) val | [FileLink](files-FileLink.md) val | [FileLookup](files-FileLookup.md) val | [FileMkdir](files-FileMkdir.md) val | [FileRead](files-FileRead.md) val | [FileRemove](files-FileRemove.md) val | [FileRename](files-FileRename.md) val | [FileSeek](files-FileSeek.md) val | [FileStat](files-FileStat.md) val | [FileSync](files-FileSync.md) val | [FileTime](files-FileTime.md) val | [FileTruncate](files-FileTruncate.md) val | [FileWrite](files-FileWrite.md) val | [FileExec](files-FileExec.md) val), [U32](builtin-U32.md) val\] box

#### Returns

* [CapRights0](capsicum-CapRights0.md) ref^

---

### descriptor
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L52)</span>


Initialises with the rights on the given file descriptor.


```pony
new ref descriptor(
  fd: I32 val)
: CapRights0 ref^
```
#### Parameters

*   fd: [I32](builtin-I32.md) val

#### Returns

* [CapRights0](capsicum-CapRights0.md) ref^

---

## Public Functions

### set
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L60)</span>


```pony
fun ref set(
  cap: U64 val)
: None val
```
#### Parameters

*   cap: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### unset
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L65)</span>


```pony
fun ref unset(
  cap: U64 val)
: None val
```
#### Parameters

*   cap: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### limit
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L70)</span>


Limits the fd to the encoded rights.


```pony
fun box limit(
  fd: I32 val)
: Bool val
```
#### Parameters

*   fd: [I32](builtin-I32.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### merge
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L80)</span>


Merge the rights in that into this.


```pony
fun ref merge(
  that: CapRights0 ref)
: None val
```
#### Parameters

*   that: [CapRights0](capsicum-CapRights0.md) ref

#### Returns

* [None](builtin-None.md) val

---

### remove
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L88)</span>


Remove the rights in that from this.


```pony
fun ref remove(
  that: CapRights0 ref)
: None val
```
#### Parameters

*   that: [CapRights0](capsicum-CapRights0.md) ref

#### Returns

* [None](builtin-None.md) val

---

### clear
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L96)</span>


Clear all rights.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### contains
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L104)</span>


Check that this is a superset of the rights in that.


```pony
fun box contains(
  that: CapRights0 ref)
: Bool val
```
#### Parameters

*   that: [CapRights0](capsicum-CapRights0.md) ref

#### Returns

* [Bool](builtin-Bool.md) val

---

## Private Functions

### _version
<span class="source-link">[[Source]](src/capsicum/cap_rights.md#L114)</span>


```pony
fun box _version()
: I32 val
```

#### Returns

* [I32](builtin-I32.md) val

---

