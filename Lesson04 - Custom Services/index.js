angular.module('myApp', [
  'MyServices'
])

.controller('MainCtrl', function(CarDTO) {
  var self = this;
  self.car = new CarDTO();
});