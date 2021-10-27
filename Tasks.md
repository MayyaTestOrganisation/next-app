# Lecture 1

- Setup github organization
- Setup a github repo in said organization
- Setup a simple next project
- Setup a github action for pull requests
- Dockerize the project
- Use port forwarding to access the app in the container

# Lecture 2

- Register on gcloud
- Get the gcloud cli and login
- Activate billing and artifact registry on gcp
- Configure docker with gcloud auth so that we can push to artifact registry
- Push docker image to registry locally

# Lecture 3

- Setup a hello world github action
- Name, on, jobs
- Multiple jobs and needs prop
- Env vars
- Setup a github action for a pull request

# Lecture 4

- Setup a github action for a release ( docker image push - )
- Explain GCP service accounts
- Create a service account with access to artifact - registry
- Explain the need for kubernetes
- Explain the kubernetes components
- Install kubectl
- Create a small deployment for our dockerized app
- Create a small NodePort service to expose our app to the host machine

# Lecture 5

- Enable the GCP Kubernetes engine
- Create a cluster with small resource nodes
- Configure kubectl to use gcp k8s cluster
- Deploy our deployment to the gcloud cluster
- Note the NodePort > LoadBalancer change we have to make

# Lecture 6

- Explain the need for helm
- Install helm
- Create helm chart
- Delete everything and copy over our Kubernetes - deployment
- Dry run helm
- Put variables in the chart and provide them in the - values-\* file
- Dry run again and show variable replacements
- Create a github action for deployment
