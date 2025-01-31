export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js with OpenTelemetry</h1>
        <p>This page is instrumented with OpenTelemetry!</p>
      </div>
    </main>
  );
}