'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import pascalprechtTranslate from 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-loader-static-files';

import config from './config';
import run from './run';

import controllers from './controllers';
import components from './components';
import directives from './directives';
import services from './services';
import providers from './providers';
import constants from './constants';

export default angular
    .module('app', [
      ngRoute,
      ngResource,
      controllers,
      components,
      directives,
      services,
      providers,
      constants,
      ngCookies,
      pascalprechtTranslate
    ])
    .config(config)
    .run(run);
