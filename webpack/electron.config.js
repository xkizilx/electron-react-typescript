const path = require('path');
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const baseConfig = require('./base.config');

module.exports = merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: './electron/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {targets: 'maintained node versions'}
            ],
            '@babel/preset-typescript'
          ],
          plugins: [
            ['@babel/plugin-proposal-class-properties', {loose: true}]
          ]
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ['./electron/**/*']
    }),
    new NodemonPlugin({
      watch: path.resolve('./dist'),
      exec: "electron"
    })
  ]
});
