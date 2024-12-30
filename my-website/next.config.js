/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // TypeScript configuration for strict type checking
  typescript: {
    // Set to false if you want to bypass type checking during build
    ignoreBuildErrors: false,
  },

  // Webpack customization (optional)
  webpack(config, { isServer }) {
    // You can modify the Webpack config here if needed
    return config;
  },

  images: {
    domains: [],
  },

  // Redirects configuration
  async redirects() {
    return [
      {
        source: '/HomePage',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;