#!/usr/bin/env bash

# Abort when a command fails.
set -e

# Move to the base project directory if not there already.
cd "$(dirname "$0")"

# Base URL of the GitHub API.
# TODO: Allow using optional GitHub API token to avoid rate limiting.
GITHUB_API='https://api.github.com'

# Optionally, you can pass a GitHub "personal access token" to use.
# If you don't pass this, you're likely to hit rate limits.
# You can create one by visiting: https://github.com/settings/tokens
if [ -n "${GITHUB_API_TOKEN}" ]; then
  GITHUB_API_AUTH="Authorization: token ${GITHUB_API_TOKEN}"
else
  GITHUB_API_TOKEN=''
  GITHUB_API_AUTH='X-No-Auth-Token-Used: x'
fi

# The maximum number of latest releases to download for a given library.
# The maximum possible number we could specify here is 100, until we implement
# something more sophisticated that simply reading one page of GitHub results.
MAX_RELEASES='5'

# Create a temporary directory that we can download source repositories into.
TMPDIR=$(mktemp -d 2>/dev/null || mktemp -d -t 'tmp.XXXXXX')

# Who we are for git
git config --global user.email "main@ponylang.io"
git config --global user.name "ponylang-main"
# Other git setup
git config --global push.default simple

# Loop over each manifest in the './manifests' subdirectory.
for manifest in $(find manifests -type f); do
  # Collect the data we need from the manifest into local vars.
  name=$(basename $manifest | cut -d. -f1)
  github=$(jq -r '.github' $manifest)
  subdir=$(jq -r '.subdir // "'$name'"' $manifest)

  # Print the name of the package we're about to scan.
  echo "- ${name} (github:${github})"

  # Loop over each tag for that repository github.
  while read -r tag tarball_url; do
    # TODO: include only tags that match some regular expression in the manifest

    # Construct the filenames and directory names we'll need.
    tar_file="${TMPDIR}/${name}.${tag}.tar.gz"
    root_dir="${TMPDIR}/${name}/${tag}"
    code_dir="${TMPDIR}/${name}/${tag}/${subdir}"
    docs_dir="$(pwd)/docs-raw-md/${name}/${tag}"

    if [ -d "${docs_dir}" ] && ! [ -z "$(ls -A ${docs_dir})" ]; then
      # Print the name of the tag that we've determined we already have.
      echo "  - ${tag} ✓"
    else
      # Print the name of the tag we're about to download and build.
      echo "  - ${tag}"

      # HACK: Don't use the GitHub API - less likely to hit rate limiting.
      tarball_url="https://github.com/${github}/archive/${tag}.tar.gz"

      # Download the source code tarball and extract it to the desired root dir.
      wget -q -O $tar_file $tarball_url
      mkdir -p $root_dir
      tar -C $root_dir --strip-components=1 -xf $tar_file
      rm $tar_file

      # Call the next script, responsible for building the docs.
      mkdir -p $docs_dir
      if bash build-docs.sh $code_dir $docs_dir
      then
        git add .
        git commit -m "Add docs for ${name} version ${tag}"
        git push "https://${PUSH_TOKEN}@github.com/ponylang/main.actor"
      else
        echo "Failed to build docs for ${name}:${tag}"
      fi
    fi
  done< <(
    curl -fsS -H "${GITHUB_API_AUTH}" "${GITHUB_API}/repos/${github}/tags?per_page=${MAX_RELEASES}" |
    jq -r '.[] | "\(.name) \(.tarball_url)"'
  )
done

# Clean up temporary directory, assuming we got here and everything went okay.
rm -r $TMPDIR
