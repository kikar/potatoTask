'use strict';

angular.module('potatoApp', ['ui.router', 'potatoControllers', 'potatoServices'])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', appConfigurator]);

function appConfigurator($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as homeCtrl'
    })
    .state('photo', {
        url: '/photo/{photoID}',
        templateUrl: 'views/photo.html'
    });
}