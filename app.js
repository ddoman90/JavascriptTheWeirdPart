
function a() {
	console.log(this);
	this.newVariable = 'hello';
}

var b = function b() {
	console.log(this);
}

// if you just invoke the function, then this points every time to the global window object
a();

console.log(newVariable);

b();

var c = {
	name: 'The c object',

	log: function() {
		var self = this;

		// in that case, if you invoke a method of an object, this will be the object
		this.name = 'Updated c object';

		var setName = function (newName) {
			// this is the global window object
			self.name = newName;
		};
		setName('Updated again!');

		console.log(self);
	}
};

c.log();