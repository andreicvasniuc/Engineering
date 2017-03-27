import angular from 'angular';

import DashboardController from './dashboard';
import CollectionController from './collection';
import CollectionProductController from './collection-product';
import ProductController from './product';
import LoginController from './login';

export default angular
    .module('admin.controllers', [])
    .controller('LoginController', LoginController)
    .controller('DashboardController', DashboardController)
    .controller('CollectionController', CollectionController)
    .controller('CollectionProductController', CollectionProductController)
    .controller('ProductController', ProductController)
    .name;