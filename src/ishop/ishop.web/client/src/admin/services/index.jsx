import angular from 'angular';

import resources from './resources';
import notifiers from './notifiers';

import RouterService from './router';
import NavigatorService from './navigator';
import NotifierService from './notifier';
import RequestService from './requestService';
import ProductService from './productService';
import ImageService from './imageService';
import ModalAlert from './modalAlert';

export default angular
    .module('admin.services', [ resources, notifiers ])
    .service('router', RouterService)
    .service('navigator', NavigatorService)
    .service('notifier', NotifierService)
    .service('requestService', RequestService)
    .service('productService', ProductService)
    .service('imageService', ImageService)
    .service('modalAlert', ModalAlert)
    .name;