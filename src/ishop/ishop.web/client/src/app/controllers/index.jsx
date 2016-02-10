import angular from 'angular';

import HomeController from './home';
import ProductController from './product';

export default angular
    .module('app.controllers', [])
    .controller('HomeController', HomeController)
    .controller('ProductController', ProductController)
    .name;