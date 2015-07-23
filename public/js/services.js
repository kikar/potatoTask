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

    function splitTags(item) {
        item.tags = item.tags.split(' ');
    }

    var feed;

    return {
        getInitialFeed: function() {
            return feedPromise
            .then(function(response) {
                feed = response.data.items;
                if (!Array.isArray(feed[0].tags))
                    feed.map(splitTags);
                return feed.slice(0, 5);
            });
        },
        getMoreFeed: function(offset) {
            return feed.slice(offset, offset+5);
        },
        getPhoto: function(photoID) {
            return feedPromise
            .then(function(response) {
                return response.data.items[photoID];
            });
        }
    };
}