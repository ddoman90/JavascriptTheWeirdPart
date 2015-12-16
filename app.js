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

// reflection example
for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
		// it really has the property
		console.log(prop , ': ' , john[prop]);
	}
}


var jane = {
	address : 'something street',
	getFormalFullName : function() {
		return this.lastName + ', ' + this.firstname;
	}
}

var jim = {
	getFirstName : function() {
		return this.firstName;
	}
}

_.extend(john, jane, jim);

console.log(john);