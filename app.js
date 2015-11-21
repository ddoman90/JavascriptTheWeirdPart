// in next version of javascript you can set up default parameters easily
function greet(firstname, lastname, language) {

	// Default parameters without the next version of javascript 
	language = language || 'en';

	if  (arguments.length === 0) {
		console.log('Missing parameters');
		console.log('------------------');
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);

	// List all the values, parameters, what we gave to the function
	console.log(arguments);
	console.log('args 0', arguments[0]);

	console.log('----------------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es', 'street', 'whatever');