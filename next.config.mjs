/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  images: {
    unoptimized: !!process.env.STATIC_EXPORT,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
