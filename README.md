# next-app

## docker build image

```sh
docker build --tag <app-name>:<tag> <path-to-Dockerfile>
```

- path-to-Dockerfile - **.**

## docker run container

```sh
docker run --publish <host port>:<container port> <app-name>:<tag>
```

## gcloud login

```sh
gcloud auth login
```

## gcloud set project as default\*

\*otherwise `use --project <project-id>` on every command

```sh
gcloud config set project <project-id>
```

- project-id - **swift-radar-328507**

## configure docker for gcp artifact registry using gcloud

```sh
gcloud auth configure-docker <registry-id>
```

- registry-id - **europe-west3-docker.pkg.dev**

## build image

```sh
docker build --tag <registry-id>/<project-id>/docker/<app-name>:<version> <path-to-Dockerfile>
```

- registry-id - **europe-west3-docker.pkg.dev**
- project-id - **swift-radar-328507**
- app-name - **next-app**
- version - **v.x.x.x**
- path-to-Dockerfile - **.**

## push docker image to artifact registry

```sh
docker push <registry-id>/<project-id>/docker/<app-name>:<version>
```

- registry-id - **europe-west3-docker.pkg.dev**
- project-id - **swift-radar-328507**
- app-name - **next-app**
- version - **v.x.x.x**

## create a tag

```sh
git tag <name>
```

## push the tag/tags

### - all tags

```sh
git push origin --tags
```

### - single tag

```sh
git push <name>
```
