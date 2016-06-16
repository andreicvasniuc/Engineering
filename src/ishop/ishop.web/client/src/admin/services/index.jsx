import angular from 'angular';

import resources from './resources';

import RouterService from './router';
import NavigatorService from './navigator';
import ProductService from './productService';

export default angular
    .module('admin.services', [ resources ])
    .service('router', RouterService)
    .service('navigator', NavigatorService)
    .service('productService', ProductService)
    .name;