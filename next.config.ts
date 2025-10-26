import type { NextConfig } from "next";


// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gi.yatta.moe',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'enka.network',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'api.hakush.in',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'genshinbuild.com',
        port: '',
        search: '',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/times',
        destination: '/teams',
        permanent: false,
      }
    ];
  }
};

export default nextConfig;
