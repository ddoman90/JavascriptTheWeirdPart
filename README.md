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
Obeject: collection of name-value pairs

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
- in that creation phase the whole function has its own memory entirely
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

Definitions:
------------
Single Threaded: one command at a time
Synchronous: one line at a time and in order
Invocation: running a function with ()

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
- if javascript doesnt find the variable, the it will look for the variable in the outer environment
- outer environment is the global environment, because the b function is lexically sits in the global environment
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


