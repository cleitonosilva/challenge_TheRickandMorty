/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    path: "https://rickandmortyapi.com",
  }
}

module.exports = nextConfig
