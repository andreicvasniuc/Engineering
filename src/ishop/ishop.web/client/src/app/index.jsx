'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';
import uiBootstrap from 'angular-ui-bootstrap';
import ngCookies from 'angular-cookies';
import pascalprechtTranslate from 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-loader-static-files';

import config from './config';

import controllers from './controllers';
import components from './components';
import services from './services';
import providers from './providers';
import constants from './constants';

export default angular
    .module('app', [
      ngRoute,
      controllers,
      components,
      services,
      providers,
      constants,
      uiBootstrap,
      ngCookies,
      pascalprechtTranslate
    ])
    .config(config);
