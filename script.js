function getComputerChoice() {
  let num = Math.random();
  if (num < 0.34)  return "rock";
  else if (num < 0.67) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Choose from rock, paper, scissors", "").toLowerCase();

}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    console.log("Tie!");
  }
  else if ( (humanChoice === "rock" && computerChoice === "scissors" ) || (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper")){
    humanScore += 1;
    console.log("You Won!");
  }
  else{
    computerScore += 1;
    console.log("You Loose!");
  }
}
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
*/
let n = 6;
while(n > 0){
n -= 1;
playRound(getHumanChoice(), getComputerChoice());

console.log("Human Score : " + humanScore);
console.log("Computer Score : " + computerScore);

}

