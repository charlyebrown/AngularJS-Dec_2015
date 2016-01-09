angular.module('Simon', [])

.controller('MainCtrl', function(){
	self = this;
	self.colors = ['green', 'red','yellow','blue']
	self.startSimon = function(){
		console.log("You are starting a Simon Game!!");
	}
	self.lightUp = function() {
		console.log("You clicked on a tile!");
	}
})