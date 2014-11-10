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
}])
.factory('Mediums', ['$resource', 'rootURL', function ($resource, rootURL) {
    return $resource(rootURL + 'mediums/:id', {}, {
        query: {
            method: "GET",
            isArray: false
        },
        save: {
            method: "POST"
        }
    });
}])
.factory('Materials', ['$resource', 'rootURL', function ($resource, rootURL) {
    return $resource(rootURL + 'materials/:id', {}, {
        query: {
            method: "GET",
            isArray: false
        },
        save: {
            method: "POST"
        }
    });
}]);
