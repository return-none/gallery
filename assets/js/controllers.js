angular
.module('Gallery.Controllers', [])
.controller('MainCtrl', ['$scope', 'Artworks', 'artworks', 'mediums', function ($scope, Artworks, artworks, mediums) {
        $scope.mediums = mediums;
        $scope.artworks = artworks.map(function (artwork) {
            artwork.medium_name = find_medium_name(artwork.medium_id);
            return artwork;
        });

        function find_medium_name (medium_id) {
            return mediums.filter(function (medium) {
                return medium.id == medium_id;
            })[0]['name'];
        }

        $scope.delete = function (artwork_index) {
            var artwork = $scope.artworks[artwork_index];
            if (confirm("Delete " + artwork.title + "?")) {
                artwork.$delete(function () {
                    $scope.artworks.splice(artwork_index, 1);
                });
            }
        }

        $scope.new_artwork = function () {
            $scope.newArtwork = new Artworks({
                medium_id: 1,
                dimension: 'cm',
                dimension3: 0
            });
        }

        $scope.cancel_new_artwork = function () {
            delete $scope.newArtwork;
        }

        $scope.save_new_artwork = function () {
            var saved_copy = angular.copy($scope.newArtwork);
            $scope.newArtwork.$save(function () {
                saved_copy.medium_name = find_medium_name(saved_copy.medium_id);
                $scope.artworks.unshift(saved_copy);
                $scope.cancel_new_artwork();
            });
        }
}]);
