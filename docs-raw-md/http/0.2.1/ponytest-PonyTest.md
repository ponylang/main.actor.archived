# PonyTest
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L245)</span>

Main test framework actor that organises tests, collates information and
prints results.


```pony
actor tag PonyTest
```

## Constructors

### create
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L270)</span>


Create a PonyTest object and use it to run the tests from the given
TestList


```pony
new tag create(
  env: Env val,
  list: TestList tag)
: PonyTest tag^
```
#### Parameters

*   env: [Env](builtin-Env.md) val
*   list: [TestList](ponytest-TestList.md) tag

#### Returns

* [PonyTest](ponytest-PonyTest.md) tag^

---

## Public Behaviours

### apply
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L282)</span>


Run the given test, subject to our filters and options.


```pony
be apply(
  test: UnitTest iso)
```
#### Parameters

*   test: [UnitTest](ponytest-UnitTest.md) iso

---

## Private Behaviours

### _test_started
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L347)</span>


A test has started running, update status info.
The id parameter is the test identifier handed out when we created the test
helper.


```pony
be _test_started(
  id: USize val)
```
#### Parameters

*   id: [USize](builtin-USize.md) val

---

### _test_complete
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L364)</span>


A test has completed, restore its result and update our status info.
The id parameter is the test identifier handed out when we created the test
helper.


```pony
be _test_complete(
  id: USize val,
  pass: Bool val,
  log: Array[String val] val)
```
#### Parameters

*   id: [USize](builtin-USize.md) val
*   pass: [Bool](builtin-Bool.md) val
*   log: [Array](builtin-Array.md)\[[String](builtin-String.md) val\] val

---

### _all_tests_applied
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L388)</span>


All our tests have been handed to apply(), setup for finishing


```pony
be _all_tests_applied()
```

---

## Private Functions

### _find_group
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L322)</span>


Find the group to use for the given group name, subject to the
--sequential flag.


```pony
fun ref _find_group(
  group_name: String val)
: _Group tag
```
#### Parameters

*   group_name: [String](builtin-String.md) val

#### Returns

* [_Group](ponytest-_Group.md) tag

---

### _process_opts
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L413)</span>


Process our command line options.
All command line arguments given must be recognised and make sense.
State for specified options is stored in object fields.
We don't use the options package because we aren't already dependencies.


```pony
fun ref _process_opts()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _print_report
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L463)</span>


The tests are all complete, print out the results.


```pony
fun box _print_report()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _plural
<span class="source-link">[[Source]](src/ponytest/pony_test.md#L503)</span>


Return a "s" or an empty string depending on whether the given number is 1.
For use when printing possibly plural words, eg "test" or "tests".


```pony
fun box _plural(
  n: USize val)
: String val
```
#### Parameters

*   n: [USize](builtin-USize.md) val

#### Returns

* [String](builtin-String.md) val

---

