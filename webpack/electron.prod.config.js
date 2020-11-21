const merge = require('webpack-merge');

const baseConfig = require('./electron.config');

module.exports = merge.smart(baseConfig, {
  mode: 'production'
});
