import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', dashboard: '/dashboard', products: '/products'})
    .name;