/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Add WASM file loader
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    return config;
  },
  output: 'export',
  // If your GitHub Pages site will be hosted at a subdirectory (e.g., username.github.io/repo-name)
  // Set the basePath to match your repository name
  // basePath: '/your-repo-name',
  // For custom domain, you can remove the basePath
  
  // If you're using images, you might need this
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig