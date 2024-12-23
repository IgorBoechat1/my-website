// next.config.js
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        distDir: 'build',
        permanent: true,
      },
    ];
  },
};
