#!/usr/bin/env bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
NEW_MODULE_PATH="file:../../dist"

function build_dep() {
  pushd ../../
  npm ci
  npm run build
  popd || exit 1
}

function set_dep_path() {
  MODIFIED_PKG_JSON=$(jq --arg moduleVer "${NEW_MODULE_PATH}" '.devDependencies["@imposter-js/imposter"] = ($moduleVer)' ./package.json)
  echo "${MODIFIED_PKG_JSON}" | jq > ./package.json
}

cd "${SCRIPT_DIR}"

build_dep
set_dep_path
