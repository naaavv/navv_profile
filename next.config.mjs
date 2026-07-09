/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// Only add static export when running on GitHub Actions (for GitHub Pages)
if (process.env.GITHUB_ACTIONS === 'true') {
  nextConfig.output = 'export'
}

export default nextConfig