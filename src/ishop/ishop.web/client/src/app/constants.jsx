import angular from 'angular';

export default angular
    .module('app.constants', [])
    .constant('routeUrls', { home: '/', dresses: '/dresses', dress: '/dresses/:id', accessories: '/accessories', accessory: '/accessories/:id', contact: '/contact' })
    .constant('languages', { en: 'en', ru: 'ru', ua: 'ua', ro: 'ro' })
    .name;