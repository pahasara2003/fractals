/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export mode
    images: { unoptimized: true }, // if you use next/image
    trailingSlash: true, // GitHub Pages prefers this
  };
  
  module.exports = nextConfig;
  