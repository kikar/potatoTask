'use strict';

angular.module('potatoControllers', [])

.controller('HomeController', ['Feed', homeCtrl]);

function homeCtrl(Feed) {
    var ctrl = this;

    Feed.getFeed()
    .success(function(data) {
        ctrl.feed = data.items;
    });

    ctrl.getAuthorLink = function(authorID) {
        var baseURL = 'https://www.flickr.com/photos/';
        return baseURL + authorID;
    };
}