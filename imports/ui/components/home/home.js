import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


import template from './home.html';

class Home {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
  }

  
}

const name = 'home';

// Create the angular module
const homeComp = angular.module(name, [
  angularMeteor,
  uiRouter
]);

homeComp.component(name, {
  template,
  controllerAs: name,
  controller: Home
});

homeComp.config(config);

function config($stateProvider){
  'ngInject';

  $stateProvider.state('home', {
    url: '/home',
    template: '<home></home>'
  });
}

export default homeComp;