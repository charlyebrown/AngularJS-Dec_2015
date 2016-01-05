angular.module('MyServicesModule', ['ngResource'])

.factory('MyResource', function($resource) {
    return $resource('sampleData.json', {
        limit: 20,
        page: 1
    }, {
        getPeople: {
            method: 'GET',
            isArray: true
        }
    });
});












