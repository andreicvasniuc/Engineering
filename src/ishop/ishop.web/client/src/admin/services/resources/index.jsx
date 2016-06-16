import angular from 'angular';

import ProductResource from './productResource';

export default angular
    .module('admin.services.resources', [])
    .service('productResource', ProductResource)
    .name;