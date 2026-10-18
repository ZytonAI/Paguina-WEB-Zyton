import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La ruleta de palomas es un HTML estatico en public/ruleta-palomas/.
  // No se enlaza desde la web ni va en el sitemap: solo se entra con el link directo.
  async rewrites() {
    return [{ source: "/ruleta-palomas", destination: "/ruleta-palomas/index.html" }];
  },
  async headers() {
    return [
      { source: "/ruleta-palomas", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      { source: "/ruleta-palomas/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
};

export default nextConfig;
