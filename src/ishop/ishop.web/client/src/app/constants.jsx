import angular from 'angular';

export default angular
    .module('app.constants', [])
    .constant('routeUrls', { index: '/', home: '/home', products: '/products'})
    .name;