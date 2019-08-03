#!/bin/bash

pushd site || exit 1

echo "Installing dependencies..."
npm install -g gatsby-cli
npm install

echo "Building with `gatsby build`..."
gatsby build

echo "Build completed!"

popd || exit 1