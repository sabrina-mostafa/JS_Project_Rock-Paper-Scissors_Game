let choices = document.querySelectorAll(".choice");
let resultMsg = document.querySelector(".msg");

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Utility function to animate score update
function animateScore(element) {
  element.classList.add("score-update");
  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("score-update");
    },
    { once: true }
  );
}

let showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    user_score.textContent = userScore;
    animateScore(user_score); // Animate on update

    resultMsg.textContent = `You Win! Your ${userChoice} beats ${comChoice}`;
    resultMsg.style.backgroundColor = "green";
  } else {
    compScore++;
    comp_score.textContent = compScore;
    animateScore(comp_score); // Animate on update

    resultMsg.textContent = `You Lose! ${comChoice} beats your ${userChoice}`;
    resultMsg.style.backgroundColor = "red";
  }
};

let drawGame = () => {
  resultMsg.textContent = "Game was Draw, Play again";
  resultMsg.style.backgroundColor = "#081b31";
};

let genComChoice = () => {
  let choiceArray = ["rock", "paper", "scissor"];
  let ranIndex = Math.floor(Math.random() * 3);
  let comChoice = choiceArray[ranIndex];
  return comChoice;
};

let playGame = (userChoice) => {
  const comChoice = genComChoice();

  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "rock" ? true : false;
    } else {
      userWin = comChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

// main code - starts from here
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
