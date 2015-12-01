var a = 5
undefined
var a = 2.3
undefined
a
2.3
var b = "myString"
undefined
var b = 'myString'
undefined
var c = true;
undefined
var c = false;
undefined

var myArray = [1, 2, 3, 4, 5];
undefined
myArray.splice(1, 3)
[2, 3, 4]
myArray
[1, 5]
var myArray = [1, 2, 3, 4, 5];
undefined
myArray.slice(1, 3)
[2, 3]
var myArray = [1, 2, 3, 4, 5];
undefined
myArray.slice(1, 4)
[2, 3, 4]
var myArray = [1, 2, 3, 4, 5, ['a', 'b', 'c']];
undefined
myArray.length
6
myArray[2]
3
myArray[5][1]
"b"


var a = undefined
undefined
a
undefined
var b = null;
undefined
b
null
5 == 5
true
5 === 5
true
'5' == 5
true
'5' === 5
false
if (5 == '5') { 

console.log("they're equal")
VM1568:5 Uncaught SyntaxError: Unexpected end of input(…)InjectedScript._evaluateOn @ VM447:875InjectedScript._evaluateAndWrap @ VM447:808InjectedScript.evaluate @ VM447:664
if (5 == '5') { 

console.log("they're equal")

}
VM1573:4 they're equal
undefined
null === null
true
undefined === undefined
true
undefined == undefined
true
null === undefined
false
null == undefined
true


var a = {
  name: 'George'
};
undefined
var b = {
  name: 'George'
};


undefined
a === b
false
a == b
false
var a = {
  name: 'George'
};
undefined
var b = a;
undefined
a === b
true
a == b
true
a
Object {name: "George"}
b
Object {name: "George"}
a.name = 'Harry';
"Harry"
b
Object {name: "Harry"}
var myVar;
undefined
var myVar = undefined;
undefined


var a;
undefined
if (!a) {console.log('hello')}
undefined
!a
false
!!a
true
if (!!a) {console.log('hello')}
VM2230:2 hello
undefined
var b = 0;
undefined
!b
true
!!b
false


function sum(a, b) {
    return a + b;
}
undefined
sum(5, 10);
15
sum('g', 'd')
"gd"
sum('g', true)
"gtrue"
sum(5);
NaN
sum();
NaN
sum(5, 3, 4, 5, 9);
8
var sum = function(a, b) {
   return a + b;
}
undefined
sum(3, 4)
7
function greeter(toCall) {
    console.log('hello' + toCall());
}
undefined
var myName = function() {
   return 'George';
}
undefined
greeter(myName);
VM2615:3 helloGeorge
undefined
var yourName = function() {
    return 'tom';
}
undefined
greeter(yourName);
VM2615:3 hellotom
undefined








function a() {
	var myObj = {
		fname: 'George',
		lname: 'Dagher'
	};

	var myDog = {
		name: 'Max'
	}

	function b() {
		var myObj = {
			fname: 'Bill'
		};

		myObj.lname = 'Smith';
		myDog.age = 12;

		console.log(myObj);
	}

	b();
	console.log(myObj);
	console.log(myDog);
}
a();

result:
Object {fname: "Bill", lname: "Smith"}
Object {fname: "George", lname: "Dagher"}
Object {name: "Max", age: 12}