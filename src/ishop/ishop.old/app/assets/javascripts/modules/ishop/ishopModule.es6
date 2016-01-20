import { RequestService } from 'modules/ishop/services/RequestService';
import { ProductService } from 'modules/ishop/services/ProductService';

import { HomeController } from 'modules/ishop/controllers/HomeController';
import { ProductController } from 'modules/ishop/controllers/ProductController';

import { CounterComponent } from 'modules/ishop/components/CounterComponent';

//import homeTemplate from 'modules/ishop/templates/home.html';

//console.log(RequestService);

let ishopModule = angular.module('ishop', ['ngRoute', 'ngResource'])
    .service('productService', ProductService)
    .service('requestService', RequestService)
    .component('counter', CounterComponent);

let routeUrls = {
    index: '/',
    home: '/home',
    products: '/products'
};

const modulePath = 'assets/modules/ishop';
const templatesPath = `${modulePath}/templates`;

ishopModule.config(['$routeProvider', function($routeProvider) {

    var templateUrls = {
        home: `${templatesPath}/home.html`,
        products: `${templatesPath}/product/index.html`
    };


    var routes = {
        home: {
            templateUrl: templateUrls.home,
            controller: HomeController,
            controllerAs: 'model'
        },
        products: {
            templateUrl: templateUrls.products,
            controller: ProductController,
            controllerAs: 'model'
        }
    };

    $routeProvider
        .when(
            routeUrls.home,
            routes.home)
        .when(
            routeUrls.products,
            routes.products)
        .when(
            routeUrls.index,
            { redirectTo: routeUrls.home })
        .otherwise(
            { redirectTo: routeUrls.index });
}])

.run(function ($rootScope) {
});
