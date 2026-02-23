/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable the experimental React Compiler
  // move reactCompiler to top-level per Next.js warning
  reactCompiler: true,

  // ✅ Configure external image domains or patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
