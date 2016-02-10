import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', home: '/home', products: '/products'})
    .name;