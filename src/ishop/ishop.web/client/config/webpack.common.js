var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  resolve: {
      extensions: [ '', '.js', '.jsx' ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/, 
        loader: 'babel', 
        query: { presets: ['es2015'] }, 
        exclude: /node_modules/
      },
      {
        test: /\.html$/, 
        loader: 'ngtemplate?relativeTo=' + (helpers.src()) + '/!html', 
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.styl$/, 
        loader: 'style!css!stylus', 
        exclude: /node_modules/
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?(\?\-\w+)?$/, 
        loader: 'file' 
      },
      { 
        test: /\.(woff|woff2)($|\?)/, 
        loader:'url?prefix=font/&limit=5000' 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?(\?\-\w+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream' 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?(\?\-\w+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml' 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};