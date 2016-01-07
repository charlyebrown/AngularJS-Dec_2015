
angular.module('myApp', ['MyServicesModule'])

.controller('MainCtrl', function(MyResource, FriendsResource) {
	var self = this;

	// MyResource.getPeople({
	// 	page: 2,
	// 	age: 30
	// })
	// .$promise
	// .then(function onSuccess(response) {
	// 	self.people = response;
	// }, function onError(error) {
	// });

	MyResource.query({
		page: 2,
		age: 30
	}, function onSuccess(response) {
		self.people = response;
	}, function onError(error) {

	});

	self.displayFriends = function(person) {
		FriendsResource.query({
			personId: person._id
		}).$promise
		.then(function onSuccess(response) {
			person.friends = response;

			// Chaining promises example
			//
			// return FriendsResource.query({
			// 	personId: self.people[2]._id
			// }).$promise;
		})
		// .then(function onSuccess(response) {
		// 	self.people[2].friends = response;
		// });
	};
});
