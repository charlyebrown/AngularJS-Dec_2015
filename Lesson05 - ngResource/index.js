
angular.module('myApp', ['MyServicesModule'])

.controller('MainCtrl', function(MyResource) {
	var self = this;

	MyResource.getPeople({
		page: 2,
		age: 30
	})
	.$promise
	.then(function onSuccess(response) {
		self.people = response;
	}, function onError(error) {

	});
});
