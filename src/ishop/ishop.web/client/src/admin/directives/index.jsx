import angular from 'angular';

import showEmptyMessage from './show-empty-message';

export default angular
    .module('admin.directives', [])
    .directive('showEmptyMessage', showEmptyMessage)
    .name;