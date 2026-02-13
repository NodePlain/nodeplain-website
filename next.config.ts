import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimize React in production
  reactStrictMode: true,

  // Use Turbopack (default in Next.js 16)
  // Bundle analyzer will need a Turbopack-compatible solution
};

export default nextConfig;
