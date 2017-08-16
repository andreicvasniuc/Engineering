import homeTemplate from './controllers/home/template.html';
import productListTemplate from './controllers/product-list/template.html';
import productTemplate from './controllers/product/template.html';

export default ($routeProvider, routeUrls, $translateProvider, languages, envProvider) => {
  /* Routing */

  let routes = {
    home: {
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: '$ctrl'
    },
    dresses: {
      templateUrl: productListTemplate,
      controller: 'ProductListController',
      controllerAs: '$ctrl',
      resolve: {
          productResolver: (productService) => {
            return productService.dresses((response) => {
              return response.products;
            });
          },
          titleTranslateId: () => "ALL_DRESSES"
      }
    },
    accessories: {
      templateUrl: productListTemplate,
      controller: 'ProductListController',
      controllerAs: '$ctrl',
      resolve: {
          productResolver: (productService) => {
            return productService.accessories((response) => {
              return response.products;
            });
          },
          titleTranslateId: () => "ALL_ACCESSORIES"
      }
    },
    product: {
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: '$ctrl'
    }
  };

  $routeProvider
    .when(
        routeUrls.home,
        routes.home)
    .when(
        routeUrls.dresses,
        routes.dresses)
    .when(
        routeUrls.dress,
        routes.product)
    .when(
        routeUrls.accessories,
        routes.accessories)
    .when(
        routeUrls.accessory,
        routes.product)
    .otherwise(
        { redirectTo: routeUrls.home });

    /* i18n and l10n */

    $translateProvider
      .useStaticFilesLoader({
        prefix: `${envProvider.getApiUrl()}/i18n/app/`,
        suffix: '.json'
      })
      //.determinePreferredLanguage();
      .useSanitizeValueStrategy('escape')
      .useCookieStorage()
      .fallbackLanguage(languages.en)
      .preferredLanguage(languages.ua);
}