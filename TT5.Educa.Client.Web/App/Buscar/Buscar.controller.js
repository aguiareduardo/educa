angular.module('app')
    .controller('BuscarController', ['$scope', '$location', '$window', BuscarController]);

function BuscarController($scope, $location) {
    $scope.criteria = '';

    $scope.Search = function () {
        var texto = $scope.criteria.replace(' ', '+');
        $location.path('/resultado/' + texto);
    };
}