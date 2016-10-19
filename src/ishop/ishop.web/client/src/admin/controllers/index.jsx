import angular from 'angular';

import DashboardController from './dashboard';
import ProductController from './product';
import AuthenticationController from './authentication';

export default angular
    .module('admin.controllers', [])
    .controller('AuthenticationController', AuthenticationController)
    .controller('DashboardController', DashboardController)
    .controller('ProductController', ProductController)
    .name;