// cache dom.. means storing something for future use

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div_r = document.getElementById("r");
const rock_div_p = document.getElementById("p");
const rock_div_s = document.getElementById("s");

// get computer choioce

function getComp_choioce() {
  const choioce = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choioce[randomNumber];
}

function convertToWord(later) {
  if (later === "r") return "Rock ";
  if (later === "p") return "Paper ";
  if (later === "s") return "Scissors ";
  return "Scissors";
}

function win(userChoice, compChoisce) {
  const smallostuserWord = "user".fontsize(3).sup();
  const smallostusercampw = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(userChoice)} ${smallostuserWord}
     beats  
    ${convertToWord(compChoisce)} ${smallostusercampw}
    . you Win! &#128525; `;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 3000);
  // console.log(user);
  //  console.log(computer);
}

function lose(userChoice, compChoisce) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const smallostuserWord = "user".fontsize(3).sup();
  const smallostusercampw = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallostuserWord}
       loses to 
      ${convertToWord(compChoisce)} ${smallostusercampw}
      . you lost.... ! &#128553;  &#128582;`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 3000);
}

function draw(userChoice, compChoisce) {
  const smallostuserWord = "user".fontsize(3).sup();
  const smallostusercampw = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallostuserWord}
     equals  
    ${convertToWord(compChoisce)} ${smallostusercampw}
    . its a draw! &#128581; `;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 3000);
}

console.log(getComp_choioce());

function game(userChoice) {
  const compChoisce = getComp_choioce();

  switch (userChoice + compChoisce) {
    case "rp":
    case "pr":
    case "sp":
      win(userChoice, compChoisce);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoisce);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoisce);
      break;
  }

  // console.log("user choice => " + userChoice);
  // console.log("computer choice =>" + compChoisce);
}

//game("b");

function main() {
  rock_div_r.addEventListener("click", () => game("r"));
  rock_div_p.addEventListener("click", () => game("p"));
  rock_div_s.addEventListener("click", () => game("s"));
}

// run all

main();
