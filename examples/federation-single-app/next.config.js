const nextConfig = {
  webpack(config, options) {
    config.plugins.push({
      name: "xxx",
      apply(compiler) {
        compiler.options.devtool = false;
      },
    });
    return config;
  },
};

module.exports = nextConfig;
