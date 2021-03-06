import angular from 'angular';

import mainLayout from './main-layout';
import mainHeader from './main-header';
import mainFooter from './main-footer';
import mainContainer from './main-container';
import languageSelector from './language-selector';
import mainMenu from './main-menu';
import mobileMenu from './mobile-menu';
import carousel from './carousel';
import topProducts from './top-products';
import loadingIcon from './loading-icon';
import items from './items';
import itemDetails from './item-details';

export default angular
    .module('app.components', [])
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('mainFooter', mainFooter)
    .component('mainContainer', mainContainer)
    .component('languageSelector', languageSelector)
    .component('mainMenu', mainMenu)
    .component('mobileMenu', mobileMenu)
    .component('carousel', carousel)
    .component('topProducts', topProducts)
    .component('loadingIcon', loadingIcon)
    .component('items', items)
    .component('itemDetails', itemDetails)
    .name;