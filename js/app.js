'use strict';

angular.module('testApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', appConfigurator]);

function appConfigurator($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        template: '<p>Hello World</p>'
    });
}