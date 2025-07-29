import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"], // Gunakan format modern
    minimumCacheTTL: 60, // cache TTL untuk image optimization
  },
  experimental: {
    optimizeCss: true, // Optimalkan CSS
  },
};

export default nextConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);