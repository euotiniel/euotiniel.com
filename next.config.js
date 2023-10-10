/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suas configurações Next.js aqui, se necessário
};

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/, // Adicione as extensões de arquivo MDX que deseja suportar
});

module.exports = withMDX(nextConfig);

