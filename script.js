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
                "You win!" : "You lose!";
    }
    else {return "Invalid";}

    if (result.includes("win")) {
        return `${result} ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `${result} ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    function printResults(results) {
        if (results.includes("win")) {++playerScore;}
        else if (results.includes("lose")) {++computerScore;}
        else {}
        
        ++roundNum;
        let scoreBoard = document.querySelector("#scoreBoard");
        scoreBoard.textContent = `${}`;
        let roundResults = document.querySelector("#roundResults");
        roundResults.textContent =  `Round ${roundNum}: ${results}`;
    }

    let playerScore = computerScore = roundNum = 0;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const computerSelection = computerPlay();
            printResults(playRound(button.id, computerSelection));
        });
    });

    if (playerScore === 5 || computerScore === 5) {
        console.log(`Scores (You vs Com): ${playerScore} - ${computerScore}`);
        if (playerScore > computerScore) {console.log("You won RPS!)");}
        else if (computerScore > playerScore) {console.log("You lost RPS?!");}
        else {console.log("You and the computer tied.");}
    }
    playerScore.onchange()
}

game();