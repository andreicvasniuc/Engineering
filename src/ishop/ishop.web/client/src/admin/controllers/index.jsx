import angular from 'angular';

import DashboardController from './dashboard';
import ProductController from './product';

export default angular
    .module('admin.controllers', [])
    .controller('DashboardController', DashboardController)
    .controller('ProductController', ProductController)
    .name;