angular.module('app')
    .controller('PlanoEditController', ['$scope', '$routeParams', '$http', PlanoEditController]);

function PlanoEditController($scope, $routeParams, $http) {
    $scope.Data = {};
    $scope.buscar = function () {
        var id = $routeParams.id;
        if (id != undefined) {
            $http.get('App/Plano/plano.js').then(function (response) {
                console.log(response.data);
                $scope.Data = response.data;
            });
        }
    }
}