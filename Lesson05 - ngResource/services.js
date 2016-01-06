angular.module('MyServicesModule', ['ngResource'])

.factory('MyResource', function($resource) {
    return $resource('sampleData.json', null, {
        getPeople: {
            method: 'GET',
            isArray: true
        }
    });
})

.factory('FriendsResource', function($resource) {
    return $resource('./:personId/profile.json', {
        personId: '@personId'
    });
});












