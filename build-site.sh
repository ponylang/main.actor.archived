#!/bin/bash

# This is temporary and should be removed once the non-existent yet
# there it is `docs` directory is removed. I think its a Netlify caching
# issue. I've reached out to them for support.
echo "What's here?"
ls -al
echo "Remove 'ghost' directory..."
rm -rf docs

echo "Fetching latest documentation markdown..."
git clone --depth 1 \
  https://github.com/ponylang/main.actor-package-markdown.git \
  docs

echo "Preparing to install dependencies..."
pushd site || exit 1

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Build completed!"

popd || exit 1

# Clear out the cloned `docs` directory so it doesn't get cached
echo "Removing 'docs' now that we are done with it..."
rm -rf docs

