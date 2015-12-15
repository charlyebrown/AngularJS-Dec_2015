// METHOD 1
// angular.module('myApp', [
//   'MyServices'
// ])

// .controller('MainCtrl', function(CarDTO) {
//   var self = this;
//   self.car = new CarDTO();
// });




// METHOD 2
// (function(app){

// 	app.controller('MainCtrl', function(CarDTO) {
// 		var self = this;
// 		self.car = new CarDTO();
// 	});



// 	app.controller('ValueCtrl', function(FOLDERS) {
// 		var self = this;
// 		self.folders = angular.copy(FOLDERS);
// 		self.folders[0].name = 'Hello';
// 	});

// 	app.controller('ValueCtrl2', function(FOLDERS) {
// 		var self = this;
// 		self.folders = angular.copy(FOLDERS);
// 	});

// })(angular.module('myApp', ['MyCarModule']));



// METHOD 3 (RECOMMENDED)
angular.module('myApp', ['MyServicesModule'])

	.controller('MainCtrl', function(CarDTO) {
		var self = this;
		self.car = new CarDTO();
	})





	.controller('ValueCtrl', function(FOLDERS) {
		var self = this;
		self.folders = angular.copy(FOLDERS);
		self.folders[0].name = 'Hello';
	})

	.controller('ValueCtrl2', function(FOLDERS) {
		var self = this;
		self.folders = angular.copy(FOLDERS);
	})





	.controller('ServiceCtrl', function (CalculatorService){
		var self = this;
		self.a = 0;
		self.b = 0;
		self.calc = CalculatorService;
	})



