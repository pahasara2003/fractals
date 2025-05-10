/** @type {import('next').NextConfig} */
const nextConfig = {
 
  output: 'export',
  basePath: '/fractals',
  assetPrefix: '/fractals/',
  trailingSlash: true,
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