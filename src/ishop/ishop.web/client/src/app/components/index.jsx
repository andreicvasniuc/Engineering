import angular from 'angular';

import productView from './product-view';

export default angular
    .module('app.components', [])
    .component('productView', productView)
    .name;