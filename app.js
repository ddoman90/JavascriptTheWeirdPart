var person = {

	firstname : 'John',
	lastname  : 'Doe',

	getFullName : function () {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
};

// example using bind
var logName = function (lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------');
}.bind(person);

logName('en');

// difference between call and apply
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

// apply on the fly
(function (lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('--------------');
}).apply(person, ['en', 'es']);


/*
Examples for usin bind, call, apply
 */

// function borrowing
var person2 = {
	firstname : 'Jane',
	lastname  : 'Doe'
};

// in person2 we don't have the function, so we can borrow it
console.log(person.getFullName.apply(person2));

// function currying (with bind)
function multiply(a, b) {
	return a * b;
}

// the second and third parameter will be set to 2
var multipleByTwo = multiply.bind(this, 2, 2);

// the passed 4 parameter is never will be effective
console.log(multipleByTwo(4));