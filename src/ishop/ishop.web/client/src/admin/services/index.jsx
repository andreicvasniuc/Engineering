import angular from 'angular';

import RouterService from './router';
import NavigatorService from './navigator';
import ProductService from './productService';

export default angular
    .module('admin.services', [])
    .service('router', RouterService)
    .service('navigator', NavigatorService)
    .service('productService', ProductService)
    .name;