# TestList
<span class="source-link">[[Source]](src/ponytest/test_list.md#L1)</span>

Source of unit tests for a PonyTest object.
See package doc string for further information and example use.


```pony
trait ref TestList
```

## Public Functions

### tests
<span class="source-link">[[Source]](src/ponytest/test_list.md#L7)</span>


Add all the tests in this suite to the given test object.
Typically the implementation of this function will be of the form:
```pony
fun tests(test: PonyTest) =>
  test(_TestClass1)
  test(_TestClass2)
  test(_TestClass3)
```


```pony
fun tag tests(
  test: PonyTest tag)
: None val
```
#### Parameters

*   test: [PonyTest](ponytest-PonyTest.md) tag

#### Returns

* [None](builtin-None.md) val

---

