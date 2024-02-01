const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScoreValue = document.querySelector("#userScore");
const computerScoreValue = document.querySelector("#computerScore");
const gameScreen = document.querySelector(".game_screen");
const resultScreen = document.querySelector(".result_screen");
const ruleButton = document.querySelector(".rule_btn");
const ruleWrapper = document.querySelector(".rule_wrapper");
const ruleBoxCloseButton = document.querySelector(".close_btn");
const playAgain = document.querySelector("#play");
const nextButton = document.querySelector("#next_btn");
const userPick = document.querySelector("#user");
const computerPick = document.querySelector("#computer");
const resultText = document.querySelector("#winner");
const userChoiceImage = document.querySelector("#userPickImage");
const computerChoiceImage = document.querySelector("#computerChoiceImage");
const userwiningIndicator = document.querySelector("#userwiningIndicator");
const computerwiningIndicator = document.querySelector(
  "#computerwiningIndicator"
);

let userChoice;
let computerChoice;

let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;

userScoreValue.textContent = userScore;
computerScoreValue.textContent = computerScore;

const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
};

const reset = () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";

  userPick.classList.remove(`${userChoice}`);
  userChoiceImage.src = "";

  computerChoiceImage.src = "";
  computerPick.classList.remove(`${computerChoice}`);

  playAgain.textContent = "PLAY AGAIN";
  userChoice = "";
  computerChoice = "";

  userwiningIndicator.style.display = "none";
  computerwiningIndicator.style.display = "none";
};

const userWins = () => {
  userScore++;
  localStorage.setItem("userScore", `${userScore}`);
  userScoreValue.textContent = userScore;
  nextButton.style.display = "flex";
  resultText.textContent = "YOU WIN";
  userwiningIndicator.style.display = "flex";
};

const tieUp = () => {
  resultText.textContent = "TIE UP";
  playAgain.textContent = "REPLAY";
};

const computerWins = () => {
  computerScore++;
  localStorage.setItem("computerScore", `${computerScore}`);
  computerScoreValue.textContent = computerScore;
  nextButton.style.display = "none";
  resultText.textContent = "YOU LOST";
  computerwiningIndicator.style.display = "flex";
};

window.onload = function () {
  reset();
};

playAgain.addEventListener("click", () => {
  reset();
});

let isRuleBoxOpen = true;
ruleButton.addEventListener("click", () => {
  if (!isRuleBoxOpen) {
    ruleWrapper.style.display = "flex";
  }
});

ruleBoxCloseButton.addEventListener("click", () => {
  ruleWrapper.style.display = "none";
  isRuleBoxOpen = false;
});

rock.addEventListener("click", () => {
  userChoice = rock.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `${userChoice}.png`;

  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "rock" && computerChoice === "scissors") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins();
  }
});

paper.addEventListener("click", () => {
  userChoice = paper.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `${userChoice}.png`;

  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "paper" && computerChoice === "rock") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins();
  }
});

scissors.addEventListener("click", () => {
  userChoice = scissors.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `${userChoice}.png`;

  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "scissors" && computerChoice === "paper") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins;
  }
});
