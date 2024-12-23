/** @type {import('next').NextConfig} */
module.exports = {
    // Enable React Strict Mode to help catch potential issues in development
    reactStrictMode: true,
  
    // SWC minification (default in Next.js)
    swcMinify: true,
  
    // Experimental features
    experimental: {
      appDir: true, // Enable appDir if you're using the new app directory feature
    },
  
    
  
    // TypeScript configuration for strict type checking (if you're using TypeScript)
    typescript: {
      // Set to false if you want to bypass type checking during build
      ignoreBuildErrors: false,
    },
  
    // Webpack customization (optional)
    webpack(config, { isServer }) {
      // You can modify the Webpack config here if needed
      return config;
    },
  
  
  
    // Optional: Redirects and rewrites
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
  