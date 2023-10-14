/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:lang/client/api/:slug*",
        destination: `${
          process.env.NEXT_PUBLIC_HOST || "http://localhost:8000"
        }/api/:slug*`,
      },
    ];
  },
  output: "standalone",
};

module.exports = nextConfig;
