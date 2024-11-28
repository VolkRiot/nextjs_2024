/** @type {import('next').NextConfig} */
const nextConfig = {
    missingSuspenseWithCSRBailout: false,
    experimental: {
        ppr: 'incremental',
      },
};

module.exports = nextConfig;
