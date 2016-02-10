import angular from 'angular';

import HomeController from './home';
import ProductController from './product';

export default angular
    .module('admin.controllers', [])
    .controller('HomeController', HomeController)
    .controller('ProductController', ProductController)
    .name;