

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

//function to play the game
function playGame() {
    let humanScore = 0;
    let cpuScore = 0;
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
    //loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        let humanChoice = getHumanChoice(prompt("Enter your choice: rock, paper, or scissors")); //gets the human's choice
        if (!humanChoice) {
            console.log("Game cancelled.");
            return; //if the user cancels, exit the game
        }
        let cpuChoice = getCPUChoice(); //gets the CPU's choice
        playRound(humanChoice, cpuChoice); //plays a round with the choices
        console.log(`Score: You ${humanScore} - CPU ${cpuScore}`); //prints the score after each round
    }
}

playGame();