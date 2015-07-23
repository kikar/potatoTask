'use strict';

angular.module('potatoControllers', [])

.controller('HomeController', ['feedData', 'Feed', homeCtrl])
.controller('PhotoController', ['photoData', photoCtrl]);

function homeCtrl(feedData, Feed) {
    var ctrl = this;
    ctrl.feedCount = 5;
    ctrl.feed = feedData;

    ctrl.getAuthorLink = function(authorID) {
        var baseURL = 'https://www.flickr.com/photos/';
        return baseURL + authorID;
    };

    ctrl.loadMoreFeed = function() {
        var newItems = Feed.getMoreFeed(ctrl.feedCount);
        ctrl.feedCount += 5;
        ctrl.feed = ctrl.feed.concat(newItems);
    };

    ctrl.search = function() {
        ctrl.tempFeed = ctrl.feed.slice();
        ctrl.feed = ctrl.feed.filter(searchInTags, { searchText: ctrl.searchText });
    };
    ctrl.cancelSearch = function() {
        ctrl.searchText = '';
        ctrl.feed = ctrl.tempFeed;
    };
}

function photoCtrl(photoData) {
    var ctrl = this;

    ctrl.post = photoData;

    ctrl.getAuthorLink = function(authorID) {
        var baseURL = 'https://www.flickr.com/photos/';
        return baseURL + authorID;
    };
}

function searchInTags(item) {
    for (var i = 0; i < item.tags.length; i++) {
        if (item.tags[i] === this.searchText)
            return true;
    }
    return false;
}