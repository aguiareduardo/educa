angular.module('app')
    .controller('ResultadoController', ['$scope', '$location', '$http', ResultadoController]);

function ResultadoController($scope, $location, $http) {
    $scope.list = [];

    console.log($location.search().query);

    if ($location.search().query) {
        var query = $location.search().query;

        $http.get('App/Resultado/Resultado.mock.js').then(function (result) {
                $scope.list = result.data;
        });
    }
}
