'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider
      .state('authentication', {
        url: '/authentication',
        templateUrl: 'modules/users/client/views/authentication/authentication.client.view.html',
        redirectTo:'home'

      })
      .state('authentication.signin', {
        url: '/signin',
        templateUrl: 'modules/users/client/views/authentication/signin.client.view.html'
      })
      .state('authentication.signup', {
        url: '/signup',
        templateUrl: 'modules/users/client/views/authentication/signup.client.view.html'
      })
  }
]);
