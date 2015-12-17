angular.module('gradingAssignment',['AssignmentFactory', 'CurrentGrades'])
.controller('MainCtrl', function(){
	var self = this;
})
.controller('assignmentCreatorController', function(Assignments,CURRENT_GRADES){
	var self = this;
	self.assignments = angular.copy(Assignments);
	self.current_grades = angular.copy(CURRENT_GRADES);
})

