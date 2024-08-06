/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? "commercial-web" : '',
  output: "export",
};

export default nextConfig;
