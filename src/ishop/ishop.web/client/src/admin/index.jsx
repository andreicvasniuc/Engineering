'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import Flow from 'ng-flow/dist/ng-flow-standalone';
import uiGrid from 'angular-ui-grid/ui-grid';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularToastr from 'angular-toastr';

import routes from './routes';

import controllers from './controllers';
import components from './components';
import directives from './directives';
import services from './services';
import constants from './constants';

window.Flow = Flow;

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
      'ui.grid.autoResize',
      'flow'
    ])
    .config(routes);
