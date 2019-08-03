const regLineNumber = /\#L\d*/
module.exports = originalPath => {
  let processedPath = originalPath
  // process filepaths into usable URLs
  if (processedPath.endsWith("--index.md")) {
    // builtin--index.md -> builtin
    processedPath = processedPath.slice(0, -"--index.md".length)
  } else if (processedPath.endsWith("index.md")) {
    processedPath = processedPath.slice(0, -"index.md".length)
  } else if (processedPath.match(regLineNumber)) {
    // src/msgpack/message_pack_encoder.md#L21 -> src/msgpack/message_pack_encoder#L21
    const [lineEnding, ...etc] = processedPath.match(regLineNumber);
    processedPath = processedPath.slice(0,-`.md${lineEnding}`.length) + lineEnding
  } else if(processedPath.endsWith('.md')) {
    // whatever.md -> whatever
    processedPath = processedPath.slice(0, -".md".length)
  }
  
  // buffered-Writer.md -> buffered/writer
  return processedPath
    .replace(/(.*)-(.*)$/, "$1/$2")
    .toLowerCase()
}