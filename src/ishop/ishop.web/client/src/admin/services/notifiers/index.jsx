import angular from 'angular';

import ProductNotifier from './productNotifier';
import ImageNotifier from './imageNotifier';
import LoginNotifier from './loginNotifier';

export default angular
    .module('admin.services.notifiers', [])
    .service('productNotifier', ProductNotifier)
    .service('imageNotifier', ImageNotifier)
    .service('loginNotifier', LoginNotifier)
    .name;