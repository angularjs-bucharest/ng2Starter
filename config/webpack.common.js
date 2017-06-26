const webpack = require('webpack');
const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const { DefinePlugin, LoaderOptionsPlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.json'],
    alias: {}
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills', 'manifest']
    }),
  ]
}
