import angular from 'angular';

import ProductNotifier from './productNotifier';

export default angular
    .module('admin.services.notifiers', [])
    .service('productNotifier', ProductNotifier)
    .name;