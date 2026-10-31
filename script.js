let humanScore = computerScore = 0;

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Make your pick: Rock, Paper or Scissors.").toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You pick ${humanChoice}`);
    console.log(`Computer picks ${computerChoice}`);
    alert(`You pick ${humanChoice}\nComputer picks ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both are ${humanChoice}`);
        alert(`It's a tie! Both are ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose... Paper beats Rock.");
        alert("You lose... Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        alert("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        alert("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose... Scissors beat Paper.");
        alert("You lose... Scissors beat Paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose... Rock beats Scissors.");
        alert("You lose... Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        alert("You win! Scissors beat Paper.");
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    alert(`Score\nYour points: ${humanScore}\nComputer points: ${computerScore}`);
    console.log(`Score\nYour points: ${humanScore}\nComputer points: ${computerScore}`);
}

playGame();

