// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'nerdService', function($scope, nerdService) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    var ns = nerdService;

    $scope.allNerds = [];

    $scope.nerd = {name: ''};

    $scope.getNerds = function () {
        ns.get().then(
            function (response) {
                $scope.allNerds = response.data;
                $scope.tagline = 'GOT IT!'
            },
            function (reason) {
                $scope.tagline = 'DONT GOT IT'
            }
        );
    };



    $scope.saveNerd = function() {
        ns.create($scope.nerd).then(
            function() {
                $scope.getNerds();
            }
        );

    };

    $scope.getNerds();

}]);