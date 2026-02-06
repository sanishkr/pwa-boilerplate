/** @type {import('next').NextConfig} */
import withTwin from './withTwin.mjs';

const nextConfig = {
  webpack: config => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

export default withTwin(nextConfig);
