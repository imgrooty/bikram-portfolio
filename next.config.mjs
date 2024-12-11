/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignore ESLint during production builds
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
