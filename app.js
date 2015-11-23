// factory function taking advantage of closures
function makeGreeting(language) {
	
	return function(firstname, lastname) {
		if (language === 'en') {
			console.log('Hello ' + firstname + ' ' + lastname);
		}

		if (language === 'es') {
			console.log('Hola ' + firstname + ' ' + lastname);
		}
		
	}
	
}

// every time, when you execute the makeGreeting function it creates its execution context
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');