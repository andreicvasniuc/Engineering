import angular from 'angular';

import resources from './resources';
import notifiers from './notifiers';

import RouterService from './router';
import NavigatorService from './navigator';
import NotifierService from './notifier';
import ProductService from './productService';

export default angular
    .module('admin.services', [ resources, notifiers ])
    .service('router', RouterService)
    .service('navigator', NavigatorService)
    .service('notifier', NotifierService)
    .service('productService', ProductService)
    .name;