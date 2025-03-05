# Internal release documentation

This document is for project maintainers and contributors. It describes the steps to release a new version of the project.

## Prerequisites

- [Node.js](https://nodejs.org) installed
- [npm](https://www.npmjs.com/get-npm) installed

## Steps

1. Switch to the `main` branch.
2. Run the tests to ensure everything is working as expected.
3. Follow the steps below to release the package.

### Automated release

Use [since](https://github.com/release-tools/since) to prepare a new version of the package to npm.

```bash
since project release
```

This script will:

1. Update the version number in `package.json` and `package-lock.json` using `npm version <version number>` in line with [Semantic Versioning](https://semver.org/).
2. Update the `CHANGELOG.md` with the new version number and changes since the last release.
3. Create a new git tag.

You must then push the changes to the repository with `git push origin main --tags`. The GitHub Actions workflow will automatically publish the package to npm if the tests pass.

### Manual release

If you need to release manually, follow these steps:

1. Update the version number in `package.json` and `package-lock.json` using `npm version --no-git-tag-version <version number>` in line with [Semantic Versioning](https://semver.org/).
2. Update the `CHANGELOG.md` with the new version number and changes since the last release.
3. Create a new git tag in the format `v<version number>`. Note the prefix `v`.
4. Push the changes to the repository with `git push origin main --tags`. 
5. The GitHub Actions workflow will automatically publish the package to npm if the tests pass.
