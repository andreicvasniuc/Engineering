import angular from 'angular';

import showEmptyMessage from './show-empty-message';
import loadingSpinner from './loading-spinner';

export default angular
    .module('admin.directives', [])
    .directive('showEmptyMessage', showEmptyMessage)
    .directive('loadingSpinner', loadingSpinner)
    .name;