/** Functions Basics */

//*** Declaring Functions ***

//using the function keyword
function myFunc() {
  //the name of the function is myFunc in this example
  // Function body
  // Code to be executed
  //console.log("hello"); //this function logs the string hello to the console
}

myFunc(); //hello: invoking the function

//storing the function declaration as a variable
const printHello = function () {
  //this is known as an anonymous function because it has no name. We are using the variable name to invoke the function so there is no need to give it a name, although we can if we want.
  //console.log("hello from printHello");
};

printHello(); // hello

//*** Function Parameters ***

function printTest(parameter1, parameter2) {}

printTest();

function printParams(parameter1, parameter2) {
  //check that values exist
  if (!parameter1 || !parameter2) {
    //console.log("Please enter params");
    return;
  }

  // Function body
  // Code to be executed
  //console.log("parameter1: ", parameter1);
  //console.log("parameter2: ", parameter2);
}

/*** Invoking Functions ***/
//invoking a function: runs the function code stored in a function. We can do so by using the function name immediately followed by parentheses
// myFunc()
// printHello()
printParams(); //params will default to undefined unless we pass values when calling the function
printParams("John", "Doe");

/*** The return keyword ***/

// example 1. creating a function that adds two numbers
function add(a, b) {
  return a + b;
}

function add2(a, b) {
  let sum = a + b;
  return sum;
}

//console.log(add(5, 5));

const result = add(3, 5); // The result will be 8

//console.log(result); // Output: 8

// example 2. create a function that takes in a persons' first and last name and prints a greeting

const greeting = function (firstName, lastName) {
  // 'Hi, my name i ' + firstName + lastName + 'dfsdfsdf'
  return `Hi, my name is ${firstName} ${lastName}`;
};

//console.log(greeting("John", "Doe"));

// example 3. using if statements within a function

const subtract = function (num1, num2) {
  //check that parameters are indeed numbers using typeof
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 - num2;
  } else {
    return `please provide numbers`;
  }
};

//console.log(subtract(5, 3)); //2
//console.log(subtract(5, "hello")); //prints an error

// example 4. write a funciton that prints even number between a limit
// for example, if the limit is 10, the function should print 2, 4, 6, 8, 10 outside of the function
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) { //checks if the value i is even
//     //console.log(i) //logs i to the console
//   }
// }

// function printEvenNums(limit) {
const printEvenNums = function (limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      //checks if the value i is even
      //console.log(i); //logs i to the console
    }
  }
};

printEvenNums(50);

/*** Callback Functions ***/
//A callback function is a function that is passed as an argument to another function. The callback function is executed inside the function it was passed to.

//example 1. basic callback implementation
function process(data, callback) {
  // ... do something with the data
  callback(data); // Execute the callback function
}

//example 2. creating a function that accepts 2 numbers and a callback function as parameters and returns result of invoking the callback function using the 2 numbers as parameters.

//declare the callback functions/math operations

//create a function that accepts two numbers/returns the sum
function addTwoNums(num1, num2) {
  return num1 + num2;
}

//create a function that accepts two numbers/returns the first number minus the second number
function subtractTwoNums(num1, num2) {
  return num1 - num2;
}

//create a function that accepts two numbers/returns the first number divided by the second number
function divideTwoNums(num1, num2) {
  return num1 / num2;
}

//create a function that accepts two numbers/returns the first number multiplied by the second number
function multiplyTwoNums(num1, num2) {
  return num1 * num2;
}

//create a function that accepts two numbers and a callback function as parameters and returns the result of invoking the callback function using the two numbers as parameters
function myMathFunction(a, b, mathOperation) {
  //mathOperation is a callback function
  console.log({ a, b, mathOperation });

  const result = mathOperation(a, b);
  return result;
}

// console.log(myMathFunction(12, 6, addTwoNums));
// console.log(myMathFunction(12, 6, subtractTwoNums));
// console.log(myMathFunction(12, 6, divideTwoNums));
// console.log(myMathFunction(12, 6, multiplyTwoNums));
