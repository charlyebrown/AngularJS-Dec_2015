var myApp = angular.module('myApp', []).controller('MainCtrl', function(){
  var self = this;
  
  self.greeting = "Hello World";
  
  self.onUserClick = function() {
  	alert('User Clicked!');
  };

  self.simpleArray = ['Item 1', 'Item 2', 'Item 3'];

  self.intermediateArray = [{name:'George', age: 13}, {name: 'Bill', age:13}, {name: 'Jake', age: 5}]

  self.myDog = {
  	age: 12,
  	name: 'Harry',
  	color: 'black'
  }
  self.dog = {
    name: 'Max'
  };

  self.cat = {
    name: 'Sally'
  };

  self.hamster = {
    name: 'Gerbal'
  };
});
