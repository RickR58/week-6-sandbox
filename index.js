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
Use Math.PI to properly calculate for PI. */

function findCircumference() {
  return Math.PI;
}

console.log(findCircumference(a));
