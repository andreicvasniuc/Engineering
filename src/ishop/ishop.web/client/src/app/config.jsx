import homeTemplate from './controllers/home/template.html';
import collectionListTemplate from './controllers/collection-list/template.html';
import collectionTemplate from './controllers/collection/template.html';
import productListTemplate from './controllers/product-list/template.html';
import productTemplate from './controllers/product/template.html';

export default ($routeProvider, routeUrls, $translateProvider, languages, envProvider, $locationProvider) => {
  /* Routing */

  let routes = {
    home: {
      templateUrl: homeTemplate,
      controller: 'HomeController',
      controllerAs: '$ctrl'
    },
    collections: {
      templateUrl: collectionListTemplate,
      controller: 'CollectionListController',
      controllerAs: '$ctrl',
      resolve: {
          collectionResolver: (collectionService) => {
            return collectionService.dresses((response) => {
              return response.collections;
            });
          },
          titleTranslateId: () => "ALL_COLLECTIONS"
      }
    },
    accessories: {
      templateUrl: collectionListTemplate,
      controller: 'CollectionListController',
      controllerAs: '$ctrl',
      resolve: {
          collectionResolver: (collectionService) => {
            return collectionService.accessories((response) => {
              return response.collections;
            });
          },
          titleTranslateId: () => "ALL_ACCESSORIES"
      }
    },
    collection: {
      templateUrl: collectionTemplate,
      controller: 'CollectionController',
      controllerAs: '$ctrl'
    },
    // dresses: {
    //   templateUrl: productListTemplate,
    //   controller: 'ProductListController',
    //   controllerAs: '$ctrl',
    //   resolve: {
    //       productResolver: (productService) => {
    //         return productService.dresses((response) => {
    //           return response.products;
    //         });
    //       },
    //       titleTranslateId: () => "ALL_DRESSES"
    //   }
    // },
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
        routeUrls.collections,
        routes.collections)
    .when(
        routeUrls.accessories,
        routes.accessories)
    .when(
        routeUrls.collection,
        routes.collection)
    .when(
        routeUrls.product,
        routes.product)
    // .when(
    //     routeUrls.dresses,
    //     routes.dresses)
    // .when(
    //     routeUrls.dress,
    //     routes.product)
    // .when(
    //     routeUrls.accessory,
    //     routes.product)
    .otherwise(
        { redirectTo: routeUrls.home });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

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