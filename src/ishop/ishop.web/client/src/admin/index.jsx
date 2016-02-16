'use strict'

import bootstrapcss from 'bootstrap/dist/css/bootstrap.css';
import admincss from 'assets/admin.styl';

import angular from 'angular';
import ngRoute from 'angular-route';
//import angular from 'angular';

import routes from './routes';

import controllers from './controllers';
import components from './components';
import services from './services';
import constants from './constants';

export default angular
    .module('admin', [
      ngRoute,
      controllers,
      components,
      services,
      constants
    ])
    .config(routes);
