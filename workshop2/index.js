angular.module('gradingAssignmentController',[])
	.controller('MainCtrl',function(){
		var self = this;
		self.assignments = [
			{name: 'Ass1', grade: 89},
			{name: 'Ass2', grade: 91}
		];

		self.addAssignmentAndGrade = function() {
			console.log('Adding Assignment and Grade');
		}
});