# DoNotOptimise
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L1)</span>

Contains functions preventing some compiler optimisations, namely dead code
removal. This is useful for benchmarking purposes.


```pony
primitive val DoNotOptimise
```

## Constructors

### create
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L1)</span>


```pony
new val create()
: DoNotOptimise val^
```

#### Returns

* [DoNotOptimise](builtin-DoNotOptimise.md) val^

---

## Public Functions

### apply\[A: A\]
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L7)</span>


Prevent the compiler from optimising out obj and any computation it is
derived from. This doesn't prevent constant propagation.


```pony
fun box apply[A: A](
  obj: A)
: None val
```
#### Parameters

*   obj: A

#### Returns

* [None](builtin-None.md) val

---

### observe
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L14)</span>


Prevent the compiler from optimising out writes to an object marked by
the apply function.


```pony
fun box observe()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### eq
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L7)</span>


```pony
fun box eq(
  that: DoNotOptimise val)
: Bool val
```
#### Parameters

*   that: [DoNotOptimise](builtin-DoNotOptimise.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### ne
<span class="source-link">[[Source]](src/builtin/do_not_optimise.md#L7)</span>


```pony
fun box ne(
  that: DoNotOptimise val)
: Bool val
```
#### Parameters

*   that: [DoNotOptimise](builtin-DoNotOptimise.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

