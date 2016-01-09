$(function() {
	$('input#login').click(function() {
		var selectedLanguage = $('select#lang option:selected').val();
		G$('John', 'Doe').setLang(selectedLanguage).htmlGreeting('#greeting', true);
	})
});