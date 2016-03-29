angular.module('app', ['ngRoute', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/PageNotFound");

      $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "Views/Home/Home.html"
    })
    .state('resultado', {
        url: "/:query",
        templateUrl: "View/Resultado/Resultado.html",
        controller: "ResultadoController"
    })
    .state('aula', {
        url: "/list",
        templateUrl: "View/Aula/Aulas.html",
        controller: "AulasController"
    })
    .state('aula.edit', {
        url: "/:id",
        templateUrl: "View/Aula/AulaEdit.html",
        controller: "AulaEditController"
    })
    .state('aula.view', {
        url: "/:id",
        templateUrl: "View/Aula/AulaView.html",
        controller: "AulaViewController"
    })
    .state('plano', {
        url: "/list",
        templateUrl: "View/Plano/Planos.html",
        controller: "PlanosController"
    })
    .state('plano.edit', {
        url: "/:id",
        templateUrl: "View/Plano/PlanoEdit.html",
        controller: "PlanoEditController"
    })
    .state('plano.view', {
        url: "/:id",
        templateUrl: "View/Plano/PlanoView.html",
        controller: 'PlanoViewController'
    });
  }]);

