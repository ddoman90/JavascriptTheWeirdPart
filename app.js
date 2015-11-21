var arr = [
	1,
	false,
	{
		name: 'Tony',
		address: '24 rue Charles..'
	},
	function (name) {
		var greeting = 'hello';
		console.log(greeting + name);
	},
	'hello'
];

console.log(arr);
// calling the third element, which is a function, and give them a name (second element) as a parameter
arr[3](arr[2].name);
