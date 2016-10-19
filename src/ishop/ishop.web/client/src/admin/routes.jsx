import authenticationTemplate from './controllers/authentication/template.html';
import dashboardTemplate from './controllers/dashboard/template.html';
import productTemplate from './controllers/product/template.html';

export default ($routeProvider, routeUrls) => {
  let routes = {
    authentication: {
      templateUrl: authenticationTemplate,
      controller: 'AuthenticationController',
      controllerAs: '$ctrl'
    },
    dashboard: {
      templateUrl: dashboardTemplate,
      controller: 'DashboardController',
      controllerAs: '$ctrl'
    },
    products: {
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: '$ctrl'
    }
  };

  let searchPath = '/sort/:sortBy/:sortByDirection/search/:searchText?';
  routeUrls.products_search = routeUrls.products + searchPath;

  $routeProvider
    .when(
        routeUrls.authentication,
        routes.authentication)
    .when(
        routeUrls.index,
        routes.dashboard)
    .when(
        routeUrls.dashboard,
        routes.dashboard)
    .when(
        routeUrls.products,
        routes.products)
    .when(
        routeUrls.products_search,
        routes.products)
    .otherwise(
        { redirectTo: routeUrls.index });
}