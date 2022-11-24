/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint:{
    ignoreDuringBuilds:true,
  },
 
  
  swcMinify: true,
}

module.exports = nextConfig