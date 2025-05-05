// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  experimental: {
    appDir: true, // Enables the app directory feature
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL, // Expose only non-sensitive environment variables
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID, // Not recommended to expose secret!
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
};

export default nextConfig;
