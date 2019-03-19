# _PayloadState
<span class="source-link">[[Source]](src/http/_http_parser.md#L19)</span>
```pony
type _PayloadState is
  (_ExpectRequest val | _ExpectResponse val | _ExpectHeaders val | _ExpectContentLength val | _ExpectChunkStart val | _ExpectChunk val | _ExpectChunkEnd val | _ExpectBody val | _ExpectReady val | _ExpectError val)
```

#### Type Alias For

* ([_ExpectRequest](http-_ExpectRequest.md) val | [_ExpectResponse](http-_ExpectResponse.md) val | [_ExpectHeaders](http-_ExpectHeaders.md) val | [_ExpectContentLength](http-_ExpectContentLength.md) val | [_ExpectChunkStart](http-_ExpectChunkStart.md) val | [_ExpectChunk](http-_ExpectChunk.md) val | [_ExpectChunkEnd](http-_ExpectChunkEnd.md) val | [_ExpectBody](http-_ExpectBody.md) val | [_ExpectReady](http-_ExpectReady.md) val | [_ExpectError](http-_ExpectError.md) val)

---

