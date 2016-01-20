'use strict'

import angular from 'angular';
import ngRoute from 'angular-route';

import routes from './routes';

import controllers from './controllers';

export default angular
    .module('app', [
      ngRoute,
      controllers
    ])
    .config(routes);



// ishopModule.component('helloWorld', {
//     template: `<h2>{{helloWorld.text}}</h2>`,
//     controller: function () {
//       this.text = 'hello world11';
//     }
// });