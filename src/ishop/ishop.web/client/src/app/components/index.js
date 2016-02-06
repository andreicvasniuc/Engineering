import angular from 'angular';

import productGrid from './product-grid';

export default angular
    .module('app.components', [])
    .component('productGrid', productGrid)
    .name;