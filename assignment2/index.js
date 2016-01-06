angular.module('Simon', [])

.controller('MainCtrl', function(){
	self = this;
	this.litUp = false;
	self.startSimon = function(){
		console.log("You are starting a Simon Game!!");
	}
})