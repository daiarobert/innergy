/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // already for Google profile
      "cdn.thewirecutter.com",
      "www.innergy.ro", // ✅ allow this new one
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Se aplică pentru toate rutele
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache pentru un an
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
