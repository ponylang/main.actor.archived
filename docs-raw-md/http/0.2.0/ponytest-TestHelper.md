# TestHelper
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L4)</span>

Per unit test class that provides control, logging and assertion functions.

Each unit test is given a TestHelper when it is run. This is val and so can
be passed between methods and actors within the test without restriction.

The assertion functions check the relevant condition and mark the test as a
failure if appropriate. The success or failure of the condition is reported
back as a Bool which can be checked if a different code path is needed when
that condition fails.

All assert functions take an optional message argument. This is simply a
string that is printed as part of the error message when the condition fails.
It is intended to aid identifying what failed.


```pony
class val TestHelper
```

## Constructors

### _create
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L31)</span>


Create a new TestHelper.


```pony
new val _create(
  runner: _TestRunner tag,
  env': Env val)
: TestHelper val^
```
#### Parameters

*   runner: [_TestRunner](ponytest-_TestRunner.md) tag
*   env': [Env](builtin-Env.md) val

#### Returns

* [TestHelper](ponytest-TestHelper.md) val^

---

## Public fields

### let env: [Env](builtin-Env.md) val
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L22)</span>

The process environment.

This is useful for getting the [root authority](builtin-AmbientAuth.md) in
order to access the filesystem (See [files](files--index.md)) or the network
(See [net](net--index.md)) in your tests.




---

## Public Functions

### log
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L38)</span>


Log the given message.

The verbose parameter allows messages to be printed only when the --verbose
command line option is used. For example, by default assert failures are
logged, but passes are not. With --verbose both passes and fails are
reported.

Logs are printed one test at a time to avoid interleaving log lines from
concurrent tests.


```pony
fun box log(
  msg: String val,
  verbose: Bool val = seq)
: None val
```
#### Parameters

*   msg: [String](builtin-String.md) val
*   verbose: [Bool](builtin-Bool.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### fail
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L52)</span>


Flag the test as having failed.


```pony
fun box fail(
  msg: String val = seq)
: None val
```
#### Parameters

*   msg: [String](builtin-String.md) val = seq

#### Returns

* [None](builtin-None.md) val

---

### assert_true
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L58)</span>


Assert that the given expression is true.


```pony
fun box assert_true(
  actual: Bool val,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   actual: [Bool](builtin-Bool.md) val
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_false
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L71)</span>


Assert that the given expression is false.


```pony
fun box assert_false(
  actual: Bool val,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   actual: [Bool](builtin-Bool.md) val
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_error
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L84)</span>


Assert that the given test function throws an error when run.


```pony
fun box assert_error(
  test: ITest box,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   test: [ITest](ponytest-ITest.md) box
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_no_error
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L99)</span>


Assert that the gived test function does not throw an error when run.


```pony
fun box assert_no_error(
  test: ITest box,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   test: [ITest](ponytest-ITest.md) box
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_is\[A: A\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L117)</span>


Assert that the 2 given expressions resolve to the same instance


```pony
fun box assert_is[A: A](
  expect: A,
  actual: A,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   expect: A
*   actual: A
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_eq\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md) #read)\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L154)</span>


Assert that the 2 given expressions are equal.


```pony
fun box assert_eq[A: (Equatable[A] #read & Stringable #read)](
  expect: A,
  actual: A,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   expect: A
*   actual: A
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_isnt\[A: A\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L179)</span>


Assert that the 2 given expressions resolve to different instances.


```pony
fun box assert_isnt[A: A](
  not_expect: A,
  actual: A,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   not_expect: A
*   actual: A
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_ne\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md) #read)\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L216)</span>


Assert that the 2 given expressions are not equal.


```pony
fun box assert_ne[A: (Equatable[A] #read & Stringable #read)](
  not_expect: A,
  actual: A,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   not_expect: A
*   actual: A
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_array_eq\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md) #read)\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L244)</span>


Assert that the contents of the 2 given ReadSeqs are equal.


```pony
fun box assert_array_eq[A: (Equatable[A] #read & Stringable #read)](
  expect: ReadSeq[A] box,
  actual: ReadSeq[A] box,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   expect: [ReadSeq](builtin-ReadSeq.md)\[A\] box
*   actual: [ReadSeq](builtin-ReadSeq.md)\[A\] box
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### assert_array_eq_unordered\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md) #read)\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L286)</span>


Assert that the contents of the 2 given ReadSeqs are equal ignoring order.


```pony
fun box assert_array_eq_unordered[A: (Equatable[A] #read & Stringable #read)](
  expect: ReadSeq[A] box,
  actual: ReadSeq[A] box,
  msg: String val = seq,
  loc: SourceLoc val = seq)
: Bool val
```
#### Parameters

*   expect: [ReadSeq](builtin-ReadSeq.md)\[A\] box
*   actual: [ReadSeq](builtin-ReadSeq.md)\[A\] box
*   msg: [String](builtin-String.md) val = seq
*   loc: [SourceLoc](builtin-SourceLoc.md) val = seq

#### Returns

* [Bool](builtin-Bool.md) val

---

### long_test
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L350)</span>


Indicate that this is a long running test that may continue after the
test function exits.
Once this function is called, complete() must be called to finish the test,
unless a timeout occurs.
The timeout is specified in nanseconds.


```pony
fun box long_test(
  timeout: U64 val)
: None val
```
#### Parameters

*   timeout: [U64](builtin-U64.md) val

#### Returns

* [None](builtin-None.md) val

---

### complete
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L360)</span>


MUST be called by each long test to indicate the test has finished, unless
a timeout occurs.

The "success" parameter specifies whether the test succeeded. However if
any asserts fail the test will be considered a failure, regardless of the
value of this parameter.

Once this is called tear_down() may be called at any time.


```pony
fun box complete(
  success: Bool val)
: None val
```
#### Parameters

*   success: [Bool](builtin-Bool.md) val

#### Returns

* [None](builtin-None.md) val

---

### expect_action
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L373)</span>


Can be called in a long test to set up expectations for one or more actions
that, when all completed, will complete the test.

This pattern is useful for cases where you have multiple things that need
to happen to complete your test, but don't want to have to collect them
all yourself into a single actor that calls the complete method.

The order of calls to expect_action don't matter - the actions may be
completed in any other order to complete the test.


```pony
fun box expect_action(
  name: String val)
: None val
```
#### Parameters

*   name: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### complete_action
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L387)</span>


MUST be called for each action expectation that was set up in a long test
to fulfill the expectations. Any expectations that are still outstanding
when the long test timeout runs out will be printed by name when it fails.

Completing all outstanding actions is enough to finish the test. There's no
need to also call the complete method when the actions are finished.

Calling the complete method will finish the test immediately, without
waiting for any outstanding actions to be completed.


```pony
fun box complete_action(
  name: String val)
: None val
```
#### Parameters

*   name: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### fail_action
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L401)</span>


Call to fail an action, which will also cause the entire test to fail
immediately, without waiting the rest of the outstanding actions.

The name of the failed action will be included in the failure output.

Usually the action name should be an expected action set up by a call to
expect_action, but failing unexpected actions will also fail the test.


```pony
fun box fail_action(
  name: String val)
: None val
```
#### Parameters

*   name: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### dispose_when_done
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L413)</span>


Pass a disposable actor to be disposed of when the test is complete.
The actor will be disposed no matter whether the test succeeds or fails.

If the test is already tearing down, the actor will be disposed immediately.


```pony
fun box dispose_when_done(
  disposable: DisposableActor tag)
: None val
```
#### Parameters

*   disposable: [DisposableActor](builtin-DisposableActor.md) tag

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _check_is\[A: A\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L129)</span>


Check that the 2 given expressions resolve to the same instance


```pony
fun box _check_is[A: A](
  check: String val,
  expect: A,
  actual: A,
  msg: String val,
  loc: SourceLoc val)
: Bool val
```
#### Parameters

*   check: [String](builtin-String.md) val
*   expect: A
*   actual: A
*   msg: [String](builtin-String.md) val
*   loc: [SourceLoc](builtin-SourceLoc.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _check_eq\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md))\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L162)</span>


Check that the 2 given expressions are equal.


```pony
fun box _check_eq[A: (Equatable[A] #read & Stringable)](
  check: String val,
  expect: A,
  actual: A,
  msg: String val,
  loc: SourceLoc val)
: Bool val
```
#### Parameters

*   check: [String](builtin-String.md) val
*   expect: A
*   actual: A
*   msg: [String](builtin-String.md) val
*   loc: [SourceLoc](builtin-SourceLoc.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _check_isnt\[A: A\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L191)</span>


Check that the 2 given expressions resolve to different instances.


```pony
fun box _check_isnt[A: A](
  check: String val,
  not_expect: A,
  actual: A,
  msg: String val,
  loc: SourceLoc val)
: Bool val
```
#### Parameters

*   check: [String](builtin-String.md) val
*   not_expect: A
*   actual: A
*   msg: [String](builtin-String.md) val
*   loc: [SourceLoc](builtin-SourceLoc.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _check_ne\[A: ([Equatable](builtin-Equatable.md)\[A\] #read & [Stringable](builtin-Stringable.md))\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L224)</span>


Check that the 2 given expressions are not equal.


```pony
fun box _check_ne[A: (Equatable[A] #read & Stringable)](
  check: String val,
  not_expect: A,
  actual: A,
  msg: String val,
  loc: SourceLoc val)
: Bool val
```
#### Parameters

*   check: [String](builtin-String.md) val
*   not_expect: A
*   actual: A
*   msg: [String](builtin-String.md) val
*   loc: [SourceLoc](builtin-SourceLoc.md) val

#### Returns

* [Bool](builtin-Bool.md) val

---

### _format_loc
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L340)</span>


```pony
fun box _format_loc(
  loc: SourceLoc val)
: String val
```
#### Parameters

*   loc: [SourceLoc](builtin-SourceLoc.md) val

#### Returns

* [String](builtin-String.md) val

---

### _print_array\[A: [Stringable](builtin-Stringable.md) #read\]
<span class="source-link">[[Source]](src/ponytest/test_helper.md#L343)</span>


Generate a printable string of the contents of the given readseq to use in
error messages.


```pony
fun box _print_array[A: Stringable #read](
  array: ReadSeq[A] box)
: String val
```
#### Parameters

*   array: [ReadSeq](builtin-ReadSeq.md)\[A\] box

#### Returns

* [String](builtin-String.md) val

---

