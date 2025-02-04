export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      console.log('Initializing Elastic OpenTelemetry...');
      console.log('Environment:', process.env.NODE_ENV);
      console.log('Service Name:', process.env.OTEL_SERVICE_NAME);
      console.log('Has OTLP Endpoint:', !!process.env.OTEL_EXPORTER_OTLP_ENDPOINT);
      
      // Import the package
      require('@elastic/opentelemetry-node');
      
      // Add a test span to verify instrumentation
      const { trace } = require('@opentelemetry/api');
      const tracer = trace.getTracer('init-test');
      const span = tracer.startSpan('initialization-check');
      span.setAttribute('environment', process.env.NODE_ENV || 'unknown');
      span.end();
      
      console.log('Elastic OpenTelemetry initialization completed');
    } catch (error) {
      console.error('Failed to initialize Elastic OpenTelemetry:', error);
    }
  }
}
