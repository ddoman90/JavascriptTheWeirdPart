function Person(firstname, lastname) {
	console.log('This function invoked..');
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.getFullName = function() {
	return this.firstname + '' + this.lastname;
}

// build objects with the new keyword
// new is an operator
var john = new Person('John', 'Doe');
console.log(john);

// constructing object by functions
var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
	return this.firstname + ', ' + this.lastname;
}

console.log(john.getFormalFullName());

// Built-in function constructors

String.prototype.isLengthGreatherThan = function(limit) {
	return this.length > limit;
}

// "John" is converted to a String object (only works for numbers)
console.log("John".isLengthGreatherThan(2));


Array.prototype.myCustomFeature = 'cool';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
	console.log(prop, ': ', arr[prop]);
}