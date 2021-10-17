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
