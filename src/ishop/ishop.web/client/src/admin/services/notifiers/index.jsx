import angular from 'angular';

import ProductNotifier from './productNotifier';
import ImageNotifier from './imageNotifier';

export default angular
    .module('admin.services.notifiers', [])
    .service('productNotifier', ProductNotifier)
    .service('imageNotifier', ImageNotifier)
    .name;