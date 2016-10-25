import angular from 'angular';

import DashboardController from './dashboard';
import ProductController from './product';
import LoginController from './login';

export default angular
    .module('admin.controllers', [])
    .controller('LoginController', LoginController)
    .controller('DashboardController', DashboardController)
    .controller('ProductController', ProductController)
    .name;