# Release Process

This document outlines the release process for our Docker images. We use [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

## Creating Changes

When making changes that need to be released:

1. Create a new changeset:

   ```bash
   bun run changeset
   ```

2. Follow the prompts to:
   - Select the packages that have changed
   - Choose the type of change (major, minor, patch)
   - Provide a description of the changes

## Versioning

We follow [Semantic Versioning](https://semver.org/):

- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backwards compatible
- **Patch** (0.0.1): Bug fixes, backwards compatible

## Releasing

1. Update versions and changelogs:

   ```bash
   bun run version
   ```

2. Review the changes in the generated files

3. Publish the release:
   ```bash
   bun run release
   ```

## Changelog

Changelogs are automatically generated based on your changesets and can be found in each package's CHANGELOG.md file.
