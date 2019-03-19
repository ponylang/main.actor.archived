# HTTPParser
<span class="source-link">[[Source]](src/http/http_parser.md#L34)</span>

This is the HTTP parser that builds a message `Payload` object
representing either a Request or a Response from received chunks of data.


```pony
class ref HTTPParser
```

## Constructors

### request
<span class="source-link">[[Source]](src/http/http_parser.md#L48)</span>


Expect HTTP requests to arrive on a session.


```pony
new ref request(
  session': HTTPSession tag)
: HTTPParser ref^
```
#### Parameters

*   session': [HTTPSession](http-HTTPSession.md) tag

#### Returns

* [HTTPParser](http-HTTPParser.md) ref^

---

### response
<span class="source-link">[[Source]](src/http/http_parser.md#L60)</span>


Expect HTTP responses to arrive on a session.


```pony
new ref response(
  session': HTTPSession tag)
: HTTPParser ref^
```
#### Parameters

*   session': [HTTPSession](http-HTTPSession.md) tag

#### Returns

* [HTTPParser](http-HTTPParser.md) ref^

---

## Public Functions

### parse
<span class="source-link">[[Source]](src/http/http_parser.md#L72)</span>


Analyze new data based on the parser's current internal state.


```pony
fun ref parse(
  buffer: Reader ref)
: (ParseError val | None val)
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* ([ParseError](http-ParseError.md) val | [None](builtin-None.md) val)

---

### restart
<span class="source-link">[[Source]](src/http/http_parser.md#L114)</span>


Restart parser state for the next message. It will be of the same
kind as the last one.


```pony
fun ref restart()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### closed
<span class="source-link">[[Source]](src/http/http_parser.md#L129)</span>


The connection has closed, which may signal that all remaining data is the
payload body.


```pony
fun ref closed(
  buffer: Reader ref)
: None val
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* [None](builtin-None.md) val

---

## Private Functions

### _deliver
<span class="source-link">[[Source]](src/http/http_parser.md#L96)</span>


The parser is finished with the message headers so we can push it
to the `HTTPSession`. The body may come later.


```pony
fun ref _deliver()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _parse_request
<span class="source-link">[[Source]](src/http/http_parser.md#L149)</span>


Look for "<Method> <URL> <Proto>", the first line of an HTTP
'request' message.


```pony
fun ref _parse_request(
  buffer: Reader ref)
: (ParseError val | None val)
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* ([ParseError](http-ParseError.md) val | [None](builtin-None.md) val)

---

### _parse_response
<span class="source-link">[[Source]](src/http/http_parser.md#L174)</span>


Look for "<Proto> <Code> <Description>", the first line of an
HTTP 'response' message.


```pony
fun ref _parse_response(
  buffer: Reader ref)
: (ParseError val | None val)
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* ([ParseError](http-ParseError.md) val | [None](builtin-None.md) val)

---

### _parse_headers
<span class="source-link">[[Source]](src/http/http_parser.md#L200)</span>


Look for: "<Key>:<Value>" or the empty line that marks the end of
all the headers.


```pony
fun ref _parse_headers(
  buffer: Reader ref)
: (ParseError val | None val)
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* ([ParseError](http-ParseError.md) val | [None](builtin-None.md) val)

---

### _process_header
<span class="source-link">[[Source]](src/http/http_parser.md#L238)</span>


Save a header value. Raise an error on not finding the colon
or can't interpret the value.


```pony
fun ref _process_header(
  line: String val)
: None val ?
```
#### Parameters

*   line: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val ?

---

### _setauth
<span class="source-link">[[Source]](src/http/http_parser.md#L284)</span>


Fill in username and password from an authentication header.


```pony
fun ref _setauth(
  auth: String val)
: None val
```
#### Parameters

*   auth: [String](builtin-String.md) val

#### Returns

* [None](builtin-None.md) val

---

### _set_header_end
<span class="source-link">[[Source]](src/http/http_parser.md#L301)</span>


Line size is zero, so we have reached the end of the headers.
Certain status codes mean there is no body.


```pony
fun ref _set_header_end()
: None val
```

#### Returns

* [None](builtin-None.md) val

---

### _parse_content_length
<span class="source-link">[[Source]](src/http/http_parser.md#L327)</span>


Look for `_expected_length` bytes set by having seen a `Content-Length`
header. We may not see it all at once but we process the lesser of
what we need and what is available in the buffer.


```pony
fun ref _parse_content_length(
  buffer: Reader ref)
: None val
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* [None](builtin-None.md) val

---

### _parse_chunk_start
<span class="source-link">[[Source]](src/http/http_parser.md#L361)</span>


Look for the beginning of a chunk, which is a length in hex on a line
terminated by CRLF. An explicit length of zero marks the end of
the entire chunked message body.


```pony
fun ref _parse_chunk_start(
  buffer: Reader ref)
: (ParseError val | None val)
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* ([ParseError](http-ParseError.md) val | [None](builtin-None.md) val)

---

### _parse_chunk
<span class="source-link">[[Source]](src/http/http_parser.md#L398)</span>


Look for a chunk of the size set by `_parse_chunk_start`. We may
not see it all at once but we process the lesser of what we need
and what is available in the buffer. ChunkedTransfer mode always
delivers directly to the HTTPSession handler.


```pony
fun ref _parse_chunk(
  buffer: Reader ref)
: None val
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* [None](builtin-None.md) val

---

### _parse_chunk_end
<span class="source-link">[[Source]](src/http/http_parser.md#L420)</span>


Look for the CRLF that ends every chunk. AFter that we look for
the next chunk, or that was the special ending chunk.


```pony
fun ref _parse_chunk_end(
  buffer: Reader ref)
: None val
```
#### Parameters

*   buffer: [Reader](buffered-Reader.md) ref

#### Returns

* [None](builtin-None.md) val

---

