'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.myInterval = 3000;
        $scope.slides = [{
                image: 'modules/core/client/img/naslovnica/naslovnica-04.jpg'
            },
            {
                image: 'modules/core/client/img/naslovnica/naslovnica-03.jpg'
            },
            {
                image: 'modules/core/client/img/naslovnica/naslovnica-02.jpg'
            },
            {
               image: 'modules/core/client/img/naslovnica/naslovnica-05.jpg'
            },
            {
               image: 'modules/core/client/img/naslovnica/naslovnica-01.jpg'
            }
        ];
    }
]);