// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import { withContentlayer } from 'next-contentlayer2';
const nextConfig = {
    turbopack: {
      resolveAlias: {
        "contentlayer/generated": "./.contentlayer/generated"
      }
    }
  //  reactStrictMode: true, swcMinify: true
};

export default withContentlayer(nextConfig);