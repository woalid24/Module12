/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async headers() {
    return [
      {
        source: "/:patch*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [{ hostname: "roar.media" }],
  },
};

module.exports = nextConfig;
