console.log('Hello, World!');

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; // array starting with 0 index
  const randomIndex = Math.floor(Math.random() * choices.length); // length is 3, so it generates a number between 0 and 2.
  return choices[randomIndex];
}

console.log(getComputerChoice()); // this will return either "rock", "paper", or "scissors" randomly.

function getHumanChoice() {
  const userInput = prompt("Please enter rock, paper, or scissors:");
  return userInput.toLowerCase();
}

console.log(getHumanChoice()); // this will return the user's input in lowercase.