'use strict';

angular.module('programi').controller('ProgramiController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    console.log('sad smo pokrenuli programi controller');

  }
]);
