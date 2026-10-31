function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Make your pick: Rock, Paper or Scissors.").toLowerCase().trim();
}
