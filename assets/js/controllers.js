angular
.module('Gallery.Controllers', [])
.controller('MainCtrl', ['$scope', 'artworks', function ($scope, artworks) {
    $scope.artworks = artworks;
}]);
