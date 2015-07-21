'use strict';

angular.module('testApp', ['ui.router'])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', appConfigurator]);

function appConfigurator($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    });
}