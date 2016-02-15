import homeTemplate from './controllers/home/template.html';
import productTemplate from './controllers/product/template.html';

export default ($routeProvider, routeUrls) => {
  let routes = {
    home: {
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: '$ctrl'
    },
    products: {
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: '$ctrl'
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