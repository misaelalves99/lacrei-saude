// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // habilita suporte a styled-components
  },
  images: {
    domains: ['localhost', 'images.unsplash.com'], // adicione domínios usados
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
