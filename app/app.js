/**
 * @file app.js
 * @begin 20.01.15
 * @author <a href="mailto:daniele.bizzozero@gokillo.com">Daniele Bizzozero</a>
 * @copyright 2014 <a href="http://gokillo.com">Gokillo</a>
 */
(function () {

    var app = angular.module('GokilloApp',
        ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        var viewBase = '/app/views/';

        $routeProvider
            .when('/titles', {
                templateUrl: viewBase + 'titles.html'
            })
            .when('/paragraphs', {
                templateUrl: viewBase + "paragraphs.html"
            })
            .when('/lists', {
                templateUrl: viewBase + "lists.html"
            })
            .when('/table', {
                templateUrl: viewBase + "table.html"
            })
            .when('/alert', {
                templateUrl: viewBase + "alert.html"
            })
            .otherwise({ redirectTo: '/titles' });

    }]);

}());

