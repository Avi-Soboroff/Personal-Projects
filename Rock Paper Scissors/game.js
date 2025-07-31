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