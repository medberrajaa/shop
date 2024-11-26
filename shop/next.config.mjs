/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND: process.env.BACKEND, // pulls from .env file
    }
};

export default nextConfig;
