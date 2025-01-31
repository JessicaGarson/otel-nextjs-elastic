import { trace } from '@opentelemetry/api';

export async function GET() {
  const tracer = trace.getTracer('health-check');
  const span = tracer.startSpan('health-check');
  
  try {
    console.log('Health check called - Environment:', process.env.NODE_ENV);
    
    return new Response(JSON.stringify({
      status: 'ok',
      environment: process.env.NODE_ENV,
      hasOtelConfig: {
        endpoint: !!process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
        headers: !!process.env.OTEL_EXPORTER_OTLP_HEADERS,
        serviceName: process.env.OTEL_SERVICE_NAME
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } finally {
    span.end();
  }
}
