// public/js/controllers/linkCtrl.js
angular.module('linkCtrl', []).controller('linkController', ['$scope', 'linkService', function($scope, linkService) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    var ls = linkService;

    $scope.allLinks = [];

    $scope.link = {name: ''};

    $scope.getLinks = function () {
        ls.get().then(
            function (response) {
                $scope.allLinks = response.data;
                $scope.tagline = 'GOT IT!';
            },
            function (reason) {
                $scope.tagline = 'DONT GOT IT';
            }
        );
    };



    $scope.saveLink = function() {
        ls.create($scope.link).then(
            function () {
                $scope.getLinks();
            }
        );
    };

    $scope.getLinks();

}]);