import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', login: '/login', dashboard: '/dashboard', products: '/products'})
    .name;