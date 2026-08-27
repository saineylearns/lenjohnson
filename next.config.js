/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next doesn't walk up and pick a
  // stray parent lockfile as the root (which breaks PostCSS/Tailwind
  // resolution). This lived in a second next.config.ts that Next never read —
  // next.config.js wins the lookup — so it was silently doing nothing.
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
