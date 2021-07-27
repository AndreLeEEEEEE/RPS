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

function game() {  // First to 5 points
    let playerScore = computerScore = 0;
    let round = 1;
    while (playerScore + computerScore < 5) {
        const playerSelection = prompt("Make your move");
        const computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);
        if (results.includes("win")) {++playerScore;}
        else if (results.includes("lose")) {++computerScore;}
        else if (results.includes("tie")) {}
        else {continue;}
        console.log(`Round ${round}: ${results}`);
        ++round;
    }
    console.log(`Scores (You vs Com): ${playerScore} - ${computerScore}`);
    if (playerScore > computerScore) {console.log("You won RPS!)");}
    else if (computerScore > playerScore) {console.log("You lost RPS?!");}
    else {console.log("You and the computer tied.");}
}

game();