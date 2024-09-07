/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

module.exports = nextConfig;
