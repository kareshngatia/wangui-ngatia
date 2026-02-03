import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },

  // Redirect from old /pricing to new /solutions
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/pricing/:path*',
        destination: '/solutions/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;