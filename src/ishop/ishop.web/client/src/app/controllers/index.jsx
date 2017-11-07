import angular from 'angular';

import HomeController from './home';
import CollectionListController from './collection-list';
import CollectionController from './collection';
import ProductListController from './product-list';
import ProductController from './product';

export default angular
    .module('app.controllers', [])
    .controller('HomeController', HomeController)
    .controller('ProductController', ProductController)
    .controller('ProductListController', ProductListController)
    .controller('CollectionListController', CollectionListController)
    .controller('CollectionController', CollectionController)
    .name;