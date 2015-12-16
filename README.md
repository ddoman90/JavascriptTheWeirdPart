Javascript - The weird parts
============================

Section 1:
==========

Philosophie:
- Don't imitate, UNDERSTAND

Conceptual aside
- syntax parser: a program that reads your code and checks for syntax errors
- lexical environment: where the code is written and what is around that
- execution context: wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed by the execution context

Name/Value pairs and objects:
-----------------------------
Object: collection of name-value pairs

The global environment and the global object:
---------------------------------------------
- every code is running in an execution context
- base execution context is the global ex cont
- it creates a global object and special values
- global means not inside of a function
- this == window on the global level

Creation and Hoisting:
---------------------
the execution context is created in two phases:
1.: Creating phase: setup memory space for variables and functions
- in that creation phase the whole function has its own memory
- all variables in javascript initialy sets to undefined
- better to always first declare then execute
2.: Execution phase
- we have everything which was setted up
- variable assignments

Javascript and undefined:
--------------------------
- not defined =|= undefined
- without declaration => Error -> no memory space
- with declaration it becomes undefined
- undefined is a special value
- NEVER set a variable to undefined
-- cannot decide whether the javascript engine has been set the value or the developer

General Javascript Definitions:
-------------------------------
- Single Threaded: one command at a time
- Synchronous: one line at a time and in order
- Invocation: running a function with ()

Function invocations:
---------------------
- execution context stack
- which is on the top it is running
- after an invocation a new exec cont is created like the global one

Variable environment:
---------------------
- every execution context has its own variable
- we call it scope
- every time you call a function you make a new execution context

Scope chain:
------------
- if javascript doesnt find the variable, it will look for the variable in the outer environment
- outer environment is the global environment [only in the example], because the b function is lexically sits in the global environment
- it is up where the function sits phisically

ES6:
----
- let allows block scoping

Asynchronous callbacks:
-----------------------
- asynchronuos: more than one at a time
- javascript engine: 
-- browser contanins:
--- rendering engine
--- the javascript engine
--- http requests
event queue:
- only get executed when the normal stack finishes
- the javascript engine wont look at the event queue until the global code finishes
- execution stack is empty -> look at the event queue
- asynchronous happens only outside of the javascript engine
- execution stack and event queue is synchronous

Section 2:
==========
Types:
------
- Dynamic typing: you dont tell the engine what type of data a variable holds
- you can change it
- figures it up on the fly

Primitive types:
----------------
Type of data which is represents a single value == not an object
- Undefined: lack of existence; you shouldnt set a variable to this type
- Null: lack of existence; you can set a variable to this
- Boolean
- Number: only one numeric type; floting point number; it can make math weird
- String: sequence of characters
- Symbol (ES6)

Operators:
----------
special function that is syntactically different
- infix/prefix/postfix notation
precedence: which operator function gets called first (higher precedence wins)
associativity: what order operator functions get called in if the functions have the same precedence:
- left-to-right
- right-to-left
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Coercion:
---------
converting a value from one type to another

Comparison operators:
---------------------
- converts the operands to numbers
- can cause weird things from a human perspective
- Number() coerse the operand to Number
-- cannot convert everything
-- Number(undefined) = NaN
-- Number(null) = 0
- coercion can be dangerous, thats why it isnt suggested to use it
- double equals can be dangerous
-- null coerces to 0 but null == 0 -> false
- use strict equality instead of normal equality
-- doesnt try to coerse the values
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Existence and Booleans:
-----------------------
- we can use coersion to check a variable existence
- be careful, because 0 coerces to false, but 0 doesnt means lack of existence !!!
- 0 coerces to false

Default values:
---------------
- or operator has special behaviour
-- operator || returns the first true coerced value
- you have to be careful with 0 (same thing like before)

Framework aside:
----------------
It means, that how the previous things are used in popular frameworks.

Objects an functions:
---------------------
Object sits in memory
Object can have:
- Primitive property
- Object property
- Function method

Access object properties:
- brakets, dot
-- dot is preferred
-- brakets, if dynamic property name

Objects and object literals:
----------------------------
new Object() === {} it is just a shorthand

Namespace:
----------
Container for variables and functions
Javascript doesnt have namespaces
We can create namespaces by objects

JSON: JavaScript Object Notation
--------------------------------
It was inspired by javascript object literals, but not the same
A few years ago xml was the language to sending data
- but it has a lot of extra characters
- huge amount of waisting bandwith
- JSON is a subset of Javascript Object Literal
-- it means that everything is valid JSON is valid JSOL
- JSON has stricter syntax

Some difference:
- properties have to be wrapped to idezojel

Javascript has a built in handling of JSON:
- JSON.stringify(Object) --> creates JSON
- JSON.parse(String) --> creates Javascript Object from JSON object

Functions are objects:
----------------------
**First class functions:** everything you can do with other types you can do with functions
- assign them to variables, pass them around, create them on the fly
Function: special type of object
- you can attach:
-- primitive
-- object
-- function
- it has extra params:
-- NAME (optional)
-- CODE
--- it is invocable ()

Function statements and Function Expression:
--------------------------------------------
**Expression:** unit of code that results in a value. It doesnt have to save in a value (like 1 + 2 in the console)
**Statement:** statement just works and expression results a value

In javascript we have function expressions and function statements

**Function statement:**
```javascript
function greet() {
    console.log('Hi');
}
```
- doesnt returns with a valaue
- it does the hoisting thing (you can call it before defining it)

**Function expression:**
```javascript
var anonymousGreet = function() {
    console.log('hi');
}
```
- it isn't hoisting for sure

First class functions enables functional programming.

By value vs by reference:
-------------------------
b = a --> in case of primitive values b will be a copy of a value in the memory --> this is BY VALUE
b = a --> in case of objects b will point to the same object like a --> this is BY REFERENCE

**Mutate:** to change something. Immutable means it can't be changed

```javascript
// by values
var a = 3;
var b;

b = a;

a = 2; // mutate

console.log(a); // 2
console.log(b); // 3

// by reference (all object including functions)

var c = {
    greeting: 'hi'
};

var d;

d = c;

c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = {
    greeting: 'howdy'
};

// because the new object create creates new memory address

console.log(c); // howdy
console.log(d); // Hola
```

Conceptual aside: Array
-----------------------
- collections of everything
- javascript is dinamically typed
- each item in an array can be different type

Arguments and spread(the new approach):
---------------------------------------
- when a new execution context has been created, it creates: variable environment, outer environment, this, ARGUMENTS (list of all the values, that you passed to the function)
- BWA: arguments: parameters you pass to a function
- javascript doesnt care about the required parameters, when you invoke a function (the parameters will be undefined)
- arguments: looks like an array, it doesn't have all the features
- length can be checked, brakets operator can be used
- spread: '...' if it gets available, the it will be the preferred approach

Conceptual aside: Syntax parser
-------------------------------
- reads the code character by character
- can make changes in the code

Dangerous aside: automatic semicolon insertion:
-----------------------------------------------
- semicolons are optionals
- syntax parser will add the missing semicolons

Inmediately invoked function expressions:
-----------------------------------------
- global execution context is empty. No variables, no functions
- there is only one line, the IIFE
- creates the execution context of the anonymous function
- since we have our own execution context, we don't touch the global execution context
- in that way our code will be secure

Understanding Closures:
-----------------------
- Global execution Context --> greet() execution context [given whattosay variable is sitting in its execution context] --> returns with a newly created function, greet() EC disappears, but the memory space is still there --> back to the global EC --> sayHi EC opens, the passed variable (name) will sit in its EC --> function gets invoked and starts to look for the whattosay variable first in its EC then in outer environment. Outer EC is the greet function (this EC is gone but the created function still has reference for it)
- the execution context is closed in with its outer variable
- this all thing the execution context with the variables what it suppose to have access to called CLOSURE
- feature of the javascript
- you can rely on it

Framework aside: function factories:
------------------------------------
- great pattern

Closures and Callbacks:
-----------------------
- BWA: Callback Function: give a function to a function to execute it when 

Call, apply, bind:
------------------
- function is a special type of object
- it has the code
- it has a name
- acces to call, apply and bind methods
- every function has acces to these methods you can use it

Bind:
-----
- creates a copy and I can say, what will this be

Call:
-----
- first parameter is what the this variable should be
- instead of creating a copy, it only calls it whit specific this variable

Apply:
------
- only difference is between call and apply, that call needs variables, but apply needs an array

BWA: Currying:
--------------
- Creating a copy of a function but with some preset parameters
- it is very useful in mathematical situations

Functional Programming:
-----------------------
- Functions that behave as objects
- think on code in terms of functions
- entirely different thinking
- to limit reputation, we use functions
- try not to mutate the data in deeper level. Better if you mutate it on a higher level.

Underscore.js:
--------------
- implements a lot of functional programming concepts
- go through the source code
- opensource education : you can learn a lot from the open source code

Object oriented prototypal Inheritance:
---------------------------------------
- inheritance: one object get access to the properties and methods of another object
- classical vs. prototipal
- classical: most popular way in other programming languages
-- verbose
- prototypal:
-- simple, flexible, extesible, easy to understand

Prototype:
----------
- obj can have props and methods
- obj has proto{} --> this is the prototype
-- this has other props
- js first looks for the prop on obj then on proto
- each object can have its own prototype
- prototype chain



