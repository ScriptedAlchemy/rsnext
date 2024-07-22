module.exports = {
  webpack: (config, options) => {
    config.optimization.minimize = false;
    config.optimization.moduleIds = 'named';
    config.optimization.chunkIds = 'named';
    console.log('config:',config);
    return config;  
  },
}