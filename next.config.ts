import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,

  experimental: {
    // Untuk mengatasi error ukuran file metadata (8MB+)
    largePageDataBytes: 16 * 1024 * 1024, // 16MB
  },
    
  // Konfigurasi tambahan
  images: {
    unoptimized: true, // Jika pakai static export
  },
};

export default nextConfig;