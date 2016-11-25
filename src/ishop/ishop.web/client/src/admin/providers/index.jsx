import angular from 'angular';

import EnvProvider from './envProvider';

export default angular
    .module('admin.providers', [])
    .provider('env', EnvProvider)
    .name;