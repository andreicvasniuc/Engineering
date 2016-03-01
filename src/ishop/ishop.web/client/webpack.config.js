var _ = require( 'lodash' );
var path = require( 'path' );
//var webpack = require( 'webpack' );

var pathTo = function() {
    return path.join( __dirname, 'src', path.join.apply( path, arguments ) );
}

var pathApp = _.partial( pathTo, 'app' );
var pathAdmin = _.partial( pathTo, 'admin' );

module.exports = {
  //context: pathApp(),
  entry: {
    admin: pathAdmin('index.jsx')//,
    //app:  pathApp('index.jsx')
  },
  output: {
    path: '../public/javascripts',
    //path: pathApp(),
    filename: '[name].js', // Template based on keys in entry above
    publicPath: '/'
  },
  resolve: {
      // you can now require('file') instead of require('file.js')
      extensions: [ '', '.js', '.jsx' ],
      alias: {
          //app sub aliases
          //app: pathApp( 'index.js' ),
          // controllers: pathApp( 'controllers' ),
          // components: pathApp( 'components' ),
          // services: pathApp( 'services' ),

          //assets sub aliases
          assets: pathTo( 'assets' )
      }
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, 
        loader: 'babel', query: { presets: ['es2015'] }, exclude: /node_modules/
      },
      {
        test: /\.html$/, 
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html', exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.styl$/, 
        loader: 'style!css!stylus', exclude: /node_modules/
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file' 
      },
      { 
        test: /\.(woff|woff2)($|\?)/, 
        loader:'url?prefix=font/&limit=5000' 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream' 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml' 
      }
    ]
  }
};