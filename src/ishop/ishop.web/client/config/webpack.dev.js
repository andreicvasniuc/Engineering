var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: '../../public/javascripts',
    //path: pathApp(),
    filename: '[name].js', // Template based on keys in entry above
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  devServer: {
    headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}
  }
});