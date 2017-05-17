import angular from 'angular';

import CollectionResource from './collectionResource';
import ProductResource from './productResource';
import ImageResource from './imageResource';
import SizeResource from './sizeResource';
import ColorResource from './colorResource';

export default angular
    .module('admin.services.resources', [])
    .service('collectionResource', CollectionResource)
    .service('productResource', ProductResource)
    .service('imageResource', ImageResource)
    .service('sizeResource', SizeResource)
    .service('colorResource', ColorResource)
    .name;