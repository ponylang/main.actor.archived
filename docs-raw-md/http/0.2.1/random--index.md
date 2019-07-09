# Random package

The Random package provides support generating random numbers. The package
provides random number generators you can use in your code, a dice roller and
a trait for implementing your own random number generator.

If your application does not require a specific generator, use Rand.

Seed values can contain up to 128 bits of randomness in the form of two U64s.
A common non-cryptographically secure way to seed a generator is with
`Time.now`.

```pony
let rand = Rand
let n = rand.next()
```


## Public Types

* [class XorShift128Plus](random-XorShift128Plus.md)
* [class XorOshiro128Plus](random-XorOshiro128Plus.md)
* [class XorOshiro128StarStar](random-XorOshiro128StarStar.md)
* [class SplitMix64](random-SplitMix64.md)
* [type Rand](random-Rand.md)
* [trait Random](random-Random.md)
* [class MT](random-MT.md)
* [class Dice](random-Dice.md)
