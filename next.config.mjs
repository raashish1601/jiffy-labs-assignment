/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hackathon/completed/',
        permanent: true, 
      },
      {
        source: '/hackathon',
        destination: '/hackathon/completed/',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
