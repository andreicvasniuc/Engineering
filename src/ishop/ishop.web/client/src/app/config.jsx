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
    products: {
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
        routeUrls.products,
        routes.products)
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