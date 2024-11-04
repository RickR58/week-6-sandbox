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

/*let fullName = "Mary" + "  " + "Beige";
let gradesArray = [100, 79, 80, 90, 65];

function lowestGrade(gradeBook) {
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
