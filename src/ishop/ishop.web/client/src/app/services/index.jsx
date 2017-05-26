import angular from 'angular';

import resources from './resources';

import Router from './router';
import Translator from './translator';
import RequestService from './requestService';
import ProductService from './productService';
import TreeProcessor from './treeProcessor';
import DeviceDetector from './deviceDetector';
import MenuService from './menuService';
import CollectionService from './collectionService';
import LocaleService from './localeService';
import SizeService from './sizeService';
import ColorService from './colorService';

export default angular
    .module('app.services', [ resources ])
    .service('router', Router)
    .service('translator', Translator)
    .service('requestService', RequestService)
    .service('productService', ProductService)
    .service('treeProcessor', TreeProcessor)
    .service('deviceDetector', DeviceDetector)
    .service('menuService', MenuService)
    .service('collectionService', CollectionService)
    .service('localeService', LocaleService)
    .service('sizeService', SizeService)
    .service('colorService', ColorService)
    .name;