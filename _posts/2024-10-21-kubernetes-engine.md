---
layout: post
title: Google Kubernetes Engine
date: 2024-10-20 10:00:00
description:  An intro to Google Kubernetes Engine in GCP
tags: gcp k8s
categories: technology
tabs: true
---

Part of [Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/621/labs/403399) labs

### Google Kubernetes Engine(GKE)

- `Kubernetes` is an open source system for automating deployment, scaling, and management of containerized applications.

- `Google Kubernetes Engine(GKE)` is a fully managed Kubernetes service with full Kubernetes API, 4-way autoscaling, release channels, and multi-cluster support.

- We'll learn how to create a GKE cluster, deploy an application to the cluster and delete the cluster

### 1. [Create GCP account](https://www.geeksforgeeks.org/how-to-create-a-free-tier-account-on-gcp/)

### 2. Activate Cloud Shell
    
- Click **Activate Cloud Shell** at the top of the Google Cloud console: Vite utilizes ESBuild, a Go-based bundler, for production builds. ESBuild is renowned for its incredible speed and efficiency.
- List the active account name

```bash
    gcloud auth list 
```
   
Ouput:

```bash
ACTIVE: *
ACCOUNT: <account name>

To set the active account, run:
    $ gcloud config set account `ACCOUNT`
```
- List the project ID:

```bash
gcloud config list project
```

```bash
[core]
project = qwiklabs-gcp-03-e98c139c8c35
```

### 3. Configure your environment

- [Region and zones reading](https://cloud.google.com/compute/docs/regions-zones/)

1. Set the region to `us-east1`

```bash
gcloud config set compute/region us-east1
```
2. View the project region setting

```bash
gcloud config get-value compute/region
```
3. Set zone to `us-east1-b`:

```bash
gcloud config set compute/zone us-east1-b
```

4. View project zone setting.

```bash
gcloud config get-value compute/zone
```
### 4. Create a GKE cluster

A [cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture) consists of at least one **cluster master** and multiple worker machines called **nodes**. Nodes are [Computer Engine virtual machine instances](https://cloud.google.com/compute/docs/instances/) that run the Kubernetes processes necessary to make them part of the cluster.

- Create a cluster: `gcloud container clusters create --machine-type=e2-medium --zone=ZONE lab-cluster`

### 5. Get authentication credentials for the cluster
- You need authentication credentials to interact with the cluster.
- Authenticate with the cluster: `gcloud container clusters get-credentials lab-cluster`

### 6. Deploy an app to the cluster

- Example: deploy and run the hello-app in the cluster

1. Run the following `kubectl create` command to `create a new Deployment` `hello-server` from the hello-app container image

```bash
kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:1.0
```

2. Create a `Kubernetes Service`, a k8s resource that lets you expose your application to external traffic, using the following `kubectl expose` command.

```bash
kubectl expose deployment hello-server --type=loadBalancer --port 8080
```

3. Run `kubectl get` command to inspect the `hello-server`: `kubectl get service`

4. View the application from the web browser. `http://[EXTERNAL-IP]:8080`

### 7. Deleting the cluster

1. Delete the cluster: `gcloud container clusters delete lab-cluster`
2. When prompted, type `Y` to confirm.

