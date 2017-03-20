import angular from 'angular';

import DashboardController from './dashboard';
import CollectionController from './collection';
import ProductController from './product';
import LoginController from './login';

export default angular
    .module('admin.controllers', [])
    .controller('LoginController', LoginController)
    .controller('DashboardController', DashboardController)
    .controller('ProductController', ProductController)
    .controller('CollectionController', CollectionController)
    .name;