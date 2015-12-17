angular.module("playlistFactory",[])
.factory("Playlist",function(){
	function Playlist(GENRES,TYPE,SONGS) {
		var self = this;
		var selectedSongs = [];
	}
	return Playlist;
})
.value("GENRES", ['Pop', 'Rock', 'Rap'])
.value("TYPE", ['Clean', 'Explicit'])
.value("SONGS", {
	Pop: ['PopSong1', 'PopSong2'],
	Rock: ['RockSong1', 'RockSong2'],
	Rap: ['RapSong1', 'RapSong2']
})
