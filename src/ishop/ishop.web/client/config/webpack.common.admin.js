var _ = require('lodash');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');


var pathToAdmin = _.partial(helpers.src, 'admin');

module.exports = webpackMerge(commonConfig, {
  entry: {
    vendor: pathToAdmin('vendor.jsx'),
    admin: pathToAdmin('index.jsx')
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['admin', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/admin/index.ejs'
    })
  ]
});