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

    $translateProvider
      .translations(languages.en, {
        LOGIN: 'Login',
        REMEMBER_ME: 'Remember Me',
        SIGN_IN: 'Sign In',
        EMAIL: 'E-mail',
        PASSWORD: 'Password'
      })
      .translations(languages.ru, {
        LOGIN: 'Войти',
        REMEMBER_ME: 'Запомнить',
        SIGN_IN: 'Вход',
        EMAIL: 'Эл. адрес',
        PASSWORD: 'Пароль'
      })
      .translations(languages.ua, {
        LOGIN: 'Увійти',
        REMEMBER_ME: 'Запам’ятати мене',
        SIGN_IN: 'Вхiд',
        EMAIL: 'Електронна пошта',
        PASSWORD: 'Пароль'
      })
      .translations(languages.ro, {
        LOGIN: 'Intră',
        REMEMBER_ME: 'Ține-mă minte',
        SIGN_IN: 'Intrare pe site',
        EMAIL: 'E-mail',
        PASSWORD: 'Parola'
      })
      //.determinePreferredLanguage();
      .useCookieStorage()
      .fallbackLanguage(languages.en)
      .preferredLanguage(languages.ua);
}