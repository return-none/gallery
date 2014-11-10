angular
.module('Gallery.Controllers', [])
.controller('MainCtrl', ['$scope', 'artworks', 'mediums', 'materials',
    function ($scope, artworks, mediums, materials) {
        $scope.artworks = artworks.map(function (artwork) {
            artwork.medium_name = mediums.filter(function (medium) {
                return medium.id == artwork.medium_id;
            })[0]['name'];
            return artwork;
        });
        $scope.mediums = mediums;
        $scope.materials = materials;
}]);
