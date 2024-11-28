/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
        missingSuspenseWithCSRBailout: false
      },
};

module.exports = nextConfig;
