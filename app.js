
// Polyfill
if (!Object.create) {
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error('Object.create implementation only accepts the first parameter.');
		}
		function F() {}
		F.protoype = o;
		return new F();
	}
}

var person = {
	firstname : 'Default',
	lastname : 'Default',
	greet: function() {
		return 'Hi ' + this.firstname;
	}
}

var john = Object.create(person);
console.log(john);

john.firstname = 'John';
john.lastname = 'Doe';