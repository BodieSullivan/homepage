//public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // links page that will use the linkController
        .when('/links', {
            templateUrl: 'views/link.html',
            controller: 'linkController'
        });


    $locationProvider.html5Mode(true);

}]);