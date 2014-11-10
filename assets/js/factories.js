angular
.module('Gallery.Factories', ['ngResource'])
.constant('rootURL', 'http://54.77.217.175/')
.factory('Artworks', ['$resource', 'rootURL', function ($resource, rootURL) {
    return $resource(rootURL + 'artworks/:id', {id: "@id"}, {
        query: {
            method: "GET",
            isArray: false
        },
        get: {
            transformResponse: function (data, headers) {
                data = angular.fromJson(data);
                data.medium_id = data.medium.match(/\/mediums\/(\d+)/)[1];
                return data;
            }
        },
        update: {
            method: "PUT",
            transformRequest: function (data, headers) {
                data.medium = rootURL + 'mediums/' + data.medium_id;
                delete data.medium_id;
                if (data.medium_name) {
                    delete data.medium_name;
                }
                return angular.toJson(data);
            }
        }
    });
}])
.factory('Mediums', ['$resource', 'rootURL', function ($resource, rootURL) {
    return $resource(rootURL + 'mediums/:id', {id: "@id"}, {
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
    return $resource(rootURL + 'materials/:id', {id: "@id"}, {
        query: {
            method: "GET",
            isArray: false
        },
        save: {
            method: "POST"
        }
    });
}]);
