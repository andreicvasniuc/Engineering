// var _ = require('lodash');
var path = require('path');

// var pathTo = function() {
//     return path.join( __dirname, '../src', path.join.apply( path, arguments ) );
// };

// exports.pathTo = pathTo;

// var pathApp = _.partial(pathTo, 'app');
// var pathAdmin = _.partial(pathTo, 'admin');

var pathTo = function(_path) {
    _path = path.resolve(__dirname, _path);

    return function (args) {
      args = Array.prototype.slice.call(arguments, 0);
      return path.join.apply(path, [_path].concat(args));
    };
};

exports.root = pathTo('..');
exports.src = pathTo('../src');