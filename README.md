# next-app

## Docker & GCloud set up

### docker build image

```sh
docker build --tag <app-name>:<tag> <path-to-Dockerfile>
```

- path-to-Dockerfile - **.**

### docker run container

```sh
docker run --publish <host port>:<container port> <app-name>:<tag>
```

### gcloud login

```sh
gcloud auth login
```

### gcloud set project as default\*

\*otherwise `use --project <project-id>` on every command

```sh
gcloud config set project <project-id>
```

- project-id - **swift-radar-328507**

### configure docker for gcp artifact registry using gcloud

```sh
gcloud auth configure-docker <registry-id>
```

- registry-id - **europe-west3-docker.pkg.dev**

### build image

```sh
docker build --tag <registry-id>/<project-id>/docker/<app-name>:<version> <path-to-Dockerfile>
```

- registry-id - **europe-west3-docker.pkg.dev**
- project-id - **swift-radar-328507**
- app-name - **next-app**
- version - **v.x.x.x**
- path-to-Dockerfile - **.**

### push docker image to artifact registry

```sh
docker push <registry-id>/<project-id>/docker/<app-name>:<version>
```

- registry-id - **europe-west3-docker.pkg.dev**
- project-id - **swift-radar-328507**
- app-name - **next-app**
- version - **v.x.x.x**

### create a tag

```sh
git tag <name>
```

### push the tag/tags

#### - all tags

```sh
git push origin --tags
```

#### - single tag

```sh
git push <name>
```

## Kubernetes set up

### In gcloud console

#### navigate to "Kubernetes engine"

#### create -> GKE server -> configurations

### in a terminal

#### check gcloud auth list & project => set if needed

```sh
...
```

#### check kubernetes configs

```sh
kubectl config view
```

#### add configs for the cluster:

```sh
gcloud container clusters get-credentials <cluster-name> --zone=<zone>
```

- cluster-name: simple-cluster
- zone: the selected zone when creating the GKE server - europe-west1-b

#### rename the k8s context:

```sh
kubectl config rename-context <old> <new>
```

- old - gke_swift-radar-328507_europe-west1-b_simple-cluster
- new - simple_cluster

#### create k8s directory in the project, add yaml files

To check the apiVersions, needed for the yaml files:

```sh
kubectl api-resources
```

#### send the files to the etcd (define ideal app):

```sh
kubectl apply -f ./k8s/deployment.yaml -f ./k8s/loadbalancer.yaml
```

#### check if everything is ready

```sh
kubectl get deployments
```

#### check if everything is running

```sh
kubectl get pods
```

11. kubectl logs <pod-id>
12. info for pod: kubectl describe pod next-app-deployment-7c79bb7b85-fkcz7
13. check loadbalancer: kubectl get services
14. info for loadbalancer: kubectl describe service next-app-service
15. info for yaml -> check the ingress ip: kubectl get service kubectl describe service next-app-service -o yaml
16. in browser: <ip>:3000

- Delete resources

1. in gcloud: delete cluster
2. set the gcloud auth and project if needed
3. what to delete: kubectl config view
4. delete context: kubectl config delete-context simple_cluster
5. delete cluster: kubectl config delete-cluster gke_swift-radar-328507_europe-west1-b_simple-cluster
6. delete user: kubectl config delete-user gke_swift-radar-328507_europe-west1-b_simple-cluster

---
