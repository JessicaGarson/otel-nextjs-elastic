/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true
  },
  // This ensures proper compilation of the instrumentation file
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = ['@elastic/opentelemetry-node', ...config.externals];
    }
    return config;
  }
};

module.exports = nextConfig;