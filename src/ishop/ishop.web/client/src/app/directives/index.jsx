import angular from 'angular';

import outsideClick from './outside-click';

export default angular
    .module('app.directives', [])
    .directive('outsideClick', outsideClick)
    .name;