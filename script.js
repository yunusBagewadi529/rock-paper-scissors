let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDiv = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];

const emojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  userChoiceDisplay.textContent = emojis[userChoice];
  computerChoiceDisplay.textContent = emojis[computerChoice];

  const result = getResult(userChoice, computerChoice);

  if (result === "win") {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultDiv.textContent = `You Win! ${capitalize(
      userChoice
    )} beats ${capitalize(computerChoice)}.`;
  } else if (result === "lose") {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = `You Lose! ${capitalize(
      computerChoice
    )} beats ${capitalize(userChoice)}.`;
  } else {
    resultDiv.textContent = `It's a Draw! You both chose ${capitalize(
      userChoice
    )}.`;
  }
}
