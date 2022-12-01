/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
    },
  },
  experimental: {
    appDir: true, // Required:
  },
}

module.exports = nextConfig
