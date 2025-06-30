# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [2.3.0] - 2025-06-30
### Added
- feat: prefer short CLI version command.

## [2.2.0] - 2025-05-29
### Added
- feat: adds option to print logs to console on mock crash.

## [2.1.5] - 2025-03-11
### Changed
- chore(deps): bump axios in /examples/example-typescript-esm
- chore(deps): bump softprops/action-gh-release from 1 to 2
- chore(deps-dev): bump axios from 1.8.1 to 1.8.2
- chore(deps-dev): bump rollup from 4.34.9 to 4.35.0
- docs: tidies up ESM example.
- docs: updates GitHub org to imposter-project.

## [2.1.4] - 2025-03-06
### Changed
- build: fix copy to dist.
- chore(deps-dev): bump rimraf from 3.0.2 to 6.0.1

## [2.1.3] - 2025-03-06
### Changed
- ci: include readme when publishing.
- docs: updates feature list.

## [2.1.2] - 2025-03-06
### Changed
- docs: adds ESM example project.
- docs: moves example project to subdir.
- refactor: export bespoke logger.
- test: moves tests to subdir.
- test: simplifies dependency prep script.

## [2.1.1] - 2025-03-05
### Changed
- ci: publish from within dist dir.
- ci: upload/download artifact between jobs.
- docs: updates release steps.
- refactor: moves verbose logging logic to separate module.

## [2.1.0] - 2025-03-05
### Added
- feat: dual build cjs and esm

### Changed
- build: use relative paths for main/module/types package properties.
- chore(deps): bump release-tools/since
- refactor: allow ESM projects to specify project root.
- refactor: moves project root detection to separate function.

## [2.0.0] - 2025-03-02
### Changed
- build(deps-dev): bump braces from 3.0.2 to 3.0.3 in /sample
- build: set Node.js 20 as minimum version.
- build: upgrades lock file to npm v10 compatible.
- build: upgrades sample lock file to npm v10 compatible.
- build: use normalised form for repository URL.
- build: use since for releases.
- chore(deps): bump typescript to 5.8.2
- chore(deps): bumps Imposter to 4.5.8.
- chore(deps): bumps actions/checkout to v4.
- chore(deps): bumps actions/setup-node to v4.
- chore(deps-dev): bump ts-jest from 29.1.2 to 29.2.6
- chore(deps-dev): bumps axios to 1.8.1.
- ci: adds dependabot config.
- ci: dependabot should target main.
- ci: generates provenance statement on publish.
- ci: moves release to separate job.
- ci: specify package ecosystem.
- ci: trigger CI on pull requests.
- ci: use official Imposter action.
- docs: adds changelog.
- test: adds skew to sleep test.
- test: expect CLI version 1.x.

### Fixed
- fix: sample/package.json & sample/package-lock.json to reduce vulnerabilities
- fix: upgrade typescript 5.7.2.

### Other
- build!: BREAKING CHANGE drop support for Node versions before 20.

## [1.0.3] - 2025-01-05
### Changed
- build: moves typescript to devDependencies.
- build: simplifies release script.

## [1.0.2] - 2025-01-05
### Changed
- docs: describes release process.
- docs: updates links to JavaScript bindings to https://github.com/imposter-project.

## [1.0.1] - 2024-01-26
### Changed
- build: adds release script.

### Fixed
- fix: don't attempt to write to a closed log stream.
- fix: improved log stream error handling.

## [1.0.0] - 2024-01-26
### Changed
- build: regenerates lockfile for node 18 npm.
- chore: bumps imposter to 3.33.4.
- ci: bumps node to 18.
- docs: updates sample project to expect node 18+.
- refactor: improves type annotation usage.
- refactor: migrates to typescript.
- refactor: simplify healthcheck.
- test: bumps jest version.

## [0.6.2] - 2022-01-05
### Added
- feat: adds logging of arguments and environment before engine spawn.
- feat: allows builder to log generated config.

### Changed
- chore: pins engine version to 2.4.13.
- ci: pulls docker images before test execution.
- docs: adds selinux user permissions instructions.
- test: bumps engine version.

### Fixed
- fix: aligns container uid to runner.
- fix: environment variable name validation.

## [0.6.1] - 2021-12-21
### Changed
- docs: improves README.
- refactor: supports JAVA_TOOL_OPTIONS over JAVA_OPTS environment variable.

## [0.6.0] - 2021-12-21
### Added
- feat: allows environment variables to be passed to the mock engine.

### Changed
- build: updates sample prep script.

## [0.5.5] - 2021-11-09
### Changed
- build: fixes entrypoint path.
- test: improves coverage of configured mock.

### Fixed
- fix: corrects SemVer comparison.

## [0.5.4] - 2021-09-29
### Other
- Improves sample build instructions.

## [0.5.3] - 2021-09-29
### Other
- Adds status badge.
- Switches sample relative dependency to use 'dist'.

## [0.5.2] - 2021-09-26
### Other
- Renames sample APIs.

## [0.5.1] - 2021-09-26
### Other
- Simplifies sample bootstrap.

## [0.5.0] - 2021-09-25
### Other
- Adds convenience start function on builder.
- Automatically selects a free port if none set.

## [0.4.1] - 2021-09-25
### Other
- Adds convenience functions for templated responses.

## [0.4.0] - 2021-09-25
### Other
- Adds resource builder.
- Improves documentation.
- Improves sample documentation.

## [0.3.3] - 2021-09-25
### Other
- Consider process ended on close event, not exit.
- Explicitly checks initialisation state.
- Improves sample code comments and reorganises test data.
- Rolls back lockfiles to NPM 6.
- Switches to manual Jest mock for manager.

## [0.3.2] - 2021-09-24
### Other
- Improves configured mock coverage.

## [0.3.1] - 2021-09-24
### Other
- Improves error trapping on launch.
- Improves mock builder coverage.

## [0.3.0] - 2021-09-23
### Other
- Removes dependency on axios.

## [0.2.7] - 2021-09-23
### Other
- Factors out utility functions into separate files.

## [0.2.6] - 2021-09-22
### Other
- Flattens sample project structure and improves documentation.
- Improves CI step naming.
- Runs build before release.

## [0.2.5] - 2021-09-22
### Other
- Adds Publishing configuration.

## [0.2.4] - 2021-09-22
### Other
- Improves engine type documentation.

## [0.2.3] - 2021-09-22
### Other
- Allows project specific engine configuration.

## [0.2.2] - 2021-09-20
### Other
- Adds support for building from raw configuration.
- Fixes sample test.
- Logs engine output to file.
- Removes automatic publish workflow.
- Sets Babel target to Node 12.

## [0.2.1] - 2021-09-19
### Other
- Improves documentation.

## [0.2.0] - 2021-09-19
### Other
- Adds release script.
- Adds support for mocking bare OpenAPI spec files.

## [0.1.7] - 2021-09-17
### Other
- Adds package publish trigger.

## [0.1.6] - 2021-09-16
### Other
- Adds npm installation instructions.

## [0.1.5] - 2021-09-16
### Other
- Adds GitHub actions workflows.
- Improves documentation.
- Initial commit.
- Moves sample to separate module.
- Restricts published files.
