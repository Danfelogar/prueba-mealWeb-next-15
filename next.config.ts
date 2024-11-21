import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // Esto es necesario si estás utilizando imágenes optimizadas por Next.js
    domains: ["www.themealdb.com"],
  },
};

export default nextConfig;
