# Format package

The Format package provides support for formatting strings. It can be
used to set things like width, padding and alignment, as well as
controlling the way numbers are displayed (decimal, octal,
hexadecimal).

# Example program

```pony
use "format"

actor Main
  fun disp(desc: String, v: I32, fmt: FormatInt = FormatDefault): String =>
    Format(desc where width = 10)
      + ":"
      + Format.int[I32](v where width = 10, align = AlignRight, fmt = fmt)

  new create(env: Env) =>
    try
      (let x, let y) = (env.args(1)?.i32()?, env.args(2)?.i32()?)
      env.out.print(disp("x", x))
      env.out.print(disp("y", y))
      env.out.print(disp("hex(x)", x, FormatHex))
      env.out.print(disp("hex(y)", y, FormatHex))
      env.out.print(disp("x * y", x * y))
    else
      let exe = try env.args(0)? else "fmt_example" end
      env.err.print("Usage: " + exe + " NUMBER1 NUMBER2")
    end
```


## Public Types

* [trait PrefixSpec](format-PrefixSpec.md)
* [primitive PrefixDefault](format-PrefixDefault.md)
* [primitive PrefixSpace](format-PrefixSpace.md)
* [primitive PrefixSign](format-PrefixSign.md)
* [type PrefixNumber](format-PrefixNumber.md)
* [trait FormatSpec](format-FormatSpec.md)
* [primitive FormatDefault](format-FormatDefault.md)
* [primitive FormatUTF32](format-FormatUTF32.md)
* [primitive FormatBinary](format-FormatBinary.md)
* [primitive FormatBinaryBare](format-FormatBinaryBare.md)
* [primitive FormatOctal](format-FormatOctal.md)
* [primitive FormatOctalBare](format-FormatOctalBare.md)
* [primitive FormatHex](format-FormatHex.md)
* [primitive FormatHexBare](format-FormatHexBare.md)
* [primitive FormatHexSmall](format-FormatHexSmall.md)
* [primitive FormatHexSmallBare](format-FormatHexSmallBare.md)
* [type FormatInt](format-FormatInt.md)
* [primitive FormatExp](format-FormatExp.md)
* [primitive FormatExpLarge](format-FormatExpLarge.md)
* [primitive FormatFix](format-FormatFix.md)
* [primitive FormatFixLarge](format-FormatFixLarge.md)
* [primitive FormatGeneral](format-FormatGeneral.md)
* [primitive FormatGeneralLarge](format-FormatGeneralLarge.md)
* [type FormatFloat](format-FormatFloat.md)
* [primitive Format](format-Format.md)
* [primitive AlignLeft](format-AlignLeft.md)
* [primitive AlignRight](format-AlignRight.md)
* [primitive AlignCenter](format-AlignCenter.md)
* [type Align](format-Align.md)


## Private Types

* [primitive _FormatInt](format-_FormatInt.md)
* [primitive _FormatFloat](format-_FormatFloat.md)
