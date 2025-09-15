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
  },
  output: "export", // para gerar site estático
  basePath: "/genshin-nextjs", // substitua pelo nome do seu repo
  assetPrefix: "/genshin-nextjs/", // garante que assets e imagens funcionem
};

export default nextConfig;
