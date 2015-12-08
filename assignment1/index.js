angular.module('assignment1', []).controller('MainCtrl', function(){
	self = this;

	self.colors = ['red', 'blue', 'green', 'purple', 'none'];

	self.colorSelection = 'none';

	self.folders = [
		{name: 'Chicken', items: ['KFC', 'Popeyes']}, 
		{name: 'Burgers', items: ['McDonalds']}, 
		{name: 'Pizza', items: ['Pizza Hut']}
	];

	self.collapseAll = false;

});