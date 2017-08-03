import homeTemplate from './controllers/home/template.html';
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
      templateUrl: productTemplate,
      controller: 'ProductController',
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
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: '$ctrl',
      resolve: {
          productResolver: (productService) => {
            return productService.accessories((response) => {
              return response.products;
            });
          },
          titleTranslateId: () => "ALL_ACCESSORIES"
      }
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
        routeUrls.accessories,
        routes.accessories)
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