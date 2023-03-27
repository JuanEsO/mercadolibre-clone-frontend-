/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http2.mlstatic.com']
  },
  env: {
    API_URL: process.env.BACKEND_ENDPOINT || 'http://localhost:3001'
  }
}

module.exports = nextConfig
