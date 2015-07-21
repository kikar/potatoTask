'use strict';

angular.module('potatoControllers', [])

.controller('HomeController', ['feedData', homeCtrl])
.controller('PhotoController', ['photoData', photoCtrl]);

function homeCtrl(feedData) {
    var ctrl = this;
    ctrl.feed = feedData;

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