import angular from 'angular';

import Router from './router';
import Translator from './translator';
import RequestService from './requestService';
import ProductService from './productService';
import TreeProcessor from './treeProcessor';

export default angular
    .module('app.services', [])
    .service('router', Router)
    .service('translator', Translator)
    .service('requestService', RequestService)
    .service('productService', ProductService)
    .service('treeProcessor', TreeProcessor)
    .name;