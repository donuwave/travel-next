import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
