angular.module('Simon', ['SimonGame'])

.controller('MainCtrl', function(GameDTO, COLORS, GameFunctions){
	self = this;
	self.colors = angular.copy(COLORS);
	self.gameFunctions = GameFunctions;

})