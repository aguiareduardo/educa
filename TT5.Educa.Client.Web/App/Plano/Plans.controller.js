angular.module('app')
    .controller('PlansController', ['$scope', '$http', PlanoController]);

function PlanoController($scope, $http) {
    $scope.List = [];
    var BuscarTodos = function () {        
        //enviar parametro usuario
        $http.get('App/Plano/planos.js').then(function (response) {
            $scope.List = response.data;
        }, function (error) {
            console.log(error);
        });
    };

    $scope.Buscar = BuscarTodos();
}
