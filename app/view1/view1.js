'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
        $(".cards").each(function (index, e) {
            e = $(e);
            var x = "0px", y = "0px";
            var xOffset = [
                    "ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"
                ],
                yOffset = [
                    "clubs", "spades", "hearts", "diamonds"
                ];
            for (var i = 0; i < xOffset.length; i++) {
                if (e.hasClass(xOffset[i])) {
                    x = String(-73 * i) + "px";
                }
            }
            for (var i = 0; i < yOffset.length; i++) {
                if (e.hasClass(yOffset[i])) {
                    y = String(-98 * i) + "px";
                }
            }
            e.css("background-position", x + " " + y);
        });
}]);

