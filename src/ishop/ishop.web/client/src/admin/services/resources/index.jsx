import angular from 'angular';

import ProductResource from './productResource';
import ImageResource from './imageResource';

export default angular
    .module('admin.services.resources', [])
    .service('productResource', ProductResource)
    .service('imageResource', ImageResource)
    .name;