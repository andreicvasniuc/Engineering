import angular from 'angular';

import Router from './router';
import RequestService from './requestService';
import ProductService from './productService';

export default angular
    .module('app.services', [])
    .service('router', Router)
    .service('requestService', RequestService)
    .service('productService', ProductService)
    .name;