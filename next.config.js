/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = ['@elastic/opentelemetry-node', ...config.externals];
    }
    return config;
  },
  env: {
    OTEL_SERVICE_NAME: process.env.OTEL_SERVICE_NAME
  }
};

module.exports = nextConfig;
