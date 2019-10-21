angular.module('projekti').controller('ProjektiController', [
    'Authentication',
    '_',
    '$http',
    '$rootScope',
    '$scope',
    '$stateParams',
    '$location',
    '$modal',

    function(Authentication,
        _,
        $http,
        $rootScope,
        $scope,
        $stateParams,
        $location,
        $modal) {
        $scope.mainGridOptions = {
            dataSource: {
                type: "json",
                transport: {
                    read: {
                        url: "/api/projektilist"
                    }
                },
            },
            columns: [{
                title: "id",
                field: "id",
                hidden: true
            }, {
                title: "Naziv projekta",
                field: "naziv"
            }]
        };
    }
]);