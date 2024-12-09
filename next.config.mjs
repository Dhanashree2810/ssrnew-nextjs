

export const reactStrictMode = true;
export const images = {
  domains: ['api2-diw.wazl.in','diw.wazl.in'],
};

// or

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['api2-diw.wazl.in','diw.wazl.in','asset.wazl.in'],
  },
};

export default nextConfig;
