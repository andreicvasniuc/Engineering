import angular from 'angular';

import Router from './router';
import Translator from './translator';
import RequestService from './requestService';
import ProductService from './productService';
import TreeProcessor from './treeProcessor';
import DeviceDetector from './deviceDetector';
import MobileMenuService from './mobileMenuService';
import MenuService from './menuService';

export default angular
    .module('app.services', [])
    .service('router', Router)
    .service('translator', Translator)
    .service('requestService', RequestService)
    .service('productService', ProductService)
    .service('treeProcessor', TreeProcessor)
    .service('deviceDetector', DeviceDetector)
    .service('mobileMenuService', MobileMenuService)
    .service('menuService', MenuService)
    .name;