export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Runtime:', process.env.NEXT_RUNTIME);
    console.log('Starting OpenTelemetry initialization in', process.env.NODE_ENV);
    console.log('Service Name:', process.env.OTEL_SERVICE_NAME);
    console.log('Has OTLP Endpoint:', !!process.env.OTEL_EXPORTER_OTLP_ENDPOINT);
    console.log('Has OTLP Headers:', !!process.env.OTEL_EXPORTER_OTLP_HEADERS);

    try {
      require('@elastic/opentelemetry-node');
      console.log('OpenTelemetry initialization successful');
    } catch (error) {
      console.error('Error initializing OpenTelemetry:', error);
    }
  }
}
