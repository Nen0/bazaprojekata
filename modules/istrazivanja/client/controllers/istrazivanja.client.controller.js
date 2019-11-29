'use strict';

angular.module('istrazivanja').controller('ProgramiController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
]);

