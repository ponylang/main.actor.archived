# _SimultaneousGroup
<span class="source-link">[[Source]](src/ponytest/_group.md#L51)</span>

Test group in which all tests can run concurrently.


```pony
actor tag _SimultaneousGroup is
  _Group tag
```

#### Implements

* [_Group](ponytest-_Group.md) tag

---

## Constructors

### create
<span class="source-link">[[Source]](src/ponytest/_group.md#L51)</span>


```pony
new tag create()
: _SimultaneousGroup tag^
```

#### Returns

* [_SimultaneousGroup](ponytest-_SimultaneousGroup.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/ponytest/_group.md#L56)</span>


```pony
be apply(
  runner: _TestRunner tag)
```
#### Parameters

*   runner: [_TestRunner](ponytest-_TestRunner.md) tag

---

## Private Behaviours

### _test_complete
<span class="source-link">[[Source]](src/ponytest/_group.md#L60)</span>


```pony
be _test_complete(
  runner: _TestRunner tag)
```
#### Parameters

*   runner: [_TestRunner](ponytest-_TestRunner.md) tag

---

