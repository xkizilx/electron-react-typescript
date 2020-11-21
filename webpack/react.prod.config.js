const merge = require('webpack-merge');

const baseConfig = require('./react.config');

module.exports = merge.smart(baseConfig, {
  mode: 'production'
});
