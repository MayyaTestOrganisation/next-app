# next-app

## docker build image

```
docker build --tag <app-name>:<tag> .
```

## docker run container

```
docker run --publish <host port>:<container port> <app-name>:<tag>
```

## gcloud login

```
gcloud auth login
```

## gcloud config project

```
gcloud config set project <projectId>
```

- projectId - swift-radar-328507

## auth in docker

```
gcloud auth configure-docker europe-west3-docker.pkg.dev
```

##

```
docker build --tag europe-west3-docker.pkg.dev/swift-radar-328507/docker/next-app/next-app:v1.0 .
```

##

```
docker push europe-west3-docker.pkg.dev/swift-radar-328507/docker/next-app/next-app:v1.0
```

Prepare a release:

- we have a stable version => create a tag

git tag <name> // create tag

git push origin --tags // push tags git push v1.0.0 // push a tag

- create a release action

- make the release: in GH => create new release, choose the tag => the action runs
