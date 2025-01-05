#!/usr/bin/env bash
set -e

if [[ $# -lt 1 ]]; then
  echo "Missing release type. Must be one of major, minor or patch"
  exit 1
else
  RELEASE_TYPE="$1"
fi

cd "$( git rev-parse --show-toplevel )"

npm version "$RELEASE_TYPE"
