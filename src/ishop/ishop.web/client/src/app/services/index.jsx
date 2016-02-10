import angular from 'angular';

import ProductService from './productService';

export default angular
    .module('app.services', [])
    .service('productService', ProductService)
    .name;