# Build image

```bash
docker build -t ponylang/main.actor-ci:standard .
```

# Run image to test

Will get you a bash shell in the image to try cloning main.actor into where you can test a build to make sure everything will work before pushing. This really is useful when trying to craft a new container for use by our

```bash
docker run --name main-actor-ci --rm -i -t ponylang/main.actor-ci:standard bash
```

# Push to dockerhub

You'll need credentials for the ponylang dockerhub account. Talk to @jemc or @seantallen for access

```bash
docker push ponylang/main.actor-ci:standard
```

# Run CircleCI jobs locally

Use the [CircleCI CLI](https://circleci.com/docs/2.0/local-cli/) to run the CI jobs using this image from the actor.main project root. You'd execute the command below. Please note that `build-missing-docs` corresponds to a job in [our CircleCI config](../.circleci/config.yml) and can be replaced with any other job that might exist there.

```bash
circleci build --job build-missing-docs
```

Note: when building you might want to set CPUs environment
variable to speed up the build:

```bash
circleci build -e CPUs=10 --job build-missing-docs
```
