import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporton-be-production-0747.up.railway.app",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;