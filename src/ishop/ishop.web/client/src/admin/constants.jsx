import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', dashboard: '/dashboard', products: '/products'})
    .constant('sortByDirectionEnum', { ascending: 0, descending: 1 })
    .name;