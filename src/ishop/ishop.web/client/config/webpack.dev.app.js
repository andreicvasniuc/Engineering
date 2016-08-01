var _ = require('lodash');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');


var pathToAdmin = _.partial(helpers.src, 'admin');

module.exports = webpackMerge(commonConfig, {
  entry: {
    admin: pathToAdmin('index.jsx')//,
    //app:  pathApp('index.jsx')
  },

  output: {
    path: '../../public/javascripts',
    //path: pathApp(),
    filename: '[name].js', // Template based on keys in entry above
    publicPath: '/'
  },

  resolve: {
      alias: {
          assets: helpers.src('assets')
      }
  },

  devServer: {
    headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/admin/index.ejs'
    })
  ]
});