angular.module('Simon', [])

.controller('MainCtrl', function(){
	self = this;
	self.colors = ['green', 'red','yellow','blue']
	self.startSimon = function(){
		console.log("You are starting a Simon Game!!");
	}
	self.lightUp = function(color) {
		console.log("You clicked on " +  color + " tile");
		self.currentColor = color;
		console.log("Current color is " + self.currentColor);
	}

})