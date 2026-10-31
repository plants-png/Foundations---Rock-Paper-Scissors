let humanScore = computerScore = 0;

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Make your pick: Rock, Paper or Scissors.").toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both are ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose... Paper beats Rock.");
        computerChoice++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanChoice++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanChoice++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose... Scissors beat Paper.");
        computerChoice++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose... Rock beats Scissors.");
        computerChoice++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper.");
        humanChoice++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
