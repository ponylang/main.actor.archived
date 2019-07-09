# HashMap\[K: K, V: V, H: [HashFunction](collections-HashFunction.md)\[K\] val\]
<span class="source-link">[[Source]](src/collections/map.md#L15)</span>

A quadratic probing hash map. Resize occurs at a load factor of 0.75. A
resized map has 2 times the space. The hash function can be plugged in to the
type to create different kinds of maps.


```pony
class ref HashMap[K: K, V: V, H: HashFunction[K] val]
```

## Constructors

### create
<span class="source-link">[[Source]](src/collections/map.md#L24)</span>


Create an array with space for prealloc elements without triggering a
resize. Defaults to 6.


```pony
new ref create(
  prealloc: USize val = 6)
: HashMap[K, V, H] ref^
```
#### Parameters

*   prealloc: [USize](builtin-USize.md) val = 6

#### Returns

* [HashMap](collections-HashMap.md)\[K, V, H\] ref^

---

## Public Functions

### size
<span class="source-link">[[Source]](src/collections/map.md#L33)</span>


The number of items in the map.


```pony
fun box size()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### space
<span class="source-link">[[Source]](src/collections/map.md#L39)</span>


The available space in the map. Resize will happen when
size / space >= 0.75.


```pony
fun box space()
: USize val
```

#### Returns

* [USize](builtin-USize.md) val

---

### apply
<span class="source-link">[[Source]](src/collections/map.md#L46)</span>


Gets a value from the map. Raises an error if no such item exists.


```pony
fun box apply(
  key: box->K!)
: this->V ?
```
#### Parameters

*   key: box->K!

#### Returns

* this->V ?

---

### update
<span class="source-link">[[Source]](src/collections/map.md#L58)</span>


Sets a value in the map. Returns the old value if there was one, otherwise
returns None. If there was no previous value, this may trigger a resize.


```pony
fun ref update(
  key: K,
  value: V)
: (V^ | None val)
```
#### Parameters

*   key: K
*   value: V

#### Returns

* (V^ | [None](builtin-None.md) val)

---

### upsert
<span class="source-link">[[Source]](src/collections/map.md#L78)</span>


Combines a provided value with the current value for the provided key
using the provided function. If the provided key has not been added to
the map yet, it sets its value to the provided value and ignores the
provided function.

As a simple example, say we had a map with I64 values and we wanted to
add 4 to the current value for key "test", which let's say is currently 2.
We call

m.upsert("test", 4, {(current, provided) => current + provided })

This changes the value associated with "test" to 6.

If we have not yet added the key "new-key" to the map and we call

m.upsert("new-key", 4, {(current, provided) => current + provided })

then "new-key" is added to the map with a value of 4.

Returns the value that we set the key to


```pony
fun ref upsert(
  key: K,
  value: V,
  f: {(V, V): V^}[K, V, H] box)
: V ?
```
#### Parameters

*   key: K
*   value: V
*   f: {(V, V): V^}[K, V, H] box

#### Returns

* V ?

---

### insert
<span class="source-link">[[Source]](src/collections/map.md#L124)</span>


Set a value in the map. Returns the new value, allowing reuse.


```pony
fun ref insert(
  key: K,
  value: V)
: V ?
```
#### Parameters

*   key: K
*   value: V

#### Returns

* V ?

---

### insert_if_absent
<span class="source-link">[[Source]](src/collections/map.md#L148)</span>


Set a value in the map if the key doesn't already exist in the Map.
Saves an extra lookup when doing a pattern like:

```pony
if not my_map.contains(my_key) then
  my_map(my_key) = my_value
end
```

Returns the value, the same as `insert`, allowing 'insert_if_absent'
to be used as a drop-in replacement for `insert`.


```pony
fun ref insert_if_absent(
  key: K,
  value: V)
: V ?
```
#### Parameters

*   key: K
*   value: V

#### Returns

* V ?

---

### remove
<span class="source-link">[[Source]](src/collections/map.md#L183)</span>


Delete a value from the map and return it. Raises an error if there was no
value for the given key.


```pony
fun ref remove(
  key: box->K!)
: (K^ , V^) ?
```
#### Parameters

*   key: box->K!

#### Returns

* (K^ , V^) ?

---

### get_or_else
<span class="source-link">[[Source]](src/collections/map.md#L202)</span>


Get the value associated with provided key if present. Otherwise,
return the provided alternate value.


```pony
fun box get_or_else(
  key: box->K!,
  alt: this->V)
: this->V
```
#### Parameters

*   key: box->K!
*   alt: this->V

#### Returns

* this->V

---

### contains
<span class="source-link">[[Source]](src/collections/map.md#L221)</span>


Checks whether the map contains the key k


```pony
fun box contains(
  k: box->K!)
: Bool val
```
#### Parameters

*   k: box->K!

#### Returns

* [Bool](builtin-Bool.md) val

---

### concat
<span class="source-link">[[Source]](src/collections/map.md#L228)</span>


Add K, V pairs from the iterator to the map.


```pony
fun ref concat(
  iter: Iterator[(K^ , V^)] ref)
: None val
```
#### Parameters

*   iter: [Iterator](builtin-Iterator.md)\[(K^ , V^)\] ref

#### Returns

* [None](builtin-None.md) val

---

### add\[optional H2: [HashFunction](collections-HashFunction.md)\[this->K!\] val\]
<span class="source-link">[[Source]](src/collections/map.md#L236)</span>


This with the new (key, value) mapping.


```pony
fun box add[optional H2: HashFunction[this->K!] val](
  key: this->K!,
  value: this->V!)
: HashMap[this->K!, this->V!, H2] ref^
```
#### Parameters

*   key: this->K!
*   value: this->V!

#### Returns

* [HashMap](collections-HashMap.md)\[this->K!, this->V!, H2\] ref^

---

### sub\[optional H2: [HashFunction](collections-HashFunction.md)\[this->K!\] val\]
<span class="source-link">[[Source]](src/collections/map.md#L248)</span>


This without the given key.


```pony
fun box sub[optional H2: HashFunction[this->K!] val](
  key: this->K!,
  value: this->V!)
: HashMap[this->K!, this->V!, H2] ref^
```
#### Parameters

*   key: this->K!
*   value: this->V!

#### Returns

* [HashMap](collections-HashMap.md)\[this->K!, this->V!, H2\] ref^

---

### next_index
<span class="source-link">[[Source]](src/collections/map.md#L260)</span>


Given an index, return the next index that has a populated key and value.
Raise an error if there is no next populated index.


```pony
fun box next_index(
  prev: USize val = call)
: USize val ?
```
#### Parameters

*   prev: [USize](builtin-USize.md) val = call

#### Returns

* [USize](builtin-USize.md) val ?

---

### index
<span class="source-link">[[Source]](src/collections/map.md#L272)</span>


Returns the key and value at a given index.
Raise an error if the index is not populated.


```pony
fun box index(
  i: USize val)
: (this->K , this->V) ?
```
#### Parameters

*   i: [USize](builtin-USize.md) val

#### Returns

* (this->K , this->V) ?

---

### compact
<span class="source-link">[[Source]](src/collections/map.md#L279)</span>


Minimise the memory used for the map.


```pony
fun ref compact()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### clone\[optional H2: [HashFunction](collections-HashFunction.md)\[this->K!\] val\]
<span class="source-link">[[Source]](src/collections/map.md#L285)</span>


Create a clone. The key and value types may be different due to aliasing
and viewpoint adaptation.


```pony
fun box clone[optional H2: HashFunction[this->K!] val]()
: HashMap[this->K!, this->V!, H2] ref^
```

#### Returns

* [HashMap](collections-HashMap.md)\[this->K!, this->V!, H2\] ref^

---

### clear
<span class="source-link">[[Source]](src/collections/map.md#L299)</span>


Remove all entries.


```pony
fun ref clear()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### keys
<span class="source-link">[[Source]](src/collections/map.md#L363)</span>


Return an iterator over the keys.


```pony
fun box keys()
: MapKeys[K, V, H, this->HashMap[K, V, H] ref] ref^
```

#### Returns

* [MapKeys](collections-MapKeys.md)\[K, V, H, this->[HashMap](collections-HashMap.md)\[K, V, H\] ref\] ref^

---

### values
<span class="source-link">[[Source]](src/collections/map.md#L369)</span>


Return an iterator over the values.


```pony
fun box values()
: MapValues[K, V, H, this->HashMap[K, V, H] ref] ref^
```

#### Returns

* [MapValues](collections-MapValues.md)\[K, V, H, this->[HashMap](collections-HashMap.md)\[K, V, H\] ref\] ref^

---

### pairs
<span class="source-link">[[Source]](src/collections/map.md#L375)</span>


Return an iterator over the keys and values.


```pony
fun box pairs()
: MapPairs[K, V, H, this->HashMap[K, V, H] ref] ref^
```

#### Returns

* [MapPairs](collections-MapPairs.md)\[K, V, H, this->[HashMap](collections-HashMap.md)\[K, V, H\] ref\] ref^

---

## Private Functions

### _search
<span class="source-link">[[Source]](src/collections/map.md#L308)</span>


Return a slot number and whether or not it's currently occupied.


```pony
fun box _search(
  key: box->K!)
: (USize val , Bool val)
```
#### Parameters

*   key: box->K!

#### Returns

* ([USize](builtin-USize.md) val , [Bool](builtin-Bool.md) val)

---

### _resize
<span class="source-link">[[Source]](src/collections/map.md#L344)</span>


Change the available space.


```pony
fun ref _resize(
  len: USize val)
: None val
```
#### Parameters

*   len: [USize](builtin-USize.md) val

#### Returns

* [None](builtin-None.md) val

---

