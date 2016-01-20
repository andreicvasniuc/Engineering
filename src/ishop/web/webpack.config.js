var _ = require( 'lodash' );
var path = require( 'path' );
//var webpack = require( 'webpack' );

var pathTo = function() {
    return path.join( __dirname, 'src', path.join.apply( path, arguments ) );
}

var pathApp = _.partial( pathTo, 'app' );
var pathAdmin = _.partial( pathTo, 'admin' );

console.log(pathApp);

module.exports = {
  //context: pathApp(),
  entry: {
    app:  pathApp('index.js')//,
    //admin: pathAdmin('index.js')
  },
  output: {
    path: pathApp(),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
      extensions: [ '', '.js' ],
      alias: {
          //app sub aliases
          //app: pathApp( 'index.js' ),
          controllers: pathApp( 'controllers' ),
          components: pathApp( 'components' ),
          services: pathApp( 'services' ),

          //assets sub aliases
          assets: pathTo( 'assets' )
      }
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015'] }
      },
      {
        test: /\.html$/, 
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src/app')) + '/!html'
      }
    ]
  }
};