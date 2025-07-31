import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Enable hostname verification for images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
