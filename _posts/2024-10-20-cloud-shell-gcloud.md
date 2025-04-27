---
layout: post
title: Intro to GCP Cloud Shell and gcloud
date: 2024-10-20 10:00:00
description:  Learn how to connect to computing resources hosted on Google Cloud via Cloud Shell with the gcloud tool.
tags: gcp
categories: technology
tabs: true
---

Part of [Google Cloud Skills Boost](https://www.cloudskillsboost.google/course_templates/621/labs/403398) labs

#### Gcloud and Cloud Shell

Google Cloud Shell is an online, browser-based command-line environment provided by Google Cloud Platform. It is a Debian-based virtual machine with a persistent 5 GB home directory, allowing users to manage their GCP resources and projects directly from their web browser.

> [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Shell)

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

### 4. Project info

1. View project ID

```bash
gcloud config get-value project
```

2. View project details

```bash
gcloud compute project-info describe --project $(gcloud config get-value project)
```

### 5. Setting environment variables
Environment variable define your environment and help save time when you write scripts that contain APIs or executables.

1. Create an environment variable to store your Project ID.

```bash
export PROJECT_ID=$(gcoud config get-value project)
```

2. Create on to store your Zone

```bash
export ZONE=$(gcloud config get-value compute/zone)
```

3. Verification

```bash
echo -e "PROJECT ID: $PROJECT_ID\nZONE: $ZONE"
```

### 6. Create a virual machine with gcloud

- `gcloud compute` allows you to manage your Compute Engine resources in a format that's simpler than the Compute Engine API.
- `instances` create creates a new instance.
- `gceinstance` is the name of the VM.
- The `--machine-type` flag specifies the machine type as e2-medium.
- The `--zone` flag specifies where the VM is created.
- If you omit the `--zone` flag, the gcloud tool can infer your desired zone based on your default properties. Other required instance settings, such as machine type and image, are set to default values if not specified in the create command.

```bash
gcloud compute instances create gceinstance --machine-type e2-medium --zone $ZONE
```

### 7. Exploring commands
The gcloud tool offers simple usage guidelines that are available by adding the -h flag (for help) onto the end of any gcloud command.

1. Help command:  `gcloud -h`
2. Verbose help command: `gcloud config --help` or `gcloud help config` . Type Q and hit Enter to exit

There are global flags in gcloud that govern the behavior of commands on a per-invocation level. Flags override any values set in SDK properties.

3. View the list of configurations in your environment: `gcloud config list`
4. See all properties and their settings: `gcloud config list --all`
5. List your components: `gcloud component lists`
   This displays the `gcloud` components that are ready for use.

### 8. Filtering command-line output

Nifty command for displaying specifying information.

1. List the gceinstance virtual machine: `gcloud compute instances list --filter="name=('gceinstance')"`
2. List the firewall rules for the default network: `gcloud compute firewall-rules list --filter="network='default'"`
3. List the firewall rules for the default network where the allow rule matches an ICMP rule: `gcloud compute firewall-rules list --filter="NETWORK:'default' AND ALLOW:'icmp'"`

### 9. Connecting to your VM instance

1. Connect to the VM using ssh: `gcloud compute ssh gceinstance --zone $ZONE`
2. Type `Y` to continue
3. Press `Enter` twice to leave the passphrase empty
4. Install nginx: `sudo apt install -y nginx`
5. Disconnect from SSH: `exit`

### 10. Update firewall rules

1. List the project's firewall rules: `gcloud compute firewall-rules list`
2. Try accessing the nginx service running on the `gceinstance` virtual machine

```


Note: Communication with the virtual machine will fail as it does not have an appropriate firewall rule. The nginx web server is expecting to communicate on tcp:80. To get communication working you need to:

    Add a tag to the gcelab2 virtual machine
    Add a firewall rule for http traffic


```

3. Add a tag to the virtual machine: `gcloud compute instances add-tags gcelab2 --tags http-server,https-server`

4. Update the firewall rule to allow: `gcloud compute firewall-rules create default-allow-http --direction=INGRESS --priority=1000 --network=default --action=ALLOW --rules=tcp:80 --source-ranges=0.0.0.0/0 --target-tags=http-server`
5. List the firewall rules for the project: `gcloud compute firewall-rules list --filter=ALLOW:'80'`
6. Verify communication is possible for http to the VM:

```
curl http://$(gcloud compute instances list --filter=name:gcelab2 --format='value(EXTERNAL_IP)')
```

### 10. Logs
Viewing logs is essential to understanding the working of your project. Use gcloud to access the different logs available on Google Cloud.

1. View available logs on the system: `gcloud logging logs list`
2. View logs that relate to compute resources: `gcloud logging logs list --filter="compute"`
3. Read Logs related to the resource type of gce_instance:`gcloud logging read "resource.type=gce_instance" --limit 5`
4. Read the logs for a specific virtual machine:  `gcloud logging read "resource.type=gce_instance AND labels.instance_name='gcelab2'" --limit 5`