'use strict';

angular.module('potatoControllers', [])

.controller('HomeController', ['Feed', homeCtrl])
.controller('PhotoController', ['photoData', photoCtrl]);

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

function photoCtrl(photoData) {
    var ctrl = this;

    ctrl.post = photoData;
    ctrl.post.tags = ctrl.post.tags.split(' ');

    ctrl.getAuthorLink = function(authorID) {
        var baseURL = 'https://www.flickr.com/photos/';
        return baseURL + authorID;
    };
}