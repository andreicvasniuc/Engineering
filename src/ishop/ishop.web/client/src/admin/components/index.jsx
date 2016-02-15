import angular from 'angular';

import categoryGrid from './category-grid';
import productGrid from './product-grid';

export default angular
    .module('admin.components', [])
    .component('categoryGrid', categoryGrid)
    .component('productGrid', productGrid)
    .name;