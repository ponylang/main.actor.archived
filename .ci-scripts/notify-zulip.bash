#!/bin/bash

set -e

STREAM=$1
TOPIC=$2
MESSAGE=$3

# Verify all our environment variables are set
if [ -z "${ZULIP_WEBHOOK}" ]; then
  echo "NO ZULIP_WEBHOOK SET"
  echo "Please input your ZULIP_WEBHOOK value in the settings for this project."
  exit 1
fi

if [ -z "${ZULIP_USER}" ]; then
  echo "NO ZULIP_USER SET"
  echo "Please input your ZULIP_USER value in the settings for this project."
  exit 1
fi

curl -X POST "${ZULIP_WEBHOOK}" \
  -u "${ZULIP_USER}" \
  -d "type=stream" \
  -d "to=${STREAM}" \
  -d "topic=${TOPIC}" \
  -d "content=${MESSAGE}"
