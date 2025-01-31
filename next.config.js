/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = ['@elastic/opentelemetry-node', ...config.externals];
    }
    return config;
  }
};

module.exports = nextConfig;
