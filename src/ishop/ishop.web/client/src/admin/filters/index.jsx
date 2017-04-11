import angular from 'angular';

import trust from './trust';

export default angular
    .module('admin.filters', [])
    .filter('trust', trust)
    .name;