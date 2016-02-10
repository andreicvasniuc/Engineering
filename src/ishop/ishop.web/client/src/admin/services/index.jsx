import angular from 'angular';

import ProductService from './productService';

export default angular
    .module('admin.services', [])
    .service('productService', ProductService)
    .name;