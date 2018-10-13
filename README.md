# actor.main

## Contributing

### Adding a new package

You can add your own Pony packages to this repository - it's easy!

Create a new JSON-formatted file in the `./manifests` subdirectory and file a pull request.

The name of the file is important; it should be `[THE PACKAGE NAME].json`. Match the format of the existing files in that directory.

The following properties are supported:
- `github` (required) - the GitHub repository name, in `USER/REPO_NAME` format.
- `subdir` (default: the package name) - the subdirectory of the repository where source files can be found.

### Building Documentation Locally

Documentation that is missing from the `./docs` subdirectory will be automatically built from the manifests when you run `./build-missing-docs.sh`. As such, you can rebuild documentation for testing purposes by removing a documentation directory, then running again.

This script uses the GitHub API to look for tags to build, which has fairly harsh rate limiting for anonymous users. To mitigate the rate limiting, you'll likely want to run the script in authenticated mode by first setting the `GITHUB_API_TOKEN` environment variable with one of your [personal access tokens](https://github.com/settings/tokens).
