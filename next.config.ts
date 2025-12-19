import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    // Allow images from these domains if needed
    remotePatterns: [
      // Add external image domains here if needed
      // { protocol: "https", hostname: "example.com" },
    ],
  },

  // Strict mode for catching bugs early
  reactStrictMode: true,

  // Trailing slashes to match existing URLs (optional)
  // trailingSlash: true,

  // Headers are in netlify.toml, but can also be here
  // async headers() { return []; },
};

export default nextConfig;
