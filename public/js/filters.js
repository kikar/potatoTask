'use strict';
angular.module('potatoFilters', [])
.filter('author', authorFilter);

function authorFilter() {
    return function(input) {
        var reg = /\((.*?)\)/;
        return input.match(reg)[1];
    };
}