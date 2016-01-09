(function(global, $) {
	
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language); 
	}
	
	// Hidden values
	var supportedLangs = ['en', 'es'];
	
	var greetings = {
		en : 'Hello',
		es : 'Hola'
	};
	
	var formalGreetings = {
		en : 'Greetings',
		es : 'Saludos'
	};
	
	var logMessages = {
		en : 'Logged in',
		es : 'Inició sesion'
	}
	
	Greetr.prototype = {
		fullName : function() {
			return this.firstName + ' ' + this.lastName;
		},
		
		validate : function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw 'Invalid language';
			};
		},
		
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},
		
		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.fullName() + '!';
		},
		
		greet : function(formal) {
			var msg;
			
			if (formal) {
				msg = this.formalGreeting();
			}
			
			else {
				msg = this.greeting();
			}
			
			console.log(msg);
			
			return this;
		},
		
		log : function() {
			console.log(logMessages[this.language] + ': ' + this.fullName());
			
			return this;
		},
		
		setLang : function(lang) {
			this.language = lang;
			
			this.validate();
			
			return this;
		},
		
		htmlGreeting : function(selector, formal) {
			if (!$) {
				throw "JQERY not loaded";
			}

			var msg;
			
			if (!selector) {
				throw 'Missing jQuery selector';
			}
			
			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}
			
			$(selector).html(msg);
			
			return this;
		}
	};
	
	Greetr.init = function(firstName, lastName, language) {
		
		this.firstName = firstName || 'Default firstName';
		this.lastName = lastName || 'Default lastName';
		this.language = language || 'en';
		
	};
	
	Greetr.init.prototype = Greetr.prototype;
	
	global.Greetr = global.G$ = Greetr;
	
}(window, jQuery))