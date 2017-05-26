import angular from 'angular';

import CollectionResource from './collectionResource';
import ProductResource from './productResource';
import SizeResource from './sizeResource';
import ColorResource from './colorResource';

export default angular
    .module('app.services.resources', [])
    .service('collectionResource', CollectionResource)
    .service('productResource', ProductResource)
    .service('sizeResource', SizeResource)
    .service('colorResource', ColorResource)
    .name;