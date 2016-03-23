angular.module('app')
    .controller('ResultadoController', ['$scope', '$routeParams', '$http', ResultadoController]);

function ResultadoController($scope, $routeParams, $http) {
    $scope.list = [];

	var query = $routeParams.query;
    
     if (query) {        
         $http.get('App/Resultado/resultado.mock.js').then(function (result) {
                 $scope.list = result.data;
         });
     }
}
