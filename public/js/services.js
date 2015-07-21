'use strict';

angular.module('potatoServices', [])

.factory('Feed', ['$http', feedFactory]);

function feedFactory($http) {
    var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne';

    var feed = [];
    var feedPromise = $http({
        method: 'JSONP',
        url: flickrUrl,
        params: {
            'tags': 'potato',
            'tagmode': 'all',
            'format': 'json',
            'jsoncallback': 'JSON_CALLBACK',
        }
    });

    feedPromise
    .success(function(data) {
        feed = data.items;
    });

    return {
        getFeed: function() {
            return feedPromise
            .then(function(response) {
                return response.data.items;
            });
        },
        getPhoto: function(photoID) {
            return feedPromise
            .then(function(response) {
                return response.data.items[photoID];
            });
        }
    };
}