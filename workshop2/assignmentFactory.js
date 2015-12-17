angular.module('AssignmentFactory', ['CurrentGrades'])
.factory('Assignments', function(CURRENT_GRADES){
	var self = this;
	self.currentGrades = CURRENT_GRADES;
	
	function Assignment () {
		var self = this;
		this.name = name;
		this.grade = grade;
	};

	Assignment.prototype.addAssignmentAndGrade = function(name, grade) {
			var newAssignment = newAssignment(this.assignmentToAdd.name, this.assignmentToAdd.grade);
			self.currentGrades.push(newAssignment);
			console.log(self.currentGrades);
		};

	return Assignment;
});