# _EmptyIter\[A: A\]
<span class="source-link">[[Source]](src/itertools/iter.md#L882)</span>
```pony
class ref _EmptyIter[A: A]
```

## Constructors

### create
<span class="source-link">[[Source]](src/itertools/iter.md#L882)</span>


```pony
new iso create()
: _EmptyIter[A] iso^
```

#### Returns

* [_EmptyIter](itertools-_EmptyIter.md)\[A\] iso^

---

## Public Functions

### has_next
<span class="source-link">[[Source]](src/itertools/iter.md#L883)</span>


```pony
fun ref has_next()
: Bool val
```

#### Returns

* [Bool](builtin-Bool.md) val

---

### next
<span class="source-link">[[Source]](src/itertools/iter.md#L884)</span>


```pony
fun ref next()
: A ?
```

#### Returns

* A ?

---

