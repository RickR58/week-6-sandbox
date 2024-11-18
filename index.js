/*function myFunction() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
}
myFunction();
function createFullName(firstName, lastName) {
  //firstName, etc are called paramaters
  console.log(firstName + "  " + lastName);
}

createFullName("Tom", "Sawyer"); //The actual names here are called Arguments
createFullName("Rick", "Robb");
*/
//Note that nothing prints to the index.html page, but it DOES to the console. We can put anyting inside the function declaration.
//parameters are like Parking Lots and the arguments are like cars that go in there. A parameter is part of the DECLARATION of the function and tha argument is used when invoking the function. DON'T put values in the parameters of the funciton declaration.

// the following came directly from the course discussion about functions.
/*
function checkCanDrive(age) {

  return (age >= 16);
  }
  var currentAge = 14;
  if (checkCanDrive(currentAge) {
  console.log('This person can drive');
  } else {
  console.log('This person cannot legally drive');
*/
/*
let fullName = "Mary" + "  " + "Beige";
let gradesArray = [100, 79, 80, 90, 65];
const isPassing = (currentValue) => currentValue >= 70;
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) {
  console.log("\t" + (i + 1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
  console.log("\tEvery grade is a passing grade (>= 70) ! ");
} else {
  console.log("\tNot all grades are passing. A passing grade is >= 70!");
}
*/
/*function lowestGrade(gradeBook) {
  if (gradeBook.length > 0) {
    let lowGrade = gradeBook[0];
    for (let grade of gradeBook) {
      if (grade < lowGrade) {
        lowGrade = grade;
      }
    }
    return lowGrade;
  } else {
    return 0;
  }
}
console.log("\n\nStudent; " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) {
  console.log("\t" + (i + 1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");
console.log("\tLowest Grade is: " + lowestGrade(gradesArray));
*/

// Start Objects section

/*
var dvdPlayer = {
  //The items that follow can all be referenced by using "dvdPlayer"
  height: 3,
  width: 18,
  depth: 12,
  weight: 7,
  color: "Black",
  dvdName: "Mulan",
  printHeight: function () {
    console.log(this.height); //adding "this" lets it know WHICH "hieght" it's referring to.
    console.log(dvdPlayer.weight);
    console.log(dvdPlayer.color);
    console.log("Next!");
  },
};
console.log("Depth" + " " + dvdPlayer.depth);
console.log(dvdPlayer.color);
console.log(dvdPlayer.weight + " lbs.");
dvdPlayer.printHeight(); // This feels limiting, can't seem to add string.

//My try
var plantDesc = {
  commonName: "Mouse Plant",
  latinName: "mus musculus repens",
  height: 5,
  shadeNeed: "Mixed",
  flowerColor: "Brown",
  printFlowerColor: function () {
    console.log(this.shadeNeed);
    console.log(this.height);
  },
};
console.log(plantDesc.latinName);
console.log(plantDesc.flowerColor);

plantDesc.printFlowerColor();
//End My Try

console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 12;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 9);

console.log(found);
// Expected output: 12

//Find the average of some data
const colors = [5, 5, 32, 20, 2, 3];

//adding a group of numbers and then dividing by the count of those numbers.\

let addedGroupOfNumbers = 0;

//returns the length of our colors ie data array
let countofGroupNumbers = colors.length; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log("# of Group Numbers:", countofGroupNumbers);

//todo - need to sum our colors ie. data array use a for loop???
console.log("before loop");

for (let index = 0; index < countofGroupNumbers; index++) {
  console.log(
    "is this loop going to continue to run?",
    index < countofGroupNumbers
  );

  console.log("Index in loop:", index, "array at index:", colors[index]);
  addedGroupOfNumbers += colors[index];
  console.log("after sum:", addedGroupOfNumbers);
}
console.log("after loop");

let average = addedGroupOfNumbers / countofGroupNumbers;

console.log("Average:", average);
End Functions*/

/* Start Objects*/
/*

var contactOne = {
  firstName: "Mickey",
  lastName: "Mouse",
  address: {
    street: "1 Main Street",
    city: "Disneyland",
    state: "CA",
    zip: "92802",
  },
  phone: "123-456-7890",
  notes: "",
};
console.log(
  contactOne.firstName + //THIS plus sign is saying this is the ouptput?
    " " + //The plus sign is saying print this next line with the first inside the quotes (I assume)
    contactOne.lastName +
    " lives at " +
    contactOne.address.street + // (name of object).(specific section).(specific subsection)
    " in " +
    " " +
    contactOne.address.state +
    " " + //This creates a space between
    contactOne.phone
);
//End Objects

// start Equality vs Identity
console.log(2 == "2"); //equality operator
console.log(2 === "2"); //identity operator (=== is also the strict equality operator)
// See Comparison Operators Operator Description Example Code in apple Notes and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// end Equality

//Start Intermediate Array Methods
let names = [
  "Samue'l",
  "Tomm",
  "John Jacob Jingleheimer Schmidt",
  "Seally",
  "Billy Joe Jim Bob",
  "Nicholas",
];
let lengths = names.map(function (element) {
  //'element' here can be anything I guess as long as we identify it in the return
  return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 23); //this number is going to start ourcount at a diff value.

console.log("Total of lengths equals ", sum);
names.forEach(function (element) {
  //for each method
  console.log(element);
});
//Filter  method uses boolean characters to return a value
let evens = names.filter(function (element) {
  return element.length % 2 == 0;
});
console.log(evens);

//Splice method. Most common use is to remove an element from the array
let removedElement = names.splice(1, 1);
console.log(removedElement);

//end arrays. NOTES:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
/*
//START JavaScript JS3 - Functions (Pt. 1)

function myFunction() {
  console.log("Hello World!");
}
myFunction();
//END JavaScript JS3 - Functions (Pt. 1)

function myFunctionWithParams(num1, num2) {
  //the parameters are like vars that could be anything
  return num1 + num2; // This is saying, when invoked, do THIS with the parameters
}
var result = myFunctionWithParams(29, 3); //THis is assigning values to the parameters
console.log(result); // This is outputting whatever we told it to do in the above line

/*A Function named calculateTip has already been declared. The Function takes in a parameter called amount and calculates a 20% tip (rounded) of whatever value is passed in. However, as is the Function will not run and nothing will print to the console. To fix this, do the following:
1. Invoke the Function by name
2. The given variable totalBill will be used as the argument
3. Pass in the argument when you call the Function
4. Lastly, make sure the result prints to the console by using console.log()*/

//
/*function calculateTip(amount) {
  return Math.ceil(tip);
}
var totalBill = amount + tip
var tip = amount * 0.2;
console.log(tip + amount);
//need to have something that will take the parameter "amount" and add it to the "totalBill"

var result = calculateTip;
console.log(result);

function sumOfTwo(a, b) {
  return a + b;
}
console.log(sumOfTwo(num1, num2));*/
/*

function multiplyByTwo(param1) {
  return param1 * 2;
}
let arg1 = 15; //I added this bit so it would work here but not needed in asst
console.log(multiplyByTwo(arg1));

/*Write a Function named speakFriend that takes one parameter.
1. In the body of the Function, return the String "Access Denied"
2. Except if the passed in value is equal to "Mellon", then return the String "Enter"
3. Note: The Function has already been invoked for you, using the given variable a as the argument (see the last line of code)*/

/* function speakFriend(a) {
  var a = "john";
  if (a != "Mellon") {
    return "Access Denied";
  } else {
    return "Enter";
  }
}
console.log(speakFriend(a));  */

//JavaScript JS3 - Functions (Pt. 2)
/*

let argument1 = 2;
let argument2 = 7;
function myFunkShun(parameter1, parameter2) {
  //this is inside the function body. THis is where the code goes

  return (returnValue = argument1 + "no dice!"); //IF you want the function to return a value (but what if you don't?)
}
myFunkShun(argument1, argument2); //this statement calls the function. I assume that arguments 1 and 2 are the values of the parameters.
console.log(argument1 * argument2);
//new test

function myCount() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
myCount(); //called/invoked the function
//next!

*/
//questions 11 Just keep looping
/*
function loopUntilX(x) {
  for (let x = 0; x < 10; x++);
  {
    if ((x = 10));
    return x + 2;
  }
}
console.log(loopUntilX(x));

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}*/

//instructor solution, This didn't work either!
/*
function loopUntilX(x) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  return true;
}
console.log(loopUntilX(x));
*/

/*Function: findCircumference

Create a Function named findCircumference that takes in a parameter radius.
• The Function should return the circumference of a circle, given a radius.
• Note: The Function has already been invoked for you, using the given variable a as the argument (see the last line of code)
Tip: The formula to find the circumference of a circle is PI * 2r where r is the radius.
Use Math.PI to properly calculate for PI. 
FOUND ANSWER ON MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/
/*
function findCircumference(radius) {

  //RADIUS was the parameter as it said in the INSTURCTIONS!
  return 2 * Math.PI * radius;
}

console.log(findCircumference(a)); //a is the var
*/

/* Function: checkout

Create a Function named checkout that accepts two parameters named cardBalance and price.
If the price is more than the card balance, return false
Otherwise, return the new card balance after the purchase
Note: The Function has already been invoked for you, using the given variables a and b as the arguments (see the last line of code) */

//create a new function named checkout.
/* I posted

function checkout(cardBalance, price) {  
  if (price > cardBalance) {
    return false;
  } else { 
    return(cardBalance > price) {
  }
  }

//Insturcto posted
function checkout(cardBalance, price){
    if (price > cardBalance) { 
        return false; 
    } else { 
        return cardBalance - price; //I DID THIS!!!!
    }
}

console.log(checkout(a,b,40));
*/
/*Function: isBlue

Create a Function named isBlue.
isBlue will take one parameter
The Function will return true if it is passed any case of the word "blue"
Otherwise, the Function will return false
Invoke the Function, pass in the given variable word as the argument
Print the result to the console, using console.log
The passed value can be "blue" with any of the letters capitalized as well. (i.e."Blue", "bLue", "BLUE", etc…) All forms of the word blue should return true. Use toLowerCase() on the passed value to accomplish this. For example, myVariable.toLowerCase() will convert whatever the variable myVariable contains to all lowercase. */
/*
function isBlue() {
  console.log(isBlue);
  if (isBlue == "blue") {
    return true;
  } else {
    return false;
  }
}
console.log(isBlue.toLowerCase());

Instructor solution
function isBlue(var1){
  return var1.toLowerCase() === "blue";
}
console.log(isBlue(word)); //how the hell would I know any of this?

*/
/*FUnction.returnSum. Create a Function named returnSum that accepts 3 integer parameters.
The parameters are named num1, num2, and num3
In the body of the Function, the sum of the three parameters is returned
Invoke the Function, pass in the given variables a, b, and c as the arguments
Print the result to the console, using console.logSOlved correctly 

function returnSum(num1, num2, num3) {
  return a + b + c;
}
console.log(returnSum(a + b + c));
*/

/*Grocery List Array:
Declare an Array called groceryList with the following three elements, "granola", "milk", and "eggs".*/
/*
var groceryList = ["granola", "milk", "eggs"];
console.log(groceryList);
//Output = (3) ['granola', 'milk', 'eggs']
*/
/*
let myArray = ["apple", "banana", "orange", "hippo"];

console.log(myArray[0]); // Output: "apple"
console.log(myArray[1]); // Output: "banana"
console.log(myArray[3]); // Output: "orange"

console.log(myArray); // Output: ["apple", "banana", "orange"]

// Replace the second element "banana" with "grape"
myArray[2] = "kiwi";
console.log(myArray); // Output: ["apple", "grape", "orange"]

console.log(myArray[myArray.length - 2]);

let numbers = [1, 2, 3, 4, 5];
numbers.length = 4;
console.log(numbers);

/*Given an Array called myList, do the following:
Print the length of myList to the console.
Print the last element of myList to the console, programmatically.
Note: Do not use the index 3 to accomplish this, as in myList[3]. Use the length property to dynamically get the index of the last element, no matter the length of the Array.*/
/*
var myList = [myList];

console.log(myList);

//Inst Sol
console.log(myList.length);

console.log(myList[myList.length - 1]);
*/

/*
//push() adds elements to end. unshift() adds elements to the begining of an array.

var myArray = ["apple", "banana", "orange"];

    myArray.push("pear");
    console.log(myArray); // Output: ["apple", "banana", "orange", "pear"]

    myArray.unshift("lime", "kiwi");
    console.log(myArray); // Output: ["lime", "kiwi", "apple", "banana", "orange", "pear"]
    
// splice() can add, remove, or replace elements: Example of adding   
    
var myArray = ['apple', 'banana', 'orange', 'lime'];

    myArray.splice(1, 0, 'pear', 'kiwi'); // 1 = the index number, 0 = the number of elements to be removed.

    console.log(myArray);  // Output: ['apple', 'pear', 'kiwi', 'banana', 'orange', 'lime']
    
    // splice() can add, remove, or replace elements: Example of removing

    var myArray = ['apple', 'banana', 'orange', 'lime'];

      myArray.splice(2, 1); //first element is index of element to be removed. The second element is the number of elements to be removed
   
      console.log(myArray);  // Output: ['apple', 'banana', 'lime']
    
    */
/*
let myArray = ["apple", "banana", "orange"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let newArray = ["GoatSmeller", "Abercrombie", "apple pan dowdy"];

for (let name of newArray) {
  console.log(name);
}
*/
/* Write a Function to Print the Elements of an Array: Write a Function called printArray that accepts an Array as an argument, and contains a loop that will print each value of the passed in Array.
• Do not edit (or hardcode the change to) the Array in its current state.
• You must edit by using a method of the Array object.
• Note: Arrays are mutable in JavaScript, so you can use a method to add a new name to an Array.
• Hint: You can use the length property to find the length of the Array. */
/*
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let arr1 = [1, 2, 3];
let arr2 = ["dog", "cat", "Rat"];
let newArr = arr2.concat(arr1);

console.log(newArr);
*/

/*
//Write a Function to Join Two Arrays: Write a Function called joinArrays that accepts two Arrays as arguments.
• In the Function body, declare a variable called newArray
• Use an Array method that will join the elements of the two Arrays together and assign that to newArray
• Finally in the body of the Function, return the Array newArray
    Hint: You can use concat() to join two Arrays. (I used AI to write it.)

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(joinArrays(input, staticArray));
*/
/*
let numbers = [3, 25, 4, 12, 5, 2, 6, 11, 21, 5, 1, 15];
numbers.sort();
console.log(numbers);

let values = [3, 25, 4, 12, 5, 2, 6, 11, 21, 5, 1, 15];
values.sort((a, b) => a - b);
values.reverse(); //I added this line in to see what happens
console.log(values);

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.reverse();
console.log(fruits);

// using the sort() method with a Function passed through
let numberrs = [3, 25, 4, 12, 5, 2, 6, 11, 21, 5, 1, 15];
numberrs.sort((a, b) => a - b);
console.log(numberrs); // Output: [1,2,3,4,5,5,6,11,12,15,21,25]

const letters = [];
letters.sort();
const numberators = [];
numberators.sort = (a, b) => a - b;
*/
// Write a Function to Sort an Array: Write a Function called sortArray that accepts an Array as an argument. Within the Function body, use an Array method that will sort a passed in Array alphabetically or numerically. Finally in the body of the Function, return the sorted Array. INST Response to number 15.....

/*
function sortArray(array){
  return array.sort();
}

//Write a Function called reverseArray that accepts an Array as an argument. reverse the Array using an Array method. Return the reversed Array.

function reverseArray(array) {
  return array.reverse();
}

*/

/* 19. Array Fun: Using the given Function named gradList and Array named grads do the following:
Add the names "Beatriz", "Yolanda", "Rizo" to the passed in Array that is referred to as graduates in the Function (it is the parameter).
Then, sort the students from Z-A (in reverse)
Finally, in the Function return the modified Array. */

/*
grads.push("Beatriz", "Yolanda", "Rizo"); 
grads.sort((a, b) => a - b);
grads.reverse();

graduates.push("Beatriz", "Yolanda", "Rizo");
    graduates.sort();
    
    let reverseGrads = graduates.reverse();
    
    return reverseGrads;
} That was a stupid one*/

////
/*
let addToPrint = (num1) => {
  let sum = 0;
  for (let i = 0; i < num1; i++) {
    sum += num1;
  }
  return sum;
};

console.log(addToPrint(4));
/////

//convert arrow function//
function myFunction(a, b) {
  return a + b;
}
//my solve//
let returnSum = (a, b) => {
  return a + b;
};
////

function myFunction(num) {
  return Math.sqrt(num);
}

let findSquareRoot = (num) => expression;
return Math.sqrt(num);
///Converted to 1st is mine. 2nd is inst.
const findSquareRoot = (num) => Math.sqrt(num);
let findSquareRoot = (num) => Math.sqrt(num);
*/

//Convert the following Function myFunction into an arrow function. Refer to the new function as pythagoras.

/*

function myFunction(num1, num2) {
      return Math.sqrt((num1 * num1) + (num2 * num2));
 }
///my solution
 let pythagoras = (num1, num2) => {
  num1*num1;
  num2*num2;
 }
 return Math.sqrt;
//Inst solution
let pythagoras = (num1, num2) => Math.sqrt((num1 * num1) + (num2 * num2));
*/

//Template Literal: Convert the following Function myFunction into an arrow function. Refer to the new function as yourNumber.
/* function myFunction(num) {
  return `Your number is ${num}`;
}

let yourNumber = (num) => `Your number is + a`; // delivers 'your number is a'

let yourNumber = (num) => `Your number is ${a}`; // delivers the correct response
*/
/*
Convert the following Function myFunction into an arrow function. Refer to the new function as monthlyPayment.
 function myFunction(yearlyPayment) {
      let monthly = yearlyPayment / 12;
      return monthly.toFixed(2);
 }

 let monthlyPayment = (yearlyPayment) => yearlyPayment / 12;
  return number(monthly.toFixed(2));
};
var a = 23;
let monthlyPayment = (yearlyPayment) => { //This'n worked thatnks to https://deepai.org/chat
  return (yearlyPayment / 12).toFixed(2); //on this line we get the parameter divided by 12 and then tell it to display to 2 decimal places.
}; 

/*
A More Complex Function:
• Convert the following Function myFunction into an arrow function. 
• Refer to the new function as fancyAlgorithm.

 function myFunction(num1, num2, num3) {
     let value = 0;
     for  (let index = 0; index < num3; index++) {
         value = (value + num2) * num1;
     }
     return value /  (num1 * (num3 * 10));
}
     */
/*

function fancyAlgorithm = (num1, num2, num3) => {
  let value = 0;
  for (let index = 0; index < num3; index++) {
    value = (value + num 2) * num1;
  }
  return value / (num1 * (num3 * 10));
  }
}
function fancyAlgorithm = (num1, num2, num3) => let i = 0; {
  for (let i = 0; i < num3; i++) {
    let value = (i + num 2) * num1;
  }
  return i / (num1 * (num3 * 10));
}

//This one worked thanks to AI. Notice that if there is nothing specific following the =>, use curly braces and give the value informaiton. I think. 
  const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for (let index = 0; index < num3; index++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
};
*/

/*Adding is Multiplying:

Convert the following Function myFunction into an arrow function. Refer to the new function as multiplyByAdding.
function myFunction(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
       result += a;
    }
    return result;
}


Correct response
const multiplyByAdding = (a, b) => {
  let result = 0;
  for (let i = 0; i < b; i++) 
  result += a;{
   return result;
  }
};
*/

/* Revert:
/*
Convert the following Function myFunction into an arrow function. Refer to the new function as revert.
 function myFunction(value){
      return !value; 
      /*

      function revert = value => { //use CONST instead of FUNCTION as in the next working example.)
        return !value;
      };

      const revert = value => { 
        return !value;
    };
//   BUT!!! a simpler way is...
          let revert = (value) => !value; 
*/
/* Exclusive OR:

Convert the following Function myFunction into an arrow function. Refer to the new function as xor.
function myFunction(num1, num2) {
    return num1 ^ num2;
}
    
let xor = (num1, num2) => num1 ^ num2; //easy peasy
*/
