'use strict';

angular.module('projekti').controller('ProjektiController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

	$scope.firstName = "Jelena";
	$scope.lastName ="Šodan";

  }
]);
