import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './app.html';
import { name as Home } from '../home/home';
class App {}

const name = 'app';

const app = angular.module(name, [
  angularMeteor,
  uiRouter,
  Home,
]);

app.component(name, {
  template,
  controllerAs: name,
  controller: App
});

app.config(config);

app.run(run);

function config($locationProvider, $urlRouterProvider){
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');
}

function run($rootScope, $state){
  'ngInject';

  $rootScope.$on('$stateChangeError', 
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('parties');
      }
    })
}

export default app;