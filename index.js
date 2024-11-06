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
