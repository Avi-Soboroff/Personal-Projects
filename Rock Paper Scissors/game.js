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

//helper function to display the results of each round
function getResults(message) {
    const results = document.querySelector("#results"); //gets results id from the html doc
    const p = document.createElement("p");
    p.textContent = message;
    results.appendChild(p);
}

//helper function that will assist in clearing the results every round
function removeResults() {
    const words = document.querySelector("#results");
    words.replaceChildren();
}

//function to determine if game is over
function isGameOver(yourScore, computerScore) {
    if (yourScore >= 5 || computerScore >= 5) {
        return true;
    }
    return false;
}

//function to display the winning page
function winningPage() {
    const buttons = document.querySelector(".gamepage");
    buttons.replaceChildren();
}

//function to play the game
let humanScore = 0;
let cpuScore = 0;
//function to play a round of rock, paper, scissors
function playRound(humanChoice, cpuChoice) {
    let humanChoiceLower = humanChoice.toLowerCase(); //converts the human's choice to lowercase
    let cpuChoiceLower = cpuChoice.toLowerCase(); //converts the CPU's choice to lowercase
    //first check if its a tie
    removeResults();
    if (humanChoice === cpuChoice) {
        getResults(`It's a tie! You both picked ${humanChoice}.`);
    }
    else if ((humanChoice === "rock" && cpuChoice === "scissors") || 
            (humanChoice === "paper" && cpuChoice === "rock") || 
            (humanChoice === "scissors" && cpuChoice === "paper")) {
        humanScore++; //if the human wins, increment the human's score
        getResults(`You win! ${humanChoice} beats ${cpuChoice}.`);
    }
    else {
        cpuScore++; //if the CPU wins, increment the CPU's score
        getResults(`You lose! ${cpuChoice} beats ${humanChoice}.`);
    }
    getResults(`Score: You: ${humanScore}; Computer: ${cpuScore}`);
    //now check and see if the gme is over
    if (isGameOver(humanScore, cpuScore)) {
        winningPage();
        getResults(`Final Score: ${humanChoice}: ${humanScore}-${cpuScore}: ${cpuChoice}`);
        if (humanScore > cpuScore) {
            getResults("You win!!!");
        }
        else {
            getResults("You lose :( Womp Womp");
        }
    }
}

//setting up the game buttons and gameplay
let humanSelect = "";
let cpuSelect = "";
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
//making the human choice: Rock
rock.addEventListener("click", () => { 
    humanSelect = getHumanChoice("Rock");
    cpuSelect = getCPUChoice();
    playRound(humanSelect, cpuSelect);
});
//making the human choice: paper
paper.addEventListener("click", () => {
    humanSelect = getHumanChoice("Paper");
    cpuSelect = getCPUChoice();
    playRound(humanSelect, cpuSelect);
});
//making the human choice: scissors
scissors.addEventListener("click", () => {
    humanSelect = getHumanChoice("Scissors");
    cpuSelect = getCPUChoice();
    playRound(humanSelect, cpuSelect);
});