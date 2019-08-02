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
# Install packages dependencies
make install-main-actor-deps
# Build the docs
make main-actor-docs
# We now have a directory call "$(PKG_NAME)-docs" in our directory.
# "$(PKG_NAME)-docs" contains the raw generated markdown for our documentation
pushd "$PKG_NAME-docs" || exit 1
# We now have our built mkdocs site in `site` directory in our current directory
cp -r site/* $DOCS_DIR/
cp -r mkdocs.yml $DOCS_DIR
#
popd || exit 1