import angular from 'angular';

export default angular
    .module('app.constants', [])
    .constant('routeUrls', { 
        home: '/', 
        collections: '/collections', 
        collection: '/collection/:id',
        dresses: '/dresses', 
        dress: '/dress/:id', 
        accessories: '/accessories', 
        accessory: '/accessory/:id', 
        contact: '/contact' 
      })
    .constant('languages', { en: 'en', ru: 'ru', ua: 'ua', ro: 'ro' })
    .name;