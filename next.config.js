/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint:{
    ignoreDuringBuilds:true,
  },
  images:{
    loader:"akamai",
    path:"",
  }

  ,
  swcMinify: true,
}

module.exports = nextConfig