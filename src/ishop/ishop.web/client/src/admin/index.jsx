'use strict'

import bootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import uiGridCss from 'angular-ui-grid/ui-grid.css';
import toastrCss from 'angular-toastr/dist/angular-toastr.css';
import adminCss from 'assets/css/admin.css';
import fontAwesomeCss from 'assets/css/font-awesome.css';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import uiGrid from 'angular-ui-grid/ui-grid';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularToastr from 'angular-toastr';
import _ from 'lodash';
//import bootstrap from 'bootstrap';

import routes from './routes';

import controllers from './controllers';
import components from './components';
import directives from './directives';
import services from './services';
import constants from './constants';

export default angular
    .module('admin', [
      ngRoute,
      ngResource,
      controllers,
      components,
      directives,
      services,
      constants,
      angularUIBootstrap,
      angularToastr,
      'ui.grid', 
      'ui.grid.infiniteScroll', 
      'ui.grid.autoResize'
    ])
    .config(routes);
