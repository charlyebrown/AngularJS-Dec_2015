angular.module('SimonGame',[])

.factory('GameDTO', function(GameFunctions, COLORS){
	function GameDTO(){
		this.simonsPicks = [];
		this.colors = angular.copy(COLORS);
		this.playerPicks = [];
		this.currentRound = 1;
		this.currentPlayer = "Simon";
	}

	GameDTO.prototype.startGame = function(){
		console.log("Starting Simon");
		GameFunctions.getSimonPick(0,3);
		self.simonsPicks.push()
	}

	return GameDTO;
})

.value('COLORS', [
	{name: 'green', active: false},
	{name: 'red', active: false},
	{name: 'yellow', active: false},
	{name: 'blue', active: false}
	])

.service('GameFunctions', function($timeout, COLORS){
	var self = this;
	self.lightUp =
	 function(color) {
	 	// if (currentPlayer == "Simon") {
	 		color.active = true;
			$timeout(function() {
				color.active = false;
   			}, 1000);
	 	// } else {
	 		// return;
	 	// }	
	}

	self.getRandomColor = function(colors) {
		// generates randomNum

		return colors[randomNum];
	}


	self.getSimonPick = function(min, max, game){
  		var randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  		var currentColor = COLORS[randInt];
  		console.log("Simon's first pick " + currentColor.name);
  		GameDTO.simonsPicks.push(currentColor);
  		console.log(GameDTO.simonsPicks);
	}
	// self.startNewRound = GameDTO.currentRound = GameDTO.currentRound++;
	self.displaySimonSequence = function(){
		console.log("Simon's Turn");
	}
})