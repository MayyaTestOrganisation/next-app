# next-app

## Docker & GCloud set up

### docker build image

```sh
docker build --tag <app-name>:<tag> <path-to-Dockerfile>
```

- *path-to-Dockerfile* - **.**

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

- *project-id* - **swift-radar-328507**

### configure docker for gcp artifact registry using gcloud

```sh
gcloud auth configure-docker <registry-id>
```

- *registry-id* - **europe-west3-docker.pkg.dev**

### build image

```sh
docker build --tag <registry-id>/<project-id>/docker/<app-name>:<version> <path-to-Dockerfile>
```

- *registry-id* - **europe-west3-docker.pkg.dev**
- *project-id* - **swift-radar-328507**
- *app-name* - **next-app**
- *version* - **v.x.x.x**
- *path-to-Dockerfile* - **.**

### push docker image to artifact registry

```sh
docker push <registry-id>/<project-id>/docker/<app-name>:<version>
```

- *registry-id* - **europe-west3-docker.pkg.dev**
- *project-id* - **swift-radar-328507**
- *app-name* - **next-app**
- *version* - **v.x.x.x**

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

---

## Kubernetes set up

### In gcloud console

- navigate to "Kubernetes engine"

- Create -> GKE server -> Configurations

### In a terminal

#### check gcloud auth list & project => set if needed

```sh
gcloud auth list

gcloud config set project <project-id>
```

#### check kubernetes configs

```sh
kubectl config view
```

#### add configs for the cluster

```sh
gcloud container clusters get-credentials <cluster-name> --zone=<zone>
```

- *cluster-name* - **simple-cluster**
- *zone* - the selected zone when creating the GKE server, **europe-west1-b**

#### rename the k8s context:

```sh
kubectl config rename-context <old> <new>
```

- *old* - **gke_swift-radar-328507_europe-west1-b_simple-cluster**
- *new* - **simple_cluster**

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

##### check pod logs
```sh
kubectl logs <pod-id>
```
- **pod-id**: copied ID from the `kubectl get pods` command, **next-app-deployment-7c79bb7b85-fkcz7**

##### get more information for the pod
```sh
kubectl describe pod <pod-id>
```
- **pod-id**: copied ID from the `kubectl get pods` command, **next-app-deployment-7c79bb7b85-fkcz7**

##### check loadbalancer
```sh
kubectl get services
```

##### get more information for the loadbalancer
```sh
kubectl describe service <service-name>
```

- *service-name*: **next-app-service**

#### run the app
##### check the ingress IP
```sh
kubectl get service kubectl describe service <service-name> -o yaml
```
- *service-name* - **next-app-service**

##### open a browser
```sh
<ip>:3000
```
- *ip* - output from the previous command

#### delete resources

##### in gcloud: delete cluster
#### check gcloud auth list & project => set if needed

```sh
gcloud auth list

gcloud config set project <project-id>
```

#### check what to delete

```sh
kubectl config view
```

#### delete context
```sh
kubectl config delete-context <context-name>
```
- *context-name* - **simple_cluster**

#### delete cluster
```sh
kubectl config delete-cluster <cluster>
```
- *cluster* - **gke_swift-radar-328507_europe-west1-b_simple-cluster**

#### delete user
```sh
kubectl config delete-user <cluster>
```
- *cluster* - **gke_swift-radar-328507_europe-west1-b_simple-cluster**

---

## Helm

- easy way to set up config files (with k8s - many files for each env)
- easy way to merge the config files (with k8s: apply each file), 1 default file which is ovverrdien for each env (by helm chart)
- each chart has own version
- helm/templates:
    - helpers file: functions for formatting, etc.
    - deployment.yaml

### initialize helm chart
```sh
helm create <chart-name>
```
- *chart-name* - **next-app**

### next steps
- delete not-needed files
- in Chart.yaml - change versions
- delete service, deployment, values code
- copy from k8s to helm files
- replace values: `.Values.env.DB_CONNECTION_STRING`
### link the resourses in the chart

```sh
helm install --dry-run next-app-chart ./helm/next-app/ --values ./helm/next-app/values.yaml
```

### to override values in chart:
```sh
helm install --dry-run next-app-chart ./helm/next-app/ --values ./helm/next-app/values.yaml --values ./helm/next-app/values-development.yaml
```
### to push the chart, zip it:
```sh
helm chart save ./helm/next-app next-app-chart
```

### helm auth:
in gcloud - iam -> add another K8s role
helm registry login -u  