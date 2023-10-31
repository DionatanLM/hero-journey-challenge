/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
    domains: ['cdn.jsdelivr.net']
  }
}

module.exports = nextConfig
