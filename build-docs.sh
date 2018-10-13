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

# Go to the desired documentation directory and build the docs.
cd $DOCS_DIR
ponyc --docs=. --pass=docs $CODE_DIR
# TODO: do the entire mkdocs stuff here and clean up output structure
