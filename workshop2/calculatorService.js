angular.module('calculatorService', ['CurrentGrades'])
.service('calculatorService', function(CURRENT_GRADES){
	self = this;
	self.currentGrade= CURRENT_GRADES;
	var calculateAverage = function(){
		var sum = self.currentGrade.reduce(add,0);
		return sum/currentGrade.length;
	}
})
