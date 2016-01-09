angular.module("PlaylistApp",["playlistFactory"])
.controller("PlaylistController", function(GENRES, TYPE, SONGS, Playlist){
	var self= this;
	self.genres = GENRES;
	self.types = TYPE;
	self.songs = SONGS;
	self.playlist = new Playlist;
	self.songSelection = {};
	self.songSelection['Pop'] = [];
	self.songSelection['Rock'] = [];
	self.songSelection['Rap'] = [];


	self.genreSelected = function() {
		console.log('Genre selected');
		if (self.genreSelection === "Pop"){
			console.log('you selected Pop Songs')
			console.log(self.genreSelection)
		} else if (self.genreSelection === 'Rock') {
			console.log('you selected Rock Songs')
		} else {
			console.log('you selected Rap Songs')
		}
	}

	self.songSelected = function(title){
		console.log(self.genreSelection)
		self.songSelection[self.genreSelection].push(title);
		console.log('You picked ' + self.songSelection[self.genreSelection]);
	}

})