import angular from 'angular';

export default angular
    .module('admin.constants', [])
    .constant('routeUrls', { index: '/', login: '/login', dashboard: '/dashboard', products: '/products'})
    .constant('languages', { en: 'en', ru: 'ru', ua: 'ua', ro: 'ro' })
    .name;