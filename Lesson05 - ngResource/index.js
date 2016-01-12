
angular.module('myApp', ['MyServicesModule'])

.service('MainCtrlDataService', function(PeopleRESTService) {
	var self = this;

	self.getPeopleForCtrl = function(params, onCompletion) {
		PeopleRESTService.getPeopleList(params, function(isValid, response) {
			if (isValid) {
				// create DTO object from the response before giving to ctrl.
			}
			onCompletion(isValid, response);
		});
	};

})

.controller('MainCtrl', function(MainCtrlDataService, FriendsResource) {
	var self = this;

	// PeopleResource.getPeople({
	// 	page: 2,
	// 	age: 30
	// })
	// .$promise
	// .then(function onSuccess(response) {
	// 	self.people = response;
	// }, function onError(error) {
	// });

	// PeopleResource.query({
	// 	page: 2,
	// 	age: 30
	// }, function onSuccess(response) {
	// 	self.people = response;
	// }, function onError(error) {

	// });

	MainCtrlDataService.getPeopleForCtrl(null, function (isValid, dataToPresent) {
		if (isValid) {
			self.people = dataToPresent;
		} else {
			self.errorMessage = "Oopps something went went";
		}
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
