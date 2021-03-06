import homeTemplate from 'controllers/home/template.html';
import productTemplate from 'controllers/product/template.html';

let routeUrls = {
    index: '/',
    home: '/home',
    products: '/products'
};

export default function ($routeProvider) {
  let routes = {
    home: {
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: 'model'
    },
    products: {
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: 'model'
    }
  };

  $routeProvider
    .when(
        routeUrls.index,
        routes.home)
    .when(
        routeUrls.home,
        routes.home)
    .when(
        routeUrls.products,
        routes.products)
    .otherwise(
        { redirectTo: routeUrls.index });
}