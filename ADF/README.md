Azure Data Factory
---

ADF is a fully managed serverless data integration solutions for ingesting, preparing and transforming all of your data at scale.

The generated data is in a variety of formats, ranging from structrued, semi-structured and unstructured.

This data should be processed and ingested quickly in a consistent manner so that they can gain insights from the data and realize benefits.

ADF provides the ability to ingest data from various data sources like AWS S3, Google Cloud Storage, also from On-Premise services.

![alt text](adfarch.png)

ADF Provides ability to transform and analyze the data. But, Transformations is limited only. To transformation in complex data is not available in ADF and its too complex.

We can orchestrate those transformations from the ADF.

Also, If we created ML Model in Azure ML or in Databricks, we can orchestrate the executions of those from ADF.

We will create our transformations and analytical script in Azure Databricks Notebooks and we will orchestrate them by our ADF.

Additionally, ADF also allow us to orchestrate the publishing of dashborads created in tools like `Power BI`.

Basically, ADF provides and `End to End Solutions` for `Data Integratinos`, `Transformations`, `Orchestrations`.

`Once data has processed, the data will writtern to a storage solutions like` **SQL Database** or **ADSL Gen2**

# ADF Archetectures

**Storage**

- Whatever actions we want to perform in ADF, it will requires Access to Storage Solutions such as ADLS, SQL Database.

**Compute**

- Provided by Azure databricks or HD Insights Clusters.

- Also it could be the serverless compute provided by ADF itself.

- Once we created a pipeline in ADF, we need to know how to Access these Resources like Storage or Computes.

**Linked Service** - For these we will create a `Linked Service`.

**DataSet** - Once we create linked services we would have to define our data structure in which formate data should store ?, Name of the file within a containers ? etc.

- This type of informations will stores in `DataSet`

- **Actions** - Using the connection informations, we may want to execute a process like, `Execute Databrick Notebooks` 

- **Pipelines** - To execute No. of tasks one by one by making dependencies between them we can use Pipelines.

- **Trigger** - We can also automate to trigger this pipelines based on Events, on Scheduled time we will use `Trigger`.

![alt text](adfarchtectures.png)