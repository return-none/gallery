angular
.module('Gallery.Factories', ['ngResource'])
.constant('rootURL', 'http://54.77.217.175/')
.factory('Artworks', ['$resource', 'rootURL', function ($resource, rootURL) {
    return $resource(rootURL + 'artworks/:id', {}, {
        query: {
            method: "GET",
            isArray: false
        },
        update: {
            method: "PUT"
        }
    });
}]);
