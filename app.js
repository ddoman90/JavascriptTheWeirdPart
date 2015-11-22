// we expect to have the return value as 0, 1, 2; but we get 3,3,3
// it is because of the outer environment and the time of the execution
function buildFunctions() {

	var arr = [];

	for (var i = 0; i < 3; i++) {

		arr.push(
				function() {
					console.log(i);
				}
		)

	}

	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// if we need the 0, 1, 2 return, we can have the advantages of the IIFE or using the let variable (only in ES6)
function buildFunctions2() {

	var arr = [];
	for (var i = 0; i < 3; i++) {
		// let has block scope you can do it with it
		arr.push(
				(function(j) {
					return function() {
						console.log(j);
					}
				}(i))
		)

	}

	return arr;
}

var fs = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();