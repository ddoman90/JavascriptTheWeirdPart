var person = {
	firstName : 'Default',
	lastName : 'Default',
	getFullname : function() {
		// if you call it from john then the context will be john
		return this.firstName + ' ' + this.lastName;
	}
};

var john = {
	firstName : 'John',
	lastName : 'Doe'
}

// don't do this ever, for demo purposes only
john.__proto__ = person;

console.log(john.getFullname());


var jane = {
	firstName : 'Jane'
};

jane.__proto__ = person;

console.log(jane.getFullname());