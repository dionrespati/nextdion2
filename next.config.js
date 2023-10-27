/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
};

module.exports = nextConfig;
