import angular from 'angular';

import RouterService from './router';
import ProductService from './productService';

export default angular
    .module('admin.services', [])
    .service('router', RouterService)
    .service('productService', ProductService)
    .name;