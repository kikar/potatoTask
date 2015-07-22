'use strict';
/**
 * AngularJS directives for social sharing buttons - Facebook Like, Google+, Twitter and Pinterest
 * @author Jason Watmore <jason@pointblankdevelopment.com.au> (http://jasonwatmore.com)
 * @version 1.2.0
 */
angular.module('angulike', [])
.directive('googlePlus', ['$window', function ($window) {
    return {
        restrict: 'A',
        scope: {
            googlePlus: '=?'
        },
        link: function (scope, element, attrs) {
            renderPlusButton();

            var watchAdded = false;
            function renderPlusButton() {
                if (!!attrs.googlePlus && !scope.googlePlus && !watchAdded) {
                    // wait for data if it hasn't loaded yet
                    watchAdded = true;
                    var unbindWatch = scope.$watch('googlePlus', function (newValue) {
                        if (newValue) {
                            renderPlusButton();
                            // only need to run once
                            unbindWatch();
                        }
                    });
                    return;
                } else {
                    element.html('<div class="g-plusone"' + (!!scope.googlePlus ? ' data-href="' + scope.googlePlus + '"' : '') + ' data-size="medium"></div>');
                    $window.gapi.plusone.go(element.parent()[0]);
                }
            }
        }
    };
}]);