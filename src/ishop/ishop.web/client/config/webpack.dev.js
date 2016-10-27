var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = 'http://localhost:3000';

module.exports = webpackMerge(commonConfig, {
  output: {
    path: '../../public/javascripts',
    //path: pathApp(),
    filename: '[name].js', // Template based on keys in entry above
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  devServer: {
    headers: {"Access-Control-Allow-Origin": API_URL}
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'API_URL': JSON.stringify(API_URL)
      }
    })
  ]
});