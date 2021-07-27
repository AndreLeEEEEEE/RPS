function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "Rock";
        case 1: return "Paper";
        default: return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.trim();
    playerSelection = playerSelection[0].toUpperCase() +
            playerSelection.slice(1).toLowerCase();

    let result;
    if (playerSelection === computerSelection) {return "It's a tie";}
    else if (playerSelection === "Rock") {
        result = computerSelection === "Scissors" ?
                "You win!" : "You lose!";
    }
    else if (playerSelection === "Paper") {
        result = computerSelection === "Rock" ?
                "You win!" : "You lose!";
    }
    else if (playerSelection === "Scissors") {
        result = computerSelection === "Paper" ?
                "You win!" : "you lose!";
    }
    else {return "Invalid";}

    if (result.includes("win")) {
        return `${result} ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `${result} ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt("Make your move");
const computerSelection = computerPlay();