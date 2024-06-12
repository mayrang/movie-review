/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["localhost", "image.tmdb.org"],
  },
};

export default nextConfig;
