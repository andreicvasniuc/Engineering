'use strict'

import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import adminCss from 'assets/css/admin.css';
import fontAwesomeCss from 'assets/css/font-awesome.css';

import angular from 'angular';
import ngRoute from 'angular-route';
import _ from 'lodash';
//import bootstrap from 'bootstrap';

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
