import type { NextConfig } from 'next';

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:8000';
const apiPrefix = '/api/v1';
const apiUrl = new URL(apiBaseUrl);

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: apiUrl.protocol.replace(':', '') as 'http' | 'https',
        hostname: apiUrl.hostname,
        port: apiUrl.port || undefined,
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `${apiPrefix}/:path*`,
        destination: `${apiBaseUrl}${apiPrefix}/:path*`,
      },
    ];
  },
  webpack: (config) => {
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
