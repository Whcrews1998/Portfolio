/** @type {import('next').NextConfig} */
return {
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: "common",
        chunks: "all",
      },
    };

    return config;
  },
};
