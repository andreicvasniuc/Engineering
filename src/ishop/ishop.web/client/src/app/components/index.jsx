import angular from 'angular';

import mainLayout from './main-layout';
import mainHeader from './main-header';
import mainFooter from './main-footer';
import languageSelector from './language-selector';
import mainMenu from './main-menu';
import mobileMenu from './mobile-menu';
import carousel from './carousel';
import topProducts from './top-products';
import loadingIcon from './loading-icon';

export default angular
    .module('app.components', [])
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('mainFooter', mainFooter)
    .component('languageSelector', languageSelector)
    .component('mainMenu', mainMenu)
    .component('mobileMenu', mobileMenu)
    .component('carousel', carousel)
    .component('topProducts', topProducts)
    .component('loadingIcon', loadingIcon)
    .name;