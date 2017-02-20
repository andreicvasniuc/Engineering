import angular from 'angular';

import mainLayout from './main-layout';
import mainHeader from './main-header';
import mainFooter from './main-footer';

export default angular
    .module('app.components', [])
    .component('mainLayout', mainLayout)
    .component('mainHeader', mainHeader)
    .component('mainFooter', mainFooter)
    .name;