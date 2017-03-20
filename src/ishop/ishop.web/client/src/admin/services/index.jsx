import angular from 'angular';

import resources from './resources';
import notifiers from './notifiers';

import RouterService from './router';
import NavigatorService from './navigator';
import NotifierService from './notifier';
import ModalAlert from './modalAlert';
import RequestService from './requestService';
import CollectionService from './collectionService';
import ProductService from './productService';
import ImageService from './imageService';
import LoginService from './loginService';

export default angular
    .module('admin.services', [ resources, notifiers ])
    .service('router', RouterService)
    .service('navigator', NavigatorService)
    .service('notifier', NotifierService)
    .service('modalAlert', ModalAlert)
    .service('requestService', RequestService)
    .service('collectionService', CollectionService)
    .service('productService', ProductService)
    .service('imageService', ImageService)
    .service('loginService', LoginService)
    .name;