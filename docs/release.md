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

Use the release script to publish a new version of the package to npm.

```bash
cd scripts
./prep-release.sh <release type>
```

This script will:

1. Update the version number in `package.json` and `package-lock.json` using `npm version <version number>` in line with [Semantic Versioning](https://semver.org/).
2. Create a new git tag.

You must then push the changes to the repository with `git push origin main --tags`. The GitHub Actions workflow will automatically publish the package to npm if the tests pass.

### Manual release

If you need to release manually, follow these steps:

1. Update the version number in `package.json` and `package-lock.json` using `npm version <version number>` in line with [Semantic Versioning](https://semver.org/). This will also create a new git tag.
2. Push the changes to the repository with `git push origin main --tags`. 
3. The GitHub Actions workflow will automatically publish the package to npm if the tests pass.
