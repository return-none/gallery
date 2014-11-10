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
        save: {
            method: "POST",
            transformRequest: function (data, headers) {
                data.medium = rootURL + 'mediums/' + data.medium_id;
                data.includes_vat = data.vat == 0 ? false : true;
                data.dimensions_in_cm = data.dimension === 'cm' ? true : false;
                return angular.toJson(data);
            }
        },
        update: {
            method: "PUT",
            transformRequest: function (data, headers) {
                data.medium = rootURL + 'mediums/' + data.medium_id;
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
}]);
