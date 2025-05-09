/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export mode
    images: { unoptimized: true }, // if you use next/image
    trailingSlash: true, // GitHub Pages prefers this
    basePath: "/<REPO_NAME>", // Replace <REPO_NAME> with your repo name
  };
  
  module.exports = nextConfig;
  