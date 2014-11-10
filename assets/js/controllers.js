angular
.module('Gallery.Controllers', [])
.controller('MainCtrl', ['$scope', 'artworks', 'mediums', 'materials',
    function ($scope, artworks, mediums, materials) {
        $scope.artworks = artworks;
        $scope.mediums = mediums;
        $scope.materials = materials;
}]);
