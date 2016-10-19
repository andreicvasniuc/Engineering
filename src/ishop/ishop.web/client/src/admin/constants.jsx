import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', authentication: '/authentication', dashboard: '/dashboard', products: '/products'})
    .name;