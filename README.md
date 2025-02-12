# otel-nextjs-elastic

An [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that demonstrates how to use OpenTelemetry to send data to Elastic using automatic instrumentation. The OpenTelemetry integration was built using the [Elastic Distribution of OpenTelemetry Node.js](https://github.com/elastic/elastic-otel-node).

## Getting Started

### Step 1: Clone the repository and install the required packages.

After cloning this repository, you will want to install the required packages.

```
npm install package-lock.json
```

### Step 2: Create a .env.local file

You will also want to add your endpoint, API key, and service name for the application to your `.env.local` file. To learn more about how to find your endpoint and API Key, be sure to check out the [documentation on the subject](https://github.com/elastic/elastic-otel-node/blob/main/packages/opentelemetry-node/docs/get-started.md#send-data-to-elastic).

Your `.env.local` file should look similar to the following:

```
OTEL_EXPORTER_OTLP_ENDPOINT=https://your.endpoint.com:443
OTEL_EXPORTER_OTLP_HEADERS=Authorization=ApiKey your_token_here
OTEL_SERVICE_NAME=nextjs-otel-app
```

### Step 3: Run the example locally

You can type the following into your terminal:

```
npm run dev
```

## Viewing data in Elastic

In Elastic, if you go to Observablity, click where it says Applications and then click where it says Service Inventory. *Note* It can take several minutes after initializing EDOT Node.js for the service to appear in this list.

You should see your service name listed:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXctIgii7jrXEwPMO2eAkRDarFuF3KAJwvkKqFxJjk5BmGBosyku-f9xFk84MAIVw_r332fj8b5CGGBtfSzauQWC-67GrVSqZJ93tFXSZPqO20tSmx1Q-OctpAq2Hv_CkRxsdK-VkA?key=fHwhbKjzAatNsoMTSCNdZk2P)

If you click on the your service name you should a view similar to the following:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf-lOIgfZph1aO_opU-Z3jIkFsKgE_r0MQbCMOvY-6n0cxNr-ocVSaAiEX59brgkTHWiX0XEaY9RxV70-XmaWvLjg89XVEPUwxFFyPcuOJvH-VcFmKMFYvlGut2_IXDsa68G5SgxA?key=fHwhbKjzAatNsoMTSCNdZk2P)


