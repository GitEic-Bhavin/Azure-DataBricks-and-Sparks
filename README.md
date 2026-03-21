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
