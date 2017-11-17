var _ = require('lodash');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');


var pathToApp = _.partial(helpers.src, 'app');

module.exports = webpackMerge(commonConfig, {
  entry: {
    vendor: pathToApp('vendor.jsx'),
    app: pathToApp('index.jsx')
  },

  resolve: {
      alias: {
          css: helpers.src('assets/app/css'),
          images: helpers.src('assets/app/images'),
          js: helpers.src('assets/app/js')
      }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/app/index.ejs'
    })
  ]
});