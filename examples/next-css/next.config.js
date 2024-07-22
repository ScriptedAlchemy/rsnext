const { StatsWriterPlugin } = require('webpack-stats-plugin')
module.exports = {
    webpack: (config, options) => {
      config.optimization.minimize = false;
      config.optimization.moduleIds = 'named';
      config.optimization.chunkIds = 'named';
      config.stats = {all:true};
      config.plugins.push(new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          all:true
        }
      }))
      return config;  
    },
}