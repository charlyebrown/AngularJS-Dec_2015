angular.module('nameApp', []).controller('MainCtrl', function(){
	self = this;

	self.fname = "Charlye";
	self.lname = "Tran";
	self.email = "charlye@charlye.com";
	self.fname1 = "";
	self.lname1 = "";

	
	self.editInfo = function(){
		self.isEditing = false;
		self.fname1 = self.fname;
		self.lname1 = self.lname;
	};

	self.isEditing = true;

	self.saveEdits = function(){
		self.fname = self.fname1;
		self.lname = self.lname1;
		self.isEditing = true;
	};

	self.cancelEdits = function(){
		self.isEditing = true;
	};

});