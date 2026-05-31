import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/our-story',   destination: '/about',      permanent: true },
      { source: '/the-farm',    destination: '/our-farm',   permanent: true },
      { source: '/our-products',destination: '/production', permanent: true },
      { source: '/governance',  destination: '/about',      permanent: true },
    ];
  },
};

export default nextConfig;
