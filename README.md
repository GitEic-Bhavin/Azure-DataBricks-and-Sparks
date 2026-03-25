# 🚀 Azure Databricks – Complete Guide (Beginner to Practical)

This document combines **conceptual understanding + architecture + real-world usage** into one structured guide. It is designed for quick revision, interviews, and practical implementation.

---

# 🌌 1. What is Azure Databricks?

Azure Databricks is a **high-performance Apache Spark-based analytics platform** optimized for Microsoft Azure.

It provides a **unified environment** for:

* Data Engineering
* Data Science
* Machine Learning
* Analytics

---

# 🏗️ 2. Core Architecture (Foundation)

At its core, Databricks is built on **Apache Spark**.

### 🔹 Key Concepts

* **Distributed Computing**
  A cluster of machines processes data in parallel instead of a single system.

* **In-Memory Processing**
  Data is processed in RAM → up to **100x faster** than disk-based systems like Hadoop.

![alt text](db.png)

# ⚡ 3. Performance Layer (Execution Engines)

These components make your code **extremely fast without changing logic**.

### 🔹 Optimized Spark Engine

* Azure-tuned version of Spark
* Up to **5x faster** than open-source Spark

### 🔹 Photon

* C++ based execution engine
* Uses **vectorized processing**
* Up to **8x faster queries**
* Works best with SQL & DataFrame workloads

👉 Think of Photon as a **turbocharger** for Spark.

---

# 🧠 4. Intelligence & Control Layer

This layer is where you **interact, collaborate, and manage security**.

### 🔹 Workspace / Notebook

* Main working interface
* Supports Python, SQL, Scala, R
* Mix code + text + charts
* Collaborative (like Google Docs)

### 🔹 DatabricksIQ

* Built-in AI assistant
* Helps with:

  * Code generation
  * Debugging
  * Explaining datasets

👉 Think of it as a **Senior Developer beside you**

### 🔹 Administration Controls

* Manage:

  * Users & roles
  * Permissions
  * Cluster access
* Ensures **security & governance**

---

# 🔄 5. Data Pipeline Layer

This layer converts **raw data → clean → usable → AI-ready**.

### 🔹 Delta Live Tables (DLT)

* Simplifies ETL pipelines
* Define output → system handles pipeline
* Automatic:

  * Data quality checks
  * Error handling

### 🔹 Unity Catalog / Hive Metastore

* Central metadata store
* Tracks:

  * Tables
  * Schema
  * Permissions

👉 Think of it as a **Library Index for data**

### 🔹 Clusters

* Group of virtual machines
* Provides compute power

Types:

* Interactive (manual work)
* Job clusters (automated pipelines)

👉 Turn ON when needed, OFF to save cost

# 🧩 6. Key Components Overview

| Component     | Category    | Purpose                    |
| ------------- | ----------- | -------------------------- |
| Apache Spark  | Engine      | Core processing engine     |
| Photon        | Performance | Speeds up queries          |
| Delta Lake    | Storage     | Reliable data layer (ACID) |
| Unity Catalog | Governance  | Data access & tracking     |
| MLflow        | ML          | Experiment tracking        |
| DatabricksIQ  | AI          | Assistant for developers   |
| Clusters      | Compute     | Run workloads              |
| Notebooks     | Interface   | Write and execute code     |

# 🛠️ 7. Why Use Azure Databricks?

### ✅ Key Benefits

1. **High Performance**

   * Up to 5x faster than standard Spark

2. **Collaboration**

   * Shared notebooks
   * Team-friendly environment

3. **Scalability**

   * Auto-scale clusters

4. **Azure Integration**

   * Works with:

     * Azure Data Lake (ADLS)
     * Entra ID (Security)

5. **Cost Optimization**

   * Pay only for compute used

# 🤖 8. AI & Machine Learning Capabilities

Databricks is heavily optimized for ML workflows.

### 🔹 Databricks Runtime for ML

* Pre-installed libraries:

  * PyTorch
  * TensorFlow
  * Scikit-learn

### 🔹 MLflow

* Track experiments
* Compare models
* Version control for ML

### 🔹 Feature Store

* Store reusable ML features

### 🔹 Model Serving

* Deploy models as REST APIs

# 🔁 9. End-to-End Flow (Big Picture)

Example: Stock Price Prediction Project

1. Start a **Cluster**
2. Open a **Notebook**
3. Use **DatabricksIQ** for help
4. Store data in **Delta Lake**
5. Process data using **Spark + Photon**
6. Train model
7. Track results using **MLflow**



---



# 🚀 Azure Databricks Architecture (Control Plane vs Compute Plane)

# 🧠 1. High-Level Architecture

Azure Databricks is divided into **two main parts**:

```
1. Control Plane (Brain 🧠)
2. Compute Plane (Muscle 💪)
```

# 🧩 2. Control Plane (Managed by Databricks)

### 📍 Location

* Runs in **Databricks subscription (not your Azure account)**

### 🎯 Purpose

* Manages platform services, UI, and orchestration

## 🔧 Components

### 🔹 Web UI

* Browser-based interface
* Used to:

  * Create notebooks
  * Run jobs
  * Manage clusters

### 🔹 Cluster Manager

* Responsible for:

  * Creating clusters
  * Scaling clusters
  * Terminating clusters

👉 Acts as a **resource manager**

### 🔹 Unity Catalog

* Provides:

  * Data governance
  * Access control
  * Permissions management

👉 Think of it as **RBAC for data**

### 🔹 Workspace Metadata Storage

Stores:

* Notebooks
* Job history
* Logs

⚠️ Note: This does NOT store large datasets (only metadata)

# 💪 3. Compute Plane (Your Azure Subscription)

### 📍 Location

* Runs in **your Azure subscription**

### 🎯 Purpose

* Executes actual data processing tasks

## 🔥 Types of Compute

### 🟡 1. Classic Compute

#### ✔️ Description

* Clusters (VMs) are created inside your Azure account

#### ✔️ Features

* Full control over:

  * VM size
  * Cluster configuration
  * Scaling

#### ✔️ Use Cases

* Data engineering workloads
* ADF integration
* Course labs and projects

#### 📌 Flow

```
User → UI → Cluster Manager → Creates VMs in YOUR Azure
```

### 🟢 2. Serverless Compute

#### ✔️ Description

* Runs in Databricks-managed infrastructure

#### ✔️ Features

* Faster startup (pre-provisioned VMs)
* No cluster management

#### ❌ Limitations

* Less control
* Not ideal for full data engineering workflows

# 💾 4. Workspace Storage (ADLS Gen2)

### 📍 Location

* Created in **your Azure subscription**

### 🔹 Used For

* Notebook revisions
* Job run details
* Spark logs
* Temporary data

⚠️ Important:

* Tied to workspace
* Deleted if workspace is deleted

# 🎯 5. End-to-End Flow

When you run a notebook:

1. User opens notebook in Web UI
2. Request goes to Control Plane
3. Cluster Manager checks cluster
4. If not running → creates cluster in your Azure
5. Code executes on compute (VMs)
6. Data is read from ADLS
7. Results are returned to UI

---

# 📊 6. Architecture Diagram (Logical View)

![alt text](dbarch.png)

# ⚠️ 7. Common Confusions

| Component          | Location                   |
| ------------------ | -------------------------- |
| Web UI             | Databricks (Control Plane) |
| Cluster (VMs)      | Your Azure (Compute Plane) |
| Data Storage       | Your Azure (ADLS)          |
| Serverless Compute | Databricks                 |


---

# 🚀 Azure Databricks Clusters – Learning Guide

This README is a **pre-learning guide** to help you clearly understand what you will learn in the upcoming section about **Databricks Clusters**.

---

# 🎯 What You Will Learn

In this section, you will build a **strong foundation around Databricks Clusters**, which are the core compute resources used to run your data workloads.

By the end, you will be able to:

* Understand what a cluster is
* Choose the right cluster type
* Configure clusters correctly
* Control and estimate costs
* Use advanced features like cluster pools and policies

# 🧠 1. What is a Databricks Cluster?

A **Databricks Cluster** is a group of virtual machines (VMs) that work together to:

* Run Spark jobs
* Process data
* Execute notebooks

👉 Think of it as the **engine that runs your code**.

# 🔥 2. Types of Clusters

You will learn about the two main types:

### 🟡 All-Purpose Cluster

* Used for:

  * Development
  * Interactive work (notebooks)
* Shared by multiple users

### 🟢 Job Cluster

* Used for:

  * Automated jobs
  * Pipelines
* Created and deleted automatically

👉 Key difference: **Interactive vs Automated usage**

# ⚙️ 3. Cluster Configuration (Very Important)

You will explore how to configure clusters based on workload.

### 🔹 Key Configurations:

* Node type (VM size)
* Number of workers
* Auto-scaling
* Runtime version (Spark version)
* Access mode
* Auto-termination

👉 You will also learn:

* How to choose **right config for performance + cost**

# 🛠️ 4. Hands-On: Creating a Cluster

You will:

* Create a cluster for your project
* Configure it based on requirements
* Run workloads on it

👉 This is where theory becomes practical

# 💸 5. Cluster Pricing (Critical Topic)

Databricks pricing includes:

* **DBU (Databricks Units)** → Platform cost
* **VM Cost (Azure)** → Compute cost

👉 Total Cost = DBU + VM

You will learn:

* How pricing works
* Why cost can increase quickly

# 💡 6. Cost Optimization (Must Know)

You will learn how to:

* Use auto-termination
* Select smaller clusters
* Avoid idle clusters
* Estimate cost for your project

👉 This is **very important for real-world + org accounts**

# ⚡ 7. Cluster Pools (Advanced – Optional)

### 🔹 What are Cluster Pools?

* Pre-created VMs
* Reduce cluster startup time

### 🔹 Benefits:

* Faster cluster creation
* Better resource management

👉 Used mostly by admins, but important to understand

# 🛡️ 8. Cluster Policies (Advanced – Optional)

### 🔹 What are Cluster Policies?

* Rules that control how clusters are created

### 🔹 Benefits:

* Enforce best practices
* Limit cost usage
* Improve user experience

👉 Example:

* Restrict large VM usage
* Force auto-termination

---

In databricks, compute refers to a cluster of vm.

In a cluster, there is a `Driver Node` that orchestrates the tasks and *One or More Worker Nodes** that perform the actual data processing like `ETL` Together.

![alt text](cluster.png)

- These nodes allow databricks clusters tor run various workloads such as `ETL`, `Data science tasks` and `Machine Learning Apps`.


![alt text](dbarch.png)

- Databricks offers 2 types of computes, 
 
1. Serverless compute plane
2. Classic compute plane

`Serverless Compute` is available on demand and managed by Databricks, whereas the `Classic Compute` is configured and provisions by the user.

`Serverless Compute` is a fully managed service which databricks provisions and manages and compute resources are provisions in databricks cloud account.

Databricks keeps a pool of VM available for the cluster, so the cluster starts immediatly.

Datarbricks configures the cluster with the latest runtime available and scales the cluster up and down using the intelligence from AI models.

Once the task completes, Databricks automatically release the resources back to the pool and customers will only charged for the durations of the cluster was up and running.

`Classic Compute` is totally controlled by the user.
We nned to configure and manage the cluster, and we have total control over 

  - which version of the software to use, 
  - what kind of compute nodes we want to create the cluster with, 
  - How many nodes we want to allocate and 
  - the size of them VM etc

**Classic Compute Types**

**1. All Purpose**

- Created manually via GUI, CLI or API

- This cluster are persistance and they can be terminated and restarted at any point in time.

- Suitable for `Interactive` and `ad hoc analytical workloads`.

- Can be **Shared with many users** and They are good for collaborative analysis.

- More Expensive compaire to the Job Cluster.

**2. Job Cluster**

- Will created while automated job starts to execute and the job has been configured to use a job cluster

- Job clusters are terminated at the end of the job.
- They can't be restarted, so they are no longer usable once the job has completed.

- Suitable for `Automated workloads` such as Running an ETL pipeline or ML Workload.

- Are Isolated just for the job being executed.

- Cheaper to execute.


## Cluster COnfigurations

**1. Multi-Node Cluster**

- One Driver node (the boss) and one or more Worker nodes (the laborers).

- **Use case**: Production-level work or huge datasets.

- **Power**: The Driver splits up the work and sends it to Workers to run in parallel.


**2. Single Node Cluster**

- There is only single **Driver Node** and **No any of Worker Node there**.
- There is a lack of worker node.
- Still it supports spark workloads and the same node acts as both Driver/Master and Worker nodes.

- It Can't be act Horizontally scaled, making it unsuitable for large scale ETL workloads.

- Single node clusters are desinged for `lightweight machine learning ` and `data analysis tasks` that don't required distributed computing.

- Single node clusters are Incompatible with process isolations and are not intended for shared usage among multiple users or workloads.

- To avoid these kind of conflicts, databricks always recommends using `multi-node clusters` when `shared compute is required`.

**Access Mode (Security)**

- This determines who is allowed to "sit in the driver's seat" and how much they can see.

| Mode | Users | Key Feature |
| ---- | ----- | ----------- |
| Single User | 1 Person | "Supports Python, SQL, Scala, and R." |
| Shared | Multiple | Process Isolation: Users can't peek at each other's data or code. Highly secure. |
| No Isolation | Multiple | "No ""walls"" between users. If one user crashes the system, everyone feels it." |

**Runtime (The Brain's Software)**

- The "Runtime" is the set of libraries pre-installed on the cluster.

- **Databricks Runtime**: Standard libraries for data engineering and SQL.

- **Databricks Runtime ML**: The "Scientist" version. It comes pre-loaded with PyTorch, TensorFlow, and XGBoost.

- **Photon Acceleration**: A toggle switch to make queries run up to 8x faster by using a specialized C++ engine.


**Configure Cost Controls (Saving Money)**

- Azure charges you for every minute the cluster is "on," so these settings are critical:

- **Auto-Termination**: Set a timer (e.g., 20 minutes). If no one is using the cluster, it automatically turns off.

- **Auto-Scaling**: You give Databricks a range (e.g., 2 to 10 workers). It will add workers when the job is hard and remove them when it's easy.

- **Spot Instances**: Use Azure’s "spare" computers for worker nodes. They are much cheaper but can be taken back by Azure if someone else pays full price.




**Pick the Hardware (VM Types)**
**Auto Scaling**

- Different tasks require different types of virtual machines (VMs).

  - **Memory Optimized**: For caching huge datasets or complex joins.

  - **Compute Optimized**: For high-speed streaming data.

  - **Storage Optimized**: For tasks that need to read/write to the disk constantly.

  - **GPU Accelerated**: Specifically for deep learning and heavy AI training.

  - **General Purpose**: A balanced middle-ground for most daily tasks.


**Apply Policies (The Guardrails)**

- If you are an administrator, you don't want your team accidentally spending $1,000 in a day. Cluster Policies allow you to:

  - Limit the size of the clusters users can create.

  - Force Auto-Termination to stay at a low number.

  - Lock the Runtime version so everyone uses the same tools.


Create Databick Cluster
---

Go to Databircks > Computes > Create computes

Turn Off - Simple Form, You will configured manually whole things

Choose Policy Unrestricted

Choose Single Node

Choose Access Mode as `Dedicated` for single user for testing and select `Your name` as single user.

Select Performance Databricks runtime versions - LTS

Unselect `Use photon accelerations`.

Select Node typs - General Purpose which is smallest size for testing

Tick box `Terminates after 120 minutes of inactivity` to help to auto delete cluster if no activity detect

![alt text](crclst1.png)



Cluster Pool
---

# 🚀 Azure Databricks Cluster Pools – Complete Guide

This README is your **master reference** for understanding Azure Databricks **Cluster Pools** and how to balance **performance ⚡ and cost 💸**.

# ☕ The Coffee Shop Analogy

To understand Cluster Pools, imagine a coffee shop:

### 🟡 Without Pool (Standard Cluster)

* Machine is OFF
* Beans not ready
* Setup takes time

⏱️ Wait Time: **5–10 minutes**

### 🟢 With Cluster Pool

* Machine already ON
* Beans already prepared

⏱️ Wait Time: **~1 minute**

👉 **Conclusion:** Pools reduce cluster startup time significantly

# ⚙️ How Cluster Pools Work

A Cluster Pool is a **collection of pre-started Virtual Machines (VMs)** ready to be used.

### 🔄 Flow

1. Pool keeps some VMs in idle (ready state)
2. When cluster starts → it takes VM from pool
3. If more power needed → more VMs pulled instantly
4. Pool replaces used VMs to maintain minimum level

# 📋 Key Configuration Settings

| Setting            | Meaning                    | Importance                        |
| ------------------ | -------------------------- | --------------------------------- |
| Min Idle Instances | Minimum always-running VMs | Faster startup but costs money 💸 |
| Max Capacity       | Maximum VMs allowed        | Controls scaling                  |
| Preloaded Runtime  | Pre-installed software     | Faster startup                    |
| Auto-Termination   | Idle VM shutdown timer     | Saves cost                        |

# 💰 Cost Model (VERY IMPORTANT)

Cluster Pools have **two types of cost**:

| Cost Type     | Idle VMs (Pool) | Active Cluster VMs |
| ------------- | --------------- | ------------------ |
| Azure VM Cost | 💰 YES          | 💰 YES             |
| DBU Cost      | ✅ FREE          | 💰 YES             |

## ⚠️ Important Warning

👉 If **Min Idle = 1**

* That VM runs 24/7
* You are charged continuously

# ⚖️ Trade-Off: Speed vs Cost

| Priority     | Recommendation    |
| ------------ | ----------------- |
| Fast startup | Increase Min Idle |
| Low cost     | Set Min Idle = 0  |

👉 You must balance both

# 🎓 Recommended Setup (For Students / Budget Users)

Use this configuration to get **best balance**:

```
Min Idle Instances        → 0
Max Capacity              → 2 or 3
Auto-Termination (Idle)   → 30–60 mins
Preloaded Runtime         → Enabled
```

## ✅ Benefits of This Setup

* 💸 Zero cost when not in use
* ⚡ Faster restart within short time
* 🔄 Automatic scaling within limits

# 🧠 Real Usage Scenario

1. Start cluster → VM taken from pool
2. Finish work → cluster stopped
3. VM stays warm for 30–60 mins
4. Restart quickly if needed
5. Auto shuts down if unused

# ⚠️ Common Mistakes

❌ Setting Min Idle > 0 unnecessarily
❌ High Max Capacity → unexpected cost
❌ Forgetting auto-termination

# 🎯 When to Use Cluster Pools

Use Pools when:

* Frequent cluster start/stop
* Need faster startup
* Team/shared environments

Avoid Pools when:

* Rare usage
* Strict budget constraints

# 🧠 Key Takeaway

👉 **Cluster Pool = Faster Start ⚡ but potential cost 💸**



DataBricks Cluster Policy
---

![alt text](dbcpolicy.png)

# Databricks Cluster Policies Guide

## 📖 Overview

Cluster Policies are a set of rules used by administrators to limit the configuration options available to users when they create clusters. Think of them as "Guardrails" that ensure users create clusters that are cost-effective, secure, and standardized.

## ❓ The Problem: Why do we need Policies?

Creating a cluster in Databricks manually is complex. Without a policy, a user might:

* Accidentally incur high costs: Selecting a massive machine (node) for a small task.
* Waste Resources: Forgetting to turn on "Auto-Termination," leaving a cluster running (and billing) overnight.
* Configuration Errors: Choosing a Databricks Runtime version that is incompatible with the team's code.
* Security Risks: Misconfiguring access or network settings.

## ✅ The Solution: What Policies Do

Policies act as a template or a filter for the Cluster Creation UI. They provide four main functions:

| Function     | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| Hide Options | Removes complex or unnecessary settings from the UI to make it simpler for beginners.           |
| Fix Values   | Hardcodes specific settings (e.g., "The Runtime must be 13.3") so the user cannot change them.  |
| Set Defaults | Pre-fills fields with recommended values (e.g., "Auto-terminate after 20 minutes").             |
| Limit Ranges | Restricts choices to a specific set (e.g., "User can only pick nodes with 8GB to 32GB of RAM"). |

## 🛠️ How it Works (The Workflow)

1. **Admin Creation**: An administrator defines the policy using a JSON-based set of rules.
2. **Permission Assignment**: The admin grants "Use" permission to specific users or groups.
3. **User Selection**: When a user clicks "Create Cluster", they see a Policy Dropdown.
4. **Simplified UI**: Once a policy is selected, the UI dynamically updates to show only the allowed options.

## 💰 Requirements & Cost

* **Premium Tier Only**: Cluster policies are only available for Databricks workspaces created in the Premium Tier.
* **Governance Tool**: They are primarily used for "Governance"—balancing the freedom of the user to do their work with the company's need to control the cloud bill.

## 💡 Key Takeaways for Beginners

* **Empowerment**: Policies allow standard users to create their own clusters without needing an admin to approve every single request.
* **Standardization**: Every cluster created under a "Data Science Policy" will look and act the same, making it easier to share code and collaborate.
* **Safety Net**: You don't have to worry about "breaking" the budget; the policy won't let you pick an option that is too expensive.



## Hands-On Practices

- Go to Databricks > compute > Policies

![alt text](cspc.png)

- Here default 4 policies are created by databricks.

- You can also create a new cluster policy as per your requirement.

**Requirement of Cluster Policy**

1. Policy - Unrestricted
2. Single Node Cluster
3. Databrick Runtime Version - Latest - LTS 17.3 (Scala 2.13, Spark 4.0.0)
4. Node Type 
  
  - General Purpose - Standard_DS3-v2
  - General Purpose HDD - Standard_D3_V2

5. Terminate after 20 minutes of inactivity.



- Create Cluster Policy > Name of policy > Family select - Custome

- Write Definitions

```json

// {
//   "spark_version": { 
//     "type": "fixed", 
//     "value": "auto:latest-lts", "hidden": true 
//     }
// }

{
  "spark_conf.spark.databricks.cluster.profile": {
    "type": "fixed",
    "value": "singleNode",
    "hidden": true
  },

  "driver_node_type_id": {
    "type": "allowlist",
    "values": [
      "Standard_DS3_v2",
      "Standard_D3_v2"
    ],
    "defaultValue": "Standard_DS3_v2"
  },

  "autotermination_minutes": {
    "type": "fixed",
    "value": 20
  },

  "spark_version": { 
  "type": "fixed", 
  "value": "auto:latest-lts", "hidden": true 
  },

  "cluster_type": {
    "type": "fixed",
    "value": "all-purpose"
  }
}
```

- Create it

- Try to Create Compute Resource > Select this policy

- It will populate all settings into your compute.

![alt text](clpolicy.png)


Notebook Intro
---

Go to Workspace > Users > Create folder > Create Notebook.

- To use notebook We will required to attach notebook to our Compute Cluster.

- Create cluster.
- Connect Notbook to this cluster by click on connect on top or right.

- Default language is Pythons.
- You can choose Other language in any of your cell of notebooks.

![alt text](cl.png)

Magic Commands
---

They allow you to switch languages, manage files, or install libraries without leaving your current cell.

Magic commands always start with a percent sign:

**Line Magics (%)**: Apply only to a single line of code.

**Cell Magics (%%)**: Apply to the entire cell. (Note: In Databricks, most commands use a single % even for the whole cell).

| Command | Purpose | Example |
| ------- | ------- | ------- |
| %md | "Renders Markdown (text, headings, lists) for documentation. | ",%md # My Analysis |
| %sql | Runs SQL code inside a Python or Scala notebook. | %sql SELECT * FROM users |
| %python | Switches the cell language to Python. | "%python print(""Hello"")" |
| %pip | Installs libraries directly to your cluster. | %pip install pandas |
| %run | Executes another notebook and imports its functions. | %run ./Shared/CommonUtils |
| %fs | Accesses the Databricks File System (to see files). | %fs ls /databricks-datasets |

```bash
%sh # for Shell 
ps 
```

![alt text](sh.png)

```bash
%fs /
```

![alt text](fs.png)

- Install Python Lib

```bash
%pip install faker
```

![alt text](pip.png)

- Import Another notebook into current notebook.

- Create `2.1 Env Vars` Notebook and paste this content for testing


```python
import os
import platform

def print_evn_info():
  print(f"Python Version: {platform.python_version()}")

  runtime_version = os.environ.get("DATABRICKS_RUNTIME_VERSION", "Unknown")

  print(f"Databricks Runtime Version: {runtime_version}")

```

- Copy Full Path of this notebook and come back to notebook where you want to copy

```bash
%run "Your Full Path URL of 2.1 Notebook"
```

Databricks Utilities
---

- Databricks utilities make it easier to combine diff types of tasks in a single notebook.

- They allow us to combine `File Ops` with `ETL` tasks.

- They are great for quick tasks, dbutils allows you to perform those same tasks like magic commands inside your actual code (Python or Scala) using variables and logic.

- They can't be run from a SQL cell.

  **1. File System Utilities**
  - Allow us to access Databricks File system from a notebook, and you can use various File Ops

  **2. Secrets Utilities**
  - Secrets utilities allow you to pull sensitive information from a "Vault" (Azure Key Vault).

  **3. Widget Utilities**

  - Widgets are interactive components like dropdowns, text boxes, or checkboxes that appear at the top of your notebook.

  - They allow you to parameterize your code.

  - Scenario: You build one notebook to clean data, and use a widget so the user can select which "Month" or "Region" to clean without changing the code.

**Hands-On Practices**

- We will use `dbutils` instead of magic commands %fs /

- dbutils.magic_commnads_flag.Your_commands('File_Path')


```bash
dbutils.fs.ls('/')
```

![alt text](dbutilfs.png)

- To print in a tabular formate, use **display**

```bash
display(dbutils.fs.ls('/'))
```

![alt text](displaydbu.png)

### What is difference between Magic Commands and dbutils ?

- **Magic Commands** is usefull for quick ad hoc file system queries

- **dbutils** is useful for Programmatic tasks.

- Lets save dbutils command in a variables `items` and use in python code.

```python
items = dbutils.fs.ls('/databricks-datasets/')

folder_count = len([item for item in items if item.name.endswith("/")])

file_count = len([item for item in items if not item.name.endswith("/")])

print(f"Total Folders: {folder_count}")

print(f"Total Files: {file_count}")
```

![alt text](progdbutils.png)

Import DBC files
---

Databricks allows us to import files and workspace from your pc to databricks.

- Go to Notebook/workspace 
- Look for Import and click it
- It will ask for file and URL.
- If you have files on your pc select files or URL
- Once Import it will look like this

![alt text](importdbc.png)

Access Azure Data Lake Storage
---

- Databricks uses Azure Data Lake Storage Gen2 for Storage Sol.

- We can authenticate this storage by multiple way
  
  - 1. Storage Access Keys
  - 2. Shared Access Stignrature SAS Token - For Granual level access
  - 3. Service Principle
    
    - We can create Service Principle and give the required access for the data lake to the service principle.


We have 2 scope level to authenticate Storage sols by using credentials.

**1. Session Scoped Authentications**

- We will use these creds in the notebook and authenticate to the data lake.

- Authentication will valid untill notebook has benn detached from cluster.

**2. Cluster Scoped Authentications**

- Use these creds in the cluster and authenticate form the cluster

- Authentication will happens when the cluster starts and it will valid until the cluster has been terminated.

- All the notebooks connected to this cluster will have access to the data.

**3. Azure Active Directory Authentications**

- We just need to enabled the cluster to use Azure AD Pass through authentications.

- Whenever a user runs a notebook,  the cluster will use the user's Azure AD creds and look for the role that user's has been assigned to the Azure Data Lake Storage using IAM 

- If the user has access to the storage account , it will allow to access the storage account.


- **Azure AD Authentications is only available on Premium workspace**.

**4. Unity Catelog**

- Administrator can define the access permissions for a user using the Databricks Unity Catelog.

- Whenever user trying to access the storage account, the cluster will check for the user's access in the `Unity Catelog`.

- If the user has the required permissions, it will allow the user to acess the storage account.

- **Unity Catelog Authentications is only available on Premium workspace**.


Access Azure Storage Data Lake to Databricks
---


## 1. Access Keys (The "Master Keys")
When you create an Azure Storage Account, Azure gives you two **Access Keys**. 

* **Total Power:** Having this key is like being the "Owner." Someone with this key can read, delete, or change anything in your storage.

* **Security Warning:** As a beginner, it is okay to paste these in your code for practice, but in a real job, you **must** hide them in an **Azure Key Vault** so people can't see them in your notebooks.

## 2. The Spark Configuration (The "Handshake")
To make the connection, you have to tell Spark (the engine behind Databricks) which key to use for which storage account. You do this with a specific configuration line in your notebook.

**The formula looks like this:**
`spark.conf.set("fs.azure.account.key.<storage-account-name>.dfs.core.windows.net", "<your-512-bit-key>")`

* **`fs.azure.account.key`**: This tells Spark, "I am giving you a key."
* **`<storage-account-name>.dfs.core.windows.net`**: This is the "Endpoint." It tells Spark exactly which storage account the key belongs to.

## 3. The ABFS Driver (The "Language")
In the past, people used `http://` to find files. But for Big Data, Microsoft created a special "driver" called **ABFS** (Azure Blob File System). It is much faster and more secure for moving massive amounts of data.

To find a file using this driver, you use a special **URI (Unique Resource Identifier)**.

![alt text](abfs.png)

### Breaking down the URI:
The address follows this exact pattern:
**`abfss://<container-name>@<storage-account-name>.dfs.core.windows.net/<folder-path>/<file-name>`**

* **`abfss`**: The "s" at the end stands for **Secure**. It ensures your data is encrypted while it travels between Azure and Databricks. Always use the "s"!
* **`@`**: This separates the container name from the storage account name.
* **`.dfs.`**: Remember our previous talk about the "Hierarchical Namespace"? The "dfs" part is what tells Azure you are using the Data Lake features (folders), not just standard blob storage.

## 💻 Practice Example
If you have a container named `raw-data` and a storage account named `mystudydata`, your code to list the files would look like this:

```python
# 1. Set the configuration (The Handshake)
spark.conf.set(
    "fs.azure.account.key.mystudydata.dfs.core.windows.net", 
    "PASTE_YOUR_LONG_512_BIT_KEY_HERE"
)

# 2. Define the path (The Address)
my_path = "abfss://raw-data@mystudydata.dfs.core.windows.net/"

# 3. Use Databricks Utilities to see the files
display(dbutils.fs.ls(my_path))
```

### Summary for Beginners:
1.  **Get the Key** from the Azure Portal (Access Keys tab).
2.  **Set the Config** in your first notebook cell.
3.  **Use the `abfss` path** to read your data.


**Hands-On Practices**

## Authenicate by using SA Access Key

- Create Storage Account.
- Create containers 
  - raw,
  - processed,
  - presentations,
  - demo

- Upload `circuits.csv` in demo containers.

- Go to Notebook and allow spark configurations using your SA Access Key

```python
# Set spark confing by using access key
spark.conf.set("fs.azure.account.key.databricksabhavin1.dfs.core.windows.net", "Your_Acces_Key_Here")

dbutils.fs.ls("abfss://demo@databricksabhavin1.dfs.core.windows.net")
```

- To read csv file directly on the Notebook

```python
display(spark.read.csv("abfss://demo@databricksabhavin1.dfs.core.windows.net"))
```

![alt text](readcsv.png)

## Authenticate databricks by SAS TOKENS

```python
spark.conf.set("fs.azure.account.auth.type.<storage_account>.dfs.core.windows.net", "SAS")

spark.conf.set("fs.azure.sas.token.provider.type.<storage_account>.dfs.core.windows.net", "org.apache.hadoop.fs.azurebfs.sas.FixedSASTokenProvider")

spark.conf.set("fs.azure.sas.fixed.token.<storage_account>.dfs.core.windows.net", <>"TOKEN_HERE">)
```

| Configuration Line | What it tells Spark | Analogy |
| ------------------ | ------------------- | ------- |
| Line 1: Auth Type | """I am not using a password or an ID card. I am using a SAS Token.""" | "Telling the guard: ""I have a temporary guest pass.""" |
| Line 2: Provider Type | """I am giving you a static (Fixed) token string that I typed in myself.""" | "Telling the guard: ""My pass is this piece of paper in my hand.""" |
| Line 3: Fixed Token | """Here is the actual string of characters for the token.""" | Handing the paper to the guard to scan. |


- Now list file

```python
display(dbutils.fs.ls("abfss://databricksabhavin1.dfs.core.windows.net"))
```

- Read file

```python
display(spark.read.csv("abfss://databricksabhavin1.dfs.core.windows.net/circuits.csv"))
```

![alt text](rcsas.png)

## Authenicate databricks by Service Priciple

![alt text](sparch.png)

```python
# 1. Define your variables (Use Secrets for the Client Secret!)
client_id = "<your-service-principal-client-id>"
tenant_id = "<your-azure-tenant-id>"
client_secret = dbutils.secrets.get(scope="<your-scope>", key="<your-secret-name>")
storage_account = "databricksabhavin1"

# 2. Set the 5 Mandatory Spark Configurations
spark.conf.set(f"fs.azure.account.auth.type.{storage_account}.dfs.core.windows.net", "OAuth")

spark.conf.set(f"fs.azure.account.oauth.provider.type.{storage_account}.dfs.core.windows.net", "org.apache.hadoop.fs.azurebfs.oauth2.ClientCredsTokenProvider")

spark.conf.set(f"fs.azure.account.oauth2.client.id.{storage_account}.dfs.core.windows.net", client_id)

spark.conf.set(f"fs.azure.account.oauth2.client.secret.{storage_account}.dfs.core.windows.net", client_secret)

spark.conf.set(f"fs.azure.account.oauth2.client.endpoint.{storage_account}.dfs.core.windows.net", f"https://login.microsoftonline.com/{tenant_id}/oauth2/token")
```

| Configuration Line | What it tells Spark |
| ------------------ | ------------------- |
| Auth Type | """We are using OAuth protocol | not a simple key.""" |
| Provider Type | """Use the Client Credentials method to handle my ID card.""" |
| Client ID | """This is the Application ID for my Service Principal.""" |
| Client Secret | """This is the Password for my Service Principal.""" |
| Endpoint | """This is the Login URL for my specific Azure Tenant.""" |

- Now we have Service Pricipal , SA .
- Now we would have to Assign Role `Storage blob data contributor` to the data lake to our service principal.

- To assign role ,

  - Go to SA > IAM > Add role > search for `Storage blob data contributor`.

  - Assign Access to `Service Principal` > Select SP.

  ![alt text](addrolesp.png)

Cluster Scope Authentications
---

We will required to use our SA Access key or SAS in our Single Node / Multi Node Cluster during creating the cluster.

![alt text](usecrds.png)


Securing Secrets
---

We will use Azure Key-value to store cred, and then we will use azure cred into our cluster , notebook

- Create KeyValut.

- Go to Secrets > Add sectets name and its value.

- Create Databrick secret scope  and link the secret scope with azure key valut.

- Go to Databrick home url
- Add /secrets/createScope to create secret scope.

- Copy Azure Key Value DNS URL by Properties > **Vault URI**. Copy this. `https:/<keyvault_name>.valut.azure.net/`

- Also copy Key valut **Resource ID**

![alt text](csscope.png)

- Scret Scopes created!


- Go to Notebook

```bash
dbutils.secrets.help()
```

![alt text](schelp.png)

- We will use listscope

```bash
dbutils.secrets.listScopes()
# List all avaialble secret scope just we created
```

```bash
dbutils.secrets.list(scope = 'Your_scope')
# Return Secret Name
```

```bash
dbutils.secrets.get(scope = "Your_Scope", key = "Key_Valut_Secret_Key")

# Out: ['REDACTED']
```

Implement Secrets Utilities in Notebooks
---

![alt text](sctscp.png)

```bash
account_key = dbutils.secrets.get(scope = 'your_secrets_scope_name', key = 'secret_key_name')
```

```bash
spark.conf.set(
  "fs.azure.account.key.<SA_Name>.dfs.core.windows.net",
  "account_key"
)
```

```bash
display(dbutils.fs.ls("abfss://<sa_name>.dfs.core.windows.net"))
```

![alt text](scgen2.png)

Implement Secrets Utilities by Secret scope by using SAS TOKENS
---

- You have to just replace your Hardcoded value of SAS to azure key valut secret scope named.

![alt text](sassct.png)

---

**Secrets Utilities in Clusters**

- You would have to just add string for account_key and your secret scope formula.

```bash
fs.azure.account_key.<SA_Name>.dfs.core.windows.net {{secrets/<Your_Secret_Scope_Name>/<KeyValut_Secret_Key_Name}}
```

![alt text](sucluster.png)

**RESTART CLUSTER ALWAYS**

**Varify in Notebooks**

```bash
display(dbutils.fs.ls("abfss://<sa_name>.dfs.core.windows.net"))

display(spark.read.csv("abfss://<sa_name>.dfs.core.windows.net/circuits.csv"))
```

![alt text](scclusternb.png)


# 📦 Databricks Storage & Mounts

## 📌 Overview

This guide explains how to properly store and access data in Azure Databricks, why DBFS Root should be avoided for production data, and how to use Mounts and Unity Catalog.

## ❌ Why NOT to Use DBFS Root

DBFS Root is the default storage attached to a Databricks workspace.

### Issues:

* Data is **deleted when workspace is deleted**
* Not suitable for **production or customer data**
* Limited control over security and lifecycle

👉 **Conclusion:** Never store critical data in DBFS Root.

## ✅ Recommended Storage Options

Store data in external Azure storage services:

* Azure Blob Storage
* Azure Data Lake Storage Gen2 (ADLS Gen2)

### Benefits:

* Data persists independently of Databricks workspace
* High scalability and performance
* Built-in replication and durability

## ⚠️ Direct Access Using ABFS Protocol

Example:

```
abfss://<container>@<storage-account>.dfs.core.windows.net/<file-path>
```

### Challenges:

1. Long and complex URLs
2. Requires authentication every time

## ✅ Databricks Mounts (Solution)

Mounts allow you to attach external storage to DBFS as a directory.

### Example:

```
/mnt/customer-data
```

Now you can access data like:

```
/mnt/customer-data/file.csv
```

Instead of:

```
abfss://container@storageaccount.dfs.core.windows.net/file.csv
```

## 🔐 How Mount Works

### Steps:

1. Create a Service Principal (Azure AD application)
2. Grant access to Azure Storage (ADLS/Blob)
3. Create mount in Databricks using credentials

Once mounted:

* No need to pass credentials again
* Accessible to all workspace users

## 💡 Analogy

Mount = Mapping a drive in your system

| System     | Example   |
| ---------- | --------- |
| Windows    | C:, D:\   |
| Databricks | /mnt/data |

## 🚀 Benefits of Mounts

* Simplified file paths
* No repeated authentication
* Easy data access for teams
* Leverages Azure storage capabilities

## ⚠️ Important Note

Databricks Mounts are considered a **legacy approach**.

## 🌟 Unity Catalog (Modern Approach)

Unity Catalog is the recommended way to manage data access in Databricks.

### Features:

* Centralized data governance
* Fine-grained access control
* No manual credential handling
* Works across multiple workspaces

### Access Example:

Still uses ABFS path, but without credentials.

## 🔁 Mounts vs Unity Catalog

| Feature                 | Mounts            | Unity Catalog |
| ----------------------- | ----------------- | ------------- |
| Credential Management   | Manual (one-time) | Automatic     |
| Security                | Basic             | Advanced      |
| Multi-workspace Support | No                | Yes           |
| Recommended             | No                | Yes           |

## 🧠 Real-World Usage

* Existing projects → Mostly use Mounts
* New projects → Prefer Unity Catalog

👉 Engineers should understand both approaches.

## 📝 Summary

* Avoid DBFS Root for production data
* Use Azure Storage (ADLS/Blob)
* Use Mounts for simplified access (legacy)
* Use Unity Catalog for modern, secure data management

## 📚 Next Steps

* Implement mount using Service Principal
* Explore Unity Catalog setup
* Integrate with Databricks notebooks and pipelines

## 🔧 Example (Optional Mount Code)

```python
configs = {
  "fs.azure.account.auth.type": "OAuth",
  "fs.azure.account.oauth.provider.type": "org.apache.hadoop.fs.azurebfs.oauth2.ClientCredsTokenProvider",
  "fs.azure.account.oauth2.client.id": "<client-id>",
  "fs.azure.account.oauth2.client.secret": "<client-secret>",
  "fs.azure.account.oauth2.client.endpoint": "https://login.microsoftonline.com/<tenant-id>/oauth2/token"
}

# Mount command
dbutils.fs.mount(
  source = "abfss://<container>@<storage-account>.dfs.core.windows.net/",
  mount_point = "/mnt/customer-data",
  extra_configs = configs
)
```


Mount **Azure Data Lake Storage Gen2 (ADLS Gen2)** into Databricks so you can use:

```
/mnt/<your-mount-name>
```

instead of long ABFS URLs.

# 🔧 High-Level Flow

```
ADLS Gen2 → Service Principal → Databricks Mount → /mnt/...
```

# 🧩 Step-by-Step Setup (Production Ready)

## 🔹 Step 1: Create Service Principal (Azure AD)

👉 This is like a **service account for authentication**

Go to:

* Azure Portal → **Azure Active Directory**
* App registrations → **New registration**

### Capture these values:

* **Application (client) ID**
* **Directory (tenant) ID**

## 🔹 Step 2: Create Client Secret

* Go to: Certificates & Secrets
* Create **New client secret**

👉 Copy:

* **Client Secret Value (IMPORTANT)**

## 🔹 Step 3: Give Access to ADLS Gen2

Go to your **Storage Account**:

* IAM (Access Control)
* Add Role Assignment

### Assign role:

* `Storage Blob Data Contributor`

### Assign to:

* Your **Service Principal**

## 🔹 Step 4: (IMPORTANT) Assign ACLs (for ADLS Gen2)

Even after IAM, you MUST set ACL:

* Go to **Storage Account → Containers**
* Select container
* Click **Access Control (ACL)**

### Add:

* Service Principal → Give **Read/Write/Execute**

👉 Without this → mount will FAIL ❌

## 🔹 Step 5: Mount in Databricks

Now go to **Databricks Notebook** and run:

```python
configs = {
  "fs.azure.account.auth.type": "OAuth",
  "fs.azure.account.oauth.provider.type": "org.apache.hadoop.fs.azurebfs.oauth2.ClientCredsTokenProvider",
  "fs.azure.account.oauth2.client.id": "<client-id>",
  "fs.azure.account.oauth2.client.secret": "<client-secret>",
  "fs.azure.account.oauth2.client.endpoint": "https://login.microsoftonline.com/<tenant-id>/oauth2/token"
}

dbutils.fs.mount(
  source = "abfss://<container>@<storage-account>.dfs.core.windows.net/",
  mount_point = "/mnt/customer-data",
  extra_configs = configs
)
```

## 🔹 Step 6: Verify Mount

```python
dbutils.fs.ls("/mnt/customer-data")
```

👉 If you see files → ✅ SUCCESS

# 🔐 Best Practice (VERY IMPORTANT)

Instead of hardcoding secrets:

👉 Use **Databricks Secret Scope**

Example:

```python
"fs.azure.account.oauth2.client.secret": dbutils.secrets.get(scope="kv-scope", key="client-secret")
```

![alt text](mountsacontainer.png)



############################################

# ⚡ Spark Architecture in Databricks 

A Databricks cluster consists of:

### 🔹 Driver Node (Brain)

* Runs notebook or application code
* Creates SparkContext
* Controls execution (jobs, stages, tasks)
* Does NOT process data

### 🔹 Worker Nodes (Processing Units)

* Virtual machines in Azure
* Perform actual data processing

![alt text](sparkarch.png)

### 🔹 Executors

* Run inside worker nodes
* Handle computation and data I/O
* Databricks uses **1 executor per worker** for simplicity and performance

### 🔹 Slots (Parallel Execution)

* Each CPU core = 1 slot
* Slot executes one task

## ⚙️ Execution Flow

When a Spark job runs:

1. **Application Start**

   * Notebook or job runs on Driver

2. **Job Creation**

   * Each action (e.g., count, write) becomes a job

3. **Stages Division**

   * Jobs split into stages based on transformations and shuffles

4. **Tasks Creation**

   * Each stage is divided into tasks
   * Each task processes one data partition

5. **Task Distribution**

   * Driver assigns tasks to executor slots

6. **Execution**

   * Executors process tasks in parallel

7. **Result Return**

   * Results sent back to Driver

## 📊 Example

* Data size: 1 GB
* Partitions: 4
* Worker node: 4 cores

Execution:

* 4 tasks run in parallel using 4 slots

## ⚡ Parallelism

Spark achieves high performance through parallelism.

### Depends on:

* Number of partitions
* Number of CPU cores

👉 More partitions + more cores = better parallelism

## 🔼 Scaling Strategies

### 🔹 Vertical Scaling

* Increase CPU/RAM of a single node

**Pros:**

* Simple to implement

**Cons:**

* Limited by VM size

### 🔹 Horizontal Scaling (Recommended)

* Add more worker nodes

**Pros:**

* Handles large-scale data (TBs/PBs)
* Improves parallel processing

## 🔥 Databricks Optimization

* Uses **1 executor per worker node**
* Simplifies resource management
* Improves stability and performance

## 🧠 Key Concepts Summary

| Component | Role                  |
| --------- | --------------------- |
| Driver    | Controls execution    |
| Worker    | Executes tasks        |
| Executor  | Runs inside worker    |
| Task      | Smallest unit of work |
| Slot      | Executes a task       |

## ⚠️ Common Issues & Troubleshooting

### ❌ Slow Job

**Symptoms:**

* Long execution time

**Fix:**

* Increase workers (horizontal scaling)
* Increase partitions

### ❌ Underutilized Cluster

**Symptoms:**

* Few tasks running

**Fix:**

* Increase number of partitions

### ❌ Driver Failure

**Symptoms:**

* Notebook crash

**Fix:**

* Avoid large collect() operations
* Increase driver memory

Spark DataFram
---

# 📊 Spark DataFrames in Databricks


## 🧠 What is a DataFrame? 

A DataFrame is a distributed collection of data organized into rows and columns with a defined schema.

### Similar to:

* SQL Table
* Pandas DataFrame

## ⚙️ How Spark Uses DataFrames

When data is read:

1. Data is loaded into a DataFrame
2. DataFrame is split into partitions
3. Each partition is processed in parallel

👉 Enables large-scale distributed processing

## 🔥 Key Concept: Partitions

* DataFrame is divided into smaller chunks called partitions
* Each partition is processed by executors
* More partitions = more parallelism

![alt text](sparkdf.png)

## 🧩 DataFrame Lifecycle

### 🔹 1. Read Data (Input)

Using DataFrame Reader API:

```python
 df = spark.read.format("csv").load("/mnt/data/file.csv")
```

### Supported Formats:

* CSV
* JSON
* Parquet (recommended)
* ORC

### 🔹 2. Transform Data

Transformations are operations applied to DataFrames.

Examples:

```python
 df.filter(df.age > 25)
 df.groupBy("age").count()
 df1.join(df2, "id")
```

### Common Transformations:

* Filter
* Join
* Aggregation
* Window functions

### 🔹 3. Actions (Trigger Execution)

Actions trigger actual computation.

Examples:

```python
 df.count()
 df.show()
```

### 🔹 4. Write Data (Output)

Using DataFrame Writer API:

```python
 df.write.format("parquet").save("/mnt/output/")
```

## 🔁 Full Data Flow

```
Read → DataFrame → Transform → Action → Write
```

## 🧠 Important Concepts

### 🔹 Lazy Evaluation

* Transformations are not executed immediately
* Execution starts only when an action is called

### 🔹 DAG (Execution Plan)

* Spark builds a Directed Acyclic Graph (DAG)
* Optimizes execution before running tasks

## 🔌 Data Sources API

Provides:

* DataFrame Reader API → Read data
* DataFrame Writer API → Write data

## 📊 Real-World Example

```python
 df = spark.read.parquet("/mnt/raw/sales")

 df_clean = df.filter(df.amount > 0)

 df_agg = df_clean.groupBy("region").sum("amount")

 df_agg.write.mode("overwrite").parquet("/mnt/gold/sales")
```

# 🏎️ Formula 1 Databricks Project

## 📌 Overview

This project uses Formula 1 (F1) racing data to learn how to work with real-world datasets in Azure Databricks.

The focus is on:

* Understanding data structure
* Handling multiple file formats
* Preparing data for analytics

## 🧠 Basic Concept

* A **Season** happens every year
* Each season has multiple **Races**
* Each race:

  * Happens on a **Circuit (track)**
  * Has **Drivers (players)**
  * Drivers belong to **Constructors (teams)**

## 📊 Main Tables

| Table        | Description                         |
| ------------ | ----------------------------------- |
| circuits     | Race locations                      |
| races        | Race details                        |
| drivers      | Driver information                  |
| constructors | Team details                        |
| results ⭐    | Final race results (most important) |
| qualifying   | Starting positions                  |
| pit_stops    | Tyre change events                  |
| lap_times    | Time per lap                        |

## 🔗 Data Relationship (Simplified)

```
Season → Races → Results → Driver + Constructor
```

Example:

* 2023 Season → Monaco Race → Driver A → Ferrari → Position 1

## 📁 File Types Used

| File Type          | Description                               |
| ------------------ | ----------------------------------------- |
| CSV                | Simple tabular data                       |
| JSON (single-line) | One record per line                       |
| JSON (nested)      | Contains inner objects (needs flattening) |
| Multi-line JSON    | Requires special handling in Spark        |

## ⚙️ What You Will Learn

* Reading CSV and JSON in Spark
* Handling nested and multi-line JSON
* Data transformation and cleaning
* Joining related datasets
* Preparing analytics-ready data

#####################################3

# 🏎️ Formula 1 Databricks Project – Requirements Explained

## 📌 Overview

This document explains the project requirements in a simple Databricks (Lakehouse) way.

---

# 🟢 1. Ingestion Requirements (Bronze Layer)

## What we need to do

* Read all 8 input files (CSV + JSON)
* Apply proper schema (column names, data types)
* Add audit columns:

  * `ingestion_date`
  * `source`
* Store data in **Parquet format**
* Support **incremental load (append only)**

## Databricks Understanding

👉 This is your **Bronze Layer**

```
Raw Files → Clean Schema → Add Audit Columns → Store as Parquet
```

👉 Important points:

* Never overwrite full data
* Always **append new data (new race)**

---

# 🟡 2. Transformation Requirements (Silver/Gold Layer)

## What we need to do

* Join datasets (example: races + results)
* Create clean tables for reporting
* Add audit columns again
* Store as Parquet
* Support incremental processing

## Databricks Understanding

👉 This is your **Silver + Gold Layers**

```
Bronze → Clean + Join → Aggregation → Final Tables
```

👉 Example:

* Combine `races` + `results` → race_results table

👉 Important:

* Only reprocess changed data (incremental)

---

# 📊 3. BI Reporting Requirements

## What we need to build

* Driver Standings (per year)
* Constructor Standings (per year)

## Databricks Output

👉 These are **Gold tables** used for dashboards


# 📈 4. Analytical Requirements

## What we need to analyze

* Most dominant drivers (last 10 years + all time)
* Most dominant teams
* Ranking based on performance

## Output

* Tables + dashboards + visualizations

👉 Example:

* Top drivers by total wins

---

# 📊 5. Dashboard Requirement

* Build dashboards inside **Databricks SQL**
* Share insights visually

---

# ⚙️ 6. Scheduling & Monitoring

## Requirements

* Run pipeline every Sunday 10 PM
* If no new data → pipeline should not fail
* Monitor pipeline
* Re-run failed jobs
* Set alerts

## Databricks Solution

👉 Use:

* Workflows (Jobs)
* Alerts
* Job monitoring UI

# 🔒 7. Non-Functional Requirements

## GDPR (Delete data)

* Ability to see history data & delete specific records

## Time Travel

* Query old data versions

## Rollback

* Restore previous data state

## Databricks Solution

👉 Use **Delta Lake**

* DELETE support
* Time Travel
* Versioning

## Solution Architecuture Overview

## Step 1 - Export Data of Ergast API

- raw.zip file downloaded already.

## Step 2 - ADLS Raw Layer

- We already create `raw`, `processed`, `presentations`, `demo` container in ADLS container.

- We already Uploaded `raw.zip` total 8 files including folders in `raw` containers.

## Step 3 - Ingest and Process this data by Databrick Notebook.

- Proces data by notebook and stores this processed data into `processed` container.

## Step 4 - Transform data

- Transformed data is initially created in a `parquet format`.

- Stores this transformed data into `presentation` container.

## Step 5 - Analyze

- We will analyze this data by using notebook.

To achive this , we will use Azure Data Factory to make this workflow.

![alt text](f1arch.png)



Circuit file - DataFram Reader 
---

- We will see how to use the Dataframe Read API to read the data from CSV file into a Spark DataFrame.

## Step 1 - Cluster is Running

## Step 2 - Create Ingestoin folder in workspace

- Create Ingestion folder under workspace and create Notebook `1.ingest_circuits_file` under this ingestion folder

- Connect this notebook to cluster.

## Step 3 - Find Formula of spark to read csv

- Go to docs for spark read csv 

![alt text](ffrc.png)

- In Notebook

```bash
circuits_df = spark.read.csv("dbfs://mnt/<sa_name>.container/circuits.csv")

spark.read.csv("dbfs://mnt/raw/circuits.csv")
```

```bash
display(dbutils.fs.mounts())
```

![alt text](readcsvspk.png)

- Show csv

```bash
circuits_df.show()

<Your_Vars of spark.read.csv("path")>.show()
```

![alt text](scsv.png)

**Use Header to show 1st line as header**

```bash
circuits_df = sparks.read.option("header", True).csv("dbfs:/mnt/<Your_Object_Path")
```

![alt text](header.png)

- You can see here, hearder has added in a first line of each columns. 

- Ex. circuitId, circuitRef etc

## Circuit File -  Specify Schema

- See which data types used in *.csv

```bash
circuits_df.printSchema()
```

![alt text](ps.png)

- Bydefault sparks is considering your all csv data as **String** Now.

- It doesn't understood there is int, float data types are there in csv.


`How to Do that ?`

- Use `InferSchema` 


![alt text](infers.png)

- Now check for printSchema.

- It should show data types

```bash
circuits_df.printSchema()
```

![alt text](psma.png)



## Use **StructType** and **StructField**

StructType means the full schema.

Think of it as the container for the whole row structure.

- If your file has 5 columns, StructType contains all 5 column definitions.

So:

- StructType = full schema

- StructField = one column inside that schema

### What is StructField?

StructField means one column definition.

For each column, you give:

column name
data type
nullable or not

Example:

```python
StructField("circuit_id", IntegerType(), False)
```

**False** - DataType Value shoudn't empty.

column name = circuit_id
type = integer
null values not allowed

So each StructField describes one column.

```python
circuits_schema = StructType([
    StructField("circuit_id", IntegerType(), False),
    StructField("circuit_reference", StringType(), True),
    StructField("name", StringType(), True),
    StructField("location", StringType(), True),
    StructField("country", StringType(), True),
    StructField("latitude", DoubleType(), True),
    StructField("longitude", DoubleType(), True),
    StructField("altitude", IntegerType(), True)
])
```

- Once Import python library and this set schema manually as above , so spark will not required to guess which data types and schemas of data.

- Display data.

```python
circuits_selected_df = circuits_df.select("circuitId", "circuitRef", "name", "location", "country", "lat", "lng", "alt")
```

```python
display(circuits_selected_df)
```

![alt text](dd.png)

**Now We have set schemas and data types**.

## Select only Required columns

- Use df_vars.select("column1","column2")

- In our case, df_vars is circuits_df

![alt text](serecl.png)



## WithColumnRenamed

```bash
circuits_renamed_df = circuits_selected_df.withColumnRenamed("Your_Column_name", "New_name")
```

![alt text](withcolumnrenamed.png)


## Add/Replace new column

- Add new column named `Ingestion Date` - which will hold current timestamp.

- Refer Docs 

![alt text](addrdocs.png)


```bash
circuits_renamed_df = circuits_selected_df.withColumnRenamed("Your_Column_name", "New_name")
```


```python
circuits_selected_df = circuits_df.select("circuitId", "circuitRef", "name", "location", "country", "lat", "lng", "alt")
```

- To add columns

- Import python library

```python
from pyspark.sql.functions import current_timestamp
```

- Add Columns `ingestion_date`

```python
circuits_final_df = circuits_renamed_df.withColumn("ingestion_date", current_timestamp())
```
- Display circuits_final_df


![alt text](addcl.png)

Here, `("ingestion_date", current_timestamp())` - "ingestion_date" is param set to Add columnd new/existing and "current_timestamp() is add a functions.

**What if we want to add new columnd named `env` as value set to `productions` ?**

- We can't add `Productions` as a string/column in place of functions as second parameters.

- We can add `Productions` as Value of `Env` as string by **Function named LIT**.

- Import lit library

```python
from pyspark.sql.functions import current_timestamp, lit
```
- Add new column named `env`

```python
circuits_final_df = circuits_renamed_df.withColumn("ingestion_date", current_timestamp()) \
.withcolumn("env", lit("Productions))
```

![alt text](addlit.png)

## Write Data to File system - Azure Data Lack Storage Gen2

- We will write data in format of `parquet`.


- use `parquet()` API

```python
circuits_final_df.write.parquet("/mnt/<sa_name>.processed/circuits")
```


![alt text](wdtosa.png)

- Read parquet data from processed containers

```bash
df = spark.read.parquet("/mnt/sabhavindb/processed/circuits")
```

- Display df

```bash
display(df)
```


![alt text](ddf.png)


- If it is failing use keyword `overwrite`

```bash
circuits_final_df.write.mode.("overwrite").parquet("/mnt/sahavindb/processed/circuits")
```

- **This will not work due to unity catelog block dbfs. You can't use /mnt**.

- You can enable `/mnt` in unity catelog. But this is not recommended.

- Use abfss to write directlyh on processed container

![alt text](useabfss.png)

- Display

![alt text](dp.png)