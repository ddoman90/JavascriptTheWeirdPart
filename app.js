function sayHiLater() {
	var greeting = 'Hi';

	// here you use first class function
	// function expression == function on the fly
	// thanks to the closure we have access to greeting variable
	setTimeout(function () {
		console.log(greeting);
	}, 3000)
}

sayHiLater();

// jQuery uses function expressions and first class functions
/*$('button').click(function () {

});*/


function tellMeWhenDone(callback) {

	var a = 1000; // some work
	var b = 2000; // some work


	callback();
}

tellMeWhenDone(function () {
	console.log('I am done.');
});