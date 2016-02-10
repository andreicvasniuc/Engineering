'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';

import routes from './routes';

import controllers from './controllers';
import components from './components';
import services from './services';
import constants from './constants';

export default angular
    .module('app', [
      ngRoute,
      controllers,
      components,
      services,
      constants
    ])
    .config(routes);
