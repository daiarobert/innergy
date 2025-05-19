/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // already for Google profile
      "cdn.thewirecutter.com", // ✅ allow this new one
    ],
  },
};

module.exports = nextConfig;
