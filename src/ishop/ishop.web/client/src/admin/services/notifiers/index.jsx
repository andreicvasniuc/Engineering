import angular from 'angular';

import CollectionNotifier from './collectionNotifier';
import ProductNotifier from './productNotifier';
import ImageNotifier from './imageNotifier';
import LoginNotifier from './loginNotifier';

export default angular
    .module('admin.services.notifiers', [])
    .service('collectionNotifier', CollectionNotifier)
    .service('productNotifier', ProductNotifier)
    .service('imageNotifier', ImageNotifier)
    .service('loginNotifier', LoginNotifier)
    .name;