var myApp = angular.module('myApp', []);




myApp.controller('MainCtrl', function($scope) {


  var self = this;


  // self.user = {
  //   name: 'George'
  // }

  self.greeting = 'Hello World!';

  self.onUserClick = function() {
      console.log(self.user);
  };

  self.simpleArray = ['Item1', 'Item2', 'Item3'];

  self.isMale = false;


  self.dog = {
    name: 'Max'
  };

  self.cat = {
    name: 'Sally'
  };

  self.hamster = {
    name: 'Gerbal'
  };

  self.intermediateArray = [{
    name: 'George',
    age: 12
  }, {
    name: 'Bill',
    age: 13
  }, {
    name: 'Harry',
    age: 14
  }];

  self.myDog = {
      age: 12,
      name: 'Harry',
      color: 'black',
      legs: 4
  };

});