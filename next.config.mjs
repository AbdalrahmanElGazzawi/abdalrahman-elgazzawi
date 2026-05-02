/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["lucide-react"] },
  typescript: { ignoreBuildErrors: true },
  eslint:     { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: "/work/falcons", destination: "/case-studies/team-falcons-commercial-stack", permanent: true },
    ];
  },
};
export default nextConfig;
