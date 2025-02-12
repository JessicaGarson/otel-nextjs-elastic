# otel-nextjs-elastic

An [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that demonstrates how to use OpenTelemetry to send data to Elastic using automatic instrumentation. The OpenTelemetry integration was built using the [Elastic Distribution of OpenTelemetry Node.js](https://github.com/elastic/elastic-otel-node).

## Getting Started

### Step 1: Clone the repository and install the required packages.

After cloning this repository, you will want to install the required packages.

```
npm install package-lock.json
```

### Step 2: Create a .env.local file

You will also want to add your endpoint, API key, and service name for the application to your `.env.local` file. To learn more about how to find your endpoint and API Key, be sure to check out the [documentation on the subject]([https://github.com/JessicaGarson/otel-nextjs-elastic](https://github.com/elastic/elastic-otel-node/blob/main/packages/opentelemetry-node/docs/get-started.md#send-data-to-elastic).

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
