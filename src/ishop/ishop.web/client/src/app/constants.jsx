import angular from 'angular';

export default angular
    .module('app.constants', [])
    .constant('routeUrls', { home: '/', dresses: '/dresses', accessories: '/accessories', contact: '/contact' })
    .constant('languages', { en: 'en', ru: 'ru', ua: 'ua', ro: 'ro' })
    .name;