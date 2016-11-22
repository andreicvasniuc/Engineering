import loginTemplate from './controllers/login/template.html';
import dashboardTemplate from './controllers/dashboard/template.html';
import productTemplate from './controllers/product/template.html';

export default ($routeProvider, routeUrls, $httpProvider, jwtOptionsProvider, $translateProvider, languages) => {
  /* Routing */

  let routes = {
    login: {
      templateUrl: loginTemplate,
      controller: 'LoginController',
      controllerAs: '$ctrl'
    },
    dashboard: {
      templateUrl: dashboardTemplate,
      controller: 'DashboardController',
      controllerAs: '$ctrl',
      requiresLogin: true
    },
    products: {
      templateUrl: productTemplate,
      controller: 'ProductController',
      controllerAs: '$ctrl',
      requiresLogin: true
    }
  };

  let searchPath = '/sort/:sortBy/:sortByDirection/search/:searchText?';
  routeUrls.products_search = routeUrls.products + searchPath;

  $routeProvider
    .when(
        routeUrls.login,
        routes.login)
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

    /* JWT configuration */

    jwtOptionsProvider.config({
      tokenGetter: () => { return sessionStorage.getItem('auth_token'); },
      whiteListedDomains: ['localhost'],
      //unauthenticatedRedirectPath: routeUrls.login
      unauthenticatedRedirector: (router, loginService) => { 
        console.log('unauthenticatedRedirector');
        loginService.redirectToUrl = router.getCurrentUrl();
        router.goTo(routeUrls.login);
      }
    });
    $httpProvider.interceptors.push('jwtInterceptor');

    /* i18n and l10n */

    let translations = {
      HEADLINE: 'What an awesome module!',
      PARAGRAPH: 'Srsly!',
      NAMESPACE: {
        PARAGRAPH: 'And it comes with awesome features!'
      }
    };

    $translateProvider.translations(languages.en, translations)
    .preferredLanguage(languages.en);
}