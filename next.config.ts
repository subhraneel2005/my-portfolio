import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  turbopack: {},
  
};

export default withContentlayer(nextConfig);
