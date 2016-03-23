angular.module('app')
    .controller('BuscarController', ['$scope', '$location', '$window', BuscarController]);

function BuscarController($scope, $location, $window) {
    $scope.text = '';

    $scope.Criteria = function () {
        var texto = $scope.text.replace(' ', '+');
        $window.location.href = '#/Resultado?query=' + texto;
    };
}