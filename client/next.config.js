/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ubisoft-avatars.akamaized.net",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "keozzbjnmtfzncbeoaxc.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
