angular.module('myApp', [])

.controller('MainCtrl', function($scope, $timeout, $interval) {
  var self = this;
  self.name = "George";
  self.countdown = 10;
  self.userAge = '';

  self.ages = [1, 2, 3, 4, 5];

  self.car = {
  	make: 'Ford',
  	model: 'Escort',
  	year: 1950,
  	age: 65
  };


  self.folders = [{
  	name: 'Folder 1',
  	items: ['item 1', 'item2']
  }];

  self.updateAge = function() {
  	self.car.age = 2015 - self.car.year;
  };

  $scope.$watch('ctrl.car.year', function(newValue, oldValue) {
  	// self.car.age = 2015 - newValue;
  	// console.log('New Val: ', newValue, ' .  Old Val: ', oldValue);
  });

  $scope.$watch('ctrl.folders', function(newValue, oldValue) {

  }, true);

  $scope.$watchCollection('ctrl.ages', function(newValue, oldValue) {
  	console.log('New Val: ', newValue, ' .  Old Val: ', oldValue);
  });



  self.addAge = function() {
  	self.ages.push(self.userAge);

  	if (self.ages.length === 8) {
  		self.ages = [];
  	}
  };


  $timeout(function(){ 
  	self.name = "George";
  	console.log('Executed');
  }, 5000);

  $interval(function() {
  	self.countdown = self.countdown - 1;
  }, 1000, 10);
  
});