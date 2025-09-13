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
      }
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

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/NOME_DO_REPOSITORIO' : '',
  assetPrefix: isProd ? '/NOME_DO_REPOSITORIO/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
