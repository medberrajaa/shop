/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND: process.env.BACKEND,
    }
};

export default {
    output: 'export',
    trailingSlash: true,
  };

