function Teenager(name, grade){
	this.name = name;
	this.grade = grade;
	// this.class = "";
};

Teenager.prototype.setGrade = function(grade){
	this.grade = grade;
	if (grade === 10){
		this.class = "sophomore";
	} else if (grade === 11) {
		this.class = "junior";
	} else {
		this.class = "senior";
	}
};

var charlye = new Teenager("Charlye", 10);
console.log(charlye);
var tom = new Teenager("Tom", 12);
var bella = new Teenager("Bella", 11);

charlye.setGrade(12);
console.log(charlye);