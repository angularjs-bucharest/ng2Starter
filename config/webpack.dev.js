const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8381;

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  devtool: 'source-map',
  devServer: {
    port: PORT,
    host: HOST,
    inline: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
});
