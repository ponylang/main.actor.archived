#!/bin/bash

# Remove docs directory IF it exists. It shouldn't as we remove it
# to make sure Netlify doesn't cache it, however, in case something
# went hairwire, let's do it just in case
echo "Just in case removal of 'docs'..."
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

