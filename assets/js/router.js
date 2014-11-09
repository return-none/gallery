angular
.module('Gallery.Router', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/index.html',
        resolve: {
            artworks: ['$q', 'Artworks', function($q, Artworks) {
                var deferred = $q.defer();
                Artworks.query().$promise.then(function (repsonse) {
                    var promises = repsonse.urls.map(function (url) {
                        // id parse
                        var id = url.match(/\/artworks\/(\d+)/)[1];
                        return Artworks.get({id: id}).$promise;
                    });
                    $q.all(promises).then(function (responses) {
                        deferred.resolve(responses);
                    })
                });
                return deferred.promise;
            }]
        }
    })
    .otherwise({redirectTo: '/'});
}]);
