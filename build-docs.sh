#!/usr/bin/env bash

# Abort when a command fails.
set -e

# Gather expected arguments.
CODE_DIR=$1
DOCS_DIR=$2
if ! [ -d "${CODE_DIR}" ]; then
  echo "The CODE_DIR argument was not given or is not a directory: ${CODE_DIR}"
  echo "USAGE: $0 CODE_DIR DOCS_DIR"
  exit 1
fi
if ! [ -d "${DOCS_DIR}" ]; then
  echo "The DOCS_DIR argument was not given or is not a directory: ${DOCS_DIR}"
  echo "USAGE: $0 CODE_DIR DOCS_DIR"
  exit 1
fi

# Package name from CODE_DIR
PKG_NAME=$(basename $CODE_DIR)
# Create a temporary directory to do our work in
TMPDIR=$(mktemp -d 2>/dev/null || mktemp -d -t 'tmp.XXXXXX')
# Go to the desired documentation directory and build the docs.
cd $TMPDIR
echo $TMPDIR
# This is a little janky. Right now
ponyc --docs=${PKG_NAME} --pass=docs $CODE_DIR
# We now have a directory call "PKG_NAME-docs" in our temporary directory
cd "$PKG_NAME-docs"
mkdocs build
# We now have our built mkdocs site in `site` directory in our current directory
cp -r site/* $DOCS_DIR/
