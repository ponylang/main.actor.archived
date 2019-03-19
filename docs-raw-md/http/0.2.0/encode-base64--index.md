# Base64 package

The Base64 package contains support for doing Base64 binary-to-text encodings.
We currently have support 3 encodings: PEM, MIME and URL.

To learn more about Base64, we suggest you check out the
[wikipedia entry](https://en.wikipedia.org/wiki/Base64).

## Example code

```pony
use "encode/base64"

actor Main
  new create(env: Env) =>
    env.out.print(Base64.encode("foobar"))
    try
      env.out.print(Base64.decode[String iso]("Zm9vYmFy")?)
    end
```


## Public Types

* [primitive Base64](encode-base64-Base64.md)
