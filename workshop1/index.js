angular.module('nameApp', []).controller('MainCtrl', function(){
	self = this;

	self.fname = "Charlye";
	self.lname = "Tran";
	self.email = "charlye@charlye.com";
	self.fname1 = "";
	self.lname1 = "";

	
	self.editInfo = function(){
		self.isEditing = false;
		self.fname1 = angular.copy(self.fname);
		self.lname1 = angular.copy(self.lname);
	};

	self.isEditing = true;

	self.saveEdits = function(){
		self.fname = angular.copy(self.fname1);
		self.lname = angular.copy(self.lname1);
		self.isEditing = true;
	};

	self.cancelEdits = function(){
		self.isEditing = true;
	};

});