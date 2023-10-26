"use strict";
// Variable defined as uname for prompt to get users name
let uname;
do {
    uname = prompt("What's your name");
} while (!uname); // Keep prompting until a non-empty input is received
// Made new variable named length and assigned it the value of the length of the user's name. The uname.length property returns the number of characters in the uname string, and that gets stored in the length variable.
let length = uname.length;
// For loop with the variable char to represent character length to make sure the user enters a name as lon as field is blank it will keep asking
for (let char = 0; char < length; char++) {
    console.log(uname[char]);
}
alert(uname + " Please answer the following questions yes/y or no/n.");
// Make a list of questions I want to ask user and store them in an array.
const questions = [
    "Do I like Anime?",
    "Am I over the age of 18?",
    "Did I graduate from high school?",
    "Do I have pets?",
    "Do I like Scifi books?"
];

// THIS IS A list of correct answers to those questions.
let answers = ["yes", "yes", "yes", "yes", "yes"];
// This is an empty Variable/Array where user inpup is stored 
let userAnswers = [];

// This is a For loop to ask all questions one by one
for (let i = 0; i < questions.length; i++) {
    // This prompts the user and waits for their input
    let userAnswer = prompt(questions[i]).toLowerCase(); // I change the users answer to lowercase to make it easier to check if it's right.
    userAnswers.push(userAnswer); // I then put the user's answer in my list of answers under the userAnswers Variable.
}

// New for loop to check users answers
for (let i = 0; i < questions.length; i++) {
    const normalizedAnswer = answers[i].toLowerCase(); // Pull the correct answer for each question.
    // Now I compare the users answer with the correct answer. If the users answer is the same as the correct answer, the code tells them it's correct.
    if (userAnswers[i] === normalizedAnswer || (userAnswers[i] === 'y' && normalizedAnswer === 'yes') || (userAnswers[i] === 'n' && normalizedAnswer === 'no')) {
        // console.log("Question " + (i + 1) + ": Correct!");
        alert("Question " + (i + 1) + ": Correct!");
    } else {
        // If the users answer is different from the correct answer, the loop will tell them Sorry Dummy!!! and ask them to try again.
        // console.log("Question " + (i + 1) + ": Sorry Dummy!!! Try again.");
        alert("Question " + (i + 1) + ": Sorry Dummy!!! Your wrong.");
    }
}
// Function for guessing Game
function letsPlayaGame() {
    const maxGuesses = 4;
    let correctNumber = 21; // the correct number
  
    alert("Let's play a game! You have 4 attempts to guess the correct number between 1 and 50.");
  
    for (let attempt = 1; attempt <= maxGuesses; attempt++) {
      const userGuess = parseInt(prompt("Guess the number:"));
  
      if (userGuess === correctNumber) {
        alert("Thats crazy. You guessed the right number.");
        return; // Exit the game
      } else if (userGuess < correctNumber) {
        alert("Too low! You can do better.");
      } else {
        alert("Too high! You can do better.");
      }
    }
  
    alert("Sorry, you've used all your turns. The correct number was " + correctNumber);
  }
  
  // Add event listeners to each submit button
  for (let i = 1; i <= questions.length; i++) {
    const submitButton = document.getElementById(`submit${i}`);
    submitButton.addEventListener("click", function () {
      const userInput = document.getElementById(`userInput${i}`).value.toLowerCase();
      const messageElement = document.getElementById(`q${i}`);
  
      if (isAnswerCorrect(userInput, i - 1)) {
        messageElement.textContent = "Correct!";
      } else {
        messageElement.textContent = "Wrong answer. Try again.";
      }
    });
  }
  
  // Add an event listener for the 6th question
  const submitGuessButton = document.getElementById("submitGuess");
  submitGuessButton.addEventListener("click", function () {
      playGuessingGame();
    });
    
   
// Welcome message
alert("Hey," + uname + "Thanks for comming to my page.")

