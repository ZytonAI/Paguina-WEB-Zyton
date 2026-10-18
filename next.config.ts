import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La ruleta de palomas es un HTML estatico en public/ruleta-palomas/
  async rewrites() {
    return [{ source: "/ruleta-palomas", destination: "/ruleta-palomas/index.html" }];
  },
};

export default nextConfig;
