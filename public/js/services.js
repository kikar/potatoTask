'use strict';

angular.module('potatoServices', [])

.factory('Feed', ['$http', feedFactory]);

function feedFactory($http) {
    var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne';

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

    return {
        getFeed: function() {
            return feedPromise;
        }
    };
}