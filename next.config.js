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
  // /get-involved used to be a primary nav destination. It no longer exists
  // and any external links (social posts, GoFundMe description, press
  // coverage) that pointed at it now dead-end. A 301 keeps that traffic and
  // satisfies the re-audit's P1 finding. /champions is the nearest equivalent
  // — it is where a visitor who wants to "get involved" should land.
  async redirects() {
    return [
      {
        source: '/get-involved',
        destination: '/champions',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
