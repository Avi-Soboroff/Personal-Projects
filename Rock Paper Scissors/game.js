let humanScore = 0;
let cpuScore = 0;
let humanChoice = prompt("Enter your choice: rock, paper, or scissors"); //prompts the user for their choice

//function to get the computers choice for rock, paper, or scissors
function getCPUChoice() {
    let choice = "";
    let number = Math.floor(Math.random() * 3); //randomizes a number between 0 and 2
    if (number === 0) {
        choice = "rock"; //if the number is 0, the choice is rock
    }
    else if (number === 1) {
        choice = "paper"; //if the number is 1, the choice is paper
    }
    else {
        choice = "scissors"; //if the number is 2, the choice is scissors
    }
    return choice; //returns the choice
}

//function to get the human's choice and validate it
function getHumanChoice(userChoice) {
    userChoice = userChoice.toLowerCase(); //converts the input to lowercase
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice; //if the input is valid, returns the choice
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors."); //if the input is invalid, alerts the user
        return getHumanChoice(prompt("Enter your choice: rock, paper, or scissors")); //re-prompts for a valid choice
    }
} 

//function to play a round of rock, paper, scissors
function playRound(humanChoice, cpuChoice) {
    let humanChoiceLower = humanChoice.toLowerCase(); //converts the human's choice to lowercase
    let cpuChoiceLower = cpuChoice.toLowerCase(); //converts the CPU's choice to lowercase
    //first check if its a tie
    if (humanChoice === cpuChoice) {
        console.log(`It's a tie! You both picked ${humanChoice}.`);
    }
    else if ((humanChoice === "rock" && cpuChoice === "scissors") || 
            (humanChoice === "paper" && cpuChoice === "rock") || 
            (humanChoice === "scissors" && cpuChoice === "paper")) {
        humanScore++; //if the human wins, increment the human's score
        console.log(`You win! ${humanChoice} beats ${cpuChoice}.`);
    } else {
        cpuScore++; //if the CPU wins, increment the CPU's score
        console.log(`You lose! ${cpuChoice} beats ${humanChoice}.`);
    }
}