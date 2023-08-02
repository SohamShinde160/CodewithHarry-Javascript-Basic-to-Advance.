// exercise 1
// write a javascript program to generate a random no. and store it in a variable
// the program then takes input from the user to tell them whether the guess was correct > or <
//  greater or lesser than the original number


// math.random is a function which generates random number (by default 0 to 1) in float
// inorder to want number in integer use math.floor (which removes value after decimal)
//  now if you want number in range of 0 to 9 (multiply with *10)
//  now if you want number in range of 0 to 10 (multiply with *11)
//  now if you want number in range of 0 to 99 (multiply with *100)
//  now if you want number in range of 0 to 100 (multiply with *101)
//  now if you want number in range of 1 to 10 (multiply with *10) + 1
//  now if you want number in range of 1 to 100 (multiply with *100) + 1

//  now if you want number in particular range such as( 15 to 25)
//  math.floor (math.random()*(maxNo. - minNo.)) + minNo.

//  now if you want number in range (15 to 25 & include both the no.)
//  math.floor (math.random()*(maxNo. - minNo. + 1)) + minNo.

let random = Math.floor(Math.random() * 101);  // Generates a random number between 0 and 100
console.log(random);  // Outputs the random number to the console
let chances = 0;  // Variable to keep track of the number of attempts
let input;

while (input !== random) {  // Loop continues until the input matches the random number
  input = Number.parseInt(prompt("Enter a number between 0 and 100"));  // Prompts the user for a number

  if (input !== random) {  // Checks if the input is incorrect
    console.log("Wrong! Try again.");
  }

  if (random > input) {  // Provides feedback if the random number is greater than the input
    console.log("The number is bigger than " + input);
  } else if (random < input) {  // Provides feedback if the random number is smaller than the input
    console.log("The number is smaller than " + input);
  }

  chances += 1;  // Increases the number of attempts
}

console.log("Congrats Champ!");
console.log(`You scored ${100 - chances} points.`);  // Outputs the score based on the number of attempts



// or
let a = Math.floor(((Math.random()*100)+1))
    let inputt = prompt('Guess the number')
  
            while(a !== inputt){
                if(a == inputt){
                    break;
                } 
                else if(inputt>a){
                    alert("You have guessed greater number")
                    inputt = prompt('Guess the number')
                }
                else{
                   alert("You have guessed lower number")
                   inputt = prompt('Guess the number')
                }
           
                
            }
alert("Guessed Number is correct")
            

