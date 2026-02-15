/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["localhost", "deerwalk.edu.np", "54.164.230.35"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
      // {
      //   protocol:"http",
      //   hostname:'localhost',
      //   port:'1337',
      //   pathname:'*'
      // },
      // {
      //   protocol:'http',
      //   hostname:'deerwalk.edu.np',
      //   port:'',
      //   pathname:'/*'
      // }
    ],
  },
};

export default nextConfig;
