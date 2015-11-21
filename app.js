// function statement
function greet(name) {
	console.log('Hello' + name);
}
greet('John');

// using a function expression
var greetFunc = function (name) {
	console.log('Hello ' + name);
};

greetFunc('John');

// using an immediately invoked function expression (IIFE)
var greeting = function (name) {
	return 'Hello ' + name;
}('John');

console.log(greeting);

var firstName = 'John';
// Standalone IIFE - creating a run function exactly at the same time
(function (name) {
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(firstName));

// IIFE
// with a passed window object you can handle global object
// objects passed by reference, that's why you can mutate the passed window object

(function (global, name) {
	var greeting = 'Hello';
	console.log(greeting + ' ' + name);
}(window, 'John')); // IIFE

console.log(greeting);