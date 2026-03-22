// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]; // array starting with 0 index
  const randomIndex = Math.floor(Math.random() * choices.length); // length is 3, so it generates a number between 0 and 2.
  return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
  const userInput = prompt("Please enter rock, paper, or scissors:");
  return userInput;
} 

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {

  // make humanChoice and computerChoice case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // write the logic to determine the winner of the round
    // Increment the humanScore or computerScore variable based on the round winner
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice} and ${computerChoice}`);
  
  } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
              humanScore++; // increment human score
              console.log(`You win! ${humanChoice} beats ${computerChoice}`);

  } else {
    computerScore++; // increment computer score
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


