  //what I did____________________ var (i = 2) for (let i = 0; i <= 99; i++) {
    console.log(i * 3); if(i % 3 <= 99){ 

    }  
    //instructor_________________________ 


    for(var i = 0; i <= 99; i++){ if(i % 3=== 0)
      { console.log(i); } } 
    
    
    //__________________________
  </body>
</html>
//what I did____________________ 

for (let i = 0; i <= 99; i++) { console.log(i *3); 
  if(i % 3 <= 99){ } } 

// instructor_________________________ 

for(var i = 0; i <= 99; i++){ 
  if(i % 3 === 0)
  { console.log(i); 

} 
} 

//__________________________
/*Fill Up A Bowl With Rice:

Using the supplied variables requiredCupsOfRice and currentCupsOfRice, create a loop of your choice that will add cups of rice to a bowl.
The value of currentCupsOfRice has been declared and initialized to zero (0), and will represent the current number of cups of rice in the bowl.
For every iteration, increment currentCupsOfRice by one to indicate that you have added a cup of rice to the bowl.
Each time a cup of rice is added, print "The bowl contains " + currentCupsOfRice + " cups of rice."
Once the number of cups required has been reached, print "We have enough rice!"
Note: we don't need to know if the bowl is empty.*/

/* for(var currentCupsOfRice = 1; currentCupsOfRice <= 5; currentCupsOfRice++) {

  if(currentCupsOfRice <= 5){
console.log("The bowl contains " + currentCupsOfRice + " cups of rice."); 
      if (currentCupsOfRice & 0){
          console.log("We have enough rice!");
      }
  }
}//final output
__________________________________try this next */

/* for(var requiredCupsOfRice = 1; requiredCupsOfRice <= 5; requiredCupsOfRice++) {

  if(currentCupsOfRice <= 5){
console.log("The bowl contains " + currentCupsOfRice + " cups of rice."); 
      if (currentCupsOfRice & 0){
          console.log("We have enough rice!");
      }
  }
}//final output*/

/*for(var currentCupsOfRice = 1; currentCupsOfRice <= 5; currentCupsOfRice++) {

  if (currentCupsOfRice === 0){
      continue;
  }
console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");
if (currentCupsOfRice === requiredCupsOfRice) {
  console.log("We have enough rice!");
}
}*/

/* Let's play a Game:   This is an advanced problem!

Using a for loop, and the two already declared variables points and pointsReset, create a game.

Rules of this Game:
The game will consist of 100 turns.
On an even turn (if the number of turns is even), 5 points are added to your score.
On an odd turn (if the number of turns is odd), you gain 3 points instead.
If ever your score is equal to 125, your points total will reset back down to 25 points. This will only be allowed to happen once (use the variable pointsReset to keep track of this).
The game will run as long as both of the following two conditions are true:
        1. The game has made it through 100 turns or less
        2. You reach 290 points or more, whichever comes first.*/

//var points= 0
//var pointsReset = false;

//determine values. Turns response will be 0-98. Scores alternate between adding 5 (for even) and 3 (for odd)

/* for (let points = 0; i <= 10; i++) {

console.log(("Turns: ") + (turnNumber) + (" Score: ") + (score));



//This section will check to see if score is >= 125 and reset the score to 25 ONCE.
if (score >= 125) {
  pointsReset = 25;
  console.log(pointsReset);
}
//THEN
//Game Ends:  This section will determine if BOTH are true: <= 100 and >=290. And then tell it to stop(?)*/

for (let points = 0; points >= 290; ) { 
	for (let turns = 0; turns <= 100; turns++ ) { 

		If (points % 2 === 0, points + 5){
			else (points + 3)
		}
	console.log(("Turns: ") + (turnNumber) + (" Score: ") + (score));
}
}