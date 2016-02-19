import angular from 'angular';

import categoryGrid from './category-grid';
import productGrid from './product-grid';
import mainLayout from './main-layout';
import mainHeader from './main-header';
import sidebar from './sidebar';
import topMenu from './top-menu';
import pageHeading from './page-heading';
import breadcrumb from './breadcrumb';
import panel from './panel';

export default angular
    .module('admin.components', [])
    .component('categoryGrid', categoryGrid)
    .component('productGrid', productGrid)
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('sidebar', sidebar)
    .component('topMenu', topMenu)
    .component('pageHeading', pageHeading)
    .component('breadcrumb', breadcrumb)
    .component('panel', panel)
    .name;