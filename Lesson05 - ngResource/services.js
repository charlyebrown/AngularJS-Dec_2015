angular.module('MyServicesModule', ['ngResource'])

.service('PeopleRESTService', function($log, PeopleResource){
	var self = this;
	self.getPeopleList = function(params, onCompletion) {
		//params first and then the completion handler
		$log.debug('Getting People List with params: ' params);
		PeopleResource.getPeople(params).$promise
		.then(function onSuccess(response){
			onCompletion(true, response)l
		}, function onError(error){
			$log.error(error);
			onCompletion(false, error);
		});
	};
})

.factory('PeopleResource', function($resource) {
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












