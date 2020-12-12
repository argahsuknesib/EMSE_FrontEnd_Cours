
// Printing on the browser console
console.log('Hello');


// Javascript in weakly typed
var myVariable;

myVariable = 3;
myVariable = "Some string";
myVariable = [1, 2, 3];


// Multiple syntax for declaring variables : 

// ES5 way : 
var firstVariable = '2';

// ES6 way : 
let secondVariable = 'hi';
const constantVariable = 'one';



// Of course we can do conditions
if (firstVariable === '2') {
  console.log('firstVariable contains the string "2"');
} else {
  console.log('else');
}


// Also loops
let myArray = ['one', 'two', 'three'];
for (var item of myArray) {
  console.log(item);
}
// Although we will se later, it's better to loop on arrays in a functional way




// String manipulation
myVariable = 'simple quoted string, can have "double quotes" inside';
myVariable = "double quoted string, can have 'simple quotes' inside";
myVariable = "we can " + "easily concatenate strings";

//ES6 syntax
firstVariable = 100;
myVariable = `This is a string template, we can easily insert firstVariable value : ${firstVariable} in it`;





// Objects
// Unlike statically typed OO language, a JS object is just a kind of map with properties and 
// values that can be added, removed, accessed on the fly. 
var firstObject = {
  propertyA: 2,
  probertyB: {
    subProperty: 'hi'
  }
};

// We can access object properties with dot notation or brackets
firstObject.propertyA;
firstObject['propertyA'];

// I can add other properties on an existing object
firstObject.propertyC = 'abc';




// Functions
// One big advantages of JS, is that function are first class citizens, they can be manipulated as
// over primitive types (objects, strings, …)

// This is a named function
function myFunctionA() {
  console.log('in myFunctionA()');
}

// Calling the function
myFunctionA();

// I can assign it to a variable, and call it through that variable
var myFunctionVariable = myFunctionA;
myFunctionVariable();

// Here I assign directly to a variable an anonymous function
var myFunctionB = function() {
  console.log('in myFunctionB()');
}

// Functions can be passed as arguments to other functions
function needsACallback(callback) {
  callback();
}

// passing a function to needsACallback()
needsACallback(myFunctionA);

// passing an anonymous function to needsACallback()
needsACallback(function() {
  console.log('in callback');
});

// ES6 syntax, arrow functions
var myArrowFunction = (arg1) => {
  console.log(arg1);
})
needsACallback(() => {
  console.log('in arrow function callback');
});






// On objects, we can emulate "methods" with properties holding functions
var person = {
  name: 'John',
  sayName: function() {
    console.log('My name is ' + this.name);
  }
}

person.sayName();

// Beware, the behavior of "this" keyword in javascript is a bit complicated, if you are interested on the topic you
// can read more about it online, but it goes beyond the scope of this course.



// With ES6, we can declare class in order to build objects more easily. Warning this is ES6 only
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`); 
  }
}

person = new Person('John');
person.sayName();

// person is still a native JS object. Although it's not a good coding practice, I can still add and remove other properties 
// to it
person.lastName = 'Doe';
person.sayFullName = function() {
  console.log(`My name is ${this.name} ${this.lastName}`);
}










// More on functionnal programming
// Thanks to JS mechanism of function being first class citizens, we use it a lot to pass callback functions
// to other functions as arguments. This allow to program using a "fonctionnal" paradigm.
//
// Below a meaningful example, how to loop over an array

// Imperative paradigm (the one you use the more often when learning programming)
var myArray = ['one', 'two', 'three'];
for(var i = 0; i < myArray.length; i++) {
  var item = myArray[i];
  console.log(item);
}

// or, shorter but still imperative
for(var item of myArray) {
  console.log(item);
}

// Functionnal paradigm, using the native method of JS arrays .forEach(callback). It takes a callback function as parameter,
// the callback is called with each item of the array, given as first parameter of the callback
myArray.forEach(function(item) {
  console.log(item);
});

// This is the prefered way of proceeding in JS
//
// See the MDN doc for all methods of the Array object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// Same thing, shorter syntax with arrow function
myArray.forEach((item) => {
  console.log(item);
});

// Even shorter, because the body of my function has only one instruction, I can skip the brackets arround the function body,
// and parenthesis around the function arguments
myArray.forEach(item => console.log(item));
