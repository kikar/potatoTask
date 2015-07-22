'use strict';

angular.module('potatoApp', ['ui.router', 'angulike', 'potatoControllers', 'potatoServices'])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', appConfigurator]);

function appConfigurator($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as homeCtrl',
        resolve: {
            feedData: ['Feed', function(Feed) {
                return Feed.getFeed();
            }]
        }
    })
    .state('photo', {
        url: '/photo/{photoID}',
        templateUrl: 'views/photo.html',
        controller: 'PhotoController as photoCtrl',
        resolve: {
            photoData: ['Feed', '$stateParams', function(Feed, $stateParams) {
                return Feed.getPhoto($stateParams.photoID);
            }]
        }
    });
}