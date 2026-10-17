import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/legitlab", destination: "/legitlab-academy", permanent: true }];
  },
};

export default nextConfig;
