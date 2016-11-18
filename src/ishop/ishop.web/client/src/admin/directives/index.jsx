import angular from 'angular';

import showEmptyMessage from './show-empty-message';
import loadingSpinner from './loading-spinner';
import focusMe from './focus-me';
import enterPressed from './enter-pressed';

export default angular
    .module('admin.directives', [])
    .directive('showEmptyMessage', showEmptyMessage)
    .directive('loadingSpinner', loadingSpinner)
    .directive('focusMe', focusMe)
    .directive('enterPressed', enterPressed)
    .name;