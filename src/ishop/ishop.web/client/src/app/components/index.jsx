import angular from 'angular';

import mainLayout from './main-layout';
import mainHeader from './main-header';
import mainFooter from './main-footer';
import languageSelector from './language-selector';
import navigation from './navigation';

export default angular
    .module('app.components', [])
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('mainFooter', mainFooter)
    .component('languageSelector', languageSelector)
    .component('navigation', navigation)
    .name;